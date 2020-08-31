const express = require('express')
const app = express()
//const fileUpload = require('express-fileupload')
const http = require('http')
const server = http.createServer(app)
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { promisify } = require('util')
const { spawn } = require('child_process')
//const io = require('socket.io')(server)
const { WebSocket } = require('@clusterws/cws');
const port = 80

const mkdir = promisify(fs.mkdir)

const pythonExtract = (dir) => {
  return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python3', ['extract_assets.py', 'us', dir], { cwd: 'extractTools/' })
      //pythonProcess.stdout.on('data', (data) => { console.log(data.toString()) })
      //pythonProcess.stderr.on('data', (data) => { console.log(data.toString()) })
	  pythonProcess.stderr.on('close', () => { resolve() })
  })
}

const fileDownload = (file, url) => {
    return new Promise((resolve, reject) => {
        try {
            http.get(url, (response) => {
                const stream = response.pipe(file)
                stream.on('error', () => { reject('Fail') })
                stream.on('finish', () => { resolve() })
            })
        } catch {
            console.log("HTTP GET Error")
            fs.rmdirSync('extractTools/' + uid, { recursive: true })
            reject('Fail')
        }
    })
}

const extractJsonFromRomFile = async (dir) => {
    return new Promise(async (resolve, reject) => {
        try {
            await pythonExtract(dir)

            const extractedData = {}
            const assets = JSON.parse(fs.readFileSync('extractTools/assets.json'))
            Object.keys(assets).forEach((assetname) => {
                let filepath = assetname
                if (filepath == '@comment') return
                if (filepath.indexOf("skyboxes") != -1) { /// skybox
                    filepath = `extractTools/${dir}/${filepath}`
                    filepath = filepath.slice(0, filepath.length - 4) + "_skybox.c"
                    let filedata = fs.readFileSync(filepath, "utf8")
                    filedata = filedata.replace(/\r/g, "")
                    let lines = filedata.split("\n")
                    lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))
                    while (lines.length > 0) {
                        let section = lines.splice(0, 2)
                        if (section[0].slice(0, 24) == 'ALIGNED8 static const u8') {
                            const textureName = section[0].slice(25, section[0].length - 6)
                            const textureData = section[1].slice(0, section[1].indexOf('}'))
                            extractedData[textureName] = Buffer.from(textureData.split(','))
                        }
                    }
                } else {  /// not skybox
                    filepath = `extractTools/${dir}/${filepath}`
                    filepath = filepath.substring(0, filepath.length - 4)
                    const filedata = fs.readFileSync(filepath)
                    extractedData[assetname] = filedata
                }
            })
            fs.rmdirSync('extractTools/' + dir, { recursive: true })
            resolve(extractedData)
        } catch {
            console.log('Rom Extraction Fail')
            fs.rmdirSync('extractTools/' + dir, { recursive: true })
            resolve('Fail')
        }
    })
}

app.get("/romTransfer", async (req, res) => {

    console.log("rom transfer")

    const uid = uuidv4()
    await mkdir('extractTools/' + uid)

    const file = fs.createWriteStream('extractTools/' + uid + '/baserom.us.z64')
    await fileDownload(file, 'http://' + req.query.romExternal)

    res.send(await extractJsonFromRomFile(uid))

})

// app.post("/romUpload", async (req, res) => {
// 	const uid = uuidv4()
// 	await mkdir('extractTools/' + uid)
//
// 	req.files.filetoupload.mv('extractTools/' + uid + '/baserom.us.z64', async (err) => {
// 		if (err) {
// 			console.log(err)
// 			fs.rmdirSync('extractTools/' + uid, { recursive: true })
// 			return res.send('Fail')
// 		}
//
//         res.send(await extractJsonFromRomFile(uid))
//
// 	})
// })




//// Sockets

const connectedSockets = {}

/*io.on('connection', (socket) => {
    //connectedSockets[socket.id] = {}
    console.log("connection")

    socket.on('marioData', (marioData) => {
        socket.emit('allMarios', connectedSockets)

        //Validate data
        for (let i = 0; i < 3; i++) {
            if (isNaN(marioData.pos[i])) return
            if (isNaN(marioData.angle[i])) return
        }
        if (isNaN(marioData.animFrame)) return
        if (isNaN(marioData.animID)) return

        /// Data is Valid
        connectedSockets[socket.id] = marioData
    })

    socket.on('disconnect', () => {
        delete connectedSockets[socket.id]
    })
})*/


const wss = new WebSocket.Server({ server }, () => {
    console.log("ws Server is up")
})

wss.on('connection', (socket, req) => {
    console.log("there is a ws connection")
    socket.id = uuidv4()
    socket.send(JSON.stringify({ type: "id", data: socket.id }))


    socket.onmessage = (marioDataStr) => {
        const marioData = JSON.parse(marioDataStr)
        socket.send(JSON.stringify({ type: "allMarios", data: connectedSockets }))

        //Validate data
        for (let i = 0; i < 3; i++) {
            if (isNaN(marioData.pos[i])) return
            if (isNaN(marioData.angle[i])) return
        }
        if (isNaN(marioData.animFrame)) return
        if (isNaN(marioData.animID)) return

        /// Data is Valid
        connectedSockets[socket.id] = marioData
    }

    socket.onclose = () => {
        console.log("disconnect")
        delete connectedSockets[socket.id]
    }
})

app.use(express.static(__dirname + '/dist'))
//app.use(fileUpload())

server.listen(port, () => { console.log('starting server for ws') })

/*server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, socket => {
        wss.emit('connection', socket, request)
    })
})*/

