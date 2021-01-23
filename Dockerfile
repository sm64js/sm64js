FROM node:13-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

COPY src/favicon.ico ./dist/

FROM nginx:stable-alpine

COPY --from=build ./dist /usr/share/nginx/html
