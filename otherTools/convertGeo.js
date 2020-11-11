const fs = require('fs')

//Yes, I reused the 'convertVertexAndDL' file ~0x2480
//You no longer need to touch snum or num, it checks if the files exist.

// Configure these variables to get it to work
var level = "wf" // level name in sm64ex directory
var baseGeo = true // whether you're converting the base geo.inc or one within a model directory
var snum = 1 // used as a counter variable (Keep 1!)
var num = 32 // number of model.inc.js files there are
var areaNum = 1 // target area number
var mainDir = __dirname + '/converted/' + level + '/areas/' + areaNum + '/' // directory to put models in

//Not sure whether we need to skip commands.
const skipCommands = [
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
//Search for .inc.c files 1 through 6 and 'model' for specified string. Used for display lists.
//! I only search up to six to avoid lag and make sure we get every possible model.
//! Probably won't do much as we are searching through area files but still useful nonetheless,
//! TTM has a geo file for one of them so still good to check through the files.
function SearchAndApplyDLs(directory,reference,areaN) {
	var RefFiles = ""
	if (fs.existsSync(directory + "1.inc.c")) {
		if (fs.readFileSync(directory + "1.inc.c", 'utf8').includes(reference)) {
			RefFiles += `import { ${reference} } from "./1.inc"\n`
			console.log(`(${areaN}/geo.inc.js) Define found for '${reference}', adding...`);
		}
	}
	if (fs.existsSync(directory + "2.inc.c")) {
		if (fs.readFileSync(directory + "2.inc.c", 'utf8').includes(reference)) {
			RefFiles += `import { ${reference} } from "./2.inc"\n`
			console.log(`(${areaN}/geo.inc.js) Define found for '${reference}', adding...`);
		}
	}
	if (fs.existsSync(directory + "3.inc.c")) {
		if (fs.readFileSync(directory + "3.inc.c", 'utf8').includes(reference)) {
			RefFiles += `import { ${reference} } from "./3.inc"\n`
			console.log(`(${areaN}/geo.inc.js) Define found for '${reference}', adding...`);
		}
	}
	if (fs.existsSync(directory + "4.inc.c")) {
		if (fs.readFileSync(directory + "4.inc.c", 'utf8').includes(reference)) {
			RefFiles += `import { ${reference} } from "./4.inc"\n`
			console.log(`(${areaN}/geo.inc.js) Define found for '${reference}', adding...`);
		}
	}
	if (fs.existsSync(directory + "5.inc.c")) {
		if (fs.readFileSync(directory + "5.inc.c", 'utf8').includes(reference)) {
			RefFiles += `import { ${reference} } from "./5.inc"\n`
			console.log(`(${areaN}/geo.inc.js) Define found for '${reference}', adding...`);
		}
	}
	if (fs.existsSync(directory + "6.inc.c")) {
		if (fs.readFileSync(directory + "6.inc.c", 'utf8').includes(reference)) {
			RefFiles += `import { ${reference} } from "./6.inc"\n`
			console.log(`(${areaN}/geo.inc.js) Define found for '${reference}', adding...`);
		}
	}
	if (fs.existsSync(directory + "model.inc.c")) {
		if (fs.readFileSync(directory + "model.inc.c", 'utf8').includes(reference)) {
			RefFiles += `import { ${reference} } from "./model.inc"\n`
			console.log(`(${areaN}/geo.inc.js) Define found for '${reference}', adding...`);
		}
	}
	return RefFiles;
}

// Preemptively make the main directory for output to avoid issues.
MakeDirectory(mainDir);
function ReadFile(input) {
	var inputStr = fs.readFileSync(input, 'utf8')
	var inputStr = inputStr.replace(/\r/g, "")
	var lines = inputStr.split("\n")
	var lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))
	return lines;
}
function CompileGeo(lines,AreaDir,isBase = false) {
	var LoadCamera = false
	var LoadSkybox = false
	var outputStr = ""
	var AdditionalFiles = ""
	lines.forEach(lineParse => {
		if (lineParse.trim().slice(0, 2) != "//") {
			if (lineParse.trim().slice(0, 16) == 'const GeoLayout ') { //geolayout
				const geoLayoutName = lineParse.trim().slice(16, lineParse.trim().indexOf('['))
				outputStr += `export const ${geoLayoutName} = [\n`
			} else if (lineParse.trim().slice(0, 2) == '};') { //geolayout end(?) (hack)
				const geoLayoutName = lineParse.trim().slice(16, lineParse.trim().indexOf('['))
				outputStr += `]\n`
			} else if (lineParse.trim().slice(0, 18) == 'GEO_CULLING_RADIUS') { //cull radius
				const cullRadius = lineParse.trim().slice(19, lineParse.trim().indexOf('),'))
				outputStr += `{ command: Geo.node_culling_radius, args: [${cullRadius}] },\n`
			} else if (lineParse.trim().slice(0, 13) == 'GEO_OPEN_NODE') { //open node
				outputStr += `{ command: Geo.open_node },\n`
			} else if (lineParse.trim().slice(0, 14) == 'GEO_CLOSE_NODE') { //close node
				outputStr += `{ command: Geo.close_node },\n`
			} else if (lineParse.trim().slice(0, 7) == 'GEO_END') { //end
				outputStr += `{ command: Geo.node_end },\n`
			} else if (lineParse.trim().slice(0, 14) == 'GEO_RENDER_OBJ') { //end
				outputStr += `{ command: Geo.node_render_object_parent },\n`
			} else if (lineParse.trim().slice(0, 16) == 'GEO_RENDER_RANGE') { //render range
				const renderRange = lineParse.trim().slice(17, lineParse.trim().indexOf('),'))
				outputStr += `{ command: Geo.node_render_range, args: [${renderRange}] },\n`
			} else if (lineParse.trim().slice(0, 16) == 'GEO_DISPLAY_LIST') { //dl ----------- TODO : Make this search files in the same folder for the DL it's trying to render. 
				const dList = lineParse.trim().slice(17, lineParse.trim().indexOf('),'))
				const ArrayArgs = dList.split(', ')
				AdditionalFiles += SearchAndApplyDLs(AreaDir,ArrayArgs[1],snum)
				outputStr += `{ command: Geo.display_list, args: [Geo.${dList}] },\n`
			} else if (lineParse.trim().slice(0, 7) == 'GEO_ASM') { //dl
				const asm = lineParse.trim().slice(8, lineParse.trim().indexOf('),'))
				outputStr += `{ command: Geo.node_generated, args: [${asm}]},\n`
			} else if (lineParse.trim().slice(0, 11) == 'GEO_ZBUFFER') { //dl
				const zb = lineParse.trim().slice(12, lineParse.trim().indexOf('),'))
				outputStr += `{ command: Geo.node_master_list, args: [${zb}]},\n`
			} else if (lineParse.trim().slice(0, 14) == 'GEO_NODE_ORTHO') { //dl
				const ortho = lineParse.trim().slice(15, lineParse.trim().indexOf('),'))
				outputStr += `{ command: Geo.node_ortho, args: [${ortho}]},\n`
			} else if (lineParse.trim().slice(0, 20) == 'GEO_BACKGROUND_COLOR') { //dl
				LoadSkybox = true
				const ortho = lineParse.trim().slice(21, lineParse.trim().indexOf('),'))
				outputStr += `// TODO GEO_BACKGROUND_COLOR(${ortho}),\n`
			} else if (lineParse.trim().slice(0, 20) == 'GEO_NODE_SCREEN_AREA') { //dl
				const scrArea = lineParse.trim().slice(21, lineParse.trim().indexOf('),'))
				var ScrAreaFIXED = `args: [${scrArea}],\n`;
				ScrAreaFIXED = ScrAreaFIXED.replace("SCREEN_WIDTH","canvas.width"); // Fix the screen area arguments. Cheap method.
				ScrAreaFIXED = ScrAreaFIXED.replace("SCREEN_HEIGHT","canvas.height"); // Fix the screen area arguments. Cheap method.
				outputStr += `{\n`
				outputStr += `command: Geo.node_screen_area,\n`
				outputStr += ScrAreaFIXED;
				outputStr += `},\n`
			} else if (lineParse.trim().slice(0, 28) == 'GEO_CAMERA_FRUSTUM_WITH_FUNC') { //dl
				LoadCamera = true
				const cFrFu = lineParse.trim().slice(29, lineParse.trim().indexOf('),'))
				const ArrayArgs = cFrFu.split(', ')
				outputStr += `{ command: Geo.node_perspective, args: [${ArrayArgs[0]}, ${ArrayArgs[1]}, ${ArrayArgs[2]}, Camera.${ArrayArgs[3]}] },\n`
			} else if (lineParse.trim().slice(0, 14) == 'GEO_BACKGROUND') { //dl
				LoadSkybox = true
				const background = lineParse.trim().slice(15, lineParse.trim().indexOf('),'))
				outputStr += `{ command: GeoLayout.node_background, args: [GeoLayout.${background}] },\n`
			} else if (lineParse.trim().slice(0, 10) == 'GEO_CAMERA') { //dl
				LoadCamera = true
				const cCam = lineParse.trim().slice(11, lineParse.trim().indexOf('),'))
				outputStr += `{\n`
				outputStr += `command: Geo.node_camera,\n`
				outputStr += `args: [${cCam}],\n`
				outputStr += `},\n`
			} else {
				console.log("Could not parse: " + lineParse.trim())
			}
		}
	})

	outputStr = outputStr.replace(/&/g, "")
	outputStr = outputStr.replace(/ G_/g, " Gbi.G_")
	outputStr = outputStr.replace(/\(G_/g, "(Gbi.G_")
	outputStr = outputStr.replace(/\.l/g, ".l[0]")

	outputStr = AdditionalFiles + outputStr
	if (LoadSkybox && !isBase) {outputStr = 'import { geo_skybox_main } from "../../../../game/LevelGeo"\n' + outputStr}
	if (LoadSkybox && isBase) {outputStr = 'import { geo_skybox_main } from "../../../game/LevelGeo"\n' + outputStr}
	if (LoadCamera && !isBase) {outputStr = 'import { CameraInstance as Camera } from "../../../../game/Camera"\n' + outputStr}
	if (LoadCamera && isBase) {outputStr = 'import { CameraInstance as Camera } from "../../../game/Camera"\n' + outputStr}
	if (!isBase)outputStr = 'import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"\n' + outputStr	
	if (isBase)outputStr = 'import { GeoLayoutInstance as Geo } from "../../../engine/GeoLayout"\n' + outputStr	
	return outputStr;
}

var inputBase = require('os').homedir() + '/sm64ex/levels/' + level + '/areas/' +areaNum+ '/geo.inc.c' // directory of each model file
var AreaDirBase = require('os').homedir() + '/sm64ex/levels/' + level + '/areas/' +areaNum + '/'  // used for DL checks
	if (fs.existsSync(inputBase)) {
		MakeDirectory(__dirname + '/converted/' + level + '/areas/' + areaNum + '/');
		fs.writeFileSync(__dirname + '/converted/' + level + '/areas/' + areaNum + '/geo.inc.js', CompileGeo(ReadFile(inputBase),AreaDirBase))
	}
while (snum <= num) {
	var input = require('os').homedir() + '/sm64ex/levels/' + level + '/areas/' +areaNum+ '/' + snum + '/geo.inc.c' 
	var cAreaDir = require('os').homedir() + '/sm64ex/levels/' + level + '/areas/' +areaNum+ '/' + snum + '/' 
	if (fs.existsSync(input)) {
		MakeDirectory(__dirname + '/converted/' + level + '/areas/' + areaNum + '/' + snum + '/');
		fs.writeFileSync(__dirname + '/converted/' + level + '/areas/' + areaNum + '/' + snum + '/geo.inc.js', CompileGeo(ReadFile(input),cAreaDir))
	}
	snum = snum + 1
}
