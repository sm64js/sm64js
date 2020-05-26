const express = require('express')
const app = express()
const server = require('http').Server(app)
const port = 80

app.use(express.static(__dirname + '/dist'))
server.listen(port, () => {
	console.log('Serving Files')
})
