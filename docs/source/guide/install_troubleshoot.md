---
title: Troubleshoot installation issues
short: Troubleshooting
tier: opensource
type: guide
order: 81
order_enterprise: 0
meta_title: Troubleshoot Label Studio installation issues
meta_description: Tips for troubleshooting Label Studio installation issues
section: "Install & Setup"
parent: "install"
date: 2023-12-06 10:38:02
---

You might see errors when installing Label Studio. Follow these steps to resolve them.

## Run the latest version of Label Studio

Many bugs might be fixed in patch releases or maintenance releases. Make sure you're running the latest version of Label Studio by [upgrading](install#Upgrade-Label-Studio) your installation before you start Label Studio.

## Errors about missing packages

If you see errors about missing packages, install those packages and try to install Label Studio again. Make sure that you run Label Studio in a clean Python environment, such as a virtual environment.


## OpenBLAS blas_thread_init: pthread_create failed for thread X of Y: Operation not permitted

Upgrade Docker Engine to the latest available version(>= [20.10.12](https://docs.docker.com/engine/release-notes/#201012)).

## PermissionError: [Errno 13] Permission denied: `/label-studio/data/media`

!!! warning
    Starting with Label Studio 1.7.0 release, the application run using a non-root docker user with ID `1001`.

You may already be aware that Docker containers generally operate with root privileges by default. This unrestricted container management permits actions like installing system packages, modifying configuration files, and binding privileged ports, which are all beneficial for development purposes. However, this can lead to significant risks when containers are deployed in a production environment.

This is because anyone who gains access to your root-running container could initiate undesirable processes, such as injecting malicious code. Running a process in your container as root also enables altering the user id (UID) or group id (GID) when launching the container, making your application more vulnerable.

It is advised to use non-root containers for the following reasons:

- Security: Non-root containers inherently offer better security. In the event of a container engine security issue, running the container as a non-privileged user will prevent malicious code from obtaining elevated permissions on the container host. For more information on Docker's security features, refer to this guide.

- Platform limitations: Some Kubernetes distributions such as [OpenShift](https://www.openshift.com/), execute containers with random UUIDs. This method is incompatible with root containers, which must always run using the root user's UUID. In these situations, only non-root container images will operate, making them a necessity.

Our [Dockerfile](https://github.com/HumanSignal/label-studio/blob/develop/Dockerfile) contains the line `USER 1001` which assigns a non-root user UID to the image, enabling the container to run as an unprivileged user. This implementation applies the security enhancements and other restrictions mentioned above to the container.

### File permissions for non-root user

By default, Label Studio container images run as a non-root user (`UID 1001`). Any directory the application writes to must therefore be owned by `UID 1001` and group `GID 0`, or otherwise be writable by that user. On a bind mount such as `./mydata:/label-studio/data`, ownership comes from the host directory, so the host directory must allow the container user to write.

Before Django settings are imported, the container entrypoint runs a preflight check (`deploy/docker-entrypoint.d/common/05-check-data-permissions.sh`). It verifies that:

- The base data directory can be traversed and written.
- Existing `media`, `media/export`, `media/delayed_export`, `export` and `test_data` directories are readable and writable.
- An existing `.env` file is readable and writable.

The check never changes permissions, never rewrites existing files and never removes existing directories; it only creates and immediately removes its own probe file. If it fails, the container exits before migrations run and reports the exact paths that need attention.

!!! warning
    Existing data is never re-owned automatically. If an existing data directory has the wrong ownership, the preflight check fails and the container stops with an actionable error instead of silently changing or damaging your files.

#### Preparing a fresh data directory with Docker Compose

The bundled `docker-compose.yml` includes a one-shot `data-init` service. It runs as container root (`user: "0:0"`) and prepares a fresh bind mount only:

- It creates the base data directory and the `media`, `media/export`, `media/delayed_export`, `export` and `test_data` subdirectories owned by `1001:0` with mode `750`.
- It creates `.env` owned by `1001:0` with mode `600`.
- If the data directory already contains anything, it leaves it completely untouched and exits successfully, so the application preflight check can validate it.

Both the `app` and `nginx` services wait for `data-init` to complete successfully. To prepare an empty mount manually:

```bash
docker compose run --rm data-init
```

#### Migrating ownership of existing data (opt in)

If you already have data and the preflight check reports a permission problem, fix the ownership on the Docker host. **Back up your data first.** Changing ownership is an opt-in migration and Label Studio does not do it for you.

Rootful Docker normally maps host and container user IDs one to one (unless user namespace remapping is configured):

```bash
sudo chown -R 1001:0 mydata
sudo chmod -R u+rwX mydata
sudo sh -c 'if [ -f mydata/.env ]; then chmod 600 mydata/.env; fi'
```

Rootless Podman shifts user IDs inside the user namespace, so the same numeric IDs on the host map to different IDs inside the container. Use `podman unshare`:

```bash
podman unshare chown -R 1001:0 mydata
podman unshare chmod -R u+rwX mydata
podman unshare sh -c 'if [ -f mydata/.env ]; then chmod 600 mydata/.env; fi'
```

Do not make the data directory or `.env` world-readable or world-writable. `.env` stores the `SECRET_KEY` used to sign sessions and JSON Web Tokens, so it must stay mode `600` and be owned by the user that runs the container.

!!! warning
    Do not mix rootful and rootless engines for the same data. PostgreSQL data under `postgres-data` follows the same rule: it must stay owned by the user the database image runs as, and ownership written by a rootful engine is not valid for a rootless engine (or the other way around). Never apply the application `1001` user to the database directory. If you switch engines, back up the database first, then re-own `postgres-data` with the matching tool (`sudo chown -R` for rootful, `podman unshare chown -R` for rootless).

!!! note

    If you want to learn more about non-root containers and Docker and Kubernetes security, check out the following articles:

    [Docker Security documentation](https://docs.docker.com/engine/security/security/)

    [Understanding how uid and gid work in Docker containers by Marc Campbell](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf)

    [Processes In Containers Should Not Run As Root](https://medium.com/@mccode/processes-in-containers-should-not-run-as-root-2feae3f0df3b)

    [Just say no to root (containers) by Daniel J. Walsh](https://opensource.com/article/18/3/just-say-no-root-containers)

    [Running a Docker container as a non-root user by Lucas Willson-Richter](https://medium.com/redbubble/running-a-docker-container-as-a-non-root-user-7d2e00f8ee15)

    [How to run a more secure non-root user container by Dan Wash](https://www.projectatomic.io/blog/2016/01/how-to-run-a-more-secure-non-root-user-container/)