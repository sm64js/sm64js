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
const bbh_seg7_lights_07012758 = Gbi.gdSPDefLights1(
	    0x3c, 0x3c, 0x3c,
	    0x96, 0x96, 0x96, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_07012770 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_07012788 = [
	{ pos: [ 3584, 819, -1535 ], flag: 0, tc: [ -5140, 8142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2253, 819, -1535 ], flag: 0, tc: [ 8144, 8142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2253, 819, -101 ], flag: 0, tc: [ 8144, -6164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3584, 819, -101 ], flag: 0, tc: [ -5140, -6164 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_070127C8 = [
	{ pos: [ 3584, 1638, -101 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1126, 1638, -1535 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3584, 1638, -1535 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1126, 1638, -101 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2253, 819, -1535 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1126, 819, -1535 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1126, 819, -101 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2253, 819, -101 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_07012848 = [
	{ pos: [ 1331, 922, -1228 ], flag: 0, tc: [ 0, 990 ], color: [ 65, 87, 65, 255 ] },
	{ pos: [ 1331, 1075, -1433 ], flag: 0, tc: [ 990, 0 ], color: [ 65, 87, 65, 255 ] },
	{ pos: [ 1229, 1075, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 65, 87, 65, 255 ] },
	{ pos: [ 1331, 922, -1228 ], flag: 0, tc: [ 0, 990 ], color: [ 64, 87, 65, 255 ] },
	{ pos: [ 1434, 922, -1330 ], flag: 0, tc: [ 990, 990 ], color: [ 64, 87, 65, 255 ] },
	{ pos: [ 1331, 1075, -1433 ], flag: 0, tc: [ 990, 0 ], color: [ 64, 87, 65, 255 ] },
]

const bbh_seg7_vertex_070128A8 = [
	{ pos: [ 1331, 819, -1433 ], flag: 0, tc: [ 990, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1331, 922, -1433 ], flag: 0, tc: [ 990, 844 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1434, 922, -1330 ], flag: 0, tc: [ 0, 844 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1434, 819, -1330 ], flag: 0, tc: [ 0, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1434, 819, -1330 ], flag: 0, tc: [ 1414, 2012 ], color: [ 89, 0, 90, 255 ] },
	{ pos: [ 1434, 922, -1330 ], flag: 0, tc: [ 1414, 648 ], color: [ 89, 0, 90, 255 ] },
	{ pos: [ 1331, 922, -1228 ], flag: 0, tc: [ 0, 648 ], color: [ 89, 0, 90, 255 ] },
	{ pos: [ 1331, 819, -1228 ], flag: 0, tc: [ 0, 2012 ], color: [ 89, 0, 90, 255 ] },
	{ pos: [ 1331, 819, -1228 ], flag: 0, tc: [ 0, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1331, 922, -1228 ], flag: 0, tc: [ 0, 844 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1229, 922, -1330 ], flag: 0, tc: [ 990, 844 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1229, 819, -1330 ], flag: 0, tc: [ 990, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1690, 1075, -101 ], flag: 0, tc: [ 862, 1372 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1331, 1638, -101 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1946, 1638, -101 ], flag: 0, tc: [ 1500, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1536, 1075, -101 ], flag: 0, tc: [ 478, 1372 ], color: [ 0, 0, 129, 255 ] },
]

const bbh_seg7_vertex_070129A8 = [
	{ pos: [ 2253, 819, -613 ], flag: 0, tc: [ 1756, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2150, 819, -613 ], flag: 0, tc: [ 1756, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2150, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2253, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2253, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 0, 167, 167, 255 ] },
	{ pos: [ 2150, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 0, 167, 167, 255 ] },
	{ pos: [ 2150, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 0, 167, 167, 255 ] },
	{ pos: [ 2150, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 819, -613 ], flag: 0, tc: [ 1756, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 819, -306 ], flag: 0, tc: [ 2524, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 1638, -306 ], flag: 0, tc: [ 2524, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 1638, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07012A88 = [
	{ pos: [ 2253, 1638, -306 ], flag: 0, tc: [ 2524, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2150, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2150, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2253, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 0, 167, 167, 255 ] },
	{ pos: [ 2150, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 0, 167, 167, 255 ] },
	{ pos: [ 2253, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 0, 167, 167, 255 ] },
	{ pos: [ 2253, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 0, 167, 90, 255 ] },
	{ pos: [ 2150, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 0, 167, 90, 255 ] },
	{ pos: [ 2150, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 0, 167, 90, 255 ] },
	{ pos: [ 2253, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2150, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 1638, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07012B88 = [
	{ pos: [ 2150, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 1638, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 819, -1330 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 819, -1023 ], flag: 0, tc: [ 734, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2253, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 0, 167, 90, 255 ] },
	{ pos: [ 2150, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 0, 167, 90, 255 ] },
	{ pos: [ 2253, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 0, 167, 90, 255 ] },
	{ pos: [ 2253, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2150, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2150, 819, -1023 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2253, 819, -1023 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2253, 819, -306 ], flag: 0, tc: [ 2524, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 819, -613 ], flag: 0, tc: [ 1756, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1126, -613 ], flag: 0, tc: [ 1756, 1244 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1638, -306 ], flag: 0, tc: [ 2524, 0 ], color: [ 127, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07012C78 = [
	{ pos: [ 1946, 819, -101 ], flag: 0, tc: [ 1500, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1690, 819, -101 ], flag: 0, tc: [ 862, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1690, 1075, -101 ], flag: 0, tc: [ 862, 1372 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2253, 1638, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1638, -306 ], flag: 0, tc: [ 2524, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1229, -716 ], flag: 0, tc: [ 1502, 988 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1229, -921 ], flag: 0, tc: [ 990, 988 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 819, -1330 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 1126, -1023 ], flag: 0, tc: [ 734, 1244 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 819, -1023 ], flag: 0, tc: [ 734, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1536, 1075, -101 ], flag: 0, tc: [ 478, 1372 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1536, 819, -101 ], flag: 0, tc: [ 478, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1331, 819, -101 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1331, 1638, -101 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1946, 1638, -101 ], flag: 0, tc: [ 1500, 0 ], color: [ 0, 0, 129, 255 ] },
]

const bbh_seg7_vertex_07012D68 = [
	{ pos: [ 1536, 1075, -101 ], flag: 0, tc: [ 478, 1372 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1690, 1075, -50 ], flag: 0, tc: [ 862, 1372 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1536, 1075, -50 ], flag: 0, tc: [ 478, 1372 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1331, 819, -1535 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1946, 819, -1535 ], flag: 0, tc: [ 1500, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1946, 1638, -1535 ], flag: 0, tc: [ 1500, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1331, 1638, -1535 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1126, 1638, -306 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1126, 819, -1330 ], flag: 0, tc: [ 2522, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1126, 1638, -1330 ], flag: 0, tc: [ 2522, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1126, 819, -306 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1690, 1075, -101 ], flag: 0, tc: [ 862, 1372 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1690, 819, -101 ], flag: 0, tc: [ 862, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1690, 819, -50 ], flag: 0, tc: [ 862, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1690, 1075, -50 ], flag: 0, tc: [ 862, 1372 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07012E58 = [
	{ pos: [ 1536, 819, -50 ], flag: 0, tc: [ 478, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1536, 1075, -101 ], flag: 0, tc: [ 478, 1372 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1536, 1075, -50 ], flag: 0, tc: [ 478, 1372 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1536, 1075, -101 ], flag: 0, tc: [ 478, 1372 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1690, 1075, -101 ], flag: 0, tc: [ 862, 1372 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1690, 1075, -50 ], flag: 0, tc: [ 862, 1372 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1690, 819, -50 ], flag: 0, tc: [ 862, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1690, 819, -101 ], flag: 0, tc: [ 862, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1536, 819, -101 ], flag: 0, tc: [ 478, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1536, 819, -50 ], flag: 0, tc: [ 478, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1536, 819, -101 ], flag: 0, tc: [ 478, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1331, 922, -1433 ], flag: 0, tc: [ 990, 844 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1331, 1075, -1433 ], flag: 0, tc: [ 990, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1434, 922, -1330 ], flag: 0, tc: [ 0, 844 ], color: [ 89, 0, 167, 255 ] },
]

const bbh_seg7_vertex_07012F38 = [
	{ pos: [ 1331, 922, -1228 ], flag: 0, tc: [ 0, 844 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1229, 1075, -1330 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1229, 922, -1330 ], flag: 0, tc: [ 990, 844 ], color: [ 167, 0, 89, 255 ] },
]

const bbh_seg7_vertex_07012F68 = [
	{ pos: [ 3584, 1638, -1535 ], flag: 0, tc: [ 5590, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2458, 819, -1535 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3584, 819, -1535 ], flag: 0, tc: [ 5590, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2458, 1638, -1535 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3584, 819, -101 ], flag: 0, tc: [ 5590, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2458, 819, -101 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2458, 1638, -101 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3584, 1638, -101 ], flag: 0, tc: [ 5590, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3584, 819, -101 ], flag: 0, tc: [ 7122, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3584, 1638, -101 ], flag: 0, tc: [ 7122, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3584, 1638, -1535 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3584, 819, -1535 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07013028 = [
	{ pos: [ 2458, 1638, -204 ], flag: 0, tc: [ 224, 0 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ 2458, 819, -204 ], flag: 0, tc: [ 224, 2012 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ 2355, 819, -306 ], flag: 0, tc: [ 734, 2012 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ 2253, 1638, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2355, 819, -1330 ], flag: 0, tc: [ 224, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2355, 1638, -1330 ], flag: 0, tc: [ 224, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2355, 1638, -1330 ], flag: 0, tc: [ 224, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 2355, 819, -1330 ], flag: 0, tc: [ 224, 2012 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 2458, 819, -1433 ], flag: 0, tc: [ 734, 2012 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 2458, 1638, -1433 ], flag: 0, tc: [ 734, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 2458, 1638, -1433 ], flag: 0, tc: [ 734, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2458, 819, -1433 ], flag: 0, tc: [ 734, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2458, 819, -1535 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2458, 1638, -1535 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2253, 819, -1330 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_07013118 = [
	{ pos: [ 2458, 1638, -101 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2458, 819, -204 ], flag: 0, tc: [ 224, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2458, 1638, -204 ], flag: 0, tc: [ 224, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 2458, 819, -101 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1946, 1638, -1535 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1946, 819, -1535 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1946, 819, -1433 ], flag: 0, tc: [ 224, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2458, 1638, -204 ], flag: 0, tc: [ 224, 0 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ 2355, 819, -306 ], flag: 0, tc: [ 734, 2012 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ 2355, 1638, -306 ], flag: 0, tc: [ 734, 0 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ 2355, 1638, -306 ], flag: 0, tc: [ 734, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2355, 819, -306 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2253, 819, -306 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2253, 1638, -306 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1946, 1638, -1433 ], flag: 0, tc: [ 224, 0 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07013208 = [
	{ pos: [ 1946, 1638, -1433 ], flag: 0, tc: [ 224, 0 ], color: [ 166, 0, 89, 255 ] },
	{ pos: [ 1946, 819, -1433 ], flag: 0, tc: [ 224, 2012 ], color: [ 166, 0, 89, 255 ] },
	{ pos: [ 2048, 819, -1330 ], flag: 0, tc: [ 734, 2012 ], color: [ 166, 0, 89, 255 ] },
	{ pos: [ 2048, 1638, -1330 ], flag: 0, tc: [ 734, 0 ], color: [ 166, 0, 89, 255 ] },
	{ pos: [ 2048, 1638, -1330 ], flag: 0, tc: [ 734, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2048, 819, -1330 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2150, 819, -1330 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 2150, 1638, -1330 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1331, 1638, -204 ], flag: 0, tc: [ 224, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1229, 819, -306 ], flag: 0, tc: [ 734, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1229, 1638, -306 ], flag: 0, tc: [ 734, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 2048, 1638, -306 ], flag: 0, tc: [ 224, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 1946, 819, -204 ], flag: 0, tc: [ 734, 2012 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 1946, 1638, -204 ], flag: 0, tc: [ 734, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 2048, 819, -306 ], flag: 0, tc: [ 224, 2012 ], color: [ 167, 0, 167, 255 ] },
]

const bbh_seg7_vertex_070132F8 = [
	{ pos: [ 2150, 1638, -306 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2048, 819, -306 ], flag: 0, tc: [ 224, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 2048, 1638, -306 ], flag: 0, tc: [ 224, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1946, 1638, -204 ], flag: 0, tc: [ 734, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1946, 819, -204 ], flag: 0, tc: [ 734, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1946, 819, -101 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1946, 1638, -101 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 2150, 819, -306 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1229, 1638, -306 ], flag: 0, tc: [ 734, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1126, 819, -306 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1126, 1638, -306 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1229, 819, -306 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1126, 1638, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1126, 819, -1330 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1229, 819, -1330 ], flag: 0, tc: [ 224, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_070133E8 = [
	{ pos: [ 1331, 1638, -204 ], flag: 0, tc: [ 224, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1331, 819, -204 ], flag: 0, tc: [ 224, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1229, 819, -306 ], flag: 0, tc: [ 734, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1331, 1638, -101 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1331, 819, -204 ], flag: 0, tc: [ 224, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1331, 1638, -204 ], flag: 0, tc: [ 224, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1331, 819, -101 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1229, 1638, -1330 ], flag: 0, tc: [ 224, 0 ], color: [ 90, 0, 89, 255 ] },
	{ pos: [ 1331, 819, -1433 ], flag: 0, tc: [ 734, 2012 ], color: [ 90, 0, 89, 255 ] },
	{ pos: [ 1331, 1638, -1433 ], flag: 0, tc: [ 734, 0 ], color: [ 90, 0, 89, 255 ] },
	{ pos: [ 1331, 1638, -1433 ], flag: 0, tc: [ 734, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1331, 819, -1433 ], flag: 0, tc: [ 734, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1331, 819, -1535 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1331, 1638, -1535 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1229, 819, -1330 ], flag: 0, tc: [ 224, 2012 ], color: [ 90, 0, 89, 255 ] },
]

const bbh_seg7_vertex_070134D8 = [
	{ pos: [ 1126, 1638, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1229, 819, -1330 ], flag: 0, tc: [ 224, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1229, 1638, -1330 ], flag: 0, tc: [ 224, 0 ], color: [ 0, 0, 127, 255 ] },
]

export const bbh_seg7_dl_07013508 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_0900A000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_07012758.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_07012758.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012788, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07013550 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_07012770.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_07012770.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_070127C8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070135A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012848, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070135E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_070128A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_070129A8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10,  7, 11, 0x0,  7,  9, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 10, 11, 0x0, 12, 11, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012A88, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 3,  5, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012B88, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 11, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012C78, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  3,  8, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  8, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 10, 12, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012D68, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012E58, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 0, 10,  1, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012F38, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070137E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bbh_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07012F68, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07013838 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07013028, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 3, 14,  4, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07013118, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 4,  6, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07013208, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_070132F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  0,  7,  1, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_070133E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 7, 14,  8, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_070134D8, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070139A8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07013508),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07013550),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_070135A8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_070135E0),
	Gbi.gsSPDisplayList(bbh_seg7_dl_070137E0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07013838),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

