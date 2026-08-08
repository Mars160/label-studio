---
title: Requirements to Install and upgrade Label Studio
short: Requirements
tier: opensource
section: "Install & Setup"
order: 61 
meta_title: Requirements to Install and Upgrade
meta_description: "Label Studio documentation: Requirements to install and upgrade Label Studio." 
---


## Install with Docker

Label Studio is also available as a Docker container. Make sure you have [Docker](https://www.docker.com/) installed on your machine.

### Install with Docker on *nix
To install and start Label Studio at [http://localhost:8080](http://localhost:8080), storing all labeling data in `./my_project` directory, run the following:
```bash
docker run -it -p 8080:8080 -v $(pwd)/mydata:/label-studio/data heartexlabs/label-studio:latest
```

!!! attention "important"
    As this is a non-root container, the mounted files and directories must have the proper permissions for the `UID 1001`.

### Build a local image with Docker
If you want to build a local image, run:
```bash
docker build -t heartexlabs/label-studio:latest .
```

### Run with Docker Compose
Use Docker Compose to serve Label Studio at `http://localhost:8080`. You must use Docker Compose version 1.25.0 or higher.

Start Label Studio:
```bash
docker-compose up -d
```

This starts Label Studio with a PostgreSQL database backend. You can also use a PostgreSQL database without Docker Compose. See [Set up database storage](storedata.html).

### Install Label Studio without internet access
Download label-studio docker image (host with internet access and docker):
```bash 
docker pull heartexlabs/label-studio:latest
```

Export it as a tar archive: 
```bash
docker save heartexlabs/label-studio:latest | gzip > label_studio_latest.tar.gz
```

Transfer it to another VM:
```bash
scp label_studio_latest.tar.gz <ANOTHER_HOST>:/tmp
```

SSH into <ANOTHER_HOST> and import the archive:
```bash
docker image import /tmp/label_studio_latest.tar.gz
```

Follow steps from [Install and Upgrade to run LS](install.html#Install-with-Docker).


## Install from source

Use the repository's supported development environment:

```bash
git clone https://github.com/HumanSignal/label-studio.git
cd label-studio
uv sync
make migrate-dev
make run-dev
```
Migration scripts run when you upgrade to version 1.0.0 from version 0.9.1 or earlier. 

To make sure an existing project gets migrated, when you [start Label Studio](start.html), run the following command:

```bash
label-studio start path/to/old/project 
```

The most important change to be aware of is changes to rename "completions" to "annotations". See the [updated JSON format for completed tasks](export.html#Raw_JSON_format_of_completed_tasks). 

If you customized the Label Studio Frontend, see the [Frontend reference guide](frontend_reference.html) for required updates to maintain compatibility with version 1.0.0.  
