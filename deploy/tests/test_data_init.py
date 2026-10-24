"""Run inside an isolated container as UID 0; never mounts production data."""

import os
import subprocess
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[1] / 'docker-data-init.sh'


@unittest.skipUnless(os.geteuid() == 0, 'data initialization tests require container root')
class DataInitTests(unittest.TestCase):
    def initialize(self, directory: Path) -> subprocess.CompletedProcess:
        return subprocess.run(
            ['sh', str(SCRIPT)],
            env={**os.environ, 'LABEL_STUDIO_BASE_DATA_DIR': str(directory)},
            capture_output=True,
            text=True,
        )

    def test_fresh_directory_and_idempotence(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary) / 'data'
            result = self.initialize(directory)
            self.assertEqual(result.returncode, 0, result.stderr)
            for relative in ('', 'media', 'media/delayed_export', 'media/export', 'export', 'test_data', '.env'):
                with self.subTest(path=relative):
                    stat = (directory / relative).stat()
                    self.assertEqual((stat.st_uid, stat.st_gid), (1001, 0))
            self.assertEqual(directory.stat().st_mode & 0o777, 0o750)
            secret = directory / '.env'
            self.assertEqual(secret.stat().st_mode & 0o777, 0o600)
            secret.write_text('existing-secret\n')
            before = secret.stat()
            result = self.initialize(directory)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(secret.stat(), before)
            self.assertEqual(secret.read_text(), 'existing-secret\n')

    def test_initialized_data_is_writable_by_application(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary) / 'data'
            Path(temporary).chmod(0o755)
            result = self.initialize(directory)
            self.assertEqual(result.returncode, 0, result.stderr)

            def application_identity():
                os.setgroups([])
                os.setgid(0)
                os.setuid(1001)

            result = subprocess.run(
                [
                    'sh',
                    '-c',
                    'set -e; for d in media media/delayed_export media/export export test_data; do '
                    'touch "$LABEL_STUDIO_BASE_DATA_DIR/$d/probe"; done; '
                    'echo test >> "$LABEL_STUDIO_BASE_DATA_DIR/.env"',
                ],
                env={**os.environ, 'LABEL_STUDIO_BASE_DATA_DIR': str(directory)},
                preexec_fn=application_identity,
                capture_output=True,
                text=True,
            )
            self.assertEqual(result.returncode, 0, result.stderr)

    def test_existing_data_is_not_reowned(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            existing = directory / 'media'
            existing.mkdir(mode=0o700)
            existing.chmod(0o700)
            before = existing.stat()
            result = self.initialize(directory)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(existing.stat(), before)
            self.assertFalse((directory / '.env').exists())
            self.assertEqual(directory.stat().st_uid, 0)

    def test_symlink_base_is_rejected(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            target = directory / 'target'
            target.mkdir()
            link = directory / 'data'
            link.symlink_to(target, target_is_directory=True)
            result = self.initialize(link)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual(list(target.iterdir()), [])


if __name__ == '__main__':
    unittest.main()
