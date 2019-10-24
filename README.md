# ludo_v2_frontend

> Nuxt.js project

## Development Guide

### Prerequisites
- install [Docker](https://www.docker.com/) on your computer

### How to
- `cd` to project root directory. Run `docker-compose up `
- `docker-compose up ludo_f2e_dev` for development
- `docker-compose up ludo_f2e` for production
- Open http://localhost
- Start coding :)

### How to Add New NPM Packages?
- Run `docker exec -it ludo_v2_frontend_ludo_f2e_1 /bin/sh` to dive into the container
- `npm install --save/--save-dev your_package` we use `volume`, so changes of package.json & package-lock.json can be traced by the host's git
- `docker-compose down && docker-compose build --no-cache && docker-compose up` for adding any new package into docker

## Production
- `cd` to project root directory
- docker build -t IMAGE_NAME .