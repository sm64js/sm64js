import {mountain_09003800, } from "../../../../../textures/mountain.js"
import {mountain_09004000, } from "../../../../../textures/mountain.js"
import * as Gbi from "../../../../../include/gbi"
const ttm_seg7_lights_0700FA90 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700FAA8 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ttm_seg7_lights_0700FAC0 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ttm_seg7_vertex_0700FAD8 = [
	{ pos: [ 340, 563, 448 ], flag: 0, tc: [ 0, -1736 ], color: [ 67, 0, 149, 255 ] },
	{ pos: [ -84, 563, 183 ], flag: 0, tc: [ 1632, -1736 ], color: [ 67, 0, 149, 255 ] },
	{ pos: [ -84, 768, 183 ], flag: 0, tc: [ 1632, -2416 ], color: [ 67, 0, 149, 255 ] },
	{ pos: [ 340, 768, 448 ], flag: 0, tc: [ 0, -2416 ], color: [ 67, 0, 149, 255 ] },
	{ pos: [ 742, 256, -226 ], flag: 0, tc: [ 0, -714 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ 541, 563, -256 ], flag: 0, tc: [ 592, -1736 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ 742, 563, -226 ], flag: 0, tc: [ 0, -1736 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ 541, 358, -256 ], flag: 0, tc: [ 592, -1054 ], color: [ 18, 0, 131, 255 ] },
	{ pos: [ 794, -460, -314 ], flag: 0, tc: [ 1432, -86 ], color: [ 175, 61, 75, 255 ] },
	{ pos: [ 652, -460, -466 ], flag: 0, tc: [ 746, -120 ], color: [ 175, 61, 75, 255 ] },
	{ pos: [ 385, -767, -504 ], flag: 0, tc: [ 0, 990 ], color: [ 175, 61, 75, 255 ] },
	{ pos: [ 794, -460, -314 ], flag: 0, tc: [ 1432, -86 ], color: [ 182, 40, 94, 255 ] },
	{ pos: [ 385, -767, -504 ], flag: 0, tc: [ 0, 990 ], color: [ 182, 40, 94, 255 ] },
	{ pos: [ 741, -767, -225 ], flag: 0, tc: [ 1472, 990 ], color: [ 182, 40, 94, 255 ] },
]

const ttm_seg7_vertex_0700FBB8 = [
	{ pos: [ 60, -767, 917 ], flag: 0, tc: [ 0, 2434 ], color: [ 210, 89, 77, 255 ] },
	{ pos: [ 217, -460, 653 ], flag: 0, tc: [ 0, 990 ], color: [ 210, 89, 77, 255 ] },
	{ pos: [ 130, -460, 601 ], flag: 0, tc: [ -370, 990 ], color: [ 210, 89, 77, 255 ] },
	{ pos: [ 60, -767, 917 ], flag: 0, tc: [ 3716, 990 ], color: [ 164, 71, 49, 255 ] },
	{ pos: [ 130, -460, 601 ], flag: 0, tc: [ 2694, 0 ], color: [ 164, 71, 49, 255 ] },
	{ pos: [ -221, -767, 391 ], flag: 0, tc: [ 2694, 990 ], color: [ 164, 71, 49, 255 ] },
	{ pos: [ -221, -767, 391 ], flag: 0, tc: [ 2694, 990 ], color: [ 167, 86, 22, 255 ] },
	{ pos: [ 130, -460, 601 ], flag: 0, tc: [ 2694, 0 ], color: [ 167, 86, 22, 255 ] },
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 2012, 0 ], color: [ 167, 86, 22, 255 ] },
	{ pos: [ 163, -255, 144 ], flag: 0, tc: [ 0, -714 ], color: [ 45, 89, 179, 255 ] },
	{ pos: [ 111, -153, 232 ], flag: 0, tc: [ 0, -1054 ], color: [ 45, 89, 179, 255 ] },
	{ pos: [ 427, -255, 301 ], flag: 0, tc: [ -1052, -714 ], color: [ 45, 89, 179, 255 ] },
	{ pos: [ 375, -153, 389 ], flag: 0, tc: [ -1052, -1054 ], color: [ 45, 89, 179, 255 ] },
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 2012, 0 ], color: [ 139, 46, 241, 255 ] },
	{ pos: [ 163, -255, 144 ], flag: 0, tc: [ 1330, -714 ], color: [ 139, 46, 241, 255 ] },
	{ pos: [ 4, -767, -188 ], flag: 0, tc: [ 650, 990 ], color: [ 139, 46, 241, 255 ] },
]

const ttm_seg7_vertex_0700FCB8 = [
	{ pos: [ 919, -460, -1028 ], flag: 0, tc: [ 0, 150 ], color: [ 142, 0, 202, 255 ] },
	{ pos: [ 919, -767, -1028 ], flag: 0, tc: [ 0, 990 ], color: [ 142, 0, 202, 255 ] },
	{ pos: [ 652, -460, -466 ], flag: 0, tc: [ 1914, -256 ], color: [ 142, 0, 202, 255 ] },
	{ pos: [ 4, -767, -188 ], flag: 0, tc: [ 650, 990 ], color: [ 163, 65, 201, 255 ] },
	{ pos: [ 163, -255, 144 ], flag: 0, tc: [ 1330, -714 ], color: [ 163, 65, 201, 255 ] },
	{ pos: [ 373, -255, -207 ], flag: 0, tc: [ 0, -714 ], color: [ 163, 65, 201, 255 ] },
	{ pos: [ 373, -767, -207 ], flag: 0, tc: [ 0, 990 ], color: [ 250, 0, 130, 255 ] },
	{ pos: [ 4, -767, -188 ], flag: 0, tc: [ 650, 990 ], color: [ 250, 0, 130, 255 ] },
	{ pos: [ 373, -255, -207 ], flag: 0, tc: [ 0, -714 ], color: [ 250, 0, 130, 255 ] },
]

const ttm_seg7_vertex_0700FD48 = [
	{ pos: [ 113, -255, 829 ], flag: 0, tc: [ 0, 4940 ], color: [ 252, 147, 192, 255 ] },
	{ pos: [ -104, -460, 1194 ], flag: 0, tc: [ 0, 6480 ], color: [ 252, 147, 192, 255 ] },
	{ pos: [ -150, -153, 672 ], flag: 0, tc: [ 990, 4736 ], color: [ 252, 147, 192, 255 ] },
	{ pos: [ 742, 256, -226 ], flag: 0, tc: [ 226, -2344 ], color: [ 201, 143, 245, 255 ] },
	{ pos: [ 427, 358, 301 ], flag: 0, tc: [ 1272, -4100 ], color: [ 201, 143, 245, 255 ] },
	{ pos: [ 541, 358, -256 ], flag: 0, tc: [ 892, -2244 ], color: [ 201, 143, 245, 255 ] },
	{ pos: [ 427, 358, 301 ], flag: 0, tc: [ 1272, -4100 ], color: [ 10, 131, 239, 255 ] },
	{ pos: [ 113, 256, 829 ], flag: 0, tc: [ 2318, -5856 ], color: [ 10, 131, 239, 255 ] },
	{ pos: [ -150, 256, 672 ], flag: 0, tc: [ 3196, -5332 ], color: [ 10, 131, 239, 255 ] },
	{ pos: [ 427, 358, 301 ], flag: 0, tc: [ 1272, -4100 ], color: [ 215, 139, 232, 255 ] },
	{ pos: [ -84, 563, 183 ], flag: 0, tc: [ 2976, -3708 ], color: [ 215, 139, 232, 255 ] },
	{ pos: [ 73, 563, -80 ], flag: 0, tc: [ 2452, -2830 ], color: [ 215, 139, 232, 255 ] },
	{ pos: [ -150, 256, 672 ], flag: 0, tc: [ 3196, -5332 ], color: [ 231, 153, 188, 255 ] },
	{ pos: [ -84, 563, 183 ], flag: 0, tc: [ 2976, -3708 ], color: [ 231, 153, 188, 255 ] },
	{ pos: [ 427, 358, 301 ], flag: 0, tc: [ 1272, -4100 ], color: [ 231, 153, 188, 255 ] },
]

const ttm_seg7_vertex_0700FE38 = [
	{ pos: [ 541, 358, -256 ], flag: 0, tc: [ 892, -2244 ], color: [ 202, 142, 245, 255 ] },
	{ pos: [ 427, 358, 301 ], flag: 0, tc: [ 1272, -4100 ], color: [ 202, 142, 245, 255 ] },
	{ pos: [ 73, 563, -80 ], flag: 0, tc: [ 2452, -2830 ], color: [ 202, 142, 245, 255 ] },
	{ pos: [ -451, -153, 1078 ], flag: 0, tc: [ 0, -598 ], color: [ 189, 161, 206, 255 ] },
	{ pos: [ -150, -153, 672 ], flag: 0, tc: [ -1664, -200 ], color: [ 189, 161, 206, 255 ] },
	{ pos: [ -104, -460, 1194 ], flag: 0, tc: [ 0, 990 ], color: [ 189, 161, 206, 255 ] },
	{ pos: [ 111, -153, 232 ], flag: 0, tc: [ 0, -1054 ], color: [ 58, 199, 159, 255 ] },
	{ pos: [ 251, 51, 196 ], flag: 0, tc: [ -370, -1736 ], color: [ 58, 199, 159, 255 ] },
	{ pos: [ 427, 51, 301 ], flag: 0, tc: [ -1052, -1736 ], color: [ 58, 199, 159, 255 ] },
	{ pos: [ 113, 256, 829 ], flag: 0, tc: [ 0, -714 ], color: [ 65, 0, 147, 255 ] },
	{ pos: [ 113, -255, 829 ], flag: 0, tc: [ 0, 990 ], color: [ 65, 0, 147, 255 ] },
	{ pos: [ -150, -153, 672 ], flag: 0, tc: [ 990, 650 ], color: [ 65, 0, 147, 255 ] },
	{ pos: [ -150, 256, 672 ], flag: 0, tc: [ 990, -714 ], color: [ 65, 0, 147, 255 ] },
	{ pos: [ 794, -50, -314 ], flag: 0, tc: [ 0, 990 ], color: [ 38, 155, 191, 255 ] },
	{ pos: [ 635, 102, -647 ], flag: 0, tc: [ 990, 138 ], color: [ 38, 155, 191, 255 ] },
	{ pos: [ 899, 102, -489 ], flag: 0, tc: [ 0, 138 ], color: [ 38, 155, 191, 255 ] },
]

const ttm_seg7_vertex_0700FF38 = [
	{ pos: [ 794, -50, -314 ], flag: 0, tc: [ 0, 990 ], color: [ 38, 154, 191, 255 ] },
	{ pos: [ 530, -50, -471 ], flag: 0, tc: [ 990, 990 ], color: [ 38, 154, 191, 255 ] },
	{ pos: [ 635, 102, -647 ], flag: 0, tc: [ 990, 138 ], color: [ 38, 154, 191, 255 ] },
	{ pos: [ 689, 102, -138 ], flag: 0, tc: [ 990, 990 ], color: [ 218, 154, 65, 255 ] },
	{ pos: [ 530, -50, -471 ], flag: 0, tc: [ 0, 1840 ], color: [ 218, 154, 65, 255 ] },
	{ pos: [ 794, -50, -314 ], flag: 0, tc: [ 990, 1840 ], color: [ 218, 154, 65, 255 ] },
	{ pos: [ 689, 102, -138 ], flag: 0, tc: [ 990, 990 ], color: [ 218, 155, 65, 255 ] },
	{ pos: [ 426, 102, -295 ], flag: 0, tc: [ 0, 990 ], color: [ 218, 155, 65, 255 ] },
	{ pos: [ 530, -50, -471 ], flag: 0, tc: [ 0, 1840 ], color: [ 218, 155, 65, 255 ] },
	{ pos: [ 375, -153, 389 ], flag: 0, tc: [ -1052, -1054 ], color: [ 58, 200, 159, 255 ] },
	{ pos: [ 111, -153, 232 ], flag: 0, tc: [ 0, -1054 ], color: [ 58, 200, 159, 255 ] },
	{ pos: [ 427, 51, 301 ], flag: 0, tc: [ -1052, -1736 ], color: [ 58, 200, 159, 255 ] },
]

const ttm_seg7_vertex_0700FFF8 = [
	{ pos: [ 322, 51, 477 ], flag: 0, tc: [ 990, -714 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 0, 990 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ 322, -460, 477 ], flag: 0, tc: [ 990, 990 ], color: [ 192, 0, 109, 255 ] },
	{ pos: [ -84, 768, 183 ], flag: 0, tc: [ 0, 308 ], color: [ 131, 0, 240, 255 ] },
	{ pos: [ -84, 563, 183 ], flag: 0, tc: [ 0, 990 ], color: [ 131, 0, 240, 255 ] },
	{ pos: [ -150, 256, 672 ], flag: 0, tc: [ 1476, 2010 ], color: [ 131, 0, 240, 255 ] },
	{ pos: [ 73, 563, -80 ], flag: 0, tc: [ 1634, 990 ], color: [ 212, 0, 138, 255 ] },
	{ pos: [ 541, 563, -256 ], flag: 0, tc: [ 0, 990 ], color: [ 212, 0, 138, 255 ] },
	{ pos: [ 541, 358, -256 ], flag: 0, tc: [ 0, 1670 ], color: [ 212, 0, 138, 255 ] },
	{ pos: [ -150, 256, 672 ], flag: 0, tc: [ 6474, -2416 ], color: [ 154, 0, 181, 255 ] },
	{ pos: [ -150, -153, 672 ], flag: 0, tc: [ 6474, -1054 ], color: [ 154, 0, 181, 255 ] },
	{ pos: [ -451, -153, 1078 ], flag: 0, tc: [ 8134, -1054 ], color: [ 154, 0, 181, 255 ] },
	{ pos: [ 530, -50, -471 ], flag: 0, tc: [ 2190, -1394 ], color: [ 147, 0, 192, 255 ] },
	{ pos: [ 426, 102, -295 ], flag: 0, tc: [ 2848, -1906 ], color: [ 147, 0, 192, 255 ] },
	{ pos: [ 635, 102, -647 ], flag: 0, tc: [ 1530, -1906 ], color: [ 147, 0, 192, 255 ] },
	{ pos: [ 58, 51, 320 ], flag: 0, tc: [ 0, -714 ], color: [ 192, 0, 109, 255 ] },
]

const ttm_seg7_vertex_070100F8 = [
	{ pos: [ 111, -153, 232 ], flag: 0, tc: [ 1672, -1054 ], color: [ 189, 27, 152, 255 ] },
	{ pos: [ 58, 51, 320 ], flag: 0, tc: [ 2012, -1736 ], color: [ 189, 27, 152, 255 ] },
	{ pos: [ 251, 51, 196 ], flag: 0, tc: [ 1330, -1736 ], color: [ 189, 27, 152, 255 ] },
	{ pos: [ 58, 51, 320 ], flag: 0, tc: [ 2012, -1736 ], color: [ 148, 0, 191, 255 ] },
	{ pos: [ 111, -153, 232 ], flag: 0, tc: [ 1672, -1054 ], color: [ 148, 0, 191, 255 ] },
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 2012, 0 ], color: [ 148, 0, 191, 255 ] },
	{ pos: [ 163, -255, 144 ], flag: 0, tc: [ 1330, -714 ], color: [ 147, 0, 192, 255 ] },
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 2012, 0 ], color: [ 147, 0, 192, 255 ] },
	{ pos: [ 111, -153, 232 ], flag: 0, tc: [ 1672, -1054 ], color: [ 147, 0, 192, 255 ] },
	{ pos: [ 58, -767, 320 ], flag: 0, tc: [ 2012, 990 ], color: [ 225, 0, 133, 255 ] },
	{ pos: [ -221, -767, 391 ], flag: 0, tc: [ 2694, 990 ], color: [ 225, 0, 133, 255 ] },
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 2012, 0 ], color: [ 225, 0, 133, 255 ] },
	{ pos: [ 637, -255, -50 ], flag: 0, tc: [ -1052, -714 ], color: [ 64, 0, 147, 255 ] },
	{ pos: [ 637, -767, -50 ], flag: 0, tc: [ -1052, 990 ], color: [ 64, 0, 147, 255 ] },
	{ pos: [ 373, -255, -207 ], flag: 0, tc: [ 0, -714 ], color: [ 64, 0, 147, 255 ] },
]

const ttm_seg7_vertex_070101E8 = [
	{ pos: [ 919, -767, -1028 ], flag: 0, tc: [ 0, 990 ], color: [ 184, 72, 182, 255 ] },
	{ pos: [ 385, -767, -504 ], flag: 0, tc: [ 2458, 990 ], color: [ 184, 72, 182, 255 ] },
	{ pos: [ 652, -460, -466 ], flag: 0, tc: [ 1914, -256 ], color: [ 184, 72, 182, 255 ] },
	{ pos: [ 637, -767, -50 ], flag: 0, tc: [ -1052, 990 ], color: [ 64, 0, 147, 255 ] },
	{ pos: [ 373, -767, -207 ], flag: 0, tc: [ 0, 990 ], color: [ 64, 0, 147, 255 ] },
	{ pos: [ 373, -255, -207 ], flag: 0, tc: [ 0, -714 ], color: [ 64, 0, 147, 255 ] },
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 2012, 0 ], color: [ 130, 0, 13, 255 ] },
	{ pos: [ 4, -767, -188 ], flag: 0, tc: [ 650, 990 ], color: [ 130, 0, 13, 255 ] },
	{ pos: [ 58, -767, 320 ], flag: 0, tc: [ 2012, 990 ], color: [ 130, 0, 13, 255 ] },
]

const ttm_seg7_vertex_07010278 = [
	{ pos: [ 340, 768, 448 ], flag: 0, tc: [ 1056, -15900 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -84, 768, 183 ], flag: 0, tc: [ 208, -16430 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1075, 768, 870 ], flag: 0, tc: [ -1770, -15058 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -590, 768, 107 ], flag: 0, tc: [ -800, -16582 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -104, 768, 1194 ], flag: 0, tc: [ 168, -14412 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1056, 768, -753 ], flag: 0, tc: [ 2486, -18302 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 819, 768, -1228 ], flag: 0, tc: [ 2012, -19248 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 871, 768, -442 ], flag: 0, tc: [ 2116, -17680 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 871, 768, -442 ], flag: 0, tc: [ 2116, -17680 ], color: [ 238, 125, 1, 255 ] },
	{ pos: [ 819, 768, -1228 ], flag: 0, tc: [ 2012, -19248 ], color: [ 238, 125, 1, 255 ] },
	{ pos: [ -138, 621, -803 ], flag: 0, tc: [ 100, -18400 ], color: [ 238, 125, 1, 255 ] },
	{ pos: [ -168, 614, -600 ], flag: 0, tc: [ 40, -17996 ], color: [ 238, 125, 1, 255 ] },
	{ pos: [ 541, 563, -256 ], flag: 0, tc: [ 1458, -17308 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 73, 563, -80 ], flag: 0, tc: [ 522, -16956 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 340, 563, 448 ], flag: 0, tc: [ 1056, -15900 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 742, 563, -226 ], flag: 0, tc: [ 1858, -17248 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_07010378 = [
	{ pos: [ 58, -460, 320 ], flag: 0, tc: [ 494, -16158 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 130, -460, 601 ], flag: 0, tc: [ 636, -15596 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 217, -460, 653 ], flag: 0, tc: [ 812, -15492 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 73, 563, -80 ], flag: 0, tc: [ 522, -16956 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -84, 563, 183 ], flag: 0, tc: [ 208, -16430 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 340, 563, 448 ], flag: 0, tc: [ 1056, -15900 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 899, 102, -489 ], flag: 0, tc: [ 2172, -17774 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 426, 102, -295 ], flag: 0, tc: [ 1226, -17386 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 689, 102, -138 ], flag: 0, tc: [ 1754, -17072 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 635, 102, -647 ], flag: 0, tc: [ 1646, -18088 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1056, -460, -753 ], flag: 0, tc: [ 2486, -18302 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 919, -460, -1028 ], flag: 0, tc: [ 2212, -18850 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 652, -460, -466 ], flag: 0, tc: [ 1678, -17726 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 794, -460, -314 ], flag: 0, tc: [ 1962, -17424 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 322, -460, 477 ], flag: 0, tc: [ 1020, -15844 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_07010468 = [
	{ pos: [ 637, -255, -50 ], flag: 0, tc: [ 1648, -16896 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 163, -255, 144 ], flag: 0, tc: [ 704, -16508 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 427, -255, 301 ], flag: 0, tc: [ 1230, -16194 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 373, -255, -207 ], flag: 0, tc: [ 1122, -17210 ], color: [ 0, 127, 0, 255 ] },
]

const ttm_seg7_vertex_070104A8 = [
	{ pos: [ -590, 768, 107 ], flag: 0, tc: [ -800, -16582 ], color: [ 13, 168, 166, 255 ] },
	{ pos: [ -84, 768, 183 ], flag: 0, tc: [ 208, -16430 ], color: [ 13, 168, 166, 255 ] },
	{ pos: [ -150, 256, 672 ], flag: 0, tc: [ 76, -15456 ], color: [ 13, 168, 166, 255 ] },
	{ pos: [ -168, 614, -600 ], flag: 0, tc: [ 40, -17996 ], color: [ 221, 153, 64, 255 ] },
	{ pos: [ 1056, 102, -753 ], flag: 0, tc: [ 2486, -18302 ], color: [ 221, 153, 64, 255 ] },
	{ pos: [ 871, 358, -442 ], flag: 0, tc: [ 2116, -17680 ], color: [ 221, 153, 64, 255 ] },
	{ pos: [ 1056, 102, -753 ], flag: 0, tc: [ 2486, -18302 ], color: [ 206, 140, 245, 255 ] },
	{ pos: [ -168, 614, -600 ], flag: 0, tc: [ 40, -17996 ], color: [ 206, 140, 245, 255 ] },
	{ pos: [ -138, 621, -803 ], flag: 0, tc: [ 100, -18400 ], color: [ 206, 140, 245, 255 ] },
	{ pos: [ -150, 256, 672 ], flag: 0, tc: [ 76, -15456 ], color: [ 6, 165, 169, 255 ] },
	{ pos: [ -451, -153, 1078 ], flag: 0, tc: [ -522, -14644 ], color: [ 6, 165, 169, 255 ] },
	{ pos: [ -590, 768, 107 ], flag: 0, tc: [ -800, -16582 ], color: [ 6, 165, 169, 255 ] },
]

const ttm_seg7_vertex_07010568 = [
	{ pos: [ 427, 51, 301 ], flag: 0, tc: [ 1230, -16194 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 251, 51, 196 ], flag: 0, tc: [ 878, -16404 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 58, 51, 320 ], flag: 0, tc: [ 494, -16158 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -590, 768, 107 ], flag: 0, tc: [ -800, -16582 ], color: [ 168, 184, 201, 255 ] },
	{ pos: [ -451, -153, 1078 ], flag: 0, tc: [ -522, -14644 ], color: [ 168, 184, 201, 255 ] },
	{ pos: [ -1075, 768, 870 ], flag: 0, tc: [ -1770, -15058 ], color: [ 168, 184, 201, 255 ] },
	{ pos: [ 819, 768, -1228 ], flag: 0, tc: [ 2012, -19248 ], color: [ 226, 178, 161, 255 ] },
	{ pos: [ 1056, 102, -753 ], flag: 0, tc: [ 2486, -18302 ], color: [ 226, 178, 161, 255 ] },
	{ pos: [ -138, 621, -803 ], flag: 0, tc: [ 100, -18400 ], color: [ 226, 178, 161, 255 ] },
	{ pos: [ 871, 358, -442 ], flag: 0, tc: [ -226, 2336 ], color: [ 237, 0, 125, 255 ] },
	{ pos: [ 871, 768, -442 ], flag: 0, tc: [ 0, 990 ], color: [ 237, 0, 125, 255 ] },
	{ pos: [ -168, 614, -600 ], flag: 0, tc: [ -3566, 990 ], color: [ 237, 0, 125, 255 ] },
	{ pos: [ 322, 51, 477 ], flag: 0, tc: [ 1020, -15844 ], color: [ 0, 127, 0, 255 ] },
]

export const ttm_seg7_dl_07010638 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FA90.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FA90.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700FAD8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700FBB8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 11, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700FCB8, 9, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 6,  7,  8, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAA8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAA8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700FD48, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700FE38, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700FF38, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAC0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAC0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_0700FFF8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_070100F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_070101E8, 9, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 6,  7,  8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_07010830 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, mountain_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FA90.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FA90.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_07010278, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 10, 11,  8, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 15, 12, 14, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_07010378, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14,  0,  2, 0x0),
	Gbi.gsSPVertex(ttm_seg7_vertex_07010468, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAA8.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAA8.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_070104A8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAC0.l[0], 1),
	Gbi.gsSPLight(ttm_seg7_lights_0700FAC0.a, 2),
	Gbi.gsSPVertex(ttm_seg7_vertex_07010568, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 12, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ttm_seg7_dl_07010978 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ttm_seg7_dl_07010638),
	Gbi.gsSPDisplayList(ttm_seg7_dl_07010830),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

