---
title: Upgrade Label Studio
type: guide
tier: opensource
order: 96
order_enterprise: 0
meta_title: Upgrade Label Studio Community Edition
meta_description: Documentation for upgrade paths and commands for Label Studio. 
section: "Install & Setup"
---

When upgrading Label Studio, keep the following in mind:

- **Backup Your Data**: Before starting the upgrade, make sure to back up your existing projects, databases, and any custom configurations. 
- **Review Release Notes**: Check [the release notes](https://github.com/HumanSignal/label-studio/releases) for the version you're upgrading to. Pay attention to any breaking changes or migration steps that may be required. 
- **Python Compatibility**: Ensure that your Python version is compatible with the new Label Studio release. Label Studio supports Python 3.9 through 3.13.  Using an incompatible Python version can lead to installation errors.
- **Check for Dependency Issues**: After upgrading, verify that all dependencies are correctly installed. If you encounter missing package errors, you might need to install those packages manually. Running Label Studio in a clean Python environment or virtual environment can reduce the likelihood of package conflicts.
- **Test Your Setup**: After upgrading, test your Label Studio instance to ensure everything works as expected. Check key functionalities like task loading, labeling interfaces, data export, and any integrations you use.
- **Troubleshoot Installation Issues**: If you encounter any issues during the upgrade, see [Troubleshoot installation issues](install_troubleshoot). 



## Upgrade using Docker

1. Stop the existing Label Studio container:
    ```bash
    docker ps  # Find the container ID or name
    docker stop <container_id_or_name>
    ```
2. Pull the latest Label Studio Docker image:
    ```bash
    docker pull heartexlabs/label-studio:latest
    ```
3. Start a new container with the latest image, using the same volume mappings as before:
    ```bash
    docker run -it -p 8080:8080 \
    -v /path/to/yourdata:/label-studio/data \
    -v /path/to/yourfiles:/label-studio/files \
    heartexlabs/label-studio:latest
    ```
    Replace `/path/to/yourdata` and /`path/to/yourfiles` with the actual paths you used previously.
4. Run database migrations (if necessary). 

    If you encounter any issues after upgrading, you might need to run database migrations:

    ```bash
    docker exec -it <container_id_or_name> bash
    cd /label-studio
    python manage.py migrate
    ```
5. Open Label Studio in your browser at `http://localhost:8080` and check that your projects and data are accessible.


## Upgrade after installing from source

If you installed Label Studio [using the source in Github](https://github.com/HumanSignal/label-studio), you can upgrade using the following steps. 

1. Navigate to your Label Studio directory.
2. Fetch the latest changes and refresh the supported environment:
```bash
git pull
uv sync
make migrate-dev
make run-dev
```

## Upgrade a Kubernetes installation

See [Upgrade Label Studio using Helm](install_k8s#Upgrade-Label-Studio-using-Helm). 