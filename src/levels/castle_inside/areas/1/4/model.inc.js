import * as Gbi from "../../../../../include/gbi"
import {
	inside_09000000,
	inside_09001000,
	inside_09008000,
} from "../../../../../textures/inside"
const inside_castle_seg7_lights_070295E8 = Gbi.gdSPDefLights1(
	    0x26, 0x26, 0x26,
	    0x66, 0x66, 0x66, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_07029600 = Gbi.gdSPDefLights1(
	    0x33, 0x33, 0x33,
	    0x88, 0x88, 0x88, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_07029618 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_07029630 = Gbi.gdSPDefLights1(
	    0x1f, 0x1f, 0x1f,
	    0x55, 0x55, 0x55, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_07029648 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xaa, 0xaa, 0xaa, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_07029660 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0xcc, 0xcc, 0xcc, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_07029678 = [
	{ pos: [ -511, 1024, 1536 ], flag: 0, tc: [ 0, 0 ], color: [ 204, 225, 145, 255 ] },
	{ pos: [ -765, 1741, 1536 ], flag: 0, tc: [ 222, -748 ], color: [ 212, 147, 210, 255 ] },
	{ pos: [ -765, 1741, 922 ], flag: 0, tc: [ 222, -748 ], color: [ 221, 135, 243, 255 ] },
	{ pos: [ -1281, 1741, 922 ], flag: 0, tc: [ 736, -748 ], color: [ 35, 135, 243, 255 ] },
	{ pos: [ -1281, 1741, 1536 ], flag: 0, tc: [ 736, -748 ], color: [ 46, 191, 158, 255 ] },
	{ pos: [ -1535, 1024, 1536 ], flag: 0, tc: [ 990, 0 ], color: [ 57, 229, 147, 255 ] },
]

const inside_castle_seg7_vertex_070296D8 = [
	{ pos: [ -765, 1741, 1536 ], flag: 0, tc: [ 222, -748 ], color: [ 212, 147, 210, 255 ] },
	{ pos: [ -1281, 1741, 1536 ], flag: 0, tc: [ 736, -748 ], color: [ 46, 191, 158, 255 ] },
	{ pos: [ -1281, 1741, 922 ], flag: 0, tc: [ 736, -748 ], color: [ 35, 135, 243, 255 ] },
	{ pos: [ -765, 1741, 922 ], flag: 0, tc: [ 222, -748 ], color: [ 221, 135, 243, 255 ] },
]

const inside_castle_seg7_vertex_07029718 = [
	{ pos: [ 102, 1024, -1637 ], flag: 0, tc: [ -56, -194 ], color: [ 43, 238, 117, 255 ] },
	{ pos: [ 410, 1024, -1637 ], flag: 0, tc: [ -202, -194 ], color: [ 197, 210, 101, 255 ] },
	{ pos: [ 155, 1741, -1023 ], flag: 0, tc: [ -80, 130 ], color: [ 247, 147, 62, 255 ] },
	{ pos: [ -2457, 1024, -1637 ], flag: 0, tc: [ 1160, -194 ], color: [ 37, 188, 99, 255 ] },
	{ pos: [ -2457, 1741, -769 ], flag: 0, tc: [ 1160, 264 ], color: [ 72, 156, 29, 255 ] },
	{ pos: [ -3071, 1024, -1023 ], flag: 0, tc: [ 1452, 130 ], color: [ 107, 219, 56, 255 ] },
	{ pos: [ -2202, 1741, -1023 ], flag: 0, tc: [ 1038, 130 ], color: [ 9, 140, 49, 255 ] },
	{ pos: [ -2149, 1024, -1637 ], flag: 0, tc: [ 1014, -194 ], color: [ 213, 238, 117, 255 ] },
	{ pos: [ -1535, 1415, -1302 ], flag: 0, tc: [ 722, -18 ], color: [ 239, 247, 125, 255 ] },
	{ pos: [ -765, 1741, 922 ], flag: 0, tc: [ 356, 1150 ], color: [ 221, 135, 243, 255 ] },
	{ pos: [ -1281, 1741, 922 ], flag: 0, tc: [ 600, 1150 ], color: [ 35, 135, 243, 255 ] },
	{ pos: [ -2457, 1741, -253 ], flag: 0, tc: [ 1160, 534 ], color: [ 51, 145, 226, 255 ] },
	{ pos: [ -511, 1415, -1302 ], flag: 0, tc: [ 234, -18 ], color: [ 26, 245, 123, 255 ] },
	{ pos: [ 410, 1741, -769 ], flag: 0, tc: [ -202, 264 ], color: [ 184, 156, 29, 255 ] },
]

const inside_castle_seg7_vertex_070297F8 = [
	{ pos: [ -511, 1024, 1536 ], flag: 0, tc: [ 234, 1472 ], color: [ 204, 225, 145, 255 ] },
	{ pos: [ 410, 1741, -253 ], flag: 0, tc: [ -202, 534 ], color: [ 205, 145, 226, 255 ] },
	{ pos: [ 1024, 1024, 0 ], flag: 0, tc: [ -494, 668 ], color: [ 143, 216, 216, 255 ] },
	{ pos: [ -2457, 1741, -769 ], flag: 0, tc: [ 1160, 264 ], color: [ 72, 156, 29, 255 ] },
	{ pos: [ -2457, 1741, -253 ], flag: 0, tc: [ 1160, 534 ], color: [ 51, 145, 226, 255 ] },
	{ pos: [ -3071, 1024, 0 ], flag: 0, tc: [ 1452, 668 ], color: [ 114, 210, 227, 255 ] },
	{ pos: [ -3071, 1024, -1023 ], flag: 0, tc: [ 1452, 130 ], color: [ 107, 219, 56, 255 ] },
	{ pos: [ -1535, 1024, 1536 ], flag: 0, tc: [ 722, 1472 ], color: [ 57, 229, 147, 255 ] },
	{ pos: [ -1281, 1741, 922 ], flag: 0, tc: [ 600, 1150 ], color: [ 35, 135, 243, 255 ] },
	{ pos: [ 1024, 1024, -1023 ], flag: 0, tc: [ -494, 130 ], color: [ 153, 230, 68, 255 ] },
	{ pos: [ 410, 1741, -769 ], flag: 0, tc: [ -202, 264 ], color: [ 184, 156, 29, 255 ] },
	{ pos: [ 410, 1024, -1637 ], flag: 0, tc: [ -202, -194 ], color: [ 197, 210, 101, 255 ] },
	{ pos: [ 155, 1741, -1023 ], flag: 0, tc: [ -80, 130 ], color: [ 247, 147, 62, 255 ] },
	{ pos: [ -765, 1741, 922 ], flag: 0, tc: [ 356, 1150 ], color: [ 221, 135, 243, 255 ] },
]

const inside_castle_seg7_vertex_070298D8 = [
	{ pos: [ -1535, 1024, -1023 ], flag: 0, tc: [ 0, 2288 ], color: [ 219, 29, 117, 255 ] },
	{ pos: [ -1535, 1415, -1302 ], flag: 0, tc: [ 0, 2010 ], color: [ 239, 247, 125, 255 ] },
	{ pos: [ -2149, 1024, -1637 ], flag: 0, tc: [ -644, 1676 ], color: [ 213, 238, 117, 255 ] },
	{ pos: [ -511, 1024, -1023 ], flag: 0, tc: [ 990, 2288 ], color: [ 26, 32, 119, 255 ] },
	{ pos: [ -511, 1415, -1302 ], flag: 0, tc: [ 990, 2010 ], color: [ 26, 245, 123, 255 ] },
	{ pos: [ 102, 1024, -1637 ], flag: 0, tc: [ 1604, 1676 ], color: [ 43, 238, 117, 255 ] },
]

const inside_castle_seg7_vertex_07029938 = [
	{ pos: [ -1281, 1741, 1536 ], flag: 0, tc: [ 1336, 0 ], color: [ 46, 191, 158, 255 ] },
	{ pos: [ -693, 1536, 1536 ], flag: 0, tc: [ 552, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1353, 1536, 1536 ], flag: 0, tc: [ 1432, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -765, 1741, 1536 ], flag: 0, tc: [ 648, 0 ], color: [ 212, 147, 210, 255 ] },
]

const inside_castle_seg7_vertex_07029978 = [
	{ pos: [ -1353, 1536, 1536 ], flag: 0, tc: [ 1648, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -693, 1536, 1536 ], flag: 0, tc: [ 332, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -647, 1408, 1536 ], flag: 0, tc: [ 240, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1399, 1408, 1536 ], flag: 0, tc: [ 1740, 224 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_070299B8 = [
	{ pos: [ -1399, 1408, 1536 ], flag: 0, tc: [ 1536, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -647, 1408, 1536 ], flag: 0, tc: [ 36, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -602, 1280, 1536 ], flag: 0, tc: [ -52, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1444, 1280, 1536 ], flag: 0, tc: [ 1628, 224 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_070299F8 = [
	{ pos: [ -1444, 1280, 1536 ], flag: 0, tc: [ 1832, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -602, 1280, 1536 ], flag: 0, tc: [ 148, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -556, 1152, 1536 ], flag: 0, tc: [ 60, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1490, 1152, 1536 ], flag: 0, tc: [ 1920, 224 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07029A38 = [
	{ pos: [ -1490, 1152, 1536 ], flag: 0, tc: [ 1716, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -511, 1024, 1536 ], flag: 0, tc: [ -232, 224 ], color: [ 204, 225, 145, 255 ] },
	{ pos: [ -1535, 1024, 1536 ], flag: 0, tc: [ 1808, 224 ], color: [ 57, 229, 147, 255 ] },
	{ pos: [ -556, 1152, 1536 ], flag: 0, tc: [ -140, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07029A78 = [
	{ pos: [ -869, 768, -1023 ], flag: 0, tc: [ 4364, 478 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 512, -1023 ], flag: 0, tc: [ 5080, 990 ], color: [ 48, 0, 117, 255 ] },
	{ pos: [ -511, 1024, -1023 ], flag: 0, tc: [ 5080, 0 ], color: [ 26, 32, 119, 255 ] },
	{ pos: [ -869, 512, -1023 ], flag: 0, tc: [ 4364, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1177, 768, -1023 ], flag: 0, tc: [ 3748, 478 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1535, 1024, -1023 ], flag: 0, tc: [ 3036, 0 ], color: [ 219, 29, 117, 255 ] },
	{ pos: [ -1535, 512, -1023 ], flag: 0, tc: [ 3036, 990 ], color: [ 208, 0, 117, 255 ] },
	{ pos: [ -1177, 512, -1023 ], flag: 0, tc: [ 3748, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 102, 1024, -1637 ], flag: 0, tc: [ 6304, 0 ], color: [ 43, 238, 117, 255 ] },
	{ pos: [ 102, 614, -1637 ], flag: 0, tc: [ 6304, 786 ], color: [ 48, 0, 117, 255 ] },
	{ pos: [ 410, 614, -1637 ], flag: 0, tc: [ 6916, 786 ], color: [ 208, 0, 117, 255 ] },
	{ pos: [ 410, 1024, -1637 ], flag: 0, tc: [ 6916, 0 ], color: [ 197, 210, 101, 255 ] },
	{ pos: [ 662, 614, -1385 ], flag: 0, tc: [ 7420, 786 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1024, 512, -1023 ], flag: 0, tc: [ 8144, 990 ], color: [ 137, 0, 41, 255 ] },
	{ pos: [ 1024, 1024, -1023 ], flag: 0, tc: [ 8144, 0 ], color: [ 153, 230, 68, 255 ] },
	{ pos: [ 553, 870, -1494 ], flag: 0, tc: [ 7204, 274 ], color: [ 167, 0, 89, 255 ] },
]

const inside_castle_seg7_vertex_07029B78 = [
	{ pos: [ 410, 614, -1637 ], flag: 0, tc: [ 6916, 786 ], color: [ 208, 0, 117, 255 ] },
	{ pos: [ 553, 614, -1494 ], flag: 0, tc: [ 7204, 786 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 553, 870, -1494 ], flag: 0, tc: [ 7204, 274 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1024, 1024, -1023 ], flag: 0, tc: [ 8144, 0 ], color: [ 153, 230, 68, 255 ] },
	{ pos: [ 410, 1024, -1637 ], flag: 0, tc: [ 6916, 0 ], color: [ 197, 210, 101, 255 ] },
	{ pos: [ 662, 870, -1385 ], flag: 0, tc: [ 7420, 274 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 662, 614, -1385 ], flag: 0, tc: [ 7420, 786 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 819, 512, -1228 ], flag: 0, tc: [ 7736, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1024, 512, -1023 ], flag: 0, tc: [ 8144, 990 ], color: [ 137, 0, 41, 255 ] },
	{ pos: [ 1024, 512, -1023 ], flag: 0, tc: [ 0, 990 ], color: [ 137, 0, 41, 255 ] },
	{ pos: [ 1024, 512, 0 ], flag: 0, tc: [ 2012, 990 ], color: [ 136, 0, 215, 255 ] },
	{ pos: [ 1024, 1024, 0 ], flag: 0, tc: [ 2012, 0 ], color: [ 143, 216, 216, 255 ] },
	{ pos: [ 1024, 1024, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 230, 68, 255 ] },
	{ pos: [ 1024, 1024, 0 ], flag: 0, tc: [ -2076, 0 ], color: [ 143, 216, 216, 255 ] },
	{ pos: [ 1024, 512, 0 ], flag: 0, tc: [ -2076, 990 ], color: [ 136, 0, 215, 255 ] },
	{ pos: [ -511, 512, 1536 ], flag: 0, tc: [ 2012, 990 ], color: [ 215, 0, 137, 255 ] },
]

const inside_castle_seg7_vertex_07029C78 = [
	{ pos: [ 1024, 1024, 0 ], flag: 0, tc: [ -2076, 0 ], color: [ 143, 216, 216, 255 ] },
	{ pos: [ -511, 512, 1536 ], flag: 0, tc: [ 2012, 990 ], color: [ 215, 0, 137, 255 ] },
	{ pos: [ -511, 1024, 1536 ], flag: 0, tc: [ 2012, 0 ], color: [ 204, 225, 145, 255 ] },
	{ pos: [ -511, 512, 1536 ], flag: 0, tc: [ 0, 990 ], color: [ 215, 0, 137, 255 ] },
	{ pos: [ -784, 512, 1536 ], flag: 0, tc: [ 512, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -921, 717, 1536 ], flag: 0, tc: [ 784, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -511, 1024, 1536 ], flag: 0, tc: [ 0, 0 ], color: [ 204, 225, 145, 255 ] },
	{ pos: [ -1535, 1024, 1536 ], flag: 0, tc: [ 2012, 0 ], color: [ 57, 229, 147, 255 ] },
	{ pos: [ -1125, 717, 1536 ], flag: 0, tc: [ 1196, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3071, 1024, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 107, 219, 56, 255 ] },
	{ pos: [ -2866, 512, -1228 ], flag: 0, tc: [ 376, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2866, 1024, -1228 ], flag: 0, tc: [ 376, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -1535, 512, 1536 ], flag: 0, tc: [ 2012, 990 ], color: [ 41, 0, 137, 255 ] },
	{ pos: [ -1262, 512, 1536 ], flag: 0, tc: [ 1468, 990 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07029D58 = [
	{ pos: [ -1535, 1024, 1536 ], flag: 0, tc: [ -2076, 0 ], color: [ 57, 229, 147, 255 ] },
	{ pos: [ -3071, 512, 0 ], flag: 0, tc: [ 2012, 990 ], color: [ 117, 0, 208, 255 ] },
	{ pos: [ -3071, 1024, 0 ], flag: 0, tc: [ 2012, 0 ], color: [ 114, 210, 227, 255 ] },
	{ pos: [ -1535, 512, 1536 ], flag: 0, tc: [ -2076, 990 ], color: [ 41, 0, 137, 255 ] },
	{ pos: [ -3071, 512, -1023 ], flag: 0, tc: [ 2012, 990 ], color: [ 121, 0, 36, 255 ] },
	{ pos: [ -3071, 1024, -1023 ], flag: 0, tc: [ 2012, 0 ], color: [ 107, 219, 56, 255 ] },
	{ pos: [ -3071, 1024, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 114, 210, 227, 255 ] },
	{ pos: [ -3071, 512, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 117, 0, 208, 255 ] },
	{ pos: [ -2149, 1024, -1637 ], flag: 0, tc: [ 1808, 0 ], color: [ 213, 238, 117, 255 ] },
	{ pos: [ -1535, 512, -1023 ], flag: 0, tc: [ 3036, 990 ], color: [ 208, 0, 117, 255 ] },
	{ pos: [ -1535, 1024, -1023 ], flag: 0, tc: [ 3036, 0 ], color: [ 219, 29, 117, 255 ] },
	{ pos: [ -3071, 1024, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 107, 219, 56, 255 ] },
	{ pos: [ -3071, 512, -1023 ], flag: 0, tc: [ 0, 990 ], color: [ 121, 0, 36, 255 ] },
	{ pos: [ -2866, 512, -1228 ], flag: 0, tc: [ 376, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2457, 512, -1637 ], flag: 0, tc: [ 1196, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2149, 512, -1637 ], flag: 0, tc: [ 1808, 990 ], color: [ 208, 0, 117, 255 ] },
]

const inside_castle_seg7_vertex_07029E58 = [
	{ pos: [ -2149, 1024, -1637 ], flag: 0, tc: [ 1808, 0 ], color: [ 213, 238, 117, 255 ] },
	{ pos: [ -2457, 1024, -1637 ], flag: 0, tc: [ 1196, 0 ], color: [ 37, 188, 99, 255 ] },
	{ pos: [ -2457, 512, -1637 ], flag: 0, tc: [ 1196, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2149, 512, -1637 ], flag: 0, tc: [ 1808, 990 ], color: [ 208, 0, 117, 255 ] },
	{ pos: [ -1535, 512, -1023 ], flag: 0, tc: [ 3036, 990 ], color: [ 208, 0, 117, 255 ] },
]

const inside_castle_seg7_vertex_07029EA8 = [
	{ pos: [ 1024, 512, 0 ], flag: 0, tc: [ -2076, 0 ], color: [ 136, 0, 215, 255 ] },
	{ pos: [ -511, 0, 1536 ], flag: 0, tc: [ 2012, 990 ], color: [ 208, 0, 139, 255 ] },
	{ pos: [ -511, 512, 1536 ], flag: 0, tc: [ 2012, 0 ], color: [ 215, 0, 137, 255 ] },
	{ pos: [ 819, 512, -1228 ], flag: 0, tc: [ 1604, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1024, 205, -1023 ], flag: 0, tc: [ 2012, 582 ], color: [ 139, 0, 48, 255 ] },
	{ pos: [ 1024, 512, -1023 ], flag: 0, tc: [ 2012, 0 ], color: [ 137, 0, 41, 255 ] },
	{ pos: [ 819, 205, -1228 ], flag: 0, tc: [ 1604, 582 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 1024, 205, -1023 ], flag: 0, tc: [ 0, 582 ], color: [ 139, 0, 48, 255 ] },
	{ pos: [ 1024, 461, -306 ], flag: 0, tc: [ 1400, 70 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1024, 512, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 137, 0, 41, 255 ] },
	{ pos: [ 1024, 205, -306 ], flag: 0, tc: [ 1400, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1024, 461, -153 ], flag: 0, tc: [ 1704, 70 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1024, 512, 0 ], flag: 0, tc: [ 2012, 0 ], color: [ 136, 0, 215, 255 ] },
	{ pos: [ 1024, 205, -153 ], flag: 0, tc: [ 1704, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1024, 205, 0 ], flag: 0, tc: [ 2012, 582 ], color: [ 129, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_07029F98 = [
	{ pos: [ -1535, 512, 1536 ], flag: 0, tc: [ 2012, 0 ], color: [ 41, 0, 137, 255 ] },
	{ pos: [ -1262, 512, 1536 ], flag: 0, tc: [ 1468, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1330, 410, 1536 ], flag: 0, tc: [ 1604, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1024, 512, 0 ], flag: 0, tc: [ -2076, 0 ], color: [ 136, 0, 215, 255 ] },
	{ pos: [ 1024, 0, 0 ], flag: 0, tc: [ -2076, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -511, 0, 1536 ], flag: 0, tc: [ 2012, 990 ], color: [ 208, 0, 139, 255 ] },
	{ pos: [ -1535, 512, 1536 ], flag: 0, tc: [ -2076, 0 ], color: [ 41, 0, 137, 255 ] },
	{ pos: [ -3071, 0, 0 ], flag: 0, tc: [ 2012, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3071, 512, 0 ], flag: 0, tc: [ 2012, 0 ], color: [ 117, 0, 208, 255 ] },
	{ pos: [ -1535, 0, 1536 ], flag: 0, tc: [ -2076, 990 ], color: [ 32, 0, 134, 255 ] },
	{ pos: [ -511, 0, 1536 ], flag: 0, tc: [ 0, 990 ], color: [ 208, 0, 139, 255 ] },
	{ pos: [ -716, 0, 1536 ], flag: 0, tc: [ 376, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -716, 410, 1536 ], flag: 0, tc: [ 376, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -511, 512, 1536 ], flag: 0, tc: [ 0, 0 ], color: [ 215, 0, 137, 255 ] },
	{ pos: [ -784, 512, 1536 ], flag: 0, tc: [ 512, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_0702A088 = [
	{ pos: [ -3071, 512, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 121, 0, 36, 255 ] },
	{ pos: [ -2866, 205, -1228 ], flag: 0, tc: [ 376, 582 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2866, 512, -1228 ], flag: 0, tc: [ 376, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -1535, 512, 1536 ], flag: 0, tc: [ 2012, 0 ], color: [ 41, 0, 137, 255 ] },
	{ pos: [ -1330, 410, 1536 ], flag: 0, tc: [ 1604, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1535, 0, 1536 ], flag: 0, tc: [ 2012, 990 ], color: [ 32, 0, 134, 255 ] },
	{ pos: [ -1330, 0, 1536 ], flag: 0, tc: [ 1604, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3071, 205, 0 ], flag: 0, tc: [ 0, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3071, 461, -716 ], flag: 0, tc: [ 1400, 70 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3071, 512, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 117, 0, 208, 255 ] },
	{ pos: [ -3071, 205, -716 ], flag: 0, tc: [ 1400, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3071, 461, -869 ], flag: 0, tc: [ 1704, 70 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3071, 512, -1023 ], flag: 0, tc: [ 2012, 0 ], color: [ 121, 0, 36, 255 ] },
	{ pos: [ -3071, 205, -1023 ], flag: 0, tc: [ 2012, 582 ], color: [ 122, 0, 32, 255 ] },
	{ pos: [ -3071, 205, -1023 ], flag: 0, tc: [ 0, 582 ], color: [ 122, 0, 32, 255 ] },
	{ pos: [ -3071, 205, -869 ], flag: 0, tc: [ 1704, 582 ], color: [ 127, 0, 0, 255 ] },
]

export const inside_castle_seg7_dl_0702A188 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070295E8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070295E8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029678, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029600.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029600.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070296D8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029618.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029618.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029718, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  3,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  6, 0x0,  8,  2,  6, 0x0),
	...Gbi.gsSP2Triangles( 6,  9, 10, 0x0, 11,  4,  6, 0x0),
	...Gbi.gsSP2Triangles(11,  6, 10, 0x0,  6,  2,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 12,  2, 0x0, 12,  0,  2, 0x0),
	Gbi.gsSP1Triangle(13,  2,  1, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070297F8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  5,  4,  7, 0x0),
	...Gbi.gsSP2Triangles( 4,  8,  7, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 2, 10,  9, 0x0,  2,  1, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 10,  1, 0x0, 12,  1, 13, 0x0),
	Gbi.gsSP1Triangle( 0, 13,  1, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070298D8, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  1, 0x0,  5,  4,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702A300 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029630.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029630.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029938, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_070295E8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070295E8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029978, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029600.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029600.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070299B8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029648.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029648.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070299F8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029660.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029660.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029A38, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029618.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_07029618.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029A78, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  2, 0x0,  4,  2,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  4, 0x0,  6,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  8, 0x0,  1,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 8, 10, 11, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 10, 15, 11, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029B78, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 2,  5,  3, 0x0,  5,  6,  3, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  6, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029C78, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  5,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  7, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 8, 12,  7, 0x0,  8, 13, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029D58, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 8, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029E58, 5, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702A548 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029EA8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  8, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 8, 12,  9, 0x0, 11, 13, 14, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07029F98, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle(12, 14, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702A088, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  8, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 8, 12,  9, 0x0, 11, 13, 12, 0x0),
	...Gbi.gsSP2Triangles( 0, 14,  1, 0x0, 11, 15, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702A650 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702A188),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702A300),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702A548),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

