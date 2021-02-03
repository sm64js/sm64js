import * as Gbi from "../../../../../include/gbi"
import {
    spooky_09000000,
    spooky_09000800,
    spooky_09001800,
    spooky_09002800,
    spooky_09003800,
    spooky_09004800,
    spooky_09005000,
    spooky_09006000,
    spooky_09006800,
    spooky_09007000,
    spooky_09008000,
    spooky_09008800,
    spooky_09009000,
    spooky_0900A000,
    spooky_0900A800,
    spooky_0900B000,
    spooky_0900B800
} from "../../../../../textures/spooky"

import {
    bbh_seg7_texture_07000000,
    bbh_seg7_texture_07001000,
    bbh_seg7_texture_07001800,
    bbh_seg7_texture_07002000,
    bbh_seg7_texture_07003000,
    bbh_seg7_texture_07003400,
    bbh_seg7_texture_07004400
} from "../../../texture.inc"
const bbh_seg7_lights_0701A920 = Gbi.gdSPDefLights1(
	    0x10, 0x11, 0x16,
	    0x2a, 0x2c, 0x37, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0701A938 = Gbi.gdSPDefLights1(
	    0x3c, 0x3c, 0x3c,
	    0x96, 0x96, 0x96, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0701A950 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_0701A968 = [
	{ pos: [ -3313, -2457, 5450 ], flag: 0, tc: [ 990, 18362 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3313, -921, 5450 ], flag: 0, tc: [ 990, 3032 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3023, -921, 5740 ], flag: 0, tc: [ 0, 3032 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3023, -2457, 5740 ], flag: 0, tc: [ 0, 18362 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3313, 410, 5450 ], flag: 0, tc: [ 990, -10252 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3023, 410, 5740 ], flag: 0, tc: [ 0, -10252 ], color: [ 89, 0, 167, 255 ] },
]

const bbh_seg7_vertex_0701A9C8 = [
	{ pos: [ -2118, -204, 4617 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2191, -204, 4472 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2227, -204, 4509 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2082, -204, 4581 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0701AA08 = [
	{ pos: [ -3023, -306, 5015 ], flag: 0, tc: [ 260, 334 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2661, -306, 4074 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1648, -306, 5088 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2227, 51, 4509 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2191, 51, 4472 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2082, 51, 4581 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2118, 51, 4617 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3675, 410, 5088 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2661, 410, 4074 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1648, 410, 5088 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2661, 410, 6102 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2589, -306, 5450 ], flag: 0, tc: [ 698, 334 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3385, -306, 5378 ], flag: 0, tc: [ 260, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2661, 410, 6102 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2661, -2457, 6102 ], flag: 0, tc: [ 0, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3023, -2457, 5740 ], flag: 0, tc: [ 332, 990 ], color: [ 89, 0, 167, 255 ] },
]

const bbh_seg7_vertex_0701AB08 = [
	{ pos: [ -3385, -306, 5378 ], flag: 0, tc: [ 260, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3675, -306, 5088 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2661, -306, 4074 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1648, -306, 5088 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2661, -306, 6102 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2951, -306, 5812 ], flag: 0, tc: [ 698, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2589, -306, 5450 ], flag: 0, tc: [ 698, 334 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3675, 410, 5088 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2661, -2457, 4074 ], flag: 0, tc: [ 990, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2661, 410, 4074 ], flag: 0, tc: [ 990, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3675, -2457, 5088 ], flag: 0, tc: [ 0, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2661, 410, 6102 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3023, -2457, 5740 ], flag: 0, tc: [ 332, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3023, 410, 5740 ], flag: 0, tc: [ 332, 0 ], color: [ 89, 0, 167, 255 ] },
]

const bbh_seg7_vertex_0701ABE8 = [
	{ pos: [ -1986, -1535, 5427 ], flag: 0, tc: [ 296, 310 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2661, -2457, 6102 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -1648, 410, 5088 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -3675, -2457, 5088 ], flag: 0, tc: [ 990, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3675, 410, 5088 ], flag: 0, tc: [ 990, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3313, 410, 5450 ], flag: 0, tc: [ 624, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3313, -2457, 5450 ], flag: 0, tc: [ 624, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2661, -2457, 4074 ], flag: 0, tc: [ 1000, 230 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2661, -2457, 6102 ], flag: 0, tc: [ -10, 230 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1986, -2457, 5427 ], flag: 0, tc: [ 326, 402 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 307, -2457, 5427 ], flag: 0, tc: [ 326, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 307, -2457, 4710 ], flag: 0, tc: [ 684, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2024, -2457, 4712 ], flag: 0, tc: [ 682, 394 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3675, -2457, 5088 ], flag: 0, tc: [ 496, -30 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1986, -2457, 5427 ], flag: 0, tc: [ 0, 310 ], color: [ 167, 0, 167, 255 ] },
]

const bbh_seg7_vertex_0701ACD8 = [
	{ pos: [ -2661, 410, 4074 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 1, 90, 255 ] },
	{ pos: [ -2227, 51, 4509 ], flag: 0, tc: [ 406, 96 ], color: [ 167, 1, 90, 255 ] },
	{ pos: [ -2118, 51, 4617 ], flag: 0, tc: [ 516, 96 ], color: [ 167, 1, 90, 255 ] },
	{ pos: [ -2661, -2457, 6102 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2661, 410, 6102 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -1648, 410, 5088 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -1648, -1536, 5088 ], flag: 0, tc: [ 296, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -1986, -1535, 5427 ], flag: 0, tc: [ 296, 310 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -1648, -1536, 5088 ], flag: 0, tc: [ 132, 454 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ 307, -1535, 5427 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ -1986, -1535, 5427 ], flag: 0, tc: [ -16, -30 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ 307, -1535, 4710 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ -2024, -1535, 4712 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ -2661, 410, 4074 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2118, 51, 4617 ], flag: 0, tc: [ 516, 96 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -1648, 410, 5088 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 89, 255 ] },
]

const bbh_seg7_vertex_0701ADD8 = [
	{ pos: [ -1648, 410, 5088 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2118, 51, 4617 ], flag: 0, tc: [ 516, 96 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2118, -255, 4617 ], flag: 0, tc: [ 516, 206 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -1648, -1536, 5088 ], flag: 0, tc: [ 990, 662 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2227, -255, 4509 ], flag: 0, tc: [ 406, 206 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2227, 51, 4509 ], flag: 0, tc: [ 406, 96 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2661, 410, 4074 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -1648, -1536, 5088 ], flag: 0, tc: [ 990, 662 ], color: [ 167, 0, 90, 255 ] },
	{ pos: [ -2118, -255, 4617 ], flag: 0, tc: [ 516, 206 ], color: [ 167, 0, 90, 255 ] },
	{ pos: [ -2227, -255, 4509 ], flag: 0, tc: [ 406, 206 ], color: [ 167, 0, 90, 255 ] },
	{ pos: [ -2024, -1535, 4712 ], flag: 0, tc: [ 610, 662 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2661, -2457, 4074 ], flag: 0, tc: [ 0, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2024, -2457, 4712 ], flag: 0, tc: [ 610, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 77, -2201, 4659 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2201, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2201, 4659 ], flag: 0, tc: [ 990, 478 ], color: [ 0, 129, 0, 255 ] },
]

const bbh_seg7_vertex_0701AED8 = [
	{ pos: [ 77, -2201, 4659 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, -2201, 4710 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2201, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -76, -2457, 4659 ], flag: 0, tc: [ 990, 478 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, -2457, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 77, -2457, 4710 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 77, -2457, 4659 ], flag: 0, tc: [ 0, 480 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0701AF48 = [
	{ pos: [ -1986, -2457, 5427 ], flag: 0, tc: [ 5694, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 307, -1535, 5427 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 307, -2457, 5427 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2024, -1535, 4712 ], flag: 0, tc: [ -4826, 0 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ -2024, -2457, 4712 ], flag: 0, tc: [ -4826, 2012 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ -76, -2201, 4710 ], flag: 0, tc: [ 32, 1444 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ -76, -2457, 4710 ], flag: 0, tc: [ 32, 2012 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 307, -1535, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ -76, -2201, 4710 ], flag: 0, tc: [ 32, 1444 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 77, -2201, 4710 ], flag: 0, tc: [ 416, 1444 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 307, -1535, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 77, -2457, 4710 ], flag: 0, tc: [ 416, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 307, -2457, 4710 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 307, -2457, 5427 ], flag: 0, tc: [ 1756, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -1535, 5427 ], flag: 0, tc: [ 1756, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -1535, 4710 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0701B048 = [
	{ pos: [ 307, -2457, 5427 ], flag: 0, tc: [ 1756, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -1535, 4710 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 307, -2457, 4710 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2457, 4659 ], flag: 0, tc: [ 478, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2457, 4710 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2201, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1986, -2457, 5427 ], flag: 0, tc: [ 5694, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1986, -1535, 5427 ], flag: 0, tc: [ 5694, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 307, -1535, 5427 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2118, 51, 4617 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2082, -204, 4581 ], flag: 0, tc: [ 480, 2012 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2118, -204, 4617 ], flag: 0, tc: [ 0, 2012 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2082, 51, 4581 ], flag: 0, tc: [ 480, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2227, -204, 4509 ], flag: 0, tc: [ 0, 2012 ], color: [ 91, 0, 88, 255 ] },
	{ pos: [ -2191, 51, 4472 ], flag: 0, tc: [ 478, 0 ], color: [ 91, 0, 88, 255 ] },
	{ pos: [ -2227, 51, 4509 ], flag: 0, tc: [ 0, 0 ], color: [ 91, 0, 88, 255 ] },
]

const bbh_seg7_vertex_0701B148 = [
	{ pos: [ -2227, -204, 4509 ], flag: 0, tc: [ 0, 2012 ], color: [ 91, 0, 88, 255 ] },
	{ pos: [ -2191, -204, 4472 ], flag: 0, tc: [ 480, 2012 ], color: [ 91, 0, 88, 255 ] },
	{ pos: [ -2191, 51, 4472 ], flag: 0, tc: [ 478, 0 ], color: [ 91, 0, 88, 255 ] },
	{ pos: [ 77, -2457, 4659 ], flag: 0, tc: [ 478, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2201, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 77, -2201, 4659 ], flag: 0, tc: [ 478, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, -2201, 4659 ], flag: 0, tc: [ 478, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2457, 4710 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2457, 4659 ], flag: 0, tc: [ 478, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, -2201, 4710 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0701B1E8 = [
	{ pos: [ -2589, -306, 5450 ], flag: 0, tc: [ 3034, 648 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -3023, -204, 5015 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -3023, -306, 5015 ], flag: 0, tc: [ 0, 648 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2589, -204, 5450 ], flag: 0, tc: [ 3034, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -3023, -306, 5015 ], flag: 0, tc: [ 2524, 648 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3385, -204, 5378 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3385, -306, 5378 ], flag: 0, tc: [ 0, 648 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3023, -204, 5015 ], flag: 0, tc: [ 2524, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2951, -306, 5812 ], flag: 0, tc: [ 0, 648 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2951, -204, 5812 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2589, -204, 5450 ], flag: 0, tc: [ 2522, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2589, -306, 5450 ], flag: 0, tc: [ 2522, 648 ], color: [ 167, 0, 167, 255 ] },
]

const bbh_seg7_vertex_0701B2A8 = [
	{ pos: [ -2589, -204, 5450 ], flag: 0, tc: [ 0, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1648, -204, 5088 ], flag: 0, tc: [ 4056, -6164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2661, -204, 4074 ], flag: 0, tc: [ -10248, -6164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3023, -204, 5015 ], flag: 0, tc: [ -6160, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2951, -204, 5812 ], flag: 0, tc: [ 0, 8142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2661, -204, 6102 ], flag: 0, tc: [ 4056, 8142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3385, -204, 5378 ], flag: 0, tc: [ -6160, 8142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3675, -204, 5088 ], flag: 0, tc: [ -10248, 8142 ], color: [ 0, 127, 0, 255 ] },
]

export const bbh_seg7_dl_0701B328 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A920.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A920.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A968, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  5, 0x0,  1,  5,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701B380 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A938.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A938.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701A9C8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0701A950.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0701A950.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701AA08, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0,  2, 11,  0, 0x0),
	...Gbi.gsSP2Triangles( 0, 12,  1, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701AB08, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701ABE8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 9, 10, 11, 0x0,  9, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 9, 12,  7, 0x0,  7, 13,  8, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701ACD8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 8, 11,  9, 0x0,  8, 12, 11, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701ADD8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 4, 10,  3, 0x0, 11, 10,  4, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 10, 0x0, 11,  4,  6, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701AED8, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 3,  5,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701B558 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701AF48, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  7,  3,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 10,  9, 11, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701B048, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 12, 10, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701B148, 10, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701B620 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701B1E8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701B678 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0701B2A8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  0, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  5, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 2,  6,  3, 0x0,  2,  7,  6, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0701B6D0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701B328),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701B380),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701B558),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701B620),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0701B678),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

