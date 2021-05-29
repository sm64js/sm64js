import * as Gbi from "../../../../../include/gbi"
import {
    jrb_seg7_texture_07000000,
    jrb_seg7_texture_07000800,
    jrb_seg7_texture_07001800,
    jrb_seg7_texture_07002000
} from "../../../texture.inc"

import {
    water_09000000,
    water_09000800,
    water_09001800,
    water_09002800,
    water_09003800,
    water_09004800,
    water_09005800,
    water_09006000,
    water_09006800,
    water_09007800,
    water_09008800,
    water_09009000,
    water_0900A000,
    water_0900A800,
    water_0900B800
} from "../../../../../textures/water"
const jrb_seg7_lights_07005990 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const jrb_seg7_lights_070059A8 = Gbi.gdSPDefLights1(
	    0x26, 0x26, 0x26,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const jrb_seg7_lights_070059C0 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const jrb_seg7_vertex_070059D8 = [
	{ pos: [ 4284, 1485, 7069 ], flag: 0, tc: [ 10352, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2813, 1485, 5598 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2980, 1485, 5431 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 5084, 1536, 6377 ], flag: 0, tc: [ 10734, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3392, 1536, 5018 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4909, 1536, 6535 ], flag: 0, tc: [ 10670, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3559, 1536, 4852 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4909, 1485, 6535 ], flag: 0, tc: [ 10670, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3392, 1485, 5018 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3559, 1485, 4852 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 5084, 1485, 6377 ], flag: 0, tc: [ 10734, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4460, 1536, 6912 ], flag: 0, tc: [ 10416, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2813, 1536, 5598 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4284, 1536, 7069 ], flag: 0, tc: [ 10352, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2980, 1536, 5431 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
]

const jrb_seg7_vertex_07005AC8 = [
	{ pos: [ 3611, 1485, 7264 ], flag: 0, tc: [ 8664, -3098 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2835, 1485, 6155 ], flag: 0, tc: [ 2012, -2076 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3861, 1485, 7182 ], flag: 0, tc: [ 9258, -2076 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4284, 1485, 7069 ], flag: 0, tc: [ 10352, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2980, 1485, 5431 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4460, 1485, 6912 ], flag: 0, tc: [ 10416, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3861, 1536, 7182 ], flag: 0, tc: [ 9258, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2668, 1536, 6322 ], flag: 0, tc: [ 2012, 4054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3611, 1536, 7264 ], flag: 0, tc: [ 8664, 4054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2835, 1536, 6155 ], flag: 0, tc: [ 2012, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2668, 1485, 6322 ], flag: 0, tc: [ 2012, -3098 ], color: [ 0, 129, 0, 255 ] },
]

const jrb_seg7_vertex_07005B78 = [
	{ pos: [ -4338, 1249, 2034 ], flag: 0, tc: [ 3032, 0 ], color: [ 33, 101, 67, 255 ] },
	{ pos: [ -4133, 737, 2034 ], flag: 0, tc: [ 1588, 2520 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ -4133, 1249, 2034 ], flag: 0, tc: [ 1588, 0 ], color: [ 189, 101, 33, 255 ] },
	{ pos: [ -4133, 737, 2239 ], flag: 0, tc: [ 144, 2520 ], color: [ 153, 51, 205, 255 ] },
	{ pos: [ -4133, 1249, 2239 ], flag: 0, tc: [ 144, 0 ], color: [ 223, 101, 189, 255 ] },
	{ pos: [ -4338, 737, 2034 ], flag: 0, tc: [ 3032, 2520 ], color: [ 103, 51, 51, 255 ] },
	{ pos: [ -4338, 737, 2239 ], flag: 0, tc: [ 1588, 2520 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ -4338, 1249, 2239 ], flag: 0, tc: [ 1588, 0 ], color: [ 67, 101, 223, 255 ] },
]

const jrb_seg7_vertex_07005BF8 = [
	{ pos: [ -4082, 1249, 1983 ], flag: 0, tc: [ 1244, -5244 ], color: [ 24, 114, 208, 255 ] },
	{ pos: [ -4495, 1024, 1877 ], flag: 0, tc: [ -812, -4120 ], color: [ 182, 70, 182, 255 ] },
	{ pos: [ -4389, 1249, 1983 ], flag: 0, tc: [ -284, -5244 ], color: [ 228, 120, 228, 255 ] },
	{ pos: [ -3976, 1024, 1877 ], flag: 0, tc: [ 128, -4120 ], color: [ 96, 67, 208, 255 ] },
	{ pos: [ -4082, 1249, 1983 ], flag: 0, tc: [ 480, -5244 ], color: [ 24, 114, 208, 255 ] },
	{ pos: [ -4082, 1249, 2290 ], flag: 0, tc: [ 1500, -5244 ], color: [ 42, 111, 43, 255 ] },
	{ pos: [ -3976, 1024, 2395 ], flag: 0, tc: [ 1852, -4120 ], color: [ 74, 70, 74, 255 ] },
	{ pos: [ -4082, 1249, 2290 ], flag: 0, tc: [ 1244, -5244 ], color: [ 42, 111, 43, 255 ] },
	{ pos: [ -4495, 1024, 2395 ], flag: 0, tc: [ -812, -4120 ], color: [ 208, 67, 96, 255 ] },
	{ pos: [ -3976, 1024, 2395 ], flag: 0, tc: [ 1772, -4120 ], color: [ 74, 70, 74, 255 ] },
	{ pos: [ -4389, 1249, 2290 ], flag: 0, tc: [ -284, -5244 ], color: [ 208, 114, 24, 255 ] },
	{ pos: [ -4389, 1249, 2290 ], flag: 0, tc: [ 1500, -5244 ], color: [ 208, 114, 24, 255 ] },
	{ pos: [ -4495, 1024, 1877 ], flag: 0, tc: [ 128, -4120 ], color: [ 182, 70, 182, 255 ] },
	{ pos: [ -4495, 1024, 2395 ], flag: 0, tc: [ 1852, -4120 ], color: [ 208, 67, 96, 255 ] },
	{ pos: [ -4389, 1249, 1983 ], flag: 0, tc: [ 480, -5244 ], color: [ 228, 120, 228, 255 ] },
]

const jrb_seg7_vertex_07005CE8 = [
	{ pos: [ 1762, 1843, 1734 ], flag: 0, tc: [ 2580, -3810 ], color: [ 88, 167, 239, 255 ] },
	{ pos: [ 1853, 1843, 2191 ], flag: 0, tc: [ 3036, -1534 ], color: [ 114, 214, 35, 255 ] },
	{ pos: [ 1546, 1843, 2703 ], flag: 0, tc: [ 1500, 1020 ], color: [ 4, 175, 96, 255 ] },
	{ pos: [ -4082, 1249, 1983 ], flag: 0, tc: [ 1244, -5244 ], color: [ 24, 114, 208, 255 ] },
	{ pos: [ -3976, 1024, 1877 ], flag: 0, tc: [ 1772, -4120 ], color: [ 96, 67, 208, 255 ] },
	{ pos: [ -4495, 1024, 1877 ], flag: 0, tc: [ -812, -4120 ], color: [ 182, 70, 182, 255 ] },
	{ pos: [ -4082, 1249, 1983 ], flag: 0, tc: [ 2012, 990 ], color: [ 24, 114, 208, 255 ] },
	{ pos: [ -4133, 1249, 2034 ], flag: 0, tc: [ 1672, 820 ], color: [ 189, 101, 33, 255 ] },
	{ pos: [ -4133, 1249, 2239 ], flag: 0, tc: [ 308, 820 ], color: [ 223, 101, 189, 255 ] },
	{ pos: [ -4082, 1249, 2290 ], flag: 0, tc: [ 0, 990 ], color: [ 42, 111, 43, 255 ] },
	{ pos: [ -4389, 1249, 1983 ], flag: 0, tc: [ 2012, 0 ], color: [ 228, 120, 228, 255 ] },
	{ pos: [ -4338, 1249, 2034 ], flag: 0, tc: [ 1672, 138 ], color: [ 33, 101, 67, 255 ] },
	{ pos: [ -4338, 1249, 2239 ], flag: 0, tc: [ 308, 138 ], color: [ 67, 101, 223, 255 ] },
	{ pos: [ -4389, 1249, 2290 ], flag: 0, tc: [ 0, 0 ], color: [ 208, 114, 24, 255 ] },
	{ pos: [ 522, 1843, 2287 ], flag: 0, tc: [ -3604, -1054 ], color: [ 223, 167, 83, 255 ] },
]

const jrb_seg7_vertex_07005DD8 = [
	{ pos: [ 1480, 1536, 7814 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1098, 1536, 6104 ], flag: 0, tc: [ -980, -3276 ], color: [ 248, 70, 151, 255 ] },
	{ pos: [ 532, 1536, 6198 ], flag: 0, tc: [ -2392, -3042 ], color: [ 171, 79, 207, 255 ] },
	{ pos: [ 522, 1946, 2287 ], flag: 0, tc: [ -3604, -1054 ], color: [ 223, 89, 83, 255 ] },
	{ pos: [ 1546, 1946, 2703 ], flag: 0, tc: [ 1500, 1020 ], color: [ 66, 49, 96, 255 ] },
	{ pos: [ 1853, 1946, 2191 ], flag: 0, tc: [ 3036, -1534 ], color: [ 103, 73, 4, 255 ] },
	{ pos: [ 1762, 1946, 1734 ], flag: 0, tc: [ 2580, -3810 ], color: [ 88, 89, 239, 255 ] },
	{ pos: [ 532, 1536, 6198 ], flag: 0, tc: [ 0, 990 ], color: [ 171, 79, 207, 255 ] },
	{ pos: [ 532, 1024, 6198 ], flag: 0, tc: [ 0, 3542 ], color: [ 194, 46, 156, 255 ] },
	{ pos: [ 386, 1075, 7315 ], flag: 0, tc: [ 5540, 3288 ], color: [ 174, 95, 240, 255 ] },
	{ pos: [ 330, 1536, 7742 ], flag: 0, tc: [ 7672, 990 ], color: [ 144, 56, 242, 255 ] },
	{ pos: [ 330, 1124, 7742 ], flag: 0, tc: [ 7672, 3046 ], color: [ 161, 80, 235, 255 ] },
	{ pos: [ 1888, 1536, 6165 ], flag: 0, tc: [ 984, -3126 ], color: [ 29, 72, 157, 255 ] },
	{ pos: [ 2863, 1536, 7010 ], flag: 0, tc: [ 3420, -1016 ], color: [ 71, 70, 179, 255 ] },
	{ pos: [ 330, 1536, 7742 ], flag: 0, tc: [ -2896, 812 ], color: [ 144, 56, 242, 255 ] },
]

const jrb_seg7_vertex_07005EC8 = [
	{ pos: [ 532, 1024, 6198 ], flag: 0, tc: [ 7748, 3542 ], color: [ 194, 46, 156, 255 ] },
	{ pos: [ 532, 1536, 6198 ], flag: 0, tc: [ 7748, 990 ], color: [ 171, 79, 207, 255 ] },
	{ pos: [ 1098, 1536, 6104 ], flag: 0, tc: [ 3892, 990 ], color: [ 248, 70, 151, 255 ] },
	{ pos: [ 1480, 1536, 7814 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3190, 1536, 7360 ], flag: 0, tc: [ 4236, -142 ], color: [ 83, 56, 179, 255 ] },
	{ pos: [ 2863, 1536, 7010 ], flag: 0, tc: [ 3420, -1016 ], color: [ 71, 70, 179, 255 ] },
	{ pos: [ 1888, 1024, 6165 ], flag: 0, tc: [ 6236, 3542 ], color: [ 61, 0, 145, 255 ] },
	{ pos: [ 2863, 1536, 7010 ], flag: 0, tc: [ -200, 990 ], color: [ 71, 70, 179, 255 ] },
	{ pos: [ 2863, 1024, 7010 ], flag: 0, tc: [ -200, 3542 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 1888, 1536, 6165 ], flag: 0, tc: [ 6236, 990 ], color: [ 29, 72, 157, 255 ] },
	{ pos: [ 3190, 1536, 7360 ], flag: 0, tc: [ -2584, 990 ], color: [ 83, 56, 179, 255 ] },
	{ pos: [ 3190, 1024, 7360 ], flag: 0, tc: [ -2584, 3542 ], color: [ 92, 0, 170, 255 ] },
	{ pos: [ 1098, 1024, 6104 ], flag: 0, tc: [ 3892, 3542 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 1888, 1536, 6165 ], flag: 0, tc: [ 0, 990 ], color: [ 29, 72, 157, 255 ] },
	{ pos: [ 1888, 1024, 6165 ], flag: 0, tc: [ 0, 3544 ], color: [ 61, 0, 145, 255 ] },
]

const jrb_seg7_vertex_07005FB8 = [
	{ pos: [ 1546, 1946, 2703 ], flag: 0, tc: [ 0, 0 ], color: [ 66, 49, 96, 255 ] },
	{ pos: [ 1853, 1843, 2191 ], flag: 0, tc: [ 2796, 480 ], color: [ 114, 214, 35, 255 ] },
	{ pos: [ 1853, 1946, 2191 ], flag: 0, tc: [ 2796, 0 ], color: [ 103, 73, 4, 255 ] },
	{ pos: [ 1762, 1843, 1734 ], flag: 0, tc: [ 4920, 480 ], color: [ 88, 167, 239, 255 ] },
	{ pos: [ 1762, 1946, 1734 ], flag: 0, tc: [ 4920, 0 ], color: [ 88, 89, 239, 255 ] },
	{ pos: [ 1546, 1843, 2703 ], flag: 0, tc: [ 0, 478 ], color: [ 4, 175, 96, 255 ] },
	{ pos: [ 522, 1946, 2287 ], flag: 0, tc: [ -3604, 0 ], color: [ 223, 89, 83, 255 ] },
	{ pos: [ 1546, 1843, 2703 ], flag: 0, tc: [ 1908, 478 ], color: [ 4, 175, 96, 255 ] },
	{ pos: [ 1546, 1946, 2703 ], flag: 0, tc: [ 1908, 0 ], color: [ 66, 49, 96, 255 ] },
	{ pos: [ 522, 1843, 2287 ], flag: 0, tc: [ -3604, 480 ], color: [ 223, 167, 83, 255 ] },
	{ pos: [ -1675, 1331, 6547 ], flag: 0, tc: [ 15876, 4054 ], color: [ 107, 46, 207, 255 ] },
	{ pos: [ -2073, 1024, 6165 ], flag: 0, tc: [ 12960, 2522 ], color: [ 43, 0, 137, 255 ] },
	{ pos: [ -2073, 1331, 6165 ], flag: 0, tc: [ 12960, 4054 ], color: [ 240, 80, 160, 255 ] },
	{ pos: [ -1675, 1024, 6547 ], flag: 0, tc: [ 15876, 2522 ], color: [ 126, 0, 1, 255 ] },
	{ pos: [ -1944, 1331, 7211 ], flag: 0, tc: [ 19276, 4054 ], color: [ 83, 89, 33, 255 ] },
	{ pos: [ -1944, 1024, 7211 ], flag: 0, tc: [ 19276, 2522 ], color: [ 117, 0, 47, 255 ] },
]

const jrb_seg7_vertex_070060B8 = [
	{ pos: [ -2073, 1331, 6165 ], flag: 0, tc: [ 12960, 4054 ], color: [ 240, 80, 160, 255 ] },
	{ pos: [ -2073, 1024, 6165 ], flag: 0, tc: [ 12960, 2522 ], color: [ 43, 0, 137, 255 ] },
	{ pos: [ -3017, 1024, 6778 ], flag: 0, tc: [ 7700, 2522 ], color: [ 187, 0, 150, 255 ] },
	{ pos: [ -3017, 1331, 6778 ], flag: 0, tc: [ 7700, 4054 ], color: [ 208, 89, 181, 255 ] },
	{ pos: [ -1944, 1331, 7211 ], flag: 0, tc: [ -420, 820 ], color: [ 83, 89, 33, 255 ] },
	{ pos: [ -1675, 1331, 6547 ], flag: 0, tc: [ 1544, 1550 ], color: [ 107, 46, 207, 255 ] },
	{ pos: [ -2073, 1331, 6165 ], flag: 0, tc: [ 3028, 906 ], color: [ 240, 80, 160, 255 ] },
	{ pos: [ -3017, 1331, 6778 ], flag: 0, tc: [ 1664, -1114 ], color: [ 208, 89, 181, 255 ] },
]

const jrb_seg7_vertex_07006138 = [
	{ pos: [ -2568, 1024, 6148 ], flag: 0, tc: [ 1120, 582 ], color: [ 167, 5, 89, 255 ] },
	{ pos: [ -2534, 2048, 6114 ], flag: 0, tc: [ 1804, -440 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2568, 1024, 6080 ], flag: 0, tc: [ 800, 582 ], color: [ 167, 5, 167, 255 ] },
	{ pos: [ -2500, 1024, 6080 ], flag: 0, tc: [ 1120, 582 ], color: [ 89, 5, 167, 255 ] },
	{ pos: [ -2500, 1024, 6148 ], flag: 0, tc: [ 1444, 582 ], color: [ 89, 5, 89, 255 ] },
	{ pos: [ 532, 1024, 6198 ], flag: 0, tc: [ 5488, 2892 ], color: [ 194, 46, 156, 255 ] },
	{ pos: [ 330, 1024, 6232 ], flag: 0, tc: [ 3768, 2592 ], color: [ 247, 126, 251, 255 ] },
	{ pos: [ 386, 1075, 7315 ], flag: 0, tc: [ 6668, 256 ], color: [ 174, 95, 240, 255 ] },
	{ pos: [ 111, 1024, 6993 ], flag: 0, tc: [ 3508, 664 ], color: [ 240, 125, 251, 255 ] },
	{ pos: [ -210, 1024, 7709 ], flag: 0, tc: [ 2240, -1282 ], color: [ 238, 125, 245, 255 ] },
	{ pos: [ 330, 1124, 7742 ], flag: 0, tc: [ 7120, -756 ], color: [ 161, 80, 235, 255 ] },
	{ pos: [ 519, 1024, 3349 ], flag: 0, tc: [ 2184, 8056 ], color: [ 134, 9, 32, 255 ] },
	{ pos: [ 659, 2970, 3312 ], flag: 0, tc: [ 1904, 8130 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 622, 1024, 3172 ], flag: 0, tc: [ 1980, 8410 ], color: [ 224, 9, 134, 255 ] },
	{ pos: [ 799, 1024, 3275 ], flag: 0, tc: [ 1628, 8204 ], color: [ 122, 9, 224, 255 ] },
	{ pos: [ 696, 1024, 3452 ], flag: 0, tc: [ 1832, 7850 ], color: [ 32, 9, 122, 255 ] },
]

const jrb_seg7_vertex_07006238 = [
	{ pos: [ 54, 2765, 2724 ], flag: 0, tc: [ 3116, 9304 ], color: [ 254, 126, 252, 255 ] },
	{ pos: [ 105, 1024, 2635 ], flag: 0, tc: [ 3012, 9480 ], color: [ 63, 7, 147, 255 ] },
	{ pos: [ -34, 1024, 2672 ], flag: 0, tc: [ 3292, 9406 ], color: [ 147, 7, 192, 255 ] },
	{ pos: [ 142, 1024, 2775 ], flag: 0, tc: [ 2936, 9202 ], color: [ 109, 7, 63, 255 ] },
	{ pos: [ 2, 1024, 2812 ], flag: 0, tc: [ 3216, 9128 ], color: [ 192, 7, 109, 255 ] },
	{ pos: [ 1166, 1024, 3843 ], flag: 0, tc: [ 896, 7070 ], color: [ 109, 7, 63, 255 ] },
	{ pos: [ 1088, 2560, 3798 ], flag: 0, tc: [ 1052, 7160 ], color: [ 5, 126, 254, 255 ] },
	{ pos: [ 1043, 1024, 3876 ], flag: 0, tc: [ 1140, 7004 ], color: [ 193, 7, 109, 255 ] },
	{ pos: [ 1010, 1024, 3752 ], flag: 0, tc: [ 1208, 7252 ], color: [ 147, 7, 193, 255 ] },
	{ pos: [ 1133, 1024, 3720 ], flag: 0, tc: [ 960, 7316 ], color: [ 63, 7, 147, 255 ] },
	{ pos: [ -5256, 1024, 4733 ], flag: 0, tc: [ 7296, -648 ], color: [ 19, 124, 244, 255 ] },
	{ pos: [ -6304, 1126, 3887 ], flag: 0, tc: [ 2572, -394 ], color: [ 16, 125, 252, 255 ] },
	{ pos: [ -6561, 1126, 4330 ], flag: 0, tc: [ 3036, 478 ], color: [ 6, 126, 255, 255 ] },
	{ pos: [ -4161, 1024, 6315 ], flag: 0, tc: [ 13976, -38 ], color: [ 12, 126, 248, 255 ] },
]

const jrb_seg7_vertex_07006318 = [
	{ pos: [ -6077, 1024, 3782 ], flag: 0, tc: [ 2876, -808 ], color: [ 48, 117, 248, 255 ] },
	{ pos: [ -5963, 1024, 1954 ], flag: 0, tc: [ -1400, -3232 ], color: [ 39, 120, 12, 255 ] },
	{ pos: [ -6161, 1126, 1602 ], flag: 0, tc: [ -2772, -3422 ], color: [ 22, 124, 6, 255 ] },
	{ pos: [ -6304, 1126, 3887 ], flag: 0, tc: [ 2572, -394 ], color: [ 16, 125, 252, 255 ] },
	{ pos: [ -5256, 1024, 4733 ], flag: 0, tc: [ 7296, -648 ], color: [ 19, 124, 244, 255 ] },
	{ pos: [ -5345, 1024, 1011 ], flag: 0, tc: [ -2208, -5180 ], color: [ 21, 123, 20, 255 ] },
	{ pos: [ -5647, 1126, 716 ], flag: 0, tc: [ -3700, -5170 ], color: [ 14, 125, 13, 255 ] },
	{ pos: [ -5756, 1024, 1719 ], flag: 0, tc: [ -1468, -3782 ], color: [ 25, 123, 17, 255 ] },
	{ pos: [ -7494, 1126, 173 ], flag: 0, tc: [ -9664, -3544 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5762, 1126, -1125 ], flag: 0, tc: [ -8580, -7324 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7818, 1126, 2416 ], flag: 0, tc: [ -4872, -340 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6561, 1126, 4330 ], flag: 0, tc: [ 3032, 478 ], color: [ 6, 126, 255, 255 ] },
	{ pos: [ -4579, 1024, 508 ], flag: 0, tc: [ -1552, -6762 ], color: [ 14, 123, 26, 255 ] },
	{ pos: [ -4690, 1126, 88 ], flag: 0, tc: [ -2880, -7148 ], color: [ 7, 125, 18, 255 ] },
	{ pos: [ -4307, 1024, 405 ], flag: 0, tc: [ -1128, -7230 ], color: [ 9, 123, 28, 255 ] },
	{ pos: [ -3747, 1024, 257 ], flag: 0, tc: [ -104, -8114 ], color: [ 2, 122, 33, 255 ] },
]

const jrb_seg7_vertex_07006418 = [
	{ pos: [ -3747, 1024, 257 ], flag: 0, tc: [ -104, -8114 ], color: [ 2, 122, 33, 255 ] },
	{ pos: [ -3991, 1126, -97 ], flag: 0, tc: [ -1596, -8252 ], color: [ 0, 124, 23, 255 ] },
	{ pos: [ -4690, 1126, 88 ], flag: 0, tc: [ -2880, -7148 ], color: [ 7, 125, 18, 255 ] },
	{ pos: [ -3443, 1024, 319 ], flag: 0, tc: [ 804, -8416 ], color: [ 248, 120, 40, 255 ] },
	{ pos: [ -5762, 1126, -1125 ], flag: 0, tc: [ -8580, -7324 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6980, 1126, -712 ], flag: 0, tc: [ -10588, -5290 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7494, 1126, 173 ], flag: 0, tc: [ -9664, -3544 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6304, 1126, 3887 ], flag: 0, tc: [ 2572, -394 ], color: [ 16, 125, 252, 255 ] },
	{ pos: [ -7818, 1126, 2416 ], flag: 0, tc: [ -4872, -340 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6161, 1126, 1602 ], flag: 0, tc: [ -2772, -3422 ], color: [ 22, 124, 6, 255 ] },
	{ pos: [ -5647, 1126, 716 ], flag: 0, tc: [ -3700, -5170 ], color: [ 14, 125, 13, 255 ] },
]

const jrb_seg7_vertex_070064C8 = [
	{ pos: [ -4133, 737, 2034 ], flag: 0, tc: [ 0, 0 ], color: [ 214, 84, 84, 255 ] },
	{ pos: [ -4338, 737, 2239 ], flag: 0, tc: [ 0, 0 ], color: [ 42, 84, 172, 255 ] },
	{ pos: [ -4133, 737, 2239 ], flag: 0, tc: [ 0, 0 ], color: [ 153, 51, 205, 255 ] },
	{ pos: [ -4338, 737, 2034 ], flag: 0, tc: [ 0, 0 ], color: [ 103, 51, 51, 255 ] },
]

export const jrb_seg7_dl_07006508 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_0900A000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(jrb_seg7_lights_07005990.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_07005990.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_070059D8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07005AC8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	Gbi.gsSP1Triangle( 0, 10,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_070065A8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(jrb_seg7_lights_070059A8.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_070059A8.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_07005B78, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  3,  4, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 7,  6,  5, 0x0,  7,  5,  0, 0x0),
	Gbi.gsSPLight(jrb_seg7_lights_07005990.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_07005990.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_07005BF8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07005CE8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10,  7,  6, 0x0, 10, 11,  7, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 12, 0x0,  9, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 11, 10, 0x0, 13, 12, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07005DD8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles( 0, 12,  1, 0x0,  0, 13, 12, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07005EC8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  7, 10, 0x0,  8, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 12,  2, 13, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07005FB8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  3, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	...Gbi.gsSP2Triangles(13, 10, 14, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_070060B8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_070067F0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09002800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(jrb_seg7_vertex_07006138, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 3,  1,  4, 0x0,  4,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  8,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  7, 0x0,  9,  7,  8, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 14, 12, 15, 0x0),
	...Gbi.gsSP2Triangles(15, 12, 11, 0x0, 12, 14, 13, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07006238, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  0,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  2, 0x0,  3,  0,  4, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  8,  6,  9, 0x0),
	...Gbi.gsSP2Triangles( 6,  5,  9, 0x0,  7,  6,  8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07006318, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  2,  7, 0x0,  7,  2,  1, 0x0),
	...Gbi.gsSP2Triangles( 3,  2,  8, 0x0,  2,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 3, 10, 11, 0x0, 12,  6,  5, 0x0),
	...Gbi.gsSP2Triangles(12, 13,  6, 0x0, 14, 13, 12, 0x0),
	Gbi.gsSP1Triangle(15, 13, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07006418, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  6,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  4, 0x0, 10,  2,  4, 0x0),
	Gbi.gsSP1Triangle( 2,  1,  4, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_07006980 = [
	Gbi.gsSPLight(jrb_seg7_lights_070059C0.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_070059C0.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_070064C8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_070069B0 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(15, 65, 100, 255),
	Gbi.gsSPFogFactor(0x0724, 0xF9DC), // This isn't gsSPFogPosition since there is no valid min/max pair that corresponds to 0x0724F9DC
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_07006508),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_070065A8),
	Gbi.gsSPDisplayList(jrb_seg7_dl_070067F0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(jrb_seg7_dl_07006980),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

