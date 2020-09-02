const express = require('express')
const app = express()
//const fileUpload = require('express-fileupload')
const http = require('http')
const server = http.createServer(app)
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { promisify } = require('util')
const { spawn } = require('child_process')
const { WebSocket } = require('@clusterws/cws')
const port = 80

const mkdir = promisify(fs.mkdir)

const { MarioMsg, MarioListMsg } = require("./proto/mario_pb")
const message = new MarioMsg()
const message2 = new MarioMsg()

message.setPlayername("John Doe") 
message.setSkinid(25)
message.setAnimid(6) 
message.setAnimframe(2)
message.setAngleList([900, -800, 0])
message.setPosList([90, -80, 1000])

message2.setPlayername("Snuffy Linder")
message2.setSkinid(62)
message2.setAnimid(32)
message2.setAnimframe(12)
message2.setAngleList([523, -888, 16])
message2.setPosList([36, -498, 189])

const mariolistmsg = new MarioListMsg()
//mariolistmsg.setMarioList([message, message2])
mariolistmsg.addMario(message)
mariolistmsg.addMario(message2)

const bytes = mariolistmsg.serializeBinary()

console.log(bytes)

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

const wss = new WebSocket.Server({ server }, () => {})

wss.on('connection', (socket, req) => {
    socket.id = uuidv4()
    socket.send(JSON.stringify({ type: "id", data: socket.id }))

    let mariodataTimeout

    socket.onmessage = (marioDataStr) => {
        const marioData = JSON.parse(marioDataStr)

        const filteredMarios = Object.entries(connectedSockets).filter(([id, data]) => {
            return id != socket.id && data.valid > 10
        }).map(([id]) => { return connectedSockets[id] })
        socket.send(JSON.stringify({ type: "allMarios", data: filteredMarios }))

        //Pretty strict validation
        for (let i = 0; i < 3; i++) {
            if (isNaN(marioData.pos[i])) return
            if (isNaN(marioData.angle[i])) return
        }
        if (isNaN(marioData.animFrame)) return
        if (isNaN(marioData.animID) || 0 > marioData.animID) return
        if (isNaN(marioData.skinID) || 0 > marioData.skinID || marioData.skinID > 9) return
        marioData.playerName = String(marioData.playerName).substring(0, 14)

        /// Data is Valid
        marioData.valid = connectedSockets[socket.id] ? ++connectedSockets[socket.id].valid : 0 
        connectedSockets[socket.id] = marioData
        clearTimeout(mariodataTimeout)
        mariodataTimeout = setTimeout(() => { connectedSockets[socket.id].valid = 0 }, 500)
    }

    socket.onclose = () => {
        clearTimeout(mariodataTimeout)
        delete connectedSockets[socket.id]
    }
})

app.use(express.static(__dirname + '/dist'))
//app.use(fileUpload())

server.listen(port, () => { console.log('Starting Server') })

/*server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, socket => {
        wss.emit('connection', socket, request)
    })
})*/

