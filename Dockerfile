FROM node:13 as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install


COPY . ./
RUN npm run babelRollup


CMD ["npm", "run", "startNode"]