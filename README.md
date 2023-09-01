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
    docker run -d --name criai-chat -p 3000:3000 flowise
    ```

3. Stop image:
    ```bash
    docker stop criai-chat
    ```

## 👨‍💻 Developers

Flowise has 3 different modules in a single mono repository.

-   `server`: Node backend to serve API logics
-   `ui`: React frontend
-   `components`: Langchain components

### Prerequisite

-   Install [Yarn v1](https://classic.yarnpkg.com/en/docs/install)
    ```bash
    npm i -g yarn
    ```

### Setup

1. Clone the repository

    ```bash
    git clone https://github.com/FlowiseAI/Flowise.git
    ```

2. Go into repository folder

    ```bash
    cd Flowise
    ```

3. Install all dependencies of all modules:

    ```bash
    yarn install
    ```

4. Build all the code:

    ```bash
    yarn build
    ```

5. Start the app:

    ```bash
    yarn start
    ```

    You can now access the app on [http://localhost:3000](http://localhost:3000)

6. For development build:

    - Create `.env` file and specify the `PORT` (refer to `.env.example`) in `packages/ui`
    - Create `.env` file and specify the `PORT` (refer to `.env.example`) in `packages/server`
    - Run

        ```bash
        yarn dev
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

### [Railway](https://docs.criai.cat/deployment/railway)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/pn4G8S?referralCode=WVNPD9)

### [Render](https://docs.criai.chat/deployment/render)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.criai.chat/deployment/render)

### [HuggingFace Spaces](https://docs.criai.chat/deployment/hugging-face)

<a href="https://huggingface.co/spaces/FlowiseAI/Flowise"><img src="https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-sm.svg" alt="HuggingFace Spaces"></a>

### [AWS](https://docs.criai.chat/deployment/aws)

### [Azure](https://docs.criai.chat/deployment/azure)

### [DigitalOcean](https://docs.criai.chat/deployment/digital-ocean)

### [GCP](https://docs.criai.chat/deployment/gcp)

## 💻 Cloud Hosted


## 📄 License

Source code in this repository is made available under the [MIT License](LICENSE.md).
