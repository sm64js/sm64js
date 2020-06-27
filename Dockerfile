FROM node:13-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY extractTools/ ./
RUN cd extractTools/
RUN gcc -I . -DMIO0_STANDALONE libmio0.c -o mio0
RUN gcc -I . -DN64GRAPHICS_STANDALONE n64graphics.c utils.c -o n64graphics
RUN cd ..

COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

CMD ["npm", "run", "serveProduction"]