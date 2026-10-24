#!/bin/sh
# Run only as a one-shot Compose service, never as the application entrypoint.
set -eu

DATA_DIR=${LABEL_STUDIO_BASE_DATA_DIR:-/label-studio/data}

if [ "$(id -u)" != 0 ]; then
  echo >&2 "ERROR: data-init must run as container root (also supported by rootless engines)."
  exit 1
fi
if [ -L "$DATA_DIR" ]; then
  echo >&2 "ERROR: refusing to initialize a symlink: $DATA_DIR"
  exit 1
fi
mkdir -p "$DATA_DIR"

# Do not recursively change ownership of restored or existing user data. In
# particular, a rootless container cannot safely repair another engine's IDs.
if [ -n "$(find "$DATA_DIR" -mindepth 1 -maxdepth 1 -print -quit)" ]; then
  echo "=> Existing data found; ownership unchanged. The app will validate access before migrations."
  exit 0
fi

umask 027
mkdir -p "$DATA_DIR/media/delayed_export" "$DATA_DIR/media/export" "$DATA_DIR/export" "$DATA_DIR/test_data"
# Prevent the first Django startup from creating a world-readable secret file.
(umask 077; touch "$DATA_DIR/.env")
chown 1001:0 "$DATA_DIR" "$DATA_DIR/media" "$DATA_DIR/media/delayed_export" "$DATA_DIR/media/export" \
  "$DATA_DIR/export" "$DATA_DIR/test_data" "$DATA_DIR/.env"
chmod 750 "$DATA_DIR"
chmod 600 "$DATA_DIR/.env"
echo "=> Initialized empty data directory for container UID 1001, GID 0."
