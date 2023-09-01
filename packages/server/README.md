<!-- markdownlint-disable MD030 -->

# Criai - Low-Code LLM apps builder

English 

![Flowise](https://github.com/startupstudiobr/criai-chat/blob/main/images/criai.gif?raw=true)

Drag & drop UI to build your customized LLM flow

## ⚡Quick Start

1. Install Criai chat
    ```bash
    npm install -g criai-chat
    ```
2. Start Criai Chat

    ```bash
    npx criai-chat start
    ```

3. Open [http://localhost:3000](http://localhost:3000)

## 🔒 Authentication

To enable app level authentication, add `CRIAI_USERNAME` and `CRIAI_PASSWORD` to the `.env` file:

```
CRIAI_USERNAME=user
CRIAI_PASSWORD=1234
```

## 🌱 Env Variables

Criai support different environment variables to configure your instance. You can specify the following variables in the `.env` file inside `packages/server` folder. Read [more](https://github.com/startupstudiobr/criai-chat/blob/main/CONTRIBUTING.md#-env-variables)

You can also specify the env variables when using `npx`. For example:

```
npx criai-chat start --PORT=3000 --DEBUG=true
```

## 📖 Documentation

[Flowise Docs](https://docs.criai.chat/)

## 🌐 Self Host

### [Railway](https://docs.criai.chat/deployment/railway)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/YK7J0v)

### [Render](https://docs.criai.chat/deployment/render)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.criai.chat/deployment/render)

### [AWS](https://docs.criai.chat/deployment/aws)

### [Azure](https://docs.criai.chat/deployment/azure)

### [DigitalOcean](https://docs.criai.chat/deployment/digital-ocean)

### [GCP](https://docs.criai.chat/deployment/gcp)

## 💻 Cloud Hosted

Coming Soon

## 📄 License

Source code in this repository is made available under the [MIT License](https://github.com/startupstudiobr/criai-chat/blob/master/LICENSE.md).
