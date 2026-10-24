"""Focused tests for the data-directory preflight check.

Run as a non-root user so permission bits are enforced, inside an isolated
container or sandbox that does not mount host data:

    python -m unittest discover -s deploy/tests -v

Every case runs against a temporary directory. Cases that depend on permission
enforcement are skipped when the test process runs as root.
"""

import os
import subprocess
import tempfile
import unittest
from pathlib import Path

DEPLOY = Path(__file__).resolve().parents[1]
ENTRYPOINT_DIR = DEPLOY / 'docker-entrypoint.d'
SCRIPT = ENTRYPOINT_DIR / 'common' / '05-check-data-permissions.sh'
CHECK_NAME = '05-check-data-permissions.sh'
ENTRYPOINTS = ('app', 'app-init', 'app-docker')
IS_ROOT = os.geteuid() == 0


def run_check(data_dir):
    """Run the preflight script with fd 3 connected to stdout, like the entrypoint."""
    return subprocess.run(
        ['bash', '-c', 'exec 3>&1; exec bash "$1"', 'bash', str(SCRIPT)],
        env={**os.environ, 'LABEL_STUDIO_BASE_DATA_DIR': str(data_dir)},
        capture_output=True,
        text=True,
    )


def only_child_directories(path):
    return sorted(p.name for p in Path(path).iterdir())


class EntrypointWiringTests(unittest.TestCase):
    def test_preflight_is_wired_into_every_entrypoint(self):
        for name in ENTRYPOINTS:
            with self.subTest(entrypoint=name):
                link = ENTRYPOINT_DIR / name / CHECK_NAME
                self.assertTrue(link.is_symlink(), link)
                self.assertEqual(os.readlink(link), '../common/' + CHECK_NAME)
                self.assertTrue(link.exists(), link)

    def test_preflight_sorts_before_settings_import(self):
        for name in ENTRYPOINTS:
            with self.subTest(entrypoint=name):
                scripts = sorted(p.name for p in (ENTRYPOINT_DIR / name).iterdir())
                self.assertEqual(scripts[0], CHECK_NAME, scripts)

    def test_no_destructive_or_world_readable_advice(self):
        text = SCRIPT.read_text()
        self.assertNotIn('rm -rf', text)
        self.assertNotIn('chown :0', text)
        self.assertNotIn('chmod 777', text)
        self.assertNotIn('chmod 666', text)


class PreflightSuccessTests(unittest.TestCase):
    def test_writable_empty_directory_passes_and_is_left_clean(self):
        with tempfile.TemporaryDirectory() as temporary:
            result = run_check(temporary)
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
            self.assertIn('completed successfully', result.stdout)
            self.assertEqual(only_child_directories(temporary), [])

    def test_missing_base_directory_is_probed_and_left_absent(self):
        with tempfile.TemporaryDirectory() as temporary:
            target = Path(temporary) / 'data'
            result = run_check(target)
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
            self.assertFalse(target.exists())

    def test_existing_contents_and_permissions_are_untouched(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            media = base / 'media'
            media.mkdir()
            marker = media / 'existing.txt'
            marker.write_text('keep me')
            secret = base / '.env'
            secret.write_text('SECRET_KEY=existing\n')
            secret.chmod(0o600)
            before = secret.stat().st_mode
            result = run_check(base)
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
            self.assertEqual(marker.read_text(), 'keep me')
            self.assertEqual(secret.read_text(), 'SECRET_KEY=existing\n')
            self.assertEqual(secret.stat().st_mode, before)
            self.assertEqual(only_child_directories(base), ['.env', 'media'])

    def test_missing_subdirectories_are_not_created(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            result = run_check(base)
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
            for relative in ('media', 'media/export', 'media/delayed_export', 'export', 'test_data'):
                self.assertFalse((base / relative).exists(), relative)


def run_check_with_mode(base, path, mode):
    """Run the check with one path restricted, then restore it for cleanup."""
    original = path.stat().st_mode & 0o777
    path.chmod(mode)
    try:
        return run_check(base)
    finally:
        path.chmod(original)


@unittest.skipIf(IS_ROOT, 'permission bits are not enforced for root')
class PreflightFailureTests(unittest.TestCase):
    def test_unwritable_base_directory_fails(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            result = run_check_with_mode(base, base, 0o555)
            self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
            self.assertIn('not writable', result.stdout)
            self.assertIn(str(base), result.stdout)

    def test_unwritable_subdirectory_fails(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            media = base / 'media'
            media.mkdir()
            result = run_check_with_mode(base, media, 0o555)
            self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
            self.assertIn(str(media), result.stdout)
            self.assertIn('not writable', result.stdout)

    def test_subdirectory_path_that_is_a_file_fails(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            (base / 'export').write_text('not a directory')
            result = run_check(base)
            self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
            self.assertIn('not a directory', result.stdout)

    def test_unreadable_env_file_fails(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            secret = base / '.env'
            secret.write_text('SECRET_KEY=existing\n')
            result = run_check_with_mode(base, secret, 0o200)
            self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
            self.assertIn('not readable', result.stdout)

    def test_unwritable_env_file_fails(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            secret = base / '.env'
            secret.write_text('SECRET_KEY=existing\n')
            result = run_check_with_mode(base, secret, 0o400)
            self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
            self.assertIn('not writable', result.stdout)

    def test_advice_distinguishes_rootful_and_rootless_ownership(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            result = run_check_with_mode(base, base, 0o555)
            self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
            self.assertIn('chown -R 1001:0', result.stdout)
            self.assertIn('podman unshare chown -R 1001:0', result.stdout)
            self.assertNotIn('chown :0', result.stdout)
            self.assertNotIn('rm -rf', result.stdout)
            self.assertIn('back up', result.stdout.lower())
            self.assertIn('data-init', result.stdout)


if __name__ == '__main__':
    unittest.main()
