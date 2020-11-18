import * as Gbi from "../../include/gbi"

export const mario_texture_yellow_button = []

export const mario_texture_m_logo = []

export const mario_texture_eyes_front = []

export const mario_texture_eyes_half_closed = []

export const mario_texture_eyes_closed = []

export const mario_texture_hair_sideburn = []

export const mario_texture_mustache = []

// 0x04000000 # solid color blue - butt, left thigh, right thigh - all poly types
const mario_overalls_lights_group = (customData) => {
	return Gbi.gdSPDefLights1(...customData.mario_overalls_lights, 0x28, 0x28, 0x28)
}

// 0x04000018 # solid color red - left & right arm, torso (tshirt part), caps - all poly types
const mario_hat_lights_group = (customData) => {
	return Gbi.gdSPDefLights1(...customData.mario_hat_lights, 0x28, 0x28, 0x28)
}

const mario_shirt_lights_group = (customData) => {
	return Gbi.gdSPDefLights1(...customData.mario_shirt_lights, 0x28, 0x28, 0x28)
}

// 0x04000030 # solid color white - metal butt & left thigh - normal left & right hand closed & open (with cap too) and all wings - all poly types
const mario_white_lights_group = (customData) => {
	return Gbi.gdSPDefLights1(...customData.mario_gloves_lights, 0x28, 0x28, 0x28)
}

// 0x04000048 # solid color brown 1 - foot - all poly types
const mario_brown1_lights_group = (customData) => {
	return Gbi.gdSPDefLights1(...customData.mario_boots_lights, 0x28, 0x28, 0x28)
}

// 0x04000060 # solid color beige skin - face (cap on and off dls) - all poly types
const mario_beige_lights_group = (customData) => {
	return Gbi.gdSPDefLights1(...customData.mario_skin_lights, 0x28, 0x28, 0x28)
}

// 0x04000078  # solid color brown 2 - hair - all poly types
const mario_brown2_lights_group = (customData) => {
	return Gbi.gdSPDefLights1(...customData.mario_hair_lights, 0x28, 0x28, 0x28)
}


const mario_butt_dl_vertex_group1 = [
	{ pos: [-9, 73, -34], flag: 0, tc: [0, 0], color: [194, 107, 230, 0] },
	{ pos: [-9, 73, 34], flag: 0, tc: [0, 0], color: [190, 106, 18, 0] },
	{ pos: [22, 82, -26], flag: 0, tc: [0, 0], color: [7, 126, 245, 0] },
	{ pos: [73, 11, 0], flag: 0, tc: [0, 0], color: [126, 4, 0, 0] },
	{ pos: [55, -61, -36], flag: 0, tc: [0, 0], color: [103, 190, 225, 0] },
	{ pos: [44, -10, -92], flag: 0, tc: [0, 0], color: [79, 242, 158, 0] },
	{ pos: [7, 33, 95], flag: 0, tc: [0, 0], color: [230, 38, 117, 0] },
	{ pos: [44, -9, 92], flag: 0, tc: [0, 0], color: [79, 242, 98, 0] },
	{ pos: [43, 40, 91], flag: 0, tc: [0, 0], color: [78, 48, 87, 0] },
	{ pos: [8, -8, -99], flag: 0, tc: [0, 0], color: [243, 238, 132, 0] },
	{ pos: [36, -51, -79], flag: 0, tc: [0, 0], color: [48, 184, 164, 0] },
	{ pos: [26, -74, -46], flag: 0, tc: [0, 0], color: [24, 136, 226, 0] },
	{ pos: [36, -52, 79], flag: 0, tc: [0, 0], color: [48, 184, 92, 0] },
	{ pos: [26, -74, 45], flag: 0, tc: [0, 0], color: [18, 136, 34, 0] },
	{ pos: [55, -61, 36], flag: 0, tc: [0, 0], color: [96, 179, 26, 0] },
]

const mario_butt_dl_vertex_group2 = [
	{ pos: [-5, 59, 72], flag: 0, tc: [0, 0], color: [192, 82, 71, 0] },
	{ pos: [-9, 73, 34], flag: 0, tc: [0, 0], color: [190, 106, 18, 0] },
	{ pos: [-32, 40, 39], flag: 0, tc: [0, 0], color: [139, 37, 29, 0] },
	{ pos: [52, 70, 38], flag: 0, tc: [0, 0], color: [83, 93, 22, 0] },
	{ pos: [22, 82, 26], flag: 0, tc: [0, 0], color: [7, 125, 17, 0] },
	{ pos: [27, 72, 63], flag: 0, tc: [0, 0], color: [6, 108, 66, 0] },
	{ pos: [43, 40, -91], flag: 0, tc: [0, 0], color: [78, 48, 169, 0] },
	{ pos: [27, 72, -63], flag: 0, tc: [0, 0], color: [7, 107, 190, 0] },
	{ pos: [52, 70, -39], flag: 0, tc: [0, 0], color: [89, 86, 229, 0] },
	{ pos: [-5, 59, -72], flag: 0, tc: [0, 0], color: [192, 82, 185, 0] },
	{ pos: [-17, 32, -79], flag: 0, tc: [0, 0], color: [164, 35, 177, 0] },
	{ pos: [-32, 40, -39], flag: 0, tc: [0, 0], color: [137, 37, 235, 0] },
	{ pos: [73, 11, 0], flag: 0, tc: [0, 0], color: [126, 4, 0, 0] },
	{ pos: [43, 40, 91], flag: 0, tc: [0, 0], color: [78, 48, 87, 0] },
]

const mario_butt_dl_vertex_group3 = [
	{ pos: [-14, -74, 0], flag: 0, tc: [0, 0], color: [203, 141, 0, 0] },
	{ pos: [-9, -69, 55], flag: 0, tc: [0, 0], color: [205, 151, 48, 0] },
	{ pos: [-31, -51, 42], flag: 0, tc: [0, 0], color: [141, 215, 31, 0] },
	{ pos: [26, -74, -46], flag: 0, tc: [0, 0], color: [24, 136, 226, 0] },
	{ pos: [-9, -69, -55], flag: 0, tc: [0, 0], color: [205, 151, 208, 0] },
	{ pos: [4, -48, -86], flag: 0, tc: [0, 0], color: [216, 186, 159, 0] },
	{ pos: [4, -49, 86], flag: 0, tc: [0, 0], color: [216, 185, 97, 0] },
	{ pos: [26, -74, 45], flag: 0, tc: [0, 0], color: [18, 136, 34, 0] },
	{ pos: [-32, 40, 39], flag: 0, tc: [0, 0], color: [139, 37, 29, 0] },
	{ pos: [-9, 73, 34], flag: 0, tc: [0, 0], color: [190, 106, 18, 0] },
	{ pos: [-32, 40, -39], flag: 0, tc: [0, 0], color: [137, 37, 235, 0] },
	{ pos: [27, 72, 63], flag: 0, tc: [0, 0], color: [6, 108, 66, 0] },
	{ pos: [-5, 59, 72], flag: 0, tc: [0, 0], color: [192, 82, 71, 0] },
	{ pos: [52, 70, -39], flag: 0, tc: [0, 0], color: [89, 86, 229, 0] },
	{ pos: [22, 82, -26], flag: 0, tc: [0, 0], color: [7, 126, 245, 0] },
	{ pos: [52, 70, 38], flag: 0, tc: [0, 0], color: [83, 93, 22, 0] },
]

const mario_butt_dl_vertex_group4 = [
	{ pos: [6, 33, -95], flag: 0, tc: [0, 0], color: [230, 38, 139, 0] },
	{ pos: [27, 72, -63], flag: 0, tc: [0, 0], color: [7, 107, 190, 0] },
	{ pos: [43, 40, -91], flag: 0, tc: [0, 0], color: [78, 48, 169, 0] },
	{ pos: [-31, -51, 42], flag: 0, tc: [0, 0], color: [141, 215, 31, 0] },
	{ pos: [-31, -51, -42], flag: 0, tc: [0, 0], color: [145, 208, 220, 0] },
	{ pos: [-14, -74, 0], flag: 0, tc: [0, 0], color: [203, 141, 0, 0] },
	{ pos: [-9, -69, -55], flag: 0, tc: [0, 0], color: [205, 151, 208, 0] },
	{ pos: [73, 11, 0], flag: 0, tc: [0, 0], color: [126, 4, 0, 0] },
	{ pos: [44, -10, -92], flag: 0, tc: [0, 0], color: [79, 242, 158, 0] },
	{ pos: [52, 70, 38], flag: 0, tc: [0, 0], color: [83, 93, 22, 0] },
	{ pos: [52, 70, -39], flag: 0, tc: [0, 0], color: [89, 86, 229, 0] },
	{ pos: [43, 40, 91], flag: 0, tc: [0, 0], color: [78, 48, 87, 0] },
	{ pos: [44, -9, 92], flag: 0, tc: [0, 0], color: [79, 242, 98, 0] },
	{ pos: [7, 33, 95], flag: 0, tc: [0, 0], color: [230, 38, 117, 0] },
	{ pos: [27, 72, 63], flag: 0, tc: [0, 0], color: [6, 108, 66, 0] },
]

const mario_butt_dl_vertex_group5 = [
	{ pos: [-5, 59, -72], flag: 0, tc: [0, 0], color: [192, 82, 185, 0] },
	{ pos: [-9, 73, -34], flag: 0, tc: [0, 0], color: [194, 107, 230, 0] },
	{ pos: [27, 72, -63], flag: 0, tc: [0, 0], color: [7, 107, 190, 0] },
	{ pos: [-32, 40, -39], flag: 0, tc: [0, 0], color: [137, 37, 235, 0] },
	{ pos: [-32, 40, 39], flag: 0, tc: [0, 0], color: [139, 37, 29, 0] },
	{ pos: [-18, 32, 79], flag: 0, tc: [0, 0], color: [164, 35, 79, 0] },
	{ pos: [-5, 59, 72], flag: 0, tc: [0, 0], color: [192, 82, 71, 0] },
	{ pos: [22, 82, -26], flag: 0, tc: [0, 0], color: [7, 126, 245, 0] },
	{ pos: [52, 70, -39], flag: 0, tc: [0, 0], color: [89, 86, 229, 0] },
	{ pos: [27, 72, 63], flag: 0, tc: [0, 0], color: [6, 108, 66, 0] },
	{ pos: [43, 40, 91], flag: 0, tc: [0, 0], color: [78, 48, 87, 0] },
	{ pos: [52, 70, 38], flag: 0, tc: [0, 0], color: [83, 93, 22, 0] },
	{ pos: [8, -8, 99], flag: 0, tc: [0, 0], color: [243, 239, 124, 0] },
	{ pos: [36, -52, 79], flag: 0, tc: [0, 0], color: [48, 184, 92, 0] },
	{ pos: [44, -9, 92], flag: 0, tc: [0, 0], color: [79, 242, 98, 0] },
]

const mario_butt_dl_vertex_group6 = [
	{ pos: [6, 33, -95], flag: 0, tc: [0, 0], color: [230, 38, 139, 0] },
	{ pos: [43, 40, -91], flag: 0, tc: [0, 0], color: [78, 48, 169, 0] },
	{ pos: [44, -10, -92], flag: 0, tc: [0, 0], color: [79, 242, 158, 0] },
	{ pos: [44, -9, 92], flag: 0, tc: [0, 0], color: [79, 242, 98, 0] },
	{ pos: [36, -52, 79], flag: 0, tc: [0, 0], color: [48, 184, 92, 0] },
	{ pos: [55, -61, 36], flag: 0, tc: [0, 0], color: [96, 179, 26, 0] },
	{ pos: [-18, 32, 79], flag: 0, tc: [0, 0], color: [164, 35, 79, 0] },
	{ pos: [7, 33, 95], flag: 0, tc: [0, 0], color: [230, 38, 117, 0] },
	{ pos: [-5, 59, 72], flag: 0, tc: [0, 0], color: [192, 82, 71, 0] },
	{ pos: [-20, -7, 81], flag: 0, tc: [0, 0], color: [163, 249, 85, 0] },
	{ pos: [8, -8, 99], flag: 0, tc: [0, 0], color: [243, 239, 124, 0] },
	{ pos: [4, -49, 86], flag: 0, tc: [0, 0], color: [216, 185, 97, 0] },
	{ pos: [-20, -8, -81], flag: 0, tc: [0, 0], color: [163, 248, 171, 0] },
	{ pos: [8, -8, -99], flag: 0, tc: [0, 0], color: [243, 238, 132, 0] },
	{ pos: [4, -48, -86], flag: 0, tc: [0, 0], color: [216, 186, 159, 0] },
]

const mario_butt_dl_vertex_group7 = [
	{ pos: [-5, 59, -72], flag: 0, tc: [0, 0], color: [192, 82, 185, 0] },
	{ pos: [6, 33, -95], flag: 0, tc: [0, 0], color: [230, 38, 139, 0] },
	{ pos: [-17, 32, -79], flag: 0, tc: [0, 0], color: [164, 35, 177, 0] },
	{ pos: [-20, -8, -81], flag: 0, tc: [0, 0], color: [163, 248, 171, 0] },
	{ pos: [7, 33, 95], flag: 0, tc: [0, 0], color: [230, 38, 117, 0] },
	{ pos: [-18, 32, 79], flag: 0, tc: [0, 0], color: [164, 35, 79, 0] },
	{ pos: [-20, -7, 81], flag: 0, tc: [0, 0], color: [163, 249, 85, 0] },
	{ pos: [-32, 40, -39], flag: 0, tc: [0, 0], color: [137, 37, 235, 0] },
	{ pos: [55, -61, 36], flag: 0, tc: [0, 0], color: [96, 179, 26, 0] },
	{ pos: [73, 11, 0], flag: 0, tc: [0, 0], color: [126, 4, 0, 0] },
	{ pos: [44, -9, 92], flag: 0, tc: [0, 0], color: [79, 242, 98, 0] },
	{ pos: [55, -61, -36], flag: 0, tc: [0, 0], color: [103, 190, 225, 0] },
	{ pos: [36, -51, -79], flag: 0, tc: [0, 0], color: [48, 184, 164, 0] },
	{ pos: [44, -10, -92], flag: 0, tc: [0, 0], color: [79, 242, 158, 0] },
	{ pos: [8, -8, -99], flag: 0, tc: [0, 0], color: [243, 238, 132, 0] },
]

const mario_butt_dl_vertex_group8 = [
	{ pos: [8, -8, 99], flag: 0, tc: [0, 0], color: [243, 239, 124, 0] },
	{ pos: [4, -49, 86], flag: 0, tc: [0, 0], color: [216, 185, 97, 0] },
	{ pos: [36, -52, 79], flag: 0, tc: [0, 0], color: [48, 184, 92, 0] },
	{ pos: [-9, 73, -34], flag: 0, tc: [0, 0], color: [194, 107, 230, 0] },
	{ pos: [22, 82, -26], flag: 0, tc: [0, 0], color: [7, 126, 245, 0] },
	{ pos: [27, 72, -63], flag: 0, tc: [0, 0], color: [7, 107, 190, 0] },
	{ pos: [27, 72, 63], flag: 0, tc: [0, 0], color: [6, 108, 66, 0] },
	{ pos: [-5, 59, 72], flag: 0, tc: [0, 0], color: [192, 82, 71, 0] },
	{ pos: [7, 33, 95], flag: 0, tc: [0, 0], color: [230, 38, 117, 0] },
	{ pos: [6, 33, -95], flag: 0, tc: [0, 0], color: [230, 38, 139, 0] },
	{ pos: [-5, 59, -72], flag: 0, tc: [0, 0], color: [192, 82, 185, 0] },
	{ pos: [22, 82, 26], flag: 0, tc: [0, 0], color: [7, 125, 17, 0] },
	{ pos: [52, 70, 38], flag: 0, tc: [0, 0], color: [83, 93, 22, 0] },
	{ pos: [-9, 73, 34], flag: 0, tc: [0, 0], color: [190, 106, 18, 0] },
	{ pos: [-32, 40, -39], flag: 0, tc: [0, 0], color: [137, 37, 235, 0] },
	{ pos: [26, -74, 45], flag: 0, tc: [0, 0], color: [18, 136, 34, 0] },
]

const mario_butt_dl_vertex_group9 = [
	{ pos: [4, -48, -86], flag: 0, tc: [0, 0], color: [216, 186, 159, 0] },
	{ pos: [36, -51, -79], flag: 0, tc: [0, 0], color: [48, 184, 164, 0] },
	{ pos: [26, -74, -46], flag: 0, tc: [0, 0], color: [24, 136, 226, 0] },
	{ pos: [-20, -7, 81], flag: 0, tc: [0, 0], color: [163, 249, 85, 0] },
	{ pos: [-18, 32, 79], flag: 0, tc: [0, 0], color: [164, 35, 79, 0] },
	{ pos: [-32, 40, 39], flag: 0, tc: [0, 0], color: [139, 37, 29, 0] },
	{ pos: [8, -8, -99], flag: 0, tc: [0, 0], color: [243, 238, 132, 0] },
	{ pos: [7, 33, 95], flag: 0, tc: [0, 0], color: [230, 38, 117, 0] },
	{ pos: [8, -8, 99], flag: 0, tc: [0, 0], color: [243, 239, 124, 0] },
	{ pos: [44, -9, 92], flag: 0, tc: [0, 0], color: [79, 242, 98, 0] },
	{ pos: [-9, 73, 34], flag: 0, tc: [0, 0], color: [190, 106, 18, 0] },
	{ pos: [22, 82, 26], flag: 0, tc: [0, 0], color: [7, 125, 17, 0] },
	{ pos: [22, 82, -26], flag: 0, tc: [0, 0], color: [7, 126, 245, 0] },
	{ pos: [-9, -69, -55], flag: 0, tc: [0, 0], color: [205, 151, 208, 0] },
	{ pos: [-31, -51, -42], flag: 0, tc: [0, 0], color: [145, 208, 220, 0] },
	{ pos: [-20, -8, -81], flag: 0, tc: [0, 0], color: [163, 248, 171, 0] },
]

const mario_butt_dl_vertex_group10 = [
	{ pos: [-31, -51, 42], flag: 0, tc: [0, 0], color: [141, 215, 31, 0] },
	{ pos: [-9, -69, 55], flag: 0, tc: [0, 0], color: [205, 151, 48, 0] },
	{ pos: [4, -49, 86], flag: 0, tc: [0, 0], color: [216, 185, 97, 0] },
	{ pos: [-20, -7, 81], flag: 0, tc: [0, 0], color: [163, 249, 85, 0] },
	{ pos: [-32, 40, 39], flag: 0, tc: [0, 0], color: [139, 37, 29, 0] },
	{ pos: [-32, 40, -39], flag: 0, tc: [0, 0], color: [137, 37, 235, 0] },
	{ pos: [-20, -8, -81], flag: 0, tc: [0, 0], color: [163, 248, 171, 0] },
	{ pos: [-31, -51, -42], flag: 0, tc: [0, 0], color: [145, 208, 220, 0] },
	{ pos: [55, -61, 36], flag: 0, tc: [0, 0], color: [96, 179, 26, 0] },
	{ pos: [26, -74, 45], flag: 0, tc: [0, 0], color: [18, 136, 34, 0] },
	{ pos: [26, -74, -46], flag: 0, tc: [0, 0], color: [24, 136, 226, 0] },
	{ pos: [-14, -74, 0], flag: 0, tc: [0, 0], color: [203, 141, 0, 0] },
	{ pos: [-9, -69, -55], flag: 0, tc: [0, 0], color: [205, 151, 208, 0] },
	{ pos: [55, -61, -36], flag: 0, tc: [0, 0], color: [103, 190, 225, 0] },
]

export const mario_butt_dl = [
	Gbi.gsSPVertex(mario_butt_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 5, 10, 0x0),
	...Gbi.gsSP2Triangles(4, 11, 10, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group2, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 3, 13, 0x0, 6, 8, 12, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 1, 7, 0x0, 8, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 9, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group4, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 6, 5, 0x0, 7, 8, 2, 0x0),
	...Gbi.gsSP2Triangles(9, 7, 10, 0x0, 11, 12, 7, 0x0),
	Gbi.gsSP1Triangle(13, 11, 14, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group5, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 2, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group6, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 7, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 9, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSP1Triangle(0, 13, 12, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group7, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 9, 8, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 13, 14, 1, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group8, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 11, 12, 0x0, 6, 11, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 3, 14, 0x0, 15, 2, 1, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group9, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(1, 0, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 0, 13, 14, 0x0),
	Gbi.gsSP1Triangle(15, 0, 14, 0x0),
	Gbi.gsSPVertex(mario_butt_dl_vertex_group10, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 0, 0x0, 0, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 5, 7, 0, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(9, 1, 11, 0x0, 11, 12, 10, 0x0),
	Gbi.gsSP1Triangle(10, 13, 8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_butt = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_butt_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_nameplate = [
	Gbi.gsSPVertex([{ pos: [0, 600, 0], flag: 0, tc: [0, 0], color: [0, 0, 0, 0], special: "nameplate" }], 1, 0)
]

const mario_left_arm_shared_dl_vertex_group1 = [
	{ pos: [7, 27, 20], flag: 0, tc: [0, 0], color: [218, 97, 71, 0] },
	{ pos: [59, 20, 15], flag: 0, tc: [0, 0], color: [68, 74, 76, 0] },
	{ pos: [59, 21, -21], flag: 0, tc: [0, 0], color: [55, 103, 208, 0] },
	{ pos: [6, -16, 32], flag: 0, tc: [0, 0], color: [213, 220, 113, 0] },
	{ pos: [58, -15, 25], flag: 0, tc: [0, 0], color: [50, 198, 100, 0] },
	{ pos: [5, -42, -5], flag: 0, tc: [0, 0], color: [211, 138, 255, 0] },
	{ pos: [57, -36, -5], flag: 0, tc: [0, 0], color: [62, 147, 239, 0] },
	{ pos: [6, -13, -42], flag: 0, tc: [0, 0], color: [214, 222, 142, 0] },
	{ pos: [58, -13, -34], flag: 0, tc: [0, 0], color: [59, 251, 144, 0] },
	{ pos: [7, 29, -26], flag: 0, tc: [0, 0], color: [218, 98, 187, 0] },
	{ pos: [-8, 17, -17], flag: 0, tc: [0, 0], color: [144, 42, 214, 0] },
	{ pos: [-8, 16, 10], flag: 0, tc: [0, 0], color: [154, 68, 29, 0] },
	{ pos: [-8, -9, -27], flag: 0, tc: [0, 0], color: [142, 232, 206, 0] },
	{ pos: [-9, -26, -5], flag: 0, tc: [0, 0], color: [150, 189, 14, 0] },
	{ pos: [-8, -11, 18], flag: 0, tc: [0, 0], color: [139, 255, 47, 0] },
]

const mario_left_arm_shared_dl_vertex_group2 = [
	{ pos: [68, 13, -16], flag: 0, tc: [0, 0], color: [106, 56, 217, 0] },
	{ pos: [68, -10, -25], flag: 0, tc: [0, 0], color: [117, 231, 217, 0] },
	{ pos: [58, -13, -34], flag: 0, tc: [0, 0], color: [59, 251, 144, 0] },
	{ pos: [59, 20, 15], flag: 0, tc: [0, 0], color: [68, 74, 76, 0] },
	{ pos: [68, 12, 9], flag: 0, tc: [0, 0], color: [120, 31, 27, 0] },
	{ pos: [67, -12, 16], flag: 0, tc: [0, 0], color: [111, 232, 55, 0] },
	{ pos: [57, -36, -5], flag: 0, tc: [0, 0], color: [62, 147, 239, 0] },
	{ pos: [67, -26, -5], flag: 0, tc: [0, 0], color: [110, 194, 254, 0] },
	{ pos: [58, -15, 25], flag: 0, tc: [0, 0], color: [50, 198, 100, 0] },
	{ pos: [59, 21, -21], flag: 0, tc: [0, 0], color: [55, 103, 208, 0] },
	{ pos: [7, 27, 20], flag: 0, tc: [0, 0], color: [218, 97, 71, 0] },
	{ pos: [-8, -11, 18], flag: 0, tc: [0, 0], color: [139, 255, 47, 0] },
	{ pos: [6, -16, 32], flag: 0, tc: [0, 0], color: [213, 220, 113, 0] },
	{ pos: [-9, -26, -5], flag: 0, tc: [0, 0], color: [150, 189, 14, 0] },
	{ pos: [5, -42, -5], flag: 0, tc: [0, 0], color: [211, 138, 255, 0] },
]

const mario_left_arm_shared_dl_vertex_group3 = [
	{ pos: [5, -42, -5], flag: 0, tc: [0, 0], color: [211, 138, 255, 0] },
	{ pos: [-8, -9, -27], flag: 0, tc: [0, 0], color: [142, 232, 206, 0] },
	{ pos: [6, -13, -42], flag: 0, tc: [0, 0], color: [214, 222, 142, 0] },
	{ pos: [-8, 17, -17], flag: 0, tc: [0, 0], color: [144, 42, 214, 0] },
	{ pos: [7, 29, -26], flag: 0, tc: [0, 0], color: [218, 98, 187, 0] },
	{ pos: [-8, 16, 10], flag: 0, tc: [0, 0], color: [154, 68, 29, 0] },
	{ pos: [7, 27, 20], flag: 0, tc: [0, 0], color: [218, 97, 71, 0] },
	{ pos: [58, -13, -34], flag: 0, tc: [0, 0], color: [59, 251, 144, 0] },
	{ pos: [57, -36, -5], flag: 0, tc: [0, 0], color: [62, 147, 239, 0] },
	{ pos: [6, -16, 32], flag: 0, tc: [0, 0], color: [213, 220, 113, 0] },
	{ pos: [58, -15, 25], flag: 0, tc: [0, 0], color: [50, 198, 100, 0] },
	{ pos: [59, 20, 15], flag: 0, tc: [0, 0], color: [68, 74, 76, 0] },
	{ pos: [59, 21, -21], flag: 0, tc: [0, 0], color: [55, 103, 208, 0] },
	{ pos: [-8, -11, 18], flag: 0, tc: [0, 0], color: [139, 255, 47, 0] },
]

const mario_left_arm_shared_dl_vertex_group4 = [
	{ pos: [68, 12, 9], flag: 0, tc: [0, 0], color: [120, 31, 27, 0] },
	{ pos: [68, -10, -25], flag: 0, tc: [0, 0], color: [117, 231, 217, 0] },
	{ pos: [68, 13, -16], flag: 0, tc: [0, 0], color: [106, 56, 217, 0] },
	{ pos: [67, -12, 16], flag: 0, tc: [0, 0], color: [111, 232, 55, 0] },
	{ pos: [67, -26, -5], flag: 0, tc: [0, 0], color: [110, 194, 254, 0] },
	{ pos: [-8, 17, -17], flag: 0, tc: [0, 0], color: [144, 42, 214, 0] },
	{ pos: [-8, -9, -27], flag: 0, tc: [0, 0], color: [142, 232, 206, 0] },
	{ pos: [-8, -11, 18], flag: 0, tc: [0, 0], color: [139, 255, 47, 0] },
	{ pos: [-9, -26, -5], flag: 0, tc: [0, 0], color: [150, 189, 14, 0] },
]

export const mario_left_arm_shared_dl = [
	Gbi.gsSPVertex(mario_left_arm_shared_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 4, 0x0, 7, 8, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 2, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(7, 12, 10, 0x0, 5, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(3, 14, 13, 0x0, 0, 11, 14, 0x0),
	Gbi.gsSPVertex(mario_left_arm_shared_dl_vertex_group2, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 3, 0x0, 6, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(1, 7, 6, 0x0, 2, 1, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 8, 0x0, 8, 5, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 0, 9, 0x0, 9, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_left_arm_shared_dl_vertex_group3, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 2, 4, 7, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 8, 0x0, 9, 0, 10, 0x0),
	...Gbi.gsSP2Triangles(6, 9, 11, 0x0, 4, 6, 12, 0x0),
	Gbi.gsSP1Triangle(13, 5, 3, 0x0),
	Gbi.gsSPVertex(mario_left_arm_shared_dl_vertex_group4, 9, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 1, 0x0, 5, 6, 7, 0x0),
	Gbi.gsSP1Triangle(6, 8, 7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_left_arm = (customData) => {
	return [
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_left_arm_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_left_forearm_shared_dl_vertex = [
	{ pos: [-2, 19, 16], flag: 0, tc: [0, 0], color: [219, 97, 72, 0] },
	{ pos: [47, 14, 13], flag: 0, tc: [0, 0], color: [68, 68, 81, 0] },
	{ pos: [47, 16, -19], flag: 0, tc: [0, 0], color: [69, 97, 214, 0] },
	{ pos: [-3, -17, 26], flag: 0, tc: [0, 0], color: [215, 219, 113, 0] },
	{ pos: [46, -17, 22], flag: 0, tc: [0, 0], color: [65, 199, 92, 0] },
	{ pos: [-3, -38, -4], flag: 0, tc: [0, 0], color: [212, 137, 254, 0] },
	{ pos: [45, -34, -4], flag: 0, tc: [0, 0], color: [63, 149, 232, 0] },
	{ pos: [-3, -14, -34], flag: 0, tc: [0, 0], color: [215, 222, 142, 0] },
	{ pos: [46, -14, -30], flag: 0, tc: [0, 0], color: [66, 244, 149, 0] },
	{ pos: [-2, 21, -21], flag: 0, tc: [0, 0], color: [219, 99, 187, 0] },
	{ pos: [-14, 13, -15], flag: 0, tc: [0, 0], color: [147, 44, 211, 0] },
	{ pos: [-14, 11, 10], flag: 0, tc: [0, 0], color: [147, 59, 25, 0] },
	{ pos: [-15, -11, -24], flag: 0, tc: [0, 0], color: [154, 222, 190, 0] },
	{ pos: [-15, -27, -4], flag: 0, tc: [0, 0], color: [139, 210, 10, 0] },
	{ pos: [-15, -13, 17], flag: 0, tc: [0, 0], color: [155, 251, 76, 0] },
	{ pos: [58, -7, -3], flag: 0, tc: [0, 0], color: [126, 252, 0, 0] },
]

export const mario_left_forearm_shared_dl = [
	Gbi.gsSPVertex(mario_left_forearm_shared_dl_vertex, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 4, 0x0, 7, 8, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 2, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(7, 12, 10, 0x0, 5, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(3, 14, 13, 0x0, 0, 11, 14, 0x0),
	...Gbi.gsSP2Triangles(8, 15, 6, 0x0, 6, 15, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 15, 1, 0x0, 1, 15, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 15, 8, 0x0, 0, 14, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 13, 5, 0x0, 5, 12, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 9, 0x0, 9, 11, 0, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 8, 0x0, 5, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(3, 5, 4, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(9, 0, 2, 0x0, 12, 13, 10, 0x0),
	...Gbi.gsSP2Triangles(13, 11, 10, 0x0, 13, 14, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_left_hand_closed_shared_dl_vertex_group1 = [
	{ pos: [36, 6, 42], flag: 0, tc: [0, 0], color: [225, 240, 121, 0] },
	{ pos: [17, -1, 27], flag: 0, tc: [0, 0], color: [0, 253, 127, 0] },
	{ pos: [34, -41, 3], flag: 0, tc: [0, 0], color: [66, 163, 54, 0] },
	{ pos: [26, -25, -32], flag: 0, tc: [0, 0], color: [9, 199, 143, 0] },
	{ pos: [4, 24, -31], flag: 0, tc: [0, 0], color: [213, 63, 156, 0] },
	{ pos: [33, 7, -44], flag: 0, tc: [0, 0], color: [198, 254, 144, 0] },
	{ pos: [-1, 39, 5], flag: 0, tc: [0, 0], color: [234, 110, 58, 0] },
	{ pos: [5, -6, 36], flag: 0, tc: [0, 0], color: [68, 27, 103, 0] },
	{ pos: [-10, 26, -38], flag: 0, tc: [0, 0], color: [240, 65, 149, 0] },
	{ pos: [17, -38, -39], flag: 0, tc: [0, 0], color: [26, 183, 157, 0] },
	{ pos: [86, 29, 41], flag: 0, tc: [0, 0], color: [75, 32, 96, 0] },
	{ pos: [59, 81, 8], flag: 0, tc: [0, 0], color: [17, 122, 29, 0] },
	{ pos: [107, -26, 4], flag: 0, tc: [0, 0], color: [103, 197, 43, 0] },
	{ pos: [61, 12, -60], flag: 0, tc: [0, 0], color: [0, 33, 134, 0] },
	{ pos: [90, 17, -46], flag: 0, tc: [0, 0], color: [67, 53, 163, 0] },
	{ pos: [100, -6, -46], flag: 0, tc: [0, 0], color: [99, 10, 179, 0] },
]

const mario_left_hand_closed_shared_dl_vertex_group2 = [
	{ pos: [90, 17, -46], flag: 0, tc: [0, 0], color: [67, 53, 163, 0] },
	{ pos: [57, 55, -37], flag: 0, tc: [0, 0], color: [34, 84, 169, 0] },
	{ pos: [99, 40, -16], flag: 0, tc: [0, 0], color: [108, 60, 229, 0] },
	{ pos: [32, 63, -28], flag: 0, tc: [0, 0], color: [208, 79, 170, 0] },
	{ pos: [12, 59, 10], flag: 0, tc: [0, 0], color: [170, 88, 27, 0] },
	{ pos: [59, 81, 8], flag: 0, tc: [0, 0], color: [17, 122, 29, 0] },
	{ pos: [80, -31, -61], flag: 0, tc: [0, 0], color: [12, 178, 157, 0] },
	{ pos: [100, -6, -46], flag: 0, tc: [0, 0], color: [99, 10, 179, 0] },
	{ pos: [107, -26, 4], flag: 0, tc: [0, 0], color: [103, 197, 43, 0] },
	{ pos: [61, 12, -60], flag: 0, tc: [0, 0], color: [0, 33, 134, 0] },
	{ pos: [33, 7, -44], flag: 0, tc: [0, 0], color: [198, 254, 144, 0] },
	{ pos: [86, 29, 41], flag: 0, tc: [0, 0], color: [75, 32, 96, 0] },
	{ pos: [58, -45, 7], flag: 0, tc: [0, 0], color: [1, 133, 28, 0] },
	{ pos: [36, 6, 42], flag: 0, tc: [0, 0], color: [225, 240, 121, 0] },
]

const mario_left_hand_closed_shared_dl_vertex_group3 = [
	{ pos: [27, -58, 6], flag: 0, tc: [0, 0], color: [163, 173, 18, 0] },
	{ pos: [-14, -14, -4], flag: 0, tc: [0, 0], color: [140, 205, 2, 0] },
	{ pos: [17, -38, -39], flag: 0, tc: [0, 0], color: [26, 183, 157, 0] },
	{ pos: [-10, 26, -38], flag: 0, tc: [0, 0], color: [240, 65, 149, 0] },
	{ pos: [-18, 45, 8], flag: 0, tc: [0, 0], color: [132, 243, 19, 0] },
	{ pos: [5, -6, 36], flag: 0, tc: [0, 0], color: [153, 210, 56, 0] },
	{ pos: [34, -41, 3], flag: 0, tc: [0, 0], color: [66, 163, 54, 0] },
	{ pos: [27, -58, 6], flag: 0, tc: [0, 0], color: [115, 213, 29, 0] },
	{ pos: [26, -25, -32], flag: 0, tc: [0, 0], color: [9, 199, 143, 0] },
	{ pos: [-18, 45, 8], flag: 0, tc: [0, 0], color: [45, 113, 33, 0] },
	{ pos: [-1, 39, 5], flag: 0, tc: [0, 0], color: [234, 110, 58, 0] },
	{ pos: [5, -6, 36], flag: 0, tc: [0, 0], color: [68, 27, 103, 0] },
	{ pos: [36, 6, 42], flag: 0, tc: [0, 0], color: [225, 240, 121, 0] },
	{ pos: [12, 59, 10], flag: 0, tc: [0, 0], color: [170, 88, 27, 0] },
	{ pos: [58, -45, 7], flag: 0, tc: [0, 0], color: [1, 133, 28, 0] },
]

const mario_left_hand_closed_shared_dl_vertex_group4 = [
	{ pos: [26, -25, -32], flag: 0, tc: [0, 0], color: [9, 199, 143, 0] },
	{ pos: [33, 7, -44], flag: 0, tc: [0, 0], color: [198, 254, 144, 0] },
	{ pos: [80, -31, -61], flag: 0, tc: [0, 0], color: [12, 178, 157, 0] },
	{ pos: [58, -45, 7], flag: 0, tc: [0, 0], color: [1, 133, 28, 0] },
	{ pos: [34, -41, 3], flag: 0, tc: [0, 0], color: [66, 163, 54, 0] },
	{ pos: [61, 12, -60], flag: 0, tc: [0, 0], color: [0, 33, 134, 0] },
	{ pos: [12, 59, 10], flag: 0, tc: [0, 0], color: [170, 88, 27, 0] },
	{ pos: [32, 63, -28], flag: 0, tc: [0, 0], color: [208, 79, 170, 0] },
	{ pos: [4, 24, -31], flag: 0, tc: [0, 0], color: [213, 63, 156, 0] },
	{ pos: [-1, 39, 5], flag: 0, tc: [0, 0], color: [234, 110, 58, 0] },
]

export const mario_left_hand_closed_shared_dl = [
	Gbi.gsSPVertex(mario_left_hand_closed_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 1, 0, 0x0, 2, 1, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 1, 6, 0x0, 6, 4, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 4, 3, 0x0, 9, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(0, 10, 11, 0x0, 12, 10, 0, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_left_hand_closed_shared_dl_vertex_group2, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 1, 3, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 3, 0x0, 1, 0, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 3, 1, 0x0, 5, 2, 1, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 7, 0x0, 7, 2, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 2, 11, 0x0, 11, 2, 5, 0x0),
	...Gbi.gsSP2Triangles(9, 7, 6, 0x0, 6, 8, 12, 0x0),
	...Gbi.gsSP2Triangles(12, 8, 13, 0x0, 13, 5, 4, 0x0),
	Gbi.gsSPVertex(mario_left_hand_closed_shared_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 1, 4, 0x0, 4, 1, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 1, 0, 0x0, 6, 7, 2, 0x0),
	...Gbi.gsSP2Triangles(8, 2, 3, 0x0, 3, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 9, 11, 0x0, 11, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 13, 0x0, 6, 14, 12, 0x0),
	Gbi.gsSPVertex(mario_left_hand_closed_shared_dl_vertex_group4, 10, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(1, 5, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 8, 9, 6, 0x0),
	Gbi.gsSP1Triangle(7, 1, 8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_left_hand_closed = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_left_hand_closed_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


const mario_right_arm_shared_dl_vertex_group1 = [
	{ pos: [57, -14, -22], flag: 0, tc: [0, 0], color: [51, 207, 151, 0] },
	{ pos: [5, -44, 5], flag: 0, tc: [0, 0], color: [211, 138, 247, 0] },
	{ pos: [6, -15, -30], flag: 0, tc: [0, 0], color: [214, 230, 140, 0] },
	{ pos: [57, -38, 6], flag: 0, tc: [0, 0], color: [62, 147, 7, 0] },
	{ pos: [6, -19, 44], flag: 0, tc: [0, 0], color: [213, 212, 110, 0] },
	{ pos: [57, -17, 37], flag: 0, tc: [0, 0], color: [51, 232, 113, 0] },
	{ pos: [7, 25, 32], flag: 0, tc: [0, 0], color: [217, 92, 77, 0] },
	{ pos: [58, 17, 27], flag: 0, tc: [0, 0], color: [68, 89, 57, 0] },
	{ pos: [7, 27, -13], flag: 0, tc: [0, 0], color: [218, 103, 194, 0] },
	{ pos: [58, 19, -9], flag: 0, tc: [0, 0], color: [62, 74, 175, 0] },
	{ pos: [-9, -28, 6], flag: 0, tc: [0, 0], color: [150, 191, 236, 0] },
	{ pos: [-9, -10, -15], flag: 0, tc: [0, 0], color: [143, 1, 199, 0] },
	{ pos: [-8, 15, -5], flag: 0, tc: [0, 0], color: [145, 57, 237, 0] },
	{ pos: [-8, 14, 22], flag: 0, tc: [0, 0], color: [153, 46, 56, 0] },
	{ pos: [-9, -13, 30], flag: 0, tc: [0, 0], color: [138, 233, 38, 0] },
	{ pos: [67, -12, -13], flag: 0, tc: [0, 0], color: [104, 235, 188, 0] },
]

const mario_right_arm_shared_dl_vertex_group2 = [
	{ pos: [57, -38, 6], flag: 0, tc: [0, 0], color: [62, 147, 7, 0] },
	{ pos: [67, -14, 28], flag: 0, tc: [0, 0], color: [111, 232, 55, 0] },
	{ pos: [57, -17, 37], flag: 0, tc: [0, 0], color: [51, 232, 113, 0] },
	{ pos: [58, 17, 27], flag: 0, tc: [0, 0], color: [68, 89, 57, 0] },
	{ pos: [67, 11, -4], flag: 0, tc: [0, 0], color: [120, 38, 241, 0] },
	{ pos: [58, 19, -9], flag: 0, tc: [0, 0], color: [62, 74, 175, 0] },
	{ pos: [67, 10, 21], flag: 0, tc: [0, 0], color: [113, 42, 37, 0] },
	{ pos: [66, -28, 6], flag: 0, tc: [0, 0], color: [117, 209, 254, 0] },
	{ pos: [67, -12, -13], flag: 0, tc: [0, 0], color: [104, 235, 188, 0] },
	{ pos: [-9, -13, 30], flag: 0, tc: [0, 0], color: [138, 233, 38, 0] },
	{ pos: [-9, -28, 6], flag: 0, tc: [0, 0], color: [150, 191, 236, 0] },
	{ pos: [5, -44, 5], flag: 0, tc: [0, 0], color: [211, 138, 247, 0] },
	{ pos: [-8, 14, 22], flag: 0, tc: [0, 0], color: [153, 46, 56, 0] },
	{ pos: [6, -19, 44], flag: 0, tc: [0, 0], color: [213, 212, 110, 0] },
	{ pos: [-8, 15, -5], flag: 0, tc: [0, 0], color: [145, 57, 237, 0] },
	{ pos: [7, 25, 32], flag: 0, tc: [0, 0], color: [217, 92, 77, 0] },
]

const mario_right_arm_shared_dl_vertex_group3 = [
	{ pos: [-9, -10, -15], flag: 0, tc: [0, 0], color: [143, 1, 199, 0] },
	{ pos: [-8, 15, -5], flag: 0, tc: [0, 0], color: [145, 57, 237, 0] },
	{ pos: [7, 27, -13], flag: 0, tc: [0, 0], color: [218, 103, 194, 0] },
	{ pos: [-9, -28, 6], flag: 0, tc: [0, 0], color: [150, 191, 236, 0] },
	{ pos: [6, -15, -30], flag: 0, tc: [0, 0], color: [214, 230, 140, 0] },
	{ pos: [58, 19, -9], flag: 0, tc: [0, 0], color: [62, 74, 175, 0] },
	{ pos: [57, -14, -22], flag: 0, tc: [0, 0], color: [51, 207, 151, 0] },
	{ pos: [58, 17, 27], flag: 0, tc: [0, 0], color: [68, 89, 57, 0] },
	{ pos: [57, -17, 37], flag: 0, tc: [0, 0], color: [51, 232, 113, 0] },
	{ pos: [7, 25, 32], flag: 0, tc: [0, 0], color: [217, 92, 77, 0] },
	{ pos: [57, -38, 6], flag: 0, tc: [0, 0], color: [62, 147, 7, 0] },
	{ pos: [6, -19, 44], flag: 0, tc: [0, 0], color: [213, 212, 110, 0] },
	{ pos: [5, -44, 5], flag: 0, tc: [0, 0], color: [211, 138, 247, 0] },
	{ pos: [67, -12, -13], flag: 0, tc: [0, 0], color: [104, 235, 188, 0] },
	{ pos: [67, 11, -4], flag: 0, tc: [0, 0], color: [120, 38, 241, 0] },
	{ pos: [66, -28, 6], flag: 0, tc: [0, 0], color: [117, 209, 254, 0] },
]

const mario_right_arm_shared_dl_vertex_group4 = [
	{ pos: [-9, -10, -15], flag: 0, tc: [0, 0], color: [143, 1, 199, 0] },
	{ pos: [-9, -28, 6], flag: 0, tc: [0, 0], color: [150, 191, 236, 0] },
	{ pos: [-9, -13, 30], flag: 0, tc: [0, 0], color: [138, 233, 38, 0] },
	{ pos: [-8, 15, -5], flag: 0, tc: [0, 0], color: [145, 57, 237, 0] },
	{ pos: [-8, 14, 22], flag: 0, tc: [0, 0], color: [153, 46, 56, 0] },
	{ pos: [67, 11, -4], flag: 0, tc: [0, 0], color: [120, 38, 241, 0] },
	{ pos: [67, -14, 28], flag: 0, tc: [0, 0], color: [111, 232, 55, 0] },
	{ pos: [66, -28, 6], flag: 0, tc: [0, 0], color: [117, 209, 254, 0] },
	{ pos: [67, 10, 21], flag: 0, tc: [0, 0], color: [113, 42, 37, 0] },
]

export const mario_right_arm_shared_dl = [
	Gbi.gsSPVertex(mario_right_arm_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 4, 0x0, 7, 8, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 2, 8, 0x0, 1, 10, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 11, 8, 0x0, 8, 12, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 13, 4, 0x0, 4, 14, 1, 0x0),
	...Gbi.gsSP2Triangles(9, 15, 0, 0x0, 0, 15, 3, 0x0),
	Gbi.gsSPVertex(mario_right_arm_shared_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 5, 0x0, 3, 6, 4, 0x0),
	...Gbi.gsSP2Triangles(1, 6, 3, 0x0, 0, 7, 1, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 0, 0x0, 5, 4, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 11, 0x0, 12, 9, 13, 0x0),
	Gbi.gsSP1Triangle(14, 12, 15, 0x0),
	Gbi.gsSPVertex(mario_right_arm_shared_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 4, 0x0, 7, 5, 2, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 9, 0x0, 10, 8, 11, 0x0),
	...Gbi.gsSP2Triangles(6, 10, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_right_arm_shared_dl_vertex_group4, 9, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(2, 4, 3, 0x0, 5, 6, 7, 0x0),
	Gbi.gsSP1Triangle(5, 8, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_arm = (customData) => {
	return [
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_arm_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_right_forearm_shared_dl_vertex = [
	{ pos: [47, -15, -19], flag: 0, tc: [0, 0], color: [65, 207, 159, 0] },
	{ pos: [-3, -39, 6], flag: 0, tc: [0, 0], color: [212, 138, 248, 0] },
	{ pos: [-2, -15, -23], flag: 0, tc: [0, 0], color: [215, 229, 140, 0] },
	{ pos: [46, -36, 6], flag: 0, tc: [0, 0], color: [63, 148, 15, 0] },
	{ pos: [-2, -18, 38], flag: 0, tc: [0, 0], color: [214, 213, 111, 0] },
	{ pos: [47, -17, 34], flag: 0, tc: [0, 0], color: [66, 236, 106, 0] },
	{ pos: [-1, 18, 28], flag: 0, tc: [0, 0], color: [219, 93, 77, 0] },
	{ pos: [48, 13, 25], flag: 0, tc: [0, 0], color: [69, 93, 50, 0] },
	{ pos: [-1, 20, -9], flag: 0, tc: [0, 0], color: [219, 103, 193, 0] },
	{ pos: [48, 15, -7], flag: 0, tc: [0, 0], color: [69, 76, 182, 0] },
	{ pos: [-14, -28, 6], flag: 0, tc: [0, 0], color: [144, 201, 239, 0] },
	{ pos: [-14, -12, -13], flag: 0, tc: [0, 0], color: [145, 1, 195, 0] },
	{ pos: [-13, 12, -4], flag: 0, tc: [0, 0], color: [158, 75, 231, 0] },
	{ pos: [-13, 10, 21], flag: 0, tc: [0, 0], color: [141, 34, 40, 0] },
	{ pos: [-14, -14, 28], flag: 0, tc: [0, 0], color: [154, 216, 63, 0] },
	{ pos: [59, -8, 7], flag: 0, tc: [0, 0], color: [127, 253, 0, 0] },
]

export const mario_right_forearm_shared_dl = [
	Gbi.gsSPVertex(mario_right_forearm_shared_dl_vertex, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 4, 0x0, 7, 8, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 2, 8, 0x0, 1, 10, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 11, 8, 0x0, 8, 12, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 13, 4, 0x0, 4, 14, 1, 0x0),
	...Gbi.gsSP2Triangles(9, 15, 0, 0x0, 0, 15, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 15, 5, 0x0, 5, 15, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 15, 9, 0x0, 14, 10, 1, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 4, 0x0, 12, 13, 6, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 8, 0x0, 10, 11, 2, 0x0),
	...Gbi.gsSP2Triangles(9, 0, 2, 0x0, 7, 9, 8, 0x0),
	...Gbi.gsSP2Triangles(5, 7, 6, 0x0, 3, 5, 4, 0x0),
	...Gbi.gsSP2Triangles(0, 3, 1, 0x0, 11, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 13, 0x0, 10, 14, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_right_hand_closed_dl_vertex_group1 = [
	{ pos: [35, 9, -37], flag: 0, tc: [0, 0], color: [229, 245, 133, 0] },
	{ pos: [55, -44, -4], flag: 0, tc: [0, 0], color: [0, 134, 223, 0] },
	{ pos: [31, -40, -1], flag: 0, tc: [0, 0], color: [67, 164, 201, 0] },
	{ pos: [10, 60, -4], flag: 0, tc: [0, 0], color: [172, 90, 229, 0] },
	{ pos: [-2, 41, -1], flag: 0, tc: [0, 0], color: [237, 112, 201, 0] },
	{ pos: [24, -57, -4], flag: 0, tc: [0, 0], color: [115, 212, 230, 0] },
	{ pos: [4, -3, -33], flag: 0, tc: [0, 0], color: [72, 30, 157, 0] },
	{ pos: [-19, 47, -4], flag: 0, tc: [0, 0], color: [48, 114, 229, 0] },
	{ pos: [-14, 26, 41], flag: 0, tc: [0, 0], color: [237, 61, 109, 0] },
	{ pos: [13, -38, 41], flag: 0, tc: [0, 0], color: [21, 179, 97, 0] },
	{ pos: [23, -26, 35], flag: 0, tc: [0, 0], color: [4, 195, 110, 0] },
	{ pos: [24, -57, -4], flag: 0, tc: [0, 0], color: [162, 175, 231, 0] },
	{ pos: [-16, -12, 6], flag: 0, tc: [0, 0], color: [140, 207, 248, 0] },
	{ pos: [4, -3, -33], flag: 0, tc: [0, 0], color: [155, 213, 194, 0] },
	{ pos: [-19, 47, -4], flag: 0, tc: [0, 0], color: [133, 245, 231, 0] },
	{ pos: [58, 81, 0], flag: 0, tc: [0, 0], color: [20, 123, 233, 0] },
]

const mario_right_hand_closed_dl_vertex_group2 = [
	{ pos: [35, 9, -37], flag: 0, tc: [0, 0], color: [229, 245, 133, 0] },
	{ pos: [104, -26, 1], flag: 0, tc: [0, 0], color: [104, 197, 215, 0] },
	{ pos: [55, -44, -4], flag: 0, tc: [0, 0], color: [0, 134, 223, 0] },
	{ pos: [75, -33, 66], flag: 0, tc: [0, 0], color: [8, 175, 96, 0] },
	{ pos: [96, -8, 52], flag: 0, tc: [0, 0], color: [96, 6, 81, 0] },
	{ pos: [57, 10, 66], flag: 0, tc: [0, 0], color: [253, 28, 123, 0] },
	{ pos: [58, 81, 0], flag: 0, tc: [0, 0], color: [20, 123, 233, 0] },
	{ pos: [97, 39, 24], flag: 0, tc: [0, 0], color: [107, 58, 33, 0] },
	{ pos: [86, 30, -33], flag: 0, tc: [0, 0], color: [79, 34, 164, 0] },
	{ pos: [86, 15, 52], flag: 0, tc: [0, 0], color: [64, 48, 97, 0] },
	{ pos: [54, 54, 44], flag: 0, tc: [0, 0], color: [32, 81, 92, 0] },
	{ pos: [29, 62, 34], flag: 0, tc: [0, 0], color: [206, 76, 87, 0] },
	{ pos: [29, 6, 49], flag: 0, tc: [0, 0], color: [194, 250, 110, 0] },
	{ pos: [10, 60, -4], flag: 0, tc: [0, 0], color: [172, 90, 229, 0] },
]

const mario_right_hand_closed_dl_vertex_group3 = [
	{ pos: [31, -40, -1], flag: 0, tc: [0, 0], color: [67, 164, 201, 0] },
	{ pos: [23, -26, 35], flag: 0, tc: [0, 0], color: [4, 195, 110, 0] },
	{ pos: [13, -38, 41], flag: 0, tc: [0, 0], color: [21, 179, 97, 0] },
	{ pos: [1, 24, 35], flag: 0, tc: [0, 0], color: [210, 60, 101, 0] },
	{ pos: [-14, 26, 41], flag: 0, tc: [0, 0], color: [237, 61, 109, 0] },
	{ pos: [-2, 41, -1], flag: 0, tc: [0, 0], color: [237, 112, 201, 0] },
	{ pos: [15, 0, -23], flag: 0, tc: [0, 0], color: [4, 1, 130, 0] },
	{ pos: [4, -3, -33], flag: 0, tc: [0, 0], color: [72, 30, 157, 0] },
	{ pos: [35, 9, -37], flag: 0, tc: [0, 0], color: [229, 245, 133, 0] },
	{ pos: [29, 6, 49], flag: 0, tc: [0, 0], color: [194, 250, 110, 0] },
	{ pos: [55, -44, -4], flag: 0, tc: [0, 0], color: [0, 134, 223, 0] },
	{ pos: [75, -33, 66], flag: 0, tc: [0, 0], color: [8, 175, 96, 0] },
	{ pos: [57, 10, 66], flag: 0, tc: [0, 0], color: [253, 28, 123, 0] },
	{ pos: [10, 60, -4], flag: 0, tc: [0, 0], color: [172, 90, 229, 0] },
	{ pos: [29, 62, 34], flag: 0, tc: [0, 0], color: [206, 76, 87, 0] },
]

export const mario_right_hand_closed_dl = [
	Gbi.gsSPVertex(mario_right_hand_closed_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(2, 5, 6, 0x0, 6, 7, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 7, 8, 0x0, 8, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(9, 5, 2, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 12, 14, 0x0, 14, 12, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 12, 9, 0x0, 9, 12, 11, 0x0),
	Gbi.gsSP1Triangle(3, 15, 0, 0x0),
	Gbi.gsSPVertex(mario_right_hand_closed_dl_vertex_group2, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 5, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 1, 0x0, 1, 7, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 7, 9, 0x0, 10, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 5, 0x0, 10, 11, 5, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 5, 0x0, 1, 4, 3, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 6, 0x0, 6, 13, 11, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 9, 0x0, 4, 9, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 8, 1, 0x0, 6, 8, 0, 0x0),
	Gbi.gsSPVertex(mario_right_hand_closed_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 5, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 6, 0, 0x0, 8, 6, 5, 0x0),
	...Gbi.gsSP2Triangles(9, 3, 1, 0x0, 0, 6, 8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 1, 0x0, 11, 9, 1, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 9, 0x0, 1, 0, 10, 0x0),
	...Gbi.gsSP2Triangles(13, 5, 3, 0x0, 3, 9, 14, 0x0),
	Gbi.gsSP1Triangle(14, 13, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_closed = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_hand_closed_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


export const mario_metal_right_hand_closed = [
	Gbi.gsSPDisplayList(mario_right_hand_closed_dl),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPEndDisplayList(),
]


const mario_left_thigh_dl_vertex_group1 = [
	{ pos: [1, -44, 8], flag: 0, tc: [0, 0], color: [171, 162, 0, 0] },
	{ pos: [-15, 0, 7], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [0, -13, -32], flag: 0, tc: [0, 0], color: [159, 225, 181, 0] },
	{ pos: [-4, 37, -17], flag: 0, tc: [0, 0], color: [158, 48, 192, 0] },
	{ pos: [-5, 37, 31], flag: 0, tc: [0, 0], color: [160, 63, 52, 0] },
	{ pos: [-1, -12, 47], flag: 0, tc: [0, 0], color: [158, 227, 73, 0] },
	{ pos: [95, -5, 48], flag: 0, tc: [0, 0], color: [78, 233, 96, 0] },
	{ pos: [116, 10, 8], flag: 0, tc: [0, 0], color: [126, 9, 1, 0] },
	{ pos: [91, 45, 32], flag: 0, tc: [0, 0], color: [60, 78, 79, 0] },
	{ pos: [92, 45, -16], flag: 0, tc: [0, 0], color: [53, 93, 189, 0] },
	{ pos: [96, -5, -31], flag: 0, tc: [0, 0], color: [80, 232, 161, 0] },
	{ pos: [98, -37, 8], flag: 0, tc: [0, 0], color: [70, 151, 1, 0] },
	{ pos: [19, -15, -42], flag: 0, tc: [0, 0], color: [236, 217, 138, 0] },
	{ pos: [14, 48, -23], flag: 0, tc: [0, 0], color: [215, 103, 197, 0] },
	{ pos: [13, 48, 38], flag: 0, tc: [0, 0], color: [231, 109, 58, 0] },
	{ pos: [18, -15, 58], flag: 0, tc: [0, 0], color: [234, 218, 118, 0] },
]

const mario_left_thigh_dl_vertex_group2 = [
	{ pos: [18, -15, 58], flag: 0, tc: [0, 0], color: [234, 218, 118, 0] },
	{ pos: [1, -44, 8], flag: 0, tc: [0, 0], color: [171, 162, 0, 0] },
	{ pos: [21, -54, 8], flag: 0, tc: [0, 0], color: [240, 131, 0, 0] },
	{ pos: [19, -15, -42], flag: 0, tc: [0, 0], color: [236, 217, 138, 0] },
	{ pos: [-1, -12, 47], flag: 0, tc: [0, 0], color: [158, 227, 73, 0] },
	{ pos: [-15, 0, 7], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [98, -37, 8], flag: 0, tc: [0, 0], color: [70, 151, 1, 0] },
	{ pos: [13, 48, 38], flag: 0, tc: [0, 0], color: [231, 109, 58, 0] },
	{ pos: [91, 45, 32], flag: 0, tc: [0, 0], color: [60, 78, 79, 0] },
	{ pos: [14, 48, -23], flag: 0, tc: [0, 0], color: [215, 103, 197, 0] },
	{ pos: [92, 45, -16], flag: 0, tc: [0, 0], color: [53, 93, 189, 0] },
	{ pos: [96, -5, -31], flag: 0, tc: [0, 0], color: [80, 232, 161, 0] },
	{ pos: [95, -5, 48], flag: 0, tc: [0, 0], color: [78, 233, 96, 0] },
	{ pos: [0, -13, -32], flag: 0, tc: [0, 0], color: [159, 225, 181, 0] },
	{ pos: [-5, 37, 31], flag: 0, tc: [0, 0], color: [160, 63, 52, 0] },
	{ pos: [-4, 37, -17], flag: 0, tc: [0, 0], color: [158, 48, 192, 0] },
]

export const mario_left_thigh_dl = [
	Gbi.gsSPVertex(mario_left_thigh_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 1, 4, 0x0, 4, 1, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 8, 7, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 7, 10, 0x0, 10, 7, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 7, 6, 0x0, 12, 3, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 4, 14, 0x0, 14, 4, 15, 0x0),
	Gbi.gsSPVertex(mario_left_thigh_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 1, 0x0, 0, 2, 6, 0x0),
	...Gbi.gsSP2Triangles(7, 0, 8, 0x0, 9, 7, 10, 0x0),
	...Gbi.gsSP2Triangles(3, 9, 10, 0x0, 2, 3, 6, 0x0),
	...Gbi.gsSP2Triangles(3, 11, 6, 0x0, 10, 11, 3, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 10, 0x0, 0, 12, 8, 0x0),
	...Gbi.gsSP2Triangles(6, 12, 0, 0x0, 1, 13, 3, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 1, 0x0, 14, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(9, 15, 14, 0x0, 3, 13, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_left_thigh = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_left_thigh_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

/*export const mario_metal_left_thigh = [
	Gbi.gsSPSetGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADE),
	Gbi.gsDPLoadTextureBlock(mario_texture_metal, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 64, 32, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_left_thigh_dl),
	Gbi.gsSPEndDisplayList(),
]*/

const mario_left_leg_shared_dl_vertex = [
	{ pos: [4, -37, 9], flag: 0, tc: [0, 0], color: [193, 147, 0, 0] },
	{ pos: [64, -46, 9], flag: 0, tc: [0, 0], color: [75, 154, 1, 0] },
	{ pos: [65, -11, 54], flag: 0, tc: [0, 0], color: [45, 219, 112, 0] },
	{ pos: [8, 44, 33], flag: 0, tc: [0, 0], color: [204, 94, 67, 0] },
	{ pos: [68, 45, 37], flag: 0, tc: [0, 0], color: [82, 75, 60, 0] },
	{ pos: [69, 45, -18], flag: 0, tc: [0, 0], color: [66, 97, 209, 0] },
	{ pos: [9, 44, -16], flag: 0, tc: [0, 0], color: [196, 77, 175, 0] },
	{ pos: [66, -11, -36], flag: 0, tc: [0, 0], color: [46, 218, 145, 0] },
	{ pos: [6, -6, -31], flag: 0, tc: [0, 0], color: [180, 229, 159, 0] },
	{ pos: [6, -6, 49], flag: 0, tc: [0, 0], color: [179, 231, 96, 0] },
	{ pos: [-14, 8, 8], flag: 0, tc: [0, 0], color: [130, 6, 255, 0] },
	{ pos: [81, 3, 9], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
]

export const mario_left_leg_shared_dl = [
	Gbi.gsSPVertex(mario_left_leg_shared_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 4, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 5, 0x0, 6, 5, 7, 0x0),
	...Gbi.gsSP2Triangles(0, 7, 1, 0x0, 0, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 6, 0x0, 5, 6, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 9, 2, 0x0, 2, 9, 0, 0x0),
	...Gbi.gsSP2Triangles(3, 10, 9, 0x0, 5, 11, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 11, 1, 0x0, 1, 11, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 11, 4, 0x0, 4, 11, 5, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 0, 0x0, 0, 10, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 10, 6, 0x0, 6, 10, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_left_foot_shared_dl_vertex_group1 = [
	{ pos: [110, 9, 35], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [110, 8, -20], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [76, 20, -41], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [78, 21, 61], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-12, 53, -32], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-11, 54, 53], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-39, 64, -8], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-41, 65, 26], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [43, -18, 54], flag: 0, tc: [0, 0], color: [7, 179, 100, 0] },
	{ pos: [78, 21, 61], flag: 0, tc: [0, 0], color: [21, 219, 119, 0] },
	{ pos: [-11, 54, 53], flag: 0, tc: [0, 0], color: [217, 0, 120, 0] },
	{ pos: [44, -12, -33], flag: 0, tc: [0, 0], color: [1, 183, 153, 0] },
	{ pos: [-35, 11, -21], flag: 0, tc: [0, 0], color: [181, 210, 165, 0] },
	{ pos: [-12, 53, -32], flag: 0, tc: [0, 0], color: [215, 253, 137, 0] },
	{ pos: [-34, 12, 44], flag: 0, tc: [0, 0], color: [178, 210, 88, 0] },
	{ pos: [76, 20, -41], flag: 0, tc: [0, 0], color: [12, 216, 137, 0] },
]

const mario_left_foot_shared_dl_vertex_group2 = [
	{ pos: [44, -12, -33], flag: 0, tc: [0, 0], color: [1, 183, 153, 0] },
	{ pos: [76, 20, -41], flag: 0, tc: [0, 0], color: [12, 216, 137, 0] },
	{ pos: [110, 8, -20], flag: 0, tc: [0, 0], color: [68, 173, 190, 0] },
	{ pos: [80, -31, 7], flag: 0, tc: [0, 0], color: [52, 141, 251, 0] },
	{ pos: [110, 9, 35], flag: 0, tc: [0, 0], color: [76, 175, 60, 0] },
	{ pos: [78, 21, 61], flag: 0, tc: [0, 0], color: [21, 219, 119, 0] },
	{ pos: [43, -18, 54], flag: 0, tc: [0, 0], color: [7, 179, 100, 0] },
	{ pos: [-34, 12, 44], flag: 0, tc: [0, 0], color: [178, 210, 88, 0] },
	{ pos: [-11, 54, 53], flag: 0, tc: [0, 0], color: [217, 0, 120, 0] },
	{ pos: [-41, 65, 26], flag: 0, tc: [0, 0], color: [144, 23, 53, 0] },
	{ pos: [-39, 64, -8], flag: 0, tc: [0, 0], color: [147, 22, 196, 0] },
	{ pos: [-35, 11, -21], flag: 0, tc: [0, 0], color: [181, 210, 165, 0] },
	{ pos: [-54, 15, 8], flag: 0, tc: [0, 0], color: [136, 216, 253, 0] },
	{ pos: [-12, 53, -32], flag: 0, tc: [0, 0], color: [215, 253, 137, 0] },
	{ pos: [27, -35, 11], flag: 0, tc: [0, 0], color: [219, 135, 252, 0] },
]

export const mario_left_foot_shared_dl = [
	Gbi.gsSPVertex(mario_left_foot_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(3, 2, 4, 0x0, 5, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 6, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(14, 8, 10, 0x0, 11, 13, 15, 0x0),
	Gbi.gsSPVertex(mario_left_foot_shared_dl_vertex_group2, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 4, 0x0),
	...Gbi.gsSP2Triangles(2, 3, 0, 0x0, 4, 5, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 4, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 9, 10, 0x0, 9, 12, 7, 0x0),
	...Gbi.gsSP2Triangles(14, 0, 3, 0x0, 11, 0, 14, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 14, 0x0, 14, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(14, 7, 12, 0x0, 12, 11, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_left_foot = (customData) => {
	return [
		Gbi.gsSPLight(mario_brown1_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown1_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_left_foot_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


const mario_right_thigh_shared_dl_vertex_group1 = [
	{ pos: [98, -35, -10], flag: 0, tc: [0, 0], color: [71, 151, 252, 0] },
	{ pos: [19, -16, 41], flag: 0, tc: [0, 0], color: [238, 214, 118, 0] },
	{ pos: [22, -54, -9], flag: 0, tc: [0, 0], color: [242, 130, 253, 0] },
	{ pos: [91, 46, 16], flag: 0, tc: [0, 0], color: [53, 92, 68, 0] },
	{ pos: [13, 48, 24], flag: 0, tc: [0, 0], color: [214, 102, 62, 0] },
	{ pos: [12, 49, -37], flag: 0, tc: [0, 0], color: [229, 110, 201, 0] },
	{ pos: [90, 47, -32], flag: 0, tc: [0, 0], color: [59, 80, 178, 0] },
	{ pos: [18, -13, -58], flag: 0, tc: [0, 0], color: [234, 220, 137, 0] },
	{ pos: [1, -44, -9], flag: 0, tc: [0, 0], color: [173, 161, 255, 0] },
	{ pos: [-15, 0, -7], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [-1, -11, -47], flag: 0, tc: [0, 0], color: [157, 227, 183, 0] },
	{ pos: [-6, 38, -31], flag: 0, tc: [0, 0], color: [158, 63, 207, 0] },
	{ pos: [-5, 36, 18], flag: 0, tc: [0, 0], color: [158, 45, 66, 0] },
	{ pos: [95, -3, -49], flag: 0, tc: [0, 0], color: [77, 236, 158, 0] },
	{ pos: [116, 11, -9], flag: 0, tc: [0, 0], color: [126, 11, 254, 0] },
	{ pos: [96, -5, 30], flag: 0, tc: [0, 0], color: [81, 231, 93, 0] },
]

const mario_right_thigh_shared_dl_vertex_group2 = [
	{ pos: [-5, 36, 18], flag: 0, tc: [0, 0], color: [158, 45, 66, 0] },
	{ pos: [-15, 0, -7], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [0, -14, 31], flag: 0, tc: [0, 0], color: [160, 223, 75, 0] },
	{ pos: [1, -44, -9], flag: 0, tc: [0, 0], color: [173, 161, 255, 0] },
	{ pos: [19, -16, 41], flag: 0, tc: [0, 0], color: [238, 214, 118, 0] },
	{ pos: [-6, 38, -31], flag: 0, tc: [0, 0], color: [158, 63, 207, 0] },
	{ pos: [13, 48, 24], flag: 0, tc: [0, 0], color: [214, 102, 62, 0] },
	{ pos: [18, -13, -58], flag: 0, tc: [0, 0], color: [234, 220, 137, 0] },
	{ pos: [-1, -11, -47], flag: 0, tc: [0, 0], color: [157, 227, 183, 0] },
	{ pos: [95, -3, -49], flag: 0, tc: [0, 0], color: [77, 236, 158, 0] },
	{ pos: [98, -35, -10], flag: 0, tc: [0, 0], color: [71, 151, 252, 0] },
	{ pos: [90, 47, -32], flag: 0, tc: [0, 0], color: [59, 80, 178, 0] },
	{ pos: [91, 46, 16], flag: 0, tc: [0, 0], color: [53, 92, 68, 0] },
	{ pos: [12, 49, -37], flag: 0, tc: [0, 0], color: [229, 110, 201, 0] },
	{ pos: [96, -5, 30], flag: 0, tc: [0, 0], color: [81, 231, 93, 0] },
]

export const mario_right_thigh_shared_dl = [
	Gbi.gsSPVertex(mario_right_thigh_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(3, 5, 4, 0x0, 6, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 7, 0x0, 8, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(1, 8, 2, 0x0, 2, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 11, 5, 0x0, 5, 11, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 12, 1, 0x0, 13, 14, 0, 0x0),
	...Gbi.gsSP2Triangles(0, 14, 15, 0x0, 15, 14, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 14, 6, 0x0, 6, 14, 13, 0x0),
	...Gbi.gsSP2Triangles(10, 9, 11, 0x0, 11, 9, 12, 0x0),
	Gbi.gsSPVertex(mario_right_thigh_shared_dl_vertex_group2, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 4, 0x0, 5, 0, 6, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 5, 0x0, 3, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(4, 2, 3, 0x0, 7, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 9, 7, 0x0, 12, 11, 13, 0x0),
	...Gbi.gsSP2Triangles(4, 14, 12, 0x0, 10, 14, 4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_thigh = (customData) => {
	return [
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_thigh_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_right_leg_shared_dl_vertex_group1 = [
	{ pos: [63, -45, -12], flag: 0, tc: [0, 0], color: [242, 155, 74, 0] },
	{ pos: [66, -11, 34], flag: 0, tc: [0, 0], color: [242, 155, 74, 0] },
	{ pos: [4, -36, -10], flag: 0, tc: [0, 0], color: [192, 147, 254, 0] },
	{ pos: [66, -11, 34], flag: 0, tc: [0, 0], color: [251, 34, 122, 0] },
	{ pos: [69, 45, 18], flag: 0, tc: [0, 0], color: [252, 34, 122, 0] },
	{ pos: [9, 44, 16], flag: 0, tc: [0, 0], color: [198, 75, 83, 0] },
	{ pos: [69, 45, 18], flag: 0, tc: [0, 0], color: [255, 127, 3, 0] },
	{ pos: [69, 46, -37], flag: 0, tc: [0, 0], color: [255, 127, 3, 0] },
	{ pos: [9, 46, -33], flag: 0, tc: [0, 0], color: [205, 96, 192, 0] },
	{ pos: [69, 46, -37], flag: 0, tc: [0, 0], color: [247, 39, 136, 0] },
	{ pos: [65, -9, -56], flag: 0, tc: [0, 0], color: [248, 40, 136, 0] },
	{ pos: [65, -9, -56], flag: 0, tc: [0, 0], color: [239, 160, 176, 0] },
	{ pos: [63, -45, -12], flag: 0, tc: [0, 0], color: [239, 160, 176, 0] },
	{ pos: [6, -6, 30], flag: 0, tc: [0, 0], color: [180, 228, 97, 0] },
	{ pos: [-13, 10, -9], flag: 0, tc: [0, 0], color: [130, 8, 2, 0] },
	{ pos: [5, -3, -50], flag: 0, tc: [0, 0], color: [178, 234, 160, 0] },
]

const mario_right_leg_shared_dl_vertex_group2 = [
	{ pos: [65, -9, -56], flag: 0, tc: [0, 0], color: [117, 238, 213, 0] },
	{ pos: [83, 4, -10], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [63, -45, -12], flag: 0, tc: [0, 0], color: [117, 209, 253, 0] },
	{ pos: [66, -11, 34], flag: 0, tc: [0, 0], color: [119, 236, 38, 0] },
	{ pos: [69, 45, 18], flag: 0, tc: [0, 0], color: [122, 24, 23, 0] },
	{ pos: [69, 46, -37], flag: 0, tc: [0, 0], color: [121, 25, 230, 0] },
	{ pos: [4, -36, -10], flag: 0, tc: [0, 0], color: [192, 147, 254, 0] },
	{ pos: [5, -3, -50], flag: 0, tc: [0, 0], color: [178, 234, 160, 0] },
	{ pos: [65, -9, -56], flag: 0, tc: [0, 0], color: [239, 160, 176, 0] },
	{ pos: [65, -9, -56], flag: 0, tc: [0, 0], color: [248, 40, 136, 0] },
	{ pos: [9, 46, -33], flag: 0, tc: [0, 0], color: [205, 96, 192, 0] },
	{ pos: [9, 44, 16], flag: 0, tc: [0, 0], color: [198, 75, 83, 0] },
	{ pos: [69, 45, 18], flag: 0, tc: [0, 0], color: [255, 127, 3, 0] },
	{ pos: [6, -6, 30], flag: 0, tc: [0, 0], color: [180, 228, 97, 0] },
	{ pos: [66, -11, 34], flag: 0, tc: [0, 0], color: [251, 34, 122, 0] },
	{ pos: [66, -11, 34], flag: 0, tc: [0, 0], color: [242, 155, 74, 0] },
]

export const mario_right_leg_shared_dl = [
	Gbi.gsSPVertex(mario_right_leg_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 8, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 2, 0x0, 13, 14, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 14, 15, 0x0, 15, 14, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 14, 5, 0x0, 5, 14, 13, 0x0),
	Gbi.gsSPVertex(mario_right_leg_shared_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 1, 4, 0x0, 4, 1, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 1, 0, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 7, 10, 0x0, 10, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0, 15, 13, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_right_foot_dl_vertex_group1 = [
	{ pos: [27, -35, -11], flag: 0, tc: [0, 0], color: [220, 135, 6, 0] },
	{ pos: [-36, 11, 19], flag: 0, tc: [0, 0], color: [181, 211, 91, 0] },
	{ pos: [-54, 14, -10], flag: 0, tc: [0, 0], color: [137, 214, 3, 0] },
	{ pos: [-34, 11, -46], flag: 0, tc: [0, 0], color: [180, 208, 168, 0] },
	{ pos: [43, -18, -55], flag: 0, tc: [0, 0], color: [10, 178, 157, 0] },
	{ pos: [80, -29, -7], flag: 0, tc: [0, 0], color: [54, 142, 8, 0] },
	{ pos: [44, -11, 32], flag: 0, tc: [0, 0], color: [1, 184, 104, 0] },
	{ pos: [-42, 64, -29], flag: 0, tc: [0, 0], color: [144, 20, 201, 0] },
	{ pos: [-40, 63, 5], flag: 0, tc: [0, 0], color: [146, 21, 59, 0] },
	{ pos: [-14, 54, 29], flag: 0, tc: [0, 0], color: [213, 254, 119, 0] },
	{ pos: [-11, 53, -56], flag: 0, tc: [0, 0], color: [218, 254, 135, 0] },
	{ pos: [110, 11, -36], flag: 0, tc: [0, 0], color: [78, 176, 198, 0] },
	{ pos: [78, 22, -61], flag: 0, tc: [0, 0], color: [23, 217, 138, 0] },
	{ pos: [109, 11, 20], flag: 0, tc: [0, 0], color: [69, 175, 68, 0] },
	{ pos: [75, 23, 40], flag: 0, tc: [0, 0], color: [11, 218, 120, 0] },
]

const mario_right_foot_dl_vertex_group2 = [
	{ pos: [-42, 64, -29], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [-40, 63, 5], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [-11, 53, -56], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [-14, 54, 29], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [78, 22, -61], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [75, 23, 40], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [110, 11, -36], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [109, 11, 20], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
]

export const mario_right_foot_dl = [
	Gbi.gsSPVertex(mario_right_foot_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 0, 0x0, 0, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 6, 1, 0x0, 5, 6, 0, 0x0),
	...Gbi.gsSP2Triangles(3, 2, 7, 0x0, 8, 7, 2, 0x0),
	...Gbi.gsSP2Triangles(1, 9, 8, 0x0, 2, 1, 8, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 3, 0x0, 11, 5, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 12, 11, 0x0, 6, 5, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 5, 0x0, 13, 14, 6, 0x0),
	...Gbi.gsSP2Triangles(14, 9, 6, 0x0, 10, 4, 3, 0x0),
	...Gbi.gsSP2Triangles(9, 1, 6, 0x0, 10, 12, 4, 0x0),
	Gbi.gsSPVertex(mario_right_foot_dl_vertex_group2, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 2, 0x0, 3, 5, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 4, 0x0, 5, 7, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_foot = (customData) => {
	return [
		Gbi.gsSPLight(mario_brown1_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown1_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_foot_dl),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
		Gbi.gsDPSetEnvColor(255, 255, 255, 255),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_yellow_button_dl_vertex = [
	{ pos: [9, 89, 41], flag: 0, tc: [180, 962], color: [20, 120, 35, 255] },
	{ pos: [3, 77, 62], flag: 0, tc: [682, 966], color: [4, 106, 68, 255] },
	{ pos: [47, 75, 35], flag: 0, tc: [34, 106], color: [57, 106, 38, 255] },
	{ pos: [28, 85, 30], flag: 0, tc: [-60, 572], color: [44, 118, 8, 255] },
	{ pos: [17, 66, 76], flag: 0, tc: [966, 590], color: [25, 88, 87, 255] },
	{ pos: [32, 62, 74], flag: 0, tc: [902, 252], color: [41, 83, 86, 255] },
	{ pos: [48, 64, 59], flag: 0, tc: [548, 0], color: [77, 81, 58, 255] },
	{ pos: [9, 89, -40], flag: 0, tc: [776, 920], color: [16, 123, 231, 255] },
	{ pos: [28, 85, -29], flag: 0, tc: [990, 512], color: [45, 117, 242, 255] },
	{ pos: [47, 75, -34], flag: 0, tc: [850, 72], color: [62, 106, 226, 255] },
	{ pos: [3, 77, -61], flag: 0, tc: [264, 972], color: [3, 106, 187, 255] },
	{ pos: [48, 64, -58], flag: 0, tc: [312, 0], color: [77, 80, 197, 255] },
	{ pos: [32, 62, -73], flag: 0, tc: [-24, 310], color: [41, 82, 169, 255] },
	{ pos: [17, 66, -75], flag: 0, tc: [-58, 642], color: [23, 88, 168, 255] },
]

const mario_tshirt_shared_dl_vertex_group1 = [
	{ pos: [47, 75, -34], flag: 0, tc: [0, 0], color: [62, 106, 226, 255] },
	{ pos: [47, 75, 35], flag: 0, tc: [0, 0], color: [57, 106, 38, 255] },
	{ pos: [82, 37, 27], flag: 0, tc: [0, 0], color: [102, 72, 20, 255] },
	{ pos: [82, 37, -26], flag: 0, tc: [0, 0], color: [105, 67, 236, 255] },
	{ pos: [100, 1, 24], flag: 0, tc: [0, 0], color: [122, 23, 22, 255] },
	{ pos: [100, 1, -23], flag: 0, tc: [0, 0], color: [124, 9, 234, 255] },
	{ pos: [6, -10, -92], flag: 0, tc: [0, 0], color: [0, 235, 131, 255] },
	{ pos: [47, 3, -88], flag: 0, tc: [0, 0], color: [48, 9, 139, 255] },
	{ pos: [46, -34, -83], flag: 0, tc: [0, 0], color: [36, 200, 149, 255] },
	{ pos: [12, 33, -90], flag: 0, tc: [0, 0], color: [17, 32, 135, 255] },
	{ pos: [20, -61, -67], flag: 0, tc: [0, 0], color: [10, 154, 183, 255] },
	{ pos: [66, -52, -50], flag: 0, tc: [0, 0], color: [59, 154, 211, 255] },
	{ pos: [84, -29, -62], flag: 0, tc: [0, 0], color: [95, 222, 180, 255] },
	{ pos: [20, -61, 68], flag: 0, tc: [0, 0], color: [10, 153, 73, 255] },
	{ pos: [66, -52, 51], flag: 0, tc: [0, 0], color: [59, 154, 45, 255] },
	{ pos: [46, -34, 84], flag: 0, tc: [0, 0], color: [36, 200, 107, 255] },
]

const mario_tshirt_shared_dl_vertex_group2 = [
	{ pos: [20, -61, 68], flag: 0, tc: [0, 0], color: [10, 153, 73, 255] },
	{ pos: [46, -34, 84], flag: 0, tc: [0, 0], color: [36, 200, 107, 255] },
	{ pos: [6, -11, 93], flag: 0, tc: [0, 0], color: [0, 234, 124, 255] },
	{ pos: [47, 3, 89], flag: 0, tc: [0, 0], color: [48, 8, 117, 255] },
	{ pos: [84, -29, 63], flag: 0, tc: [0, 0], color: [95, 222, 76, 255] },
	{ pos: [66, -52, 51], flag: 0, tc: [0, 0], color: [59, 154, 45, 255] },
	{ pos: [13, 33, 91], flag: 0, tc: [0, 0], color: [18, 32, 121, 255] },
	{ pos: [100, 1, -23], flag: 0, tc: [0, 0], color: [124, 9, 234, 255] },
	{ pos: [100, 1, 24], flag: 0, tc: [0, 0], color: [122, 23, 22, 255] },
	{ pos: [93, -36, 26], flag: 0, tc: [0, 0], color: [107, 191, 13, 255] },
	{ pos: [93, -36, -25], flag: 0, tc: [0, 0], color: [102, 183, 240, 255] },
	{ pos: [54, -63, 0], flag: 0, tc: [0, 0], color: [48, 139, 0, 255] },
	{ pos: [80, 14, 62], flag: 0, tc: [0, 0], color: [96, 40, 71, 255] },
	{ pos: [44, 51, 75], flag: 0, tc: [0, 0], color: [60, 52, 98, 255] },
]

const mario_tshirt_shared_dl_vertex_group3 = [
	{ pos: [80, 14, -61], flag: 0, tc: [0, 0], color: [96, 40, 184, 255] },
	{ pos: [47, 3, -88], flag: 0, tc: [0, 0], color: [48, 9, 139, 255] },
	{ pos: [43, 51, -74], flag: 0, tc: [0, 0], color: [60, 50, 157, 255] },
	{ pos: [84, -29, -62], flag: 0, tc: [0, 0], color: [95, 222, 180, 255] },
	{ pos: [12, 33, -90], flag: 0, tc: [0, 0], color: [17, 32, 135, 255] },
]

const mario_pants_overalls_shared_dl_vertex_group1 = [
	{ pos: [47, 75, -34], flag: 0, tc: [0, 0], color: [62, 106, 226, 255] },
	{ pos: [28, 85, 30], flag: 0, tc: [0, 0], color: [44, 118, 8, 255] },
	{ pos: [47, 75, 35], flag: 0, tc: [0, 0], color: [57, 106, 38, 255] },
	{ pos: [28, 85, -29], flag: 0, tc: [0, 0], color: [45, 117, 242, 255] },
	{ pos: [9, 89, 41], flag: 0, tc: [0, 0], color: [20, 120, 35, 255] },
	{ pos: [9, 89, -40], flag: 0, tc: [0, 0], color: [16, 123, 231, 255] },
	{ pos: [-15, 88, 35], flag: 0, tc: [0, 0], color: [236, 122, 28, 255] },
	{ pos: [-15, 87, -35], flag: 0, tc: [0, 0], color: [234, 118, 218, 255] },
	{ pos: [3, 77, -61], flag: 0, tc: [0, 0], color: [3, 106, 187, 255] },
	{ pos: [-43, 83, -24], flag: 0, tc: [0, 0], color: [204, 114, 238, 255] },
	{ pos: [-28, 63, -74], flag: 0, tc: [0, 0], color: [209, 79, 170, 255] },
	{ pos: [-40, 72, -54], flag: 0, tc: [0, 0], color: [197, 95, 198, 255] },
	{ pos: [-40, 72, 55], flag: 0, tc: [0, 0], color: [196, 94, 58, 255] },
	{ pos: [-43, 83, 25], flag: 0, tc: [0, 0], color: [188, 105, 17, 255] },
	{ pos: [-28, 63, 75], flag: 0, tc: [0, 0], color: [208, 80, 85, 255] },
]

const mario_pants_overalls_shared_dl_vertex_group2 = [
	{ pos: [80, 14, -61], flag: 0, tc: [0, 0], color: [96, 40, 184, 255] },
	{ pos: [43, 51, -74], flag: 0, tc: [0, 0], color: [60, 50, 157, 255] },
	{ pos: [48, 64, -58], flag: 0, tc: [0, 0], color: [77, 80, 197, 255] },
	{ pos: [3, 77, 62], flag: 0, tc: [0, 0], color: [4, 106, 68, 255] },
	{ pos: [9, 89, 41], flag: 0, tc: [0, 0], color: [20, 120, 35, 255] },
	{ pos: [-15, 88, 35], flag: 0, tc: [0, 0], color: [236, 122, 28, 255] },
	{ pos: [47, 75, 35], flag: 0, tc: [0, 0], color: [57, 106, 38, 255] },
	{ pos: [48, 64, 59], flag: 0, tc: [0, 0], color: [77, 81, 58, 255] },
	{ pos: [82, 37, 27], flag: 0, tc: [0, 0], color: [102, 72, 20, 255] },
	{ pos: [32, 62, 74], flag: 0, tc: [0, 0], color: [41, 83, 86, 255] },
	{ pos: [44, 51, 75], flag: 0, tc: [0, 0], color: [60, 52, 98, 255] },
	{ pos: [80, 14, 62], flag: 0, tc: [0, 0], color: [96, 40, 71, 255] },
	{ pos: [100, 1, 24], flag: 0, tc: [0, 0], color: [122, 23, 22, 255] },
	{ pos: [82, 37, -26], flag: 0, tc: [0, 0], color: [105, 67, 236, 255] },
	{ pos: [32, 62, -73], flag: 0, tc: [0, 0], color: [41, 82, 169, 255] },
	{ pos: [47, 75, -34], flag: 0, tc: [0, 0], color: [62, 106, 226, 255] },
]

const mario_pants_overalls_shared_dl_vertex_group3 = [
	{ pos: [80, 14, -61], flag: 0, tc: [0, 0], color: [96, 40, 184, 255] },
	{ pos: [82, 37, -26], flag: 0, tc: [0, 0], color: [105, 67, 236, 255] },
	{ pos: [100, 1, -23], flag: 0, tc: [0, 0], color: [124, 9, 234, 255] },
	{ pos: [20, -61, -67], flag: 0, tc: [0, 0], color: [10, 154, 183, 255] },
	{ pos: [66, -52, -50], flag: 0, tc: [0, 0], color: [59, 154, 211, 255] },
	{ pos: [54, -63, 0], flag: 0, tc: [0, 0], color: [48, 139, 0, 255] },
	{ pos: [-27, -25, -86], flag: 0, tc: [0, 0], color: [203, 213, 150, 255] },
	{ pos: [6, -10, -92], flag: 0, tc: [0, 0], color: [0, 235, 131, 255] },
	{ pos: [-29, -58, -59], flag: 0, tc: [0, 0], color: [201, 154, 207, 255] },
	{ pos: [8, -74, 0], flag: 0, tc: [0, 0], color: [253, 130, 0, 255] },
	{ pos: [-59, -28, -37], flag: 0, tc: [0, 0], color: [144, 213, 217, 255] },
	{ pos: [-30, -66, 0], flag: 0, tc: [0, 0], color: [184, 152, 0, 255] },
	{ pos: [-27, 26, -89], flag: 0, tc: [0, 0], color: [199, 15, 144, 255] },
	{ pos: [12, 33, -90], flag: 0, tc: [0, 0], color: [17, 32, 135, 255] },
	{ pos: [20, -61, 68], flag: 0, tc: [0, 0], color: [10, 153, 73, 255] },
	{ pos: [66, -52, 51], flag: 0, tc: [0, 0], color: [59, 154, 45, 255] },
]

const mario_pants_overalls_shared_dl_vertex_group4 = [
	{ pos: [8, -74, 0], flag: 0, tc: [0, 0], color: [253, 130, 0, 255] },
	{ pos: [20, -61, 68], flag: 0, tc: [0, 0], color: [10, 153, 73, 255] },
	{ pos: [-29, -58, 59], flag: 0, tc: [0, 0], color: [200, 153, 48, 255] },
	{ pos: [-27, -25, 87], flag: 0, tc: [0, 0], color: [203, 211, 105, 255] },
	{ pos: [6, -11, 93], flag: 0, tc: [0, 0], color: [0, 234, 124, 255] },
	{ pos: [-27, 26, 91], flag: 0, tc: [0, 0], color: [200, 14, 112, 255] },
	{ pos: [13, 33, 91], flag: 0, tc: [0, 0], color: [18, 32, 121, 255] },
	{ pos: [-59, -28, 38], flag: 0, tc: [0, 0], color: [141, 216, 33, 255] },
	{ pos: [-30, -66, 0], flag: 0, tc: [0, 0], color: [184, 152, 0, 255] },
	{ pos: [-28, 63, -74], flag: 0, tc: [0, 0], color: [209, 79, 170, 255] },
	{ pos: [-27, 26, -89], flag: 0, tc: [0, 0], color: [199, 15, 144, 255] },
	{ pos: [-71, 54, -29], flag: 0, tc: [0, 0], color: [143, 42, 218, 255] },
	{ pos: [-59, -28, -37], flag: 0, tc: [0, 0], color: [144, 213, 217, 255] },
	{ pos: [-71, 54, 30], flag: 0, tc: [0, 0], color: [148, 42, 49, 255] },
	{ pos: [-43, 83, 25], flag: 0, tc: [0, 0], color: [188, 105, 17, 255] },
	{ pos: [-43, 83, -24], flag: 0, tc: [0, 0], color: [204, 114, 238, 255] },
]

const mario_pants_overalls_shared_dl_vertex_group5 = [
	{ pos: [-71, 54, -29], flag: 0, tc: [0, 0], color: [143, 42, 218, 255] },
	{ pos: [-43, 83, -24], flag: 0, tc: [0, 0], color: [204, 114, 238, 255] },
	{ pos: [-40, 72, -54], flag: 0, tc: [0, 0], color: [197, 95, 198, 255] },
	{ pos: [-59, -28, -37], flag: 0, tc: [0, 0], color: [144, 213, 217, 255] },
	{ pos: [-59, -28, 38], flag: 0, tc: [0, 0], color: [141, 216, 33, 255] },
	{ pos: [-28, 63, -74], flag: 0, tc: [0, 0], color: [209, 79, 170, 255] },
	{ pos: [-43, 83, 25], flag: 0, tc: [0, 0], color: [188, 105, 17, 255] },
	{ pos: [-71, 54, 30], flag: 0, tc: [0, 0], color: [148, 42, 49, 255] },
	{ pos: [-30, -66, 0], flag: 0, tc: [0, 0], color: [184, 152, 0, 255] },
	{ pos: [-27, 26, 91], flag: 0, tc: [0, 0], color: [200, 14, 112, 255] },
	{ pos: [-28, 63, 75], flag: 0, tc: [0, 0], color: [208, 80, 85, 255] },
	{ pos: [-40, 72, 55], flag: 0, tc: [0, 0], color: [196, 94, 58, 255] },
	{ pos: [13, 33, 91], flag: 0, tc: [0, 0], color: [18, 32, 121, 255] },
	{ pos: [-4, 58, 84], flag: 0, tc: [0, 0], color: [251, 67, 107, 255] },
]

const mario_pants_overalls_shared_dl_vertex_group6 = [
	{ pos: [-27, 26, -89], flag: 0, tc: [0, 0], color: [199, 15, 144, 255] },
	{ pos: [-4, 58, -82], flag: 0, tc: [0, 0], color: [249, 66, 148, 255] },
	{ pos: [12, 33, -90], flag: 0, tc: [0, 0], color: [17, 32, 135, 255] },
	{ pos: [-28, 63, -74], flag: 0, tc: [0, 0], color: [209, 79, 170, 255] },
	{ pos: [80, 14, -61], flag: 0, tc: [0, 0], color: [96, 40, 184, 255] },
	{ pos: [100, 1, -23], flag: 0, tc: [0, 0], color: [124, 9, 234, 255] },
	{ pos: [84, -29, -62], flag: 0, tc: [0, 0], color: [95, 222, 180, 255] },
	{ pos: [93, -36, -25], flag: 0, tc: [0, 0], color: [102, 183, 240, 255] },
	{ pos: [66, -52, -50], flag: 0, tc: [0, 0], color: [59, 154, 211, 255] },
	{ pos: [54, -63, 0], flag: 0, tc: [0, 0], color: [48, 139, 0, 255] },
	{ pos: [66, -52, 51], flag: 0, tc: [0, 0], color: [59, 154, 45, 255] },
	{ pos: [93, -36, 26], flag: 0, tc: [0, 0], color: [107, 191, 13, 255] },
	{ pos: [84, -29, 63], flag: 0, tc: [0, 0], color: [95, 222, 76, 255] },
	{ pos: [100, 1, 24], flag: 0, tc: [0, 0], color: [122, 23, 22, 255] },
	{ pos: [80, 14, 62], flag: 0, tc: [0, 0], color: [96, 40, 71, 255] },
]

const mario_pants_overalls_shared_dl_vertex_group7 = [
	{ pos: [17, 66, -75], flag: 0, tc: [0, 0], color: [23, 88, 168, 255] },
	{ pos: [-4, 58, -82], flag: 0, tc: [0, 0], color: [249, 66, 148, 255] },
	{ pos: [3, 77, -61], flag: 0, tc: [0, 0], color: [3, 106, 187, 255] },
	{ pos: [-28, 63, -74], flag: 0, tc: [0, 0], color: [209, 79, 170, 255] },
	{ pos: [32, 62, 74], flag: 0, tc: [0, 0], color: [41, 83, 86, 255] },
	{ pos: [17, 66, 76], flag: 0, tc: [0, 0], color: [25, 88, 87, 255] },
	{ pos: [13, 33, 91], flag: 0, tc: [0, 0], color: [18, 32, 121, 255] },
	{ pos: [-28, 63, 75], flag: 0, tc: [0, 0], color: [208, 80, 85, 255] },
	{ pos: [-4, 58, 84], flag: 0, tc: [0, 0], color: [251, 67, 107, 255] },
	{ pos: [3, 77, 62], flag: 0, tc: [0, 0], color: [4, 106, 68, 255] },
	{ pos: [-15, 88, 35], flag: 0, tc: [0, 0], color: [236, 122, 28, 255] },
	{ pos: [12, 33, -90], flag: 0, tc: [0, 0], color: [17, 32, 135, 255] },
	{ pos: [32, 62, -73], flag: 0, tc: [0, 0], color: [41, 82, 169, 255] },
	{ pos: [43, 51, -74], flag: 0, tc: [0, 0], color: [60, 50, 157, 255] },
	{ pos: [44, 51, 75], flag: 0, tc: [0, 0], color: [60, 52, 98, 255] },
]

export const mario_yellow_button_dl = [
	Gbi.gsSPVertex(mario_yellow_button_dl_vertex, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(1, 4, 2, 0x0, 5, 6, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 2, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 9, 0x0, 9, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 9, 0x0, 13, 10, 9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_pants_overalls_shared_dl = [
	Gbi.gsSPVertex(mario_pants_overalls_shared_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 1, 5, 0x0, 1, 3, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(7, 5, 8, 0x0, 9, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 10, 0x0, 10, 11, 7, 0x0),
	...Gbi.gsSP2Triangles(9, 7, 11, 0x0, 12, 6, 13, 0x0),
	...Gbi.gsSP2Triangles(9, 13, 6, 0x0, 6, 12, 14, 0x0),
	Gbi.gsSPVertex(mario_pants_overalls_shared_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 11, 0x0, 11, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(12, 8, 11, 0x0, 13, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 14, 0x0, 2, 15, 13, 0x0),
	Gbi.gsSPVertex(mario_pants_overalls_shared_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 7, 0x0, 3, 8, 6, 0x0),
	...Gbi.gsSP2Triangles(5, 9, 3, 0x0, 8, 3, 9, 0x0),
	...Gbi.gsSP2Triangles(6, 8, 10, 0x0, 11, 10, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 11, 8, 0x0, 6, 12, 7, 0x0),
	...Gbi.gsSP2Triangles(12, 6, 10, 0x0, 7, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(14, 5, 15, 0x0, 14, 9, 5, 0x0),
	Gbi.gsSPVertex(mario_pants_overalls_shared_dl_vertex_group4, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(1, 4, 3, 0x0, 5, 4, 6, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 3, 0x0, 2, 3, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 3, 5, 0x0, 8, 2, 7, 0x0),
	...Gbi.gsSP2Triangles(2, 8, 0, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 11, 10, 0x0, 11, 7, 13, 0x0),
	Gbi.gsSP1Triangle(14, 15, 11, 0x0),
	Gbi.gsSPVertex(mario_pants_overalls_shared_dl_vertex_group5, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(2, 5, 0, 0x0, 6, 0, 7, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 8, 0x0, 9, 7, 4, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 11, 0x0, 11, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(9, 12, 13, 0x0, 10, 9, 13, 0x0),
	Gbi.gsSP1Triangle(7, 9, 10, 0x0),
	Gbi.gsSPVertex(mario_pants_overalls_shared_dl_vertex_group6, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 12, 11, 13, 0x0),
	...Gbi.gsSP2Triangles(14, 12, 13, 0x0, 11, 10, 9, 0x0),
	Gbi.gsSPVertex(mario_pants_overalls_shared_dl_vertex_group7, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 9, 0x0, 9, 8, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 8, 6, 0x0, 11, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 6, 14, 4, 0x0),
	Gbi.gsSP1Triangle(11, 0, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_tshirt_shared_dl = [
	Gbi.gsSPVertex(mario_tshirt_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 2, 0x0, 4, 5, 3, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(6, 8, 10, 0x0, 11, 8, 12, 0x0),
	...Gbi.gsSP2Triangles(12, 8, 7, 0x0, 8, 11, 10, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_tshirt_shared_dl_vertex_group2, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(3, 1, 4, 0x0, 4, 1, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 2, 3, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 10, 0x0, 11, 10, 9, 0x0),
	...Gbi.gsSP2Triangles(12, 3, 4, 0x0, 13, 3, 12, 0x0),
	Gbi.gsSP1Triangle(6, 3, 13, 0x0),
	Gbi.gsSPVertex(mario_tshirt_shared_dl_vertex_group3, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	Gbi.gsSP1Triangle(1, 4, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_torso_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_pants_overalls_shared_dl),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_tshirt_shared_dl),
		Gbi.gsSPLight(mario_hat_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_hat_lights_group(customData).a, 2),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_torso = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_yellow_button),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_yellow_button_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_torso_dl),
	Gbi.gsSPEndDisplayList(),
]


const mario_m_logo_dl_vertex = [
	{ pos: [195, 93, 32], flag: 0, tc: [744, 732], color: [81, 84, 48, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [1250, 1066], color: [4, 70, 105, 255] },
	{ pos: [252, 62, 70], flag: 0, tc: [1032, 152], color: [57, 74, 85, 255] },
	{ pos: [272, 85, 0], flag: 0, tc: [472, -16], color: [95, 84, 0, 255] },
	{ pos: [252, 62, -69], flag: 0, tc: [-78, 158], color: [57, 74, 171, 255] },
	{ pos: [195, 93, -31], flag: 0, tc: [232, 736], color: [81, 84, 207, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [-258, 1076], color: [3, 70, 151, 255] },
]

const mario_eyes_cap_on_dl_vertex = [
	{ pos: [145, 101, 0], flag: 0, tc: [480, 446], color: [19, 125, 0, 255] },
	{ pos: [108, 105, 0], flag: 0, tc: [488, 854], color: [105, 70, 0, 255] },
	{ pos: [97, 103, 25], flag: 0, tc: [724, 958], color: [64, 90, 61, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [256, 970], color: [64, 90, 195, 255] },
	{ pos: [175, 91, -38], flag: 0, tc: [106, 130], color: [198, 109, 231, 255] },
	{ pos: [144, 83, -66], flag: 0, tc: [-146, 460], color: [25, 91, 173, 255] },
	{ pos: [104, 87, -69], flag: 0, tc: [-160, 898], color: [48, 92, 183, 255] },
	{ pos: [175, 91, 39], flag: 0, tc: [842, 112], color: [198, 109, 25, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [-404, 342], color: [3, 70, 151, 255] },
	{ pos: [104, 87, 70], flag: 0, tc: [1138, 864], color: [48, 92, 73, 255] },
	{ pos: [144, 83, 67], flag: 0, tc: [1108, 428], color: [25, 91, 83, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [1362, 296], color: [4, 70, 105, 255] },
]

const mario_hair_sideburn_cap_on_dl_vertex = [
	{ pos: [120, -12, -109], flag: 0, tc: [916, 184], color: [237, 36, 136, 255] },
	{ pos: [96, 49, -93], flag: 0, tc: [-70, 700], color: [17, 39, 137, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [90, -58], color: [3, 70, 151, 255] },
	{ pos: [85, -23, -110], flag: 0, tc: [1150, 582], color: [6, 89, 166, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [842, 1210], color: [195, 5, 146, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [118, 1334], color: [218, 33, 140, 255] },
	{ pos: [96, 49, 94], flag: 0, tc: [-74, 726], color: [16, 40, 119, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [196, 1366], color: [218, 33, 116, 255] },
	{ pos: [42, 0, 103], flag: 0, tc: [968, 1192], color: [195, 5, 110, 255] },
	{ pos: [85, -23, 111], flag: 0, tc: [1238, 518], color: [4, 88, 90, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [922, 122], color: [237, 36, 120, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [22, -68], color: [4, 70, 105, 255] },
]

const mario_mustache_cap_on_dl_vertex_group1 = [
	{ pos: [77, 108, 34], flag: 0, tc: [342, 368], color: [14, 22, 124, 255] },
	{ pos: [92, 88, 84], flag: 0, tc: [898, -18], color: [35, 89, 83, 255] },
	{ pos: [97, 103, 25], flag: 0, tc: [224, 146], color: [64, 90, 61, 255] },
	{ pos: [48, 94, 76], flag: 0, tc: [888, 564], color: [215, 96, 71, 255] },
	{ pos: [52, 111, 31], flag: 0, tc: [354, 690], color: [168, 51, 75, 255] },
	{ pos: [27, 100, 30], flag: 0, tc: [442, 982], color: [177, 96, 22, 255] },
	{ pos: [41, 109, 0], flag: 0, tc: [70, 924], color: [149, 68, 0, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [1296, 438], color: [218, 33, 116, 255] },
	{ pos: [3, 54, 52], flag: 0, tc: [892, 1090], color: [149, 29, 60, 255] },
	{ pos: [52, 111, -30], flag: 0, tc: [340, 684], color: [168, 50, 181, 255] },
	{ pos: [48, 94, -75], flag: 0, tc: [856, 608], color: [215, 96, 185, 255] },
	{ pos: [27, 100, -29], flag: 0, tc: [394, 998], color: [177, 96, 234, 255] },
	{ pos: [3, 54, -51], flag: 0, tc: [806, 1162], color: [149, 29, 196, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [1250, 518], color: [218, 33, 140, 255] },
	{ pos: [77, 108, -33], flag: 0, tc: [362, 344], color: [14, 22, 132, 255] },
	{ pos: [41, 109, 0], flag: 0, tc: [50, 900], color: [149, 68, 0, 255] },
]

const mario_mustache_cap_on_dl_vertex_group2 = [
	{ pos: [48, 94, -75], flag: 0, tc: [856, 608], color: [215, 96, 185, 255] },
	{ pos: [77, 108, -33], flag: 0, tc: [362, 344], color: [14, 22, 132, 255] },
	{ pos: [92, 88, -83], flag: 0, tc: [922, -4], color: [35, 89, 173, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [274, 100], color: [64, 90, 195, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [1250, 518], color: [218, 33, 140, 255] },
]

const mario_face_cap_dl_vertex_group1 = [
	{ pos: [164, -89, -74], flag: 0, tc: [0, 0], color: [81, 169, 213, 255] },
	{ pos: [122, -139, -48], flag: 0, tc: [0, 0], color: [40, 148, 205, 255] },
	{ pos: [131, -56, -123], flag: 0, tc: [0, 0], color: [222, 212, 143, 255] },
	{ pos: [187, -6, -133], flag: 0, tc: [0, 0], color: [30, 4, 133, 255] },
	{ pos: [120, -12, -109], flag: 0, tc: [0, 0], color: [237, 36, 136, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [217, 176, 167, 255] },
	{ pos: [77, -138, -50], flag: 0, tc: [0, 0], color: [188, 158, 216, 255] },
	{ pos: [64, -103, -51], flag: 0, tc: [0, 0], color: [222, 148, 199, 255] },
	{ pos: [122, -139, 49], flag: 0, tc: [0, 0], color: [45, 143, 34, 255] },
	{ pos: [77, -138, 51], flag: 0, tc: [0, 0], color: [193, 164, 60, 255] },
	{ pos: [64, -103, 52], flag: 0, tc: [0, 0], color: [201, 154, 49, 255] },
	{ pos: [131, -56, 124], flag: 0, tc: [0, 0], color: [223, 211, 113, 255] },
	{ pos: [164, -89, 75], flag: 0, tc: [0, 0], color: [78, 166, 43, 255] },
	{ pos: [91, -54, 86], flag: 0, tc: [0, 0], color: [217, 175, 89, 255] },
	{ pos: [187, -6, 134], flag: 0, tc: [0, 0], color: [31, 4, 122, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [0, 0], color: [237, 36, 120, 255] },
]

const mario_face_cap_dl_vertex_group2 = [
	{ pos: [153, 33, -94], flag: 0, tc: [0, 0], color: [3, 70, 151, 255] },
	{ pos: [187, -6, -133], flag: 0, tc: [0, 0], color: [30, 4, 133, 255] },
	{ pos: [120, -12, -109], flag: 0, tc: [0, 0], color: [237, 36, 136, 255] },
	{ pos: [175, 91, -38], flag: 0, tc: [0, 0], color: [198, 109, 231, 255] },
	{ pos: [173, 132, -65], flag: 0, tc: [0, 0], color: [218, 90, 176, 255] },
	{ pos: [195, 93, -31], flag: 0, tc: [0, 0], color: [81, 84, 207, 255] },
	{ pos: [252, 62, -69], flag: 0, tc: [0, 0], color: [57, 74, 171, 255] },
	{ pos: [164, -89, -74], flag: 0, tc: [0, 0], color: [81, 169, 213, 255] },
	{ pos: [271, 0, -41], flag: 0, tc: [0, 0], color: [110, 207, 220, 255] },
	{ pos: [187, -6, 134], flag: 0, tc: [0, 0], color: [31, 4, 122, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [0, 0], color: [4, 70, 105, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [0, 0], color: [237, 36, 120, 255] },
	{ pos: [252, 62, 70], flag: 0, tc: [0, 0], color: [57, 74, 85, 255] },
	{ pos: [271, 0, 42], flag: 0, tc: [0, 0], color: [113, 220, 43, 255] },
	{ pos: [164, -89, 75], flag: 0, tc: [0, 0], color: [78, 166, 43, 255] },
]

const mario_face_cap_dl_vertex_group3 = [
	{ pos: [195, 93, 32], flag: 0, tc: [0, 0], color: [81, 84, 48, 255] },
	{ pos: [173, 132, 66], flag: 0, tc: [0, 0], color: [218, 90, 80, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [0, 0], color: [4, 70, 105, 255] },
	{ pos: [175, 91, 39], flag: 0, tc: [0, 0], color: [198, 109, 25, 255] },
	{ pos: [164, -89, -74], flag: 0, tc: [0, 0], color: [81, 169, 213, 255] },
	{ pos: [271, 0, -41], flag: 0, tc: [0, 0], color: [110, 207, 220, 255] },
	{ pos: [164, -89, 75], flag: 0, tc: [0, 0], color: [78, 166, 43, 255] },
	{ pos: [271, 0, 42], flag: 0, tc: [0, 0], color: [113, 220, 43, 255] },
	{ pos: [252, 62, -69], flag: 0, tc: [0, 0], color: [57, 74, 171, 255] },
	{ pos: [272, 85, 0], flag: 0, tc: [0, 0], color: [95, 84, 0, 255] },
	{ pos: [182, 155, 0], flag: 0, tc: [0, 0], color: [237, 125, 0, 255] },
	{ pos: [195, 93, -31], flag: 0, tc: [0, 0], color: [81, 84, 207, 255] },
	{ pos: [175, 91, -38], flag: 0, tc: [0, 0], color: [198, 109, 231, 255] },
	{ pos: [173, 132, -65], flag: 0, tc: [0, 0], color: [218, 90, 176, 255] },
	{ pos: [252, 62, 70], flag: 0, tc: [0, 0], color: [57, 74, 85, 255] },
]

const mario_face_part_cap_on_dl_vertex_group1 = [
	{ pos: [41, 109, 0], flag: 0, tc: [0, 0], color: [149, 68, 0, 255] },
	{ pos: [27, 100, -29], flag: 0, tc: [0, 0], color: [177, 96, 234, 255] },
	{ pos: [27, 100, 30], flag: 0, tc: [0, 0], color: [177, 96, 22, 255] },
	{ pos: [-7, 62, 0], flag: 0, tc: [0, 0], color: [133, 29, 0, 255] },
	{ pos: [3, 54, 52], flag: 0, tc: [0, 0], color: [149, 29, 60, 255] },
	{ pos: [3, 54, -51], flag: 0, tc: [0, 0], color: [149, 29, 196, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [42, 0, 103], flag: 0, tc: [0, 0], color: [195, 5, 110, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [0, 0], color: [218, 33, 116, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [0, 0], color: [195, 5, 146, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [0, 0], color: [218, 33, 140, 255] },
	{ pos: [64, -25, 135], flag: 0, tc: [0, 0], color: [204, 229, 112, 255] },
	{ pos: [91, -54, 86], flag: 0, tc: [0, 0], color: [217, 175, 89, 255] },
	{ pos: [102, -33, 135], flag: 0, tc: [0, 0], color: [48, 24, 114, 255] },
]

const mario_face_part_cap_on_dl_vertex_group2 = [
	{ pos: [102, -33, -134], flag: 0, tc: [0, 0], color: [50, 25, 143, 255] },
	{ pos: [120, -12, -109], flag: 0, tc: [0, 0], color: [237, 36, 136, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [217, 176, 167, 255] },
	{ pos: [64, -25, 135], flag: 0, tc: [0, 0], color: [204, 229, 112, 255] },
	{ pos: [56, -45, 77], flag: 0, tc: [0, 0], color: [227, 202, 110, 255] },
	{ pos: [91, -54, 86], flag: 0, tc: [0, 0], color: [217, 175, 89, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [0, 0], color: [237, 36, 120, 255] },
	{ pos: [85, -23, 111], flag: 0, tc: [0, 0], color: [4, 88, 90, 255] },
	{ pos: [102, -33, 135], flag: 0, tc: [0, 0], color: [48, 24, 114, 255] },
	{ pos: [42, 0, 103], flag: 0, tc: [0, 0], color: [195, 5, 110, 255] },
	{ pos: [85, -23, -110], flag: 0, tc: [0, 0], color: [6, 89, 166, 255] },
	{ pos: [64, -25, -134], flag: 0, tc: [0, 0], color: [204, 229, 144, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [0, 0], color: [195, 5, 146, 255] },
	{ pos: [33, 165, 0], flag: 0, tc: [0, 0], color: [143, 56, 9, 255] },
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
	{ pos: [32, 132, 0], flag: 0, tc: [0, 0], color: [132, 232, 248, 255] },
]

const mario_face_part_cap_on_dl_vertex_group3 = [
	{ pos: [56, -45, -76], flag: 0, tc: [0, 0], color: [227, 202, 146, 255] },
	{ pos: [64, -25, -134], flag: 0, tc: [0, 0], color: [204, 229, 144, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [217, 176, 167, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [0, 0], color: [195, 5, 146, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [56, -45, 77], flag: 0, tc: [0, 0], color: [227, 202, 110, 255] },
	{ pos: [42, 0, 103], flag: 0, tc: [0, 0], color: [195, 5, 110, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [32, 132, 0], flag: 0, tc: [0, 0], color: [132, 232, 248, 255] },
	{ pos: [47, 131, 41], flag: 0, tc: [0, 0], color: [176, 228, 94, 255] },
	{ pos: [33, 165, 0], flag: 0, tc: [0, 0], color: [143, 56, 9, 255] },
	{ pos: [52, 111, 31], flag: 0, tc: [0, 0], color: [168, 51, 75, 255] },
	{ pos: [52, 111, -30], flag: 0, tc: [0, 0], color: [168, 50, 181, 255] },
	{ pos: [41, 109, 0], flag: 0, tc: [0, 0], color: [149, 68, 0, 255] },
	{ pos: [77, 108, 34], flag: 0, tc: [0, 0], color: [14, 22, 124, 255] },
]

const mario_face_part_cap_on_dl_vertex_group4 = [
	{ pos: [92, 88, 84], flag: 0, tc: [0, 0], color: [35, 89, 83, 255] },
	{ pos: [104, 87, 70], flag: 0, tc: [0, 0], color: [48, 92, 73, 255] },
	{ pos: [97, 103, 25], flag: 0, tc: [0, 0], color: [64, 90, 61, 255] },
	{ pos: [117, 128, 0], flag: 0, tc: [0, 0], color: [122, 225, 6, 255] },
	{ pos: [102, 129, 41], flag: 0, tc: [0, 0], color: [69, 214, 97, 255] },
	{ pos: [77, 108, 34], flag: 0, tc: [0, 0], color: [14, 22, 124, 255] },
	{ pos: [108, 105, 0], flag: 0, tc: [0, 0], color: [105, 70, 0, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [0, 0], color: [64, 90, 195, 255] },
	{ pos: [119, 161, 0], flag: 0, tc: [0, 0], color: [121, 35, 246, 255] },
	{ pos: [104, 162, 41], flag: 0, tc: [0, 0], color: [82, 39, 88, 255] },
	{ pos: [102, 129, -40], flag: 0, tc: [0, 0], color: [80, 220, 166, 255] },
	{ pos: [75, 130, 46], flag: 0, tc: [0, 0], color: [0, 236, 125, 255] },
	{ pos: [78, 163, 46], flag: 0, tc: [0, 0], color: [3, 85, 93, 255] },
	{ pos: [101, 179, 0], flag: 0, tc: [0, 0], color: [39, 120, 0, 255] },
	{ pos: [52, 164, 41], flag: 0, tc: [0, 0], color: [200, 61, 95, 255] },
	{ pos: [47, 131, 41], flag: 0, tc: [0, 0], color: [176, 228, 94, 255] },
]

const mario_face_part_cap_on_dl_vertex_group5 = [
	{ pos: [47, 131, 41], flag: 0, tc: [0, 0], color: [176, 228, 94, 255] },
	{ pos: [52, 164, 41], flag: 0, tc: [0, 0], color: [200, 61, 95, 255] },
	{ pos: [33, 165, 0], flag: 0, tc: [0, 0], color: [143, 56, 9, 255] },
	{ pos: [75, 130, 46], flag: 0, tc: [0, 0], color: [0, 236, 125, 255] },
	{ pos: [77, 108, 34], flag: 0, tc: [0, 0], color: [14, 22, 124, 255] },
	{ pos: [78, 163, 46], flag: 0, tc: [0, 0], color: [3, 85, 93, 255] },
	{ pos: [60, 181, 0], flag: 0, tc: [0, 0], color: [234, 124, 0, 255] },
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
	{ pos: [96, 49, 94], flag: 0, tc: [0, 0], color: [16, 40, 119, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [0, 0], color: [4, 70, 105, 255] },
	{ pos: [144, 83, 67], flag: 0, tc: [0, 0], color: [25, 91, 83, 255] },
	{ pos: [101, 179, 0], flag: 0, tc: [0, 0], color: [39, 120, 0, 255] },
	{ pos: [104, 87, 70], flag: 0, tc: [0, 0], color: [48, 92, 73, 255] },
	{ pos: [92, 88, 84], flag: 0, tc: [0, 0], color: [35, 89, 83, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [0, 0], color: [218, 33, 116, 255] },
]

const mario_face_part_cap_on_dl_vertex_group6 = [
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [31, -84, 0], flag: 0, tc: [0, 0], color: [160, 174, 0, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [144, 83, -66], flag: 0, tc: [0, 0], color: [25, 91, 173, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [0, 0], color: [3, 70, 151, 255] },
	{ pos: [96, 49, -93], flag: 0, tc: [0, 0], color: [17, 39, 137, 255] },
	{ pos: [92, 88, -83], flag: 0, tc: [0, 0], color: [35, 89, 173, 255] },
	{ pos: [104, 87, -69], flag: 0, tc: [0, 0], color: [48, 92, 183, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [0, 0], color: [218, 33, 140, 255] },
	{ pos: [75, 130, -45], flag: 0, tc: [0, 0], color: [0, 236, 131, 255] },
	{ pos: [78, 163, -45], flag: 0, tc: [0, 0], color: [3, 84, 162, 255] },
	{ pos: [104, 162, -40], flag: 0, tc: [0, 0], color: [68, 49, 161, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [0, 0], color: [64, 90, 195, 255] },
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
	{ pos: [47, 131, -40], flag: 0, tc: [0, 0], color: [188, 222, 156, 255] },
	{ pos: [60, 181, 0], flag: 0, tc: [0, 0], color: [234, 124, 0, 255] },
]

const mario_face_part_cap_on_dl_vertex_group7 = [
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
	{ pos: [47, 131, -40], flag: 0, tc: [0, 0], color: [188, 222, 156, 255] },
	{ pos: [32, 132, 0], flag: 0, tc: [0, 0], color: [132, 232, 248, 255] },
	{ pos: [77, 108, -33], flag: 0, tc: [0, 0], color: [14, 22, 132, 255] },
	{ pos: [52, 111, -30], flag: 0, tc: [0, 0], color: [168, 50, 181, 255] },
	{ pos: [75, 130, -45], flag: 0, tc: [0, 0], color: [0, 236, 131, 255] },
	{ pos: [104, 162, -40], flag: 0, tc: [0, 0], color: [68, 49, 161, 255] },
	{ pos: [102, 129, -40], flag: 0, tc: [0, 0], color: [80, 220, 166, 255] },
	{ pos: [119, 161, 0], flag: 0, tc: [0, 0], color: [121, 35, 246, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [0, 0], color: [64, 90, 195, 255] },
	{ pos: [78, 163, -45], flag: 0, tc: [0, 0], color: [3, 84, 162, 255] },
	{ pos: [60, 181, 0], flag: 0, tc: [0, 0], color: [234, 124, 0, 255] },
	{ pos: [101, 179, 0], flag: 0, tc: [0, 0], color: [39, 120, 0, 255] },
]

const mario_face_back_hair_cap_on_dl_vertex_group1 = [
	{ pos: [31, -84, 0], flag: 0, tc: [0, 0], color: [160, 174, 0, 255] },
	{ pos: [36, -116, -35], flag: 0, tc: [0, 0], color: [251, 142, 55, 255] },
	{ pos: [64, -103, -51], flag: 0, tc: [0, 0], color: [222, 148, 199, 255] },
	{ pos: [31, -85, 87], flag: 0, tc: [0, 0], color: [219, 253, 121, 255] },
	{ pos: [35, -120, 68], flag: 0, tc: [0, 0], color: [218, 148, 53, 255] },
	{ pos: [58, -114, 60], flag: 0, tc: [0, 0], color: [87, 180, 50, 255] },
	{ pos: [64, -103, 52], flag: 0, tc: [0, 0], color: [201, 154, 49, 255] },
	{ pos: [56, -45, 77], flag: 0, tc: [0, 0], color: [227, 202, 110, 255] },
	{ pos: [36, -116, 36], flag: 0, tc: [0, 0], color: [251, 142, 201, 255] },
	{ pos: [91, -54, 86], flag: 0, tc: [0, 0], color: [217, 175, 89, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [35, -120, -67], flag: 0, tc: [0, 0], color: [218, 148, 203, 255] },
	{ pos: [58, -114, -59], flag: 0, tc: [0, 0], color: [87, 180, 206, 255] },
	{ pos: [31, -85, -86], flag: 0, tc: [0, 0], color: [219, 253, 135, 255] },
	{ pos: [56, -45, -76], flag: 0, tc: [0, 0], color: [227, 202, 146, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
]

const mario_face_back_hair_cap_on_dl_vertex_group2 = [
	{ pos: [31, -85, -86], flag: 0, tc: [0, 0], color: [219, 253, 135, 255] },
	{ pos: [35, -120, -67], flag: 0, tc: [0, 0], color: [218, 148, 203, 255] },
	{ pos: [9, -88, -58], flag: 0, tc: [0, 0], color: [135, 223, 245, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [56, -45, -76], flag: 0, tc: [0, 0], color: [227, 202, 146, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [217, 176, 167, 255] },
	{ pos: [64, -103, -51], flag: 0, tc: [0, 0], color: [222, 148, 199, 255] },
	{ pos: [31, -84, 0], flag: 0, tc: [0, 0], color: [160, 174, 0, 255] },
	{ pos: [36, -116, 36], flag: 0, tc: [0, 0], color: [251, 142, 201, 255] },
	{ pos: [9, -88, 59], flag: 0, tc: [0, 0], color: [135, 223, 11, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [36, -116, -35], flag: 0, tc: [0, 0], color: [251, 142, 55, 255] },
	{ pos: [35, -120, 68], flag: 0, tc: [0, 0], color: [218, 148, 53, 255] },
	{ pos: [31, -85, 87], flag: 0, tc: [0, 0], color: [219, 253, 121, 255] },
]

export const mario_m_logo_dl = [
	Gbi.gsSPVertex(mario_m_logo_dl_vertex, 7, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(2, 3, 0, 0x0, 3, 5, 0, 0x0),
	Gbi.gsSP1Triangle(4, 6, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_eyes_cap_on_dl = [
	Gbi.gsSPVertex(mario_eyes_cap_on_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 0, 4, 0x0, 6, 3, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 1, 0, 0x0, 4, 0, 7, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 8, 0x0, 2, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 2, 0x0, 11, 7, 10, 0x0),
	Gbi.gsSP1Triangle(7, 0, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_hair_sideburn_cap_on_dl = [
	Gbi.gsSPVertex(mario_hair_sideburn_cap_on_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 1, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 8, 9, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 6, 0x0, 11, 6, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_mustache_cap_on_dl = [
	Gbi.gsSPVertex(mario_mustache_cap_on_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 0, 3, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 3, 0x0, 5, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 6, 0x0, 7, 3, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 3, 5, 0x0, 3, 7, 1, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 11, 0x0, 12, 10, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 12, 0x0, 10, 9, 14, 0x0),
	Gbi.gsSP1Triangle(15, 9, 11, 0x0),
	Gbi.gsSPVertex(mario_mustache_cap_on_dl_vertex_group2, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	Gbi.gsSP1Triangle(2, 4, 0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_face_part_cap_on_dl = [
	Gbi.gsSPVertex(mario_face_part_cap_on_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 2, 0x0, 1, 5, 3, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 3, 0x0, 7, 4, 3, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 5, 0x0, 4, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 4, 8, 0x0, 10, 6, 5, 0x0),
	...Gbi.gsSP2Triangles(10, 5, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_on_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 5, 6, 8, 0x0),
	...Gbi.gsSP2Triangles(3, 8, 7, 0x0, 9, 3, 7, 0x0),
	...Gbi.gsSP2Triangles(3, 9, 4, 0x0, 10, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(0, 10, 1, 0x0, 10, 0, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 0, 2, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_on_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 3, 0, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 11, 9, 8, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 8, 0x0, 8, 13, 11, 0x0),
	Gbi.gsSP1Triangle(9, 11, 14, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_on_dl_vertex_group4, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 2, 0x0),
	...Gbi.gsSP2Triangles(5, 2, 4, 0x0, 2, 6, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 7, 0x0, 8, 9, 3, 0x0),
	...Gbi.gsSP2Triangles(9, 4, 3, 0x0, 7, 10, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 10, 8, 0x0, 11, 4, 9, 0x0),
	...Gbi.gsSP2Triangles(12, 11, 9, 0x0, 13, 9, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 13, 12, 0x0, 4, 11, 5, 0x0),
	Gbi.gsSP1Triangle(14, 15, 11, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_on_dl_vertex_group5, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(1, 5, 6, 0x0, 1, 3, 5, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 6, 0x0, 2, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 6, 5, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 8, 0x0, 10, 12, 8, 0x0),
	Gbi.gsSP1Triangle(14, 8, 13, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_on_dl_vertex_group6, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 6, 5, 8, 0x0),
	...Gbi.gsSP2Triangles(5, 7, 3, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(6, 12, 7, 0x0, 13, 10, 9, 0x0),
	...Gbi.gsSP2Triangles(14, 13, 9, 0x0, 15, 10, 13, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_on_dl_vertex_group7, 13, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(1, 5, 3, 0x0, 2, 1, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 7, 6, 8, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 3, 0x0, 5, 7, 3, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 12, 6, 10, 0x0),
	Gbi.gsSP1Triangle(12, 8, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_face_cap_dl = [
	Gbi.gsSPVertex(mario_face_cap_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 2, 5, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 6, 0x0, 6, 7, 2, 0x0),
	...Gbi.gsSP2Triangles(5, 2, 7, 0x0, 6, 1, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 1, 0, 0x0, 6, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 6, 0x0, 9, 10, 6, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 9, 0x0, 9, 8, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 8, 12, 0x0, 0, 12, 8, 0x0),
	...Gbi.gsSP2Triangles(13, 10, 11, 0x0, 11, 12, 14, 0x0),
	...Gbi.gsSP2Triangles(15, 11, 14, 0x0, 13, 11, 15, 0x0),
	Gbi.gsSPVertex(mario_face_cap_dl_vertex_group2, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 0, 0x0, 0, 6, 1, 0x0),
	...Gbi.gsSP2Triangles(7, 1, 8, 0x0, 8, 1, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 11, 0x0, 9, 12, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 9, 13, 0x0, 13, 9, 14, 0x0),
	Gbi.gsSPVertex(mario_face_cap_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 5, 0x0, 0, 10, 1, 0x0),
	...Gbi.gsSP2Triangles(1, 10, 3, 0x0, 11, 10, 0, 0x0),
	...Gbi.gsSP2Triangles(12, 3, 10, 0x0, 12, 10, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 10, 11, 0x0, 5, 9, 7, 0x0),
	Gbi.gsSP1Triangle(7, 9, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_face_back_hair_cap_on_dl = [
	Gbi.gsSPVertex(mario_face_back_hair_cap_on_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 5, 8, 6, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 8, 0x0, 7, 3, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 6, 0x0, 6, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(0, 6, 8, 0x0, 3, 7, 10, 0x0),
	...Gbi.gsSP2Triangles(1, 11, 12, 0x0, 12, 13, 14, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 12, 0x0, 1, 12, 2, 0x0),
	...Gbi.gsSP2Triangles(14, 2, 12, 0x0, 15, 14, 13, 0x0),
	Gbi.gsSPVertex(mario_face_back_hair_cap_on_dl_vertex_group2, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 9, 0x0, 9, 10, 7, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 11, 0x0, 2, 11, 7, 0x0),
	...Gbi.gsSP2Triangles(9, 12, 13, 0x0, 10, 9, 13, 0x0),
	Gbi.gsSP1Triangle(8, 12, 9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_face_cap_on_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_face_part_cap_on_dl),
		Gbi.gsSPLight(mario_hat_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_hat_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_face_cap_dl),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_face_back_hair_cap_on_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_cap_on_eyes_front = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_m_logo_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_front),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_eyes_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_hair_sideburn),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_hair_sideburn_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_mustache_cap_on_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_face_cap_on_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


export const mario_cap_on_eyes_half_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_m_logo_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_half_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_eyes_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_hair_sideburn),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_hair_sideburn_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_mustache_cap_on_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_face_cap_on_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_cap_on_eyes_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_m_logo_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_eyes_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_hair_sideburn),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_hair_sideburn_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_mustache_cap_on_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_face_cap_on_dl),
		Gbi.gsSPEndDisplayList()
	]
}

export const mario_metal_cap_on_shared_dl = [
	Gbi.gsSPDisplayList(mario_m_logo_dl),
	Gbi.gsSPDisplayList(mario_eyes_cap_on_dl),
	Gbi.gsSPDisplayList(mario_hair_sideburn_cap_on_dl),
	Gbi.gsSPDisplayList(mario_mustache_cap_on_dl),
	Gbi.gsSPDisplayList(mario_face_part_cap_on_dl),
	Gbi.gsSPDisplayList(mario_face_cap_dl),
	Gbi.gsSPDisplayList(mario_face_back_hair_cap_on_dl),
	Gbi.gsSPEndDisplayList(),
]

const mario_eyes_cap_off_dl_vertex = [
	{ pos: [104, 87, -69], flag: 0, tc: [-160, 898], color: [48, 92, 183, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [256, 970], color: [64, 90, 195, 255] },
	{ pos: [144, 83, -66], flag: 0, tc: [-146, 460], color: [25, 91, 173, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [1362, 296], color: [5, 56, 113, 255] },
	{ pos: [175, 91, 39], flag: 0, tc: [842, 112], color: [1, 117, 47, 255] },
	{ pos: [144, 83, 67], flag: 0, tc: [1108, 428], color: [25, 91, 83, 255] },
	{ pos: [145, 101, 0], flag: 0, tc: [480, 446], color: [19, 125, 0, 255] },
	{ pos: [97, 103, 25], flag: 0, tc: [724, 958], color: [64, 90, 61, 255] },
	{ pos: [175, 91, -38], flag: 0, tc: [106, 130], color: [245, 115, 204, 255] },
	{ pos: [104, 87, 70], flag: 0, tc: [1138, 864], color: [48, 92, 73, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [-404, 342], color: [254, 54, 142, 255] },
	{ pos: [108, 105, 0], flag: 0, tc: [488, 854], color: [105, 70, 0, 255] },
]

const mario_hair_sideburn_cap_off_dl_vertex = [
	{ pos: [42, 0, 103], flag: 0, tc: [968, 1192], color: [195, 5, 110, 255] },
	{ pos: [85, -23, 111], flag: 0, tc: [1238, 518], color: [4, 88, 90, 255] },
	{ pos: [96, 49, 94], flag: 0, tc: [-74, 726], color: [16, 40, 119, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [196, 1366], color: [218, 33, 116, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [22, -68], color: [5, 56, 113, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [922, 122], color: [255, 19, 125, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [842, 1210], color: [195, 5, 146, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [118, 1334], color: [218, 33, 140, 255] },
	{ pos: [96, 49, -93], flag: 0, tc: [-70, 700], color: [17, 39, 137, 255] },
	{ pos: [85, -23, -110], flag: 0, tc: [1150, 582], color: [6, 89, 166, 255] },
	{ pos: [120, -12, -109], flag: 0, tc: [916, 184], color: [255, 19, 131, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [90, -58], color: [254, 54, 142, 255] },
]

const mario_mustache_cap_off_dl_vertex_group1 = [
	{ pos: [92, 88, -83], flag: 0, tc: [992, -10], color: [35, 89, 173, 255] },
	{ pos: [77, 108, -33], flag: 0, tc: [360, 296], color: [14, 22, 132, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [298, 20], color: [64, 90, 195, 255] },
	{ pos: [48, 94, -75], flag: 0, tc: [844, 640], color: [215, 96, 185, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [1272, 592], color: [218, 33, 140, 255] },
	{ pos: [52, 111, -30], flag: 0, tc: [294, 656], color: [168, 50, 181, 255] },
	{ pos: [92, 88, 84], flag: 0, tc: [948, -8], color: [35, 89, 83, 255] },
	{ pos: [77, 108, 34], flag: 0, tc: [330, 316], color: [14, 22, 124, 255] },
	{ pos: [48, 94, 76], flag: 0, tc: [848, 630], color: [215, 96, 71, 255] },
	{ pos: [97, 103, 25], flag: 0, tc: [248, 50], color: [64, 90, 61, 255] },
	{ pos: [52, 111, 31], flag: 0, tc: [292, 670], color: [168, 51, 75, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [1276, 566], color: [218, 33, 116, 255] },
	{ pos: [3, 54, 52], flag: 0, tc: [768, 1210], color: [149, 29, 60, 255] },
	{ pos: [27, 100, 30], flag: 0, tc: [336, 1006], color: [177, 96, 22, 255] },
	{ pos: [3, 54, -51], flag: 0, tc: [720, 1228], color: [149, 29, 196, 255] },
	{ pos: [41, 109, 0], flag: 0, tc: [-30, 876], color: [149, 68, 0, 255] },
]

const mario_mustache_cap_off_dl_vertex_group2 = [
	{ pos: [41, 109, 0], flag: 0, tc: [-38, 852], color: [149, 68, 0, 255] },
	{ pos: [52, 111, -30], flag: 0, tc: [294, 656], color: [168, 50, 181, 255] },
	{ pos: [27, 100, -29], flag: 0, tc: [310, 1002], color: [177, 96, 234, 255] },
	{ pos: [48, 94, -75], flag: 0, tc: [844, 640], color: [215, 96, 185, 255] },
	{ pos: [3, 54, -51], flag: 0, tc: [720, 1228], color: [149, 29, 196, 255] },
]

const mario_face_part_cap_off_dl_vertex_group1 = [
	{ pos: [97, 103, 25], flag: 0, tc: [0, 0], color: [64, 90, 61, 255] },
	{ pos: [108, 105, 0], flag: 0, tc: [0, 0], color: [105, 70, 0, 255] },
	{ pos: [117, 128, 0], flag: 0, tc: [0, 0], color: [122, 225, 6, 255] },
	{ pos: [92, 88, -83], flag: 0, tc: [0, 0], color: [35, 89, 173, 255] },
	{ pos: [97, 103, -24], flag: 0, tc: [0, 0], color: [64, 90, 195, 255] },
	{ pos: [104, 87, -69], flag: 0, tc: [0, 0], color: [48, 92, 183, 255] },
	{ pos: [96, 49, -93], flag: 0, tc: [0, 0], color: [17, 39, 137, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [0, 0], color: [218, 33, 140, 255] },
	{ pos: [102, 129, -40], flag: 0, tc: [0, 0], color: [80, 220, 166, 255] },
	{ pos: [77, 108, -33], flag: 0, tc: [0, 0], color: [14, 22, 132, 255] },
	{ pos: [144, 83, -66], flag: 0, tc: [0, 0], color: [25, 91, 173, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [0, 0], color: [218, 33, 116, 255] },
	{ pos: [96, 49, 94], flag: 0, tc: [0, 0], color: [16, 40, 119, 255] },
	{ pos: [92, 88, 84], flag: 0, tc: [0, 0], color: [35, 89, 83, 255] },
	{ pos: [104, 87, 70], flag: 0, tc: [0, 0], color: [48, 92, 73, 255] },
]

const mario_face_part_cap_off_dl_vertex_group2 = [
	{ pos: [-7, 62, 0], flag: 0, tc: [0, 0], color: [133, 29, 0, 255] },
	{ pos: [3, 54, 52], flag: 0, tc: [0, 0], color: [149, 29, 60, 255] },
	{ pos: [27, 100, 30], flag: 0, tc: [0, 0], color: [177, 96, 22, 255] },
	{ pos: [144, 83, 67], flag: 0, tc: [0, 0], color: [25, 91, 83, 255] },
	{ pos: [104, 87, 70], flag: 0, tc: [0, 0], color: [48, 92, 73, 255] },
	{ pos: [96, 49, 94], flag: 0, tc: [0, 0], color: [16, 40, 119, 255] },
	{ pos: [117, 128, 0], flag: 0, tc: [0, 0], color: [122, 225, 6, 255] },
	{ pos: [102, 129, 41], flag: 0, tc: [0, 0], color: [69, 214, 97, 255] },
	{ pos: [97, 103, 25], flag: 0, tc: [0, 0], color: [64, 90, 61, 255] },
	{ pos: [77, 108, 34], flag: 0, tc: [0, 0], color: [14, 22, 124, 255] },
	{ pos: [44, 44, 97], flag: 0, tc: [0, 0], color: [218, 33, 116, 255] },
	{ pos: [42, 0, 103], flag: 0, tc: [0, 0], color: [195, 5, 110, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [64, -25, 135], flag: 0, tc: [0, 0], color: [204, 229, 112, 255] },
	{ pos: [56, -45, 77], flag: 0, tc: [0, 0], color: [227, 202, 110, 255] },
	{ pos: [85, -23, 111], flag: 0, tc: [0, 0], color: [4, 88, 90, 255] },
]

const mario_face_part_cap_off_dl_vertex_group3 = [
	{ pos: [96, 49, 94], flag: 0, tc: [0, 0], color: [16, 40, 119, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [0, 0], color: [5, 56, 113, 255] },
	{ pos: [144, 83, 67], flag: 0, tc: [0, 0], color: [25, 91, 83, 255] },
	{ pos: [64, -25, 135], flag: 0, tc: [0, 0], color: [204, 229, 112, 255] },
	{ pos: [91, -54, 86], flag: 0, tc: [0, 0], color: [233, 169, 89, 255] },
	{ pos: [102, -33, 135], flag: 0, tc: [0, 0], color: [48, 24, 114, 255] },
	{ pos: [56, -45, 77], flag: 0, tc: [0, 0], color: [227, 202, 110, 255] },
	{ pos: [85, -23, 111], flag: 0, tc: [0, 0], color: [4, 88, 90, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [0, 0], color: [255, 19, 125, 255] },
	{ pos: [52, 111, -30], flag: 0, tc: [0, 0], color: [168, 50, 181, 255] },
	{ pos: [41, 109, 0], flag: 0, tc: [0, 0], color: [149, 68, 0, 255] },
	{ pos: [32, 132, 0], flag: 0, tc: [0, 0], color: [132, 232, 248, 255] },
	{ pos: [85, -23, -110], flag: 0, tc: [0, 0], color: [6, 89, 166, 255] },
	{ pos: [64, -25, -134], flag: 0, tc: [0, 0], color: [204, 229, 144, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [0, 0], color: [195, 5, 146, 255] },
]

const mario_face_part_cap_off_dl_vertex_group4 = [
	{ pos: [27, 100, 30], flag: 0, tc: [0, 0], color: [177, 96, 22, 255] },
	{ pos: [27, 100, -29], flag: 0, tc: [0, 0], color: [177, 96, 234, 255] },
	{ pos: [-7, 62, 0], flag: 0, tc: [0, 0], color: [133, 29, 0, 255] },
	{ pos: [3, 54, -51], flag: 0, tc: [0, 0], color: [149, 29, 196, 255] },
	{ pos: [41, 109, 0], flag: 0, tc: [0, 0], color: [149, 68, 0, 255] },
	{ pos: [144, 83, -66], flag: 0, tc: [0, 0], color: [25, 91, 173, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [0, 0], color: [254, 54, 142, 255] },
	{ pos: [96, 49, -93], flag: 0, tc: [0, 0], color: [17, 39, 137, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [0, 0], color: [195, 5, 146, 255] },
	{ pos: [44, 44, -96], flag: 0, tc: [0, 0], color: [218, 33, 140, 255] },
	{ pos: [64, -25, -134], flag: 0, tc: [0, 0], color: [204, 229, 144, 255] },
	{ pos: [102, -33, -134], flag: 0, tc: [0, 0], color: [50, 25, 143, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [232, 170, 167, 255] },
	{ pos: [85, -23, -110], flag: 0, tc: [0, 0], color: [6, 89, 166, 255] },
	{ pos: [120, -12, -109], flag: 0, tc: [0, 0], color: [255, 19, 131, 255] },
]

const mario_face_part_cap_off_dl_vertex_group5 = [
	{ pos: [33, 165, 0], flag: 0, tc: [0, 0], color: [143, 56, 9, 255] },
	{ pos: [60, 181, 0], flag: 0, tc: [0, 0], color: [234, 124, 0, 255] },
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
	{ pos: [102, -33, -134], flag: 0, tc: [0, 0], color: [50, 25, 143, 255] },
	{ pos: [120, -12, -109], flag: 0, tc: [0, 0], color: [255, 19, 131, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [232, 170, 167, 255] },
	{ pos: [56, -45, -76], flag: 0, tc: [0, 0], color: [227, 202, 146, 255] },
	{ pos: [64, -25, -134], flag: 0, tc: [0, 0], color: [204, 229, 144, 255] },
	{ pos: [42, 0, -102], flag: 0, tc: [0, 0], color: [195, 5, 146, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [3, 54, -51], flag: 0, tc: [0, 0], color: [149, 29, 196, 255] },
	{ pos: [-7, 62, 0], flag: 0, tc: [0, 0], color: [133, 29, 0, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [52, 164, 41], flag: 0, tc: [0, 0], color: [200, 61, 95, 255] },
	{ pos: [78, 163, 46], flag: 0, tc: [0, 0], color: [3, 85, 93, 255] },
	{ pos: [101, 179, 0], flag: 0, tc: [0, 0], color: [39, 120, 0, 255] },
]

const mario_face_part_cap_off_dl_vertex_group6 = [
	{ pos: [104, 162, 41], flag: 0, tc: [0, 0], color: [82, 39, 88, 255] },
	{ pos: [101, 179, 0], flag: 0, tc: [0, 0], color: [39, 120, 0, 255] },
	{ pos: [78, 163, 46], flag: 0, tc: [0, 0], color: [3, 85, 93, 255] },
	{ pos: [52, 164, 41], flag: 0, tc: [0, 0], color: [200, 61, 95, 255] },
	{ pos: [75, 130, 46], flag: 0, tc: [0, 0], color: [0, 236, 125, 255] },
	{ pos: [119, 161, 0], flag: 0, tc: [0, 0], color: [121, 35, 246, 255] },
	{ pos: [104, 162, -40], flag: 0, tc: [0, 0], color: [68, 49, 161, 255] },
	{ pos: [78, 163, -45], flag: 0, tc: [0, 0], color: [3, 84, 162, 255] },
	{ pos: [60, 181, 0], flag: 0, tc: [0, 0], color: [234, 124, 0, 255] },
	{ pos: [47, 131, 41], flag: 0, tc: [0, 0], color: [176, 228, 94, 255] },
	{ pos: [33, 165, 0], flag: 0, tc: [0, 0], color: [143, 56, 9, 255] },
	{ pos: [102, 129, 41], flag: 0, tc: [0, 0], color: [69, 214, 97, 255] },
	{ pos: [77, 108, 34], flag: 0, tc: [0, 0], color: [14, 22, 124, 255] },
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
	{ pos: [32, 132, 0], flag: 0, tc: [0, 0], color: [132, 232, 248, 255] },
	{ pos: [117, 128, 0], flag: 0, tc: [0, 0], color: [122, 225, 6, 255] },
]

const mario_face_part_cap_off_dl_vertex_group7 = [
	{ pos: [52, 111, 31], flag: 0, tc: [0, 0], color: [168, 51, 75, 255] },
	{ pos: [47, 131, 41], flag: 0, tc: [0, 0], color: [176, 228, 94, 255] },
	{ pos: [32, 132, 0], flag: 0, tc: [0, 0], color: [132, 232, 248, 255] },
	{ pos: [77, 108, 34], flag: 0, tc: [0, 0], color: [14, 22, 124, 255] },
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
	{ pos: [78, 163, -45], flag: 0, tc: [0, 0], color: [3, 84, 162, 255] },
	{ pos: [75, 130, -45], flag: 0, tc: [0, 0], color: [0, 236, 131, 255] },
	{ pos: [104, 162, -40], flag: 0, tc: [0, 0], color: [68, 49, 161, 255] },
	{ pos: [60, 181, 0], flag: 0, tc: [0, 0], color: [234, 124, 0, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [31, -84, 0], flag: 0, tc: [0, 0], color: [160, 174, 0, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [41, 109, 0], flag: 0, tc: [0, 0], color: [149, 68, 0, 255] },
	{ pos: [47, 131, -40], flag: 0, tc: [0, 0], color: [188, 222, 156, 255] },
	{ pos: [102, 129, -40], flag: 0, tc: [0, 0], color: [80, 220, 166, 255] },
	{ pos: [77, 108, -33], flag: 0, tc: [0, 0], color: [14, 22, 132, 255] },
]

const mario_face_part_cap_off_dl_vertex_group8 = [
	{ pos: [102, 129, -40], flag: 0, tc: [0, 0], color: [80, 220, 166, 255] },
	{ pos: [104, 162, -40], flag: 0, tc: [0, 0], color: [68, 49, 161, 255] },
	{ pos: [119, 161, 0], flag: 0, tc: [0, 0], color: [121, 35, 246, 255] },
	{ pos: [117, 128, 0], flag: 0, tc: [0, 0], color: [122, 225, 6, 255] },
	{ pos: [32, 132, 0], flag: 0, tc: [0, 0], color: [132, 232, 248, 255] },
	{ pos: [47, 131, -40], flag: 0, tc: [0, 0], color: [188, 222, 156, 255] },
	{ pos: [52, 111, -30], flag: 0, tc: [0, 0], color: [168, 50, 181, 255] },
	{ pos: [77, 108, -33], flag: 0, tc: [0, 0], color: [14, 22, 132, 255] },
	{ pos: [52, 164, -40], flag: 0, tc: [0, 0], color: [184, 52, 166, 255] },
]

const mario_face_hair_cap_off_dl_vertex_group1 = [
	{ pos: [153, 33, -94], flag: 0, tc: [0, 0], color: [254, 54, 142, 255] },
	{ pos: [200, 70, -97], flag: 0, tc: [0, 0], color: [7, 72, 153, 255] },
	{ pos: [182, -9, -115], flag: 0, tc: [0, 0], color: [47, 254, 139, 255] },
	{ pos: [153, 33, 95], flag: 0, tc: [0, 0], color: [5, 56, 113, 255] },
	{ pos: [200, 75, 84], flag: 0, tc: [0, 0], color: [16, 82, 95, 255] },
	{ pos: [151, 72, 70], flag: 0, tc: [0, 0], color: [228, 92, 81, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [0, 0], color: [255, 19, 125, 255] },
	{ pos: [181, -9, 116], flag: 0, tc: [0, 0], color: [45, 1, 118, 255] },
	{ pos: [175, 91, 39], flag: 0, tc: [0, 0], color: [1, 117, 47, 255] },
	{ pos: [209, 86, 60], flag: 0, tc: [0, 0], color: [56, 96, 60, 255] },
	{ pos: [227, 35, 75], flag: 0, tc: [0, 0], color: [109, 18, 61, 255] },
	{ pos: [175, 91, -38], flag: 0, tc: [0, 0], color: [245, 115, 204, 255] },
	{ pos: [151, 72, -68], flag: 0, tc: [0, 0], color: [214, 91, 179, 255] },
	{ pos: [221, 35, -73], flag: 0, tc: [0, 0], color: [113, 3, 200, 255] },
	{ pos: [211, 91, -71], flag: 0, tc: [0, 0], color: [49, 70, 163, 255] },
	{ pos: [227, -14, -58], flag: 0, tc: [0, 0], color: [114, 241, 204, 255] },
]

const mario_face_hair_cap_off_dl_vertex_group2 = [
	{ pos: [120, -12, -109], flag: 0, tc: [0, 0], color: [255, 19, 131, 255] },
	{ pos: [153, 33, -94], flag: 0, tc: [0, 0], color: [254, 54, 142, 255] },
	{ pos: [182, -9, -115], flag: 0, tc: [0, 0], color: [47, 254, 139, 255] },
	{ pos: [227, -14, 59], flag: 0, tc: [0, 0], color: [114, 236, 50, 255] },
	{ pos: [241, -34, 0], flag: 0, tc: [0, 0], color: [122, 224, 0, 255] },
	{ pos: [237, 64, 0], flag: 0, tc: [0, 0], color: [126, 249, 255, 255] },
	{ pos: [189, -102, 73], flag: 0, tc: [0, 0], color: [80, 187, 68, 255] },
	{ pos: [181, -9, 116], flag: 0, tc: [0, 0], color: [45, 1, 118, 255] },
	{ pos: [227, 35, 75], flag: 0, tc: [0, 0], color: [109, 18, 61, 255] },
	{ pos: [189, -102, -71], flag: 0, tc: [0, 0], color: [80, 185, 189, 255] },
	{ pos: [227, -14, -58], flag: 0, tc: [0, 0], color: [114, 241, 204, 255] },
	{ pos: [200, -117, 0], flag: 0, tc: [0, 0], color: [63, 147, 0, 255] },
	{ pos: [221, 35, -73], flag: 0, tc: [0, 0], color: [113, 3, 200, 255] },
	{ pos: [248, 104, -43], flag: 0, tc: [0, 0], color: [118, 44, 243, 255] },
	{ pos: [231, 81, 33], flag: 0, tc: [0, 0], color: [113, 39, 42, 255] },
]

const mario_face_hair_cap_off_dl_vertex_group3 = [
	{ pos: [221, 35, -73], flag: 0, tc: [0, 0], color: [113, 3, 200, 255] },
	{ pos: [211, 91, -71], flag: 0, tc: [0, 0], color: [49, 70, 163, 255] },
	{ pos: [232, 69, -34], flag: 0, tc: [0, 0], color: [114, 228, 209, 255] },
	{ pos: [237, 64, 0], flag: 0, tc: [0, 0], color: [126, 249, 255, 255] },
	{ pos: [175, 91, -38], flag: 0, tc: [0, 0], color: [245, 115, 204, 255] },
	{ pos: [201, 125, -13], flag: 0, tc: [0, 0], color: [228, 123, 251, 255] },
	{ pos: [160, 96, 0], flag: 0, tc: [0, 0], color: [183, 103, 254, 255] },
	{ pos: [189, -102, -71], flag: 0, tc: [0, 0], color: [80, 185, 189, 255] },
	{ pos: [116, -124, -67], flag: 0, tc: [0, 0], color: [252, 143, 200, 255] },
	{ pos: [145, -84, -104], flag: 0, tc: [0, 0], color: [239, 207, 141, 255] },
	{ pos: [182, -9, -115], flag: 0, tc: [0, 0], color: [47, 254, 139, 255] },
	{ pos: [200, -117, 0], flag: 0, tc: [0, 0], color: [63, 147, 0, 255] },
	{ pos: [189, -102, 73], flag: 0, tc: [0, 0], color: [80, 187, 68, 255] },
	{ pos: [116, -126, 68], flag: 0, tc: [0, 0], color: [251, 143, 56, 255] },
	{ pos: [119, -134, 0], flag: 0, tc: [0, 0], color: [232, 132, 255, 255] },
	{ pos: [145, -83, 105], flag: 0, tc: [0, 0], color: [239, 208, 115, 255] },
]

const mario_face_hair_cap_off_dl_vertex_group4 = [
	{ pos: [145, -83, 105], flag: 0, tc: [0, 0], color: [239, 208, 115, 255] },
	{ pos: [189, -102, 73], flag: 0, tc: [0, 0], color: [80, 187, 68, 255] },
	{ pos: [181, -9, 116], flag: 0, tc: [0, 0], color: [45, 1, 118, 255] },
	{ pos: [201, 125, -13], flag: 0, tc: [0, 0], color: [228, 123, 251, 255] },
	{ pos: [209, 86, 60], flag: 0, tc: [0, 0], color: [56, 96, 60, 255] },
	{ pos: [248, 104, -43], flag: 0, tc: [0, 0], color: [118, 44, 243, 255] },
	{ pos: [231, 81, 33], flag: 0, tc: [0, 0], color: [113, 39, 42, 255] },
	{ pos: [232, 69, -34], flag: 0, tc: [0, 0], color: [114, 228, 209, 255] },
	{ pos: [211, 91, -71], flag: 0, tc: [0, 0], color: [49, 70, 163, 255] },
	{ pos: [237, 64, 0], flag: 0, tc: [0, 0], color: [126, 249, 255, 255] },
	{ pos: [227, 35, 75], flag: 0, tc: [0, 0], color: [109, 18, 61, 255] },
	{ pos: [175, 91, 39], flag: 0, tc: [0, 0], color: [1, 117, 47, 255] },
	{ pos: [160, 96, 0], flag: 0, tc: [0, 0], color: [183, 103, 254, 255] },
	{ pos: [64, -103, 52], flag: 0, tc: [0, 0], color: [243, 139, 46, 255] },
	{ pos: [64, -103, -51], flag: 0, tc: [0, 0], color: [243, 139, 210, 255] },
	{ pos: [119, -134, 0], flag: 0, tc: [0, 0], color: [232, 132, 255, 255] },
]

const mario_face_hair_cap_off_dl_vertex_group5 = [
	{ pos: [145, -83, 105], flag: 0, tc: [0, 0], color: [239, 208, 115, 255] },
	{ pos: [181, -9, 116], flag: 0, tc: [0, 0], color: [45, 1, 118, 255] },
	{ pos: [120, -11, 111], flag: 0, tc: [0, 0], color: [255, 19, 125, 255] },
	{ pos: [64, -103, -51], flag: 0, tc: [0, 0], color: [243, 139, 210, 255] },
	{ pos: [116, -124, -67], flag: 0, tc: [0, 0], color: [252, 143, 200, 255] },
	{ pos: [119, -134, 0], flag: 0, tc: [0, 0], color: [232, 132, 255, 255] },
	{ pos: [145, -84, -104], flag: 0, tc: [0, 0], color: [239, 207, 141, 255] },
	{ pos: [182, -9, -115], flag: 0, tc: [0, 0], color: [47, 254, 139, 255] },
	{ pos: [120, -12, -109], flag: 0, tc: [0, 0], color: [255, 19, 131, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [232, 170, 167, 255] },
	{ pos: [64, -103, 52], flag: 0, tc: [0, 0], color: [243, 139, 46, 255] },
	{ pos: [116, -126, 68], flag: 0, tc: [0, 0], color: [251, 143, 56, 255] },
	{ pos: [91, -54, 86], flag: 0, tc: [0, 0], color: [233, 169, 89, 255] },
	{ pos: [31, -84, 0], flag: 0, tc: [0, 0], color: [160, 174, 0, 255] },
	{ pos: [36, -116, 36], flag: 0, tc: [0, 0], color: [251, 142, 201, 255] },
	{ pos: [9, -88, 59], flag: 0, tc: [0, 0], color: [135, 223, 11, 255] },
]

const mario_face_hair_cap_off_dl_vertex_group6 = [
	{ pos: [64, -103, 52], flag: 0, tc: [0, 0], color: [243, 139, 46, 255] },
	{ pos: [91, -54, 86], flag: 0, tc: [0, 0], color: [233, 169, 89, 255] },
	{ pos: [56, -45, 77], flag: 0, tc: [0, 0], color: [227, 202, 110, 255] },
	{ pos: [31, -84, 0], flag: 0, tc: [0, 0], color: [160, 174, 0, 255] },
	{ pos: [36, -116, 36], flag: 0, tc: [0, 0], color: [251, 142, 201, 255] },
	{ pos: [58, -114, 60], flag: 0, tc: [0, 0], color: [87, 180, 50, 255] },
	{ pos: [36, -116, -35], flag: 0, tc: [0, 0], color: [251, 142, 55, 255] },
	{ pos: [64, -103, -51], flag: 0, tc: [0, 0], color: [243, 139, 210, 255] },
	{ pos: [56, -45, -76], flag: 0, tc: [0, 0], color: [227, 202, 146, 255] },
	{ pos: [91, -54, -85], flag: 0, tc: [0, 0], color: [232, 170, 167, 255] },
	{ pos: [58, -114, -59], flag: 0, tc: [0, 0], color: [87, 180, 206, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [9, -88, -58], flag: 0, tc: [0, 0], color: [135, 223, 245, 255] },
	{ pos: [9, -88, 59], flag: 0, tc: [0, 0], color: [135, 223, 11, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
	{ pos: [35, -120, -67], flag: 0, tc: [0, 0], color: [218, 148, 203, 255] },
]

const mario_face_hair_cap_off_dl_vertex_group7 = [
	{ pos: [36, -116, 36], flag: 0, tc: [0, 0], color: [251, 142, 201, 255] },
	{ pos: [35, -120, 68], flag: 0, tc: [0, 0], color: [218, 148, 53, 255] },
	{ pos: [9, -88, 59], flag: 0, tc: [0, 0], color: [135, 223, 11, 255] },
	{ pos: [58, -114, 60], flag: 0, tc: [0, 0], color: [87, 180, 50, 255] },
	{ pos: [35, -120, -67], flag: 0, tc: [0, 0], color: [218, 148, 203, 255] },
	{ pos: [31, -85, -86], flag: 0, tc: [0, 0], color: [219, 253, 135, 255] },
	{ pos: [58, -114, -59], flag: 0, tc: [0, 0], color: [87, 180, 206, 255] },
	{ pos: [9, -88, -58], flag: 0, tc: [0, 0], color: [135, 223, 245, 255] },
	{ pos: [56, -45, -76], flag: 0, tc: [0, 0], color: [227, 202, 146, 255] },
	{ pos: [17, -52, -46], flag: 0, tc: [0, 0], color: [137, 248, 215, 255] },
	{ pos: [31, -85, 87], flag: 0, tc: [0, 0], color: [219, 253, 121, 255] },
	{ pos: [56, -45, 77], flag: 0, tc: [0, 0], color: [227, 202, 110, 255] },
	{ pos: [17, -52, 47], flag: 0, tc: [0, 0], color: [137, 248, 41, 255] },
]

const mario_face_part_cap_off_dl_vertex_group9 = [
	{ pos: [44, 44, 97], flag: 0, tc: [0, 0], color: [218, 33, 116, 255] },
	{ pos: [48, 94, 76], flag: 0, tc: [0, 0], color: [215, 96, 71, 255] },
	{ pos: [3, 54, 52], flag: 0, tc: [0, 0], color: [149, 29, 60, 255] },
]

export const mario_eyes_cap_off_dl = [
	Gbi.gsSPVertex(mario_eyes_cap_off_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 6, 7, 0x0, 8, 6, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 7, 0x0, 7, 9, 5, 0x0),
	...Gbi.gsSP2Triangles(2, 8, 10, 0x0, 1, 6, 8, 0x0),
	...Gbi.gsSP2Triangles(1, 8, 2, 0x0, 6, 11, 7, 0x0),
	Gbi.gsSP1Triangle(1, 11, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_mustache_cap_off_dl = [
	Gbi.gsSPVertex(mario_mustache_cap_off_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 3, 0x0, 3, 5, 1, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 7, 6, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 8, 0x0, 8, 11, 6, 0x0),
	...Gbi.gsSP2Triangles(12, 8, 13, 0x0, 13, 8, 10, 0x0),
	...Gbi.gsSP2Triangles(14, 3, 4, 0x0, 13, 10, 15, 0x0),
	Gbi.gsSPVertex(mario_mustache_cap_off_dl_vertex_group2, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	Gbi.gsSP1Triangle(2, 3, 4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_hair_sideburn_cap_off_dl = [
	Gbi.gsSPVertex(mario_hair_sideburn_cap_off_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 2, 5, 0x0, 1, 5, 2, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 8, 9, 6, 0x0),
	...Gbi.gsSP2Triangles(9, 8, 10, 0x0, 10, 8, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_face_part_cap_off_dl = [
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 5, 0x0, 3, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(4, 8, 2, 0x0, 8, 4, 9, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 4, 0x0, 6, 5, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 14, 13, 12, 0x0),
	Gbi.gsSP1Triangle(13, 14, 0, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 1, 11, 0x0, 1, 12, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 1, 0, 0x0, 13, 11, 14, 0x0),
	...Gbi.gsSP2Triangles(12, 14, 11, 0x0, 11, 13, 15, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 3, 5, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 5, 0x0, 4, 8, 5, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group4, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 1, 0, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 3, 9, 0x0, 10, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(13, 11, 10, 0x0, 11, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group5, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 5, 0x0, 8, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 6, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 11, 10, 0x0, 9, 12, 11, 0x0),
	...Gbi.gsSP2Triangles(0, 13, 1, 0x0, 13, 14, 1, 0x0),
	Gbi.gsSP1Triangle(1, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group6, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 4, 0, 0x0, 1, 0, 5, 0x0),
	...Gbi.gsSP2Triangles(1, 6, 7, 0x0, 1, 5, 6, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 1, 0x0, 3, 9, 4, 0x0),
	...Gbi.gsSP2Triangles(9, 3, 10, 0x0, 4, 11, 0, 0x0),
	...Gbi.gsSP2Triangles(11, 4, 12, 0x0, 4, 9, 12, 0x0),
	...Gbi.gsSP2Triangles(10, 13, 14, 0x0, 0, 11, 15, 0x0),
	...Gbi.gsSP2Triangles(5, 0, 15, 0x0, 14, 9, 10, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group7, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 0, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 6, 5, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 5, 4, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(2, 12, 0, 0x0, 13, 4, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 14, 15, 0x0, 6, 7, 14, 0x0),
	Gbi.gsSP1Triangle(13, 6, 15, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group8, 9, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 6, 5, 0x0),
	Gbi.gsSP1Triangle(8, 5, 4, 0x0),
	Gbi.gsSPVertex(mario_face_part_cap_off_dl_vertex_group9, 3, 0),
	Gbi.gsSP1Triangle(0, 1, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_face_hair_cap_off_dl = [
	Gbi.gsSPVertex(mario_face_hair_cap_off_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 7, 0x0, 3, 7, 4, 0x0),
	...Gbi.gsSP2Triangles(8, 4, 9, 0x0, 7, 10, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 10, 9, 0x0, 8, 5, 4, 0x0),
	...Gbi.gsSP2Triangles(11, 1, 12, 0x0, 1, 0, 12, 0x0),
	...Gbi.gsSP2Triangles(1, 13, 2, 0x0, 1, 11, 14, 0x0),
	...Gbi.gsSP2Triangles(13, 1, 14, 0x0, 15, 2, 13, 0x0),
	Gbi.gsSPVertex(mario_face_hair_cap_off_dl_vertex_group2, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 6, 0x0, 3, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 3, 0x0, 5, 8, 3, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 4, 0x0, 11, 4, 6, 0x0),
	...Gbi.gsSP2Triangles(11, 9, 4, 0x0, 10, 5, 4, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 5, 0x0, 5, 13, 14, 0x0),
	...Gbi.gsSP2Triangles(8, 5, 14, 0x0, 9, 2, 10, 0x0),
	Gbi.gsSPVertex(mario_face_hair_cap_off_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(1, 4, 5, 0x0, 4, 6, 5, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 9, 0x0, 10, 7, 9, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 11, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(14, 11, 13, 0x0, 14, 8, 11, 0x0),
	Gbi.gsSP1Triangle(15, 13, 12, 0x0),
	Gbi.gsSPVertex(mario_face_hair_cap_off_dl_vertex_group4, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 6, 5, 0x0, 7, 8, 5, 0x0),
	...Gbi.gsSP2Triangles(8, 3, 5, 0x0, 9, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(10, 6, 4, 0x0, 4, 3, 11, 0x0),
	...Gbi.gsSP2Triangles(3, 12, 11, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_face_hair_cap_off_dl_vertex_group5, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 4, 3, 0x0, 7, 6, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 6, 3, 0x0, 6, 9, 8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 0, 0x0, 12, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(10, 0, 12, 0x0, 10, 5, 11, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 15, 0x0, 13, 3, 10, 0x0),
	Gbi.gsSPVertex(mario_face_hair_cap_off_dl_vertex_group6, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 0, 2, 0x0, 5, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 7, 0x0, 8, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(6, 10, 7, 0x0, 8, 7, 10, 0x0),
	...Gbi.gsSP2Triangles(3, 11, 12, 0x0, 13, 14, 3, 0x0),
	...Gbi.gsSP2Triangles(12, 6, 3, 0x0, 6, 15, 10, 0x0),
	Gbi.gsSP1Triangle(12, 15, 6, 0x0),
	Gbi.gsSPVertex(mario_face_hair_cap_off_dl_vertex_group7, 13, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 4, 7, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 8, 0x0, 9, 8, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 7, 9, 0x0, 10, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 3, 0x0, 12, 2, 10, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 10, 0x0, 10, 1, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_face_cap_off_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_face_part_cap_off_dl),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_face_hair_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_cap_off_eyes_front = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_front),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_eyes_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_mustache_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_hair_sideburn),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_hair_sideburn_cap_off_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_face_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_cap_off_eyes_half_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_half_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_eyes_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_mustache_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_hair_sideburn),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_hair_sideburn_cap_off_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_face_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_cap_off_eyes_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_eyes_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_mustache_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_hair_sideburn),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_hair_sideburn_cap_off_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_face_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_metal_cap_off_shared_dl = [
	Gbi.gsSPDisplayList(mario_eyes_cap_off_dl),
	Gbi.gsSPDisplayList(mario_mustache_cap_off_dl),
	Gbi.gsSPDisplayList(mario_hair_sideburn_cap_off_dl),
	Gbi.gsSPDisplayList(mario_face_part_cap_off_dl),
	Gbi.gsSPDisplayList(mario_face_hair_cap_off_dl),
	Gbi.gsSPEndDisplayList(),
]

const mario_medium_poly_butt_dl_vertex_group1 = [
	{ pos: [0, 78, 37], flag: 0, tc: [0, 0], color: [199, 111, 20, 0] },
	{ pos: [44, 80, 46], flag: 0, tc: [0, 0], color: [54, 104, 46, 0] },
	{ pos: [43, 80, -45], flag: 0, tc: [0, 0], color: [44, 112, 219, 0] },
	{ pos: [-6, -84, 50], flag: 0, tc: [0, 0], color: [213, 144, 38, 0] },
	{ pos: [41, -86, -45], flag: 0, tc: [0, 0], color: [53, 144, 231, 0] },
	{ pos: [41, -86, 45], flag: 0, tc: [0, 0], color: [68, 155, 31, 0] },
	{ pos: [-33, -45, -31], flag: 0, tc: [0, 0], color: [135, 233, 227, 0] },
	{ pos: [-33, -45, 31], flag: 0, tc: [0, 0], color: [134, 229, 21, 0] },
	{ pos: [-32, 43, -22], flag: 0, tc: [0, 0], color: [139, 45, 240, 0] },
	{ pos: [-2, 41, 95], flag: 0, tc: [0, 0], color: [186, 59, 87, 0] },
	{ pos: [-5, -45, 97], flag: 0, tc: [0, 0], color: [199, 222, 107, 0] },
	{ pos: [44, 36, 95], flag: 0, tc: [0, 0], color: [61, 34, 105, 0] },
	{ pos: [-5, -45, -97], flag: 0, tc: [0, 0], color: [199, 221, 149, 0] },
	{ pos: [-2, 41, -95], flag: 0, tc: [0, 0], color: [186, 59, 170, 0] },
	{ pos: [44, 35, -96], flag: 0, tc: [0, 0], color: [60, 34, 150, 0] },
	{ pos: [-6, -84, -50], flag: 0, tc: [0, 0], color: [193, 154, 217, 0] },
]

const mario_medium_poly_butt_dl_vertex_group2 = [
	{ pos: [-2, 41, 95], flag: 0, tc: [0, 0], color: [186, 59, 87, 0] },
	{ pos: [0, 78, 37], flag: 0, tc: [0, 0], color: [199, 111, 20, 0] },
	{ pos: [-32, 43, 22], flag: 0, tc: [0, 0], color: [140, 44, 24, 0] },
	{ pos: [0, 78, -37], flag: 0, tc: [0, 0], color: [197, 108, 226, 0] },
	{ pos: [-2, 41, -95], flag: 0, tc: [0, 0], color: [186, 59, 170, 0] },
	{ pos: [-32, 43, -22], flag: 0, tc: [0, 0], color: [139, 45, 240, 0] },
	{ pos: [-33, -45, 31], flag: 0, tc: [0, 0], color: [134, 229, 21, 0] },
	{ pos: [-33, -45, -31], flag: 0, tc: [0, 0], color: [135, 233, 227, 0] },
	{ pos: [-6, -84, -50], flag: 0, tc: [0, 0], color: [193, 154, 217, 0] },
	{ pos: [43, -48, -97], flag: 0, tc: [0, 0], color: [59, 193, 164, 0] },
	{ pos: [41, -86, -45], flag: 0, tc: [0, 0], color: [53, 144, 231, 0] },
	{ pos: [-6, -84, 50], flag: 0, tc: [0, 0], color: [213, 144, 38, 0] },
	{ pos: [41, -86, 45], flag: 0, tc: [0, 0], color: [68, 155, 31, 0] },
	{ pos: [43, -48, 97], flag: 0, tc: [0, 0], color: [59, 194, 92, 0] },
	{ pos: [44, 36, 95], flag: 0, tc: [0, 0], color: [61, 34, 105, 0] },
	{ pos: [44, 80, 46], flag: 0, tc: [0, 0], color: [54, 104, 46, 0] },
]

const mario_medium_poly_butt_dl_vertex_group3 = [
	{ pos: [-2, 41, -95], flag: 0, tc: [0, 0], color: [186, 59, 170, 0] },
	{ pos: [43, 80, -45], flag: 0, tc: [0, 0], color: [44, 112, 219, 0] },
	{ pos: [44, 35, -96], flag: 0, tc: [0, 0], color: [60, 34, 150, 0] },
	{ pos: [0, 78, -37], flag: 0, tc: [0, 0], color: [197, 108, 226, 0] },
	{ pos: [44, 80, 46], flag: 0, tc: [0, 0], color: [54, 104, 46, 0] },
	{ pos: [0, 78, 37], flag: 0, tc: [0, 0], color: [199, 111, 20, 0] },
	{ pos: [-2, 41, 95], flag: 0, tc: [0, 0], color: [186, 59, 87, 0] },
	{ pos: [-32, 43, -22], flag: 0, tc: [0, 0], color: [139, 45, 240, 0] },
	{ pos: [43, -48, 97], flag: 0, tc: [0, 0], color: [59, 194, 92, 0] },
	{ pos: [-5, -45, 97], flag: 0, tc: [0, 0], color: [199, 222, 107, 0] },
	{ pos: [-6, -84, 50], flag: 0, tc: [0, 0], color: [213, 144, 38, 0] },
	{ pos: [-6, -84, -50], flag: 0, tc: [0, 0], color: [193, 154, 217, 0] },
	{ pos: [-5, -45, -97], flag: 0, tc: [0, 0], color: [199, 221, 149, 0] },
	{ pos: [43, -48, -97], flag: 0, tc: [0, 0], color: [59, 193, 164, 0] },
	{ pos: [-33, -45, 31], flag: 0, tc: [0, 0], color: [134, 229, 21, 0] },
	{ pos: [-33, -45, -31], flag: 0, tc: [0, 0], color: [135, 233, 227, 0] },
]

const mario_medium_poly_butt_dl_vertex_group4 = [
	{ pos: [-5, -45, 97], flag: 0, tc: [0, 0], color: [199, 222, 107, 0] },
	{ pos: [43, -48, 97], flag: 0, tc: [0, 0], color: [59, 194, 92, 0] },
	{ pos: [44, 36, 95], flag: 0, tc: [0, 0], color: [61, 34, 105, 0] },
	{ pos: [-33, -45, 31], flag: 0, tc: [0, 0], color: [134, 229, 21, 0] },
	{ pos: [-32, 43, 22], flag: 0, tc: [0, 0], color: [140, 44, 24, 0] },
	{ pos: [-32, 43, -22], flag: 0, tc: [0, 0], color: [139, 45, 240, 0] },
	{ pos: [-6, -84, 50], flag: 0, tc: [0, 0], color: [213, 144, 38, 0] },
	{ pos: [-6, -84, -50], flag: 0, tc: [0, 0], color: [193, 154, 217, 0] },
	{ pos: [41, -86, -45], flag: 0, tc: [0, 0], color: [53, 144, 231, 0] },
	{ pos: [43, 80, -45], flag: 0, tc: [0, 0], color: [44, 112, 219, 0] },
	{ pos: [0, 78, -37], flag: 0, tc: [0, 0], color: [197, 108, 226, 0] },
	{ pos: [0, 78, 37], flag: 0, tc: [0, 0], color: [199, 111, 20, 0] },
	{ pos: [85, -5, 0], flag: 0, tc: [0, 0], color: [127, 254, 0, 0] },
	{ pos: [44, 35, -96], flag: 0, tc: [0, 0], color: [60, 34, 150, 0] },
	{ pos: [43, -48, -97], flag: 0, tc: [0, 0], color: [59, 193, 164, 0] },
	{ pos: [41, -86, 45], flag: 0, tc: [0, 0], color: [68, 155, 31, 0] },
]

const mario_medium_poly_butt_dl_vertex_group5 = [
	{ pos: [44, 36, 95], flag: 0, tc: [0, 0], color: [61, 34, 105, 0] },
	{ pos: [85, -5, 0], flag: 0, tc: [0, 0], color: [127, 254, 0, 0] },
	{ pos: [44, 80, 46], flag: 0, tc: [0, 0], color: [54, 104, 46, 0] },
	{ pos: [43, 80, -45], flag: 0, tc: [0, 0], color: [44, 112, 219, 0] },
]

export const mario_medium_poly_butt_dl = [
	Gbi.gsSPVertex(mario_medium_poly_butt_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 6, 0x0),
	Gbi.gsSP1Triangle(3, 10, 7, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_butt_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 6, 0x0, 7, 5, 4, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 6, 0x0, 9, 10, 8, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 2, 1, 5, 0x0),
	Gbi.gsSP1Triangle(14, 15, 0, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_butt_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 3, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 14, 0x0, 0, 12, 15, 0x0),
	...Gbi.gsSP2Triangles(14, 9, 6, 0x0, 2, 13, 12, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_butt_dl_vertex_group4, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(9, 12, 13, 0x0, 13, 12, 14, 0x0),
	...Gbi.gsSP2Triangles(14, 12, 8, 0x0, 8, 12, 15, 0x0),
	...Gbi.gsSP2Triangles(15, 12, 1, 0x0, 1, 12, 2, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_butt_dl_vertex_group5, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_butt = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_butt_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


const mario_medium_poly_left_arm_shared_dl_vertex = [
	{ pos: [-6, -32, -22], flag: 0, tc: [0, 0], color: [8, 132, 24, 0] },
	{ pos: [60, -27, -18], flag: 0, tc: [0, 0], color: [61, 197, 163, 0] },
	{ pos: [60, -18, 26], flag: 0, tc: [0, 0], color: [92, 190, 54, 0] },
	{ pos: [-6, -32, -22], flag: 0, tc: [0, 0], color: [7, 245, 130, 0] },
	{ pos: [-7, 21, -27], flag: 0, tc: [0, 0], color: [7, 245, 130, 0] },
	{ pos: [59, 16, -22], flag: 0, tc: [0, 0], color: [91, 79, 218, 0] },
	{ pos: [-7, 20, 18], flag: 0, tc: [0, 0], color: [12, 115, 50, 0] },
	{ pos: [59, 14, 14], flag: 0, tc: [0, 0], color: [56, 75, 85, 0] },
	{ pos: [-6, -21, 33], flag: 0, tc: [0, 0], color: [11, 42, 119, 0] },
	{ pos: [-7, 21, -27], flag: 0, tc: [0, 0], color: [10, 126, 4, 0] },
	{ pos: [-6, -21, 33], flag: 0, tc: [0, 0], color: [8, 132, 24, 0] },
	{ pos: [-7, 21, -27], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-6, -32, -22], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-6, -21, 33], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-7, 20, 18], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
]

export const mario_medium_poly_left_arm_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_left_arm_shared_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 1, 0x0, 6, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(8, 2, 7, 0x0, 6, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(9, 6, 5, 0x0, 10, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(5, 2, 1, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 11, 0x0, 5, 7, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_left_arm = (customData) => {
	return [
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_left_arm_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_medium_poly_left_forearm_shared_dl_vertex = [
	{ pos: [-9, -29, -18], flag: 0, tc: [0, 0], color: [5, 132, 25, 0] },
	{ pos: [53, -26, -17], flag: 0, tc: [0, 0], color: [89, 208, 181, 0] },
	{ pos: [53, -17, 24], flag: 0, tc: [0, 0], color: [61, 171, 71, 0] },
	{ pos: [-9, -29, -18], flag: 0, tc: [0, 0], color: [4, 243, 130, 0] },
	{ pos: [-9, 16, -24], flag: 0, tc: [0, 0], color: [4, 244, 130, 0] },
	{ pos: [53, 13, -21], flag: 0, tc: [0, 0], color: [59, 100, 206, 0] },
	{ pos: [-9, 15, 15], flag: 0, tc: [0, 0], color: [7, 117, 48, 0] },
	{ pos: [53, 13, 12], flag: 0, tc: [0, 0], color: [82, 65, 71, 0] },
	{ pos: [-9, -19, 28], flag: 0, tc: [0, 0], color: [7, 44, 118, 0] },
	{ pos: [-9, 16, -24], flag: 0, tc: [0, 0], color: [6, 126, 2, 0] },
	{ pos: [-9, -19, 28], flag: 0, tc: [0, 0], color: [5, 132, 26, 0] },
	{ pos: [-9, 16, -24], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-9, -29, -18], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-9, -19, 28], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-9, 15, 15], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
]

export const mario_medium_poly_left_forearm_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_left_forearm_shared_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 1, 0x0, 6, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(8, 2, 7, 0x0, 6, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(9, 6, 5, 0x0, 10, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(1, 7, 2, 0x0, 1, 5, 7, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 13, 14, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_medium_poly_left_hand_closed_shared_dl_vertex_group1 = [
	{ pos: [31, 10, 40], flag: 0, tc: [0, 0], color: [216, 237, 118, 0] },
	{ pos: [12, 1, 26], flag: 0, tc: [0, 0], color: [241, 247, 125, 0] },
	{ pos: [27, -32, -3], flag: 0, tc: [0, 0], color: [6, 130, 11, 0] },
	{ pos: [11, 2, -28], flag: 0, tc: [0, 0], color: [202, 246, 142, 0] },
	{ pos: [44, -22, -46], flag: 0, tc: [0, 0], color: [222, 185, 157, 0] },
	{ pos: [18, 37, -31], flag: 0, tc: [0, 0], color: [199, 40, 151, 0] },
	{ pos: [-2, 36, -2], flag: 0, tc: [0, 0], color: [176, 97, 3, 0] },
	{ pos: [-5, -5, 34], flag: 0, tc: [0, 0], color: [47, 19, 116, 0] },
	{ pos: [-6, -5, -32], flag: 0, tc: [0, 0], color: [28, 14, 134, 0] },
	{ pos: [81, 32, 40], flag: 0, tc: [0, 0], color: [72, 31, 99, 0] },
	{ pos: [55, 84, 9], flag: 0, tc: [0, 0], color: [20, 116, 44, 0] },
	{ pos: [102, -23, 6], flag: 0, tc: [0, 0], color: [100, 196, 49, 0] },
	{ pos: [95, 43, -12], flag: 0, tc: [0, 0], color: [110, 54, 224, 0] },
	{ pos: [54, 58, -32], flag: 0, tc: [0, 0], color: [2, 78, 157, 0] },
	{ pos: [84, -10, -41], flag: 0, tc: [0, 0], color: [57, 226, 147, 0] },
	{ pos: [53, -42, 9], flag: 0, tc: [0, 0], color: [4, 131, 15, 0] },
]

const mario_medium_poly_left_hand_closed_shared_dl_vertex_group2 = [
	{ pos: [31, 10, 40], flag: 0, tc: [0, 0], color: [216, 237, 118, 0] },
	{ pos: [55, 84, 9], flag: 0, tc: [0, 0], color: [20, 116, 44, 0] },
	{ pos: [7, 62, 10], flag: 0, tc: [0, 0], color: [167, 90, 0, 0] },
	{ pos: [27, -32, -3], flag: 0, tc: [0, 0], color: [6, 130, 11, 0] },
	{ pos: [14, -51, -2], flag: 0, tc: [0, 0], color: [55, 213, 151, 0] },
	{ pos: [-6, -5, -32], flag: 0, tc: [0, 0], color: [28, 14, 134, 0] },
	{ pos: [-26, 40, -1], flag: 0, tc: [0, 0], color: [5, 72, 152, 0] },
	{ pos: [-2, 36, -2], flag: 0, tc: [0, 0], color: [176, 97, 3, 0] },
	{ pos: [-26, 40, -1], flag: 0, tc: [0, 0], color: [17, 80, 96, 0] },
	{ pos: [-5, -5, 34], flag: 0, tc: [0, 0], color: [47, 19, 116, 0] },
	{ pos: [14, -51, -2], flag: 0, tc: [0, 0], color: [73, 213, 94, 0] },
	{ pos: [18, 37, -31], flag: 0, tc: [0, 0], color: [199, 40, 151, 0] },
	{ pos: [44, -22, -46], flag: 0, tc: [0, 0], color: [222, 185, 157, 0] },
	{ pos: [53, -42, 9], flag: 0, tc: [0, 0], color: [4, 131, 15, 0] },
	{ pos: [54, 58, -32], flag: 0, tc: [0, 0], color: [2, 78, 157, 0] },
]

const mario_medium_poly_left_hand_closed_shared_dl_vertex_group3 = [
	{ pos: [54, 58, -32], flag: 0, tc: [0, 0], color: [2, 78, 157, 0] },
	{ pos: [95, 43, -12], flag: 0, tc: [0, 0], color: [110, 54, 224, 0] },
	{ pos: [84, -10, -41], flag: 0, tc: [0, 0], color: [57, 226, 147, 0] },
	{ pos: [7, 62, 10], flag: 0, tc: [0, 0], color: [167, 90, 0, 0] },
	{ pos: [55, 84, 9], flag: 0, tc: [0, 0], color: [20, 116, 44, 0] },
	{ pos: [53, -42, 9], flag: 0, tc: [0, 0], color: [4, 131, 15, 0] },
	{ pos: [102, -23, 6], flag: 0, tc: [0, 0], color: [100, 196, 49, 0] },
	{ pos: [18, 37, -31], flag: 0, tc: [0, 0], color: [199, 40, 151, 0] },
	{ pos: [44, -22, -46], flag: 0, tc: [0, 0], color: [222, 185, 157, 0] },
	{ pos: [11, 2, -28], flag: 0, tc: [0, 0], color: [202, 246, 142, 0] },
	{ pos: [-5, -5, 34], flag: 0, tc: [0, 0], color: [140, 206, 1, 0] },
	{ pos: [-6, -5, -32], flag: 0, tc: [0, 0], color: [140, 206, 1, 0] },
	{ pos: [14, -51, -2], flag: 0, tc: [0, 0], color: [140, 206, 1, 0] },
	{ pos: [-26, 40, -1], flag: 0, tc: [0, 0], color: [140, 206, 1, 0] },
]

export const mario_medium_poly_left_hand_closed_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_left_hand_closed_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 6, 0x0, 6, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 7, 0x0, 7, 1, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 8, 0x0, 3, 2, 8, 0x0),
	...Gbi.gsSP2Triangles(0, 9, 10, 0x0, 11, 9, 0, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 13, 0x0, 14, 12, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 9, 0x0, 9, 12, 10, 0x0),
	Gbi.gsSP1Triangle(15, 11, 0, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_left_hand_closed_shared_dl_vertex_group2, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 3, 0x0, 7, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(7, 2, 11, 0x0, 3, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(3, 13, 0, 0x0, 11, 2, 14, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_left_hand_closed_shared_dl_vertex_group3, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(5, 2, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 2, 8, 0x0, 7, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(5, 8, 2, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSP1Triangle(10, 13, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]


export const mario_medium_poly_left_hand_closed = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_left_hand_closed_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_medium_poly_right_arm_shared_dl_vertex = [
	{ pos: [60, -28, 22], flag: 0, tc: [0, 0], color: [59, 199, 96, 0] },
	{ pos: [60, -19, -19], flag: 0, tc: [0, 0], color: [90, 188, 199, 0] },
	{ pos: [60, 14, 24], flag: 0, tc: [0, 0], color: [91, 79, 38, 0] },
	{ pos: [-7, -31, 24], flag: 0, tc: [0, 0], color: [4, 132, 230, 0] },
	{ pos: [-7, -20, -27], flag: 0, tc: [0, 0], color: [4, 132, 230, 0] },
	{ pos: [-8, 21, -15], flag: 0, tc: [0, 0], color: [17, 115, 206, 0] },
	{ pos: [-8, 22, 27], flag: 0, tc: [0, 0], color: [14, 126, 253, 0] },
	{ pos: [60, 13, -9], flag: 0, tc: [0, 0], color: [60, 70, 170, 0] },
	{ pos: [-7, -20, -27], flag: 0, tc: [0, 0], color: [14, 35, 136, 0] },
	{ pos: [-8, 22, 27], flag: 0, tc: [0, 0], color: [3, 250, 126, 0] },
	{ pos: [-7, -31, 24], flag: 0, tc: [0, 0], color: [3, 250, 126, 0] },
	{ pos: [-7, -20, -27], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-7, -31, 24], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-8, 22, 27], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-8, 21, -15], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
]

export const mario_medium_poly_right_arm_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_right_arm_shared_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(2, 5, 6, 0x0, 7, 8, 5, 0x0),
	...Gbi.gsSP2Triangles(7, 1, 8, 0x0, 2, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 9, 0x0, 0, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(1, 0, 3, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 11, 0x0, 1, 7, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_right_arm = (customData) => {
	return [
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_right_arm_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_medium_poly_right_forearm_shared_dl_vertex = [
	{ pos: [-5, -18, -24], flag: 0, tc: [0, 0], color: [129, 254, 3, 0] },
	{ pos: [-3, -29, 21], flag: 0, tc: [0, 0], color: [129, 254, 3, 0] },
	{ pos: [-4, 17, 26], flag: 0, tc: [0, 0], color: [129, 254, 3, 0] },
	{ pos: [52, 13, -10], flag: 0, tc: [0, 0], color: [81, 64, 183, 0] },
	{ pos: [53, 13, 22], flag: 0, tc: [0, 0], color: [61, 99, 49, 0] },
	{ pos: [53, -26, 19], flag: 0, tc: [0, 0], color: [91, 208, 73, 0] },
	{ pos: [52, -17, -21], flag: 0, tc: [0, 0], color: [58, 172, 182, 0] },
	{ pos: [-3, -29, 21], flag: 0, tc: [0, 0], color: [4, 133, 228, 0] },
	{ pos: [-5, -18, -24], flag: 0, tc: [0, 0], color: [3, 133, 227, 0] },
	{ pos: [-5, 17, -12], flag: 0, tc: [0, 0], color: [9, 117, 209, 0] },
	{ pos: [-4, 17, 26], flag: 0, tc: [0, 0], color: [8, 126, 0, 0] },
	{ pos: [-5, -18, -24], flag: 0, tc: [0, 0], color: [6, 42, 137, 0] },
	{ pos: [-4, 17, 26], flag: 0, tc: [0, 0], color: [6, 245, 126, 0] },
	{ pos: [-3, -29, 21], flag: 0, tc: [0, 0], color: [6, 244, 126, 0] },
	{ pos: [-5, 17, -12], flag: 0, tc: [0, 0], color: [129, 254, 3, 0] },
]

export const mario_medium_poly_right_forearm_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_right_forearm_shared_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 5, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(4, 9, 10, 0x0, 3, 11, 9, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 11, 0x0, 4, 3, 9, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 12, 0x0, 5, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 7, 0x0, 2, 14, 0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_medium_poly_right_hand_closed_dl_vertex_group1 = [
	{ pos: [-7, -4, 36], flag: 0, tc: [0, 0], color: [140, 205, 253, 0] },
	{ pos: [-26, 40, 0], flag: 0, tc: [0, 0], color: [140, 205, 253, 0] },
	{ pos: [-4, -7, -34], flag: 0, tc: [0, 0], color: [140, 205, 253, 0] },
	{ pos: [14, -51, 7], flag: 0, tc: [0, 0], color: [140, 205, 253, 0] },
	{ pos: [81, -8, 49], flag: 0, tc: [0, 0], color: [54, 230, 111, 0] },
	{ pos: [42, -20, 54], flag: 0, tc: [0, 0], color: [217, 187, 98, 0] },
	{ pos: [54, -42, -4], flag: 0, tc: [0, 0], color: [4, 130, 246, 0] },
	{ pos: [52, 59, 37], flag: 0, tc: [0, 0], color: [255, 85, 94, 0] },
	{ pos: [16, 38, 35], flag: 0, tc: [0, 0], color: [193, 45, 99, 0] },
	{ pos: [10, 3, 33], flag: 0, tc: [0, 0], color: [195, 250, 110, 0] },
	{ pos: [102, -23, 0], flag: 0, tc: [0, 0], color: [101, 193, 215, 0] },
	{ pos: [55, 84, -8], flag: 0, tc: [0, 0], color: [21, 115, 209, 0] },
	{ pos: [7, 62, -11], flag: 0, tc: [0, 0], color: [167, 90, 249, 0] },
	{ pos: [94, 43, 18], flag: 0, tc: [0, 0], color: [109, 56, 33, 0] },
	{ pos: [32, 8, -40], flag: 0, tc: [0, 0], color: [218, 232, 138, 0] },
	{ pos: [26, -32, 8], flag: 0, tc: [0, 0], color: [8, 130, 250, 0] },
]

const mario_medium_poly_right_hand_closed_dl_vertex_group2 = [
	{ pos: [16, 38, 35], flag: 0, tc: [0, 0], color: [193, 45, 99, 0] },
	{ pos: [7, 62, -11], flag: 0, tc: [0, 0], color: [167, 90, 249, 0] },
	{ pos: [-3, 37, 3], flag: 0, tc: [0, 0], color: [176, 98, 247, 0] },
	{ pos: [32, 8, -40], flag: 0, tc: [0, 0], color: [218, 232, 138, 0] },
	{ pos: [26, -32, 8], flag: 0, tc: [0, 0], color: [8, 130, 250, 0] },
	{ pos: [14, -51, 7], flag: 0, tc: [0, 0], color: [79, 208, 170, 0] },
	{ pos: [-4, -7, -34], flag: 0, tc: [0, 0], color: [55, 16, 143, 0] },
	{ pos: [-26, 40, 0], flag: 0, tc: [0, 0], color: [21, 81, 161, 0] },
	{ pos: [-26, 40, 0], flag: 0, tc: [0, 0], color: [2, 79, 98, 0] },
	{ pos: [-7, -4, 36], flag: 0, tc: [0, 0], color: [25, 19, 122, 0] },
	{ pos: [14, -51, 7], flag: 0, tc: [0, 0], color: [54, 215, 107, 0] },
	{ pos: [55, 84, -8], flag: 0, tc: [0, 0], color: [21, 115, 209, 0] },
	{ pos: [102, -23, 0], flag: 0, tc: [0, 0], color: [101, 193, 215, 0] },
	{ pos: [54, -42, -4], flag: 0, tc: [0, 0], color: [4, 130, 246, 0] },
	{ pos: [94, 43, 18], flag: 0, tc: [0, 0], color: [109, 56, 33, 0] },
	{ pos: [83, 30, -39], flag: 0, tc: [0, 0], color: [78, 28, 161, 0] },
]

const mario_medium_poly_right_hand_closed_dl_vertex_group3 = [
	{ pos: [102, -23, 0], flag: 0, tc: [0, 0], color: [101, 193, 215, 0] },
	{ pos: [94, 43, 18], flag: 0, tc: [0, 0], color: [109, 56, 33, 0] },
	{ pos: [81, -8, 49], flag: 0, tc: [0, 0], color: [54, 230, 111, 0] },
	{ pos: [52, 59, 37], flag: 0, tc: [0, 0], color: [255, 85, 94, 0] },
	{ pos: [55, 84, -8], flag: 0, tc: [0, 0], color: [21, 115, 209, 0] },
	{ pos: [32, 8, -40], flag: 0, tc: [0, 0], color: [218, 232, 138, 0] },
	{ pos: [83, 30, -39], flag: 0, tc: [0, 0], color: [78, 28, 161, 0] },
	{ pos: [-7, -4, 36], flag: 0, tc: [0, 0], color: [25, 19, 122, 0] },
	{ pos: [26, -32, 8], flag: 0, tc: [0, 0], color: [8, 130, 250, 0] },
	{ pos: [10, 3, 33], flag: 0, tc: [0, 0], color: [195, 250, 110, 0] },
	{ pos: [-3, 37, 3], flag: 0, tc: [0, 0], color: [176, 98, 247, 0] },
	{ pos: [13, 0, -26], flag: 0, tc: [0, 0], color: [245, 242, 131, 0] },
	{ pos: [-4, -7, -34], flag: 0, tc: [0, 0], color: [55, 16, 143, 0] },
	{ pos: [16, 38, 35], flag: 0, tc: [0, 0], color: [193, 45, 99, 0] },
	{ pos: [42, -20, 54], flag: 0, tc: [0, 0], color: [217, 187, 98, 0] },
]

export const mario_medium_poly_right_hand_closed_dl = [
	Gbi.gsSPVertex(mario_medium_poly_right_hand_closed_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 8, 0x0, 9, 5, 8, 0x0),
	...Gbi.gsSP2Triangles(10, 4, 6, 0x0, 7, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(4, 13, 7, 0x0, 7, 12, 8, 0x0),
	...Gbi.gsSP2Triangles(14, 6, 15, 0x0, 6, 5, 15, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_right_hand_closed_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 6, 7, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 8, 9, 0x0, 9, 10, 4, 0x0),
	...Gbi.gsSP2Triangles(1, 11, 3, 0x0, 3, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 15, 0x0, 15, 14, 12, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_right_hand_closed_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 0, 0x0, 4, 6, 5, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 9, 0x0, 7, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 12, 11, 8, 0x0),
	...Gbi.gsSP2Triangles(5, 11, 10, 0x0, 10, 9, 13, 0x0),
	...Gbi.gsSP2Triangles(14, 9, 8, 0x0, 8, 11, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_right_hand_closed = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_right_hand_closed_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_metal_medium_poly_right_hand_closed = [
	Gbi.gsSPDisplayList(mario_medium_poly_right_hand_closed_dl),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPEndDisplayList(),
]

const mario_medium_poly_left_thigh_dl_vertex = [
	{ pos: [18, -12, 58], flag: 0, tc: [0, 0], color: [19, 221, 120, 0] },
	{ pos: [22, -52, 8], flag: 0, tc: [0, 0], color: [28, 133, 1, 0] },
	{ pos: [99, -35, 8], flag: 0, tc: [0, 0], color: [62, 146, 1, 0] },
	{ pos: [14, 51, 38], flag: 0, tc: [0, 0], color: [8, 117, 48, 0] },
	{ pos: [92, 47, 33], flag: 0, tc: [0, 0], color: [54, 75, 86, 0] },
	{ pos: [14, 50, -23], flag: 0, tc: [0, 0], color: [10, 101, 181, 0] },
	{ pos: [92, 47, -16], flag: 0, tc: [0, 0], color: [71, 85, 197, 0] },
	{ pos: [19, -13, -42], flag: 0, tc: [0, 0], color: [21, 219, 137, 0] },
	{ pos: [96, -3, -31], flag: 0, tc: [0, 0], color: [104, 241, 186, 0] },
	{ pos: [96, -3, 48], flag: 0, tc: [0, 0], color: [113, 248, 56, 0] },
	{ pos: [19, -13, -42], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [22, -52, 8], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [18, -12, 58], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [14, 51, 38], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [14, 50, -23], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
]

export const mario_medium_poly_left_thigh_dl = [
	Gbi.gsSPVertex(mario_medium_poly_left_thigh_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 6, 0x0, 7, 5, 6, 0x0),
	...Gbi.gsSP2Triangles(1, 7, 2, 0x0, 7, 8, 2, 0x0),
	...Gbi.gsSP2Triangles(6, 8, 7, 0x0, 3, 4, 6, 0x0),
	...Gbi.gsSP2Triangles(0, 9, 4, 0x0, 2, 9, 0, 0x0),
	...Gbi.gsSP2Triangles(9, 2, 8, 0x0, 10, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 10, 0x0, 13, 14, 10, 0x0),
	...Gbi.gsSP2Triangles(8, 6, 9, 0x0, 6, 4, 9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_left_thigh = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_left_thigh_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

/*export const mario_metal_medium_poly_left_thigh = [
	Gbi.gsSPSetGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADE),
	Gbi.gsDPLoadTextureBlock(mario_texture_metal, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 64, 32, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_medium_poly_left_thigh_dl),
	Gbi.gsSPEndDisplayList(),
]*/

const mario_medium_poly_left_leg_shared_dl_vertex = [
	{ pos: [5, -35, 9], flag: 0, tc: [0, 0], color: [202, 142, 0, 0] },
	{ pos: [65, -44, 10], flag: 0, tc: [0, 0], color: [238, 131, 1, 0] },
	{ pos: [66, -9, 54], flag: 0, tc: [0, 0], color: [242, 220, 120, 0] },
	{ pos: [9, 46, 33], flag: 0, tc: [0, 0], color: [213, 97, 69, 0] },
	{ pos: [69, 47, 37], flag: 0, tc: [0, 0], color: [249, 102, 75, 0] },
	{ pos: [70, 47, -18], flag: 0, tc: [0, 0], color: [251, 116, 207, 0] },
	{ pos: [10, 46, -16], flag: 0, tc: [0, 0], color: [175, 64, 183, 0] },
	{ pos: [67, -9, -36], flag: 0, tc: [0, 0], color: [244, 218, 136, 0] },
	{ pos: [7, -4, -31], flag: 0, tc: [0, 0], color: [155, 238, 182, 0] },
	{ pos: [7, -4, 49], flag: 0, tc: [0, 0], color: [143, 245, 55, 0] },
	{ pos: [66, -9, 54], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [65, -44, 10], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [67, -9, -36], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [70, 47, -18], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [69, 47, 37], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
]

export const mario_medium_poly_left_leg_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_left_leg_shared_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 4, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 5, 0x0, 6, 5, 7, 0x0),
	...Gbi.gsSP2Triangles(0, 7, 1, 0x0, 0, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 6, 0x0, 5, 6, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 9, 2, 0x0, 2, 9, 0, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 8, 0, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 6, 8, 0x0, 9, 3, 6, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 10, 0x0, 13, 14, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_medium_poly_left_foot_shared_dl_vertex_group1 = [
	{ pos: [108, 10, 36], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [108, 9, -20], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [75, 21, -41], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [76, 22, 61], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-14, 55, -27], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-13, 55, 49], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-41, 65, 9], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [41, -18, 54], flag: 0, tc: [0, 0], color: [4, 180, 101, 0] },
	{ pos: [76, 22, 61], flag: 0, tc: [0, 0], color: [18, 221, 120, 0] },
	{ pos: [-13, 55, 49], flag: 0, tc: [0, 0], color: [206, 7, 116, 0] },
	{ pos: [42, -11, -33], flag: 0, tc: [0, 0], color: [255, 184, 152, 0] },
	{ pos: [-37, 12, -16], flag: 0, tc: [0, 0], color: [161, 207, 189, 0] },
	{ pos: [-14, 55, -27], flag: 0, tc: [0, 0], color: [204, 2, 141, 0] },
	{ pos: [-36, 13, 39], flag: 0, tc: [0, 0], color: [160, 208, 66, 0] },
	{ pos: [75, 21, -41], flag: 0, tc: [0, 0], color: [9, 218, 136, 0] },
	{ pos: [108, 9, -20], flag: 0, tc: [0, 0], color: [68, 173, 190, 0] },
]

const mario_medium_poly_left_foot_shared_dl_vertex_group2 = [
	{ pos: [78, -30, 7], flag: 0, tc: [0, 0], color: [52, 141, 251, 0] },
	{ pos: [108, 9, -20], flag: 0, tc: [0, 0], color: [68, 173, 190, 0] },
	{ pos: [108, 10, 36], flag: 0, tc: [0, 0], color: [76, 175, 60, 0] },
	{ pos: [42, -11, -33], flag: 0, tc: [0, 0], color: [255, 184, 152, 0] },
	{ pos: [76, 22, 61], flag: 0, tc: [0, 0], color: [18, 221, 120, 0] },
	{ pos: [41, -18, 54], flag: 0, tc: [0, 0], color: [4, 180, 101, 0] },
	{ pos: [-36, 13, 39], flag: 0, tc: [0, 0], color: [160, 208, 66, 0] },
	{ pos: [-13, 55, 49], flag: 0, tc: [0, 0], color: [206, 7, 116, 0] },
	{ pos: [-41, 65, 9], flag: 0, tc: [0, 0], color: [131, 21, 0, 0] },
	{ pos: [-14, 55, -27], flag: 0, tc: [0, 0], color: [204, 2, 141, 0] },
	{ pos: [-37, 12, -16], flag: 0, tc: [0, 0], color: [161, 207, 189, 0] },
	{ pos: [25, -34, 11], flag: 0, tc: [0, 0], color: [221, 135, 251, 0] },
]

export const mario_medium_poly_left_foot_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_left_foot_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(3, 2, 4, 0x0, 5, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 4, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 7, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 14, 0x0, 10, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_left_foot_shared_dl_vertex_group2, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 0, 3, 0x0),
	...Gbi.gsSP2Triangles(2, 4, 5, 0x0, 5, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 8, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 3, 0, 0x0, 10, 3, 11, 0x0),
	...Gbi.gsSP2Triangles(0, 5, 11, 0x0, 11, 5, 6, 0x0),
	...Gbi.gsSP2Triangles(11, 6, 10, 0x0, 6, 8, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_left_foot = (customData) => {
	return [
		Gbi.gsSPLight(mario_brown1_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown1_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_left_foot_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_medium_poly_right_thigh_shared_dl_vertex = [
	{ pos: [18, -11, -58], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [23, -52, -9], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [20, -14, 41], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [97, -3, 30], flag: 0, tc: [0, 0], color: [105, 241, 69, 0] },
	{ pos: [99, -33, -10], flag: 0, tc: [0, 0], color: [64, 147, 252, 0] },
	{ pos: [95, -1, -49], flag: 0, tc: [0, 0], color: [113, 251, 199, 0] },
	{ pos: [18, -11, -58], flag: 0, tc: [0, 0], color: [18, 224, 135, 0] },
	{ pos: [91, 49, -33], flag: 0, tc: [0, 0], color: [52, 78, 171, 0] },
	{ pos: [92, 48, 16], flag: 0, tc: [0, 0], color: [71, 85, 61, 0] },
	{ pos: [13, 52, -37], flag: 0, tc: [0, 0], color: [6, 118, 211, 0] },
	{ pos: [20, -14, 41], flag: 0, tc: [0, 0], color: [22, 217, 118, 0] },
	{ pos: [23, -52, -9], flag: 0, tc: [0, 0], color: [29, 133, 253, 0] },
	{ pos: [14, 50, 24], flag: 0, tc: [0, 0], color: [10, 99, 77, 0] },
	{ pos: [13, 52, -37], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [14, 50, 24], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
]

export const mario_medium_poly_right_thigh_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_right_thigh_shared_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 4, 0x0, 7, 5, 6, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 9, 0x0, 10, 3, 8, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 10, 0x0, 4, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(8, 12, 10, 0x0, 8, 9, 12, 0x0),
	...Gbi.gsSP2Triangles(7, 6, 9, 0x0, 4, 11, 6, 0x0),
	...Gbi.gsSP2Triangles(5, 8, 3, 0x0, 5, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(2, 13, 0, 0x0, 2, 14, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_right_thigh = (customData) => {
	return [
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_right_thigh_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_medium_poly_right_leg_shared_dl_vertex = [
	{ pos: [6, -1, -50], flag: 0, tc: [0, 0], color: [142, 247, 202, 0] },
	{ pos: [5, -34, -11], flag: 0, tc: [0, 0], color: [201, 142, 254, 0] },
	{ pos: [7, -4, 30], flag: 0, tc: [0, 0], color: [155, 237, 74, 0] },
	{ pos: [67, -9, 34], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [64, -43, -12], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [66, -7, -56], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [66, -7, -56], flag: 0, tc: [0, 0], color: [241, 222, 135, 0] },
	{ pos: [10, 48, -33], flag: 0, tc: [0, 0], color: [214, 99, 190, 0] },
	{ pos: [10, 46, 16], flag: 0, tc: [0, 0], color: [177, 63, 75, 0] },
	{ pos: [71, 47, 18], flag: 0, tc: [0, 0], color: [253, 115, 51, 0] },
	{ pos: [67, -9, 34], flag: 0, tc: [0, 0], color: [244, 216, 119, 0] },
	{ pos: [64, -43, -12], flag: 0, tc: [0, 0], color: [236, 131, 253, 0] },
	{ pos: [70, 49, -37], flag: 0, tc: [0, 0], color: [250, 103, 184, 0] },
	{ pos: [71, 47, 18], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [70, 49, -37], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
]

export const mario_medium_poly_right_leg_shared_dl = [
	Gbi.gsSPVertex(mario_medium_poly_right_leg_shared_dl_vertex, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(1, 0, 6, 0x0, 6, 0, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 9, 0x0, 8, 2, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 2, 1, 0x0, 11, 10, 1, 0x0),
	...Gbi.gsSP2Triangles(10, 9, 8, 0x0, 9, 12, 7, 0x0),
	...Gbi.gsSP2Triangles(12, 6, 7, 0x0, 6, 11, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 13, 3, 0x0, 5, 14, 13, 0x0),
	...Gbi.gsSP2Triangles(2, 8, 0, 0x0, 8, 7, 0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_medium_poly_right_foot_dl_vertex_group1 = [
	{ pos: [-38, 12, 14], flag: 0, tc: [0, 0], color: [161, 207, 67, 0] },
	{ pos: [-43, 65, -12], flag: 0, tc: [0, 0], color: [131, 19, 255, 0] },
	{ pos: [-36, 12, -41], flag: 0, tc: [0, 0], color: [161, 206, 190, 0] },
	{ pos: [25, -34, -11], flag: 0, tc: [0, 0], color: [223, 134, 7, 0] },
	{ pos: [41, -18, -55], flag: 0, tc: [0, 0], color: [7, 179, 156, 0] },
	{ pos: [79, -29, -7], flag: 0, tc: [0, 0], color: [54, 142, 8, 0] },
	{ pos: [42, -10, 32], flag: 0, tc: [0, 0], color: [255, 186, 105, 0] },
	{ pos: [-15, 55, 24], flag: 0, tc: [0, 0], color: [203, 4, 115, 0] },
	{ pos: [-14, 54, -51], flag: 0, tc: [0, 0], color: [207, 4, 140, 0] },
	{ pos: [108, 11, -36], flag: 0, tc: [0, 0], color: [78, 176, 198, 0] },
	{ pos: [76, 23, -62], flag: 0, tc: [0, 0], color: [20, 219, 137, 0] },
	{ pos: [107, 12, 20], flag: 0, tc: [0, 0], color: [69, 175, 68, 0] },
	{ pos: [74, 24, 40], flag: 0, tc: [0, 0], color: [8, 220, 121, 0] },
	{ pos: [-15, 55, 24], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [-14, 54, -51], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [-43, 65, -12], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
]

const mario_medium_poly_right_foot_dl_vertex_group2 = [
	{ pos: [-15, 55, 24], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [76, 23, -62], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [-14, 54, -51], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [74, 24, 40], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [108, 11, -36], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [107, 12, 20], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
]

export const mario_medium_poly_right_foot_dl = [
	Gbi.gsSPVertex(mario_medium_poly_right_foot_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(2, 4, 3, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 0, 0x0, 5, 6, 3, 0x0),
	...Gbi.gsSP2Triangles(0, 7, 1, 0x0, 1, 8, 2, 0x0),
	...Gbi.gsSP2Triangles(9, 5, 4, 0x0, 4, 10, 9, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 11, 0x0, 9, 11, 5, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 6, 0x0, 12, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(8, 4, 2, 0x0, 7, 0, 6, 0x0),
	...Gbi.gsSP2Triangles(8, 10, 4, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_medium_poly_right_foot_dl_vertex_group2, 6, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 1, 0x0, 3, 5, 4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_right_foot = (customData) => {
	return [
		Gbi.gsSPLight(mario_brown1_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown1_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_right_foot_dl),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
		Gbi.gsDPSetEnvColor(255, 255, 255, 255),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_metal_medium_poly_right_foot = [
	Gbi.gsSPDisplayList(mario_medium_poly_right_foot_dl),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

const mario_seg4_vertex_04016148 = [
	{ pos: [75, 24, -60], flag: 0, tc: [-74, -930], color: [96, 39, 184, 255] },
	{ pos: [36, 47, -76], flag: 0, tc: [-174, 168], color: [46, 54, 152, 255] },
	{ pos: [44, 78, -35], flag: 0, tc: [988, 92], color: [69, 101, 226, 255] },
	{ pos: [-26, 49, -87], flag: 0, tc: [-538, 1590], color: [196, 41, 153, 255] },
	{ pos: [1, 87, -53], flag: 0, tc: [638, 1164], color: [14, 116, 209, 255] },
	{ pos: [1, 87, 54], flag: 0, tc: [2522, 702], color: [17, 116, 47, 255] },
	{ pos: [1, 87, 54], flag: 0, tc: [272, 1122], color: [17, 116, 47, 255] },
	{ pos: [44, 78, 37], flag: 0, tc: [-92, 108], color: [71, 95, 42, 255] },
	{ pos: [44, 78, -35], flag: 0, tc: [-1398, -128], color: [69, 101, 226, 255] },
	{ pos: [-26, 49, 88], flag: 0, tc: [1514, 1490], color: [196, 41, 103, 255] },
	{ pos: [36, 47, 77], flag: 0, tc: [1110, 130], color: [47, 55, 104, 255] },
	{ pos: [75, 24, 60], flag: 0, tc: [968, -926], color: [98, 39, 70, 255] },
]

const mario_seg4_vertex_04016208 = [
	{ pos: [82, 37, 28], flag: 0, tc: [0, 0], color: [113, 54, 14, 255] },
	{ pos: [82, 37, -28], flag: 0, tc: [0, 0], color: [113, 53, 234, 255] },
	{ pos: [44, 78, -35], flag: 0, tc: [0, 0], color: [69, 101, 226, 255] },
	{ pos: [44, 78, 37], flag: 0, tc: [0, 0], color: [71, 95, 42, 255] },
	{ pos: [95, -39, -25], flag: 0, tc: [0, 0], color: [121, 230, 232, 255] },
	{ pos: [95, -39, 25], flag: 0, tc: [0, 0], color: [117, 219, 29, 255] },
	{ pos: [54, -68, 0], flag: 0, tc: [0, 0], color: [45, 138, 0, 255] },
	{ pos: [56, -4, 79], flag: 0, tc: [0, 0], color: [57, 4, 113, 255] },
	{ pos: [75, 24, 60], flag: 0, tc: [0, 0], color: [98, 39, 70, 255] },
	{ pos: [36, 47, 77], flag: 0, tc: [0, 0], color: [47, 55, 104, 255] },
	{ pos: [9, 0, 94], flag: 0, tc: [0, 0], color: [14, 3, 126, 255] },
	{ pos: [22, -41, 87], flag: 0, tc: [0, 0], color: [31, 201, 109, 255] },
	{ pos: [83, -29, 58], flag: 0, tc: [0, 0], color: [84, 200, 76, 255] },
	{ pos: [83, -29, -58], flag: 0, tc: [0, 0], color: [82, 201, 178, 255] },
	{ pos: [40, -66, -47], flag: 0, tc: [0, 0], color: [29, 145, 203, 255] },
	{ pos: [22, -41, -86], flag: 0, tc: [0, 0], color: [30, 202, 146, 255] },
]

const mario_seg4_vertex_04016308 = [
	{ pos: [36, 47, -76], flag: 0, tc: [0, 0], color: [46, 54, 152, 255] },
	{ pos: [75, 24, -60], flag: 0, tc: [0, 0], color: [96, 39, 184, 255] },
	{ pos: [56, -4, -77], flag: 0, tc: [0, 0], color: [56, 4, 143, 255] },
	{ pos: [9, 0, -93], flag: 0, tc: [0, 0], color: [14, 3, 130, 255] },
	{ pos: [83, -29, -58], flag: 0, tc: [0, 0], color: [82, 201, 178, 255] },
	{ pos: [22, -41, -86], flag: 0, tc: [0, 0], color: [30, 202, 146, 255] },
	{ pos: [22, -41, 87], flag: 0, tc: [0, 0], color: [31, 201, 109, 255] },
	{ pos: [40, -66, 48], flag: 0, tc: [0, 0], color: [29, 145, 53, 255] },
	{ pos: [83, -29, 58], flag: 0, tc: [0, 0], color: [84, 200, 76, 255] },
]

const mario_seg4_vertex_04016398 = [
	{ pos: [83, -29, -58], flag: 0, tc: [0, 0], color: [82, 201, 178, 255] },
	{ pos: [95, -39, -25], flag: 0, tc: [0, 0], color: [121, 230, 232, 255] },
	{ pos: [54, -68, 0], flag: 0, tc: [0, 0], color: [45, 138, 0, 255] },
	{ pos: [75, 24, -60], flag: 0, tc: [0, 0], color: [96, 39, 184, 255] },
	{ pos: [82, 37, -28], flag: 0, tc: [0, 0], color: [113, 53, 234, 255] },
	{ pos: [40, -66, -47], flag: 0, tc: [0, 0], color: [29, 145, 203, 255] },
	{ pos: [44, 78, -35], flag: 0, tc: [0, 0], color: [69, 101, 226, 255] },
	{ pos: [75, 24, 60], flag: 0, tc: [0, 0], color: [98, 39, 70, 255] },
	{ pos: [82, 37, 28], flag: 0, tc: [0, 0], color: [113, 54, 14, 255] },
	{ pos: [44, 78, 37], flag: 0, tc: [0, 0], color: [71, 95, 42, 255] },
	{ pos: [83, -29, 58], flag: 0, tc: [0, 0], color: [84, 200, 76, 255] },
	{ pos: [95, -39, 25], flag: 0, tc: [0, 0], color: [117, 219, 29, 255] },
	{ pos: [40, -66, 48], flag: 0, tc: [0, 0], color: [29, 145, 53, 255] },
	{ pos: [1, 87, -53], flag: 0, tc: [0, 0], color: [14, 116, 209, 255] },
	{ pos: [-30, 88, 42], flag: 0, tc: [0, 0], color: [211, 114, 31, 255] },
	{ pos: [1, 87, 54], flag: 0, tc: [0, 0], color: [17, 116, 47, 255] },
]

const mario_seg4_vertex_04016498 = [
	{ pos: [1, 87, -53], flag: 0, tc: [0, 0], color: [14, 116, 209, 255] },
	{ pos: [-30, 88, -41], flag: 0, tc: [0, 0], color: [199, 106, 218, 255] },
	{ pos: [-30, 88, 42], flag: 0, tc: [0, 0], color: [211, 114, 31, 255] },
	{ pos: [-26, 49, -87], flag: 0, tc: [0, 0], color: [196, 41, 153, 255] },
	{ pos: [-71, 56, 0], flag: 0, tc: [0, 0], color: [137, 43, 0, 255] },
	{ pos: [-26, 49, 88], flag: 0, tc: [0, 0], color: [196, 41, 103, 255] },
	{ pos: [1, 87, 54], flag: 0, tc: [0, 0], color: [17, 116, 47, 255] },
	{ pos: [-59, -44, 0], flag: 0, tc: [0, 0], color: [136, 216, 0, 255] },
	{ pos: [-26, -72, -38], flag: 0, tc: [0, 0], color: [218, 139, 229, 255] },
	{ pos: [-26, -72, 39], flag: 0, tc: [0, 0], color: [218, 139, 27, 255] },
	{ pos: [-26, -41, 85], flag: 0, tc: [0, 0], color: [204, 194, 97, 255] },
	{ pos: [-26, -41, -84], flag: 0, tc: [0, 0], color: [204, 194, 159, 255] },
	{ pos: [40, -66, 48], flag: 0, tc: [0, 0], color: [29, 145, 53, 255] },
	{ pos: [22, -41, 87], flag: 0, tc: [0, 0], color: [31, 201, 109, 255] },
	{ pos: [9, 0, 94], flag: 0, tc: [0, 0], color: [14, 3, 126, 255] },
	{ pos: [54, -68, 0], flag: 0, tc: [0, 0], color: [45, 138, 0, 255] },
]

const mario_seg4_vertex_04016598 = [
	{ pos: [-26, 49, 88], flag: 0, tc: [0, 0], color: [196, 41, 103, 255] },
	{ pos: [9, 0, 94], flag: 0, tc: [0, 0], color: [14, 3, 126, 255] },
	{ pos: [36, 47, 77], flag: 0, tc: [0, 0], color: [47, 55, 104, 255] },
	{ pos: [9, 0, -93], flag: 0, tc: [0, 0], color: [14, 3, 130, 255] },
	{ pos: [-26, 49, -87], flag: 0, tc: [0, 0], color: [196, 41, 153, 255] },
	{ pos: [36, 47, -76], flag: 0, tc: [0, 0], color: [46, 54, 152, 255] },
	{ pos: [-26, -41, -84], flag: 0, tc: [0, 0], color: [204, 194, 159, 255] },
	{ pos: [22, -41, -86], flag: 0, tc: [0, 0], color: [30, 202, 146, 255] },
	{ pos: [40, -66, -47], flag: 0, tc: [0, 0], color: [29, 145, 203, 255] },
	{ pos: [-26, -72, -38], flag: 0, tc: [0, 0], color: [218, 139, 229, 255] },
	{ pos: [54, -68, 0], flag: 0, tc: [0, 0], color: [45, 138, 0, 255] },
	{ pos: [-26, -72, 39], flag: 0, tc: [0, 0], color: [218, 139, 27, 255] },
	{ pos: [40, -66, 48], flag: 0, tc: [0, 0], color: [29, 145, 53, 255] },
]

export const mario_medium_poly_yellow_button_dl = [
	Gbi.gsSPVertex(mario_seg4_vertex_04016148, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 4, 0x0, 4, 5, 2, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 10, 7, 0x0, 7, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_pants_overalls_shared_dl = [
	Gbi.gsSPVertex(mario_seg4_vertex_04016398, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 0, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 1, 0x0, 2, 5, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 11, 0x0, 8, 7, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 2, 0x0, 10, 12, 2, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_seg4_vertex_04016498, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 2, 1, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 2, 4, 0x0, 6, 2, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 7, 0x0, 8, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 7, 0x0, 9, 10, 7, 0x0),
	...Gbi.gsSP2Triangles(11, 8, 7, 0x0, 3, 11, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 5, 0x0, 10, 9, 12, 0x0),
	...Gbi.gsSP2Triangles(10, 13, 14, 0x0, 12, 13, 10, 0x0),
	...Gbi.gsSP2Triangles(5, 10, 14, 0x0, 9, 8, 15, 0x0),
	Gbi.gsSPVertex(mario_seg4_vertex_04016598, 13, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 4, 3, 0x0, 6, 3, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 6, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 8, 10, 0x0, 11, 10, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_tshirt_shared_dl = [
	Gbi.gsSPVertex(mario_seg4_vertex_04016208, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(1, 0, 4, 0x0, 0, 5, 4, 0x0),
	...Gbi.gsSP2Triangles(6, 4, 5, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 7, 0x0, 7, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(7, 12, 8, 0x0, 11, 12, 7, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_seg4_vertex_04016308, 9, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(1, 4, 2, 0x0, 2, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 2, 0x0, 6, 7, 8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_medium_poly_torso_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_medium_poly_pants_overalls_shared_dl),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_medium_poly_tshirt_shared_dl),
		Gbi.gsSPLight(mario_hat_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_hat_lights_group(customData).a, 2),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_medium_poly_torso = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_yellow_button),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_medium_poly_yellow_button_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_medium_poly_torso_dl),
	Gbi.gsSPEndDisplayList(),
]

export const mario_metal_medium_poly_torso = [
	Gbi.gsSPDisplayList(mario_medium_poly_yellow_button_dl),
	Gbi.gsSPDisplayList(mario_medium_poly_pants_overalls_shared_dl),
	Gbi.gsSPDisplayList(mario_medium_poly_tshirt_shared_dl),
	Gbi.gsSPEndDisplayList(),
]

const mario_low_poly_butt_dl_vertex = [
	{ pos: [-37, -37, 0], flag: 0, tc: [0, 0], color: [130, 245, 0, 0] },
	{ pos: [-2, 52, 92], flag: 0, tc: [0, 0], color: [177, 60, 78, 0] },
	{ pos: [-35, 55, 0], flag: 0, tc: [0, 0], color: [151, 69, 0, 0] },
	{ pos: [-7, -86, 85], flag: 0, tc: [0, 0], color: [191, 196, 90, 0] },
	{ pos: [49, 46, 96], flag: 0, tc: [0, 0], color: [75, 29, 97, 0] },
	{ pos: [-7, -86, -85], flag: 0, tc: [0, 0], color: [207, 170, 178, 0] },
	{ pos: [-2, 52, -92], flag: 0, tc: [0, 0], color: [176, 59, 178, 0] },
	{ pos: [48, 44, -98], flag: 0, tc: [0, 0], color: [41, 34, 142, 0] },
	{ pos: [46, -71, -89], flag: 0, tc: [0, 0], color: [115, 217, 221, 0] },
	{ pos: [46, -71, 89], flag: 0, tc: [0, 0], color: [68, 161, 47, 0] },
	{ pos: [49, 96, 0], flag: 0, tc: [0, 0], color: [43, 119, 0, 0] },
]

export const mario_low_poly_butt_dl = [
	Gbi.gsSPVertex(mario_low_poly_butt_dl_vertex, 11, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 0, 2, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 0, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 5, 0x0, 3, 9, 4, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 10, 0x0, 4, 9, 8, 0x0),
	...Gbi.gsSP2Triangles(5, 9, 3, 0x0, 3, 0, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 8, 9, 0x0, 10, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(10, 4, 8, 0x0, 2, 1, 10, 0x0),
	...Gbi.gsSP2Triangles(6, 2, 10, 0x0, 1, 4, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_butt = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_butt_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

/*export const mario_metal_low_poly_butt = [
	Gbi.gsSPSetGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADE),
	Gbi.gsDPLoadTextureBlock(mario_texture_metal, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 64, 32, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_butt_dl),
	Gbi.gsSPEndDisplayList(),
]
*/
const mario_low_poly_left_arm_shared_dl_vertex = [
	{ pos: [-6, 28, 10], flag: 0, tc: [0, 0], color: [9, 101, 181, 0] },
	{ pos: [72, 21, 8], flag: 0, tc: [0, 0], color: [68, 77, 72, 0] },
	{ pos: [71, -11, -34], flag: 0, tc: [0, 0], color: [63, 87, 190, 0] },
	{ pos: [-8, -30, 31], flag: 0, tc: [0, 0], color: [9, 38, 120, 0] },
	{ pos: [71, -30, 23], flag: 0, tc: [0, 0], color: [94, 21, 81, 0] },
	{ pos: [-6, 28, 10], flag: 0, tc: [0, 0], color: [7, 41, 119, 0] },
	{ pos: [-8, -7, -41], flag: 0, tc: [0, 0], color: [11, 103, 184, 0] },
	{ pos: [-8, -30, 31], flag: 0, tc: [0, 0], color: [164, 173, 229, 0] },
	{ pos: [-6, 28, 10], flag: 0, tc: [0, 0], color: [129, 2, 0, 0] },
	{ pos: [-8, -7, -41], flag: 0, tc: [0, 0], color: [164, 173, 229, 0] },
	{ pos: [71, -11, -34], flag: 0, tc: [0, 0], color: [253, 136, 217, 0] },
	{ pos: [71, -30, 23], flag: 0, tc: [0, 0], color: [253, 136, 217, 0] },
]

export const mario_low_poly_left_arm_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_left_arm_shared_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 1, 0x0, 6, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 9, 0x0, 2, 1, 4, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 10, 0x0, 7, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_left_arm = (customData) => {
	return [
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_left_arm_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_low_poly_left_forearm_shared_dl_vertex = [
	{ pos: [-5, 20, 6], flag: 0, tc: [0, 0], color: [5, 98, 176, 0] },
	{ pos: [67, 16, 5], flag: 0, tc: [0, 0], color: [67, 75, 76, 0] },
	{ pos: [67, -14, -31], flag: 0, tc: [0, 0], color: [60, 85, 186, 0] },
	{ pos: [-5, -30, 21], flag: 0, tc: [0, 0], color: [5, 32, 122, 0] },
	{ pos: [67, -30, 17], flag: 0, tc: [0, 0], color: [92, 20, 84, 0] },
	{ pos: [-5, 20, 6], flag: 0, tc: [0, 0], color: [4, 34, 122, 0] },
	{ pos: [-5, -12, -35], flag: 0, tc: [0, 0], color: [7, 99, 178, 0] },
	{ pos: [-5, -30, 21], flag: 0, tc: [0, 0], color: [165, 173, 229, 0] },
	{ pos: [-5, 20, 6], flag: 0, tc: [0, 0], color: [129, 1, 0, 0] },
	{ pos: [-5, -12, -35], flag: 0, tc: [0, 0], color: [165, 173, 229, 0] },
	{ pos: [67, -30, 17], flag: 0, tc: [0, 0], color: [254, 136, 217, 0] },
	{ pos: [67, -14, -31], flag: 0, tc: [0, 0], color: [254, 136, 217, 0] },
]

export const mario_low_poly_left_forearm_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_left_forearm_shared_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 1, 0x0, 6, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 9, 0x0, 2, 1, 4, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 9, 0x0, 10, 9, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_low_poly_left_hand_closed_shared_dl_vertex = [
	{ pos: [-6, 34, -25], flag: 0, tc: [0, 0], color: [160, 19, 176, 0] },
	{ pos: [-9, 39, 24], flag: 0, tc: [0, 0], color: [179, 67, 74, 0] },
	{ pos: [91, 80, -34], flag: 0, tc: [0, 0], color: [19, 124, 238, 0] },
	{ pos: [90, 35, 33], flag: 0, tc: [0, 0], color: [65, 20, 107, 0] },
	{ pos: [20, -34, 21], flag: 0, tc: [0, 0], color: [212, 154, 60, 0] },
	{ pos: [122, 4, -45], flag: 0, tc: [0, 0], color: [99, 187, 37, 0] },
	{ pos: [122, 4, -45], flag: 0, tc: [0, 0], color: [242, 21, 132, 0] },
	{ pos: [20, -31, -44], flag: 0, tc: [0, 0], color: [203, 174, 177, 0] },
]

export const mario_low_poly_left_hand_closed_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_left_hand_closed_shared_dl_vertex, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 3, 0x0, 0, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 6, 0x0, 4, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 1, 4, 0x0, 2, 3, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 7, 4, 0x0, 4, 1, 0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_left_hand_closed = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_left_hand_closed_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


const mario_low_poly_right_arm_shared_dl_vertex = [
	{ pos: [65, 30, 23], flag: 0, tc: [0, 0], color: [94, 235, 81, 0] },
	{ pos: [66, -21, 8], flag: 0, tc: [0, 0], color: [69, 179, 73, 0] },
	{ pos: [65, 11, -34], flag: 0, tc: [0, 0], color: [64, 169, 191, 0] },
	{ pos: [-10, 7, -41], flag: 0, tc: [0, 0], color: [164, 82, 229, 0] },
	{ pos: [-9, -28, 10], flag: 0, tc: [0, 0], color: [129, 254, 0, 0] },
	{ pos: [-10, 30, 30], flag: 0, tc: [0, 0], color: [164, 82, 229, 0] },
	{ pos: [-9, -28, 10], flag: 0, tc: [0, 0], color: [9, 154, 182, 0] },
	{ pos: [-10, 7, -41], flag: 0, tc: [0, 0], color: [12, 153, 184, 0] },
	{ pos: [-10, 30, 30], flag: 0, tc: [0, 0], color: [10, 219, 120, 0] },
	{ pos: [-9, -28, 10], flag: 0, tc: [0, 0], color: [7, 216, 120, 0] },
	{ pos: [65, 30, 23], flag: 0, tc: [0, 0], color: [252, 120, 217, 0] },
	{ pos: [65, 11, -34], flag: 0, tc: [0, 0], color: [252, 120, 217, 0] },
]

export const mario_low_poly_right_arm_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_right_arm_shared_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(2, 6, 7, 0x0, 1, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(1, 0, 8, 0x0, 2, 1, 6, 0x0),
	...Gbi.gsSP2Triangles(5, 10, 11, 0x0, 5, 11, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_right_arm = (customData) => {
	return [
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_right_arm_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_low_poly_right_forearm_shared_dl_vertex = [
	{ pos: [-13, 12, -35], flag: 0, tc: [0, 0], color: [165, 83, 229, 0] },
	{ pos: [-13, -20, 6], flag: 0, tc: [0, 0], color: [129, 255, 0, 0] },
	{ pos: [-13, 30, 21], flag: 0, tc: [0, 0], color: [165, 83, 229, 0] },
	{ pos: [54, 14, -31], flag: 0, tc: [0, 0], color: [61, 170, 186, 0] },
	{ pos: [-13, -20, 6], flag: 0, tc: [0, 0], color: [5, 158, 177, 0] },
	{ pos: [-13, 12, -35], flag: 0, tc: [0, 0], color: [7, 156, 179, 0] },
	{ pos: [55, -16, 5], flag: 0, tc: [0, 0], color: [67, 181, 76, 0] },
	{ pos: [-13, 30, 21], flag: 0, tc: [0, 0], color: [5, 224, 122, 0] },
	{ pos: [-13, -20, 6], flag: 0, tc: [0, 0], color: [4, 222, 122, 0] },
	{ pos: [54, 30, 17], flag: 0, tc: [0, 0], color: [92, 237, 84, 0] },
	{ pos: [54, 30, 17], flag: 0, tc: [0, 0], color: [254, 120, 216, 0] },
	{ pos: [54, 14, -31], flag: 0, tc: [0, 0], color: [254, 120, 216, 0] },
]

export const mario_low_poly_right_forearm_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_right_forearm_shared_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 2, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(2, 11, 0, 0x0, 9, 6, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_low_poly_right_hand_closed_dl_vertex = [
	{ pos: [85, -38, -32], flag: 0, tc: [0, 0], color: [61, 227, 150, 0] },
	{ pos: [-15, -35, -22], flag: 0, tc: [0, 0], color: [153, 220, 193, 0] },
	{ pos: [17, 37, -22], flag: 0, tc: [0, 0], color: [254, 105, 185, 0] },
	{ pos: [116, -10, 36], flag: 0, tc: [0, 0], color: [102, 71, 22, 0] },
	{ pos: [82, -85, 44], flag: 0, tc: [0, 0], color: [19, 138, 216, 0] },
	{ pos: [-15, -35, 43], flag: 0, tc: [0, 0], color: [157, 236, 76, 0] },
	{ pos: [82, -85, 44], flag: 0, tc: [0, 0], color: [2, 21, 125, 0] },
	{ pos: [14, 30, 26], flag: 0, tc: [0, 0], color: [202, 80, 81, 0] },
]

export const mario_low_poly_right_hand_closed_dl = [
	Gbi.gsSPVertex(mario_low_poly_right_hand_closed_dl_vertex, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 0, 3, 0x0, 4, 5, 1, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 7, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 1, 0x0, 3, 2, 7, 0x0),
	...Gbi.gsSP2Triangles(1, 5, 7, 0x0, 7, 2, 1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_right_hand_closed = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_right_hand_closed_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


export const mario_metal_low_poly_right_hand_closed = [
	Gbi.gsSPDisplayList(mario_low_poly_right_hand_closed_dl),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPEndDisplayList(),
]

const mario_low_poly_left_thigh_dl_vertex = [
	{ pos: [10, 51, 45], flag: 0, tc: [0, 0], color: [8, 115, 52, 0] },
	{ pos: [17, -44, 58], flag: 0, tc: [0, 0], color: [10, 17, 125, 0] },
	{ pos: [94, 48, 38], flag: 0, tc: [0, 0], color: [56, 64, 93, 0] },
	{ pos: [11, 51, -27], flag: 0, tc: [0, 0], color: [11, 94, 173, 0] },
	{ pos: [95, 48, -19], flag: 0, tc: [0, 0], color: [74, 79, 191, 0] },
	{ pos: [18, -45, -38], flag: 0, tc: [0, 0], color: [12, 15, 131, 0] },
	{ pos: [101, -28, -28], flag: 0, tc: [0, 0], color: [91, 202, 188, 0] },
	{ pos: [100, -28, 48], flag: 0, tc: [0, 0], color: [99, 189, 41, 0] },
	{ pos: [17, -44, 58], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [10, 51, 45], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [18, -45, -38], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [11, 51, -27], flag: 0, tc: [0, 0], color: [130, 247, 255, 0] },
	{ pos: [18, -45, -38], flag: 0, tc: [0, 0], color: [24, 132, 1, 0] },
	{ pos: [17, -44, 58], flag: 0, tc: [0, 0], color: [24, 132, 1, 0] },
]

export const mario_low_poly_left_thigh_dl = [
	Gbi.gsSPVertex(mario_low_poly_left_thigh_dl_vertex, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 4, 0x0, 4, 6, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 2, 4, 0x0, 1, 7, 2, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(6, 4, 7, 0x0, 4, 2, 7, 0x0),
	...Gbi.gsSP2Triangles(12, 7, 13, 0x0, 12, 6, 7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_left_thigh = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_left_thigh_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


/*export const mario_metal_low_poly_left_thigh = [
	Gbi.gsSPSetGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADE),
	Gbi.gsDPLoadTextureBlock(mario_texture_metal, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 64, 32, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_left_thigh_dl),
	Gbi.gsSPEndDisplayList(),
]*/

const mario_low_poly_left_leg_shared_dl_vertex = [
	{ pos: [7, 47, 38], flag: 0, tc: [0, 0], color: [207, 89, 75, 0] },
	{ pos: [70, -39, 53], flag: 0, tc: [0, 0], color: [248, 16, 125, 0] },
	{ pos: [75, 52, 42], flag: 0, tc: [0, 0], color: [244, 94, 83, 0] },
	{ pos: [75, 52, -23], flag: 0, tc: [0, 0], color: [245, 114, 202, 0] },
	{ pos: [7, 47, -20], flag: 0, tc: [0, 0], color: [171, 52, 178, 0] },
	{ pos: [71, -39, -34], flag: 0, tc: [0, 0], color: [250, 15, 131, 0] },
	{ pos: [3, -29, -29], flag: 0, tc: [0, 0], color: [187, 164, 205, 0] },
	{ pos: [2, -29, 48], flag: 0, tc: [0, 0], color: [146, 219, 49, 0] },
	{ pos: [71, -39, -34], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [75, 52, -23], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [70, -39, 53], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [75, 52, 42], flag: 0, tc: [0, 0], color: [126, 250, 1, 0] },
	{ pos: [71, -39, -34], flag: 0, tc: [0, 0], color: [237, 131, 0, 0] },
	{ pos: [70, -39, 53], flag: 0, tc: [0, 0], color: [237, 131, 0, 0] },
]

export const mario_low_poly_left_leg_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_left_leg_shared_dl_vertex, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 5, 0x0, 5, 6, 4, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 0, 0x0, 0, 7, 1, 0x0),
	...Gbi.gsSP2Triangles(7, 4, 6, 0x0, 7, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(6, 12, 13, 0x0, 13, 7, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_low_poly_left_foot_shared_dl_vertex = [
	{ pos: [110, 11, 56], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [109, 10, -33], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-50, 69, -36], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [-49, 70, 63], flag: 0, tc: [0, 0], color: [43, 119, 255, 0] },
	{ pos: [74, -39, 51], flag: 0, tc: [0, 0], color: [19, 176, 96, 0] },
	{ pos: [110, 11, 56], flag: 0, tc: [0, 0], color: [91, 187, 54, 0] },
	{ pos: [-49, 70, 63], flag: 0, tc: [0, 0], color: [0, 244, 126, 0] },
	{ pos: [73, -40, -25], flag: 0, tc: [0, 0], color: [24, 150, 192, 0] },
	{ pos: [-56, 20, -30], flag: 0, tc: [0, 0], color: [164, 197, 194, 0] },
	{ pos: [-50, 69, -36], flag: 0, tc: [0, 0], color: [254, 240, 131, 0] },
	{ pos: [-54, 20, 58], flag: 0, tc: [0, 0], color: [153, 194, 38, 0] },
	{ pos: [109, 10, -33], flag: 0, tc: [0, 0], color: [68, 194, 170, 0] },
	{ pos: [-50, 69, -36], flag: 0, tc: [0, 0], color: [130, 14, 1, 0] },
	{ pos: [-49, 70, 63], flag: 0, tc: [0, 0], color: [130, 14, 1, 0] },
]

export const mario_low_poly_left_foot_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_left_foot_shared_dl_vertex, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 4, 6, 0x0, 7, 9, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 10, 13, 0x0, 7, 10, 8, 0x0),
	...Gbi.gsSP2Triangles(7, 11, 5, 0x0, 5, 4, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 4, 10, 0x0, 12, 8, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_left_foot = (customData) => {
	return [
		Gbi.gsSPLight(mario_brown1_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown1_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_left_foot_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_low_poly_right_thigh_shared_dl_vertex = [
	{ pos: [102, -25, -48], flag: 0, tc: [0, 0], color: [100, 191, 213, 0] },
	{ pos: [103, -27, 25], flag: 0, tc: [0, 0], color: [92, 201, 66, 0] },
	{ pos: [25, -45, 35], flag: 0, tc: [0, 0], color: [27, 133, 253, 0] },
	{ pos: [24, -42, -56], flag: 0, tc: [0, 0], color: [27, 133, 253, 0] },
	{ pos: [95, 50, -36], flag: 0, tc: [0, 0], color: [55, 66, 163, 0] },
	{ pos: [96, 49, 18], flag: 0, tc: [0, 0], color: [74, 78, 65, 0] },
	{ pos: [25, -45, 35], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [17, 51, 27], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [15, 53, -42], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [24, -42, -56], flag: 0, tc: [0, 0], color: [130, 245, 2, 0] },
	{ pos: [24, -42, -56], flag: 0, tc: [0, 0], color: [9, 19, 131, 0] },
	{ pos: [15, 53, -42], flag: 0, tc: [0, 0], color: [7, 116, 206, 0] },
	{ pos: [25, -45, 35], flag: 0, tc: [0, 0], color: [13, 12, 125, 0] },
	{ pos: [17, 51, 27], flag: 0, tc: [0, 0], color: [11, 92, 85, 0] },
]

export const mario_low_poly_right_thigh_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_right_thigh_shared_dl_vertex, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 5, 0x0, 0, 5, 1, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(4, 0, 10, 0x0, 5, 4, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 1, 5, 0x0, 5, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(5, 11, 13, 0x0, 4, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_right_thigh = (customData) => {
	return [
		Gbi.gsSPLight(mario_overalls_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_overalls_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_right_thigh_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_low_poly_right_leg_shared_dl_vertex = [
	{ pos: [2, -29, 27], flag: 0, tc: [0, 0], color: [186, 163, 49, 0] },
	{ pos: [1, -26, -50], flag: 0, tc: [0, 0], color: [145, 221, 207, 0] },
	{ pos: [68, -37, -56], flag: 0, tc: [0, 0], color: [236, 131, 253, 0] },
	{ pos: [70, -40, 30], flag: 0, tc: [0, 0], color: [236, 131, 253, 0] },
	{ pos: [68, -37, -56], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [74, 54, -43], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [75, 52, 21], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [70, -40, 30], flag: 0, tc: [0, 0], color: [126, 249, 254, 0] },
	{ pos: [6, 47, 19], flag: 0, tc: [0, 0], color: [173, 51, 80, 0] },
	{ pos: [6, 49, -38], flag: 0, tc: [0, 0], color: [207, 91, 183, 0] },
	{ pos: [68, -37, -56], flag: 0, tc: [0, 0], color: [248, 19, 131, 0] },
	{ pos: [75, 52, 21], flag: 0, tc: [0, 0], color: [247, 113, 56, 0] },
	{ pos: [70, -40, 30], flag: 0, tc: [0, 0], color: [251, 12, 126, 0] },
	{ pos: [74, 54, -43], flag: 0, tc: [0, 0], color: [244, 96, 175, 0] },
]

export const mario_low_poly_right_leg_shared_dl = [
	Gbi.gsSPVertex(mario_low_poly_right_leg_shared_dl_vertex, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 1, 0x0, 0, 8, 1, 0x0),
	...Gbi.gsSP2Triangles(10, 1, 9, 0x0, 9, 8, 11, 0x0),
	...Gbi.gsSP2Triangles(8, 0, 12, 0x0, 12, 11, 8, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 9, 0x0, 13, 10, 9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

const mario_low_poly_right_foot_dl_vertex = [
	{ pos: [-55, 19, -59], flag: 0, tc: [0, 0], color: [154, 192, 218, 0] },
	{ pos: [-57, 20, 28], flag: 0, tc: [0, 0], color: [164, 197, 62, 0] },
	{ pos: [-52, 69, 34], flag: 0, tc: [0, 0], color: [130, 12, 253, 0] },
	{ pos: [73, -38, -50], flag: 0, tc: [0, 0], color: [21, 174, 162, 0] },
	{ pos: [71, -37, 25], flag: 0, tc: [0, 0], color: [25, 152, 66, 0] },
	{ pos: [108, 12, -55], flag: 0, tc: [0, 0], color: [92, 188, 204, 0] },
	{ pos: [106, 13, 33], flag: 0, tc: [0, 0], color: [68, 197, 88, 0] },
	{ pos: [-50, 68, -65], flag: 0, tc: [0, 0], color: [130, 12, 253, 0] },
	{ pos: [-52, 69, 34], flag: 0, tc: [0, 0], color: [253, 242, 126, 0] },
	{ pos: [-50, 68, -65], flag: 0, tc: [0, 0], color: [2, 242, 130, 0] },
	{ pos: [-52, 69, 34], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [108, 12, -55], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [-50, 68, -65], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
	{ pos: [106, 13, 33], flag: 0, tc: [0, 0], color: [41, 119, 0, 0] },
]

export const mario_low_poly_right_foot_dl = [
	Gbi.gsSPVertex(mario_low_poly_right_foot_dl_vertex, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 5, 0x0, 5, 6, 4, 0x0),
	...Gbi.gsSP2Triangles(1, 0, 4, 0x0, 7, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(6, 8, 4, 0x0, 9, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(8, 1, 4, 0x0, 9, 5, 3, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_right_foot = (customData) => {
	return [
		Gbi.gsSPLight(mario_brown1_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown1_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_right_foot_dl),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
		Gbi.gsDPSetEnvColor(255, 255, 255, 255),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_metal_low_poly_right_foot = [
	Gbi.gsSPDisplayList(mario_low_poly_right_foot_dl),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

const mario_seg4_vertex_04017B58 = [
	{ pos: [-28, 41, -88], flag: 0, tc: [-396, 1646], color: [183, 49, 165, 255] },
	{ pos: [0, 98, 0], flag: 0, tc: [1968, 722], color: [240, 125, 0, 255] },
	{ pos: [35, 64, -82], flag: 0, tc: [-390, 132], color: [41, 75, 163, 255] },
	{ pos: [39, 90, 0], flag: 0, tc: [1698, -280], color: [74, 103, 0, 255] },
	{ pos: [-28, 41, 89], flag: 0, tc: [1610, 1512], color: [209, 55, 103, 255] },
	{ pos: [35, 64, 83], flag: 0, tc: [1070, -68], color: [41, 75, 93, 255] },
	{ pos: [0, 98, 0], flag: 0, tc: [-1064, 968], color: [240, 125, 0, 255] },
	{ pos: [39, 90, 0], flag: 0, tc: [-1146, -124], color: [74, 103, 0, 255] },
]

const mario_seg4_vertex_04017BD8 = [
	{ pos: [-28, -71, 81], flag: 0, tc: [0, 0], color: [154, 189, 32, 255] },
	{ pos: [-28, 41, -88], flag: 0, tc: [0, 0], color: [183, 49, 165, 255] },
	{ pos: [-28, -71, -80], flag: 0, tc: [0, 0], color: [183, 181, 186, 255] },
	{ pos: [39, -79, -73], flag: 0, tc: [0, 0], color: [39, 179, 164, 255] },
	{ pos: [-28, 41, 89], flag: 0, tc: [0, 0], color: [209, 55, 103, 255] },
	{ pos: [-28, 89, 0], flag: 0, tc: [0, 0], color: [151, 70, 0, 255] },
	{ pos: [39, -79, 74], flag: 0, tc: [0, 0], color: [55, 186, 89, 255] },
	{ pos: [35, 64, 83], flag: 0, tc: [0, 0], color: [41, 75, 93, 255] },
	{ pos: [0, 98, 0], flag: 0, tc: [0, 0], color: [240, 125, 0, 255] },
	{ pos: [35, 64, -82], flag: 0, tc: [0, 0], color: [41, 75, 163, 255] },
	{ pos: [89, -45, -42], flag: 0, tc: [0, 0], color: [112, 208, 223, 255] },
	{ pos: [89, -45, 43], flag: 0, tc: [0, 0], color: [117, 228, 40, 255] },
	{ pos: [74, 26, -59], flag: 0, tc: [0, 0], color: [97, 37, 185, 255] },
	{ pos: [39, 90, 0], flag: 0, tc: [0, 0], color: [74, 103, 0, 255] },
	{ pos: [74, 26, 60], flag: 0, tc: [0, 0], color: [97, 37, 71, 255] },
]

const mario_seg4_vertex_04017CC8 = [
	{ pos: [74, 26, 60], flag: 0, tc: [0, 0], color: [97, 37, 71, 255] },
	{ pos: [87, 42, 0], flag: 0, tc: [0, 0], color: [118, 45, 0, 255] },
	{ pos: [39, 90, 0], flag: 0, tc: [0, 0], color: [74, 103, 0, 255] },
	{ pos: [39, -79, -73], flag: 0, tc: [0, 0], color: [39, 179, 164, 255] },
	{ pos: [35, 64, -82], flag: 0, tc: [0, 0], color: [41, 75, 163, 255] },
	{ pos: [74, 26, -59], flag: 0, tc: [0, 0], color: [97, 37, 185, 255] },
	{ pos: [89, -45, -42], flag: 0, tc: [0, 0], color: [112, 208, 223, 255] },
	{ pos: [39, -79, 74], flag: 0, tc: [0, 0], color: [55, 186, 89, 255] },
	{ pos: [89, -45, 43], flag: 0, tc: [0, 0], color: [117, 228, 40, 255] },
	{ pos: [35, 64, 83], flag: 0, tc: [0, 0], color: [41, 75, 93, 255] },
]

export const mario_low_poly_yellow_button_dl = [
	Gbi.gsSPVertex(mario_seg4_vertex_04017B58, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 2, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 6, 5, 7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_pants_overalls_shared_dl = [
	Gbi.gsSPVertex(mario_seg4_vertex_04017BD8, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 5, 0x0, 3, 6, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 0, 6, 0x0, 0, 5, 1, 0x0),
	...Gbi.gsSP2Triangles(7, 4, 6, 0x0, 5, 4, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 1, 5, 0x0, 3, 1, 9, 0x0),
	...Gbi.gsSP2Triangles(3, 2, 1, 0x0, 6, 3, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 6, 0x0, 12, 9, 13, 0x0),
	Gbi.gsSP1Triangle(13, 7, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_tshirt_shared_dl = [
	Gbi.gsSPVertex(mario_seg4_vertex_04017CC8, 10, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 3, 0x0, 2, 1, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 1, 0x0, 7, 8, 0, 0x0),
	...Gbi.gsSP2Triangles(7, 0, 9, 0x0, 8, 6, 1, 0x0),
	Gbi.gsSP1Triangle(1, 0, 8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_torso_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_low_poly_pants_overalls_shared_dl),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_shirt_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_tshirt_shared_dl),
		Gbi.gsSPLight(mario_hat_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_hat_lights_group(customData).a, 2),
		Gbi.gsSPEndDisplayList(),
	]
}


export const mario_low_poly_torso = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_yellow_button),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_yellow_button_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_torso_dl),
	Gbi.gsSPEndDisplayList(),
]

export const mario_metal_low_poly_torso = [
	Gbi.gsSPDisplayList(mario_low_poly_yellow_button_dl),
	Gbi.gsSPDisplayList(mario_low_poly_pants_overalls_shared_dl),
	Gbi.gsSPDisplayList(mario_low_poly_tshirt_shared_dl),
	Gbi.gsSPEndDisplayList(),
]

const mario_low_poly_mario_m_logo_dl_vertex = [
	{ pos: [272, 48, 53], flag: 0, tc: [904, 0], color: [66, 81, 71, 255] },
	{ pos: [174, 79, -9], flag: 0, tc: [452, 816], color: [81, 97, 250, 255] },
	{ pos: [146, 27, 92], flag: 0, tc: [1238, 962], color: [3, 58, 112, 255] },
	{ pos: [272, 48, -52], flag: 0, tc: [-2, 0], color: [98, 39, 186, 255] },
	{ pos: [146, 27, -91], flag: 0, tc: [-334, 962], color: [3, 57, 143, 255] },
]

const mario_low_poly_eyes_cap_on_dl_vertex = [
	{ pos: [146, 27, 92], flag: 0, tc: [1316, 212], color: [3, 58, 112, 255] },
	{ pos: [168, 79, 0], flag: 0, tc: [458, 68], color: [217, 120, 0, 255] },
	{ pos: [88, 101, 33], flag: 0, tc: [762, 990], color: [56, 85, 75, 255] },
	{ pos: [88, 101, -32], flag: 0, tc: [154, 990], color: [30, 93, 177, 255] },
	{ pos: [146, 27, -91], flag: 0, tc: [-398, 212], color: [3, 57, 143, 255] },
]

const mario_low_poly_mustache_cap_on_dl_vertex = [
	{ pos: [88, 101, -32], flag: 0, tc: [398, 214], color: [30, 93, 177, 255] },
	{ pos: [146, 27, -91], flag: 0, tc: [1408, -550], color: [3, 57, 143, 255] },
	{ pos: [34, 39, -98], flag: 0, tc: [1306, 732], color: [205, 64, 160, 255] },
	{ pos: [44, 113, 0], flag: 0, tc: [10, 800], color: [156, 77, 0, 255] },
	{ pos: [-5, 58, 0], flag: 0, tc: [300, 1456], color: [136, 40, 0, 255] },
	{ pos: [88, 101, 33], flag: 0, tc: [294, 258], color: [56, 85, 75, 255] },
	{ pos: [44, 113, 0], flag: 0, tc: [34, 840], color: [156, 77, 0, 255] },
	{ pos: [34, 39, 99], flag: 0, tc: [1314, 634], color: [205, 64, 96, 255] },
	{ pos: [146, 27, 92], flag: 0, tc: [1132, -556], color: [3, 58, 112, 255] },
	{ pos: [-5, 58, 0], flag: 0, tc: [470, 1412], color: [136, 40, 0, 255] },
]

const mario_low_poly_face_cap_dl_vertex = [
	{ pos: [272, 48, -52], flag: 0, tc: [0, 0], color: [98, 39, 186, 255] },
	{ pos: [272, 48, 53], flag: 0, tc: [0, 0], color: [66, 81, 71, 255] },
	{ pos: [149, -87, 138], flag: 0, tc: [0, 0], color: [67, 182, 77, 255] },
	{ pos: [146, 27, -91], flag: 0, tc: [0, 0], color: [3, 57, 143, 255] },
	{ pos: [149, -87, -137], flag: 0, tc: [0, 0], color: [51, 194, 159, 255] },
	{ pos: [146, 27, 92], flag: 0, tc: [0, 0], color: [3, 58, 112, 255] },
	{ pos: [58, -114, 81], flag: 0, tc: [0, 0], color: [186, 173, 64, 255] },
	{ pos: [98, -165, 0], flag: 0, tc: [0, 0], color: [253, 130, 0, 255] },
	{ pos: [58, -114, -80], flag: 0, tc: [0, 0], color: [188, 184, 178, 255] },
	{ pos: [168, 79, 0], flag: 0, tc: [0, 0], color: [217, 120, 0, 255] },
	{ pos: [175, 154, 0], flag: 0, tc: [0, 0], color: [225, 108, 198, 255] },
	{ pos: [174, 79, -9], flag: 0, tc: [0, 0], color: [81, 97, 250, 255] },
]

const mario_low_poly_face_part_cap_on_dl_vertex = [
	{ pos: [94, 146, 33], flag: 0, tc: [0, 0], color: [255, 68, 107, 255] },
	{ pos: [50, 153, 0], flag: 0, tc: [0, 0], color: [173, 95, 0, 255] },
	{ pos: [44, 113, 0], flag: 0, tc: [0, 0], color: [156, 77, 0, 255] },
	{ pos: [88, 101, 33], flag: 0, tc: [0, 0], color: [56, 85, 75, 255] },
	{ pos: [94, 146, -32], flag: 0, tc: [0, 0], color: [59, 53, 158, 255] },
	{ pos: [88, 101, -32], flag: 0, tc: [0, 0], color: [30, 93, 177, 255] },
	{ pos: [34, 39, 99], flag: 0, tc: [0, 0], color: [205, 64, 96, 255] },
	{ pos: [-5, 58, 0], flag: 0, tc: [0, 0], color: [136, 40, 0, 255] },
	{ pos: [7, -85, 79], flag: 0, tc: [0, 0], color: [170, 220, 84, 255] },
	{ pos: [146, 27, 92], flag: 0, tc: [0, 0], color: [3, 58, 112, 255] },
	{ pos: [7, -85, -78], flag: 0, tc: [0, 0], color: [169, 199, 185, 255] },
	{ pos: [34, 39, -98], flag: 0, tc: [0, 0], color: [205, 64, 160, 255] },
	{ pos: [146, 27, -91], flag: 0, tc: [0, 0], color: [3, 57, 143, 255] },
]

const mario_low_poly_face_back_hair_cap_on_dl_vertex = [
	{ pos: [58, -114, 81], flag: 0, tc: [0, 0], color: [186, 173, 64, 255] },
	{ pos: [7, -85, 79], flag: 0, tc: [0, 0], color: [170, 220, 84, 255] },
	{ pos: [7, -85, -78], flag: 0, tc: [0, 0], color: [169, 199, 185, 255] },
	{ pos: [58, -114, -80], flag: 0, tc: [0, 0], color: [188, 184, 178, 255] },
	{ pos: [146, 27, 92], flag: 0, tc: [0, 0], color: [3, 58, 112, 255] },
	{ pos: [146, 27, -91], flag: 0, tc: [0, 0], color: [3, 57, 143, 255] },
]

export const mario_low_poly_mario_m_logo_dl = [
	Gbi.gsSPVertex(mario_low_poly_mario_m_logo_dl_vertex, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	Gbi.gsSP1Triangle(3, 1, 0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_eyes_cap_on_dl = [
	Gbi.gsSPVertex(mario_low_poly_eyes_cap_on_dl_vertex, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 4, 0x0),
	Gbi.gsSP1Triangle(3, 2, 1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_mustache_cap_on_dl = [
	Gbi.gsSPVertex(mario_low_poly_mustache_cap_on_dl_vertex, 10, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(2, 4, 3, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 5, 0x0, 6, 9, 7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_face_part_cap_on_dl = [
	Gbi.gsSPVertex(mario_low_poly_face_part_cap_on_dl_vertex, 13, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 4, 0x0, 2, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 1, 0, 0x0, 4, 0, 3, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 3, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 6, 8, 0x0, 8, 7, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 11, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_face_cap_dl = [
	Gbi.gsSPVertex(mario_low_poly_face_cap_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 0, 2, 0x0, 2, 1, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 2, 5, 0x0, 6, 7, 2, 0x0),
	...Gbi.gsSP2Triangles(7, 4, 2, 0x0, 3, 4, 8, 0x0),
	...Gbi.gsSP2Triangles(4, 7, 8, 0x0, 9, 10, 3, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 3, 0x0, 8, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(10, 5, 11, 0x0, 10, 9, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_face_back_hair_cap_on_dl = [
	Gbi.gsSPVertex(mario_low_poly_face_back_hair_cap_on_dl_vertex, 6, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 1, 0, 0x0, 3, 2, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_face_cap_on_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_low_poly_face_part_cap_on_dl),
		Gbi.gsSPLight(mario_hat_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_hat_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_face_cap_dl),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_face_back_hair_cap_on_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_low_poly_cap_on_eyes_front = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_front),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_low_poly_cap_on_eyes_half_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_half_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_low_poly_cap_on_eyes_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

/*export const mario_low_poly_cap_on_eyes_right = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_right),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_cap_on_eyes_left = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_left),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
	Gbi.gsSPEndDisplayList(),
]*/

/*export const mario_low_poly_cap_on_eyes_up = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_up),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
	Gbi.gsSPEndDisplayList(),
]*/

/*export const mario_low_poly_cap_on_eyes_down = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_down),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
	Gbi.gsSPEndDisplayList(),
]*/

/*export const mario_low_poly_cap_on_eyes_dead = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_dead),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_on_dl),
	Gbi.gsSPEndDisplayList(),
]*/

// export const mario_metal_low_poly_cap_on = [
// 	Gbi.gsSPDisplayList(mario_low_poly_mario_m_logo_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_eyes_cap_on_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_on_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_face_part_cap_on_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_face_cap_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_face_back_hair_cap_on_dl),
// 	Gbi.gsSPEndDisplayList(),
// ]

const mario_low_poly_mario_eyes_cap_off_dl_vertex = [
 	{ pos: [146, 27, 92], flag: 0, tc: [1316, 212], color: [22, 37, 119, 255] },
 	{ pos: [168, 79, 0], flag: 0, tc: [458, 68], color: [39, 120, 0, 255] },
 	{ pos: [88, 101, 33], flag: 0, tc: [762, 990], color: [56, 85, 75, 255] },
 	{ pos: [88, 101, -32], flag: 0, tc: [154, 990], color: [30, 93, 177, 255] },
 	{ pos: [146, 27, -91], flag: 0, tc: [-398, 212], color: [20, 38, 137, 255] },
 ]

const mario_low_poly_mustache_cap_off_dl_vertex = [
 	{ pos: [34, 39, -98], flag: 0, tc: [1306, 732], color: [205, 64, 160, 255] },
 	{ pos: [44, 113, 0], flag: 0, tc: [10, 800], color: [156, 77, 0, 255] },
 	{ pos: [88, 101, -32], flag: 0, tc: [398, 214], color: [30, 93, 177, 255] },
 	{ pos: [-5, 58, 0], flag: 0, tc: [300, 1456], color: [136, 40, 0, 255] },
 	{ pos: [146, 27, -91], flag: 0, tc: [1408, -550], color: [20, 38, 137, 255] },
 	{ pos: [88, 101, 33], flag: 0, tc: [294, 258], color: [56, 85, 75, 255] },
 	{ pos: [44, 113, 0], flag: 0, tc: [34, 840], color: [156, 77, 0, 255] },
 	{ pos: [34, 39, 99], flag: 0, tc: [1314, 634], color: [205, 64, 96, 255] },
 	{ pos: [-5, 58, 0], flag: 0, tc: [470, 1412], color: [136, 40, 0, 255] },
 	{ pos: [146, 27, 92], flag: 0, tc: [1132, -556], color: [22, 37, 119, 255] },
]

const mario_low_poly_face_part_cap_off_dl_vertex = [
 	{ pos: [44, 113, 0], flag: 0, tc: [0, 0], color: [156, 77, 0, 255] },
 	{ pos: [94, 146, -32], flag: 0, tc: [0, 0], color: [59, 53, 158, 255] },
 	{ pos: [88, 101, -32], flag: 0, tc: [0, 0], color: [30, 93, 177, 255] },
 	{ pos: [50, 153, 0], flag: 0, tc: [0, 0], color: [173, 95, 0, 255] },
 	{ pos: [88, 101, 33], flag: 0, tc: [0, 0], color: [56, 85, 75, 255] },
 	{ pos: [94, 146, 33], flag: 0, tc: [0, 0], color: [255, 68, 107, 255] },
 	{ pos: [146, 27, 92], flag: 0, tc: [0, 0], color: [22, 37, 119, 255] },
 	{ pos: [34, 39, 99], flag: 0, tc: [0, 0], color: [205, 64, 96, 255] },
 	{ pos: [7, -85, 79], flag: 0, tc: [0, 0], color: [170, 220, 84, 255] },
 	{ pos: [-5, 58, 0], flag: 0, tc: [0, 0], color: [136, 40, 0, 255] },
 	{ pos: [7, -85, -78], flag: 0, tc: [0, 0], color: [169, 199, 185, 255] },
 	{ pos: [34, 39, -98], flag: 0, tc: [0, 0], color: [205, 64, 160, 255] },
 	{ pos: [146, 27, -91], flag: 0, tc: [0, 0], color: [20, 38, 137, 255] },
]

const mario_low_poly_face_hair_cap_off_dl_vertex = [
 	{ pos: [58, -114, 81], flag: 0, tc: [0, 0], color: [211, 155, 61, 255] },
 	{ pos: [7, -85, 79], flag: 0, tc: [0, 0], color: [170, 220, 84, 255] },
 	{ pos: [7, -85, -78], flag: 0, tc: [0, 0], color: [169, 199, 185, 255] },
 	{ pos: [146, 27, 92], flag: 0, tc: [0, 0], color: [22, 37, 119, 255] },
 	{ pos: [167, -121, 77], flag: 0, tc: [0, 0], color: [60, 173, 74, 255] },
 	{ pos: [58, -114, -80], flag: 0, tc: [0, 0], color: [216, 163, 181, 255] },
 	{ pos: [90, -136, 0], flag: 0, tc: [0, 0], color: [240, 131, 0, 255] },
 	{ pos: [146, 27, -91], flag: 0, tc: [0, 0], color: [20, 38, 137, 255] },
 	{ pos: [167, -121, -81], flag: 0, tc: [0, 0], color: [58, 173, 181, 255] },
 	{ pos: [218, 48, -52], flag: 0, tc: [0, 0], color: [95, 59, 198, 255] },
 	{ pos: [168, 79, 0], flag: 0, tc: [0, 0], color: [39, 120, 0, 255] },
 	{ pos: [192, -28, -80], flag: 0, tc: [0, 0], color: [85, 247, 163, 255] },
 	{ pos: [223, -38, -1], flag: 0, tc: [0, 0], color: [123, 226, 0, 255] },
 	{ pos: [218, 48, 53], flag: 0, tc: [0, 0], color: [96, 57, 58, 255] },
 	{ pos: [192, -28, 78], flag: 0, tc: [0, 0], color: [86, 244, 92, 255] },
]

export const mario_low_poly_mario_eyes_cap_off_dl = [
 	Gbi.gsSPVertex(mario_low_poly_mario_eyes_cap_off_dl_vertex, 5, 0),
 	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 4, 0x0),
 	Gbi.gsSP1Triangle(3, 2, 1, 0x0),
 	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_mustache_cap_off_dl = [
 	Gbi.gsSPVertex(mario_low_poly_mustache_cap_off_dl_vertex, 10, 0),
 	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
 	...Gbi.gsSP2Triangles(2, 4, 0, 0x0, 5, 6, 7, 0x0),
 	...Gbi.gsSP2Triangles(6, 8, 7, 0x0, 7, 9, 5, 0x0),
 	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_face_part_cap_off_dl = [
 	Gbi.gsSPVertex(mario_low_poly_face_part_cap_off_dl_vertex, 13, 0),
 	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
 	...Gbi.gsSP2Triangles(4, 5, 0, 0x0, 5, 3, 0, 0x0),
 	...Gbi.gsSP2Triangles(1, 3, 5, 0x0, 2, 1, 4, 0x0),
 	...Gbi.gsSP2Triangles(1, 5, 4, 0x0, 6, 7, 8, 0x0),
 	...Gbi.gsSP2Triangles(7, 9, 8, 0x0, 8, 9, 10, 0x0),
 	...Gbi.gsSP2Triangles(10, 9, 11, 0x0, 10, 11, 12, 0x0),
 	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_face_hair_cap_off_dl = [
 	Gbi.gsSPVertex(mario_low_poly_face_hair_cap_off_dl_vertex, 15, 0),
 	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
 	...Gbi.gsSP2Triangles(0, 4, 3, 0x0, 0, 2, 5, 0x0),
 	...Gbi.gsSP2Triangles(5, 6, 0, 0x0, 0, 6, 4, 0x0),
 	...Gbi.gsSP2Triangles(5, 2, 7, 0x0, 7, 8, 5, 0x0),
 	...Gbi.gsSP2Triangles(8, 6, 5, 0x0, 9, 7, 10, 0x0),
 	...Gbi.gsSP2Triangles(7, 9, 11, 0x0, 7, 11, 8, 0x0),
 	...Gbi.gsSP2Triangles(6, 8, 4, 0x0, 8, 11, 12, 0x0),
 	...Gbi.gsSP2Triangles(4, 8, 12, 0x0, 11, 9, 12, 0x0),
 	...Gbi.gsSP2Triangles(13, 14, 12, 0x0, 14, 4, 12, 0x0),
 	...Gbi.gsSP2Triangles(4, 14, 3, 0x0, 13, 10, 3, 0x0),
 	...Gbi.gsSP2Triangles(14, 13, 3, 0x0, 9, 10, 13, 0x0),
 	Gbi.gsSP1Triangle(9, 13, 12, 0x0),
 	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_face_cap_off_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_low_poly_face_part_cap_off_dl),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_face_hair_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_low_poly_cap_off_eyes_front = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_front),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_low_poly_cap_off_eyes_half_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_half_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_low_poly_cap_off_eyes_closed = (customData) => {
	return [
		Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_closed),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
		Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
		Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
		Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
		Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
		Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

/*export const mario_low_poly_cap_off_eyes_right = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_right),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
	Gbi.gsSPEndDisplayList(),
]
*/
/*export const mario_low_poly_cap_off_eyes_left = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_left),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
	Gbi.gsSPEndDisplayList(),
]
*/
/*export const mario_low_poly_cap_off_eyes_up = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_up),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
	Gbi.gsSPEndDisplayList(),
]
*/
/*export const mario_low_poly_cap_off_eyes_down = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_down),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
	Gbi.gsSPEndDisplayList(),
]

export const mario_low_poly_cap_off_eyes_dead = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_eyes_dead),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_beige_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_mustache),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_low_poly_face_cap_off_dl),
	Gbi.gsSPEndDisplayList(),
]
*/
// export const mario_metal_low_poly_cap_off = [
// 	Gbi.gsSPDisplayList(mario_low_poly_mario_eyes_cap_off_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_mustache_cap_off_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_face_part_cap_off_dl),
// 	Gbi.gsSPDisplayList(mario_low_poly_face_hair_cap_off_dl),
// 	Gbi.gsSPEndDisplayList(),
// ]

const mario_left_hand_open_shared_dl_vertex_group1 = [
	{ pos: [121, 73, -21], flag: 0, tc: [0, 0], color: [71, 96, 43, 0] },
	{ pos: [70, 89, -20], flag: 0, tc: [0, 0], color: [236, 124, 246, 0] },
	{ pos: [77, 41, 21], flag: 0, tc: [0, 0], color: [29, 42, 116, 0] },
	{ pos: [141, 34, -7], flag: 0, tc: [0, 0], color: [119, 12, 41, 0] },
	{ pos: [78, 59, -34], flag: 0, tc: [0, 0], color: [254, 11, 130, 0] },
	{ pos: [119, 70, -42], flag: 0, tc: [0, 0], color: [61, 68, 169, 0] },
	{ pos: [133, 28, -40], flag: 0, tc: [0, 0], color: [69, 201, 166, 0] },
	{ pos: [83, -17, 10], flag: 0, tc: [0, 0], color: [77, 189, 74, 0] },
	{ pos: [26, -32, 6], flag: 0, tc: [0, 0], color: [52, 166, 71, 0] },
	{ pos: [45, -34, 10], flag: 0, tc: [0, 0], color: [254, 154, 74, 0] },
	{ pos: [26, 16, 28], flag: 0, tc: [0, 0], color: [218, 12, 120, 0] },
	{ pos: [41, -37, -36], flag: 0, tc: [0, 0], color: [216, 155, 191, 0] },
	{ pos: [20, -27, -27], flag: 0, tc: [0, 0], color: [9, 191, 148, 0] },
	{ pos: [25, -1, -44], flag: 0, tc: [0, 0], color: [228, 224, 137, 0] },
]

const mario_left_hand_open_shared_dl_vertex_group2 = [
	{ pos: [-3, 35, -9], flag: 0, tc: [0, 0], color: [205, 114, 19, 0] },
	{ pos: [6, 53, -9], flag: 0, tc: [0, 0], color: [175, 97, 0, 0] },
	{ pos: [11, 29, -52], flag: 0, tc: [0, 0], color: [186, 42, 160, 0] },
	{ pos: [26, 16, 28], flag: 0, tc: [0, 0], color: [218, 12, 120, 0] },
	{ pos: [1, -33, -23], flag: 0, tc: [0, 0], color: [156, 187, 224, 0] },
	{ pos: [6, -38, 7], flag: 0, tc: [0, 0], color: [174, 171, 43, 0] },
	{ pos: [-6, -3, 17], flag: 0, tc: [0, 0], color: [144, 218, 45, 0] },
	{ pos: [2, 3, 26], flag: 0, tc: [0, 0], color: [245, 23, 124, 0] },
	{ pos: [20, -46, 12], flag: 0, tc: [0, 0], color: [38, 158, 69, 0] },
	{ pos: [26, -32, 6], flag: 0, tc: [0, 0], color: [52, 166, 71, 0] },
	{ pos: [-17, 40, -8], flag: 0, tc: [0, 0], color: [188, 104, 22, 0] },
	{ pos: [-10, 14, -43], flag: 0, tc: [0, 0], color: [211, 25, 141, 0] },
	{ pos: [20, -27, -27], flag: 0, tc: [0, 0], color: [9, 191, 148, 0] },
	{ pos: [13, -39, -31], flag: 0, tc: [0, 0], color: [24, 154, 186, 0] },
	{ pos: [-20, 22, -7], flag: 0, tc: [0, 0], color: [131, 6, 20, 0] },
	{ pos: [70, 89, -20], flag: 0, tc: [0, 0], color: [236, 124, 246, 0] },
]

const mario_left_hand_open_shared_dl_vertex_group3 = [
	{ pos: [45, -34, 10], flag: 0, tc: [0, 0], color: [254, 154, 74, 0] },
	{ pos: [83, -17, 10], flag: 0, tc: [0, 0], color: [77, 189, 74, 0] },
	{ pos: [26, 16, 28], flag: 0, tc: [0, 0], color: [218, 12, 120, 0] },
	{ pos: [89, -47, -37], flag: 0, tc: [0, 0], color: [86, 170, 223, 0] },
	{ pos: [76, -18, -48], flag: 0, tc: [0, 0], color: [39, 10, 136, 0] },
	{ pos: [89, -6, -27], flag: 0, tc: [0, 0], color: [92, 245, 171, 0] },
	{ pos: [6, 53, -9], flag: 0, tc: [0, 0], color: [175, 97, 0, 0] },
	{ pos: [26, 41, -41], flag: 0, tc: [0, 0], color: [5, 52, 141, 0] },
	{ pos: [11, 29, -52], flag: 0, tc: [0, 0], color: [186, 42, 160, 0] },
	{ pos: [141, 34, -7], flag: 0, tc: [0, 0], color: [119, 12, 41, 0] },
	{ pos: [77, 41, 21], flag: 0, tc: [0, 0], color: [29, 42, 116, 0] },
	{ pos: [133, 28, -40], flag: 0, tc: [0, 0], color: [69, 201, 166, 0] },
	{ pos: [69, 10, -36], flag: 0, tc: [0, 0], color: [53, 28, 145, 0] },
	{ pos: [78, 59, -34], flag: 0, tc: [0, 0], color: [254, 11, 130, 0] },
	{ pos: [121, 73, -21], flag: 0, tc: [0, 0], color: [71, 96, 43, 0] },
	{ pos: [119, 70, -42], flag: 0, tc: [0, 0], color: [61, 68, 169, 0] },
]

const mario_left_hand_open_shared_dl_vertex_group4 = [
	{ pos: [25, -1, -44], flag: 0, tc: [0, 0], color: [228, 224, 137, 0] },
	{ pos: [11, 29, -52], flag: 0, tc: [0, 0], color: [186, 42, 160, 0] },
	{ pos: [26, 41, -41], flag: 0, tc: [0, 0], color: [5, 52, 141, 0] },
	{ pos: [78, 59, -34], flag: 0, tc: [0, 0], color: [254, 11, 130, 0] },
	{ pos: [69, 10, -36], flag: 0, tc: [0, 0], color: [53, 28, 145, 0] },
	{ pos: [89, -47, -37], flag: 0, tc: [0, 0], color: [86, 170, 223, 0] },
	{ pos: [41, -37, -36], flag: 0, tc: [0, 0], color: [216, 155, 191, 0] },
	{ pos: [76, -18, -48], flag: 0, tc: [0, 0], color: [39, 10, 136, 0] },
	{ pos: [45, -34, 10], flag: 0, tc: [0, 0], color: [254, 154, 74, 0] },
	{ pos: [89, -6, -27], flag: 0, tc: [0, 0], color: [92, 245, 171, 0] },
	{ pos: [83, -17, 10], flag: 0, tc: [0, 0], color: [77, 189, 74, 0] },
	{ pos: [70, 89, -20], flag: 0, tc: [0, 0], color: [236, 124, 246, 0] },
	{ pos: [6, 53, -9], flag: 0, tc: [0, 0], color: [175, 97, 0, 0] },
	{ pos: [133, 28, -40], flag: 0, tc: [0, 0], color: [69, 201, 166, 0] },
	{ pos: [77, 41, 21], flag: 0, tc: [0, 0], color: [29, 42, 116, 0] },
	{ pos: [26, 16, 28], flag: 0, tc: [0, 0], color: [218, 12, 120, 0] },
]

const mario_left_hand_open_shared_dl_vertex_group5 = [
	{ pos: [6, -38, 7], flag: 0, tc: [0, 0], color: [174, 171, 43, 0] },
	{ pos: [1, -33, -23], flag: 0, tc: [0, 0], color: [156, 187, 224, 0] },
	{ pos: [13, -39, -31], flag: 0, tc: [0, 0], color: [24, 154, 186, 0] },
	{ pos: [-15, 4, -32], flag: 0, tc: [0, 0], color: [137, 221, 231, 0] },
	{ pos: [-10, 14, -43], flag: 0, tc: [0, 0], color: [211, 25, 141, 0] },
	{ pos: [-20, 22, -7], flag: 0, tc: [0, 0], color: [131, 6, 20, 0] },
	{ pos: [-6, -3, 17], flag: 0, tc: [0, 0], color: [144, 218, 45, 0] },
	{ pos: [2, 3, 26], flag: 0, tc: [0, 0], color: [245, 23, 124, 0] },
	{ pos: [20, -27, -27], flag: 0, tc: [0, 0], color: [9, 191, 148, 0] },
	{ pos: [26, -32, 6], flag: 0, tc: [0, 0], color: [52, 166, 71, 0] },
	{ pos: [1, 15, -37], flag: 0, tc: [0, 0], color: [210, 9, 139, 0] },
	{ pos: [-3, 35, -9], flag: 0, tc: [0, 0], color: [205, 114, 19, 0] },
	{ pos: [11, 5, 17], flag: 0, tc: [0, 0], color: [255, 27, 124, 0] },
	{ pos: [26, 16, 28], flag: 0, tc: [0, 0], color: [218, 12, 120, 0] },
	{ pos: [11, 29, -52], flag: 0, tc: [0, 0], color: [186, 42, 160, 0] },
	{ pos: [25, -1, -44], flag: 0, tc: [0, 0], color: [228, 224, 137, 0] },
]

const mario_left_hand_open_shared_dl_vertex_group6 = [
	{ pos: [26, -32, 6], flag: 0, tc: [0, 0], color: [52, 166, 71, 0] },
	{ pos: [20, -27, -27], flag: 0, tc: [0, 0], color: [9, 191, 148, 0] },
	{ pos: [41, -37, -36], flag: 0, tc: [0, 0], color: [216, 155, 191, 0] },
	{ pos: [26, 16, 28], flag: 0, tc: [0, 0], color: [218, 12, 120, 0] },
	{ pos: [11, 5, 17], flag: 0, tc: [0, 0], color: [255, 27, 124, 0] },
]

export const mario_left_hand_open_shared_dl = [
	Gbi.gsSPVertex(mario_left_hand_open_shared_dl_vertex_group1, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 6, 3, 7, 0x0),
	...Gbi.gsSP2Triangles(1, 0, 5, 0x0, 5, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 6, 0x0, 8, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(8, 11, 9, 0x0, 12, 13, 11, 0x0),
	Gbi.gsSPVertex(mario_left_hand_open_shared_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(0, 10, 7, 0x0, 11, 10, 0, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 11, 0x0, 9, 8, 13, 0x0),
	...Gbi.gsSP2Triangles(7, 5, 8, 0x0, 10, 14, 7, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 10, 0x0, 13, 4, 11, 0x0),
	...Gbi.gsSP2Triangles(8, 5, 13, 0x0, 3, 15, 1, 0x0),
	Gbi.gsSPVertex(mario_left_hand_open_shared_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 3, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(1, 9, 10, 0x0, 5, 11, 1, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 5, 0x0, 14, 9, 15, 0x0),
	Gbi.gsSP1Triangle(4, 7, 12, 0x0),
	Gbi.gsSPVertex(mario_left_hand_open_shared_dl_vertex_group4, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 7, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(8, 6, 5, 0x0, 5, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 3, 2, 0x0, 2, 12, 11, 0x0),
	...Gbi.gsSP2Triangles(3, 13, 9, 0x0, 6, 0, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 4, 9, 0x0, 10, 14, 15, 0x0),
	Gbi.gsSP1Triangle(15, 14, 11, 0x0),
	Gbi.gsSPVertex(mario_left_hand_open_shared_dl_vertex_group5, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 5, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 6, 0, 0x0, 2, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(4, 10, 8, 0x0, 11, 10, 4, 0x0),
	...Gbi.gsSP2Triangles(7, 12, 11, 0x0, 9, 12, 7, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 1, 0x0, 6, 5, 3, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 14, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(8, 10, 15, 0x0, 10, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_left_hand_open_shared_dl_vertex_group6, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_left_hand_open = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_left_hand_open_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_right_hand_open_dl_vertex_group1 = [
	{ pos: [81, 37, -28], flag: 0, tc: [0, 0], color: [24, 32, 136, 0] },
	{ pos: [76, 88, 9], flag: 0, tc: [0, 0], color: [239, 125, 0, 0] },
	{ pos: [125, 71, 9], flag: 0, tc: [0, 0], color: [71, 90, 203, 0] },
	{ pos: [143, 31, -1], flag: 0, tc: [0, 0], color: [117, 6, 210, 0] },
	{ pos: [136, 28, 31], flag: 0, tc: [0, 0], color: [74, 207, 90, 0] },
	{ pos: [124, 69, 30], flag: 0, tc: [0, 0], color: [68, 73, 77, 0] },
	{ pos: [84, 59, 25], flag: 0, tc: [0, 0], color: [4, 21, 124, 0] },
	{ pos: [86, -19, -13], flag: 0, tc: [0, 0], color: [73, 182, 184, 0] },
	{ pos: [30, 13, -30], flag: 0, tc: [0, 0], color: [211, 3, 138, 0] },
	{ pos: [48, -35, -9], flag: 0, tc: [0, 0], color: [247, 148, 190, 0] },
	{ pos: [30, -32, -4], flag: 0, tc: [0, 0], color: [47, 159, 190, 0] },
	{ pos: [46, -35, 37], flag: 0, tc: [0, 0], color: [216, 162, 74, 0] },
	{ pos: [32, 2, 43], flag: 0, tc: [0, 0], color: [233, 235, 122, 0] },
	{ pos: [26, -24, 28], flag: 0, tc: [0, 0], color: [13, 200, 112, 0] },
]

const mario_right_hand_open_dl_vertex_group2 = [
	{ pos: [20, 33, 48], flag: 0, tc: [0, 0], color: [191, 50, 96, 0] },
	{ pos: [13, 53, 5], flag: 0, tc: [0, 0], color: [176, 98, 252, 0] },
	{ pos: [3, 36, 6], flag: 0, tc: [0, 0], color: [206, 113, 230, 0] },
	{ pos: [30, 13, -30], flag: 0, tc: [0, 0], color: [211, 3, 138, 0] },
	{ pos: [0, -4, -15], flag: 0, tc: [0, 0], color: [141, 218, 220, 0] },
	{ pos: [11, -38, -3], flag: 0, tc: [0, 0], color: [169, 170, 224, 0] },
	{ pos: [7, -30, 26], flag: 0, tc: [0, 0], color: [155, 192, 41, 0] },
	{ pos: [30, -32, -4], flag: 0, tc: [0, 0], color: [47, 159, 190, 0] },
	{ pos: [25, -46, -9], flag: 0, tc: [0, 0], color: [33, 151, 193, 0] },
	{ pos: [7, 1, -26], flag: 0, tc: [0, 0], color: [238, 13, 132, 0] },
	{ pos: [-9, 41, 5], flag: 0, tc: [0, 0], color: [188, 102, 229, 0] },
	{ pos: [-1, 18, 42], flag: 0, tc: [0, 0], color: [217, 35, 115, 0] },
	{ pos: [19, -36, 33], flag: 0, tc: [0, 0], color: [26, 160, 77, 0] },
	{ pos: [26, -24, 28], flag: 0, tc: [0, 0], color: [13, 200, 112, 0] },
	{ pos: [-12, 23, 6], flag: 0, tc: [0, 0], color: [131, 7, 241, 0] },
	{ pos: [76, 88, 9], flag: 0, tc: [0, 0], color: [239, 125, 0, 0] },
]

const mario_right_hand_open_dl_vertex_group3 = [
	{ pos: [30, 13, -30], flag: 0, tc: [0, 0], color: [211, 3, 138, 0] },
	{ pos: [86, -19, -13], flag: 0, tc: [0, 0], color: [73, 182, 184, 0] },
	{ pos: [48, -35, -9], flag: 0, tc: [0, 0], color: [247, 148, 190, 0] },
	{ pos: [93, -45, 36], flag: 0, tc: [0, 0], color: [87, 172, 35, 0] },
	{ pos: [93, -5, 22], flag: 0, tc: [0, 0], color: [97, 250, 80, 0] },
	{ pos: [81, -15, 45], flag: 0, tc: [0, 0], color: [47, 19, 116, 0] },
	{ pos: [20, 33, 48], flag: 0, tc: [0, 0], color: [191, 50, 96, 0] },
	{ pos: [34, 43, 36], flag: 0, tc: [0, 0], color: [12, 61, 110, 0] },
	{ pos: [13, 53, 5], flag: 0, tc: [0, 0], color: [176, 98, 252, 0] },
	{ pos: [81, 37, -28], flag: 0, tc: [0, 0], color: [24, 32, 136, 0] },
	{ pos: [143, 31, -1], flag: 0, tc: [0, 0], color: [117, 6, 210, 0] },
	{ pos: [136, 28, 31], flag: 0, tc: [0, 0], color: [74, 207, 90, 0] },
	{ pos: [84, 59, 25], flag: 0, tc: [0, 0], color: [4, 21, 124, 0] },
	{ pos: [75, 11, 32], flag: 0, tc: [0, 0], color: [60, 35, 105, 0] },
	{ pos: [124, 69, 30], flag: 0, tc: [0, 0], color: [68, 73, 77, 0] },
	{ pos: [125, 71, 9], flag: 0, tc: [0, 0], color: [71, 90, 203, 0] },
]

const mario_right_hand_open_dl_vertex_group4 = [
	{ pos: [34, 43, 36], flag: 0, tc: [0, 0], color: [12, 61, 110, 0] },
	{ pos: [20, 33, 48], flag: 0, tc: [0, 0], color: [191, 50, 96, 0] },
	{ pos: [32, 2, 43], flag: 0, tc: [0, 0], color: [233, 235, 122, 0] },
	{ pos: [75, 11, 32], flag: 0, tc: [0, 0], color: [60, 35, 105, 0] },
	{ pos: [84, 59, 25], flag: 0, tc: [0, 0], color: [4, 21, 124, 0] },
	{ pos: [81, -15, 45], flag: 0, tc: [0, 0], color: [47, 19, 116, 0] },
	{ pos: [46, -35, 37], flag: 0, tc: [0, 0], color: [216, 162, 74, 0] },
	{ pos: [93, -45, 36], flag: 0, tc: [0, 0], color: [87, 172, 35, 0] },
	{ pos: [48, -35, -9], flag: 0, tc: [0, 0], color: [247, 148, 190, 0] },
	{ pos: [86, -19, -13], flag: 0, tc: [0, 0], color: [73, 182, 184, 0] },
	{ pos: [93, -5, 22], flag: 0, tc: [0, 0], color: [97, 250, 80, 0] },
	{ pos: [76, 88, 9], flag: 0, tc: [0, 0], color: [239, 125, 0, 0] },
	{ pos: [13, 53, 5], flag: 0, tc: [0, 0], color: [176, 98, 252, 0] },
	{ pos: [136, 28, 31], flag: 0, tc: [0, 0], color: [74, 207, 90, 0] },
	{ pos: [30, 13, -30], flag: 0, tc: [0, 0], color: [211, 3, 138, 0] },
	{ pos: [81, 37, -28], flag: 0, tc: [0, 0], color: [24, 32, 136, 0] },
]

const mario_right_hand_open_dl_vertex_group5 = [
	{ pos: [19, -36, 33], flag: 0, tc: [0, 0], color: [26, 160, 77, 0] },
	{ pos: [7, -30, 26], flag: 0, tc: [0, 0], color: [155, 192, 41, 0] },
	{ pos: [11, -38, -3], flag: 0, tc: [0, 0], color: [169, 170, 224, 0] },
	{ pos: [-1, 18, 42], flag: 0, tc: [0, 0], color: [217, 35, 115, 0] },
	{ pos: [-7, 7, 32], flag: 0, tc: [0, 0], color: [138, 226, 32, 0] },
	{ pos: [-12, 23, 6], flag: 0, tc: [0, 0], color: [131, 7, 241, 0] },
	{ pos: [7, 1, -26], flag: 0, tc: [0, 0], color: [238, 13, 132, 0] },
	{ pos: [0, -4, -15], flag: 0, tc: [0, 0], color: [141, 218, 220, 0] },
	{ pos: [30, -32, -4], flag: 0, tc: [0, 0], color: [47, 159, 190, 0] },
	{ pos: [26, -24, 28], flag: 0, tc: [0, 0], color: [13, 200, 112, 0] },
	{ pos: [9, 18, 35], flag: 0, tc: [0, 0], color: [216, 19, 118, 0] },
	{ pos: [3, 36, 6], flag: 0, tc: [0, 0], color: [206, 113, 230, 0] },
	{ pos: [16, 4, -17], flag: 0, tc: [0, 0], color: [249, 17, 131, 0] },
	{ pos: [30, 13, -30], flag: 0, tc: [0, 0], color: [211, 3, 138, 0] },
	{ pos: [20, 33, 48], flag: 0, tc: [0, 0], color: [191, 50, 96, 0] },
	{ pos: [32, 2, 43], flag: 0, tc: [0, 0], color: [233, 235, 122, 0] },
]

const mario_right_hand_open_dl_vertex_group6 = [
	{ pos: [46, -35, 37], flag: 0, tc: [0, 0], color: [216, 162, 74, 0] },
	{ pos: [26, -24, 28], flag: 0, tc: [0, 0], color: [13, 200, 112, 0] },
	{ pos: [30, -32, -4], flag: 0, tc: [0, 0], color: [47, 159, 190, 0] },
	{ pos: [16, 4, -17], flag: 0, tc: [0, 0], color: [249, 17, 131, 0] },
	{ pos: [30, 13, -30], flag: 0, tc: [0, 0], color: [211, 3, 138, 0] },
]

export const mario_right_hand_open_dl = [
	Gbi.gsSPVertex(mario_right_hand_open_dl_vertex_group1, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 2, 1, 0x0, 1, 6, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 5, 0x0, 8, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(9, 11, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(mario_right_hand_open_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 2, 0x0, 2, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 12, 8, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 5, 9, 0x0, 9, 14, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 14, 11, 0x0, 11, 6, 12, 0x0),
	...Gbi.gsSP2Triangles(12, 5, 8, 0x0, 1, 15, 3, 0x0),
	Gbi.gsSPVertex(mario_right_hand_open_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 5, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 1, 0x0, 1, 11, 4, 0x0),
	...Gbi.gsSP2Triangles(4, 12, 13, 0x0, 14, 10, 15, 0x0),
	Gbi.gsSP1Triangle(13, 7, 5, 0x0),
	Gbi.gsSPVertex(mario_right_hand_open_dl_vertex_group4, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 0, 2, 5, 0x0),
	...Gbi.gsSP2Triangles(7, 6, 8, 0x0, 9, 10, 7, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 11, 0x0, 11, 12, 0, 0x0),
	...Gbi.gsSP2Triangles(10, 13, 4, 0x0, 5, 2, 6, 0x0),
	...Gbi.gsSP2Triangles(10, 3, 5, 0x0, 14, 15, 9, 0x0),
	Gbi.gsSP1Triangle(11, 15, 14, 0x0),
	Gbi.gsSPVertex(mario_right_hand_open_dl_vertex_group5, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(5, 4, 3, 0x0, 6, 7, 5, 0x0),
	...Gbi.gsSP2Triangles(2, 7, 6, 0x0, 8, 9, 0, 0x0),
	...Gbi.gsSP2Triangles(9, 10, 3, 0x0, 3, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 6, 0x0, 6, 12, 8, 0x0),
	...Gbi.gsSP2Triangles(1, 4, 7, 0x0, 4, 5, 7, 0x0),
	...Gbi.gsSP2Triangles(13, 12, 11, 0x0, 11, 10, 14, 0x0),
	...Gbi.gsSP2Triangles(15, 10, 9, 0x0, 15, 14, 10, 0x0),
	Gbi.gsSPVertex(mario_right_hand_open_dl_vertex_group6, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_open = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_hand_open_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

export const mario_metal_right_hand_open = [
	Gbi.gsSPDisplayList(mario_right_hand_open_dl),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPEndDisplayList(),
]

const mario_right_hand_cap_m_logo_dl_vertex = [
	{ pos: [131, 47, -1], flag: 0, tc: [1104, 228], color: [215, 96, 184, 255] },
	{ pos: [107, -19, -33], flag: 0, tc: [474, 32], color: [209, 14, 140, 255] },
	{ pos: [78, 11, 40], flag: 0, tc: [772, 818], color: [208, 62, 157, 255] },
	{ pos: [70, -52, 35], flag: 0, tc: [196, 800], color: [197, 222, 150, 255] },
	{ pos: [114, -92, -11], flag: 0, tc: [-148, 188], color: [196, 184, 172, 255] },
]

const mario_right_hand_cap_hand_position_dl_vertex_group1 = [
	{ pos: [1, 24, 35], flag: 0, tc: [0, 0], color: [212, 60, 102, 255] },
	{ pos: [29, 7, 48], flag: 0, tc: [0, 0], color: [195, 250, 110, 255] },
	{ pos: [29, 62, 34], flag: 0, tc: [0, 0], color: [205, 76, 87, 255] },
	{ pos: [11, 60, -3], flag: 0, tc: [0, 0], color: [171, 89, 230, 255] },
	{ pos: [56, 11, 65], flag: 0, tc: [0, 0], color: [252, 27, 123, 255] },
	{ pos: [54, 54, 44], flag: 0, tc: [0, 0], color: [31, 80, 92, 255] },
	{ pos: [58, 81, 0], flag: 0, tc: [0, 0], color: [19, 122, 232, 255] },
	{ pos: [-2, 41, 0], flag: 0, tc: [0, 0], color: [238, 113, 202, 255] },
	{ pos: [35, 9, -36], flag: 0, tc: [0, 0], color: [228, 244, 133, 255] },
	{ pos: [-13, 26, 41], flag: 0, tc: [0, 0], color: [238, 60, 110, 255] },
	{ pos: [23, -25, 35], flag: 0, tc: [0, 0], color: [4, 194, 110, 255] },
	{ pos: [75, -32, 65], flag: 0, tc: [0, 0], color: [8, 174, 96, 255] },
	{ pos: [16, 1, -22], flag: 0, tc: [0, 0], color: [4, 0, 130, 255] },
	{ pos: [4, -3, -32], flag: 0, tc: [0, 0], color: [17, 6, 131, 255] },
	{ pos: [-19, 47, -4], flag: 0, tc: [0, 0], color: [173, 84, 211, 255] },
]

const mario_right_hand_cap_hand_position_dl_vertex_group2 = [
	{ pos: [103, -25, 1], flag: 0, tc: [0, 0], color: [103, 196, 214, 255] },
	{ pos: [95, -8, 52], flag: 0, tc: [0, 0], color: [96, 6, 82, 255] },
	{ pos: [75, -32, 65], flag: 0, tc: [0, 0], color: [8, 174, 96, 255] },
	{ pos: [31, -39, 0], flag: 0, tc: [0, 0], color: [66, 163, 202, 255] },
	{ pos: [23, -25, 35], flag: 0, tc: [0, 0], color: [4, 194, 110, 255] },
	{ pos: [13, -37, 41], flag: 0, tc: [0, 0], color: [18, 177, 97, 255] },
	{ pos: [55, -43, -3], flag: 0, tc: [0, 0], color: [0, 134, 224, 255] },
	{ pos: [-13, 26, 41], flag: 0, tc: [0, 0], color: [238, 60, 110, 255] },
	{ pos: [4, -3, -32], flag: 0, tc: [0, 0], color: [17, 6, 131, 255] },
	{ pos: [16, 1, -22], flag: 0, tc: [0, 0], color: [4, 0, 130, 255] },
	{ pos: [35, 9, -36], flag: 0, tc: [0, 0], color: [228, 244, 133, 255] },
	{ pos: [24, -55, -4], flag: 0, tc: [0, 0], color: [4, 139, 209, 255] },
	{ pos: [56, 11, 65], flag: 0, tc: [0, 0], color: [252, 27, 123, 255] },
	{ pos: [-15, -12, 7], flag: 0, tc: [0, 0], color: [140, 207, 248, 255] },
	{ pos: [85, 15, 52], flag: 0, tc: [0, 0], color: [64, 48, 98, 255] },
	{ pos: [54, 54, 44], flag: 0, tc: [0, 0], color: [31, 80, 92, 255] },
]

const mario_right_hand_cap_hand_position_dl_vertex_group3 = [
	{ pos: [35, 9, -36], flag: 0, tc: [0, 0], color: [228, 244, 133, 255] },
	{ pos: [85, 30, -32], flag: 0, tc: [0, 0], color: [79, 33, 163, 255] },
	{ pos: [103, -25, 1], flag: 0, tc: [0, 0], color: [103, 196, 214, 255] },
	{ pos: [58, 81, 0], flag: 0, tc: [0, 0], color: [19, 122, 232, 255] },
	{ pos: [24, -55, -4], flag: 0, tc: [0, 0], color: [4, 139, 209, 255] },
	{ pos: [-15, -12, 7], flag: 0, tc: [0, 0], color: [140, 207, 248, 255] },
	{ pos: [4, -3, -32], flag: 0, tc: [0, 0], color: [17, 6, 131, 255] },
	{ pos: [-19, 47, -4], flag: 0, tc: [0, 0], color: [173, 84, 211, 255] },
	{ pos: [-13, 26, 41], flag: 0, tc: [0, 0], color: [238, 60, 110, 255] },
	{ pos: [13, -37, 41], flag: 0, tc: [0, 0], color: [18, 177, 97, 255] },
	{ pos: [96, 39, 24], flag: 0, tc: [0, 0], color: [107, 57, 33, 255] },
	{ pos: [54, 54, 44], flag: 0, tc: [0, 0], color: [31, 80, 92, 255] },
	{ pos: [95, -8, 52], flag: 0, tc: [0, 0], color: [96, 6, 82, 255] },
	{ pos: [85, 15, 52], flag: 0, tc: [0, 0], color: [64, 48, 98, 255] },
]

const mario_right_hand_cap_top_dl_vertex_group1 = [
	{ pos: [29, -82, 43], flag: 0, tc: [0, 0], color: [149, 189, 0, 255] },
	{ pos: [70, -52, 35], flag: 0, tc: [0, 0], color: [197, 222, 150, 255] },
	{ pos: [106, -124, 90], flag: 0, tc: [0, 0], color: [157, 178, 9, 255] },
	{ pos: [65, -53, 55], flag: 0, tc: [0, 0], color: [183, 1, 103, 255] },
	{ pos: [151, -168, 67], flag: 0, tc: [0, 0], color: [244, 135, 220, 255] },
	{ pos: [137, -137, 134], flag: 0, tc: [0, 0], color: [159, 223, 73, 255] },
	{ pos: [114, -92, -11], flag: 0, tc: [0, 0], color: [196, 184, 172, 255] },
	{ pos: [228, -121, 117], flag: 0, tc: [0, 0], color: [102, 205, 203, 255] },
	{ pos: [182, -72, -8], flag: 0, tc: [0, 0], color: [77, 217, 164, 255] },
	{ pos: [181, -167, 138], flag: 0, tc: [0, 0], color: [6, 136, 38, 255] },
	{ pos: [171, -129, 178], flag: 0, tc: [0, 0], color: [179, 209, 88, 255] },
	{ pos: [160, 65, 148], flag: 0, tc: [0, 0], color: [179, 71, 71, 255] },
	{ pos: [211, 81, 156], flag: 0, tc: [0, 0], color: [34, 108, 55, 255] },
	{ pos: [183, 100, 86], flag: 0, tc: [0, 0], color: [17, 124, 237, 255] },
	{ pos: [129, 65, 103], flag: 0, tc: [0, 0], color: [167, 80, 39, 255] },
]

const mario_right_hand_cap_top_dl_vertex_group2 = [
	{ pos: [78, 11, 40], flag: 0, tc: [0, 0], color: [208, 62, 157, 255] },
	{ pos: [129, 65, 103], flag: 0, tc: [0, 0], color: [167, 80, 39, 255] },
	{ pos: [131, 47, -1], flag: 0, tc: [0, 0], color: [215, 96, 184, 255] },
	{ pos: [45, 49, 53], flag: 0, tc: [0, 0], color: [168, 90, 10, 255] },
	{ pos: [73, 11, 60], flag: 0, tc: [0, 0], color: [187, 251, 106, 255] },
	{ pos: [183, 100, 86], flag: 0, tc: [0, 0], color: [17, 124, 237, 255] },
	{ pos: [192, 42, 190], flag: 0, tc: [0, 0], color: [179, 35, 93, 255] },
	{ pos: [211, 81, 156], flag: 0, tc: [0, 0], color: [34, 108, 55, 255] },
	{ pos: [160, 65, 148], flag: 0, tc: [0, 0], color: [179, 71, 71, 255] },
	{ pos: [18, -13, 33], flag: 0, tc: [0, 0], color: [132, 16, 237, 255] },
	{ pos: [70, -52, 35], flag: 0, tc: [0, 0], color: [197, 222, 150, 255] },
	{ pos: [192, 11, -2], flag: 0, tc: [0, 0], color: [75, 41, 163, 255] },
	{ pos: [107, -19, -33], flag: 0, tc: [0, 0], color: [209, 14, 140, 255] },
	{ pos: [228, -121, 117], flag: 0, tc: [0, 0], color: [102, 205, 203, 255] },
	{ pos: [246, 29, 128], flag: 0, tc: [0, 0], color: [114, 32, 212, 255] },
	{ pos: [285, -6, 196], flag: 0, tc: [0, 0], color: [121, 35, 11, 255] },
]

const mario_right_hand_cap_top_dl_vertex_group3 = [
	{ pos: [65, -53, 55], flag: 0, tc: [0, 0], color: [183, 1, 103, 255] },
	{ pos: [18, -13, 33], flag: 0, tc: [0, 0], color: [132, 16, 237, 255] },
	{ pos: [29, -82, 43], flag: 0, tc: [0, 0], color: [149, 189, 0, 255] },
	{ pos: [70, -52, 35], flag: 0, tc: [0, 0], color: [197, 222, 150, 255] },
	{ pos: [73, 11, 60], flag: 0, tc: [0, 0], color: [187, 251, 106, 255] },
	{ pos: [114, -92, -11], flag: 0, tc: [0, 0], color: [196, 184, 172, 255] },
	{ pos: [107, -19, -33], flag: 0, tc: [0, 0], color: [209, 14, 140, 255] },
	{ pos: [182, -72, -8], flag: 0, tc: [0, 0], color: [77, 217, 164, 255] },
	{ pos: [192, 11, -2], flag: 0, tc: [0, 0], color: [75, 41, 163, 255] },
	{ pos: [246, 29, 128], flag: 0, tc: [0, 0], color: [114, 32, 212, 255] },
	{ pos: [228, -121, 117], flag: 0, tc: [0, 0], color: [102, 205, 203, 255] },
	{ pos: [211, 81, 156], flag: 0, tc: [0, 0], color: [34, 108, 55, 255] },
	{ pos: [285, -6, 196], flag: 0, tc: [0, 0], color: [121, 35, 11, 255] },
	{ pos: [273, -105, 188], flag: 0, tc: [0, 0], color: [95, 191, 52, 255] },
	{ pos: [181, -167, 138], flag: 0, tc: [0, 0], color: [6, 136, 38, 255] },
	{ pos: [228, 1, 228], flag: 0, tc: [0, 0], color: [20, 34, 120, 255] },
]

const mario_right_hand_cap_top_dl_vertex_group4 = [
	{ pos: [181, -167, 138], flag: 0, tc: [0, 0], color: [6, 136, 38, 255] },
	{ pos: [273, -105, 188], flag: 0, tc: [0, 0], color: [95, 191, 52, 255] },
	{ pos: [216, -104, 220], flag: 0, tc: [0, 0], color: [229, 204, 112, 255] },
	{ pos: [228, 1, 228], flag: 0, tc: [0, 0], color: [20, 34, 120, 255] },
	{ pos: [285, -6, 196], flag: 0, tc: [0, 0], color: [121, 35, 11, 255] },
	{ pos: [211, 81, 156], flag: 0, tc: [0, 0], color: [34, 108, 55, 255] },
	{ pos: [192, 42, 190], flag: 0, tc: [0, 0], color: [179, 35, 93, 255] },
	{ pos: [171, -129, 178], flag: 0, tc: [0, 0], color: [179, 209, 88, 255] },
]

const mario_right_hand_cap_bottom_dl_vertex = [
	{ pos: [65, -53, 55], flag: 0, tc: [0, 0], color: [183, 1, 103, 255] },
	{ pos: [106, -124, 90], flag: 0, tc: [0, 0], color: [157, 178, 9, 255] },
	{ pos: [137, -137, 134], flag: 0, tc: [0, 0], color: [159, 223, 73, 255] },
	{ pos: [73, 11, 60], flag: 0, tc: [0, 0], color: [187, 251, 106, 255] },
	{ pos: [129, 65, 103], flag: 0, tc: [0, 0], color: [167, 80, 39, 255] },
	{ pos: [160, 65, 148], flag: 0, tc: [0, 0], color: [179, 71, 71, 255] },
	{ pos: [192, 42, 190], flag: 0, tc: [0, 0], color: [179, 35, 93, 255] },
	{ pos: [171, -129, 178], flag: 0, tc: [0, 0], color: [179, 209, 88, 255] },
	{ pos: [216, -104, 220], flag: 0, tc: [0, 0], color: [229, 204, 112, 255] },
	{ pos: [228, 1, 228], flag: 0, tc: [0, 0], color: [20, 34, 120, 255] },
]

export const mario_right_hand_cap_m_logo_dl = [
	Gbi.gsSPVertex(mario_right_hand_cap_m_logo_dl_vertex, 5, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	Gbi.gsSP1Triangle(1, 4, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_cap_top_dl = [
	Gbi.gsSPVertex(mario_right_hand_cap_top_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 4, 5, 0x0, 6, 2, 1, 0x0),
	...Gbi.gsSP2Triangles(2, 6, 4, 0x0, 7, 4, 8, 0x0),
	...Gbi.gsSP2Triangles(8, 4, 6, 0x0, 4, 9, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 7, 9, 0x0, 5, 9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 13, 14, 11, 0x0),
	Gbi.gsSPVertex(mario_right_hand_cap_top_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(0, 3, 1, 0x0, 5, 2, 1, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 0, 9, 3, 0x0),
	...Gbi.gsSP2Triangles(10, 9, 0, 0x0, 11, 12, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 5, 11, 0x0, 3, 9, 4, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 15, 0x0, 11, 5, 14, 0x0),
	Gbi.gsSP1Triangle(7, 14, 5, 0x0),
	Gbi.gsSPVertex(mario_right_hand_cap_top_dl_vertex_group3, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 1, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 8, 9, 0x0, 7, 6, 8, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 9, 0x0, 11, 12, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 13, 14, 0x0, 12, 13, 10, 0x0),
	Gbi.gsSP1Triangle(13, 12, 15, 0x0),
	Gbi.gsSPVertex(mario_right_hand_cap_top_dl_vertex_group4, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 1, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 4, 5, 0x0, 3, 5, 6, 0x0),
	Gbi.gsSP1Triangle(7, 0, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_cap_hand_position_dl = [
	Gbi.gsSPVertex(mario_right_hand_cap_hand_position_dl_vertex_group1, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 4, 0x0, 2, 5, 6, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 2, 0x0, 5, 2, 4, 0x0),
	...Gbi.gsSP2Triangles(3, 7, 0, 0x0, 3, 6, 8, 0x0),
	...Gbi.gsSP2Triangles(3, 8, 7, 0x0, 9, 0, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 0, 9, 0x0, 1, 0, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 1, 10, 0x0, 11, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(7, 12, 13, 0x0, 8, 12, 7, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 7, 0x0, 7, 14, 9, 0x0),
	Gbi.gsSPVertex(mario_right_hand_cap_hand_position_dl_vertex_group2, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 6, 0x0, 6, 2, 4, 0x0),
	...Gbi.gsSP2Triangles(7, 5, 4, 0x0, 8, 9, 3, 0x0),
	...Gbi.gsSP2Triangles(3, 9, 10, 0x0, 10, 6, 3, 0x0),
	...Gbi.gsSP2Triangles(5, 11, 3, 0x0, 3, 11, 8, 0x0),
	...Gbi.gsSP2Triangles(10, 0, 6, 0x0, 6, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 1, 12, 0x0, 5, 13, 11, 0x0),
	...Gbi.gsSP2Triangles(1, 14, 12, 0x0, 14, 15, 12, 0x0),
	Gbi.gsSPVertex(mario_right_hand_cap_hand_position_dl_vertex_group3, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 6, 5, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 5, 8, 0x0, 8, 5, 9, 0x0),
	...Gbi.gsSP2Triangles(3, 10, 1, 0x0, 11, 10, 3, 0x0),
	...Gbi.gsSP2Triangles(1, 10, 2, 0x0, 2, 10, 12, 0x0),
	...Gbi.gsSP2Triangles(12, 10, 13, 0x0, 10, 11, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_cap_bottom_dl = [
	Gbi.gsSPVertex(mario_right_hand_cap_bottom_dl_vertex, 10, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 2, 0x0, 5, 4, 2, 0x0),
	...Gbi.gsSP2Triangles(6, 5, 2, 0x0, 6, 2, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 6, 0x0, 6, 7, 8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_cap_dl = (customData) => {
	return [
		Gbi.gsSPDisplayList(mario_right_hand_cap_top_dl),
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_hand_cap_hand_position_dl),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_brown2_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_hand_cap_bottom_dl),
		Gbi.gsSPEndDisplayList(),
	]
}


const mario_right_hand_cap_wings_half_1_dl_vertex = [
	{ pos: [368, 146, 7], flag: 0, tc: [990, 0], color: [190, 101, 218, 255] },
	{ pos: [166, 37, 68], flag: 0, tc: [0, 2012], color: [190, 101, 218, 255] },
	{ pos: [212, 96, 143], flag: 0, tc: [990, 2012], color: [190, 101, 218, 255] },
	{ pos: [368, 146, 7], flag: 0, tc: [990, 0], color: [190, 100, 217, 255] },
	{ pos: [322, 87, -67], flag: 0, tc: [0, 0], color: [190, 100, 217, 255] },
	{ pos: [166, 37, 68], flag: 0, tc: [0, 2012], color: [190, 100, 217, 255] },
	{ pos: [178, -177, 128], flag: 0, tc: [990, 2012], color: [168, 180, 207, 255] },
	{ pos: [149, -100, 60], flag: 0, tc: [0, 2012], color: [168, 180, 207, 255] },
	{ pos: [319, -248, -14], flag: 0, tc: [990, 0], color: [168, 180, 207, 255] },
	{ pos: [290, -171, -81], flag: 0, tc: [0, 0], color: [168, 180, 207, 255] },
]

const mario_right_hand_cap_wings_half_2_dl_vertex = [
	{ pos: [414, 206, 82], flag: 0, tc: [990, 0], color: [190, 100, 217, 255] },
	{ pos: [212, 96, 143], flag: 0, tc: [0, 2012], color: [190, 100, 217, 255] },
	{ pos: [258, 156, 218], flag: 0, tc: [990, 2012], color: [190, 100, 217, 255] },
	{ pos: [368, 146, 7], flag: 0, tc: [0, 0], color: [190, 100, 217, 255] },
	{ pos: [178, -177, 128], flag: 0, tc: [0, 2012], color: [168, 179, 207, 255] },
	{ pos: [319, -248, -14], flag: 0, tc: [0, 0], color: [168, 179, 207, 255] },
	{ pos: [349, -325, 53], flag: 0, tc: [990, 0], color: [168, 179, 207, 255] },
	{ pos: [207, -253, 195], flag: 0, tc: [990, 2012], color: [168, 179, 207, 255] },
]

export const mario_right_hand_cap_wings_half_1_dl = [
	Gbi.gsSPVertex(mario_right_hand_cap_wings_half_1_dl_vertex, 10, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 7, 9, 8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_cap_wings_half_2_dl = [
	Gbi.gsSPVertex(mario_right_hand_cap_wings_half_2_dl_vertex, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 4, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_cap_wings_intial_dl = (customData) => {
	return [
		/// TODO Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBFADEA),
		Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
		Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
		Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
		Gbi.gsSPEndDisplayList(),
	]
}


export const mario_right_hand_cap_wings_end_dl = [
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_cap = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_BLENDRGBFADEA),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_m_logo),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(mario_right_hand_cap_m_logo_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPDisplayList(mario_right_hand_cap_dl),
	Gbi.gsSPEndDisplayList(),
]

/*export const mario_right_hand_cap_wings = [
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_intial_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_wings_half_1),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_half_1_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_wings_half_2),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_half_2_dl),
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_end_dl),
	Gbi.gsSPEndDisplayList(),
]*/

export const mario_metal_right_hand_cap_shared_dl = [
	Gbi.gsSPDisplayList(mario_right_hand_cap_m_logo_dl),
	Gbi.gsSPDisplayList(mario_right_hand_cap_top_dl),
	Gbi.gsSPDisplayList(mario_right_hand_cap_hand_position_dl),
	Gbi.gsSPDisplayList(mario_right_hand_cap_bottom_dl),
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPEndDisplayList(),
]

/*export const mario_metal_right_hand_cap_shared_dl_wings = [
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_intial_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_metal_wings_half_1),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_half_1_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_metal_wings_half_2),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_half_2_dl),
	Gbi.gsSPDisplayList(mario_right_hand_cap_wings_end_dl),
	Gbi.gsSPEndDisplayList(),
]*/

const mario_right_hand_peace_shared_dl_vertex_group1 = [
	{ pos: [-21, 9, 33], flag: 0, tc: [0, 0], color: [138, 225, 31, 0] },
	{ pos: [-25, 24, 0], flag: 0, tc: [0, 0], color: [132, 248, 234, 0] },
	{ pos: [-8, -12, -20], flag: 0, tc: [0, 0], color: [147, 207, 215, 0] },
	{ pos: [0, -35, 32], flag: 0, tc: [0, 0], color: [157, 186, 34, 255] },
	{ pos: [6, -49, 0], flag: 0, tc: [0, 0], color: [169, 167, 236, 255] },
	{ pos: [88, -34, 39], flag: 0, tc: [0, 0], color: [56, 161, 61, 255] },
	{ pos: [90, -3, 52], flag: 0, tc: [0, 0], color: [80, 7, 97, 255] },
	{ pos: [45, -29, 52], flag: 0, tc: [0, 0], color: [235, 185, 102, 255] },
	{ pos: [23, -29, 36], flag: 0, tc: [0, 0], color: [18, 236, 123, 255] },
	{ pos: [18, 30, 41], flag: 0, tc: [0, 0], color: [193, 43, 100, 255] },
	{ pos: [46, 49, 45], flag: 0, tc: [0, 0], color: [248, 68, 106, 255] },
	{ pos: [0, 21, 37], flag: 0, tc: [0, 0], color: [254, 68, 106, 255] },
	{ pos: [56, -47, -5], flag: 0, tc: [0, 0], color: [12, 135, 222, 255] },
	{ pos: [56, 80, 1], flag: 0, tc: [0, 0], color: [26, 106, 64, 255] },
	{ pos: [8, 58, -2], flag: 0, tc: [0, 0], color: [188, 85, 64, 255] },
	{ pos: [84, 48, 24], flag: 0, tc: [0, 0], color: [50, 61, 98, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group2 = [
	{ pos: [33, 7, -37], flag: 0, tc: [0, 0], color: [222, 245, 135, 255] },
	{ pos: [56, -47, -5], flag: 0, tc: [0, 0], color: [12, 135, 222, 0] },
	{ pos: [32, -43, 0], flag: 0, tc: [0, 0], color: [221, 186, 157, 0] },
	{ pos: [45, -29, 52], flag: 0, tc: [0, 0], color: [235, 185, 102, 255] },
	{ pos: [32, -43, 0], flag: 0, tc: [0, 0], color: [235, 137, 36, 255] },
	{ pos: [18, 30, 41], flag: 0, tc: [0, 0], color: [193, 43, 100, 255] },
	{ pos: [8, 58, -2], flag: 0, tc: [0, 0], color: [188, 85, 64, 255] },
	{ pos: [-4, 38, 0], flag: 0, tc: [0, 0], color: [211, 102, 60, 255] },
	{ pos: [8, 58, -2], flag: 0, tc: [0, 0], color: [208, 48, 150, 255] },
	{ pos: [-4, 38, 0], flag: 0, tc: [0, 0], color: [179, 24, 159, 255] },
	{ pos: [24, -59, -3], flag: 0, tc: [0, 0], color: [196, 185, 171, 255] },
	{ pos: [6, -49, 0], flag: 0, tc: [0, 0], color: [169, 167, 236, 255] },
	{ pos: [-8, -12, -20], flag: 0, tc: [0, 0], color: [147, 207, 215, 255] },
	{ pos: [2, -5, -33], flag: 0, tc: [0, 0], color: [173, 218, 169, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group3 = [
	{ pos: [-22, 43, -3], flag: 0, tc: [0, 0], color: [49, 77, 168, 255] },
	{ pos: [-4, 38, 0], flag: 0, tc: [0, 0], color: [49, 77, 168, 0] },
	{ pos: [14, -1, -22], flag: 0, tc: [0, 0], color: [71, 32, 157, 0] },
	{ pos: [2, -5, -33], flag: 0, tc: [0, 0], color: [71, 32, 157, 255] },
	{ pos: [-22, 43, -3], flag: 0, tc: [0, 0], color: [134, 16, 228, 255] },
	{ pos: [-25, 24, 0], flag: 0, tc: [0, 0], color: [132, 248, 234, 255] },
	{ pos: [-21, 9, 33], flag: 0, tc: [0, 0], color: [138, 225, 31, 255] },
	{ pos: [-15, 23, 43], flag: 0, tc: [0, 0], color: [214, 49, 108, 255] },
	{ pos: [0, -35, 32], flag: 0, tc: [0, 0], color: [157, 186, 34, 255] },
	{ pos: [15, -39, 42], flag: 0, tc: [0, 0], color: [12, 190, 107, 255] },
	{ pos: [6, -49, 0], flag: 0, tc: [0, 0], color: [169, 167, 236, 255] },
	{ pos: [24, -59, -3], flag: 0, tc: [0, 0], color: [206, 146, 36, 255] },
	{ pos: [8, 58, -2], flag: 0, tc: [0, 0], color: [208, 48, 150, 255] },
	{ pos: [56, 80, 1], flag: 0, tc: [0, 0], color: [254, 65, 148, 255] },
	{ pos: [33, 7, -37], flag: 0, tc: [0, 0], color: [222, 245, 135, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group4 = [
	{ pos: [101, -29, 15], flag: 0, tc: [0, 0], color: [83, 163, 21, 255] },
	{ pos: [88, -34, 39], flag: 0, tc: [0, 0], color: [56, 161, 61, 0] },
	{ pos: [56, -47, -5], flag: 0, tc: [0, 0], color: [12, 135, 222, 0] },
	{ pos: [56, 80, 1], flag: 0, tc: [0, 0], color: [254, 65, 148, 255] },
	{ pos: [84, 60, -7], flag: 0, tc: [0, 0], color: [251, 68, 150, 255] },
	{ pos: [89, 18, -34], flag: 0, tc: [0, 0], color: [10, 27, 133, 255] },
	{ pos: [105, 17, 3], flag: 0, tc: [0, 0], color: [10, 124, 20, 255] },
	{ pos: [98, 10, 29], flag: 0, tc: [0, 0], color: [10, 122, 33, 255] },
	{ pos: [153, 7, 24], flag: 0, tc: [0, 0], color: [12, 122, 30, 255] },
	{ pos: [46, 49, 45], flag: 0, tc: [0, 0], color: [248, 68, 106, 255] },
	{ pos: [84, 48, 24], flag: 0, tc: [0, 0], color: [50, 61, 98, 255] },
	{ pos: [56, 80, 1], flag: 0, tc: [0, 0], color: [26, 106, 64, 255] },
	{ pos: [33, 7, -37], flag: 0, tc: [0, 0], color: [222, 245, 135, 255] },
	{ pos: [94, -22, -18], flag: 0, tc: [0, 0], color: [7, 205, 141, 255] },
	{ pos: [14, -1, -22], flag: 0, tc: [0, 0], color: [190, 229, 152, 255] },
	{ pos: [-4, 38, 0], flag: 0, tc: [0, 0], color: [179, 24, 159, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group5 = [
	{ pos: [-4, 38, 0], flag: 0, tc: [0, 0], color: [211, 102, 60, 255] },
	{ pos: [0, 21, 37], flag: 0, tc: [0, 0], color: [254, 68, 106, 0] },
	{ pos: [18, 30, 41], flag: 0, tc: [0, 0], color: [193, 43, 100, 0] },
	{ pos: [45, -29, 52], flag: 0, tc: [0, 0], color: [235, 185, 102, 255] },
	{ pos: [23, -29, 36], flag: 0, tc: [0, 0], color: [227, 139, 37, 255] },
	{ pos: [32, -43, 0], flag: 0, tc: [0, 0], color: [235, 137, 36, 255] },
	{ pos: [32, -43, 0], flag: 0, tc: [0, 0], color: [221, 186, 157, 255] },
	{ pos: [14, -1, -22], flag: 0, tc: [0, 0], color: [190, 229, 152, 255] },
	{ pos: [33, 7, -37], flag: 0, tc: [0, 0], color: [222, 245, 135, 255] },
	{ pos: [166, -13, -17], flag: 0, tc: [0, 0], color: [122, 8, 33, 255] },
	{ pos: [162, 14, -11], flag: 0, tc: [0, 0], color: [121, 1, 37, 255] },
	{ pos: [153, 7, 24], flag: 0, tc: [0, 0], color: [122, 8, 33, 255] },
	{ pos: [155, -15, 21], flag: 0, tc: [0, 0], color: [121, 6, 35, 255] },
	{ pos: [84, 60, -7], flag: 0, tc: [0, 0], color: [194, 102, 40, 255] },
	{ pos: [84, 48, 24], flag: 0, tc: [0, 0], color: [194, 102, 40, 255] },
	{ pos: [126, 84, -3], flag: 0, tc: [0, 0], color: [194, 102, 40, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group6 = [
	{ pos: [146, 59, -8], flag: 0, tc: [0, 0], color: [93, 77, 38, 255] },
	{ pos: [126, 84, -3], flag: 0, tc: [0, 0], color: [95, 71, 42, 0] },
	{ pos: [123, 72, 21], flag: 0, tc: [0, 0], color: [93, 77, 38, 0] },
	{ pos: [126, 84, -3], flag: 0, tc: [0, 0], color: [253, 55, 142, 255] },
	{ pos: [89, 18, -34], flag: 0, tc: [0, 0], color: [10, 27, 133, 255] },
	{ pos: [84, 60, -7], flag: 0, tc: [0, 0], color: [251, 68, 150, 255] },
	{ pos: [146, 59, -8], flag: 0, tc: [0, 0], color: [21, 42, 139, 255] },
	{ pos: [162, 14, -11], flag: 0, tc: [0, 0], color: [10, 125, 13, 255] },
	{ pos: [89, 18, -34], flag: 0, tc: [0, 0], color: [6, 126, 255, 255] },
	{ pos: [105, 17, 3], flag: 0, tc: [0, 0], color: [10, 124, 20, 255] },
	{ pos: [162, 14, -11], flag: 0, tc: [0, 0], color: [38, 30, 139, 255] },
	{ pos: [166, -13, -17], flag: 0, tc: [0, 0], color: [24, 249, 132, 255] },
	{ pos: [56, 80, 1], flag: 0, tc: [0, 0], color: [26, 106, 64, 255] },
	{ pos: [84, 48, 24], flag: 0, tc: [0, 0], color: [50, 61, 98, 255] },
	{ pos: [84, 60, -7], flag: 0, tc: [0, 0], color: [77, 93, 36, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group7 = [
	{ pos: [139, 53, 25], flag: 0, tc: [0, 0], color: [91, 168, 2, 255] },
	{ pos: [105, 17, 3], flag: 0, tc: [0, 0], color: [89, 166, 247, 0] },
	{ pos: [146, 59, -8], flag: 0, tc: [0, 0], color: [87, 166, 240, 0] },
	{ pos: [33, 7, -37], flag: 0, tc: [0, 0], color: [222, 245, 135, 255] },
	{ pos: [89, 18, -34], flag: 0, tc: [0, 0], color: [10, 27, 133, 255] },
	{ pos: [94, -22, -18], flag: 0, tc: [0, 0], color: [7, 205, 141, 255] },
	{ pos: [88, -34, 39], flag: 0, tc: [0, 0], color: [56, 161, 61, 255] },
	{ pos: [101, -29, 15], flag: 0, tc: [0, 0], color: [83, 163, 21, 255] },
	{ pos: [90, -3, 52], flag: 0, tc: [0, 0], color: [80, 7, 97, 255] },
	{ pos: [94, -22, -18], flag: 0, tc: [0, 0], color: [28, 133, 0, 255] },
	{ pos: [155, -15, 21], flag: 0, tc: [0, 0], color: [25, 133, 241, 255] },
	{ pos: [166, -13, -17], flag: 0, tc: [0, 0], color: [16, 131, 0, 255] },
	{ pos: [101, -29, 15], flag: 0, tc: [0, 0], color: [255, 226, 123, 255] },
	{ pos: [153, 7, 24], flag: 0, tc: [0, 0], color: [255, 226, 123, 255] },
	{ pos: [98, 10, 29], flag: 0, tc: [0, 0], color: [7, 214, 119, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group8 = [
	{ pos: [139, 53, 25], flag: 0, tc: [0, 0], color: [252, 19, 125, 255] },
	{ pos: [123, 72, 21], flag: 0, tc: [0, 0], color: [252, 21, 125, 0] },
	{ pos: [84, 48, 24], flag: 0, tc: [0, 0], color: [50, 61, 98, 0] },
	{ pos: [98, 10, 29], flag: 0, tc: [0, 0], color: [85, 22, 91, 255] },
	{ pos: [101, -29, 15], flag: 0, tc: [0, 0], color: [255, 226, 123, 255] },
	{ pos: [155, -15, 21], flag: 0, tc: [0, 0], color: [245, 239, 125, 255] },
	{ pos: [153, 7, 24], flag: 0, tc: [0, 0], color: [255, 226, 123, 255] },
	{ pos: [90, -3, 52], flag: 0, tc: [0, 0], color: [80, 7, 97, 255] },
	{ pos: [101, -29, 15], flag: 0, tc: [0, 0], color: [83, 163, 21, 255] },
	{ pos: [146, 59, -8], flag: 0, tc: [0, 0], color: [87, 166, 240, 255] },
	{ pos: [105, 17, 3], flag: 0, tc: [0, 0], color: [89, 166, 247, 255] },
	{ pos: [89, 18, -34], flag: 0, tc: [0, 0], color: [81, 166, 221, 255] },
	{ pos: [166, -13, -17], flag: 0, tc: [0, 0], color: [24, 249, 132, 255] },
	{ pos: [94, -22, -18], flag: 0, tc: [0, 0], color: [7, 205, 141, 255] },
	{ pos: [89, 18, -34], flag: 0, tc: [0, 0], color: [10, 27, 133, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group9 = [
	{ pos: [84, 48, 24], flag: 0, tc: [0, 0], color: [194, 102, 40, 255] },
	{ pos: [123, 72, 21], flag: 0, tc: [0, 0], color: [195, 102, 41, 0] },
	{ pos: [126, 84, -3], flag: 0, tc: [0, 0], color: [194, 102, 40, 0] },
	{ pos: [139, 53, 25], flag: 0, tc: [0, 0], color: [91, 168, 2, 255] },
	{ pos: [98, 10, 29], flag: 0, tc: [0, 0], color: [91, 168, 2, 255] },
	{ pos: [105, 17, 3], flag: 0, tc: [0, 0], color: [89, 166, 247, 255] },
	{ pos: [105, 17, 3], flag: 0, tc: [0, 0], color: [10, 124, 20, 255] },
	{ pos: [153, 7, 24], flag: 0, tc: [0, 0], color: [12, 122, 30, 255] },
	{ pos: [162, 14, -11], flag: 0, tc: [0, 0], color: [10, 125, 13, 255] },
	{ pos: [123, 72, 21], flag: 0, tc: [0, 0], color: [93, 77, 38, 255] },
	{ pos: [139, 53, 25], flag: 0, tc: [0, 0], color: [90, 82, 33, 255] },
	{ pos: [146, 59, -8], flag: 0, tc: [0, 0], color: [93, 77, 38, 255] },
	{ pos: [24, -59, -3], flag: 0, tc: [0, 0], color: [104, 199, 44, 255] },
	{ pos: [32, -43, 0], flag: 0, tc: [0, 0], color: [104, 199, 44, 255] },
	{ pos: [23, -29, 36], flag: 0, tc: [0, 0], color: [18, 236, 123, 255] },
	{ pos: [15, -39, 42], flag: 0, tc: [0, 0], color: [12, 190, 107, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group10 = [
	{ pos: [2, -5, -33], flag: 0, tc: [0, 0], color: [71, 32, 157, 255] },
	{ pos: [14, -1, -22], flag: 0, tc: [0, 0], color: [71, 32, 157, 0] },
	{ pos: [32, -43, 0], flag: 0, tc: [0, 0], color: [82, 238, 162, 0] },
	{ pos: [24, -59, -3], flag: 0, tc: [0, 0], color: [82, 238, 162, 255] },
	{ pos: [2, -5, -33], flag: 0, tc: [0, 0], color: [173, 218, 169, 255] },
	{ pos: [-8, -12, -20], flag: 0, tc: [0, 0], color: [147, 207, 215, 255] },
	{ pos: [-25, 24, 0], flag: 0, tc: [0, 0], color: [132, 248, 234, 255] },
	{ pos: [-22, 43, -3], flag: 0, tc: [0, 0], color: [134, 16, 228, 255] },
	{ pos: [-15, 23, 43], flag: 0, tc: [0, 0], color: [214, 49, 108, 255] },
	{ pos: [0, 21, 37], flag: 0, tc: [0, 0], color: [254, 68, 106, 255] },
	{ pos: [-4, 38, 0], flag: 0, tc: [0, 0], color: [211, 102, 60, 255] },
	{ pos: [-22, 43, -3], flag: 0, tc: [0, 0], color: [26, 114, 47, 255] },
	{ pos: [15, -39, 42], flag: 0, tc: [0, 0], color: [12, 190, 107, 255] },
	{ pos: [23, -29, 36], flag: 0, tc: [0, 0], color: [18, 236, 123, 255] },
]

const mario_right_hand_peace_shared_dl_vertex_group11 = [
	{ pos: [101, -29, 15], flag: 0, tc: [0, 0], color: [83, 163, 21, 255] },
	{ pos: [56, -47, -5], flag: 0, tc: [0, 0], color: [12, 135, 222, 0] },
	{ pos: [94, -22, -18], flag: 0, tc: [0, 0], color: [28, 133, 0, 0] },
]

export const mario_right_hand_peace_shared_dl = [
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(2, 4, 3, 0x0, 5, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 9, 0x0, 7, 6, 10, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 9, 0x0, 11, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 12, 5, 0x0, 10, 13, 14, 0x0),
	...Gbi.gsSP2Triangles(6, 15, 10, 0x0, 10, 14, 9, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group2, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 6, 7, 0x0, 8, 0, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(7, 6, 8, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(9, 8, 10, 0x0, 9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group4, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(2, 12, 13, 0x0, 3, 5, 12, 0x0),
	Gbi.gsSP1Triangle(12, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group5, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(9, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group6, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(4, 10, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group7, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 9, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group8, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 2, 3, 0, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 3, 2, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 3, 7, 0x0, 9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group9, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group10, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 9, 0x0, 12, 9, 8, 0x0),
	Gbi.gsSPVertex(mario_right_hand_peace_shared_dl_vertex_group11, 3, 0),
	Gbi.gsSP1Triangle(0, 1, 2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_right_hand_peace = (customData) => {
	return [
		Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
		Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
		Gbi.gsSPDisplayList(mario_right_hand_peace_shared_dl),
		Gbi.gsSPEndDisplayList(),
	]
}

const mario_cap_unused_m_logo_dl_vertex = [
	{ pos: [33, 35, 118], flag: 0, tc: [728, 758], color: [48, 38, 110, 255] },
	{ pos: [96, 22, 45], flag: 0, tc: [1240, 876], color: [72, 164, 49, 255] },
	{ pos: [71, 101, 113], flag: 0, tc: [1028, 148], color: [85, 22, 91, 255] },
	{ pos: [0, 110, 143], flag: 0, tc: [460, 68], color: [0, 52, 115, 255] },
	{ pos: [-31, 35, 118], flag: 0, tc: [206, 762], color: [208, 38, 111, 255] },
	{ pos: [-70, 101, 113], flag: 0, tc: [-106, 158], color: [171, 22, 91, 255] },
	{ pos: [-95, 22, 46], flag: 0, tc: [-302, 890], color: [168, 185, 56, 255] },
]

const mario_cap_unused_base_top_dl_vertex_group1 = [
	{ pos: [-66, 2, 139], flag: 0, tc: [0, 0], color: [176, 187, 69, 255] },
	{ pos: [0, 0, 163], flag: 0, tc: [0, 0], color: [0, 186, 105, 255] },
	{ pos: [-31, 35, 118], flag: 0, tc: [0, 0], color: [208, 38, 111, 255] },
	{ pos: [-32, 17, 109], flag: 0, tc: [0, 0], color: [0, 131, 240, 255] },
	{ pos: [33, 17, 109], flag: 0, tc: [0, 0], color: [251, 132, 234, 255] },
	{ pos: [-95, 22, 46], flag: 0, tc: [0, 0], color: [168, 185, 56, 255] },
	{ pos: [-101, 10, -7], flag: 0, tc: [0, 0], color: [216, 137, 17, 255] },
	{ pos: [-70, 101, 113], flag: 0, tc: [0, 0], color: [171, 22, 91, 255] },
	{ pos: [-135, 70, 23], flag: 0, tc: [0, 0], color: [132, 21, 16, 255] },
	{ pos: [-125, 38, -45], flag: 0, tc: [0, 0], color: [141, 236, 209, 255] },
	{ pos: [-86, 1, -60], flag: 0, tc: [0, 0], color: [206, 140, 246, 255] },
	{ pos: [-41, 144, 64], flag: 0, tc: [0, 0], color: [220, 121, 0, 255] },
	{ pos: [-76, 84, -60], flag: 0, tc: [0, 0], color: [213, 110, 211, 255] },
	{ pos: [136, 70, 22], flag: 0, tc: [0, 0], color: [123, 22, 16, 255] },
	{ pos: [71, 101, 113], flag: 0, tc: [0, 0], color: [85, 22, 91, 255] },
	{ pos: [96, 22, 45], flag: 0, tc: [0, 0], color: [72, 164, 49, 255] },
]

const mario_cap_unused_base_top_dl_vertex_group2 = [
	{ pos: [42, 144, 64], flag: 0, tc: [0, 0], color: [43, 118, 13, 255] },
	{ pos: [136, 70, 22], flag: 0, tc: [0, 0], color: [123, 22, 16, 255] },
	{ pos: [76, 84, -60], flag: 0, tc: [0, 0], color: [42, 108, 207, 255] },
	{ pos: [103, 10, -6], flag: 0, tc: [0, 0], color: [66, 150, 18, 255] },
	{ pos: [126, 38, -46], flag: 0, tc: [0, 0], color: [115, 236, 208, 255] },
	{ pos: [71, 101, 113], flag: 0, tc: [0, 0], color: [85, 22, 91, 255] },
	{ pos: [96, 22, 45], flag: 0, tc: [0, 0], color: [72, 164, 49, 255] },
	{ pos: [67, 2, 139], flag: 0, tc: [0, 0], color: [80, 186, 68, 255] },
	{ pos: [33, 17, 109], flag: 0, tc: [0, 0], color: [251, 132, 234, 255] },
	{ pos: [33, 35, 118], flag: 0, tc: [0, 0], color: [48, 38, 110, 255] },
	{ pos: [86, 1, -60], flag: 0, tc: [0, 0], color: [32, 134, 254, 255] },
	{ pos: [0, 0, 163], flag: 0, tc: [0, 0], color: [0, 186, 105, 255] },
	{ pos: [-31, 35, 118], flag: 0, tc: [0, 0], color: [208, 38, 111, 255] },
	{ pos: [53, 0, -118], flag: 0, tc: [0, 0], color: [44, 181, 165, 255] },
	{ pos: [49, 62, -139], flag: 0, tc: [0, 0], color: [50, 73, 166, 255] },
]

const mario_cap_unused_base_top_dl_vertex_group3 = [
	{ pos: [-76, 84, -60], flag: 0, tc: [0, 0], color: [213, 110, 211, 255] },
	{ pos: [-41, 144, 64], flag: 0, tc: [0, 0], color: [220, 121, 0, 255] },
	{ pos: [76, 84, -60], flag: 0, tc: [0, 0], color: [42, 108, 207, 255] },
	{ pos: [0, 110, 143], flag: 0, tc: [0, 0], color: [0, 52, 115, 255] },
	{ pos: [42, 144, 64], flag: 0, tc: [0, 0], color: [43, 118, 13, 255] },
	{ pos: [-70, 101, 113], flag: 0, tc: [0, 0], color: [171, 22, 91, 255] },
	{ pos: [71, 101, 113], flag: 0, tc: [0, 0], color: [85, 22, 91, 255] },
	{ pos: [49, 62, -139], flag: 0, tc: [0, 0], color: [50, 73, 166, 255] },
	{ pos: [126, 38, -46], flag: 0, tc: [0, 0], color: [115, 236, 208, 255] },
	{ pos: [-52, 0, -118], flag: 0, tc: [0, 0], color: [210, 157, 193, 255] },
	{ pos: [-49, 62, -138], flag: 0, tc: [0, 0], color: [206, 26, 143, 255] },
	{ pos: [53, 0, -118], flag: 0, tc: [0, 0], color: [44, 181, 165, 255] },
	{ pos: [-125, 38, -45], flag: 0, tc: [0, 0], color: [141, 236, 209, 255] },
	{ pos: [86, 1, -60], flag: 0, tc: [0, 0], color: [32, 134, 254, 255] },
	{ pos: [-86, 1, -60], flag: 0, tc: [0, 0], color: [206, 140, 246, 255] },
]

const mario_cap_unused_base_bottom_dl_vertex = [
	{ pos: [86, 1, -60], flag: 0, tc: [0, 0], color: [32, 134, 254, 255] },
	{ pos: [-86, 1, -60], flag: 0, tc: [0, 0], color: [206, 140, 246, 255] },
	{ pos: [-52, 0, -118], flag: 0, tc: [0, 0], color: [210, 157, 193, 255] },
	{ pos: [33, 17, 109], flag: 0, tc: [0, 0], color: [251, 132, 234, 255] },
	{ pos: [-32, 17, 109], flag: 0, tc: [0, 0], color: [0, 131, 240, 255] },
	{ pos: [-101, 10, -7], flag: 0, tc: [0, 0], color: [216, 137, 17, 255] },
	{ pos: [96, 22, 45], flag: 0, tc: [0, 0], color: [72, 164, 49, 255] },
	{ pos: [103, 10, -6], flag: 0, tc: [0, 0], color: [66, 150, 18, 255] },
	{ pos: [53, 0, -118], flag: 0, tc: [0, 0], color: [44, 181, 165, 255] },
]

export const mario_cap_unused_m_logo_dl = [
	Gbi.gsSPVertex(mario_cap_unused_m_logo_dl_vertex, 7, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 0, 0x0),
	...Gbi.gsSP2Triangles(3, 5, 4, 0x0, 2, 3, 0, 0x0),
	Gbi.gsSP1Triangle(5, 6, 4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_cap_unused_base_top_dl = [
	Gbi.gsSPVertex(mario_cap_unused_base_top_dl_vertex_group1, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(3, 1, 0, 0x0, 3, 5, 6, 0x0),
	...Gbi.gsSP2Triangles(3, 0, 5, 0x0, 5, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(5, 8, 6, 0x0, 0, 2, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 9, 10, 0x0, 8, 9, 6, 0x0),
	...Gbi.gsSP2Triangles(11, 8, 7, 0x0, 8, 12, 9, 0x0),
	...Gbi.gsSP2Triangles(12, 8, 11, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(mario_cap_unused_base_top_dl_vertex_group2, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 2, 1, 0x0, 5, 1, 0, 0x0),
	...Gbi.gsSP2Triangles(1, 6, 3, 0x0, 6, 7, 8, 0x0),
	...Gbi.gsSP2Triangles(9, 7, 6, 0x0, 10, 4, 3, 0x0),
	...Gbi.gsSP2Triangles(9, 11, 7, 0x0, 7, 11, 8, 0x0),
	...Gbi.gsSP2Triangles(12, 11, 9, 0x0, 13, 14, 4, 0x0),
	Gbi.gsSPVertex(mario_cap_unused_base_top_dl_vertex_group3, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(5, 3, 1, 0x0, 1, 4, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 3, 6, 0x0, 0, 2, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 7, 2, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 10, 9, 0x0, 7, 10, 0, 0x0),
	...Gbi.gsSP2Triangles(10, 7, 11, 0x0, 0, 10, 12, 0x0),
	...Gbi.gsSP2Triangles(11, 8, 13, 0x0, 14, 12, 9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_cap_unused_base_bottom_dl = [
	Gbi.gsSPVertex(mario_cap_unused_base_bottom_dl_vertex, 9, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 3, 5, 0x0, 7, 6, 5, 0x0),
	...Gbi.gsSP2Triangles(0, 7, 5, 0x0, 0, 5, 1, 0x0),
	Gbi.gsSP1Triangle(2, 8, 0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

/*export const mario_cap_unused_base_dl = [
	Gbi.gsSPDisplayList(mario_cap_unused_base_top_dl),
	Gbi.gsSPLight(mario_brown2_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_brown2_lights_group(customData).a, 2),
	Gbi.gsSPDisplayList(mario_cap_unused_base_bottom_dl),
	Gbi.gsSPEndDisplayList(),
]*/

const mario_wings_half_1_unused_dl_vertex = [
	{ pos: [199, 247, -55], flag: 0, tc: [990, 0], color: [89, 237, 88, 255] },
	{ pos: [131, 274, 20], flag: 0, tc: [0, 0], color: [89, 237, 88, 255] },
	{ pos: [69, 71, 38], flag: 0, tc: [0, 2012], color: [89, 237, 88, 255] },
	{ pos: [199, 247, -55], flag: 0, tc: [990, 0], color: [88, 238, 88, 255] },
	{ pos: [69, 71, 38], flag: 0, tc: [0, 2012], color: [88, 238, 88, 255] },
	{ pos: [138, 44, -37], flag: 0, tc: [990, 2012], color: [88, 238, 88, 255] },
	{ pos: [-137, 44, -37], flag: 0, tc: [990, 2012], color: [168, 238, 88, 255] },
	{ pos: [-68, 71, 38], flag: 0, tc: [0, 2012], color: [168, 238, 88, 255] },
	{ pos: [-198, 247, -55], flag: 0, tc: [990, 0], color: [168, 238, 88, 255] },
	{ pos: [-68, 71, 38], flag: 0, tc: [0, 2012], color: [167, 237, 88, 255] },
	{ pos: [-130, 274, 20], flag: 0, tc: [0, 0], color: [167, 237, 88, 255] },
	{ pos: [-198, 247, -55], flag: 0, tc: [990, 0], color: [167, 237, 88, 255] },
]

const mario_wings_half_2_unused_dl_vertex = [
	{ pos: [268, 219, -132], flag: 0, tc: [990, 0], color: [89, 237, 87, 255] },
	{ pos: [199, 247, -55], flag: 0, tc: [0, 0], color: [89, 237, 87, 255] },
	{ pos: [138, 44, -37], flag: 0, tc: [0, 2012], color: [89, 237, 87, 255] },
	{ pos: [207, 16, -114], flag: 0, tc: [990, 2012], color: [89, 237, 87, 255] },
	{ pos: [-206, 16, -114], flag: 0, tc: [990, 2012], color: [167, 237, 87, 255] },
	{ pos: [-137, 44, -37], flag: 0, tc: [0, 2012], color: [167, 237, 87, 255] },
	{ pos: [-267, 219, -132], flag: 0, tc: [990, 0], color: [167, 237, 87, 255] },
	{ pos: [-198, 247, -55], flag: 0, tc: [0, 0], color: [167, 237, 87, 255] },
]

export const mario_wings_half_1_unused_dl = [
	Gbi.gsSPVertex(mario_wings_half_1_unused_dl_vertex, 12, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_wings_half_2_unused_dl = [
	Gbi.gsSPVertex(mario_wings_half_2_unused_dl_vertex, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 7, 6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

/*export const mario_cap_wings_unused_intial_dl = [
	/// TODO Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsSPEndDisplayList(),
]*/


const mario_wings_half_1_dl_vertex = [
	{ pos: [-105, 212, 0], flag: 0, tc: [0, 0], color: [0, 0, 127, 255] },
	{ pos: [-105, 0, 0], flag: 0, tc: [0, 2012], color: [0, 0, 127, 255] },
	{ pos: [0, 0, 0], flag: 0, tc: [990, 2012], color: [0, 0, 127, 255] },
	{ pos: [0, 212, 0], flag: 0, tc: [990, 0], color: [0, 0, 127, 255] },
]

const mario_wings_half_2_dl_vertex = [
	{ pos: [0, 0, 0], flag: 0, tc: [0, 2012], color: [0, 0, 127, 255] },
	{ pos: [106, 212, 0], flag: 0, tc: [990, 0], color: [0, 0, 127, 255] },
	{ pos: [0, 212, 0], flag: 0, tc: [0, 0], color: [0, 0, 127, 255] },
	{ pos: [106, 0, 0], flag: 0, tc: [990, 2012], color: [0, 0, 127, 255] },
]

export const mario_wings_half_1_dl = [
	Gbi.gsSPVertex(mario_wings_half_1_dl_vertex, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const mario_wings_half_2_dl = [
	Gbi.gsSPVertex(mario_wings_half_2_dl_vertex, 4, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

/*export const mario_cap_wings = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_wings_half_1),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_1_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_wings_half_2),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_2_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const mario_cap_wings_transparent = [
	//// TODO Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADEA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_wings_half_1),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_1_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_wings_half_2),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_2_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]
*/
/*export const mario_metal_cap_wings = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPLight(mario_white_lights_group(customData).l[0], 1),
	Gbi.gsSPLight(mario_white_lights_group(customData).a, 2),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_metal_wings_half_1),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_1_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_metal_wings_half_2),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_2_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]*/

/*export const mario_metal_cap_wings_transparent = [
	Gbi.gsSPClearGeometryMode(Gbi.G_TEXTURE_GEN),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	//// TODO Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADEA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_metal_wings_half_1),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_1_dl),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mario_texture_metal_wings_half_2),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPDisplayList(mario_wings_half_2_dl),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_TEXTURE_GEN | Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADE),
	Gbi.gsDPLoadTextureBlock(mario_texture_metal, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 64, 32, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0x0F80, 0x07C0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPEndDisplayList(),
]

*/