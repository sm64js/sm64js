import * as Gbi from "../../../../../include/gbi"
import {
    grass_09001800,
    grass_09004800,
    grass_09005000,
    grass_09005800,
    grass_0900B800,
} from "../../../../../textures/grass"
const thi_seg7_lights_07007C90 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const thi_seg7_lights_07007CA8 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const thi_seg7_lights_07007CC0 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const thi_seg7_lights_07007CD8 = Gbi.gdSPDefLights1(
	    0x33, 0x33, 0x33,
	    0x66, 0x66, 0x66, 0x28, 0x28, 0x28
)

const thi_seg7_lights_07007CF0 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xcc, 0xcc, 0xcc, 0x28, 0x28, 0x28
)

const thi_seg7_vertex_07007D08 = [
	{ pos: [ 102, 3072, 102 ], flag: 0, tc: [ 1262, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 512, 3072, 512 ], flag: 0, tc: [ 990, 0 ], color: [ 237, 131, 247, 255 ] },
	{ pos: [ -511, 3072, 512 ], flag: 0, tc: [ 1672, 0 ], color: [ 12, 131, 244, 255 ] },
	{ pos: [ 512, 3072, -511 ], flag: 0, tc: [ 990, 0 ], color: [ 248, 131, 16, 255 ] },
	{ pos: [ 102, 3072, -101 ], flag: 0, tc: [ 1262, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 3072, 102 ], flag: 0, tc: [ 1398, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 3072, -101 ], flag: 0, tc: [ 1398, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -511, 3072, -511 ], flag: 0, tc: [ 1672, 0 ], color: [ 9, 130, 9, 255 ] },
]

const thi_seg7_vertex_07007D88 = [
	{ pos: [ -306, 2560, -306 ], flag: 0, tc: [ -1564, -544 ], color: [ 172, 84, 214, 255 ] },
	{ pos: [ -306, 2560, 307 ], flag: 0, tc: [ -1564, 2522 ], color: [ 205, 51, 103, 255 ] },
	{ pos: [ 307, 2560, 307 ], flag: 0, tc: [ 1502, 2522 ], color: [ 84, 84, 42, 255 ] },
	{ pos: [ 307, 2560, -306 ], flag: 0, tc: [ 1502, -544 ], color: [ 51, 51, 153, 255 ] },
]

const thi_seg7_vertex_07007DC8 = [
	{ pos: [ 0, 1843, -101 ], flag: 0, tc: [ 0, 650 ], color: [ 0, 75, 154, 255 ] },
	{ pos: [ -101, 1843, 0 ], flag: 0, tc: [ -370, 990 ], color: [ 131, 240, 0, 255 ] },
	{ pos: [ 0, 1843, 102 ], flag: 0, tc: [ 0, 1328 ], color: [ 0, 75, 102, 255 ] },
	{ pos: [ 102, 1843, 0 ], flag: 0, tc: [ 308, 990 ], color: [ 125, 240, 0, 255 ] },
]

const thi_seg7_vertex_07007E08 = [
	{ pos: [ -2047, 1331, -1740 ], flag: 0, tc: [ 210, 86 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ -1842, 1331, -2047 ], flag: 0, tc: [ 776, 376 ], color: [ 53, 113, 239, 255 ] },
	{ pos: [ -2047, 1331, -2047 ], flag: 0, tc: [ 938, 182 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1024, 1024, 819 ], flag: 0, tc: [ 2352, 114 ], color: [ 2, 95, 173, 255 ] },
	{ pos: [ 819, 1024, 1434 ], flag: 0, tc: [ 1330, 260 ], color: [ 52, 73, 89, 255 ] },
	{ pos: [ 1229, 1024, 1024 ], flag: 0, tc: [ 2012, 0 ], color: [ 109, 51, 220, 255 ] },
	{ pos: [ 614, 1024, 1434 ], flag: 0, tc: [ 1330, 406 ], color: [ 33, 101, 67, 255 ] },
	{ pos: [ 410, 1024, 1024 ], flag: 0, tc: [ 2012, 552 ], color: [ 181, 97, 226, 255 ] },
	{ pos: [ 614, 1024, 2048 ], flag: 0, tc: [ 308, 406 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ 410, 1024, 2048 ], flag: 0, tc: [ 308, 552 ], color: [ 205, 51, 153, 255 ] },
	{ pos: [ -1740, 1331, -1740 ], flag: 0, tc: [ 0, 376 ], color: [ 110, 58, 21, 255 ] },
	{ pos: [ -2047, 1536, -818 ], flag: 0, tc: [ 0, 376 ], color: [ 80, 56, 80, 255 ] },
	{ pos: [ -1637, 1536, -1228 ], flag: 0, tc: [ 932, 376 ], color: [ 71, 100, 227, 255 ] },
	{ pos: [ -2047, 1536, -1228 ], flag: 0, tc: [ 450, 88 ], color: [ 0, 56, 143, 255 ] },
]

const thi_seg7_vertex_07007EE8 = [
	{ pos: [ -1740, 1331, -1740 ], flag: 0, tc: [ 0, 0 ], color: [ 110, 58, 21, 255 ] },
	{ pos: [ -1842, 512, -2047 ], flag: 0, tc: [ 776, 478 ], color: [ 120, 0, 216, 255 ] },
	{ pos: [ -1842, 1331, -2047 ], flag: 0, tc: [ 776, 0 ], color: [ 53, 113, 239, 255 ] },
	{ pos: [ -2047, 1536, -1228 ], flag: 0, tc: [ 650, 0 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ -1637, 1536, -1228 ], flag: 0, tc: [ 0, 0 ], color: [ 71, 100, 227, 255 ] },
	{ pos: [ -1637, 512, -1228 ], flag: 0, tc: [ 0, 536 ], color: [ 117, 0, 208, 255 ] },
	{ pos: [ -2047, 512, -1228 ], flag: 0, tc: [ 650, 536 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1637, 512, -1228 ], flag: 0, tc: [ 932, 536 ], color: [ 117, 0, 208, 255 ] },
	{ pos: [ -2047, 1536, -818 ], flag: 0, tc: [ 0, 0 ], color: [ 80, 56, 80, 255 ] },
	{ pos: [ -2047, 512, -818 ], flag: 0, tc: [ 0, 536 ], color: [ 39, 72, 96, 255 ] },
	{ pos: [ -1637, 1536, -1228 ], flag: 0, tc: [ 932, 0 ], color: [ 71, 100, 227, 255 ] },
	{ pos: [ -1740, 512, -1740 ], flag: 0, tc: [ 480, 478 ], color: [ 62, 0, 110, 255 ] },
	{ pos: [ -1740, 1331, -1740 ], flag: 0, tc: [ 480, 0 ], color: [ 110, 58, 21, 255 ] },
	{ pos: [ -2047, 1331, -1740 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ -2047, 512, -1740 ], flag: 0, tc: [ 0, 478 ], color: [ 0, 0, 127, 255 ] },
]

const thi_seg7_vertex_07007FD8 = [
	{ pos: [ 2048, -1060, 2048 ], flag: 0, tc: [ 4056, 938 ], color: [ 186, 0, 151, 255 ] },
	{ pos: [ 614, -1060, 2048 ], flag: 0, tc: [ 2626, 938 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 614, 1024, 2048 ], flag: 0, tc: [ 2626, 288 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ -1740, 1331, -1740 ], flag: 0, tc: [ 0, 0 ], color: [ 110, 58, 21, 255 ] },
	{ pos: [ -1740, 512, -1740 ], flag: 0, tc: [ 0, 478 ], color: [ 62, 0, 110, 255 ] },
	{ pos: [ -1842, 512, -2047 ], flag: 0, tc: [ 776, 478 ], color: [ 120, 0, 216, 255 ] },
	{ pos: [ 2048, 2355, 2048 ], flag: 0, tc: [ 4056, 0 ], color: [ 206, 185, 165, 255 ] },
	{ pos: [ 614, 1229, 2048 ], flag: 0, tc: [ 2626, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 410, 1229, 2048 ], flag: 0, tc: [ 2420, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2047, -1060, 2048 ], flag: 0, tc: [ 0, 938 ], color: [ 40, 0, 136, 255 ] },
	{ pos: [ -2047, 2355, 2048 ], flag: 0, tc: [ 0, 0 ], color: [ 67, 173, 189, 255 ] },
	{ pos: [ 410, 1024, 2048 ], flag: 0, tc: [ 2420, 288 ], color: [ 205, 51, 153, 255 ] },
	{ pos: [ 410, -1060, 2048 ], flag: 0, tc: [ 2420, 938 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1024, 2867, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 238, 136, 220, 255 ] },
	{ pos: [ -2047, 2355, 2048 ], flag: 0, tc: [ 3034, 418 ], color: [ 67, 173, 189, 255 ] },
	{ pos: [ -1023, 2867, 1024 ], flag: 0, tc: [ 2012, 990 ], color: [ 27, 135, 229, 255 ] },
]

const thi_seg7_vertex_070080D8 = [
	{ pos: [ 2048, 2355, 2048 ], flag: 0, tc: [ 3034, 418 ], color: [ 206, 185, 165, 255 ] },
	{ pos: [ 1024, 2867, -1023 ], flag: 0, tc: [ 0, 990 ], color: [ 220, 136, 18, 255 ] },
	{ pos: [ 2048, 2355, -2047 ], flag: 0, tc: [ -1052, 418 ], color: [ 181, 173, 58, 255 ] },
	{ pos: [ 1024, 2867, 1024 ], flag: 0, tc: [ 2012, 990 ], color: [ 238, 136, 220, 255 ] },
	{ pos: [ 2048, 2355, -2047 ], flag: 0, tc: [ 3034, 418 ], color: [ 181, 173, 58, 255 ] },
	{ pos: [ 1024, 2867, -1023 ], flag: 0, tc: [ 2012, 990 ], color: [ 220, 136, 18, 255 ] },
	{ pos: [ -1023, 2867, -1023 ], flag: 0, tc: [ 0, 990 ], color: [ 27, 135, 27, 255 ] },
	{ pos: [ -2047, 2355, -2047 ], flag: 0, tc: [ -1052, 418 ], color: [ 54, 189, 92, 255 ] },
	{ pos: [ -1023, 2867, -1023 ], flag: 0, tc: [ 2012, 990 ], color: [ 27, 135, 27, 255 ] },
	{ pos: [ -1023, 2867, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 27, 135, 229, 255 ] },
	{ pos: [ -2047, 2355, 2048 ], flag: 0, tc: [ -1052, 418 ], color: [ 67, 173, 189, 255 ] },
	{ pos: [ -2047, 2355, -2047 ], flag: 0, tc: [ 3034, 418 ], color: [ 54, 189, 92, 255 ] },
	{ pos: [ -2047, -1060, -2047 ], flag: 0, tc: [ 4056, 1000 ], color: [ 113, 0, 56, 255 ] },
	{ pos: [ -2047, 2355, 2048 ], flag: 0, tc: [ 0, 0 ], color: [ 67, 173, 189, 255 ] },
	{ pos: [ -2047, -1060, 2048 ], flag: 0, tc: [ 0, 1000 ], color: [ 40, 0, 136, 255 ] },
]

const thi_seg7_vertex_070081C8 = [
	{ pos: [ 1024, 2867, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 238, 136, 220, 255 ] },
	{ pos: [ 2048, 2355, 2048 ], flag: 0, tc: [ -1052, 418 ], color: [ 206, 185, 165, 255 ] },
	{ pos: [ -2047, 2355, 2048 ], flag: 0, tc: [ 3034, 418 ], color: [ 67, 173, 189, 255 ] },
	{ pos: [ 2048, -1060, -2047 ], flag: 0, tc: [ 4056, 938 ], color: [ 200, 0, 113, 255 ] },
	{ pos: [ 2048, 2355, -2047 ], flag: 0, tc: [ 4056, 0 ], color: [ 181, 173, 58, 255 ] },
	{ pos: [ -2047, 2355, -2047 ], flag: 0, tc: [ 0, 0 ], color: [ 54, 189, 92, 255 ] },
	{ pos: [ -2047, -1060, -2047 ], flag: 0, tc: [ 0, 938 ], color: [ 113, 0, 56, 255 ] },
	{ pos: [ 2048, -1060, 2048 ], flag: 0, tc: [ 0, 990 ], color: [ 186, 0, 151, 255 ] },
	{ pos: [ 2048, 2355, 2048 ], flag: 0, tc: [ 0, -44 ], color: [ 206, 185, 165, 255 ] },
	{ pos: [ 2048, 2355, -2047 ], flag: 0, tc: [ 4056, -44 ], color: [ 181, 173, 58, 255 ] },
	{ pos: [ 2048, -1060, -2047 ], flag: 0, tc: [ 4056, 990 ], color: [ 200, 0, 113, 255 ] },
	{ pos: [ -2047, -1060, -2047 ], flag: 0, tc: [ 4056, 1000 ], color: [ 113, 0, 56, 255 ] },
	{ pos: [ -2047, 2355, -2047 ], flag: 0, tc: [ 4056, 0 ], color: [ 54, 189, 92, 255 ] },
	{ pos: [ -2047, 2355, 2048 ], flag: 0, tc: [ 0, 0 ], color: [ 67, 173, 189, 255 ] },
]

const thi_seg7_vertex_070082A8 = [
	{ pos: [ 410, -1023, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 174, 0, 160, 255 ] },
	{ pos: [ 1024, 1024, 819 ], flag: 0, tc: [ 614, 0 ], color: [ 2, 95, 173, 255 ] },
	{ pos: [ 1024, -1023, 819 ], flag: 0, tc: [ 614, 990 ], color: [ 53, 0, 141, 255 ] },
	{ pos: [ 819, -1023, 1434 ], flag: 0, tc: [ 786, 990 ], color: [ 32, 0, 122, 255 ] },
	{ pos: [ 614, 1024, 1434 ], flag: 0, tc: [ 582, 0 ], color: [ 33, 101, 67, 255 ] },
	{ pos: [ 614, -1023, 1434 ], flag: 0, tc: [ 582, 990 ], color: [ 113, 0, 56, 255 ] },
	{ pos: [ 819, 1024, 1434 ], flag: 0, tc: [ 786, 0 ], color: [ 52, 73, 89, 255 ] },
	{ pos: [ 410, -1023, 2048 ], flag: 0, tc: [ 990, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 410, 1024, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 181, 97, 226, 255 ] },
	{ pos: [ 410, 1024, 2048 ], flag: 0, tc: [ 990, 0 ], color: [ 205, 51, 153, 255 ] },
	{ pos: [ 614, -1023, 1434 ], flag: 0, tc: [ 376, 990 ], color: [ 113, 0, 56, 255 ] },
	{ pos: [ 614, 1024, 2048 ], flag: 0, tc: [ 990, 0 ], color: [ 73, 73, 183, 255 ] },
	{ pos: [ 614, -1023, 2048 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 614, 1024, 1434 ], flag: 0, tc: [ 376, 0 ], color: [ 33, 101, 67, 255 ] },
]

const thi_seg7_vertex_07008388 = [
	{ pos: [ 1229, -1023, 614 ], flag: 0, tc: [ 614, 990 ], color: [ 132, 0, 24, 255 ] },
	{ pos: [ 1229, 1024, 614 ], flag: 0, tc: [ 614, 0 ], color: [ 241, 98, 78, 255 ] },
	{ pos: [ 1434, 1024, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 47, 180, 255 ] },
	{ pos: [ 410, -1023, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 174, 0, 160, 255 ] },
	{ pos: [ 410, 1024, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 181, 97, 226, 255 ] },
	{ pos: [ 1024, 1024, 819 ], flag: 0, tc: [ 614, 0 ], color: [ 2, 95, 173, 255 ] },
	{ pos: [ 1024, -1023, 819 ], flag: 0, tc: [ -898, 990 ], color: [ 53, 0, 141, 255 ] },
	{ pos: [ 1024, 1024, 819 ], flag: 0, tc: [ -898, 0 ], color: [ 2, 95, 173, 255 ] },
	{ pos: [ 1229, 1024, 1024 ], flag: 0, tc: [ -1186, 0 ], color: [ 109, 51, 220, 255 ] },
	{ pos: [ 1229, -1023, 1024 ], flag: 0, tc: [ -1186, 990 ], color: [ 120, 0, 40, 255 ] },
	{ pos: [ 1229, -1023, 1024 ], flag: 0, tc: [ 546, 990 ], color: [ 120, 0, 40, 255 ] },
	{ pos: [ 1229, 1024, 1024 ], flag: 0, tc: [ 546, 0 ], color: [ 109, 51, 220, 255 ] },
	{ pos: [ 819, 1024, 1434 ], flag: 0, tc: [ 0, 0 ], color: [ 52, 73, 89, 255 ] },
	{ pos: [ 819, -1023, 1434 ], flag: 0, tc: [ 0, 990 ], color: [ 32, 0, 122, 255 ] },
	{ pos: [ 1434, -1023, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 208, 0, 139, 255 ] },
]

const thi_seg7_vertex_07008478 = [
	{ pos: [ 1434, -1023, -818 ], flag: 0, tc: [ -1870, 990 ], color: [ 122, 0, 224, 255 ] },
	{ pos: [ 1434, 1024, -409 ], flag: 0, tc: [ -1460, 0 ], color: [ 84, 84, 42, 255 ] },
	{ pos: [ 1434, -1023, -409 ], flag: 0, tc: [ -1460, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ 1434, -1023, 0 ], flag: 0, tc: [ 1398, 990 ], color: [ 208, 0, 139, 255 ] },
	{ pos: [ 1434, 1024, 0 ], flag: 0, tc: [ 1398, 0 ], color: [ 167, 47, 180, 255 ] },
	{ pos: [ 1843, 1024, 0 ], flag: 0, tc: [ 1808, 0 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ 1843, -1023, 0 ], flag: 0, tc: [ 1808, 990 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ 1843, -1023, 0 ], flag: 0, tc: [ -1052, 990 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ 1843, 1024, 0 ], flag: 0, tc: [ -1052, 0 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ 1843, 1024, 410 ], flag: 0, tc: [ -644, 0 ], color: [ 109, 47, 44, 255 ] },
	{ pos: [ 1843, -1023, 410 ], flag: 0, tc: [ -644, 990 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ 1843, -1023, 410 ], flag: 0, tc: [ 614, 990 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ 1229, 1024, 614 ], flag: 0, tc: [ 0, 0 ], color: [ 241, 98, 78, 255 ] },
	{ pos: [ 1229, -1023, 614 ], flag: 0, tc: [ 0, 990 ], color: [ 132, 0, 24, 255 ] },
	{ pos: [ 1843, 1024, 410 ], flag: 0, tc: [ 614, 0 ], color: [ 109, 47, 44, 255 ] },
]

const thi_seg7_vertex_07008568 = [
	{ pos: [ 614, -1023, -818 ], flag: 0, tc: [ -848, 990 ], color: [ 134, 0, 32, 255 ] },
	{ pos: [ 614, 1024, -1023 ], flag: 0, tc: [ -1052, 0 ], color: [ 145, 45, 216, 255 ] },
	{ pos: [ 614, -1023, -1023 ], flag: 0, tc: [ -1052, 990 ], color: [ 164, 0, 169, 255 ] },
	{ pos: [ 1434, -1023, -818 ], flag: 0, tc: [ -1870, 990 ], color: [ 122, 0, 224, 255 ] },
	{ pos: [ 1434, 1024, -818 ], flag: 0, tc: [ -1870, 0 ], color: [ 103, 42, 196, 255 ] },
	{ pos: [ 1434, 1024, -409 ], flag: 0, tc: [ -1460, 0 ], color: [ 84, 84, 42, 255 ] },
	{ pos: [ 1434, -1023, -409 ], flag: 0, tc: [ 1398, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ 1024, 1024, -409 ], flag: 0, tc: [ 990, 0 ], color: [ 230, 73, 99, 255 ] },
	{ pos: [ 1024, -1023, -409 ], flag: 0, tc: [ 990, 990 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ 1434, 1024, -409 ], flag: 0, tc: [ 1398, 0 ], color: [ 84, 84, 42, 255 ] },
	{ pos: [ 1024, -1023, -409 ], flag: 0, tc: [ 0, 990 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ 614, 1024, -818 ], flag: 0, tc: [ 546, 0 ], color: [ 167, 73, 52, 255 ] },
	{ pos: [ 614, -1023, -818 ], flag: 0, tc: [ 546, 990 ], color: [ 134, 0, 32, 255 ] },
	{ pos: [ 1024, 1024, -409 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 73, 99, 255 ] },
	{ pos: [ 614, 1024, -818 ], flag: 0, tc: [ -848, 0 ], color: [ 167, 73, 52, 255 ] },
]

const thi_seg7_vertex_07008658 = [
	{ pos: [ 205, -1023, -1637 ], flag: 0, tc: [ -2688, 990 ], color: [ 111, 0, 196, 255 ] },
	{ pos: [ 205, 1024, -1228 ], flag: 0, tc: [ -2278, 0 ], color: [ 91, 79, 37, 255 ] },
	{ pos: [ 205, -1023, -1228 ], flag: 0, tc: [ -2278, 990 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ 614, -1023, -1023 ], flag: 0, tc: [ -94, 990 ], color: [ 164, 0, 169, 255 ] },
	{ pos: [ 1024, 1024, -1228 ], flag: 0, tc: [ 356, 0 ], color: [ 251, 107, 189, 255 ] },
	{ pos: [ 1024, -1023, -1228 ], flag: 0, tc: [ 356, 990 ], color: [ 49, 0, 139, 255 ] },
	{ pos: [ 614, 1024, -1023 ], flag: 0, tc: [ -94, 0 ], color: [ 145, 45, 216, 255 ] },
	{ pos: [ 1024, -1023, -1228 ], flag: 0, tc: [ 546, 990 ], color: [ 49, 0, 139, 255 ] },
	{ pos: [ 1434, 1024, -818 ], flag: 0, tc: [ 0, 0 ], color: [ 103, 42, 196, 255 ] },
	{ pos: [ 1434, -1023, -818 ], flag: 0, tc: [ 0, 990 ], color: [ 122, 0, 224, 255 ] },
	{ pos: [ 1024, 1024, -1228 ], flag: 0, tc: [ 546, 0 ], color: [ 251, 107, 189, 255 ] },
	{ pos: [ -818, -1023, -1433 ], flag: 0, tc: [ -418, 990 ], color: [ 135, 0, 220, 255 ] },
	{ pos: [ 205, 1024, -1637 ], flag: 0, tc: [ 614, 0 ], color: [ 33, 55, 147, 255 ] },
	{ pos: [ 205, -1023, -1637 ], flag: 0, tc: [ 614, 990 ], color: [ 111, 0, 196, 255 ] },
	{ pos: [ -818, 1024, -1433 ], flag: 0, tc: [ -418, 0 ], color: [ 205, 114, 241, 255 ] },
]

const thi_seg7_vertex_07008748 = [
	{ pos: [ -1433, -1023, -2047 ], flag: 0, tc: [ 1068, 990 ], color: [ 117, 0, 209, 255 ] },
	{ pos: [ -1433, 512, -2047 ], flag: 0, tc: [ 1068, 0 ], color: [ 52, 113, 235, 255 ] },
	{ pos: [ -1023, 512, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 113, 55, 13, 255 ] },
	{ pos: [ 205, -1023, -1637 ], flag: 0, tc: [ -2688, 990 ], color: [ 111, 0, 196, 255 ] },
	{ pos: [ 205, 1024, -1637 ], flag: 0, tc: [ -2688, 0 ], color: [ 33, 55, 147, 255 ] },
	{ pos: [ 205, 1024, -1228 ], flag: 0, tc: [ -2278, 0 ], color: [ 91, 79, 37, 255 ] },
	{ pos: [ 205, -1023, -1228 ], flag: 0, tc: [ -418, 990 ], color: [ 82, 0, 96, 255 ] },
	{ pos: [ -409, 1024, -1023 ], flag: 0, tc: [ -1064, 0 ], color: [ 228, 35, 118, 255 ] },
	{ pos: [ -409, -1023, -1023 ], flag: 0, tc: [ -1064, 990 ], color: [ 227, 0, 123, 255 ] },
	{ pos: [ 205, 1024, -1228 ], flag: 0, tc: [ -418, 0 ], color: [ 91, 79, 37, 255 ] },
	{ pos: [ -409, 1024, -1023 ], flag: 0, tc: [ 546, 0 ], color: [ 228, 35, 118, 255 ] },
	{ pos: [ -818, 1024, -1433 ], flag: 0, tc: [ 0, 0 ], color: [ 205, 114, 241, 255 ] },
	{ pos: [ -818, -1023, -1433 ], flag: 0, tc: [ 0, 990 ], color: [ 135, 0, 220, 255 ] },
	{ pos: [ -409, -1023, -1023 ], flag: 0, tc: [ 546, 990 ], color: [ 227, 0, 123, 255 ] },
	{ pos: [ -1023, -1023, -1023 ], flag: 0, tc: [ 0, 990 ], color: [ 81, 0, 97, 255 ] },
]

const thi_seg7_vertex_07008838 = [
	{ pos: [ -204, -1023, -613 ], flag: 0, tc: [ 376, 990 ], color: [ 103, 0, 182, 255 ] },
	{ pos: [ -204, 768, -204 ], flag: 0, tc: [ 0, 96 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -204, -1023, -204 ], flag: 0, tc: [ 0, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -1023, -1023, -1023 ], flag: 0, tc: [ 1010, 990 ], color: [ 81, 0, 97, 255 ] },
	{ pos: [ -1023, 512, -1023 ], flag: 0, tc: [ 1010, 0 ], color: [ 113, 55, 13, 255 ] },
	{ pos: [ -2047, 512, -818 ], flag: 0, tc: [ 0, 0 ], color: [ 39, 72, 96, 255 ] },
	{ pos: [ -2047, -1023, -818 ], flag: 0, tc: [ 0, 990 ], color: [ 24, 0, 124, 255 ] },
	{ pos: [ -818, -1023, -204 ], flag: 0, tc: [ 582, 990 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -818, 768, -818 ], flag: 0, tc: [ 0, 96 ], color: [ 188, 49, 162, 255 ] },
	{ pos: [ -818, -1023, -818 ], flag: 0, tc: [ 0, 990 ], color: [ 182, 0, 153, 255 ] },
	{ pos: [ -818, 768, -204 ], flag: 0, tc: [ 582, 96 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ -818, -1023, -818 ], flag: 0, tc: [ 614, 990 ], color: [ 182, 0, 153, 255 ] },
	{ pos: [ -818, 768, -818 ], flag: 0, tc: [ 614, 96 ], color: [ 188, 49, 162, 255 ] },
	{ pos: [ -204, -1023, -613 ], flag: 0, tc: [ 0, 990 ], color: [ 103, 0, 182, 255 ] },
	{ pos: [ -204, 768, -613 ], flag: 0, tc: [ 0, 96 ], color: [ 64, 98, 210, 255 ] },
]

const thi_seg7_vertex_07008928 = [
	{ pos: [ -1023, -1023, 0 ], flag: 0, tc: [ -1052, 990 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ -1023, 1024, 0 ], flag: 0, tc: [ -1052, 0 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ -1023, 1024, 614 ], flag: 0, tc: [ -438, 0 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -204, -1023, -613 ], flag: 0, tc: [ 376, 990 ], color: [ 103, 0, 182, 255 ] },
	{ pos: [ -204, 768, -613 ], flag: 0, tc: [ 376, 96 ], color: [ 64, 98, 210, 255 ] },
	{ pos: [ -204, 768, -204 ], flag: 0, tc: [ 0, 96 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -204, -1023, -204 ], flag: 0, tc: [ 582, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -818, 768, -204 ], flag: 0, tc: [ 0, 96 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ -818, -1023, -204 ], flag: 0, tc: [ 0, 990 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -204, 768, -204 ], flag: 0, tc: [ 582, 96 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -2047, -1023, 0 ], flag: 0, tc: [ -2074, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2047, 1024, 0 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ -1023, -1023, 614 ], flag: 0, tc: [ -438, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -204, -1023, 614 ], flag: 0, tc: [ 426, 990 ], color: [ 32, 0, 134, 255 ] },
	{ pos: [ -204, 1434, 614 ], flag: 0, tc: [ 426, 8 ], color: [ 30, 44, 142, 255 ] },
	{ pos: [ 0, -1023, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 125, 0, 20, 255 ] },
]

const thi_seg7_vertex_07008A28 = [
	{ pos: [ -1023, -1023, 614 ], flag: 0, tc: [ -1052, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -2047, 1024, 614 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ -2047, -1023, 614 ], flag: 0, tc: [ -2074, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1023, 1024, 614 ], flag: 0, tc: [ -1052, 0 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -204, 1434, 614 ], flag: 0, tc: [ 0, 8 ], color: [ 30, 44, 142, 255 ] },
	{ pos: [ -204, -1023, 614 ], flag: 0, tc: [ 0, 990 ], color: [ 32, 0, 134, 255 ] },
	{ pos: [ -818, -1023, 1024 ], flag: 0, tc: [ 704, 990 ], color: [ 208, 0, 139, 255 ] },
	{ pos: [ -818, 1434, 1024 ], flag: 0, tc: [ 704, 8 ], color: [ 242, 102, 184, 255 ] },
	{ pos: [ -2047, -1023, 1024 ], flag: 0, tc: [ 1194, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 1434, 1024 ], flag: 0, tc: [ 0, 8 ], color: [ 242, 102, 184, 255 ] },
	{ pos: [ -818, -1023, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 208, 0, 139, 255 ] },
	{ pos: [ -2047, 1434, 1024 ], flag: 0, tc: [ 1194, 8 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ 0, -1023, 1024 ], flag: 0, tc: [ 1414, 990 ], color: [ 125, 0, 20, 255 ] },
	{ pos: [ 0, 1434, 1024 ], flag: 0, tc: [ 1414, 8 ], color: [ 79, 98, 12, 255 ] },
	{ pos: [ -1023, 1434, 2048 ], flag: 0, tc: [ 0, 8 ], color: [ 63, 89, 63, 255 ] },
]

const thi_seg7_vertex_07008B18 = [
	{ pos: [ -204, 1434, 614 ], flag: 0, tc: [ 426, 8 ], color: [ 30, 44, 142, 255 ] },
	{ pos: [ 0, 1434, 1024 ], flag: 0, tc: [ 0, 8 ], color: [ 79, 98, 12, 255 ] },
	{ pos: [ 0, -1023, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 125, 0, 20, 255 ] },
	{ pos: [ 0, -1023, 1024 ], flag: 0, tc: [ 1414, 990 ], color: [ 125, 0, 20, 255 ] },
	{ pos: [ -1023, 1434, 2048 ], flag: 0, tc: [ 0, 8 ], color: [ 63, 89, 63, 255 ] },
	{ pos: [ -1023, -1023, 2048 ], flag: 0, tc: [ 0, 990 ], color: [ 89, 0, 89, 255 ] },
]

const thi_seg7_vertex_07008B78 = [
	{ pos: [ -818, 1434, 1024 ], flag: 0, tc: [ -286, 0 ], color: [ 242, 102, 184, 255 ] },
	{ pos: [ -2047, 1434, 2048 ], flag: 0, tc: [ 1246, 536 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1023, 1434, 2048 ], flag: 0, tc: [ 0, 536 ], color: [ 63, 89, 63, 255 ] },
	{ pos: [ -2047, 1434, 1024 ], flag: 0, tc: [ 1246, 0 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ 0, 1434, 1024 ], flag: 0, tc: [ -1308, 0 ], color: [ 79, 98, 12, 255 ] },
	{ pos: [ -204, 1434, 614 ], flag: 0, tc: [ -1052, -260 ], color: [ 30, 44, 142, 255 ] },
	{ pos: [ -2047, 1024, 614 ], flag: 0, tc: [ 1672, 0 ], color: [ 0, 89, 89, 255 ] },
	{ pos: [ -1023, 1024, 614 ], flag: 0, tc: [ 0, 0 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -1023, 1024, 0 ], flag: 0, tc: [ 0, 582 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ -2047, 1024, 0 ], flag: 0, tc: [ 1672, 582 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ -818, 768, -204 ], flag: 0, tc: [ 722, 0 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ -204, 768, -204 ], flag: 0, tc: [ -246, 194 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -204, 768, -613 ], flag: 0, tc: [ 0, 582 ], color: [ 64, 98, 210, 255 ] },
	{ pos: [ -818, 768, -818 ], flag: 0, tc: [ 1046, 582 ], color: [ 188, 49, 162, 255 ] },
]

const thi_seg7_vertex_07008C58 = [
	{ pos: [ 1024, 1024, -1228 ], flag: 0, tc: [ 946, 582 ], color: [ 251, 107, 189, 255 ] },
	{ pos: [ 614, 1024, -818 ], flag: 0, tc: [ 946, 4 ], color: [ 167, 73, 52, 255 ] },
	{ pos: [ 1024, 1024, -409 ], flag: 0, tc: [ 224, 4 ], color: [ 230, 73, 99, 255 ] },
	{ pos: [ 1434, 1024, -409 ], flag: 0, tc: [ -136, 292 ], color: [ 84, 84, 42, 255 ] },
	{ pos: [ 1434, 1024, -818 ], flag: 0, tc: [ 224, 582 ], color: [ 103, 42, 196, 255 ] },
	{ pos: [ 614, 1024, -1023 ], flag: 0, tc: [ 1126, 148 ], color: [ 145, 45, 216, 255 ] },
	{ pos: [ 1229, 1024, 614 ], flag: 0, tc: [ 0, 0 ], color: [ 241, 98, 78, 255 ] },
	{ pos: [ 1843, 1024, 410 ], flag: 0, tc: [ 308, 582 ], color: [ 109, 47, 44, 255 ] },
	{ pos: [ 1843, 1024, 0 ], flag: 0, tc: [ 990, 582 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ 1434, 1024, 0 ], flag: 0, tc: [ 990, 172 ], color: [ 167, 47, 180, 255 ] },
	{ pos: [ -818, 1024, -1433 ], flag: 0, tc: [ 1672, 376 ], color: [ 205, 114, 241, 255 ] },
	{ pos: [ -409, 1024, -1023 ], flag: 0, tc: [ 990, 0 ], color: [ 228, 35, 118, 255 ] },
	{ pos: [ 205, 1024, -1228 ], flag: 0, tc: [ 0, 172 ], color: [ 91, 79, 37, 255 ] },
	{ pos: [ 205, 1024, -1637 ], flag: 0, tc: [ 0, 582 ], color: [ 33, 55, 147, 255 ] },
]

const thi_seg7_vertex_07008D38 = [
	{ pos: [ -2047, 512, -818 ], flag: 0, tc: [ 284, -34 ], color: [ 39, 72, 96, 255 ] },
	{ pos: [ -1023, 512, -1023 ], flag: 0, tc: [ 0, 606 ], color: [ 113, 55, 13, 255 ] },
	{ pos: [ -1433, 512, -2047 ], flag: 0, tc: [ 1802, 606 ], color: [ 52, 113, 235, 255 ] },
	{ pos: [ -2047, 512, -2047 ], flag: 0, tc: [ 2182, 250 ], color: [ 0, 127, 0, 255 ] },
]

const thi_seg7_vertex_07008D78 = [
	{ pos: [ -306, 2458, -306 ], flag: 0, tc: [ 990, 224 ], color: [ 199, 195, 162, 255 ] },
	{ pos: [ -306, 2560, -306 ], flag: 0, tc: [ 990, 0 ], color: [ 172, 84, 214, 255 ] },
	{ pos: [ 307, 2560, -306 ], flag: 0, tc: [ 0, 0 ], color: [ 51, 51, 153, 255 ] },
	{ pos: [ 307, 2458, -306 ], flag: 0, tc: [ 0, 224 ], color: [ 94, 195, 199, 255 ] },
	{ pos: [ 307, 2560, 307 ], flag: 0, tc: [ 990, 0 ], color: [ 84, 84, 42, 255 ] },
	{ pos: [ 307, 2458, 307 ], flag: 0, tc: [ 990, 224 ], color: [ 57, 195, 94, 255 ] },
	{ pos: [ 307, 2458, 307 ], flag: 0, tc: [ 0, 224 ], color: [ 57, 195, 94, 255 ] },
	{ pos: [ -306, 2560, 307 ], flag: 0, tc: [ 990, 0 ], color: [ 205, 51, 103, 255 ] },
	{ pos: [ -306, 2458, 307 ], flag: 0, tc: [ 990, 224 ], color: [ 162, 195, 57, 255 ] },
	{ pos: [ 307, 2560, 307 ], flag: 0, tc: [ 0, 0 ], color: [ 84, 84, 42, 255 ] },
	{ pos: [ -306, 2560, -306 ], flag: 0, tc: [ 0, 0 ], color: [ 172, 84, 214, 255 ] },
	{ pos: [ -306, 2458, -306 ], flag: 0, tc: [ 0, 224 ], color: [ 199, 195, 162, 255 ] },
]

const thi_seg7_vertex_07008E38 = [
	{ pos: [ 0, 1741, 0 ], flag: 0, tc: [ 330, 1614 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ 0, 1843, 102 ], flag: 0, tc: [ 690, 990 ], color: [ 0, 75, 102, 255 ] },
	{ pos: [ -101, 1843, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 131, 240, 0, 255 ] },
	{ pos: [ 307, 2458, -306 ], flag: 0, tc: [ -1666, 2624 ], color: [ 94, 195, 199, 255 ] },
	{ pos: [ 307, 2458, 307 ], flag: 0, tc: [ -1666, 1396 ], color: [ 57, 195, 94, 255 ] },
	{ pos: [ 0, 2253, 0 ], flag: 0, tc: [ -1052, 2010 ], color: [ 0, 130, 0, 255 ] },
	{ pos: [ -306, 2458, -306 ], flag: 0, tc: [ -438, 2624 ], color: [ 199, 195, 162, 255 ] },
	{ pos: [ -306, 2458, 307 ], flag: 0, tc: [ -438, 1396 ], color: [ 162, 195, 57, 255 ] },
	{ pos: [ 0, 1843, -101 ], flag: 0, tc: [ 690, 990 ], color: [ 0, 75, 154, 255 ] },
	{ pos: [ 102, 1843, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 125, 240, 0, 255 ] },
	{ pos: [ 102, 1843, 0 ], flag: 0, tc: [ 690, 990 ], color: [ 125, 240, 0, 255 ] },
	{ pos: [ 0, 1843, 102 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 75, 102, 255 ] },
	{ pos: [ -101, 1843, 0 ], flag: 0, tc: [ 690, 990 ], color: [ 131, 240, 0, 255 ] },
	{ pos: [ 0, 1843, -101 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 75, 154, 255 ] },
]

const thi_seg7_vertex_07008F18 = [
	{ pos: [ -511, 3072, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 12, 131, 244, 255 ] },
	{ pos: [ 1024, 2867, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 238, 136, 220, 255 ] },
	{ pos: [ -1023, 2867, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 27, 135, 229, 255 ] },
	{ pos: [ -1023, 2867, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 27, 135, 27, 255 ] },
	{ pos: [ 512, 3072, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 237, 131, 247, 255 ] },
	{ pos: [ -511, 3072, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 9, 130, 9, 255 ] },
	{ pos: [ 512, 3072, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 248, 131, 16, 255 ] },
	{ pos: [ 1024, 2867, -1023 ], flag: 0, tc: [ 0, 0 ], color: [ 220, 136, 18, 255 ] },
]

export const thi_seg7_dl_07008F98 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_0900B800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(thi_seg7_lights_07007C90.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007C90.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07007D08, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  5, 0x0,  3,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 6,  2,  7, 0x0,  6,  5,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  7, 0x0,  4,  7,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009010 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09005800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CA8.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CA8.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07007D88, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPLight(thi_seg7_lights_07007CC0.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CC0.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07007DC8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009080 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CA8.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CA8.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07007E08, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  3,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  6,  7, 0x0,  8,  7,  9, 0x0),
	...Gbi.gsSP2Triangles( 0, 10,  1, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPLight(thi_seg7_lights_07007CD8.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CD8.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07007EE8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07007FD8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  0,  7, 0x0,  0,  2,  7, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  6, 0x0,  9, 10,  8, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 11, 0x0,  8, 10,  6, 0x0),
	...Gbi.gsSP2Triangles(11, 12,  9, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_070080D8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_070081C8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_070082A8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  0, 0x0),
	...Gbi.gsSP2Triangles( 7,  9,  8, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSP1Triangle(10, 13, 11, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008388, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008478, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008568, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008658, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008748, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 10, 12, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008838, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(12, 14, 13, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008928, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10,  1,  0, 0x0, 10, 11,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008A28, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  4,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008B18, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPLight(thi_seg7_lights_07007CF0.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CF0.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07008B78, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  0,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008C58, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(thi_seg7_vertex_07008D38, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009530 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CC0.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007CC0.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07008D78, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  5, 0x0,  3,  2,  4, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 8, 10, 11, 0x0,  8,  7, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_070095A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(thi_seg7_vertex_07008E38, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 7,  6,  5, 0x0,  0,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 0, 10, 11, 0x0,  0, 12, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009610 = [
	Gbi.gsSPLight(thi_seg7_lights_07007C90.l[0], 1),
	Gbi.gsSPLight(thi_seg7_lights_07007C90.a, 2),
	Gbi.gsSPVertex(thi_seg7_vertex_07008F18, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  1, 0x0,  0,  3,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  5,  3, 0x0,  6,  3,  7, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  7, 0x0,  4,  7,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thi_seg7_dl_07009670 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_07008F98),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009010),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009080),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009530),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thi_seg7_dl_070095A8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(thi_seg7_dl_07009610),
	Gbi.gsSPEndDisplayList(),
]

