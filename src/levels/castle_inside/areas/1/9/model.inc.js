import * as Gbi from "../../../../../include/gbi"
import {
    inside_09000000,
    inside_09001000,
    inside_09002000,
    inside_09003000,
    inside_09003800,
    inside_09004000,
    inside_09004800,
    inside_09005000,
    inside_09005800,
    inside_09006000,
    inside_09007000,
    inside_09008000,
    inside_09008800,
    inside_09009000,
    inside_0900A000,
    inside_0900B000,
    inside_0900B800
} from "../../../../../textures/inside"
const inside_castle_seg7_lights_0702E490 = Gbi.gdSPDefLights1(
	    0x52, 0x52, 0x52,
	    0xdd, 0xdd, 0xdd, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_0702E4A8 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_0702E4C0 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_0702E4D8 = Gbi.gdSPDefLights1(
	    0x07, 0x07, 0x07,
	    0x13, 0x13, 0x13, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_0702E4F0 = Gbi.gdSPDefLights1(
	    0x0f, 0x0f, 0x0f,
	    0x29, 0x29, 0x29, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_0702E508 = [
	{ pos: [ -3087, 640, -2404 ], flag: 0, tc: [ 6100, 1048 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3593, 640, -1898 ], flag: 0, tc: [ -1052, 1048 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3593, 614, -1898 ], flag: 0, tc: [ -1052, 1240 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3141, 717, -2459 ], flag: 0, tc: [ 6100, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3648, 717, -1952 ], flag: 0, tc: [ -1052, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3648, 691, -1952 ], flag: 0, tc: [ -1052, 160 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3141, 691, -2459 ], flag: 0, tc: [ 6100, 160 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3123, 691, -2441 ], flag: 0, tc: [ 6100, 328 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3630, 691, -1934 ], flag: 0, tc: [ -1052, 328 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3123, 666, -2441 ], flag: 0, tc: [ 6100, 520 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3630, 666, -1934 ], flag: 0, tc: [ -1052, 520 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3105, 666, -2423 ], flag: 0, tc: [ 6100, 690 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3611, 666, -1916 ], flag: 0, tc: [ -1052, 690 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3105, 640, -2423 ], flag: 0, tc: [ 6100, 882 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3611, 640, -1916 ], flag: 0, tc: [ -1052, 882 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3087, 614, -2404 ], flag: 0, tc: [ 6100, 1240 ], color: [ 89, 0, 89, 255 ] },
]

const inside_castle_seg7_vertex_0702E608 = [
	{ pos: [ -3068, 614, -2386 ], flag: 0, tc: [ 6100, 1408 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3575, 589, -1879 ], flag: 0, tc: [ -1052, 1600 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3068, 589, -2386 ], flag: 0, tc: [ 6100, 1600 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3575, 614, -1879 ], flag: 0, tc: [ -1052, 1408 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3050, 589, -2368 ], flag: 0, tc: [ 6100, 1768 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3557, 589, -1861 ], flag: 0, tc: [ -1052, 1768 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3557, 563, -1861 ], flag: 0, tc: [ -1052, 1960 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3050, 563, -2368 ], flag: 0, tc: [ 6100, 1960 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3032, 563, -2350 ], flag: 0, tc: [ 6100, 2130 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3539, 563, -1843 ], flag: 0, tc: [ -1052, 2130 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3032, 538, -2350 ], flag: 0, tc: [ 6100, 2322 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3014, 512, -2332 ], flag: 0, tc: [ 6100, 2682 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3521, 538, -1825 ], flag: 0, tc: [ -1052, 2490 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3521, 512, -1825 ], flag: 0, tc: [ -1052, 2682 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3539, 538, -1843 ], flag: 0, tc: [ -1052, 2322 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -3014, 538, -2332 ], flag: 0, tc: [ 6100, 2490 ], color: [ 89, 0, 89, 255 ] },
]

const inside_castle_seg7_vertex_0702E708 = [
	{ pos: [ -3141, 691, -2459 ], flag: 0, tc: [ 6100, 160 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3648, 691, -1952 ], flag: 0, tc: [ -1052, 160 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3630, 691, -1934 ], flag: 0, tc: [ -1052, 328 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5983, 717, -4287 ], flag: 0, tc: [ -1052, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5983, 666, -4287 ], flag: 0, tc: [ -1052, 478 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5476, 666, -4794 ], flag: 0, tc: [ 6100, 480 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5476, 717, -4794 ], flag: 0, tc: [ 6100, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5548, 717, -3853 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -5042, 717, -4359 ], flag: 0, tc: [ -6162, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -5042, 666, -4359 ], flag: 0, tc: [ -6162, 480 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -5548, 666, -3853 ], flag: 0, tc: [ 990, 478 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -5042, 717, -4359 ], flag: 0, tc: [ 3546, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3648, 717, -1952 ], flag: 0, tc: [ 0, 14402 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3141, 717, -2459 ], flag: 0, tc: [ 3546, 14402 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5548, 717, -3853 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3123, 691, -2441 ], flag: 0, tc: [ 6100, 328 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702E808 = [
	{ pos: [ -3123, 666, -2441 ], flag: 0, tc: [ 6100, 520 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3611, 666, -1916 ], flag: 0, tc: [ -1052, 690 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3105, 666, -2423 ], flag: 0, tc: [ 6100, 690 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3630, 666, -1934 ], flag: 0, tc: [ -1052, 520 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3105, 640, -2423 ], flag: 0, tc: [ 6100, 882 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3611, 640, -1916 ], flag: 0, tc: [ -1052, 882 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3593, 640, -1898 ], flag: 0, tc: [ -1052, 1048 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3087, 640, -2404 ], flag: 0, tc: [ 6100, 1048 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3087, 614, -2404 ], flag: 0, tc: [ 6100, 1240 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3593, 614, -1898 ], flag: 0, tc: [ -1052, 1240 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3068, 614, -2386 ], flag: 0, tc: [ 6100, 1408 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3032, 538, -2350 ], flag: 0, tc: [ 6100, 2322 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3539, 538, -1843 ], flag: 0, tc: [ -1052, 2322 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3521, 538, -1825 ], flag: 0, tc: [ -1052, 2490 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3575, 614, -1879 ], flag: 0, tc: [ -1052, 1408 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702E8F8 = [
	{ pos: [ -3068, 589, -2386 ], flag: 0, tc: [ 6100, 1600 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3575, 589, -1879 ], flag: 0, tc: [ -1052, 1600 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3557, 589, -1861 ], flag: 0, tc: [ -1052, 1768 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3050, 589, -2368 ], flag: 0, tc: [ 6100, 1768 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3050, 563, -2368 ], flag: 0, tc: [ 6100, 1960 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3539, 563, -1843 ], flag: 0, tc: [ -1052, 2130 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3032, 563, -2350 ], flag: 0, tc: [ 6100, 2130 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3557, 563, -1861 ], flag: 0, tc: [ -1052, 1960 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3032, 538, -2350 ], flag: 0, tc: [ 6100, 2322 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3521, 538, -1825 ], flag: 0, tc: [ -1052, 2490 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3014, 538, -2332 ], flag: 0, tc: [ 6100, 2490 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5983, 717, -4287 ], flag: 0, tc: [ 0, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5476, 717, -4794 ], flag: 0, tc: [ 3546, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6924, 717, -6242 ], flag: 0, tc: [ 3544, -12296 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7431, 717, -5735 ], flag: 0, tc: [ 0, -12296 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702E9E8 = [
	{ pos: [ -2797, 512, -1391 ], flag: 0, tc: [ 2522, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2543, 512, -1572 ], flag: 0, tc: [ 2778, -542 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2580, 512, -1608 ], flag: 0, tc: [ 2524, -542 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2761, 512, -1355 ], flag: 0, tc: [ 2778, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2942, 512, -1246 ], flag: 0, tc: [ 2522, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2435, 512, -1753 ], flag: 0, tc: [ 2524, -1566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3014, 512, -2332 ], flag: 0, tc: [ -1562, -1566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3521, 512, -1825 ], flag: 0, tc: [ -1562, 2010 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702EA68 = [
	{ pos: [ -5114, 1536, -3418 ], flag: 0, tc: [ -4118, -2586 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2435, 1536, -1753 ], flag: 0, tc: [ 11210, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2942, 1536, -1246 ], flag: 0, tc: [ 11210, -2588 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6960, 1434, -6206 ], flag: 0, tc: [ 2012, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -6924, 717, -6242 ], flag: 0, tc: [ 2268, 7120 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -6924, 1536, -6242 ], flag: 0, tc: [ 2268, -1054 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -6960, 819, -6206 ], flag: 0, tc: [ 2012, 6098 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -7395, 819, -5771 ], flag: 0, tc: [ -1052, 6098 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -7431, 717, -5735 ], flag: 0, tc: [ -1308, 7120 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -7431, 1536, -5735 ], flag: 0, tc: [ -1308, -1054 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -7395, 1434, -5771 ], flag: 0, tc: [ -1052, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -6924, 1536, -6242 ], flag: 0, tc: [ -10250, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -4716, 1536, -4034 ], flag: 0, tc: [ 5334, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5223, 1536, -3527 ], flag: 0, tc: [ 5334, -2588 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -7431, 1536, -5735 ], flag: 0, tc: [ -10250, -2588 ], color: [ 0, 129, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702EB58 = [
	{ pos: [ -5114, 1536, -3418 ], flag: 0, tc: [ 7634, -6164 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2942, 717, -1246 ], flag: 0, tc: [ -7694, 2010 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5114, 717, -3418 ], flag: 0, tc: [ 7634, 2010 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5114, 1536, -3418 ], flag: 0, tc: [ -4118, -2586 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -4607, 1536, -3925 ], flag: 0, tc: [ -4118, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2435, 1536, -1753 ], flag: 0, tc: [ 11210, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -7431, 717, -5735 ], flag: 0, tc: [ -7694, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5223, 1536, -3527 ], flag: 0, tc: [ 7888, -7186 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5223, 717, -3527 ], flag: 0, tc: [ 7888, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -7431, 1536, -5735 ], flag: 0, tc: [ -7694, -7186 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -4716, 1536, -4034 ], flag: 0, tc: [ 7888, -7186 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6924, 1536, -6242 ], flag: 0, tc: [ -7694, -7186 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6924, 717, -6242 ], flag: 0, tc: [ -7694, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -4716, 717, -4034 ], flag: 0, tc: [ 7888, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2942, 1536, -1246 ], flag: 0, tc: [ -7696, -6164 ], color: [ 89, 0, 167, 255 ] },
]

const inside_castle_seg7_vertex_0702EC48 = [
	{ pos: [ -2797, 768, -1391 ], flag: 0, tc: [ 1502, 3542 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2942, 512, -1246 ], flag: 0, tc: [ 2524, 6098 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2942, 1536, -1246 ], flag: 0, tc: [ 2524, -4120 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2435, 717, -1753 ], flag: 0, tc: [ -7696, 2010 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2435, 1536, -1753 ], flag: 0, tc: [ -7696, -6164 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -4607, 1536, -3925 ], flag: 0, tc: [ 7634, -6164 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -4607, 717, -3925 ], flag: 0, tc: [ 7634, 2010 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -2435, 512, -1753 ], flag: 0, tc: [ -7694, 4054 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -3159, 512, -2477 ], flag: 0, tc: [ -2584, 4054 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -3159, 717, -2477 ], flag: 0, tc: [ -2584, 2010 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -3666, 512, -1970 ], flag: 0, tc: [ -2584, 4054 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -3666, 717, -1970 ], flag: 0, tc: [ -2584, 2010 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2942, 512, -1246 ], flag: 0, tc: [ -7694, 4054 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2942, 717, -1246 ], flag: 0, tc: [ -7694, 2010 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2580, 768, -1608 ], flag: 0, tc: [ 0, 3542 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2797, 512, -1391 ], flag: 0, tc: [ 1502, 6098 ], color: [ 167, 0, 167, 255 ] },
]

const inside_castle_seg7_vertex_0702ED48 = [
	{ pos: [ -2580, 768, -1608 ], flag: 0, tc: [ 0, 3542 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2942, 1536, -1246 ], flag: 0, tc: [ 2524, -4120 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2435, 1536, -1753 ], flag: 0, tc: [ -1052, -4120 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2435, 512, -1753 ], flag: 0, tc: [ -1052, 6098 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2580, 512, -1608 ], flag: 0, tc: [ 0, 6098 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -2580, 512, -1608 ], flag: 0, tc: [ 0, 990 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -2543, 768, -1572 ], flag: 0, tc: [ 480, -1564 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -2580, 768, -1608 ], flag: 0, tc: [ 0, -1564 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -2543, 512, -1572 ], flag: 0, tc: [ 478, 990 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -2797, 768, -1391 ], flag: 0, tc: [ 0, -1564 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2761, 768, -1355 ], flag: 0, tc: [ 480, -1564 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2761, 512, -1355 ], flag: 0, tc: [ 478, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -2543, 768, -1572 ], flag: 0, tc: [ 480, -1564 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2761, 768, -1355 ], flag: 0, tc: [ 480, -1564 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2797, 768, -1391 ], flag: 0, tc: [ 0, -1564 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2797, 512, -1391 ], flag: 0, tc: [ 0, 990 ], color: [ 89, 0, 167, 255 ] },
]

const inside_castle_seg7_vertex_0702EE48 = [
	{ pos: [ -2543, 768, -1572 ], flag: 0, tc: [ 480, -1564 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2797, 768, -1391 ], flag: 0, tc: [ 0, -1564 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2580, 768, -1608 ], flag: 0, tc: [ 0, -1564 ], color: [ 0, 129, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702EE78 = [
	{ pos: [ -6128, 717, -5373 ], flag: 0, tc: [ 650, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6164, 1485, -5409 ], flag: 0, tc: [ 308, 96 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6164, 717, -5409 ], flag: 0, tc: [ 308, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6671, 717, -4975 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6671, 1536, -4975 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6598, 1485, -4975 ], flag: 0, tc: [ 650, 96 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6598, 717, -4975 ], flag: 0, tc: [ 650, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6598, 717, -4975 ], flag: 0, tc: [ 650, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -6598, 1485, -4975 ], flag: 0, tc: [ 650, 96 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -6562, 1485, -4939 ], flag: 0, tc: [ 308, 96 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -6562, 717, -4939 ], flag: 0, tc: [ 308, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -6598, 1485, -4975 ], flag: 0, tc: [ 308, 116 ], color: [ 193, 166, 193, 255 ] },
	{ pos: [ -6671, 1536, -4975 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 166, 193, 255 ] },
	{ pos: [ -6164, 1536, -5482 ], flag: 0, tc: [ 0, 2012 ], color: [ 193, 166, 193, 255 ] },
	{ pos: [ -6164, 1485, -5409 ], flag: 0, tc: [ 308, 1868 ], color: [ 193, 166, 193, 255 ] },
]

const inside_castle_seg7_vertex_0702EF68 = [
	{ pos: [ -6164, 717, -5409 ], flag: 0, tc: [ 308, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6164, 1485, -5409 ], flag: 0, tc: [ 308, 96 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6164, 1536, -5482 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6164, 717, -5482 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6128, 717, -5373 ], flag: 0, tc: [ 650, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6128, 1485, -5373 ], flag: 0, tc: [ 650, 96 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6164, 1485, -5409 ], flag: 0, tc: [ 308, 96 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -6055, 717, -5373 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6128, 1485, -5373 ], flag: 0, tc: [ 650, 96 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6128, 717, -5373 ], flag: 0, tc: [ 650, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6128, 1485, -5373 ], flag: 0, tc: [ 650, 1868 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6562, 1485, -4939 ], flag: 0, tc: [ 650, 116 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6598, 1485, -4975 ], flag: 0, tc: [ 308, 116 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6164, 1485, -5409 ], flag: 0, tc: [ 308, 1868 ], color: [ 0, 129, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702F048 = [
	{ pos: [ -5223, 717, -3527 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5223, 1536, -3527 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5150, 1485, -3527 ], flag: 0, tc: [ 308, 96 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6562, 1536, -4866 ], flag: 0, tc: [ 990, 0 ], color: [ 63, 166, 63, 255 ] },
	{ pos: [ -6562, 1485, -4939 ], flag: 0, tc: [ 650, 116 ], color: [ 63, 166, 63, 255 ] },
	{ pos: [ -6128, 1485, -5373 ], flag: 0, tc: [ 650, 1868 ], color: [ 63, 166, 63, 255 ] },
	{ pos: [ -6055, 1536, -5373 ], flag: 0, tc: [ 990, 2012 ], color: [ 63, 166, 63, 255 ] },
	{ pos: [ -6562, 717, -4939 ], flag: 0, tc: [ 308, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6562, 1485, -4939 ], flag: 0, tc: [ 308, 96 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6562, 1536, -4866 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6562, 717, -4866 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6055, 717, -5373 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6055, 1536, -5373 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6128, 1485, -5373 ], flag: 0, tc: [ 650, 96 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5150, 717, -3527 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_0702F138 = [
	{ pos: [ -4679, 717, -3925 ], flag: 0, tc: [ 650, 2012 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -4716, 1485, -3961 ], flag: 0, tc: [ 308, 96 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -4716, 717, -3961 ], flag: 0, tc: [ 308, 2012 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -5150, 717, -3527 ], flag: 0, tc: [ 308, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5150, 1485, -3527 ], flag: 0, tc: [ 308, 96 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5114, 1485, -3491 ], flag: 0, tc: [ 650, 96 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5114, 717, -3491 ], flag: 0, tc: [ 650, 2012 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -4716, 1485, -3961 ], flag: 0, tc: [ 308, 1864 ], color: [ 193, 166, 193, 255 ] },
	{ pos: [ -5150, 1485, -3527 ], flag: 0, tc: [ 308, 112 ], color: [ 193, 166, 193, 255 ] },
	{ pos: [ -5223, 1536, -3527 ], flag: 0, tc: [ 0, 0 ], color: [ 193, 166, 193, 255 ] },
	{ pos: [ -4716, 1536, -4034 ], flag: 0, tc: [ 0, 2012 ], color: [ 193, 166, 193, 255 ] },
	{ pos: [ -4716, 717, -3961 ], flag: 0, tc: [ 308, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -4716, 1485, -3961 ], flag: 0, tc: [ 308, 96 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -4716, 1536, -4034 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -4716, 717, -4034 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702F228 = [
	{ pos: [ -4607, 717, -3925 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4679, 1485, -3925 ], flag: 0, tc: [ 650, 96 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4679, 717, -3925 ], flag: 0, tc: [ 650, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4679, 717, -3925 ], flag: 0, tc: [ 650, 2012 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -4679, 1485, -3925 ], flag: 0, tc: [ 650, 96 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -4716, 1485, -3961 ], flag: 0, tc: [ 308, 96 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -4679, 1485, -3925 ], flag: 0, tc: [ 650, 1864 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5114, 1485, -3491 ], flag: 0, tc: [ 650, 112 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5150, 1485, -3527 ], flag: 0, tc: [ 308, 112 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -4716, 1485, -3961 ], flag: 0, tc: [ 308, 1864 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -4607, 1536, -3925 ], flag: 0, tc: [ 990, 2012 ], color: [ 63, 166, 63, 255 ] },
	{ pos: [ -5114, 1536, -3418 ], flag: 0, tc: [ 990, 0 ], color: [ 63, 166, 63, 255 ] },
	{ pos: [ -5114, 1485, -3491 ], flag: 0, tc: [ 650, 112 ], color: [ 63, 166, 63, 255 ] },
	{ pos: [ -4607, 1536, -3925 ], flag: 0, tc: [ 990, 2012 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ -5114, 1485, -3491 ], flag: 0, tc: [ 650, 112 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ -4679, 1485, -3925 ], flag: 0, tc: [ 650, 1864 ], color: [ 63, 167, 63, 255 ] },
]

const inside_castle_seg7_vertex_0702F328 = [
	{ pos: [ -3774, 717, -2079 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3702, 1485, -2079 ], flag: 0, tc: [ 650, 96 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3702, 717, -2079 ], flag: 0, tc: [ 650, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5114, 717, -3491 ], flag: 0, tc: [ 650, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5114, 1485, -3491 ], flag: 0, tc: [ 650, 96 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5114, 1536, -3418 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5114, 717, -3418 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -4607, 717, -3925 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4607, 1536, -3925 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4679, 1485, -3925 ], flag: 0, tc: [ 650, 96 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3666, 717, -2042 ], flag: 0, tc: [ 308, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3666, 1485, -2042 ], flag: 0, tc: [ 308, 96 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3666, 1536, -1970 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3666, 717, -1970 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3774, 1536, -2079 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_0702F418 = [
	{ pos: [ -3231, 1485, -2477 ], flag: 0, tc: [ 308, 116 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3666, 1485, -2042 ], flag: 0, tc: [ 308, 1868 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3702, 1485, -2079 ], flag: 0, tc: [ 650, 1868 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3702, 717, -2079 ], flag: 0, tc: [ 650, 2012 ], color: [ 91, 0, 168, 255 ] },
	{ pos: [ -3702, 1485, -2079 ], flag: 0, tc: [ 650, 96 ], color: [ 91, 0, 168, 255 ] },
	{ pos: [ -3666, 1485, -2042 ], flag: 0, tc: [ 308, 96 ], color: [ 91, 0, 168, 255 ] },
	{ pos: [ -3666, 717, -2042 ], flag: 0, tc: [ 308, 2012 ], color: [ 91, 0, 168, 255 ] },
	{ pos: [ -3268, 1485, -2513 ], flag: 0, tc: [ 650, 116 ], color: [ 193, 167, 193, 255 ] },
	{ pos: [ -3702, 1485, -2079 ], flag: 0, tc: [ 650, 1868 ], color: [ 193, 167, 193, 255 ] },
	{ pos: [ -3774, 1536, -2079 ], flag: 0, tc: [ 990, 2012 ], color: [ 193, 167, 193, 255 ] },
	{ pos: [ -3268, 1536, -2585 ], flag: 0, tc: [ 990, 0 ], color: [ 193, 167, 193, 255 ] },
	{ pos: [ -3159, 1536, -2477 ], flag: 0, tc: [ 0, 0 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ -3666, 1536, -1970 ], flag: 0, tc: [ 0, 2012 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ -3666, 1485, -2042 ], flag: 0, tc: [ 308, 1864 ], color: [ 63, 167, 63, 255 ] },
	{ pos: [ -3231, 1485, -2477 ], flag: 0, tc: [ 308, 116 ], color: [ 63, 167, 63, 255 ] },
]

const inside_castle_seg7_vertex_0702F508 = [
	{ pos: [ -3231, 717, -2477 ], flag: 0, tc: [ 308, 2012 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -3231, 1485, -2477 ], flag: 0, tc: [ 308, 96 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -3268, 1485, -2513 ], flag: 0, tc: [ 650, 96 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -3231, 1485, -2477 ], flag: 0, tc: [ 308, 116 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3702, 1485, -2079 ], flag: 0, tc: [ 650, 1868 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3268, 1485, -2513 ], flag: 0, tc: [ 650, 116 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -3268, 717, -2513 ], flag: 0, tc: [ 650, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -3268, 1536, -2585 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -3268, 717, -2585 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -3268, 717, -2513 ], flag: 0, tc: [ 650, 2012 ], color: [ 168, 0, 91, 255 ] },
	{ pos: [ -3268, 1485, -2513 ], flag: 0, tc: [ 650, 96 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -3159, 717, -2477 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3159, 1536, -2477 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3231, 1485, -2477 ], flag: 0, tc: [ 308, 96 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3231, 717, -2477 ], flag: 0, tc: [ 308, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const inside_castle_seg7_vertex_0702F5F8 = [
	{ pos: [ -5548, 512, -3853 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5042, 512, -4359 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5476, 512, -4794 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5983, 512, -4287 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_0702F638 = [
	{ pos: [ -5476, 666, -4794 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5983, 666, -4287 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5983, 512, -4287 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5476, 512, -4794 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -5548, 666, -3853 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -5042, 512, -4359 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -5548, 512, -3853 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -5042, 666, -4359 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
]

const inside_castle_seg7_vertex_0702F6B8 = [
	{ pos: [ -5983, 512, -4287 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5983, 717, -4287 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5548, 717, -3853 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5548, 512, -3853 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -5042, 512, -4359 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -5476, 717, -4794 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -5476, 512, -4794 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -5042, 717, -4359 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 89, 255 ] },
]

export const inside_castle_seg7_dl_0702F738 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E490.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E490.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702E508, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 12, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702E608, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(10,  9, 14, 0x0, 15, 12, 11, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4A8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4A8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702E708, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702E808, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(10,  9, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702E8F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702F8D0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702E9E8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702F918 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702EA68, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 4,  7,  8, 0x0,  9,  7, 10, 0x0),
	...Gbi.gsSP2Triangles( 9,  8,  7, 0x0,  3,  5,  9, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  3, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 11, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702EB58, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702EC48, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  3,  8, 0x0),
	...Gbi.gsSP2Triangles( 3,  9,  8, 0x0, 10, 11, 12, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 12, 0x0, 14,  0,  2, 0x0),
	Gbi.gsSP1Triangle( 0, 15,  1, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702ED48, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  0,  2, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  6, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0,  9, 11, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702EE48, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702FA80 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702EE78, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 11, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702EF68, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F048, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F138, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F228, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F328, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F418, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F508, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  0,  2,  9, 0x0),
	...Gbi.gsSP2Triangles( 6, 10,  7, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702FC90 = [
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4C0.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4C0.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F5F8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4D8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4D8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F638, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4F0.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702E4F0.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702F6B8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_0702FD30 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702F738),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702F8D0),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702F918),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702FA80),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_0702FC90),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

