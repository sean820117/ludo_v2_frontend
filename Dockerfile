FROM node:11.13-alpine

ENV NODE_ENV production

RUN mkdir -p /var/www/app
WORKDIR /var/www/app

RUN apk add ncurses

COPY ./package.json ./package-lock.json /var/www/app/
RUN npm install

COPY . /var/www/app
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD sh ./start.sh