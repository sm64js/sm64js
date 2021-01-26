import * as Gbi from "../../../../../include/gbi"
import {
    cave_09007800,
    cave_09009800,
    cave_0900A800} from "../../../../../textures/cave"
const hmc_seg7_lights_07019430 = Gbi.gdSPDefLights1(
	    0x79, 0x79, 0x79,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const hmc_seg7_vertex_07019448 = [
	{ pos: [ 1076, -409, -4633 ], flag: 0, tc: [ 4108, -2408 ], color: [ 205, 103, 205, 255 ] },
	{ pos: [ 1127, -409, -4786 ], flag: 0, tc: [ 4158, -2562 ], color: [ 0, 113, 56, 255 ] },
	{ pos: [ 1076, -409, -4786 ], flag: 0, tc: [ 4108, -2562 ], color: [ 205, 51, 103, 255 ] },
	{ pos: [ 1127, -409, -4633 ], flag: 0, tc: [ 4158, -2408 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ -2047, -409, -3276 ], flag: 0, tc: [ 990, -1054 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ -3583, -409, -2252 ], flag: 0, tc: [ -542, 0 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ -2047, -409, -2252 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ -3583, -409, -3276 ], flag: 0, tc: [ -542, -1054 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -799, -409, -3276 ], flag: 0, tc: [ 2236, -1054 ], color: [ 18, 104, 70, 255 ] },
	{ pos: [ -459, -409, -2252 ], flag: 0, tc: [ 2574, 0 ], color: [ 204, 73, 167, 255 ] },
	{ pos: [ 52, -409, -2764 ], flag: 0, tc: [ 3086, -544 ], color: [ 173, 92, 235, 255 ] },
	{ pos: [ -767, -409, -3308 ], flag: 0, tc: [ 2268, -1086 ], color: [ 74, 92, 43, 255 ] },
	{ pos: [ 52, -409, -3788 ], flag: 0, tc: [ 3086, -1566 ], color: [ 182, 92, 213, 255 ] },
	{ pos: [ -767, -409, -4127 ], flag: 0, tc: [ 2268, -1904 ], color: [ 83, 92, 21, 255 ] },
	{ pos: [ 564, -409, -4300 ], flag: 0, tc: [ 3596, -2076 ], color: [ 235, 92, 173, 255 ] },
	{ pos: [ 224, -409, -5119 ], flag: 0, tc: [ 3258, -2894 ], color: [ 43, 92, 74, 255 ] },
]

const hmc_seg7_vertex_07019548 = [
	{ pos: [ 224, -409, -5119 ], flag: 0, tc: [ 3258, -2894 ], color: [ 43, 92, 74, 255 ] },
	{ pos: [ 564, -409, -4300 ], flag: 0, tc: [ 3596, -2076 ], color: [ 235, 92, 173, 255 ] },
	{ pos: [ 1076, -409, -4300 ], flag: 0, tc: [ 4108, -2076 ], color: [ 172, 84, 214, 255 ] },
	{ pos: [ 1076, -409, -5119 ], flag: 0, tc: [ 4108, -2894 ], color: [ 172, 42, 84, 255 ] },
]

const hmc_seg7_vertex_07019588 = [
	{ pos: [ 1076, -153, -4633 ], flag: 0, tc: [ 1182, 1500 ], color: [ 155, 223, 189, 255 ] },
	{ pos: [ 1076, -409, -4300 ], flag: 0, tc: [ 2012, 2012 ], color: [ 172, 84, 214, 255 ] },
	{ pos: [ 1076, 614, -4300 ], flag: 0, tc: [ 2012, 0 ], color: [ 155, 223, 189, 255 ] },
	{ pos: [ 1127, -153, -4633 ], flag: 0, tc: [ 1182, 1500 ], color: [ 0, 143, 200, 255 ] },
	{ pos: [ 1127, -409, -4633 ], flag: 0, tc: [ 1182, 2012 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 1076, -409, -4633 ], flag: 0, tc: [ 1182, 2012 ], color: [ 205, 103, 205, 255 ] },
	{ pos: [ 1076, -409, -5119 ], flag: 0, tc: [ 0, 2012 ], color: [ 172, 42, 84, 255 ] },
	{ pos: [ 1076, -409, -4786 ], flag: 0, tc: [ 798, 2012 ], color: [ 205, 51, 103, 255 ] },
	{ pos: [ 1076, -153, -4786 ], flag: 0, tc: [ 798, 1500 ], color: [ 146, 201, 27, 255 ] },
	{ pos: [ 1127, -409, -4786 ], flag: 0, tc: [ 798, 2012 ], color: [ 0, 113, 56, 255 ] },
	{ pos: [ 1127, -153, -4786 ], flag: 0, tc: [ 798, 1500 ], color: [ 0, 200, 113, 255 ] },
	{ pos: [ 1076, 614, -5119 ], flag: 0, tc: [ 0, 0 ], color: [ 172, 172, 42, 255 ] },
	{ pos: [ -2047, 3379, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -2047, 2355, -2252 ], flag: 0, tc: [ 2522, 2012 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2047, 3379, -2252 ], flag: 0, tc: [ 2522, 0 ], color: [ 200, 0, 143, 255 ] },
]

const hmc_seg7_vertex_07019678 = [
	{ pos: [ -3583, 3379, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 105, 0, 70, 255 ] },
	{ pos: [ -2047, 2355, -3276 ], flag: 0, tc: [ 3800, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2047, 3379, -3276 ], flag: 0, tc: [ 3800, 0 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -3583, 2355, -3276 ], flag: 0, tc: [ 0, 2012 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2047, 3379, -2252 ], flag: 0, tc: [ 0, 0 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ -2047, 2355, -2252 ], flag: 0, tc: [ 0, 2012 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -3583, 2355, -2252 ], flag: 0, tc: [ 3800, 2012 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ -3583, 3379, -2252 ], flag: 0, tc: [ 3800, 0 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ -2047, 3379, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -2047, 2355, -3276 ], flag: 0, tc: [ 0, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2047, 2355, -2252 ], flag: 0, tc: [ 2522, 2012 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -767, 614, -4127 ], flag: 0, tc: [ -880, 0 ], color: [ 62, 152, 36, 255 ] },
	{ pos: [ 52, 614, -2764 ], flag: 0, tc: [ 480, 0 ], color: [ 182, 164, 213, 255 ] },
	{ pos: [ -767, 614, -3308 ], flag: 0, tc: [ -62, 0 ], color: [ 83, 164, 21, 255 ] },
]

const hmc_seg7_vertex_07019758 = [
	{ pos: [ -3583, 2355, -2252 ], flag: 0, tc: [ 0, -3508 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ -3583, -409, -2252 ], flag: 0, tc: [ 0, 2012 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ -3583, -409, -3276 ], flag: 0, tc: [ 2012, 2012 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -3583, 2355, -3276 ], flag: 0, tc: [ 2012, -3508 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 1076, 614, -5119 ], flag: 0, tc: [ -1870, 0 ], color: [ 172, 172, 42, 255 ] },
	{ pos: [ 564, 614, -4300 ], flag: 0, tc: [ -1052, 0 ], color: [ 220, 152, 194, 255 ] },
	{ pos: [ 224, 614, -5119 ], flag: 0, tc: [ -1870, 0 ], color: [ 26, 183, 99, 255 ] },
	{ pos: [ 1076, 614, -4300 ], flag: 0, tc: [ -1052, 0 ], color: [ 155, 223, 189, 255 ] },
	{ pos: [ -767, 614, -3308 ], flag: 0, tc: [ -62, 0 ], color: [ 83, 164, 21, 255 ] },
	{ pos: [ 52, 614, -2764 ], flag: 0, tc: [ 480, 0 ], color: [ 182, 164, 213, 255 ] },
	{ pos: [ -459, 614, -2252 ], flag: 0, tc: [ 990, 0 ], color: [ 238, 152, 186, 255 ] },
	{ pos: [ -799, 614, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 183, 89, 255 ] },
	{ pos: [ -3583, 2355, -2252 ], flag: 0, tc: [ -1562, 2012 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ -3583, 2611, -2687 ], flag: 0, tc: [ -478, 1500 ], color: [ 110, 201, 229, 255 ] },
	{ pos: [ -3583, 3379, -2252 ], flag: 0, tc: [ -1562, 0 ], color: [ 113, 0, 200, 255 ] },
]

const hmc_seg7_vertex_07019848 = [
	{ pos: [ -767, 614, -4127 ], flag: 0, tc: [ -880, 0 ], color: [ 62, 152, 36, 255 ] },
	{ pos: [ 52, 614, -3788 ], flag: 0, tc: [ -542, 0 ], color: [ 157, 183, 230, 255 ] },
	{ pos: [ 52, 614, -2764 ], flag: 0, tc: [ 480, 0 ], color: [ 182, 164, 213, 255 ] },
	{ pos: [ -2047, 614, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 214, 172, 84, 255 ] },
	{ pos: [ -799, 614, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 183, 89, 255 ] },
	{ pos: [ -459, 614, -2252 ], flag: 0, tc: [ 990, 0 ], color: [ 238, 152, 186, 255 ] },
	{ pos: [ -2047, 614, -2252 ], flag: 0, tc: [ 990, 0 ], color: [ 153, 205, 205, 255 ] },
	{ pos: [ -2047, 2355, -3276 ], flag: 0, tc: [ 0, -3304 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2047, 2355, -2252 ], flag: 0, tc: [ 990, -3304 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -3583, 2355, -2252 ], flag: 0, tc: [ -1562, 2012 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ -3583, 2355, -2687 ], flag: 0, tc: [ -478, 2012 ], color: [ 51, 51, 153, 255 ] },
	{ pos: [ -3583, 2611, -2687 ], flag: 0, tc: [ -478, 1500 ], color: [ 110, 201, 229, 255 ] },
	{ pos: [ -3583, 3379, -3276 ], flag: 0, tc: [ 990, 0 ], color: [ 105, 0, 70, 255 ] },
	{ pos: [ -3583, 3379, -2252 ], flag: 0, tc: [ -1562, 0 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ -3634, 2611, -2687 ], flag: 0, tc: [ -478, 1500 ], color: [ 0, 200, 143, 255 ] },
]

const hmc_seg7_vertex_07019938 = [
	{ pos: [ -3583, 2611, -2687 ], flag: 0, tc: [ -478, 1500 ], color: [ 110, 201, 229, 255 ] },
	{ pos: [ -3634, 2611, -2841 ], flag: 0, tc: [ -94, 1500 ], color: [ 0, 143, 56, 255 ] },
	{ pos: [ -3583, 2611, -2841 ], flag: 0, tc: [ -94, 1500 ], color: [ 101, 223, 67, 255 ] },
	{ pos: [ -3583, 3379, -3276 ], flag: 0, tc: [ 990, 0 ], color: [ 105, 0, 70, 255 ] },
	{ pos: [ -3634, 2611, -2687 ], flag: 0, tc: [ -478, 1500 ], color: [ 0, 200, 143, 255 ] },
	{ pos: [ -3583, 2355, -2687 ], flag: 0, tc: [ -478, 2012 ], color: [ 51, 51, 153, 255 ] },
	{ pos: [ -3634, 2355, -2687 ], flag: 0, tc: [ -478, 2012 ], color: [ 0, 113, 200, 255 ] },
	{ pos: [ -3583, 2355, -2841 ], flag: 0, tc: [ -94, 2012 ], color: [ 51, 103, 51, 255 ] },
	{ pos: [ -3634, 2355, -2841 ], flag: 0, tc: [ -94, 2012 ], color: [ 0, 56, 113, 255 ] },
	{ pos: [ -3583, 2355, -3276 ], flag: 0, tc: [ 990, 2012 ], color: [ 89, 0, 89, 255 ] },
]

const hmc_seg7_vertex_070199D8 = [
	{ pos: [ -459, 614, -2252 ], flag: 0, tc: [ 0, 0 ], color: [ 238, 152, 186, 255 ] },
	{ pos: [ -459, -409, -2252 ], flag: 0, tc: [ 0, 2012 ], color: [ 204, 73, 167, 255 ] },
	{ pos: [ -2047, -409, -2252 ], flag: 0, tc: [ 3930, 2012 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ -3583, 2355, -3276 ], flag: 0, tc: [ -4566, -3508 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3583, -409, -3276 ], flag: 0, tc: [ -4566, 2012 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -2047, -409, -3276 ], flag: 0, tc: [ -1500, 2012 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ -2047, 2355, -3276 ], flag: 0, tc: [ -1500, -3508 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2047, 614, -3276 ], flag: 0, tc: [ -1500, 0 ], color: [ 214, 172, 84, 255 ] },
	{ pos: [ -799, -409, -3276 ], flag: 0, tc: [ 990, 2012 ], color: [ 18, 104, 70, 255 ] },
	{ pos: [ -2047, 2355, -2252 ], flag: 0, tc: [ 3930, -3508 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -3583, -409, -2252 ], flag: 0, tc: [ 7762, 2012 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ -3583, 2355, -2252 ], flag: 0, tc: [ 7762, -3508 ], color: [ 101, 0, 180, 255 ] },
	{ pos: [ -2047, 614, -2252 ], flag: 0, tc: [ 3930, 0 ], color: [ 153, 205, 205, 255 ] },
	{ pos: [ -799, 614, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 183, 89, 255 ] },
	{ pos: [ -767, -409, -3308 ], flag: 0, tc: [ 82, 2012 ], color: [ 74, 92, 43, 255 ] },
	{ pos: [ -767, 614, -3308 ], flag: 0, tc: [ 82, 0 ], color: [ 83, 164, 21, 255 ] },
]

const hmc_seg7_vertex_07019AD8 = [
	{ pos: [ -2047, 614, -3276 ], flag: 0, tc: [ -1500, 0 ], color: [ 214, 172, 84, 255 ] },
	{ pos: [ -799, -409, -3276 ], flag: 0, tc: [ 990, 2012 ], color: [ 18, 104, 70, 255 ] },
	{ pos: [ -799, 614, -3276 ], flag: 0, tc: [ 990, 0 ], color: [ 52, 183, 89, 255 ] },
	{ pos: [ 52, 614, -3788 ], flag: 0, tc: [ -2840, 0 ], color: [ 157, 183, 230, 255 ] },
	{ pos: [ 52, -409, -2764 ], flag: 0, tc: [ -796, 2012 ], color: [ 173, 92, 235, 255 ] },
	{ pos: [ 52, 614, -2764 ], flag: 0, tc: [ -796, 0 ], color: [ 182, 164, 213, 255 ] },
	{ pos: [ -459, -409, -2252 ], flag: 0, tc: [ 990, 2012 ], color: [ 204, 73, 167, 255 ] },
	{ pos: [ -459, 614, -2252 ], flag: 0, tc: [ 990, 0 ], color: [ 238, 152, 186, 255 ] },
	{ pos: [ 52, -409, -3788 ], flag: 0, tc: [ -2840, 2012 ], color: [ 182, 92, 213, 255 ] },
	{ pos: [ -799, 614, -3276 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 183, 89, 255 ] },
	{ pos: [ -799, -409, -3276 ], flag: 0, tc: [ 0, 2012 ], color: [ 18, 104, 70, 255 ] },
	{ pos: [ -767, -409, -3308 ], flag: 0, tc: [ 82, 2012 ], color: [ 74, 92, 43, 255 ] },
	{ pos: [ 224, 614, -5119 ], flag: 0, tc: [ 5014, 0 ], color: [ 26, 183, 99, 255 ] },
	{ pos: [ 224, -409, -5119 ], flag: 0, tc: [ 5014, 2012 ], color: [ 43, 92, 74, 255 ] },
	{ pos: [ 1076, -409, -5119 ], flag: 0, tc: [ 6528, 2012 ], color: [ 172, 42, 84, 255 ] },
]

const hmc_seg7_vertex_07019BC8 = [
	{ pos: [ -767, 614, -3308 ], flag: 0, tc: [ 82, 0 ], color: [ 83, 164, 21, 255 ] },
	{ pos: [ -767, -409, -3308 ], flag: 0, tc: [ 82, 2012 ], color: [ 74, 92, 43, 255 ] },
	{ pos: [ -767, -409, -4127 ], flag: 0, tc: [ 1514, 2012 ], color: [ 83, 92, 21, 255 ] },
	{ pos: [ -767, 614, -4127 ], flag: 0, tc: [ 1514, 0 ], color: [ 62, 152, 36, 255 ] },
	{ pos: [ 564, 614, -4300 ], flag: 0, tc: [ -4628, 0 ], color: [ 220, 152, 194, 255 ] },
	{ pos: [ 52, -409, -3788 ], flag: 0, tc: [ -2840, 2012 ], color: [ 182, 92, 213, 255 ] },
	{ pos: [ 52, 614, -3788 ], flag: 0, tc: [ -2840, 0 ], color: [ 157, 183, 230, 255 ] },
	{ pos: [ 564, -409, -4300 ], flag: 0, tc: [ -4628, 2012 ], color: [ 235, 92, 173, 255 ] },
	{ pos: [ 224, -409, -5119 ], flag: 0, tc: [ 5014, 2012 ], color: [ 43, 92, 74, 255 ] },
	{ pos: [ 224, 614, -5119 ], flag: 0, tc: [ 5014, 0 ], color: [ 26, 183, 99, 255 ] },
	{ pos: [ 1076, 614, -4300 ], flag: 0, tc: [ -5396, 0 ], color: [ 155, 223, 189, 255 ] },
	{ pos: [ 1076, -409, -4300 ], flag: 0, tc: [ -5396, 2012 ], color: [ 172, 84, 214, 255 ] },
	{ pos: [ -767, 614, -4127 ], flag: 0, tc: [ 0, 0 ], color: [ 62, 152, 36, 255 ] },
	{ pos: [ 564, 614, -4300 ], flag: 0, tc: [ 742, 0 ], color: [ 220, 152, 194, 255 ] },
	{ pos: [ 52, 614, -3788 ], flag: 0, tc: [ 216, 0 ], color: [ 157, 183, 230, 255 ] },
]

const hmc_seg7_vertex_07019CB8 = [
	{ pos: [ 224, 614, -5119 ], flag: 0, tc: [ 5014, 0 ], color: [ 26, 183, 99, 255 ] },
	{ pos: [ 1076, -409, -5119 ], flag: 0, tc: [ 6528, 2012 ], color: [ 172, 42, 84, 255 ] },
	{ pos: [ 1076, 614, -5119 ], flag: 0, tc: [ 6528, 0 ], color: [ 172, 172, 42, 255 ] },
	{ pos: [ -767, 614, -4127 ], flag: 0, tc: [ 0, 0 ], color: [ 62, 152, 36, 255 ] },
	{ pos: [ 224, 614, -5119 ], flag: 0, tc: [ 990, 0 ], color: [ 26, 183, 99, 255 ] },
	{ pos: [ 564, 614, -4300 ], flag: 0, tc: [ 742, 0 ], color: [ 220, 152, 194, 255 ] },
]

export const hmc_seg7_dl_07019D18 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09009800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(hmc_seg7_lights_07019430.l[0], 1),
	Gbi.gsSPLight(hmc_seg7_lights_07019430.a, 2),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019448, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  8,  4, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 6,  9,  8, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 12, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 12, 14, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019548, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07019DC8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019588, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  5, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  7,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  6,  8, 11, 0x0),
	...Gbi.gsSP2Triangles( 8,  0,  2, 0x0,  8,  2, 11, 0x0),
	...Gbi.gsSP2Triangles( 8,  3,  0, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSP1Triangle( 8, 10,  3, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019678, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019758, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019848, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  6,  8, 0x0),
	...Gbi.gsSP2Triangles( 7,  3,  6, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 10, 14, 11, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019938, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  1, 0x0,  5,  6,  4, 0x0),
	...Gbi.gsSP2Triangles( 7,  6,  5, 0x0,  2,  1,  8, 0x0),
	...Gbi.gsSP2Triangles( 2,  7,  9, 0x0,  2,  9,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  8,  7, 0x0,  7,  8,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07019F70 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_0900A800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_070199D8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  5,  8, 0x0),
	...Gbi.gsSP2Triangles( 9,  2, 10, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019AD8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  8,  4, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019BC8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  2,  8, 0x0,  3,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10,  7,  4, 0x0, 10, 11,  7, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07019CB8, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0701A080 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07019D18),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07019DC8),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07019F70),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

