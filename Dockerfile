FROM node:13-alpine

RUN apk update && apk add gcc

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY extractTools/ ./extractTools/
RUN gcc -I extractTools -DMIO0_STANDALONE extractTools/libmio0.c -o extractTools/mio0
RUN gcc -I . -DN64GRAPHICS_STANDALONE n64graphics.c utils.c -o n64graphics

COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

CMD ["npm", "run", "serveProduction"]