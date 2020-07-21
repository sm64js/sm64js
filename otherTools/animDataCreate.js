const fs = require('fs')
const os = require('os')
const animCdir = require('os').homedir() + '/Programming/sm64pc/assets/anims'
const marioAnimData = {}

const processAnimFile = (file) => {
    const animIDStr = file.slice(file.indexOf('_')+1,file.indexOf('.'))
    if (animIDStr.length > 2) return
    const data = fs.readFileSync(file, 'utf8').split('')
    const headerData = data.splice(0, data.indexOf(';')+1).join('').split('\n')
    const leftOverData = data.join('')
    const indices = leftOverData.slice(leftOverData.indexOf('{')+1, leftOverData.indexOf('}')-2).split(',').map((index) => parseInt(index))
    const valueData = leftOverData.slice(leftOverData.indexOf('}')+2)
    const values = valueData.slice(valueData.indexOf('{')+1, valueData.indexOf('}')-2).split(',').map((value) => parseInt(value))
    marioAnimData[parseInt('0x'+animIDStr)] = {
        flags: parseInt(headerData[1]),
        unk02: parseInt(headerData[2]),
        unk04: parseInt(headerData[3]),
        unk06: parseInt(headerData[4]),
        unk08: parseInt(headerData[5]),
        unk0A: (indices.length / 6) - 1 ,
        indices,
        values
    }
}

fs.readdirSync(animCdir).forEach(file => { processAnimFile(animCdir + "/" + file) })

fs.writeFileSync(__dirname + "/marioAnimData.js", "export const gMarioAnimData = " + JSON.stringify(marioAnimData))
