const fs = require('fs')

// Configure these variables to get it to work
var level = "castle_grounds" // level name in sm64ex directory
var snum = 1 // used as a counter variable
var num = 32 // number of model.inc.js files there are
var areaNum = 1 // target area number
var vOutputStr1 = level // folder to put in 'converted'
var mainDir = __dirname + '/converted/' + vOutputStr1 + '/areas/' + areaNum + '/' // directory to put models in


const skipCommands = [
    'gsDPPipeSync',
    'gsDPLoadSync',
    'gsDPTileSync',
    'gsDPSetAlpha',
    "gsSPPerspNormalize",
    'gDPPipeSync',
    'gDPLoadSync',
    'gDPTileSync',
    'gDPSetAlpha',
    'gSPPerspNormalize',
    'gsDPSetDepthSource'
]

// Required, not sure why it wouldn't accept the mkdir directly..
function MakeDirectory(directory) {
	if (!fs.existsSync(directory)) {
		console.log("Creating directory '" + directory + "' ..");
		fs.mkdirSync(directory, {
			recursive: true
		});
	}
}


const renderModes = {
	"G_RM_OPA_SURF,G_RM_OPA_SURF2": "G_RM_OPA_SURF_SURF2",
	"G_RM_AA_OPA_SURF,G_RM_AA_OPA_SURF2": "G_RM_AA_OPA_SURF_SURF2",
	"G_RM_AA_XLU_SURF,G_RM_AA_XLU_SURF2": "G_RM_AA_XLU_SURF_SURF2",
	"G_RM_ZB_OPA_SURF,G_RM_ZB_OPA_SURF2": "G_RM_ZB_OPA_SURF_SURF2",
	"G_RM_AA_ZB_TEX_EDGE,G_RM_NOOP2": "G_RM_AA_ZB_TEX_EDGE_NOOP2",
	"G_RM_AA_ZB_OPA_INTER,G_RM_NOOP2": "G_RM_AA_ZB_OPA_INTER_NOOP2",
	"G_RM_AA_ZB_XLU_DECAL,G_RM_AA_ZB_XLU_DECAL2": "G_RM_AA_ZB_XLU_DECAL_DECAL2",
	"G_RM_AA_ZB_XLU_SURF,G_RM_AA_ZB_XLU_SURF2": "G_RM_AA_ZB_XLU_SURF_SURF2",
	"G_RM_AA_ZB_OPA_SURF,G_RM_AA_ZB_OPA_SURF2": "G_RM_AA_ZB_OPA_SURF_SURF2",
	"G_RM_AA_ZB_OPA_DECAL,G_RM_AA_ZB_OPA_DECAL2": "G_RM_AA_ZB_OPA_DECAL_DECAL2",
	"G_RM_AA_ZB_XLU_INTER,G_RM_AA_ZB_XLU_INTER2": "G_RM_AA_ZB_XLU_INTER_INTER2",
	"G_RM_FOG_SHADE_A,G_RM_AA_ZB_OPA_SURF2": "G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2",
	"G_RM_FOG_SHADE_A,G_RM_AA_ZB_TEX_EDGE2": "G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2",
	"G_RM_FOG_SHADE_A,G_RM_AA_ZB_OPA_DECAL2": "G_RM_FOG_SHADE_A_AA_ZB_OPA_DECAL2",
	"G_RM_AA_ZB_OPA_SURF,G_RM_NOOP2": "G_RM_AA_ZB_OPA_SURF_SURF2",  ///not exact match but seems to work
	"G_RM_AA_ZB_OPA_DECAL,G_RM_NOOP2": "G_RM_AA_ZB_OPA_DECAL_DECAL2",  ///not exact match but seems to work
}

const convertRenderModeLine = (line) => {
	const index = line.indexOf('(')
	const index2 = line.indexOf(')')
	const renderModeKey = line.substring(index + 1, index2).replace(/ /g, "")
	const jsRenderMode = renderModes[renderModeKey]
	if (jsRenderMode == undefined) {
		console.log("Warning: could not match render mode, you must manually fix")
		console.log(line)
		return line
	}
	return line
}

// Preemptively make the main directory for output to avoid issues.
MakeDirectory(mainDir);
while (snum <= num) {
convert("1")
convert("2")
convert("3")
convert("4")
convert("5")
convert("6")
convert("model")
snum = snum + 1
}

function convert(MDTY) {
	var input = require('os').homedir() + '/sm64ex/levels/' + level + '/areas/' + areaNum + '/' + snum + '/' + MDTY + '.inc.c' // directory of each model file
	if (!fs.existsSync(input)) {return;}
	let inputStr = fs.readFileSync(input, 'utf8')
	inputStr = inputStr.replace(/\r/g, "")
	let lines = []

	//// deal with ); or }; not being by itself on a line
	inputStr.split("\n").forEach(line => {
		if (line.indexOf(');') != -1) {
			let splitline = line.split(');')
			lines.push(splitline[0])
			lines.push(');')
			lines.push(splitline[1])
		} else if (line.indexOf('};') != -1) {
			let splitline = line.split('};')
			lines.push(splitline[0])
			lines.push('};')
			lines.push(splitline[1])
		} else {
			lines.push(line)
        }
	})

	lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))

	var outputStr = ""

	while (lines.length > 0) {

		let endSection = lines.indexOf('};')
		if (lines.indexOf(');') != -1 && lines.indexOf(');') < endSection) endSection = lines.indexOf(');')
		let section
		if (lines[1].indexOf('};') != -1) {
			section = lines.splice(0, 2)
		} else {
			section = lines.splice(0, endSection + 1)
		}

		const firstElems = section[0].split(' ')

		if (section[0].slice(0, 16) == 'static const Vtx') { //vertex
			const vtxArrayName = section[0].slice(17, section[0].indexOf('['))
			outputStr += `const ${vtxArrayName} = [\n`
			section.slice(1, section.length - 1).forEach(line => {
				const items = line.split(',').map(item => parseInt(item.replace(/[{}\s]/g, '')))
				outputStr += `\t{ pos: [ ${items[0]}, ${items[1]}, ${items[2]} ], flag: ${items[3]}, tc: [ ${items[4]}, ${items[5]} ], color: [ ${items[6]}, ${items[7]}, ${items[8]}, ${items[9]} ] },\n`
			})
			outputStr += `]\n\n`
		} else if (section[0].slice(0, 9) == 'const Gfx' || section[0].slice(0, 16) == 'static const Gfx') { //DL
			const dlArrayName = section[0].slice(section[0].indexOf('Gfx') + 4, section[0].indexOf('['))
			outputStr += `export const ${dlArrayName} = [\n`
			section.slice(1, section.length - 1).forEach(line => {
				line = `Gbi.${line.slice(4)}`

				if (skipCommands.includes(line.slice(4, line.indexOf('(')))) return
				if (line.slice(4, 16) == 'gsDPSetCombi') line = `${line.slice(0, line.indexOf(','))}),`
				let idx = line.indexOf("CALC_DXT")
				if (idx != -1) line = `${line.slice(0, idx - 2)}),`
				if (line.slice(4, 12) == 'gsSP2Tri') line = `...${line}`
				if (line.slice(4, 17) == 'gsDPSetRender') line = convertRenderModeLine(line)

				outputStr += `\t${line}\n`
			})
			outputStr += `]\n\n`
		} else if (section[0].slice(0, 20) == 'static const Lights1' || section[0].slice(0, 7) == 'Lights1') {

			const startIndex = section[0].slice(0, 7) == 'Lights1' ? 8 : 21

			outputStr += `const ${section[0].slice(startIndex, section[0].length - 16)} Gbi.gdSPDefLights1(\n`
			section.slice(1, section.length - 1).forEach(line => {
				outputStr += `\t${line}\n`
			})
			outputStr += `)\n\n`
		} else if (section[0].slice(0, 24) == 'ALIGNED8 static const u8') {
			const textureName = section[0].slice(25, section[0].length - 6)
			const textureData = section[1].slice(0, section[1].indexOf('}'))
			outputStr += `const ${textureName} = [\n${textureData}\n]\n`
		} else if (firstElems[0] == 'u8') {
			console.log('Warning not recognized section starting with u8 possibly a texture?')
			console.log(section[0])
        } else {
			console.log("Could not parse: " + section[0])
		}
	}

	outputStr = outputStr.replace(/&/g, "")
	outputStr = outputStr.replace(/ G_/g, " Gbi.G_")
	outputStr = outputStr.replace(/\(G_/g, "(Gbi.G_")
	outputStr = outputStr.replace(/\.l/g, ".l[0]")

	outputStr = 'import * as Gbi from "../../../../../include/gbi"\n' + outputStr

	var dir = mainDir + snum;

	MakeDirectory(dir);
	fs.writeFileSync(__dirname + '/converted/' + vOutputStr1 + '/areas/' + areaNum + '/' + snum + '/' + MDTY + '.inc.js', outputStr)

}