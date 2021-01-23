FROM node:13-alpine

RUN apk update && apk add gcc libc-dev bash python3

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

COPY src/favicon.ico ./dist/

CMD ["npm", "run", "serve"]
