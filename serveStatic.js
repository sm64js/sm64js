const express = require('express');
const app = express();
const http = require('http');
const port = 80;
const backupPort = 1024;
const server = http.createServer(app);

app.use(express.static(__dirname + '/dist'));

// Attempt to listen on port 80
server.listen(port, () => {
    console.log('Serving Files on port 80');
});

// If port 80 cannot be used try 1024 with wont require special privileges
server.on('error', (error) => {
    if (error.code === 'EACCES' || error.code === 'EADDRINUSE') {
        console.log(`Port ${port} cannot be used. Trying backup port ${backupPort}...`);
        server.listen(backupPort, () => {
            console.log(`Serving Files on backup port ${backupPort}`);
        });
    } else {
        console.error('Server error:', error);
    }
});
