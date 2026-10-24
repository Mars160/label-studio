"""HTTP regression tests for the deploy nginx config and the subpath entrypoint.

The tests render ``deploy/default.conf`` through
``deploy/docker-entrypoint.d/common/10-configure-nginx.sh`` and talk to a real
nginx process. Run them inside the image that ships nginx, with the repository
mounted read-only::

    docker run --rm --network none -v "$PWD":/label-studio:ro \
        --entrypoint python3 docker.io/mars160/label-studio:latest \
        -m unittest discover -s /label-studio/deploy/tests -t /label-studio/deploy/tests -v

The fake app/storage servers below replace the Django upstream and the object
storage origin, so every route is exercised end to end without external access.
"""

import collections
import contextlib
import http.client
import http.server
import os
import shutil
import socket
import subprocess
import tempfile
import threading
import time
import unittest
from pathlib import Path

DEPLOY = Path(__file__).resolve().parents[1]
ENTRYPOINT = DEPLOY / 'docker-entrypoint.d/common/10-configure-nginx.sh'
FAVICON = b'fixture-favicon'
STATIC_JS = 'console.log("fixture");\n'

Result = collections.namedtuple('Result', 'status location headers body')
Nginx = collections.namedtuple('Nginx', 'port config')


def free_port():
    with socket.socket() as listener:
        listener.bind(('127.0.0.1', 0))
        return listener.getsockname()[1]


class _QuietHandler(http.server.BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


class _UpstreamHandler(_QuietHandler):
    """Stands in for the Django app and emits X-Accel-Redirect like sendfile does."""

    def do_GET(self):
        self.send_response(200)
        self.send_header(
            'X-Accel-Redirect', f'{self.server.x_accel_prefix}/file_download/{self.server.x_accel_target}'
        )
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()


class _OriginHandler(_QuietHandler):
    """Stands in for object storage: serves files plus one external redirect."""

    def do_GET(self):
        path = self.path.split('?', 1)[0]
        if path == '/redirect.txt':
            self.send_response(302)
            self.send_header('Location', f'http://127.0.0.1:{self.server.server_address[1]}/final.txt')
            self.end_headers()
            return
        body = f'origin:{path}'.encode()
        self.send_response(200)
        self.send_header('Content-Type', 'text/html' if path.endswith('.html') else 'application/octet-stream')
        self.send_header('Content-Disposition', 'attachment; filename="file.bin"')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)


@unittest.skipUnless(shutil.which('nginx'), 'nginx is required for HTTP regression tests')
class NginxSubpathTests(unittest.TestCase):
    def setUp(self):
        self.servers = []
        self.addCleanup(self.stop_servers)

    def stop_servers(self):
        for server in self.servers:
            server.shutdown()
            server.server_close()

    def start_server(self, handler):
        server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        self.servers.append(server)
        return server

    def render(self, base, host, app_host='127.0.0.1:8000'):
        """Render the entrypoint script into ``base``; return (process, port, config path)."""
        port = free_port()
        assets = base / 'assets'
        (assets / 'images').mkdir(parents=True)
        (assets / 'images' / 'favicon.ico').write_bytes(FAVICON)
        (assets / 'app.js').write_text(STATIC_JS)
        # nginx workers run as an unprivileged user, so the temp tree must be traversable.
        base.chmod(0o755)
        assets.chmod(0o755)

        config = (DEPLOY / 'default.conf').read_text()
        config = config.replace('listen      8085;', f'listen      {port};')
        config = config.replace('/tmp/nginx.pid', str(base / 'nginx.pid'))
        # static_build is a frontend build artifact and is absent from a source checkout.
        config = config.replace('/label-studio/label_studio/core/static_build/', f'{assets}/')
        # Point the app proxy at the fake upstream before the entrypoint rewrites hosts.
        config = config.replace('proxy_pass http://localhost:8000/;', f'proxy_pass http://{app_host}/;')
        template = base / 'template.conf'
        template.write_text(config)

        resolver = base / 'resolver'
        resolver.write_text('nameserver 127.0.0.1\n')
        script = base / 'configure.sh'
        script.write_text(
            ENTRYPOINT.read_text()
            .replace('/etc/nginx/nginx.conf', str(template))
            .replace('/etc/resolv.conf', str(resolver))
        )
        env = {
            **os.environ,
            'OPT_DIR': str(base),
            'LABEL_STUDIO_HOST': host,
            'APP_HOST': app_host,
            'NGINX_SSL_CERT': '',
        }
        process = subprocess.run(
            ['sh', '-c', 'exec 3>&1; exec sh "$1"', 'sh', str(script)],
            env=env,
            capture_output=True,
            text=True,
        )
        return process, port, base / 'nginx/nginx.conf'

    @contextlib.contextmanager
    def run_nginx(self, host, app_host='127.0.0.1:8000'):
        with tempfile.TemporaryDirectory() as directory:
            base = Path(directory)
            rendered, port, generated = self.render(base, host, app_host)
            self.assertEqual(rendered.returncode, 0, f'{rendered.stdout}\n{rendered.stderr}')
            checked = subprocess.run(['nginx', '-e', '/dev/stderr', '-t', '-c', str(generated)], capture_output=True)
            self.assertEqual(checked.returncode, 0, checked.stderr.decode())
            with tempfile.TemporaryFile() as log:
                process = subprocess.Popen(
                    ['nginx', '-e', '/dev/stderr', '-c', str(generated)], stdout=log, stderr=log
                )
                try:
                    self.wait_until_listening(process, port, log)
                    yield Nginx(port, generated.read_text())
                finally:
                    process.terminate()
                    process.wait(timeout=5)

    def wait_until_listening(self, process, port, log):
        for _ in range(100):
            try:
                with socket.create_connection(('127.0.0.1', port), timeout=0.1):
                    return
            except OSError:
                if process.poll() is not None:
                    log.seek(0)
                    self.fail(log.read().decode())
                time.sleep(0.02)
        self.fail('nginx did not start')

    def request(self, port, path):
        connection = http.client.HTTPConnection('127.0.0.1', port, timeout=3)
        try:
            connection.request('GET', path)
            response = connection.getresponse()
            headers = {key.lower(): value for key, value in response.getheaders()}
            return Result(response.status, response.getheader('Location'), headers, response.read())
        finally:
            connection.close()

    def check_routes(self, port, routes):
        for path, status, location in routes:
            with self.subTest(path=path):
                result = self.request(port, path)
                self.assertEqual(result.status, status)
                self.assertEqual(result.location, location)

    def test_root_deployment_still_proxies(self):
        # No app is running: 502 proves the request reached proxy_pass, not index.html.
        for host in ('', 'https://example.org', 'https://example.org/'):
            with self.subTest(host=host), self.run_nginx(host) as nginx:
                self.check_routes(nginx.port, [('/', 502, None)])
                self.assertIn(b'502 Bad Gateway', self.request(nginx.port, '/').body)
                self.assertEqual(self.request(nginx.port, '/favicon.ico').body, FAVICON)
                self.assertEqual(self.request(nginx.port, '/static/app.js').body, STATIC_JS.encode())
                self.assertEqual(self.request(nginx.port, '/nginx_health').status, 200)

    def test_subpath_routes(self):
        for host in ('https://example.org/ls', 'https://example.org/ls/'):
            with self.subTest(host=host), self.run_nginx(host) as nginx:
                self.check_routes(
                    nginx.port,
                    [
                        ('/', 302, '/ls/'),
                        ('/?next=1', 302, '/ls/?next=1'),
                        ('/ls', 302, '/ls/'),
                        ('/ls/', 502, None),
                        # Everything outside the subpath must 404, including the
                        # unprefixed favicon and static aliases.
                        ('/outside', 404, None),
                        ('/favicon.ico', 404, None),
                        ('/static/app.js', 404, None),
                        ('/nginx_health', 404, None),
                    ],
                )
                failure = self.request(nginx.port, '/ls/')
                self.assertEqual(failure.status, 502)
                self.assertIn(b'502 Bad Gateway', failure.body)
                self.assertEqual(self.request(nginx.port, '/ls/favicon.ico').body, FAVICON)
                self.assertEqual(self.request(nginx.port, '/ls/static/app.js').body, STATIC_JS.encode())
                self.assertEqual(self.request(nginx.port, '/ls/nginx_health').status, 200)

    def test_nested_subpath(self):
        with self.run_nginx('https://example.org/tools/ls') as nginx:
            self.check_routes(
                nginx.port,
                [
                    ('/', 302, '/tools/ls/'),
                    ('/tools/ls', 302, '/tools/ls/'),
                    ('/tools/ls/', 502, None),
                    ('/tools/ls/favicon.ico', 200, None),
                    ('/tools/ls/static/app.js', 200, None),
                    ('/tools', 404, None),
                    ('/ls/favicon.ico', 404, None),
                ],
            )

    def test_deeply_nested_subpath(self):
        with self.run_nginx('https://example.org/a/b/c') as nginx:
            self.check_routes(
                nginx.port,
                [
                    ('/', 302, '/a/b/c/'),
                    ('/a/b/c', 302, '/a/b/c/'),
                    ('/a/b/c/', 502, None),
                    ('/a/b/c/favicon.ico', 200, None),
                    ('/a/b', 404, None),
                ],
            )

    def test_generated_config_uses_builtin_errors_and_subpath_locations(self):
        with self.run_nginx('https://example.org/ls') as nginx:
            self.assertNotIn('error_page   500', nginx.config)
            self.assertNotIn('location = /50x.html', nginx.config)
            self.assertIn('location = /ls/favicon.ico', nginx.config)
            self.assertIn('location ~ ^/(?:ls/)?file_download/', nginx.config)
            self.assertIn('error_page 301 302 307 = @handle_redirect;', nginx.config)

    def test_rejects_unsupported_subpath_characters(self):
        for host in ('https://example.org/ls;x', 'https://example.org/ls x', 'https://example.org/ls|x'):
            with self.subTest(host=host), tempfile.TemporaryDirectory() as directory:
                base = Path(directory)
                rendered, _, generated = self.render(base, host)
                self.assertNotEqual(rendered.returncode, 0)
                self.assertIn('unsupported subpath', rendered.stdout)
                self.assertIn('location = /favicon.ico', generated.read_text())

    def _start_file_download(self, prefix, target):
        origin = self.start_server(_OriginHandler)
        upstream = self.start_server(_UpstreamHandler)
        upstream.x_accel_prefix = prefix
        upstream.x_accel_target = f'http/127.0.0.1:{origin.server_address[1]}/{target}'
        return f'127.0.0.1:{upstream.server_address[1]}'

    def test_file_download_maps_internal_path_under_subpath(self):
        app_host = self._start_file_download('/ls', 'nested/dir/file.bin')
        with self.run_nginx('https://example.org/ls', app_host=app_host) as nginx:
            result = self.request(nginx.port, '/ls/anything')
            self.assertEqual(result.status, 200)
            # Proves the subpath prefix maps onto the regex while $1/$2/$3 survive.
            self.assertEqual(result.body, b'origin:/nested/dir/file.bin')
            self.assertEqual(result.headers.get('content-disposition'), 'attachment; filename="file.bin"')

    def test_file_download_redirects_external_location_under_subpath(self):
        app_host = self._start_file_download('/ls', 'redirect.txt')
        with self.run_nginx('https://example.org/ls', app_host=app_host) as nginx:
            result = self.request(nginx.port, '/ls/anything')
            self.assertEqual(result.status, 200)
            self.assertEqual(result.body, b'origin:/final.txt')

    def test_file_download_applies_uploaded_file_csp_under_subpath(self):
        app_host = self._start_file_download('/ls', 'page.html')
        with self.run_nginx('https://example.org/ls', app_host=app_host) as nginx:
            result = self.request(nginx.port, '/ls/anything')
            self.assertEqual(result.status, 200)
            self.assertEqual(result.headers.get('content-security-policy'), 'sandbox')

    def test_file_download_accepts_unprefixed_backend_redirect(self):
        # data_import/api.py and data_export/api.py emit unprefixed internal URIs.
        app_host = self._start_file_download('', 'file.bin')
        with self.run_nginx('https://example.org/ls', app_host=app_host) as nginx:
            result = self.request(nginx.port, '/ls/anything')
            self.assertEqual(result.status, 200)
            self.assertEqual(result.body, b'origin:/file.bin')

    def test_file_download_subpath_dots_are_literal(self):
        app_host = self._start_file_download('/v1.2', 'file.bin')
        with self.run_nginx('https://example.org/v1.2', app_host=app_host) as nginx:
            self.assertEqual(self.request(nginx.port, '/v1.2/anything').status, 200)
        app_host = self._start_file_download('/v1x2', 'file.bin')
        with self.run_nginx('https://example.org/v1.2', app_host=app_host) as nginx:
            self.assertEqual(self.request(nginx.port, '/v1.2/anything').status, 404)

    def test_file_download_is_internal_only(self):
        with self.run_nginx('https://example.org/ls') as nginx:
            path = '/ls/file_download/http/127.0.0.1:1/file.bin'
            self.assertEqual(self.request(nginx.port, path).status, 404)
            self.assertEqual(self.request(nginx.port, '/file_download/http/127.0.0.1:1/file.bin').status, 404)

    def test_file_download_maps_internal_path_without_subpath(self):
        app_host = self._start_file_download('', 'file.bin')
        with self.run_nginx('', app_host=app_host) as nginx:
            result = self.request(nginx.port, '/anything')
            self.assertEqual(result.status, 200)
            self.assertEqual(result.body, b'origin:/file.bin')


if __name__ == '__main__':
    unittest.main()
