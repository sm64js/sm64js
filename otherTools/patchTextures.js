const fs = require('fs')

//Yes, I reused the 'convertVertexAndDL' file ~0x2480


//This is gonna need SERIOUS cleaning up later, very messy.



// Configure these variables to get it to work

var WorkFolder = "sm64js"

//This is where it will get info on missing assets.
var CWorkFolder = "sm64ex"

//Levels to check & patch
var LEVELS = [
	'ttm',
	//'ccm',
]

var srcTextures = [
	'generic.js',
	'mountain.js',
	'outside.js',
	'snow.js',
]

var textureInsertIndexes = [
	17, //assets.js, both
	8, //romTextureLoader.js - for import
	182, //romTextureLoader.js - for push
	0, //model.inc.js
]

var idx = 0;
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

//! Edited & Reused for the texture patch, searches these files after splitting them.

//! Merges 'txt' into zero indexed line in file specified by directory. Always before the original line so adding
//! a newline will move the original line down.
function InsertStringAt(directory,txt,idx) {
	if (fs.existsSync(directory)) {
		var inputStr = fs.readFileSync(directory, 'utf8')
		var inputStr = inputStr.replace(/\r/g, "")
		var lines = inputStr.split("\n")
		var OUT = "";
		var lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))
		var TXT = "" + lines[idx];
		lines[idx] = txt + TXT
		lines.forEach(line => {
			OUT += line+'\n';
		})
		fs.writeFile(directory, OUT, function (err) {
		  if (err) throw err;
		  console.log(`Wrote '${directory}'`)
		});
	}
}
function Patch(directory,txt) {
	if (fs.existsSync(directory)) {
		fs.writeFileSync(directory, txt + fs.readFileSync(directory, 'utf8'));
		  console.log(`Wrote '${directory}'`)
	}
}
function addMdlToList(path) {
	if (fs.existsSync(path)) {
		console.log(path)
		MODELS.push(path)
	} 
	// else {
		// console.log('Invalid path: '+path)
	// }
}
	var LOOP = 1
	var LOOP2 = 1
	var LOOP3 = 1

	var MODELS = []
function createTextureReference(ref,backCount) {
	var refN = ""
	var rr = 0 
	
	for (rr = 0; rr < backCount; rr++) {
		refN += "../"	
	}
	refN += "textures/" + ref

	return refN;
}
function createTextureReferenceRaw(ref,backCount) {
	var refN = ""
	var rr = 0 
	
	for (rr = 0; rr < backCount; rr++) {
		refN += "../"	
	}
	refN += ref

	return refN;
}
	var MDLS_TXTR = [
						["temp", //model path
							[
								["t1",["",""]], //t1 - texture directory for import, array - textures to import
							]
						]
					]
//MDLS_TXTR[0][1][1][1]
//Gets the index of a texture group in model. If it doesn't exist this will return 0;
function indexOfTGroup(mdl,target) {
	var ret = 0;
	var idx = 0;
	MDLS_TXTR[mdl][1].forEach(check => {
		if (check[0] == target) {return idx}
		idx++;
	})
	return 0;
}
function addTGroup(mdl,target) {
	var ret = MDLS_TXTR[mdl][1].length;
	MDLS_TXTR[mdl][1].push([target,[]])
	return ret;
}
function addToTGroup(mdl,target,add) {
	MDLS_TXTR[mdl][1][target][1].push(add);
}
	var Scanning = false;
while (idx < LEVELS.length){
	var lvl = LEVELS[idx]
	
	const LevelDirectory = require('os').homedir() + '/' + WorkFolder + '/src/levels/' + lvl + '/'
	
	const TexturesDirectory = require('os').homedir() + '/' + WorkFolder + '/src/textures/'
	const AssetsDirectory = require('os').homedir() + '/' + WorkFolder + '/src/assets.js'
	const EToolsAssetsDirectory = require('os').homedir() + '/' + WorkFolder + '/extractTools/assets.js'
	const RomLoaderDirectory = require('os').homedir() + '/' + WorkFolder + '/src/romTextureLoader.js'
	
	if (!fs.existsSync(LevelDirectory)) {
		console.log(`Level directory invalid : ${LevelDirectory}`)
		return;
	}
	if (Scanning) {return;}
	LOOP = 1
	LOOP2 = 1
	LOOP3 = 1
	MODELS = []
	var TEXTURES = []
	console.log(`Level directory valid : ${LevelDirectory}`)
	console.log(`Scanning directory for model files...`)
	Scanning = true;
	if (fs.existsSync(LevelDirectory + "model.inc.js")) {console.log(`Found : ${LevelDirectory}model.inc.js`)}
	for (LOOP = 1; LOOP <= 16; LOOP++) {
		addMdlToList(LevelDirectory + "areas/"  + LOOP+"/model.inc.js")
		for (LOOP2 = 1; LOOP2 <= 32; LOOP2++) {
			addMdlToList(LevelDirectory + "areas/" + LOOP+"/"+LOOP2+"/model.inc.js")
			for (LOOP3 = 1; LOOP3 <= 8; LOOP3++) {
				addMdlToList(LevelDirectory + "areas/" + LOOP+"/"+LOOP2+"/"+LOOP3+".inc.js")
			}
		}
	}
		var cUdTxtr = []
		var DTxtr = []
		//dont read from zero on this, is temporary
		//this is basically just a cheap method to store all unreferenced textures along with the paths and models
	MODELS.forEach(mdl => {
		var hasMdl = false;
		var mdlIndex = 0;
		MDLS_TXTR.forEach(mdlArray => {
			if (mdlArray[0] == mdl) {
				hasMdl = true;
			} else {
				mdlIndex++	
			}
		})
		//MDLS_TXTR[mdlIndex][1][1]
		//1 is a real texture list, not 0
		//If 1 is null then break.
		if (!hasMdl) {
			mdlIndex = MDLS_TXTR.length;
			MDLS_TXTR.push(			
			[mdl, //model path
				[
					["t1",["",""]], //t1 - texture directory for import, array - textures to import
				]
			]);	
		}
		//Used so we can read through the model and search for specific functions.
		var inputStr = fs.readFileSync(mdl, 'utf8')
		var inputStr = inputStr.replace(/\r/g, "")
		var lines = inputStr.split("\n")
		var lines = lines.filter(line => (line.length != 0) && (line[0] != '/'))
		var inImport = false;
		var inImport_targ = "";
		lines.forEach(lineParse => {
			
			if (lineParse.trim().slice(0, 2) != "//") {
				if (lineParse.trim().slice(0, 8) == "import {" && !lineParse.trim().includes("} from ")) {
					inImport = true;
					console.log('Read import texture - type 0')
				} else if (lineParse.trim().slice(0, 7) == "} from "  && !lineParse.trim().includes("import {")) {
					inImport = false;
					console.log('Read import texture - type 1')
				} else 
				if (lineParse.trim().slice(0, 8) != "import {" && lineParse.trim().slice(0, 7) != "} from " && inImport) {
					const txtr = lineParse.trim().slice(0, lineParse.trim().indexOf(','))
					console.log('Read import texture - type 2')
					if (txtr.trim() != "" && txtr.trim() != " " && txtr.trim() != "\n") {
					TEXTURES.push(txtr.trim())
					}
				} else 
				if (lineParse.trim().slice(0, 8) == "import {" && lineParse.trim().includes("} from ")) {	
					const txtrA = lineParse.trim().slice(9, lineParse.trim().indexOf('} from ') - 1).split(', ')
					console.log('Read import texture - type 3')
						txtrA.forEach(txtr => {
							if (txtr.trim() != "" && txtr.trim() != " " && txtr.trim() != "\n") {
							TEXTURES.push(txtr.trim())
							}
						})
				}	
			}
		})
		var udTxtr = []
		lines.forEach(lineParse => {
			if (lineParse.trim().slice(0, 2) != "//") {
				if (lineParse.trim().slice(0, 23) == "Gbi.gsDPSetTextureImage") {
					const Texture = lineParse.trim().slice(24, lineParse.trim().indexOf(')')).split(', ')[3] //[3] should be the texture.
					if (!TEXTURES.includes(Texture) && Texture != "\n" && Texture != "" && Texture != "" && Texture != "\n\n" && Texture != "  ") {
						//Temporary arrays for texture list stuff
						//Start with one.

						
						console.log(`Unimported texture '${Texture}' in '${mdl}'!`)
						udTxtr.push(Texture);
						var isUndef = true;
						srcTextures.forEach(sT => {
							if (fs.readFileSync(TexturesDirectory + sT, 'utf8').includes(Texture)) {
								var ref = mdl.split('/').length - (TexturesDirectory.split('/').length - 1)
								var ref = createTextureReference(sT,ref);
								var idxTG = indexOfTGroup(mdlIndex,ref)
								if (indexOfTGroup(mdlIndex,ref) == 0) {
									idxTG = addTGroup(mdlIndex,ref);
								}
								isUndef = false;
								if (!DTxtr.includes(Texture)) {
									DTxtr.push(Texture)
								}
								addToTGroup(mdlIndex,idxTG,Texture)
								
							}
						})
						var ref = mdl.split('/').length - (LevelDirectory.split('/').length)
						var ref = createTextureReferenceRaw("textures.inc.js",ref);

						if (fs.existsSync(LevelDirectory + "textures.inc.js")) {
							if (fs.readFileSync(LevelDirectory + "textures.inc.js", 'utf8').includes(Texture)) {isUndef = false;
								var idxTG = indexOfTGroup(mdlIndex,ref)
								if (indexOfTGroup(mdlIndex,ref) == 0) {
									idxTG = addTGroup(mdlIndex,ref);
								}
								if (!DTxtr.includes(Texture)) {
										DTxtr.push(Texture)
								}
								addToTGroup(mdlIndex,idxTG,Texture)
							}
						}
						if (isUndef && !cUdTxtr.includes(Texture)) {
							cUdTxtr.push(Texture)
						}
						
						
						
						
						
					}
				}
			}
		})
	})
		if (cUdTxtr != []) {
			cUdTxtr.forEach(Texture => {
				console.log(`Texture '${Texture}' is completely undefined!`)
			})
		}
		if (DTxtr != []) {
			DTxtr.forEach(Texture => {
				console.log(Texture)
			})
		}
	Scanning = false;
	idx++;
}
var ListingTextRan = 0;
	if (ListingTextRan == 0) {
		console.clear();
		console.log(`\n---------------------------------------------------\nListing missing/unimported textures in files\n---------------------------------------------------\n`)
		ListingTextRan = 1;
	}
var mdidx = 0;
MDLS_TXTR.forEach(Model => {
	var ModelName = Model[0];
	var TextureGroups = Model[1];
	var spacing = ""
	if (mdidx == 0) {mdidx++;return;}
	console.log(`${spacing}Model = ${ModelName}`)
	var idx = 0;
	TextureGroups.forEach(Group => {
		if (idx == 0) {idx++;return;}
		var spacing = "      "
		var TextureName = Group[0]
		console.log(`${spacing} TGroup = ${TextureName}`);
		var TextureList = Group[1]
		Patch(ModelName,makeTextureReference(TextureList,TextureName)+'\n');
		TextureList.forEach(TXT => {
			var spacing = "            "
			console.log(`${spacing} Texture : ${TXT}`);
			var spacing = "      "
		})
	})
})

function makeTextureReference(textureArray,ref) {
	var out = ""
	textureArray.forEach(txr => {
		out += txr.trim() + ", "
	})
	return `import {${out}} from "${ref}"`;
}
