# Ultra Mobile API Gateway

This a basic scaffold meant to demonstrate a project that serves as an API gateway (a.k.a.;
reverse proxy) to underlying endpoints. The usefulness for this in the enterprise will be explained
separately in a Word document. This is just supplemtnary code to the document.

## Project Folders

| Folder       | Description                             |
| ------------ | --------------------------------------- |
| `app`        | Application files and API routes.       |
| `docker`     | Docker files to stand up dev instances. |
| `public`     | Static files that are public.           |
| `tests`      | Functional tests, mocks, and fixutures. |

_Note, the `tests` directory is for functional tests. Unit tests should reside next to the file
in which they are testing._

## Installation

On a Linux machine, setup is pretty straightforward if you have a recent version of Node installed
already. First you need to install Docker. If you're on any Debian or Ubuntu-based distribution
you can follow the instructions found on
[Docker's website](https://docs.docker.com/engine/install/ubuntu/).

Once installed, simply go into the project's root directory and run the following commands.

```bash
npm i

# -d means detached mode
sudo systemctl enable docker
sudo docker compose -f docker/compose.yml up -d
```

That's it. The project is installed now. Do note that MySQL is set to start up boot. But, by
default, Apache and Redis will need to be started manually. Also, you'll most likely want to
install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) or
[Beekeeper Studio](https://docs.beekeeperstudio.io/installation/linux/).

```bash
# install Beekeeper GPG key
curl -fsSL https://deb.beekeeperstudio.io/beekeeper.key \
  | sudo gpg --dearmor --output /usr/share/keyrings/beekeeper.gpg \
  && sudo chmod go+r /usr/share/keyrings/beekeeper.gpg \
  && echo "deb [signed-by=/usr/share/keyrings/beekeeper.gpg] https://deb.beekeeperstudio.io stable main" \
  | sudo tee /etc/apt/sources.list.d/beekeeper-studio-app.list > /dev/null

# install Beekeeper
sudo apt update
sudo apt install beekeeper-studio -y
```

## Running the Project

```bash
# if Apache and Redis are not started, first verify image names and then start
sudo docker ps -a
sudo docker start mysql
sudo docker start redis
sudo docker start wordpress

# once everything is running
npm run dev
```

If you want to troubleshoot the containers. You can log into them via:

```bash
sudo docker exec -it mysql /bin/bash
sudo docker exec -it redis /bin/bash
sudo docker exec -it wordpress /bin/bash
```

The API Gateway will use the following URLs.

| Application | URL            |
| ----------- | -------------- |
| API Gateway | localhost:4000 |
| WordPress   | localhost:8080 |

You can get the MySQL and Redis IPs via:

```bash
# redis
sudo docker inspect --format='{{.NetworkSettings.Networks.docker_default.IPAddress}}' redis

# mysql
sudo docker inspect --format='{{.NetworkSettings.Networks.docker_default.IPAddress}}' mysql
```

## Resetting the Project

If you need to wipe out all containers to try again:

```bash
# wipes the project's containers and volumes
sudo docker compose -f docker/compose.yml down -v

# wipes the project's containers and but leaves volumes
sudo docker compose -f docker/compose.yml down
```

## Considerations

Despite the fact that the latest version of LTS version Node supports native TypeScript
transpilation (22), it's still considered
[experiemental](https://nodejs.org/en/learn/typescript/run-natively) until version 23 and the LTS
version is not without issues (enums, etc.).

As such, we're still building with `esbuild` until the next LTS release of Node that will have this
feature marked as stable.
