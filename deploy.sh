#!/bin/sh
docker build -t ludo_frontend_base_server:latest .
docker-compose down
docker-compose up -d