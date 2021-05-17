const fs = require('fs')
const os = require('os')
const animCdir = require('os').homedir() + '/Programming/sm64pc/assets/anims'
const marioAnimData = {}

const processAnimFile = (file) => {
    const animIDStr = file.slice(file.indexOf('_')+1,file.indexOf('.'))
    const data = fs.readFileSync(file, 'utf8').split('')
    const headerData = data.splice(0, data.indexOf(';') + 1).join('').split('\n')
    let secondHeaderData
    let leftOverData = data.join('')
    if (animIDStr.length >= 4) {  /// for the case where its 2 in 1, need to remove extra header
        secondHeaderData = data.splice(4, data.indexOf(';') + 1).join('').split('\n')
        leftOverData = data.join('')
    }
    const indices = leftOverData.slice(leftOverData.indexOf('{')+1, leftOverData.indexOf('}')-2).split(',').map((index) => parseInt(index))
    const valueData = leftOverData.slice(leftOverData.indexOf('}')+2)
    const values = valueData.slice(valueData.indexOf('{') + 1, valueData.indexOf('}') - 2).split(',').map((value) => parseInt(value))
    const newAnimObject = {
        flags: parseInt(headerData[1]),
        unk02: parseInt(headerData[2]),
        unk04: parseInt(headerData[3]),
        unk06: parseInt(headerData[4]),
        unk08: parseInt(headerData[5]),
        unk0A: (indices.length / 6) - 1,
        indices,
        values
    }
    if (animIDStr.length < 4) {
        marioAnimData[parseInt('0x' + animIDStr)] = newAnimObject
    } else {
        const first = animIDStr.slice(0, 2)
        const second = animIDStr.slice(3)
        marioAnimData[parseInt('0x' + first)] = newAnimObject
        marioAnimData[parseInt('0x' + second)] = {
            flags: parseInt(secondHeaderData[1]),
            unk02: parseInt(secondHeaderData[2]),
            unk04: parseInt(secondHeaderData[3]),
            unk06: parseInt(secondHeaderData[4]),
            unk08: parseInt(secondHeaderData[5]),
            unk0A: (indices.length / 6) - 1,
            indices,
            values
        }
    }

}

fs.readdirSync(animCdir).forEach(file => { processAnimFile(animCdir + "/" + file) })

fs.writeFileSync(__dirname + "/marioAnimData.js", "export const gMarioAnimData = " + JSON.stringify(marioAnimData))
