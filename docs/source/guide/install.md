---
title: Installation
type: guide
tier: opensource
order: 60
order_enterprise: 0
meta_title: Install and Upgrade Label Studio
meta_description: "Label Studio documentation: install and run Label Studio with Docker for your machine learning and data science projects."
section: "Install & Setup"
---

Install Label Studio on premises with Docker, or use the repository development environment:

- [Install with Docker](#Install-with-Docker)
- [Install from source](#Install-from-source)

Label Studio is also available an [enterprise product](https://heartex.com/), which you can explore instantly through a [free trial](https://humansignal.com/free-trial).

### Web browser support

Label Studio is tested with the latest version of Google Chrome.

If using other web browsers, or older versions of supported web browsers, unexpected behavior could occur.

## Install using Homebrew

To install Label Studio with Brew, you need to have Brew package manager installed on your system. If you do not have Brew installed, please visit [brew.sh](https://brew.sh/) for installation instructions.

Execute the following command to add the Heartexlabs tap:

```bash
brew tap humansignal/tap
```

Execute the following command to install Label Studio:

```bash
brew install humansignal/tap/label-studio
```

After you install Label Studio, initiate the server using the following command:

```bash
label-studio
```

The default web browser will automatically open at [http://localhost:8080](http://localhost:8080) with Label Studio. Please refer to [start Label Studio](start.html) for more options when starting Label Studio.

!!! note
    If you've previously installed the brew tap from the now-deprecated organization name `heartexlabs/tap`, we've got good news. You don't have to worry about migrating immediately. The deprecated tap has been set up as a mirror for `humansignal/tap`. This ensures continuity and minimizes disruptions for existing users.

## Install with Docker

Label Studio is also available as a Docker container. Make sure you have [Docker](https://www.docker.com/) installed on your machine.

### Install with Docker on \*nix

To install and start Label Studio at [http://localhost:8080](http://localhost:8080), storing all labeling data in `./mydata` directory, run the following:

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

SSH into `<ANOTHER_HOST>` and import the archive:

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
To make sure an existing project gets migrated, when you [start Label Studio](start.html), run the following command:

```bash
label-studio start path/to/old/project
```

The most important change to be aware of is changes to rename "completions" to "annotations". See the [updated JSON format for completed tasks](export.html#Raw_JSON_format_of_completed_tasks).

If you customized the Label Studio Frontend, see the [Frontend reference guide](frontend_reference.html) for required updates to maintain compatibility with version 1.0.0.
