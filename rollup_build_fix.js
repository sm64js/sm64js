const fs = require('fs')

let code = fs.readFileSync('./dist/index.js').toString()

code = code.replace(
    `    const WebSocket = require('./lib/websocket');

    WebSocket.createWebSocketStream = require('./lib/stream');
    WebSocket.Server = require('./lib/websocket-server');
    WebSocket.Receiver = require('./lib/receiver');
    WebSocket.Sender = require('./lib/sender');
    module.exports = WebSocket;

    var WebSocket$1 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });`,

    `\n    const WebSocket$1 = require('ws')`)

code = code.replace(
    `'use strict';\n`,

    `'use strict';\n    const window = {}\n`)

fs.writeFileSync('./dist/index.js', code)