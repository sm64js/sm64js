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
const bbh_seg7_lights_0700F8B8 = Gbi.gdSPDefLights1(
	    0x65, 0x65, 0x38,
	    0xfe, 0xfe, 0x8c, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0700F8D0 = Gbi.gdSPDefLights1(
	    0x20, 0x20, 0x20,
	    0x50, 0x50, 0x50, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0700F8E8 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0700F900 = Gbi.gdSPDefLights1(
	    0x33, 0x2c, 0x20,
	    0x80, 0x70, 0x52, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_0700F918 = [
	{ pos: [ -818, 717, 0 ], flag: 0, tc: [ 0, 650 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 717, 1024 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 717, 1024 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 0, -255 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 0, -255 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 0, 1024 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 0, 0 ], flag: 0, tc: [ 0, 786 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 0, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 0, 0 ], flag: 0, tc: [ 0, 650 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 0, 1024 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 717, -1535 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 717, -357 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 717, -357 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 717, -1535 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
]

const bbh_seg7_vertex_0700F9F8 = [
	{ pos: [ -818, 717, 0 ], flag: 0, tc: [ 0, 786 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 717, -255 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 717, -255 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 717, 0 ], flag: 0, tc: [ 0, 650 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 717, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 717, 1024 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 717, 1024 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
]

const bbh_seg7_vertex_0700FA68 = [
	{ pos: [ -101, 0, 717 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -50, 0, 563 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 0, 563 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -50, 0, 717 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1945, 0, 1075 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2098, 0, 1024 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2098, 0, 1075 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1945, 0, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0700FAE8 = [
	{ pos: [ -1125, 512, 922 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1740, 512, 1024 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1125, 512, 1024 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1740, 512, 922 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 512, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -716, 512, 102 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 512, 102 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -716, 512, 0 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1637, 0, -1535 ], flag: 0, tc: [ 698, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1484, 0, -1586 ], flag: 0, tc: [ 624, 1008 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1637, 0, -1586 ], flag: 0, tc: [ 698, 1008 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1484, 0, -1535 ], flag: 0, tc: [ 624, 990 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0700FBA8 = [
	{ pos: [ -1740, 72, 614 ], flag: 0, tc: [ -332, 1680 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1330, 102, 614 ], flag: 0, tc: [ 478, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1740, 102, 614 ], flag: 0, tc: [ -364, 1680 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1330, 72, 614 ], flag: 0, tc: [ 512, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_0700FBE8 = [
	{ pos: [ -1125, 0, 922 ], flag: 0, tc: [ 480, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1125, 512, 1024 ], flag: 0, tc: [ 0, 552 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1125, 0, 1024 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1125, 512, 922 ], flag: 0, tc: [ 480, 552 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1740, 0, 1024 ], flag: 0, tc: [ 480, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1740, 512, 922 ], flag: 0, tc: [ 0, 552 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1740, 0, 922 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1740, 512, 1024 ], flag: 0, tc: [ 478, 552 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -716, 0, 102 ], flag: 0, tc: [ 480, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -716, 512, 102 ], flag: 0, tc: [ 478, 552 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -716, 512, 0 ], flag: 0, tc: [ 0, 552 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -716, 0, 0 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0700FCA8 = [
	{ pos: [ -1689, 92, -255 ], flag: 0, tc: [ 608, 268 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1689, -9, -255 ], flag: 0, tc: [ 716, 268 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1689, -9, 563 ], flag: 0, tc: [ 58, 1576 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1689, 92, 563 ], flag: 0, tc: [ -48, 1576 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1689, 92, 563 ], flag: 0, tc: [ -48, 1576 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1689, -9, 563 ], flag: 0, tc: [ 58, 1576 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1381, -9, 563 ], flag: 0, tc: [ 482, 1744 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1381, 92, 563 ], flag: 0, tc: [ 372, 1744 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1381, 92, 563 ], flag: 0, tc: [ 372, 1744 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1381, -9, -255 ], flag: 0, tc: [ 1138, 436 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1381, 92, -255 ], flag: 0, tc: [ 1030, 436 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1381, -9, 563 ], flag: 0, tc: [ 482, 1744 ], color: [ 127, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0700FD68 = [
	{ pos: [ -1330, 72, -255 ], flag: 0, tc: [ 274, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1330, 102, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1330, 102, 614 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1330, 72, 614 ], flag: 0, tc: [ 274, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1740, 72, 614 ], flag: 0, tc: [ 274, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1740, 102, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1740, 72, -255 ], flag: 0, tc: [ 274, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1740, 102, 614 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1330, 102, -255 ], flag: 0, tc: [ 2012, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1740, 102, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1740, 102, 614 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1330, 102, 614 ], flag: 0, tc: [ 2012, 2012 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0700FE28 = [
	{ pos: [ -2252, 102, -1535 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1842, 102, -1330 ], flag: 0, tc: [ 4056, 552 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1842, 102, -1535 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2047, 102, -357 ], flag: 0, tc: [ 2012, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2047, 102, -1330 ], flag: 0, tc: [ 2012, 552 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 102, -357 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 102, -1535 ], flag: 0, tc: [ 14276, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1023, 102, -1330 ], flag: 0, tc: [ 12232, 552 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1023, 102, -357 ], flag: 0, tc: [ 12232, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1228, 102, -1330 ], flag: 0, tc: [ 10188, 552 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1228, 102, -1535 ], flag: 0, tc: [ 10188, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 102, -357 ], flag: 0, tc: [ 14276, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2149, 154, 717 ], flag: 0, tc: [ 990, 1500 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2149, 154, 614 ], flag: 0, tc: [ 990, 480 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 154, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 154, 819 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0700FF28 = [
	{ pos: [ -1228, 0, -1330 ], flag: 0, tc: [ 3034, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1023, 0, -1330 ], flag: 0, tc: [ 4056, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1023, 102, -1330 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1842, 0, -1535 ], flag: 0, tc: [ -1052, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1842, 102, -1535 ], flag: 0, tc: [ -1052, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1842, 102, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1842, 0, -1330 ], flag: 0, tc: [ 0, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1228, 0, -1330 ], flag: 0, tc: [ 0, 992 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1228, 102, -1535 ], flag: 0, tc: [ -1052, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1228, 0, -1535 ], flag: 0, tc: [ -1052, 992 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1228, 102, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1842, 102, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2047, 102, -1330 ], flag: 0, tc: [ -1052, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2047, 0, -1330 ], flag: 0, tc: [ -1052, 988 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1842, 0, -1330 ], flag: 0, tc: [ 0, 988 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_07010018 = [
	{ pos: [ -1023, 0, -357 ], flag: 0, tc: [ 4822, 992 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1023, 102, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1023, 0, -1330 ], flag: 0, tc: [ 0, 992 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1228, 0, -1330 ], flag: 0, tc: [ 3034, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1023, 102, -1330 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1228, 102, -1330 ], flag: 0, tc: [ 3034, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2047, 0, -1330 ], flag: 0, tc: [ 0, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2047, 102, -357 ], flag: 0, tc: [ 4822, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2047, 0, -357 ], flag: 0, tc: [ 4822, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2047, 102, -1330 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1023, 102, -357 ], flag: 0, tc: [ 4822, 0 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_070100C8 = [
	{ pos: [ -1637, 256, -1535 ], flag: 0, tc: [ -1734, 1280 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 717, -1535 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 717, -1535 ], flag: 0, tc: [ -3778, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1484, 256, -1535 ], flag: 0, tc: [ -1222, 1280 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 0, -1535 ], flag: 0, tc: [ -3778, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1637, 0, -1535 ], flag: 0, tc: [ -1734, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 0, -1535 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1484, 0, -1535 ], flag: 0, tc: [ -1222, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 256, 563 ], flag: 0, tc: [ -540, 1280 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 256, 717 ], flag: 0, tc: [ 0, 1280 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 717, 1024 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 717, 0 ], flag: 0, tc: [ -2414, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 0 ], flag: 0, tc: [ -2414, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 563 ], flag: 0, tc: [ -540, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_070101A8 = [
	{ pos: [ -818, 717, -1535 ], flag: 0, tc: [ -4118, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 0, -1535 ], flag: 0, tc: [ -4118, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 0, 0 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 717 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 717, 1024 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 256, 717 ], flag: 0, tc: [ 0, 1280 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 1024 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -2252, 0, -1535 ], flag: 0, tc: [ 8484, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 717, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 0, 1024 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 717, -1535 ], flag: 0, tc: [ 8484, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -101, 717, 0 ], flag: 0, tc: [ 2352, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 0, 0 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 0, 0 ], flag: 0, tc: [ 2352, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 717, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_07010298 = [
	{ pos: [ -101, 256, 717 ], flag: 0, tc: [ 0, 1280 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -50, 256, 717 ], flag: 0, tc: [ 0, 1280 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -50, 0, 717 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 717, -1535 ], flag: 0, tc: [ -4118, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 0, 0 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 717, 0 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 0, 1024 ], flag: 0, tc: [ 6100, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1945, 256, 1024 ], flag: 0, tc: [ 6100, 1280 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 0, 1024 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 717, 1024 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2252, 717, 1024 ], flag: 0, tc: [ 7122, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2098, 256, 1024 ], flag: 0, tc: [ 6610, 1280 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2252, 0, 1024 ], flag: 0, tc: [ 7122, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2098, 0, 1024 ], flag: 0, tc: [ 6610, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 0, 717 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
]

const bbh_seg7_vertex_07010388 = [
	{ pos: [ -2098, 0, 1075 ], flag: 0, tc: [ 6610, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 256, 1024 ], flag: 0, tc: [ 6610, 1280 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 256, 1075 ], flag: 0, tc: [ 6610, 1280 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -50, 256, 563 ], flag: 0, tc: [ -542, 1280 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 0, 563 ], flag: 0, tc: [ -542, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -50, 0, 563 ], flag: 0, tc: [ -542, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 256, 563 ], flag: 0, tc: [ -542, 1280 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2098, 256, 1024 ], flag: 0, tc: [ 6610, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1945, 256, 1075 ], flag: 0, tc: [ 6100, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2098, 256, 1075 ], flag: 0, tc: [ 6610, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1945, 256, 1024 ], flag: 0, tc: [ 6100, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1945, 256, 1024 ], flag: 0, tc: [ 6100, 1280 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 0, 1075 ], flag: 0, tc: [ 6100, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 256, 1075 ], flag: 0, tc: [ 6100, 1280 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 0, 1024 ], flag: 0, tc: [ 6100, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07010478 = [
	{ pos: [ -1637, 256, -1535 ], flag: 0, tc: [ -1734, 1280 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1637, 0, -1535 ], flag: 0, tc: [ -1734, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1637, 0, -1586 ], flag: 0, tc: [ -1734, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 0, 1075 ], flag: 0, tc: [ 6610, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 0, 1024 ], flag: 0, tc: [ 6610, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 256, 1024 ], flag: 0, tc: [ 6610, 1280 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -101, 256, 563 ], flag: 0, tc: [ -542, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -50, 256, 563 ], flag: 0, tc: [ -542, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -50, 256, 717 ], flag: 0, tc: [ 0, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 256, 717 ], flag: 0, tc: [ 0, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1484, 256, -1586 ], flag: 0, tc: [ -1222, 1280 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1484, 0, -1535 ], flag: 0, tc: [ -1222, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1484, 256, -1535 ], flag: 0, tc: [ -1222, 1280 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1484, 0, -1586 ], flag: 0, tc: [ -1222, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1637, 256, -1586 ], flag: 0, tc: [ -1734, 1280 ], color: [ 127, 0, 0, 255 ] },
]

const bbh_seg7_vertex_07010568 = [
	{ pos: [ -1637, 256, -1586 ], flag: 0, tc: [ -1734, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1484, 256, -1535 ], flag: 0, tc: [ -1222, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1637, 256, -1535 ], flag: 0, tc: [ -1734, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1484, 256, -1586 ], flag: 0, tc: [ -1222, 1280 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 0, 512 ], flag: 0, tc: [ 1672, 2012 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ -2149, 154, 614 ], flag: 0, tc: [ 1330, 1572 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ -2149, 0, 614 ], flag: 0, tc: [ 1330, 2012 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ -2252, 154, 512 ], flag: 0, tc: [ 1672, 1572 ], color: [ 89, 0, 166, 255 ] },
	{ pos: [ -2149, 0, 614 ], flag: 0, tc: [ 1330, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2149, 154, 614 ], flag: 0, tc: [ 1330, 1572 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2149, 154, 717 ], flag: 0, tc: [ 990, 1572 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2149, 0, 717 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2149, 0, 717 ], flag: 0, tc: [ 990, 2012 ], color: [ 89, 0, 90, 255 ] },
	{ pos: [ -2149, 154, 717 ], flag: 0, tc: [ 990, 1572 ], color: [ 89, 0, 90, 255 ] },
	{ pos: [ -2252, 154, 819 ], flag: 0, tc: [ 650, 1572 ], color: [ 89, 0, 90, 255 ] },
	{ pos: [ -2252, 0, 819 ], flag: 0, tc: [ 650, 2012 ], color: [ 89, 0, 90, 255 ] },
]

const bbh_seg7_vertex_07010668 = [
	{ pos: [ -1279, 614, -255 ], flag: 0, tc: [ 4822, 260 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 0, -255 ], flag: 0, tc: [ 7122, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 717, -255 ], flag: 0, tc: [ 7122, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2047, 102, -357 ], flag: 0, tc: [ 990, 1720 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1791, 614, -357 ], flag: 0, tc: [ -286, 260 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1791, 102, -357 ], flag: 0, tc: [ -286, 1720 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2252, 717, -357 ], flag: 0, tc: [ 2012, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2252, 102, -357 ], flag: 0, tc: [ 2012, 1720 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2047, 0, -357 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 717, -357 ], flag: 0, tc: [ -5140, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1279, 614, -357 ], flag: 0, tc: [ -2840, 260 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1023, 0, -357 ], flag: 0, tc: [ -4118, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1279, 102, -357 ], flag: 0, tc: [ -2840, 1720 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1023, 102, -357 ], flag: 0, tc: [ -4118, 1720 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 102, -357 ], flag: 0, tc: [ -5140, 1720 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1279, 102, -255 ], flag: 0, tc: [ 4822, 1720 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_07010768 = [
	{ pos: [ -818, 0, -255 ], flag: 0, tc: [ 7122, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1791, 102, -255 ], flag: 0, tc: [ 2268, 1720 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 0, -255 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 102, -255 ], flag: 0, tc: [ 4822, 1720 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1791, 614, -255 ], flag: 0, tc: [ 2268, 260 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 717, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 614, -255 ], flag: 0, tc: [ 4822, 260 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 717, -255 ], flag: 0, tc: [ 7122, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1791, 614, -255 ], flag: 0, tc: [ 2778, 260 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1791, 614, -357 ], flag: 0, tc: [ 2778, 260 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1279, 614, -357 ], flag: 0, tc: [ 224, 260 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1791, 102, -255 ], flag: 0, tc: [ 2778, 1720 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1791, 614, -357 ], flag: 0, tc: [ 2778, 260 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1791, 614, -255 ], flag: 0, tc: [ 2778, 260 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1279, 614, -255 ], flag: 0, tc: [ 224, 260 ], color: [ 0, 129, 0, 255 ] },
]

const bbh_seg7_vertex_07010858 = [
	{ pos: [ -1279, 102, -255 ], flag: 0, tc: [ 224, 1720 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1791, 102, -357 ], flag: 0, tc: [ 2778, 1720 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1791, 102, -255 ], flag: 0, tc: [ 2778, 1720 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1791, 102, -255 ], flag: 0, tc: [ 2778, 1720 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1791, 102, -357 ], flag: 0, tc: [ 2778, 1720 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1791, 614, -357 ], flag: 0, tc: [ 2778, 260 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1279, 614, -255 ], flag: 0, tc: [ 224, 260 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1279, 614, -357 ], flag: 0, tc: [ 224, 260 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1279, 102, -357 ], flag: 0, tc: [ 224, 1720 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1279, 102, -255 ], flag: 0, tc: [ 224, 1720 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1279, 102, -357 ], flag: 0, tc: [ 224, 1720 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_07010908 = [
	{ pos: [ -1125, 0, 922 ], flag: 0, tc: [ 3034, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1740, 0, 922 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1740, 512, 922 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1125, 512, 922 ], flag: 0, tc: [ 3034, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 512, 102 ], flag: 0, tc: [ 3034, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -716, 512, 102 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -716, 0, 102 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 0, 102 ], flag: 0, tc: [ 3034, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_07010988 = [
	{ pos: [ -1791, 614, -357 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1279, 102, -357 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1791, 102, -357 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1279, 614, -357 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1279, 614, -255 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1791, 614, -255 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1791, 102, -255 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 102, -255 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_07010A08 = [
	{ pos: [ -818, 0, -1535 ], flag: 0, tc: [ 8144, -3098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 0, -1535 ], flag: 0, tc: [ -6160, -3098 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 0, -306 ], flag: 0, tc: [ -6160, 5076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 0, -306 ], flag: 0, tc: [ 8144, 5076 ], color: [ 0, 127, 0, 255 ] },
]

export const bbh_seg7_dl_07010A48 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8B8.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8B8.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700F918, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  3, 0x0,  5,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 5,  9,  7, 0x0, 10, 11, 12, 0x0),
	Gbi.gsSP1Triangle(10, 13, 11, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700F9F8, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  6,  1, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8D0.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8D0.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FA68, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8E8.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8E8.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FAE8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07010B58 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8B8.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8B8.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FBA8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8E8.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8E8.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FBE8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0700F900.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F900.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FCA8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07010C30 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bbh_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8B8.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8B8.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FD68, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8E8.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700F8E8.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FE28, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  5,  3, 0x0,  0,  4,  1, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 6, 10,  9, 0x0,  6,  8, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07010D00 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700FF28, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010018, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	Gbi.gsSP1Triangle( 0, 10,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07010D90 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_070100C8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  0, 0x0,  4,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 6,  1,  3, 0x0,  7,  6,  3, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12,  8, 11, 0x0, 12, 13,  8, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_070101A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010298, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  7,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  9, 0x0,  7, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 10, 11, 0x0, 12, 11, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010388, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010478, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010568, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010668, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  3,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  3,  5, 0x0,  9,  4,  6, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  4, 0x0, 11,  5, 12, 0x0),
	...Gbi.gsSP2Triangles(11,  8,  5, 0x0, 13, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(13, 12, 10, 0x0,  9, 13, 10, 0x0),
	...Gbi.gsSP2Triangles( 9, 14, 13, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010768, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  4, 0x0,  2,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  7, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 8, 10, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010858, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 0, 10,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07011058 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09002800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010908, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070110A0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bbh_seg7_texture_07002000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010988, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_070110E8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_07010A08, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_07011120 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07010A48),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07010B58),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07010C30),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07010D00),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07010D90),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_07011058),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_070110A0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_070110E8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

