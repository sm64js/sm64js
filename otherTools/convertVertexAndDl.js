const fs = require('fs')

const input = require('os').homedir() + '/Programming/sm64pc/actors/mario/model.inc.c'
let lines = fs.readFileSync(input, 'utf8').split("\n")
lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))

let outputStr = ""

while (lines.length > 0) {

    let endSection = lines.indexOf('};')
    if (lines.indexOf(');') != -1 && lines.indexOf(');') < endSection) endSection = lines.indexOf(');')
    const section = lines.splice(0, endSection + 1)

    if (section[0].slice(0, 16) == 'static const Vtx') { //vertex
        const vtxArrayName = section[0].slice(17, section[0].indexOf('['))
        outputStr += `const ${vtxArrayName} = [\n`
        section.slice(1, section.length - 1).forEach(line => {
            const items = line.split(',').map(item => parseInt(item.replace(/[{}\s]/g, '')))
            outputStr += `\t{ pos: [ ${items[0]}, ${items[1]}, ${items[2]} ], flag: ${items[3]}, tc: [ ${items[4]}, ${items[5]} ], color: [ ${items[6]}, ${items[7]}, ${items[8]}, ${items[9]} ] },\n`
        })
        outputStr += `]\n\n`
    } else if (section[0].slice(6, 9) == 'Gfx') { //DL
        const dlArrayName = section[0].slice(10, section[0].indexOf('['))
        outputStr += `export const ${dlArrayName} = [\n`
        section.slice(1, section.length - 1).forEach(line => {
            line = `Gbi.${line.slice(4)}`
            if (line.slice(4, 16) == 'gsDPPipeSync') return
            if (line.slice(4, 16) == 'gsDPLoadSync') return
            if (line.slice(4, 16) == 'gsDPTileSync') return
            if (line.slice(4, 16) == 'gsDPSetAlpha') return
            if (line.slice(4, 16) == 'gsDPSetCombi') line = `${line.slice(0, line.indexOf(','))}),`
            let idx = line.indexOf("CALC_DXT")
            if (idx != -1) line = `${line.slice(0, idx - 2)}),`
            if (line.slice(4, 12) == 'gsSP2Tri') line = `...${line}`
            outputStr += `\t${line}\n`
        })
        outputStr += `]\n\n`
    } else if (section[0].slice(0, 20) == 'static const Lights1') {
        outputStr += `const ${section[0].slice(21, section[0].length - 16)} Gbi.gdSPDefLights1(\n`
        section.slice(1, section.length - 1).forEach(line => {
            outputStr += `\t${line}\n`
        })
        outputStr += `)\n\n`
    }
}

outputStr = outputStr.replace(/&/g, "")
outputStr = outputStr.replace(/ G_/g, " Gbi.G_")
outputStr = outputStr.replace(/\(G_/g, "(Gbi.G_")
outputStr = outputStr.replace(/\.l/g, ".l[0]")

fs.writeFileSync(__dirname + "/vertexDlData.js", outputStr)
