FROM buildkite/puppeteer

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY webpack.config.js ./
COPY src/ ./src/
COPY proto/ ./proto
RUN npm run build

COPY . ./

CMD ["node", "puppet.js"]