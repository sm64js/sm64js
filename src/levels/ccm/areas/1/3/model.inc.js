import * as Gbi from "../../../../../include/gbi"
import { snow_09001000,	snow_09008000 } from "../../../../../textures/snow"
import { ccm_seg7_texture_07000800 } from "../../../texture.inc"

const ccm_seg7_lights_0700B248 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700B260 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700B278 = Gbi.gdSPDefLights1(
	    0x5d, 0x5d, 0x5d,
	    0xbb, 0xbb, 0xbb, 0x28, 0x28, 0x28
)

const ccm_seg7_lights_0700B290 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x00,
	    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
)

const ccm_seg7_vertex_0700B2A8 = [
	{ pos: [ -3268, -2149, 6246 ], flag: 0, tc: [ 990, 524 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3268, -1919, 6246 ], flag: 0, tc: [ 990, -50 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3268, -1919, 6297 ], flag: 0, tc: [ 0, -50 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3268, -2149, 6553 ], flag: 0, tc: [ 990, 527 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3268, -1919, 6553 ], flag: 0, tc: [ 990, -47 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3268, -1919, 6605 ], flag: 0, tc: [ 0, -47 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -3268, -2149, 6605 ], flag: 0, tc: [ 0, 527 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 768, -4607, 6296 ], flag: 0, tc: [ 788, 115 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 768, -4505, 6296 ], flag: 0, tc: [ 788, -11 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 768, -4505, 6224 ], flag: 0, tc: [ -232, -11 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 768, -4607, 6224 ], flag: 0, tc: [ -232, 115 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 768, -4607, 6623 ], flag: 0, tc: [ 1088, 111 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 768, -4505, 6623 ], flag: 0, tc: [ 1088, -16 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 768, -4505, 6552 ], flag: 0, tc: [ 66, -16 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 768, -4607, 6552 ], flag: 0, tc: [ 66, 111 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -3268, -2149, 6297 ], flag: 0, tc: [ 0, 524 ], color: [ 127, 0, 0, 255 ] },
]

const ccm_seg7_vertex_0700B3A8 = [
	{ pos: [ 768, -4505, 6224 ], flag: 0, tc: [ 1812, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 922, -4607, 6224 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 768, -4607, 6224 ], flag: 0, tc: [ 1244, 1840 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3268, -2149, 6605 ], flag: 0, tc: [ 384, 56 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3268, -1919, 6605 ], flag: 0, tc: [ 2484, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3371, -2149, 6605 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3371, -2149, 6605 ], flag: 0, tc: [ 3034, 3504 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3268, -1919, 6605 ], flag: 0, tc: [ 3034, 990 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3268, -1919, 6553 ], flag: 0, tc: [ 2524, 990 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3371, -2149, 6553 ], flag: 0, tc: [ 2524, 3504 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3371, -2149, 6553 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3268, -1919, 6553 ], flag: 0, tc: [ 2484, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3268, -2149, 6553 ], flag: 0, tc: [ 384, 56 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 768, -4505, 6552 ], flag: 0, tc: [ 0, -852 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 768, -4505, 6623 ], flag: 0, tc: [ -746, -852 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 922, -4607, 6623 ], flag: 0, tc: [ -746, 990 ], color: [ 70, 105, 0, 255 ] },
]

const ccm_seg7_vertex_0700B4A8 = [
	{ pos: [ 922, -4607, 6296 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 768, -4505, 6296 ], flag: 0, tc: [ 1812, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 768, -4607, 6296 ], flag: 0, tc: [ 1244, 1840 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 768, -4505, 6224 ], flag: 0, tc: [ 3238, -854 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 922, -4607, 6296 ], flag: 0, tc: [ 2522, 990 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 922, -4607, 6224 ], flag: 0, tc: [ 3238, 990 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 768, -4505, 6296 ], flag: 0, tc: [ 2522, -854 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 768, -4607, 6552 ], flag: 0, tc: [ 1244, 1838 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 768, -4505, 6552 ], flag: 0, tc: [ 1810, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 922, -4607, 6552 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -3371, -2149, 6297 ], flag: 0, tc: [ 0, 3504 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3268, -1919, 6246 ], flag: 0, tc: [ -540, 990 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3371, -2149, 6246 ], flag: 0, tc: [ -540, 3504 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ 768, -4505, 6552 ], flag: 0, tc: [ 0, -852 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 922, -4607, 6623 ], flag: 0, tc: [ -746, 990 ], color: [ 70, 105, 0, 255 ] },
	{ pos: [ 922, -4607, 6552 ], flag: 0, tc: [ 0, 990 ], color: [ 70, 105, 0, 255 ] },
]

const ccm_seg7_vertex_0700B5A8 = [
	{ pos: [ 922, -4607, 6623 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 768, -4505, 6623 ], flag: 0, tc: [ 1810, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 768, -4607, 6623 ], flag: 0, tc: [ 1244, 1838 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3268, -2149, 6297 ], flag: 0, tc: [ 384, 56 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3268, -1919, 6297 ], flag: 0, tc: [ 2484, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3371, -2149, 6297 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -3371, -2149, 6297 ], flag: 0, tc: [ 0, 3504 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3268, -1919, 6297 ], flag: 0, tc: [ 0, 990 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ -3268, -1919, 6246 ], flag: 0, tc: [ -540, 990 ], color: [ 141, 51, 0, 255 ] },
	{ pos: [ 2740, -4351, 3808 ], flag: 0, tc: [ 1246, 990 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2927, -4607, 3634 ], flag: 0, tc: [ 0, -288 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2927, -4351, 3634 ], flag: 0, tc: [ 1246, -288 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2048, 2560, -2047 ], flag: 0, tc: [ 2030, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2048, 2560, -767 ], flag: 0, tc: [ 1702, -1544 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3072, 2560, -767 ], flag: 0, tc: [ -324, -1282 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3072, 2560, -1914 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
]

const ccm_seg7_vertex_0700B6A8 = [
	{ pos: [ 3072, 2560, -511 ], flag: 0, tc: [ -390, -1788 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3072, 2560, -767 ], flag: 0, tc: [ -324, -1282 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2816, 2560, -767 ], flag: 0, tc: [ 180, -1348 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3682, -4095, 2895 ], flag: 0, tc: [ -26, 976 ], color: [ 120, 0, 38, 255 ] },
	{ pos: [ 3682, -4126, 2895 ], flag: 0, tc: [ 0, 990 ], color: [ 120, 0, 38, 255 ] },
	{ pos: [ 4299, -3358, 960 ], flag: 0, tc: [ 990, 990 ], color: [ 120, 0, 38, 255 ] },
	{ pos: [ 4299, -3327, 960 ], flag: 0, tc: [ 996, 976 ], color: [ 120, 0, 38, 255 ] },
	{ pos: [ 2740, -4351, 3808 ], flag: 0, tc: [ 1246, 990 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2740, -4607, 3808 ], flag: 0, tc: [ 0, 990 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2927, -4607, 3634 ], flag: 0, tc: [ 0, -288 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 3979, -3327, 800 ], flag: 0, tc: [ 10802, 990 ], color: [ 236, 118, 40, 255 ] },
	{ pos: [ 3682, -4095, 2895 ], flag: 0, tc: [ -288, -780 ], color: [ 236, 118, 40, 255 ] },
	{ pos: [ 4299, -3327, 960 ], flag: 0, tc: [ 10544, -780 ], color: [ 236, 118, 40, 255 ] },
	{ pos: [ 2927, -4351, 3634 ], flag: 0, tc: [ 1246, -288 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 3682, -4607, 2895 ], flag: 0, tc: [ 0, -5560 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 3682, -4095, 2895 ], flag: 0, tc: [ 2522, -5560 ], color: [ 88, 0, 90, 255 ] },
]

const ccm_seg7_vertex_0700B7A8 = [
	{ pos: [ 2927, -4351, 3634 ], flag: 0, tc: [ 1246, -288 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 2927, -4607, 3634 ], flag: 0, tc: [ 0, -288 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 3682, -4607, 2895 ], flag: 0, tc: [ 0, -5560 ], color: [ 88, 0, 90, 255 ] },
	{ pos: [ 3362, -4095, 2735 ], flag: 0, tc: [ 0, 990 ], color: [ 242, 123, 28, 255 ] },
	{ pos: [ 2927, -4351, 3634 ], flag: 0, tc: [ -5016, -280 ], color: [ 242, 123, 28, 255 ] },
	{ pos: [ 3682, -4095, 2895 ], flag: 0, tc: [ 384, -742 ], color: [ 242, 123, 28, 255 ] },
	{ pos: [ 3362, -4095, 2735 ], flag: 0, tc: [ 0, 990 ], color: [ 232, 122, 22, 255 ] },
	{ pos: [ 2753, -4351, 3447 ], flag: 0, tc: [ -4874, 990 ], color: [ 232, 122, 22, 255 ] },
	{ pos: [ 2927, -4351, 3634 ], flag: 0, tc: [ -5016, -280 ], color: [ 232, 122, 22, 255 ] },
	{ pos: [ 2566, -4351, 3621 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2927, -4351, 3634 ], flag: 0, tc: [ 1246, -288 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2753, -4351, 3447 ], flag: 0, tc: [ 1246, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2740, -4351, 3808 ], flag: 0, tc: [ 0, -288 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2391, -4351, 3433 ], flag: 0, tc: [ 0, -288 ], color: [ 164, 0, 86, 255 ] },
	{ pos: [ 2566, -4351, 3621 ], flag: 0, tc: [ 0, 990 ], color: [ 164, 0, 86, 255 ] },
	{ pos: [ 2566, -2303, 3621 ], flag: 0, tc: [ 10188, 990 ], color: [ 164, 0, 86, 255 ] },
]

const ccm_seg7_vertex_0700B8A8 = [
	{ pos: [ 3979, -3327, 800 ], flag: 0, tc: [ 10802, 990 ], color: [ 236, 118, 40, 255 ] },
	{ pos: [ 3362, -4095, 2735 ], flag: 0, tc: [ 0, 990 ], color: [ 236, 118, 40, 255 ] },
	{ pos: [ 3682, -4095, 2895 ], flag: 0, tc: [ -288, -780 ], color: [ 236, 118, 40, 255 ] },
	{ pos: [ 2566, -4351, 3621 ], flag: 0, tc: [ 1246, 964 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2753, -4351, 3447 ], flag: 0, tc: [ 1246, -314 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2753, -2303, 3447 ], flag: 0, tc: [ 11466, -314 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2566, -2303, 3621 ], flag: 0, tc: [ 11466, 962 ], color: [ 86, 0, 92, 255 ] },
	{ pos: [ 2391, -2303, 3433 ], flag: 0, tc: [ 2522, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2566, -2303, 3621 ], flag: 0, tc: [ 1246, -288 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2753, -2303, 3447 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2579, -2303, 3259 ], flag: 0, tc: [ 1246, 2266 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 2391, -4351, 3433 ], flag: 0, tc: [ 0, -288 ], color: [ 164, 0, 86, 255 ] },
	{ pos: [ 2566, -2303, 3621 ], flag: 0, tc: [ 10188, 990 ], color: [ 164, 0, 86, 255 ] },
	{ pos: [ 2391, -2303, 3433 ], flag: 0, tc: [ 10188, -288 ], color: [ 164, 0, 86, 255 ] },
]

const ccm_seg7_vertex_0700B988 = [
	{ pos: [ 4299, -3358, 960 ], flag: 0, tc: [ 0, 990 ], color: [ 120, 0, 41, 255 ] },
	{ pos: [ 4551, -3071, 228 ], flag: 0, tc: [ 1400, -2876 ], color: [ 120, 0, 41, 255 ] },
	{ pos: [ 4299, -3071, 960 ], flag: 0, tc: [ 1398, 990 ], color: [ 120, 0, 41, 255 ] },
	{ pos: [ 4551, -3358, 228 ], flag: 0, tc: [ 0, -2876 ], color: [ 120, 0, 41, 255 ] },
	{ pos: [ 3979, -3071, 800 ], flag: 0, tc: [ 1246, 990 ], color: [ 200, 0, 113, 255 ] },
	{ pos: [ 3979, -3327, 800 ], flag: 0, tc: [ 0, 990 ], color: [ 200, 0, 113, 255 ] },
	{ pos: [ 4299, -3327, 960 ], flag: 0, tc: [ 0, -798 ], color: [ 200, 0, 113, 255 ] },
	{ pos: [ 4299, -3071, 960 ], flag: 0, tc: [ 1246, -798 ], color: [ 200, 0, 113, 255 ] },
]

const ccm_seg7_vertex_0700BA08 = [
	{ pos: [ 4299, -3358, 960 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3521, -3358, 571 ], flag: 0, tc: [ 4312, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3864, -3358, -115 ], flag: 0, tc: [ 4312, -2842 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 2807, -4607, 3956 ], flag: 0, tc: [ 0, 990 ], color: [ 164, 0, 86, 255 ] },
	{ pos: [ 2807, -4196, 3956 ], flag: 0, tc: [ 4068, 990 ], color: [ 164, 0, 86, 255 ] },
	{ pos: [ 2528, -4196, 3656 ], flag: 0, tc: [ 4068, -3098 ], color: [ 164, 0, 86, 255 ] },
	{ pos: [ 4299, -3358, 960 ], flag: 0, tc: [ 4258, 380 ], color: [ 20, 138, 216, 255 ] },
	{ pos: [ 3682, -4126, 2895 ], flag: 0, tc: [ 0, 990 ], color: [ 20, 138, 216, 255 ] },
	{ pos: [ 3521, -3358, 571 ], flag: 0, tc: [ 4266, -1358 ], color: [ 20, 138, 216, 255 ] },
	{ pos: [ 1940, -4125, 2033 ], flag: 0, tc: [ 0, -2892 ], color: [ 20, 138, 216, 255 ] },
	{ pos: [ 3682, -4126, 2895 ], flag: 0, tc: [ 1950, 990 ], color: [ 56, 1, 143, 255 ] },
	{ pos: [ 1942, -5119, 2025 ], flag: 0, tc: [ 0, -2894 ], color: [ 56, 1, 143, 255 ] },
	{ pos: [ 1940, -4125, 2033 ], flag: 0, tc: [ 1950, -2892 ], color: [ 56, 1, 143, 255 ] },
	{ pos: [ 3682, -4126, 2895 ], flag: 0, tc: [ 1950, 990 ], color: [ 56, 0, 143, 255 ] },
	{ pos: [ 3682, -5119, 2895 ], flag: 0, tc: [ 0, 990 ], color: [ 56, 0, 143, 255 ] },
	{ pos: [ 1942, -5119, 2025 ], flag: 0, tc: [ 0, -2894 ], color: [ 56, 0, 143, 255 ] },
]

const ccm_seg7_vertex_0700BB08 = [
	{ pos: [ 4299, -3358, 960 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3864, -3358, -115 ], flag: 0, tc: [ 4312, -2842 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4551, -3358, 228 ], flag: 0, tc: [ 478, -2842 ], color: [ 0, 129, 0, 255 ] },
]

const ccm_seg7_vertex_0700BB38 = [
	{ pos: [ 4096, -3071, 0 ], flag: 0, tc: [ 2484, -3212 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4299, -3071, 960 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4551, -3071, 228 ], flag: 0, tc: [ 0, -2876 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3979, -3071, 800 ], flag: 0, tc: [ 1742, 754 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3657, -3071, 622 ], flag: 0, tc: [ 3548, 438 ], color: [ 0, 127, 0, 255 ] },
]

const ccm_seg7_vertex_0700BB88 = [
	{ pos: [ -5151, -1740, 4516 ], flag: 0, tc: [ 990, 0 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -4947, -2252, 4509 ], flag: 0, tc: [ 0, 2012 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -4947, -1740, 4509 ], flag: 0, tc: [ 0, 0 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -5144, -1740, 4720 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -5144, -2252, 4720 ], flag: 0, tc: [ 0, 2012 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -5151, -2252, 4516 ], flag: 0, tc: [ 990, 2012 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -5151, -1740, 4516 ], flag: 0, tc: [ 990, 0 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -4940, -1740, 4714 ], flag: 0, tc: [ 0, 0 ], color: [ 253, 0, 130, 255 ] },
	{ pos: [ -4940, -2252, 4714 ], flag: 0, tc: [ 0, 2012 ], color: [ 253, 0, 130, 255 ] },
	{ pos: [ -5144, -2252, 4720 ], flag: 0, tc: [ 990, 2012 ], color: [ 253, 0, 130, 255 ] },
	{ pos: [ -5144, -1740, 4720 ], flag: 0, tc: [ 990, 0 ], color: [ 253, 0, 130, 255 ] },
	{ pos: [ -4947, -1740, 4509 ], flag: 0, tc: [ 990, 0 ], color: [ 130, 0, 4, 255 ] },
	{ pos: [ -4940, -2252, 4714 ], flag: 0, tc: [ 0, 2012 ], color: [ 130, 0, 4, 255 ] },
	{ pos: [ -4940, -1740, 4714 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 4, 255 ] },
	{ pos: [ -4947, -2252, 4509 ], flag: 0, tc: [ 990, 2012 ], color: [ 130, 0, 4, 255 ] },
]

const ccm_seg7_vertex_0700BC78 = [
	{ pos: [ -3516, -4607, 4684 ], flag: 0, tc: [ 990, 0 ], color: [ 130, 0, 3, 255 ] },
	{ pos: [ -3510, -5119, 4889 ], flag: 0, tc: [ 0, 2012 ], color: [ 130, 0, 3, 255 ] },
	{ pos: [ -3510, -4607, 4889 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 3, 255 ] },
	{ pos: [ -5151, -1740, 4516 ], flag: 0, tc: [ 990, 0 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -5151, -2252, 4516 ], flag: 0, tc: [ 990, 2012 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -4947, -2252, 4509 ], flag: 0, tc: [ 0, 2012 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -3714, -4607, 4896 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -3714, -5119, 4896 ], flag: 0, tc: [ 0, 2012 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -3721, -5119, 4691 ], flag: 0, tc: [ 990, 2012 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -3721, -4607, 4691 ], flag: 0, tc: [ 990, 0 ], color: [ 126, 0, 252, 255 ] },
	{ pos: [ -3510, -4607, 4889 ], flag: 0, tc: [ 990, 0 ], color: [ 252, 0, 130, 255 ] },
	{ pos: [ -3510, -5119, 4889 ], flag: 0, tc: [ 990, 2012 ], color: [ 252, 0, 130, 255 ] },
	{ pos: [ -3714, -5119, 4896 ], flag: 0, tc: [ 0, 2012 ], color: [ 252, 0, 130, 255 ] },
	{ pos: [ -3714, -4607, 4896 ], flag: 0, tc: [ 0, 0 ], color: [ 252, 0, 130, 255 ] },
	{ pos: [ -3516, -5119, 4684 ], flag: 0, tc: [ 990, 2012 ], color: [ 130, 0, 3, 255 ] },
]

const ccm_seg7_vertex_0700BD68 = [
	{ pos: [ 1192, -4607, 5626 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1192, -5119, 5626 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1192, -5119, 5831 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -3721, -4607, 4691 ], flag: 0, tc: [ 0, 0 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -3721, -5119, 4691 ], flag: 0, tc: [ 0, 2012 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -3516, -5119, 4684 ], flag: 0, tc: [ 990, 2012 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ -3516, -4607, 4684 ], flag: 0, tc: [ 990, 0 ], color: [ 4, 0, 126, 255 ] },
	{ pos: [ 988, -4607, 5831 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 988, -5119, 5831 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 988, -5119, 5626 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 988, -4607, 5626 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 1192, -4607, 5831 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1192, -5119, 5831 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 988, -5119, 5831 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 988, -4607, 5831 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
]

const ccm_seg7_vertex_0700BE58 = [
	{ pos: [ 988, -4607, 5626 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1192, -5119, 5626 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1192, -4607, 5626 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1192, -4607, 5626 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1192, -5119, 5831 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1192, -4607, 5831 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 988, -5119, 5626 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const ccm_seg7_vertex_0700BEC8 = [
	{ pos: [ -5151, -2252, 4516 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -4940, -2252, 4714 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -4947, -2252, 4509 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5144, -2252, 4720 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3721, -5119, 4691 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3714, -5119, 4896 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3510, -5119, 4889 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3516, -5119, 4684 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 988, -5119, 5626 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 988, -5119, 5831 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1192, -5119, 5831 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1192, -5119, 5626 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
]

export const ccm_seg7_dl_0700BF88 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ccm_seg7_texture_07000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 4 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B248.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B248.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B2A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700C000 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B3A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B4A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B5A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B6A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B7A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 12, 10, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B8A8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700B988, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700B260.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B260.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BA08, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  7,  9,  8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BB08, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPLight(ccm_seg7_lights_0700B278.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B278.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BB38, 5, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSP1Triangle( 0,  4,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700C220 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B248.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B248.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BB88, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BC78, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BD68, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BE58, 7, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSP1Triangle( 0,  6,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700C330 = [
	Gbi.gsSPLight(ccm_seg7_lights_0700B290.l[0], 1),
	Gbi.gsSPLight(ccm_seg7_lights_0700B290.a, 2),
	Gbi.gsSPVertex(ccm_seg7_vertex_0700BEC8, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccm_seg7_dl_0700C380 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 2, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (4 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700BF88),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700C000),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700C220),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(ccm_seg7_dl_0700C330),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

