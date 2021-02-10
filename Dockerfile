FROM node:13 as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ARG GOOGLE_CLIENT_ID=0
ARG DISCORD_CLIENT_ID=0
ARG PRODUCTION=0

ENV GOOGLE_CLIENT_ID ${GOOGLE_CLIENT_ID}
ENV DISCORD_CLIENT_ID ${DISCORD_CLIENT_ID}
ENV PRODUCTION ${PRODUCTION}

COPY package.json ./
RUN npm install

COPY webpack.config.js ./
COPY src/ ./src/
COPY proto/ ./proto
RUN npm run build

COPY src/favicon.ico ./dist/
COPY . ./


FROM nginx:stable-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html