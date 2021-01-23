FROM node:13 as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY webpack.config.js ./
COPY src/ ./src/
COPY proto/ ./proto
RUN npm run build

COPY src/favicon.ico ./dist/
COPY src/emotes/ ./dist/emotes/
COPY src/mini/ ./dist/mini/
COPY . ./


FROM nginx:stable-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html