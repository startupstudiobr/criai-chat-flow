<!-- markdownlint-disable MD030 -->

<img width="100%" src="https://github.com/startupstudiobr/criai-chat/blob/main/images/criai.png?raw=true"></a>

# Criai - Build LLM Apps Easily

English 

<h3>Drag & drop UI to build your customized LLM flow</h3>
<a href="https://github.com/startupstudiobr/criai-chat">
<img width="100%" src="https://github.com/startupstudiobr/criai-chat/blob/main/images/criai.gif?raw=true"></a>

## ⚡Quick Start

Download and Install [NodeJS](https://nodejs.org/en/download) >= 18.15.0

1. Install Criai Chat
    ```bash
    npm install -g criai-chat
    ```
2. Start Crai chat

    ```bash
    npx criai-chat start
    ```

    With username & password

    ```bash
    npx criai-chat start --CRIAI_USERNAME=user --CRIAI_PASSWORD=1234
    ```

3. Open [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

### Docker Compose

1. Go to `docker` folder at the root of the project
2. Copy `.env.example` file, paste it into the same location, and rename to `.env`
3. `docker-compose up -d`
4. Open [http://localhost:3000](http://localhost:3000)
5. You can bring the containers down by `docker-compose stop`

### Docker Image

1. Build the image locally:
    ```bash
    docker build --no-cache -t criai-chat .
    ```
2. Run image:

    ```bash
    docker run -d --name criai-chat -p 3000:3000 criai
    ```

3. Stop image:
    ```bash
    docker stop criai-chat
    ```

## 👨‍💻 Developers

Criai has 3 different modules in a single mono repository.

-   `server`: Node backend to serve API logics
-   `ui`: React frontend
-   `components`: Third-party nodes integrations

### Prerequisite

-   Install [PNPM](https://pnpm.io/installation)
    ```bash
    npm i -g pnpm
    ```

### Setup

1. Clone the repository

    ```bash
    git clone https://github.com/CriaiAI/Criai.git
    ```

2. Go into repository folder

    ```bash
    cd Criai
    ```

3. Install all dependencies of all modules:

    ```bash
    pnpm install
    ```

4. Build all the code:

    ```bash
    pnpm build
    ```

5. Start the app:

    ```bash
    pnpm start
    ```

    You can now access the app on [http://localhost:3000](http://localhost:3000)

6. For development build:

    - Create `.env` file and specify the `VITE_PORT` (refer to `.env.example`) in `packages/ui`
    - Create `.env` file and specify the `PORT` (refer to `.env.example`) in `packages/server`
    - Run

        ```bash
        pnpm dev
        ```

    Any code changes will reload the app automatically on [http://localhost:8080](http://localhost:8080)

## 🔒 Authentication

To enable app level authentication, add `CRIAI_USERNAME` and `CRIAI_PASSWORD` to the `.env` file in `packages/server`:

```
CRIAI_USERNAME=user
CRIAI_PASSWORD=1234
```

## 🌱 Env Variables

Criai support different environment variables to configure your instance. You can specify the following variables in the `.env` file inside `packages/server` folder. Read [more](https://github.com/startupstudiobe/criai-chat/blob/main/CONTRIBUTING.md#-env-variables)

## 📖 Documentation

[Criai Docs](https://docs.criai.chat/)

## 🌐 Self Host

Deploy Criai self-hosted in your existing infrastructure, we support various [deployments](https://docs.criai.com/configuration/deployment)

-   [AWS](https://docs.criai.com/deployment/aws)
-   [Azure](https://docs.criai.com/deployment/azure)
-   [Digital Ocean](https://docs.criai.com/deployment/digital-ocean)
-   [GCP](https://docs.criai.com/deployment/gcp)
-   <details>
      <summary>Others</summary>

    -   [Railway](https://docs.criai.com/deployment/railway)

        [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/pn4G8S?referralCode=WVNPD9)

    -   [Render](https://docs.criai.com/deployment/render)

        [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.criai.com/deployment/render)

    -   [HuggingFace Spaces](https://docs.criai.com/deployment/hugging-face)

        <a href="https://huggingface.co/spaces/CriAI/Criai"><img src="https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-sm.svg" alt="HuggingFace Spaces"></a>

    -   [Elestio](https://elest.io/open-source/criai)

        [![Deploy](https://pub-da36157c854648669813f3f76c526c2b.r2.dev/deploy-on-elestio-black.png)](https://elest.io/open-source/criai)

    -   [Sealos](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dcriai)

        [![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dcriai)

    -   [RepoCloud](https://repocloud.io/details/?app_id=29)

        [![Deploy on RepoCloud](https://d16t0pc4846x52.cloudfront.net/deploy.png)](https://repocloud.io/details/?app_id=29)

      </details>

## 💻 Cloud Hosted


## 📄 License

Source code in this repository is made available under the [Apache License Version 2.0](LICENSE.md).
