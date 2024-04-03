# Flowise Docker Hub Image

Starts Flowise from [DockerHub Image](https://hub.docker.com/r/criaiai/criai)

## Usage

1. Create `.env` file and specify the `PORT` (refer to `.env.example`)
2. `docker-compose up -d`
3. Open [http://localhost:3000](http://localhost:3000)
4. You can bring the containers down by `docker-compose stop`

## 🔒 Authentication

1. Create `.env` file and specify the `PORT`, `CRIAI_USERNAME`, and `CRIAI_PASSWORD` (refer to `.env.example`)
2. Pass `CRIAI_USERNAME` and `CRIAI_PASSWORD` to the `docker-compose.yml` file:
    ```
    environment:
        - PORT=${PORT}
        - CRIAI_USERNAME=${CRIAI_USERNAME}
        - CRIAI_PASSWORD=${CRIAI_PASSWORD}
    ```
3. `docker-compose up -d`
4. Open [http://localhost:3000](http://localhost:3000)
5. You can bring the containers down by `docker-compose stop`

## 🌱 Env Variables

If you like to persist your data (flows, logs, apikeys, credentials), set these variables in the `.env` file inside `docker` folder:

-   DATABASE_PATH=/root/.criai
-   APIKEY_PATH=/root/.criai
-   LOG_PATH=/root/.criai/logs
-   SECRETKEY_PATH=/root/.criai
-   BLOB_STORAGE_PATH=/root/.criai/storage

Flowise also support different environment variables to configure your instance. Read [more](https://docs.criaiai.com/environment-variables)
