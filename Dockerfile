FROM node:13-alpine

RUN apk update && apk add gcc libc-dev bash python3

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY extractTools/ ./extractTools/
RUN gcc -I extractTools -DMIO0_STANDALONE extractTools/libmio0.c -o extractTools/mio0
RUN gcc -I extractTools -DN64GRAPHICS_STANDALONE extractTools/n64graphics.c extractTools/utils.c -o extractTools/n64graphics
RUN gcc -I extractTools extractTools/skyconv.c extractTools/n64graphics.c extractTools/utils.c -o extractTools/skyconv

COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

COPY src/favicon.ico ./dist/

CMD ["npm", "run", "serve"]
