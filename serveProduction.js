const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const server = require('http').Server(app)
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { promisify } = require('util')
const { spawn } = require('child_process')
const port = 80

const deleteFile = promisify(fs.unlink)
const mkdir = promisify(fs.mkdir)

const pythonExtract = (dir) => {
  return new Promise((resolve, reject) => {
	  const pythonProcess = spawn('python3', ['extract_assets.py', 'us', dir], { cwd: 'extractTools/' })
	  pythonProcess.stderr.on('close', () => { resolve() })
  })
}

const hexDumpExtract = (dir) => {
  return new Promise((resolve, reject) => {
	  const hexDumpProcess = spawn('bash', ['../hexdumpTextures.sh'], { cwd: 'extractTools/' + dir })
	  hexDumpProcess.stderr.on('close', () => { resolve() })
  })
}

app.use(express.static(__dirname + '/dist'))
app.use(fileUpload())
server.listen(port, () => {
	console.log('Serving Files')
})

app.post("/romUpload", async (req, res) => {
	const uid = uuidv4()
	await mkdir('extractTools/' + uid)

	req.files.filetoupload.mv('extractTools/' + uid + '/baserom.us.z64', async (err) => {
		if (err) {
			console.log(err)
			fs.rmdirSync('extractTools/' + uid, { recursive: true })
			return res.send('Fail')
		}

        try {
            await pythonExtract(uid)
            await hexDumpExtract(uid)
            const extractedData = {}
            const assets = JSON.parse(fs.readFileSync('extractTools/assets.json'))
            Object.keys(assets).forEach((assetname) => {
                let filepath = assetname
                if (filepath == '@comment') return
                filepath = `extractTools/${uid}/${filepath}`
                filepath = filepath.substring(0, filepath.length - 4) + ".js"
                const filedata = fs.readFileSync(filepath, "utf8")
                extractedData[assetname] = filedata
            })
            fs.rmdirSync('extractTools/' + uid, { recursive: true })
            return res.send(extractedData)
        } catch {
            fs.rmdirSync('extractTools/' + uid, { recursive: true })
            return res.send('Fail')
        }


	})
})
