#!/bin/bash
#
# Preflight check for the data directory.
#
# Runs before any entrypoint imports Django settings (app, app-init/migrate and
# app-docker) so ownership or permission problems are reported as actionable
# guidance instead of obscure errors such as:
#   PermissionError: [Errno 13] Permission denied: '/label-studio/data/media'
#
# The check is read-only for existing data: it never changes permissions, never
# rewrites existing files and never removes existing directories. It only
# creates a uniquely named probe file (and, for a missing base directory, the
# empty directory itself) and removes exactly what it created.

set -e ${DEBUG:+-x}

DATA_DIR=${LABEL_STUDIO_BASE_DATA_DIR:-/label-studio/data}

# Existing directories the application reads from and writes to.
# 'media/export' is where delayed exports are stored by current versions;
# 'media/delayed_export' is kept for the layout created by the data-init service.
SUBDIRS=(media media/export media/delayed_export export test_data)

failures=()
probe=''

cleanup() {
    if [ -n "$probe" ] && [ -f "$probe" ]; then
        rm -f "$probe"
    fi
}
trap cleanup EXIT

fail() {
    failures+=("$1")
}

# Probe real write access without touching existing contents: create a uniquely
# named file and delete it again immediately.
probe_write() {
    local directory=$1
    if probe=$(mktemp "$directory/.label-studio-permission-probe.XXXXXX" 2>/dev/null); then
        rm -f "$probe"
        probe=''
        return 0
    fi
    return 1
}

# Probe directory creation and remove only the empty directory we created.
probe_mkdir() {
    local directory=$1
    if mkdir "$directory" 2>/dev/null; then
        rmdir "$directory" 2>/dev/null || true
        return 0
    fi
    return 1
}

echo >&3 "=> Checking data directory permissions: $DATA_DIR"

if [ ! -e "$DATA_DIR" ]; then
    parent=$(dirname "$DATA_DIR")
    if [ -d "$parent" ] && [ -w "$parent" ] && [ -x "$parent" ] && probe_mkdir "$DATA_DIR"; then
        echo >&3 "=> Data directory does not exist yet and can be created by UID $(id -u)"
    else
        fail "Data directory does not exist and cannot be created: $DATA_DIR"
    fi
elif [ ! -d "$DATA_DIR" ]; then
    fail "Data path exists but is not a directory: $DATA_DIR"
else
    [ -x "$DATA_DIR" ] || fail "Data directory is not traversable (missing execute permission): $DATA_DIR"
    probe_write "$DATA_DIR" || fail "Data directory is not writable (write probe failed): $DATA_DIR"
fi

for relative in "${SUBDIRS[@]}"; do
    path="$DATA_DIR/$relative"
    if [ -d "$path" ]; then
        [ -r "$path" ] || fail "Existing directory is not readable: $path"
        [ -w "$path" ] || fail "Existing directory is not writable: $path"
        [ -x "$path" ] || fail "Existing directory is not traversable (missing execute permission): $path"
        probe_write "$path" || fail "Existing directory is not writable (write probe failed): $path"
    elif [ -e "$path" ]; then
        fail "Path exists but is not a directory: $path"
    fi
done

env_file="$DATA_DIR/.env"
if [ -d "$env_file" ]; then
    fail ".env path is a directory, expected a regular file: $env_file"
elif [ -e "$env_file" ] && [ ! -f "$env_file" ]; then
    fail ".env path is not a regular file: $env_file"
elif [ -e "$env_file" ]; then
    [ -r "$env_file" ] || fail "Existing .env file is not readable: $env_file"
    [ -w "$env_file" ] || fail "Existing .env file is not writable: $env_file"
fi

if [ "${#failures[@]}" -eq 0 ]; then
    echo >&3 "=> Data directory permissions check completed successfully"
    exit 0
fi

echo >&3 "ERROR: Data directory preflight check failed for $DATA_DIR"
echo >&3 "-----------------------------------------------------"
echo >&3 "Current user:"
echo >&3 "  UID    = $(id -u)"
echo >&3 "  GID    = $(id -g)"
echo >&3 "  Groups = $(id -G)"
echo >&3 ""
echo >&3 "Problems detected:"
for problem in "${failures[@]}"; do
    echo >&3 "  - $problem"
done
echo >&3 ""
echo >&3 "Ownership and permissions:"
ls -ld "$DATA_DIR" >&3 2>&1 || true
for relative in "${SUBDIRS[@]}" .env; do
    path="$DATA_DIR/$relative"
    if [ -e "$path" ]; then
        ls -ld "$path" >&3 2>&1 || true
    fi
done
echo >&3 ""
echo >&3 "How to resolve this:"
echo >&3 ""
echo >&3 "  A. Fresh installation (empty data directory)"
echo >&3 "     Let the bundled one-shot init service create the required layout:"
echo >&3 "       docker compose run --rm data-init"
echo >&3 "     It only prepares empty directories and .env for UID 1001, GID 0."
echo >&3 "     It never repairs the ownership of existing data."
echo >&3 ""
echo >&3 "  B. Existing data with incorrect ownership (opt in, back up first)"
echo >&3 "     Take a backup, then set ownership from the Docker host."
echo >&3 "     Rootful Docker without user namespace remapping:"
echo >&3 "       sudo chown -R 1001:0 mydata"
echo >&3 "       sudo chmod -R u+rwX mydata"
echo >&3 "     Rootless Podman shifts IDs inside the user namespace:"
echo >&3 "       podman unshare chown -R 1001:0 mydata"
echo >&3 "       podman unshare chmod -R u+rwX mydata"
echo >&3 "     Restrict an existing .env to mode 600 using the same host/namespace tool."
echo >&3 ""
echo >&3 "     Never make the data directory or .env world-readable or world-writable;"
echo >&3 "     .env stores the SECRET_KEY used to sign sessions and JWTs."
echo >&3 ""
echo >&3 "Refer to the documentation for more details:"
echo >&3 "  https://labelstud.io/guide/install_troubleshoot.html#File-permissions-for-non-root-user"
exit 1
