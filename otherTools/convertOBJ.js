const fs = require('fs')
var WorkFolder = "sm64js_toolkit"

// This is VERY unoptimized, basically just a tool for testing.

//	Don't touch anything in this file (besides WorkFolder) unless you're 
//	fixing/adding features, everything is handled through inputs/cmds
//	
//	EX: node convertOBJ special otherTools/objconvert/out/special
//	





//Ignore these, this is required for arguments.
var readPath = ""
var writePath = ""

//This is 21 because the triangles use 3 verts which we use to define this, 21*3 = 64 so this is the best possible value.
const MAX_TRI_READS = 21

// Required, not sure why it wouldn't accept the mkdir directly..
function MakeDirectory(directory) {
	if (!fs.existsSync(directory)) {
		console.log("Creating directory '" + directory + "' ..");
		fs.mkdirSync(directory, {
			recursive: true
		});
	}
}

function ReadFile(input) {
	var inputStr = fs.readFileSync(input, 'utf8')
	var inputStr = inputStr.replace(/\r/g, "")
	var lines = inputStr.split("\n")
	var lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))
	return lines;
}

function fixPos(i) {
	return [i[0], i[1], i[2]]
}

function getNormal(i) {
	// Normals are an unsigned byte, when not in G_LIGHTING they will behave as RGB(A, where A is always 255 because OBJ)
	let rv = i.map((x) => {
		console.log(`${parseFloat(x)}, ${parseFloat(x)+1}`);
		return Math.min(Math.round(((parseFloat(x)) * 127) + 128), 255);
	})
	rv.push(255);
	return rv;
}

function vertices(mdl) {
	var vList = { pos: [], tc: [], color: [] }
	var lines = ReadFile(readPath + mdl)
	lines.forEach(line => {
		let linesplit = line.trim().split(" ");
		let opcode = linesplit.splice(0,1)[0];
		switch (opcode) {
			case "v": {
				vList.pos.push(fixPos(linesplit));
				break;
			}
			case "vt": {
				const args = [upscaleUVX(linesplit[0]), upscaleUVY(linesplit[1])]
				vList.tc.push(args)
				break;
			}
			case "vn": {
				vList.color.push(getNormal(linesplit));
				break;
			}
		}
	})
	return vList;
}
function tZI(i) { return (parseInt(i) - 1) };
function upscaleUVX(i) { return parseInt(parseFloat(i) * 1024) };
function upscaleUVY(i) { return parseInt(parseFloat(i) * -1024) };

function splitTriVert(i, verts, triCount) {
	var splitone = i.split(' ');
	var r0 = splitone[0].split('/')
	var r1 = splitone[1].split('/')
	var r2 = splitone[2].split('/')
	var retV = [
		{ "pos": verts.pos[tZI(r0[0])], "tc": verts.tc[tZI(r0[1])], "color": verts.color[tZI(r0[2])] },
		{ "pos": verts.pos[tZI(r1[0])], "tc": verts.tc[tZI(r1[1])], "color": verts.color[tZI(r1[2])] },
		{ "pos": verts.pos[tZI(r2[0])], "tc": verts.tc[tZI(r2[1])], "color": verts.color[tZI(r2[2])] },
	]
	var retI = [0 + (3 * triCount), 1 + (3 * triCount), 2 + (3 * triCount)]
	var ret = [retI, retV]
	return ret;
}

function dlGen(materialCurrent, listToolx, vertL, triL) {
	return { "texture": materialCurrent, "name": `dl_${materialCurrent}_mesh_${listToolx}`, "vname": `dl_${materialCurrent}_vtx_${listToolx}`, "verts": vertL, "tris": triL }
}
function combineArrays(ar1, ar2) {
	var outAr = [];
	ar1.forEach(ite => { outAr.push(ite) })
	ar2.forEach(ite => { outAr.push(ite) })
	return outAr;
}

function visual() {
	var vList = vertices('vis.obj') // So we have something to read from
	var lines = ReadFile(readPath + "vis.obj")
	lines.push(`usemtl A`)
	var output = `import * as Gbi from "../../../../../include/gbi"\n\n\n\n`
	//Preemptive anti bullshit
	var hasMaterial = false;
	var inTriList = false;
	var materialCurrent = "";
	var listTool = 0;
	var triCount = 0;
	var vGen = []
	var tGen = []
	var dispGen = []
	lines.forEach(line => {
		var lineParse = line.trim();
		if (lineParse.slice(0, 7) == 'usemtl ') {
			const args = lineParse.trim().slice(7, lineParse.length)
			hasMaterial = true
			inTriList = true
			if (inTriList && materialCurrent == args) {
				//generate and add table here
				dispGen.push(dlGen(materialCurrent, listTool, vGen, tGen))
				triCount = 0
				vGen = []
				tGen = []
				listTool++
			} else if (inTriList) {
				//generate and add table here
				dispGen.push(dlGen(materialCurrent, listTool, vGen, tGen))
				triCount = 0
				vGen = []
				tGen = []
				listTool = 0;
			}
			materialCurrent = args
		} else if (lineParse.slice(0, 2) == 'f ') {
			triCount++;
			const args = lineParse.trim().slice(2, lineParse.length)
			var conv = splitTriVert(args, vList, triCount - 1);
			vGen = combineArrays(vGen, conv[1]);
			tGen.push(conv[0])
		}
		if (triCount >= MAX_TRI_READS) {
			dispGen.push(dlGen(materialCurrent, listTool, vGen, tGen))
			triCount = 0
			vGen = []
			tGen = []
			listTool++
		}
	})
	var outDl = ""
	var dlIDX = 0;
	//Continue here, we have what we want.
	dispGen.forEach(displayList => {
		if (dlIDX > 0) {
			outDl += `	Gbi.gsSPDisplayList(${displayList.name}),\n`
			var verList = `const ${displayList.vname} = [\n`
			displayList.verts.forEach(vert => {
				verList += `	{pos: [ ${vert.pos} ], flag: 0, tc: [ ${vert.tc} ], color: [ ${vert.color }]},\n`
			})
			verList += `]\n\n`
			var dlF = `//You may need to adjust this to fix any size issues.\nexport const ${displayList.name} = [\n	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ${displayList.texture}),\n	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),\n	Gbi.gsSPVertex(${displayList.vname}, 0, 0),\n`
			displayList.tris.forEach(triangle => {
				dlF += `	Gbi.gsSP1Triangle(${triangle[0]}, ${triangle[1]}, ${triangle[2]}, 0),\n`
			})
			dlF += `	Gbi.gsSPEndDisplayList(),\n]\n\n`
			output += `\n${verList}${dlF}`
		}
		dlIDX++;
	})
	output += `\n\n//Final display list\n\nconst ${model}_Lighting = Gbi.gdSPDefLights1(\n	    0xDf, 0xDf, 0xDf,\n	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28\n)\n\nexport const ${model}_DL = [\n	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),\n	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),\n	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),\n	Gbi.gsSPLight(${model}_Lighting.l[0], 1),\n	Gbi.gsSPLight(${model}_Lighting.a, 2),\n${outDl}	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),\n	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),\n	Gbi.gsSPEndDisplayList(),\n]\n`
	return output;
}
//Unused.
function collision() {
}

if (process.argv.length >= 4) {
	var model = process.argv[4] || "objconv" // level name in sm64ex directory, defaults to "objconv"
	readPath = process.argv[2];
	writePath = `./${process.argv[3]}`
	writePathMDL = `${writePath}/model.inc.js`
	writePathCOL = `${writePath}/collision.inc.js`
	MakeDirectory(writePath);
	fs.writeFileSync(writePathMDL, visual());

} else {
	console.log(`Run with the path! EX: node convertOBJ "model_file" "exportPath" "level_name"`)
}