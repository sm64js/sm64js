FROM node:8-alpine

RUN mkdir -p /usr/src/app

RUN apk update && apk add curl

WORKDIR /usr/src/app

RUN npm install
COPY . ./

RUN npm run build

CMD ["npm", "run", "serveProduction"]

EXPOSE 80
