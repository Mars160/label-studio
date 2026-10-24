"""Run with python -m unittest discover -s deploy/tests (requires nginx on PATH)."""

import http.client
import os
import shutil
import socket
import subprocess
import tempfile
import time
import unittest
from pathlib import Path

DEPLOY = Path(__file__).resolve().parents[1]


@unittest.skipUnless(shutil.which('nginx'), 'nginx is required for HTTP regression tests')
class NginxSubpathTests(unittest.TestCase):
    def check_routes(self, host, routes):
        with tempfile.TemporaryDirectory() as directory:
            base = Path(directory)
            with socket.socket() as listener:
                listener.bind(('127.0.0.1', 0))
                port = listener.getsockname()[1]
            template = base / 'template.conf'
            config = (DEPLOY / 'default.conf').read_text()
            config = config.replace('listen      8085;', f'listen      {port};')
            config = config.replace('/tmp/nginx.pid', str(base / 'nginx.pid'))
            # Observe the upstream failure directly, without requiring packaged error-page assets.
            config = config.replace('error_page   500 502 503 504  /50x.html;', '')
            template.write_text(config)
            resolver = base / 'resolver'
            resolver.write_text('nameserver 127.0.0.1\n')
            script = base / 'configure.sh'
            script.write_text(
                (DEPLOY / 'docker-entrypoint.d/common/10-configure-nginx.sh')
                .read_text()
                .replace('/etc/nginx/nginx.conf', str(template))
                .replace('/etc/resolv.conf', str(resolver))
            )
            env = {
                **os.environ,
                'OPT_DIR': str(base),
                'LABEL_STUDIO_HOST': host,
                'APP_HOST': '127.0.0.1',
                'NGINX_SSL_CERT': '',
            }
            subprocess.run(
                ['sh', '-c', 'exec 3>&1; exec sh "$1"', 'sh', str(script)],
                env=env,
                check=True,
            )
            generated = base / 'nginx/nginx.conf'
            subprocess.run(['nginx', '-e', '/dev/stderr', '-t', '-c', str(generated)], check=True)
            with tempfile.TemporaryFile() as log:
                process = subprocess.Popen(
                    ['nginx', '-e', '/dev/stderr', '-c', str(generated)], stdout=log, stderr=log
                )
                try:
                    for _ in range(100):
                        try:
                            with socket.create_connection(('127.0.0.1', port), timeout=0.1):
                                break
                        except OSError:
                            if process.poll() is not None:
                                log.seek(0)
                                self.fail(log.read().decode())
                            time.sleep(0.02)
                    else:
                        self.fail('nginx did not start')
                    for path, status, location in routes:
                        with self.subTest(host=host, path=path):
                            connection = http.client.HTTPConnection('127.0.0.1', port, timeout=3)
                            try:
                                connection.request('GET', path)
                                response = connection.getresponse()
                                self.assertEqual(response.status, status)
                                self.assertEqual(response.getheader('Location'), location)
                                response.read()
                            finally:
                                connection.close()
                finally:
                    process.terminate()
                    process.wait(timeout=5)

    def test_root_deployment_still_proxies(self):
        # No app is running: 502 proves the request reached proxy_pass, not index.html.
        for host in ('', 'https://example.org', 'https://example.org/'):
            self.check_routes(host, [('/', 502, None)])

    def test_subpath_routes(self):
        for host in ('https://example.org/ls', 'https://example.org/ls/'):
            self.check_routes(
                host,
                [
                    ('/', 302, '/ls/'),
                    ('/?next=1', 302, '/ls/?next=1'),
                    ('/ls', 302, '/ls/'),
                    ('/ls/', 502, None),
                    ('/outside', 404, None),
                ],
            )

    def test_nested_subpath(self):
        self.check_routes(
            'https://example.org/tools/ls',
            [
                ('/', 302, '/tools/ls/'),
                ('/tools/ls', 302, '/tools/ls/'),
                ('/tools/ls/', 502, None),
            ],
        )


if __name__ == '__main__':
    unittest.main()
