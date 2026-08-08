<img src="https://user-images.githubusercontent.com/12534576/192582340-4c9e4401-1fe6-4dbb-95bb-fdbba5493f61.png"/>

English | [简体中文](docs/README.zh-CN.md)

Upstream: [HumanSignal/label-studio](https://github.com/HumanSignal/label-studio)

![GitHub](https://img.shields.io/github/license/heartexlabs/label-studio?logo=heartex) ![label-studio:build](https://github.com/HumanSignal/label-studio/workflows/label-studio:build/badge.svg) ![GitHub release](https://img.shields.io/github/v/release/heartexlabs/label-studio?include_prereleases)

[Website](https://labelstud.io/) • [Docs](https://labelstud.io/guide/) • [Join Slack Community <img src="https://app.heartex.ai/docs/images/slack-mini.png" width="18px"/>](https://slack.labelstud.io/?source=github-1)


## What is Label Studio?

<!-- <a href="https://labelstud.io/blog/release-130.html"><img src="https://github.com/HumanSignal/label-studio/raw/master/docs/themes/htx/source/images/release-130/LS-Hits-v1.3.png" align="right" /></a> -->

Label Studio is an open source data labeling tool. It lets you label data types like audio, text, images, videos, and time series with a simple and straightforward UI and export to various model formats. It can be used to prepare raw data or improve existing training data to get more accurate ML models.

- [Fork-specific project access control](#fork-specific-project-access-control)
- [Try out Label Studio](#try-out-label-studio)
- [What you get from Label Studio](#what-you-get-from-label-studio)
- [Included templates for labeling data in Label Studio](#included-templates-for-labeling-data-in-label-studio)
- [Set up machine learning models with Label Studio](#set-up-machine-learning-models-with-Label-Studio)
- [Integrate Label Studio with your existing tools](#integrate-label-studio-with-your-existing-tools)

![Gif of Label Studio annotating different types of data](/images/annotation_examples.gif)

Have a custom dataset? You can customize Label Studio to fit your needs. Read an [introductory blog post](https://towardsdatascience.com/introducing-label-studio-a-swiss-army-knife-of-data-labeling-140c1be92881) to learn more.

## Fork-specific project access control

This fork adds explicit project membership with two project-scoped roles:

- **Admin** can manage the project and its members, access all project annotations and Data Manager tabs, and use project-wide operations such as imports, exports, storage, webhooks, and ML integrations.
- **Annotator** can work only in assigned projects and can access only their own annotations, drafts, and Data Manager tabs. Project management and project-wide operations are hidden in the UI and rejected by the server.

The project creator becomes an enabled admin automatically. Admins manage members from **Project Settings > Members**, where they can search for existing active organization accounts, add multiple members, change roles, or remove members. Users without an enabled project membership cannot access the project; this fork does not automatically grant project access to every organization user.

For implementation status, policy decisions, and verification details, see [Project Access Control Progress](docs/project-access-control-progress.md).

## Try out Label Studio

Run Label Studio locally with Docker or set up a local development environment.

- [Install locally with Docker](#install-locally-with-docker)
- [Run with Docker Compose (Label Studio + Nginx + PostgreSQL)](#run-with-docker-compose)
- [Install for local development](#install-for-local-development)

### Install locally with Docker
Pull this fork's image and access Label Studio at `http://localhost:28000`:

```bash
docker pull docker.io/mars160/label-studio:latest
docker run -it -p 28000:8080 -v $(pwd)/mydata:/label-studio/data docker.io/mars160/label-studio:latest
```
You can find all the generated assets, including SQLite3 database storage `label_studio.sqlite3` and uploaded files, in the `./mydata` directory.

#### Override default Docker install
You can override the default launch command by appending the new arguments:
```bash
docker run -it -p 28000:8080 -v $(pwd)/mydata:/label-studio/data docker.io/mars160/label-studio:latest label-studio --log-level DEBUG
```

#### Build a local image with Docker
If you want to build this fork locally, use the fork image name and pass the available CPU count to native build tools. The mirror arguments keep dependency installation reliable in mainland China:

```bash
docker build \
  --build-arg BUILD_JOBS="$(nproc)" \
  --build-arg ALPINE_REPOSITORY=https://mirrors.aliyun.com/alpine \
  --build-arg YARN_REGISTRY=https://registry.npmmirror.com \
  --build-arg PIP_INDEX_URL=https://mirrors.ustc.edu.cn/pypi/simple \
  -t docker.io/mars160/label-studio:latest .
```

`BUILD_JOBS` defaults to `1` when omitted. On systems without `nproc`, replace `$(nproc)` with the number of CPU cores available to the build.

### Run with Docker Compose
Docker Compose script provides production-ready stack consisting of the following components:

- Label Studio
- [Nginx](https://www.nginx.com/) - proxy web server used to load various static data, including uploaded audio, images, etc.
- [PostgreSQL](https://www.postgresql.org/) - production-ready database that replaces less performant SQLite3.

To start the fork with Nginx and PostgreSQL, run:
```bash
docker compose up
```

The default Compose configuration uses `docker.io/mars160/label-studio:latest` and serves Label Studio at `http://localhost:28000`. Run the [local image build](#build-a-local-image-with-docker) first when you need an image containing your current checkout.

### Run with Docker Compose + MinIO
You can also run it with an additional MinIO server for local S3 storage. This is particularly useful when you want to 
test the behavior with S3 storage on your local system. To start Label Studio in this way, you need to run the following command:
````bash
# Add sudo on Linux if you are not a member of the docker group
docker compose -f docker-compose.yml -f docker-compose.minio.yml up -d
````
If you do not have a static IP address, you must create an entry in your hosts file so that both Label Studio and your 
browser can access the MinIO server. For more detailed instructions, please refer to [our guide on storing data](docs/source/guide/storedata.md).


### Install for local development

Use the repository's supported development commands:

```bash
uv sync
make migrate-dev
make run-dev
```

#### Apply frontend changes

For information about updating the frontend, see [label-studio/web/README.md](https://github.com/HumanSignal/label-studio/blob/develop/web/README.md#installation-instructions).

### Run test suite
Run the test suite through the repository environment:

```bash
cd label_studio
DJANGO_DB=sqlite uv run pytest -vv
```

For containerized test execution, run:

```bash
make build-testing-image
make docker-testing-shell
```
 
## What you get from Label Studio

https://github.com/user-attachments/assets/525ad5ff-6904-4398-b507-7e8954268d69

- **Multi-user labeling** sign up and login, when you create an annotation it's tied to your account.
- **Multiple projects** to work on all your datasets in one instance.
- **Streamlined design** helps you focus on your task, not how to use the software.
- **Configurable label formats** let you customize the visual interface to meet your specific labeling needs.
- **Support for multiple data types** including images, audio, text, HTML, time-series, and video. 
- **Import from files or from cloud storage** in Amazon AWS S3, Google Cloud Storage, or JSON, CSV, TSV, RAR, and ZIP archives. 
- **Integration with machine learning models** so that you can visualize and compare predictions from different models and perform pre-labeling.
- **Embed it in your data pipeline** REST API makes it easy to make it a part of your pipeline

## Included templates for labeling data in Label Studio 

Label Studio includes a variety of templates to help you label your data, or you can create your own using specifically designed configuration language. The most common templates and use cases for labeling include the following cases:

<img src="/images/template-types.png" />

## Set up machine learning models with Label Studio

Connect your favorite machine learning model using the Label Studio Machine Learning SDK. Follow these steps:

1. Start your own machine learning backend server. See [more detailed instructions](https://github.com/HumanSignal/label-studio-ml-backend).
2. Connect Label Studio to the server on the model page found in project settings.

This lets you:

- **Pre-label** your data using model predictions. 
- Do **online learning** and retrain your model while new annotations are being created. 
- Do **active learning** by labeling only the most complex examples in your data.

## Integrate Label Studio with your existing tools

You can use Label Studio as an independent part of your machine learning workflow or integrate the frontend or backend into your existing tools.  

## Ecosystem

| Project | Description |
|-|-|
| label-studio | Label Studio server |
| [Frontend library](web/libs/editor/) | The Label Studio frontend library. This uses React to build the UI and mobx-state-tree for state management. |  
| [Data Manager library](web/libs/datamanager/) | A library for the Data Manager, our data exploration tool. | 
| [label-studio-converter](https://github.com/HumanSignal/label-studio-sdk/tree/master/src/label_studio_sdk/converter) | Encode labels in the format of your favorite machine learning library |
| [label-studio-transformers](https://github.com/HumanSignal/label-studio-transformers) | Transformers library connected and configured for use with Label Studio |

## License

This software is licensed under the [Apache 2.0 LICENSE](/LICENSE) © [Heartex](https://www.heartex.com/). 2020-2025

<img src="https://user-images.githubusercontent.com/12534576/192582529-cf628f58-abc5-479b-a0d4-8a3542a4b35e.png" title="Hey everyone!" width="180" />
