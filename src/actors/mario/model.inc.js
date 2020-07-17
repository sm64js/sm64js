import * as Gbi from "../../include/gbi"

const mario_blue_lights_group = Gbi.gdSPDefLights1(
    0x00, 0x00, 0x7f,
    0x00, 0x00, 0xff, 0x28, 0x28, 0x28
)

// 0x0400C090
const mario_butt_dl_vertex_group1 = [
    { pos: [ -9, 73, -34 ], flag: 0, tc: [ 0, 0 ], color: [ 194, 107, 230, 0 ] },
    { pos: [ -9, 73, 34 ], flag: 0, tc: [ 0, 0 ], color: [ 190, 106, 18, 0 ] },
    { pos: [ 22, 82, -26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 126, 245, 0 ] },
    { pos: [ 73, 11, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 4, 0, 0 ] },
    { pos: [ 55, -61, -36 ], flag: 0, tc: [ 0, 0 ], color: [ 103, 190, 225, 0 ] },
    { pos: [ 44, -10, -92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 158, 0 ] },
    { pos: [ 7, 33, 95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 117, 0 ] },
    { pos: [ 44, -9, 92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 98, 0 ] },
    { pos: [ 43, 40, 91 ], flag: 0, tc: [ 0, 0 ], color: [ 78, 48, 87, 0 ] },
    { pos: [ 8, -8, -99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 238, 132, 0 ] },
    { pos: [ 36, -51, -79 ], flag: 0, tc: [ 0, 0 ], color: [ 48, 184, 164, 0 ] },
    { pos: [ 26, -74, -46 ], flag: 0, tc: [ 0, 0 ], color: [ 24, 136, 226, 0 ] },
    { pos: [ 36, -52, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 48, 184, 92, 0 ] },
    { pos: [ 26, -74, 45 ], flag: 0, tc: [ 0, 0 ], color: [ 18, 136, 34, 0 ] },
    { pos: [ 55, -61, 36 ], flag: 0, tc: [ 0, 0 ], color: [ 96, 179, 26, 0 ] }
]

// 0x0400C180
const mario_butt_dl_vertex_group2 = [
    { pos: [ -5, 59, 72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 71, 0 ] },
    { pos: [ -9, 73, 34 ], flag: 0, tc: [ 0, 0 ], color: [ 190, 106, 18, 0 ] },
    { pos: [ -32, 40, 39 ], flag: 0, tc: [ 0, 0 ], color: [ 139, 37, 29, 0 ] },
    { pos: [ 52, 70, 38 ], flag: 0, tc: [ 0, 0 ], color: [ 83, 93, 22, 0 ] },
    { pos: [ 22, 82, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 125, 17, 0 ] },
    { pos: [ 27, 72, 63 ], flag: 0, tc: [ 0, 0 ], color: [ 6, 108, 66, 0 ] },
    { pos: [ 43, 40, -91 ], flag: 0, tc: [ 0, 0 ], color: [ 78, 48, 169, 0 ] },
    { pos: [ 27, 72, -63 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 107, 190, 0 ] },
    { pos: [ 52, 70, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 86, 229, 0 ] },
    { pos: [ -5, 59, -72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 185, 0 ] },
    { pos: [ -17, 32, -79 ], flag: 0, tc: [ 0, 0 ], color: [ 164, 35, 177, 0 ] },
    { pos: [ -32, 40, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 137, 37, 235, 0 ] },
    { pos: [ 73, 11, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 4, 0, 0 ] },
    { pos: [ 43, 40, 91 ], flag: 0, tc: [ 0, 0 ], color: [ 78, 48, 87, 0 ] }
]

// 0x0400C260
const mario_butt_dl_vertex_group3 = [
    { pos: [ -14, -74, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 203, 141, 0, 0 ] },
    { pos: [ -9, -69, 55 ], flag: 0, tc: [ 0, 0 ], color: [ 205, 151, 48, 0 ] },
    { pos: [ -31, -51, 42 ], flag: 0, tc: [ 0, 0 ], color: [ 141, 215, 31, 0 ] },
    { pos: [ 26, -74, -46 ], flag: 0, tc: [ 0, 0 ], color: [ 24, 136, 226, 0 ] },
    { pos: [ -9, -69, -55 ], flag: 0, tc: [ 0, 0 ], color: [ 205, 151, 208, 0 ] },
    { pos: [ 4, -48, -86 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 186, 159, 0 ] },
    { pos: [ 4, -49, 86 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 185, 97, 0 ] },
    { pos: [ 26, -74, 45 ], flag: 0, tc: [ 0, 0 ], color: [ 18, 136, 34, 0 ] },
    { pos: [ -32, 40, 39 ], flag: 0, tc: [ 0, 0 ], color: [ 139, 37, 29, 0 ] },
    { pos: [ -9, 73, 34 ], flag: 0, tc: [ 0, 0 ], color: [ 190, 106, 18, 0 ] },
    { pos: [ -32, 40, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 137, 37, 235, 0 ] },
    { pos: [ 27, 72, 63 ], flag: 0, tc: [ 0, 0 ], color: [ 6, 108, 66, 0 ] },
    { pos: [ -5, 59, 72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 71, 0 ] },
    { pos: [ 52, 70, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 86, 229, 0 ] },
    { pos: [ 22, 82, -26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 126, 245, 0 ] },
    { pos: [ 52, 70, 38 ], flag: 0, tc: [ 0, 0 ], color: [ 83, 93, 22, 0 ] },
]

// 0x0400C360
const mario_butt_dl_vertex_group4 = [
    { pos: [ 6, 33, -95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 139, 0 ] },
    { pos: [ 27, 72, -63 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 107, 190, 0 ] },
    { pos: [ 43, 40, -91 ], flag: 0, tc: [ 0, 0 ], color: [ 78, 48, 169, 0 ] },
    { pos: [ -31, -51, 42 ], flag: 0, tc: [ 0, 0 ], color: [ 141, 215, 31, 0 ] },
    { pos: [ -31, -51, -42 ], flag: 0, tc: [ 0, 0 ], color: [ 145, 208, 220, 0 ] },
    { pos: [ -14, -74, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 203, 141, 0, 0 ] },
    { pos: [ -9, -69, -55 ], flag: 0, tc: [ 0, 0 ], color: [ 205, 151, 208, 0 ] },
    { pos: [ 73, 11, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 4, 0, 0 ] },
    { pos: [ 44, -10, -92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 158, 0 ] },
    { pos: [ 52, 70, 38 ], flag: 0, tc: [ 0, 0 ], color: [ 83, 93, 22, 0 ] },
    { pos: [ 52, 70, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 86, 229, 0 ] },
    { pos: [ 43, 40, 91 ], flag: 0, tc: [ 0, 0 ], color: [ 78, 48, 87, 0 ] },
    { pos: [ 44, -9, 92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 98, 0 ] },
    { pos: [ 7, 33, 95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 117, 0 ] },
    { pos: [ 27, 72, 63 ], flag: 0, tc: [ 0, 0 ], color: [ 6, 108, 66, 0 ] }
]

// 0x0400C450
const mario_butt_dl_vertex_group5 = [
    { pos: [ -5, 59, -72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 185, 0 ] },
    { pos: [ -9, 73, -34 ], flag: 0, tc: [ 0, 0 ], color: [ 194, 107, 230, 0 ] },
    { pos: [ 27, 72, -63 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 107, 190, 0 ] },
    { pos: [ -32, 40, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 137, 37, 235, 0 ] },
    { pos: [ -32, 40, 39 ], flag: 0, tc: [ 0, 0 ], color: [ 139, 37, 29, 0 ] },
    { pos: [ -18, 32, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 164, 35, 79, 0 ] },
    { pos: [ -5, 59, 72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 71, 0 ] },
    { pos: [ 22, 82, -26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 126, 245, 0 ] },
    { pos: [ 52, 70, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 86, 229, 0 ] },
    { pos: [ 27, 72, 63 ], flag: 0, tc: [ 0, 0 ], color: [ 6, 108, 66, 0 ] },
    { pos: [ 43, 40, 91 ], flag: 0, tc: [ 0, 0 ], color: [ 78, 48, 87, 0 ] },
    { pos: [ 52, 70, 38 ], flag: 0, tc: [ 0, 0 ], color: [ 83, 93, 22, 0 ] },
    { pos: [ 8, -8, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 239, 124, 0 ] },
    { pos: [ 36, -52, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 48, 184, 92, 0 ] },
    { pos: [ 44, -9, 92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 98, 0 ] }
]

// 0x0400C540
const mario_butt_dl_vertex_group6 = [
    { pos: [ 6, 33, -95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 139, 0 ] },
    { pos: [ 43, 40, -91 ], flag: 0, tc: [ 0, 0 ], color: [ 78, 48, 169, 0 ] },
    { pos: [ 44, -10, -92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 158, 0 ] },
    { pos: [ 44, -9, 92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 98, 0 ] },
    { pos: [ 36, -52, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 48, 184, 92, 0 ] },
    { pos: [ 55, -61, 36 ], flag: 0, tc: [ 0, 0 ], color: [ 96, 179, 26, 0 ] },
    { pos: [ -18, 32, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 164, 35, 79, 0 ] },
    { pos: [ 7, 33, 95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 117, 0 ] },
    { pos: [ -5, 59, 72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 71, 0 ] },
    { pos: [ -20, -7, 81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 249, 85, 0 ] },
    { pos: [ 8, -8, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 239, 124, 0 ] },
    { pos: [ 4, -49, 86 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 185, 97, 0 ] },
    { pos: [ -20, -8, -81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 248, 171, 0 ] },
    { pos: [ 8, -8, -99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 238, 132, 0 ] },
    { pos: [ 4, -48, -86 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 186, 159, 0 ] }
]

// 0x0400C630
const mario_butt_dl_vertex_group7 = [
    { pos: [ -5, 59, -72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 185, 0 ] },
    { pos: [ 6, 33, -95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 139, 0 ] },
    { pos: [ -17, 32, -79 ], flag: 0, tc: [ 0, 0 ], color: [ 164, 35, 177, 0 ] },
    { pos: [ -20, -8, -81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 248, 171, 0 ] },
    { pos: [ 7, 33, 95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 117, 0 ] },
    { pos: [ -18, 32, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 164, 35, 79, 0 ] },
    { pos: [ -20, -7, 81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 249, 85, 0 ] },
    { pos: [ -32, 40, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 137, 37, 235, 0 ] },
    { pos: [ 55, -61, 36 ], flag: 0, tc: [ 0, 0 ], color: [ 96, 179, 26, 0 ] },
    { pos: [ 73, 11, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 4, 0, 0 ] },
    { pos: [ 44, -9, 92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 98, 0 ] },
    { pos: [ 55, -61, -36 ], flag: 0, tc: [ 0, 0 ], color: [ 103, 190, 225, 0 ] },
    { pos: [ 36, -51, -79 ], flag: 0, tc: [ 0, 0 ], color: [ 48, 184, 164, 0 ] },
    { pos: [ 44, -10, -92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 158, 0 ] },
    { pos: [ 8, -8, -99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 238, 132, 0 ] }
]

// 0x0400C720
const mario_butt_dl_vertex_group8 = [
    { pos: [ 8, -8, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 239, 124, 0 ] },
    { pos: [ 4, -49, 86 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 185, 97, 0 ] },
    { pos: [ 36, -52, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 48, 184, 92, 0 ] },
    { pos: [ -9, 73, -34 ], flag: 0, tc: [ 0, 0 ], color: [ 194, 107, 230, 0 ] },
    { pos: [ 22, 82, -26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 126, 245, 0 ] },
    { pos: [ 27, 72, -63 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 107, 190, 0 ] },
    { pos: [ 27, 72, 63 ], flag: 0, tc: [ 0, 0 ], color: [ 6, 108, 66, 0 ] },
    { pos: [ -5, 59, 72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 71, 0 ] },
    { pos: [ 7, 33, 95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 117, 0 ] },
    { pos: [ 6, 33, -95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 139, 0 ] },
    { pos: [ -5, 59, -72 ], flag: 0, tc: [ 0, 0 ], color: [ 192, 82, 185, 0 ] },
    { pos: [ 22, 82, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 125, 17, 0 ] },
    { pos: [ 52, 70, 38 ], flag: 0, tc: [ 0, 0 ], color: [ 83, 93, 22, 0 ] },
    { pos: [ -9, 73, 34 ], flag: 0, tc: [ 0, 0 ], color: [ 190, 106, 18, 0 ] },
    { pos: [ -32, 40, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 137, 37, 235, 0 ] },
    { pos: [ 26, -74, 45 ], flag: 0, tc: [ 0, 0 ], color: [ 18, 136, 34, 0 ] }
]

// 0x0400C820
const mario_butt_dl_vertex_group9 = [
    { pos: [ 4, -48, -86 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 186, 159, 0 ] },
    { pos: [ 36, -51, -79 ], flag: 0, tc: [ 0, 0 ], color: [ 48, 184, 164, 0 ] },
    { pos: [ 26, -74, -46 ], flag: 0, tc: [ 0, 0 ], color: [ 24, 136, 226, 0 ] },
    { pos: [ -20, -7, 81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 249, 85, 0 ] },
    { pos: [ -18, 32, 79 ], flag: 0, tc: [ 0, 0 ], color: [ 164, 35, 79, 0 ] },
    { pos: [ -32, 40, 39 ], flag: 0, tc: [ 0, 0 ], color: [ 139, 37, 29, 0 ] },
    { pos: [ 8, -8, -99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 238, 132, 0 ] },
    { pos: [ 7, 33, 95 ], flag: 0, tc: [ 0, 0 ], color: [ 230, 38, 117, 0 ] },
    { pos: [ 8, -8, 99 ], flag: 0, tc: [ 0, 0 ], color: [ 243, 239, 124, 0 ] },
    { pos: [ 44, -9, 92 ], flag: 0, tc: [ 0, 0 ], color: [ 79, 242, 98, 0 ] },
    { pos: [ -9, 73, 34 ], flag: 0, tc: [ 0, 0 ], color: [ 190, 106, 18, 0 ] },
    { pos: [ 22, 82, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 125, 17, 0 ] },
    { pos: [ 22, 82, -26 ], flag: 0, tc: [ 0, 0 ], color: [ 7, 126, 245, 0 ] },
    { pos: [ -9, -69, -55 ], flag: 0, tc: [ 0, 0 ], color: [ 205, 151, 208, 0 ] },
    { pos: [ -31, -51, -42 ], flag: 0, tc: [ 0, 0 ], color: [ 145, 208, 220, 0 ] },
    { pos: [ -20, -8, -81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 248, 171, 0 ] }
]

// 0x0400C920
const mario_butt_dl_vertex_group10 = [
    { pos: [ -31, -51, 42 ], flag: 0, tc: [ 0, 0 ], color: [ 141, 215, 31, 0 ] },
    { pos: [ -9, -69, 55 ], flag: 0, tc: [ 0, 0 ], color: [ 205, 151, 48, 0 ] },
    { pos: [ 4, -49, 86 ], flag: 0, tc: [ 0, 0 ], color: [ 216, 185, 97, 0 ] },
    { pos: [ -20, -7, 81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 249, 85, 0 ] },
    { pos: [ -32, 40, 39 ], flag: 0, tc: [ 0, 0 ], color: [ 139, 37, 29, 0 ] },
    { pos: [ -32, 40, -39 ], flag: 0, tc: [ 0, 0 ], color: [ 137, 37, 235, 0 ] },
    { pos: [ -20, -8, -81 ], flag: 0, tc: [ 0, 0 ], color: [ 163, 248, 171, 0 ] },
    { pos: [ -31, -51, -42 ], flag: 0, tc: [ 0, 0 ], color: [ 145, 208, 220, 0 ] },
    { pos: [ 55, -61, 36 ], flag: 0, tc: [ 0, 0 ], color: [ 96, 179, 26, 0 ] },
    { pos: [ 26, -74, 45 ], flag: 0, tc: [ 0, 0 ], color: [ 18, 136, 34, 0 ] },
    { pos: [ 26, -74, -46 ], flag: 0, tc: [ 0, 0 ], color: [ 24, 136, 226, 0 ] },
    { pos: [ -14, -74, 0 ], flag: 0, tc: [ 0, 0 ], color: [ 203, 141, 0, 0 ] },
    { pos: [ -9, -69, -55 ], flag: 0, tc: [ 0, 0 ], color: [ 205, 151, 208, 0 ] },
    { pos: [ 55, -61, -36 ], flag: 0, tc: [ 0, 0 ], color: [ 103, 190, 225, 0 ] }
]

const mario_butt_dl = [
    Gbi.gsSPVertex(mario_butt_dl_vertex_group1, 15, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9,  5, 10, 0x0),
    ...Gbi.gsSP2Triangles( 4, 11, 10, 0x0, 12, 13, 14, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group2, 14, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
    ...Gbi.gsSP2Triangles(12,  3, 13, 0x0,  6,  8, 12, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group3, 16, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  1,  7, 0x0,  8,  9, 10, 0x0),
    ...Gbi.gsSP2Triangles(11,  9, 12, 0x0, 13, 14, 15, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group4, 15, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  2, 0x0),
    ...Gbi.gsSP2Triangles( 9,  7, 10, 0x0, 11, 12,  7, 0x0),
    Gbi.gsSP1Triangle(13, 11, 14, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group5, 15, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
    ...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  2,  7,  8, 0x0),
    ...Gbi.gsSP2Triangles( 9, 10, 11, 0x0, 12, 13, 14, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group6, 15, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10,  7, 0x0),
    ...Gbi.gsSP2Triangles(11, 10,  9, 0x0, 12, 13, 14, 0x0),
    Gbi.gsSP1Triangle( 0, 13, 12, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group7, 15, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  2,  1, 0x0),
    ...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  2,  3, 0x0),
    ...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9,  8, 11, 0x0),
    ...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 13, 14,  1, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group8, 16, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10,  5, 0x0),
    ...Gbi.gsSP2Triangles( 4, 11, 12, 0x0,  6, 11, 13, 0x0),
    ...Gbi.gsSP2Triangles(13,  3, 14, 0x0, 15,  2,  1, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group9, 16, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 1,  0,  6, 0x0,  7,  8,  9, 0x0),
    ...Gbi.gsSP2Triangles(10, 11, 12, 0x0,  0, 13, 14, 0x0),
    Gbi.gsSP1Triangle(15,  0, 14, 0x0),
    Gbi.gsSPVertex(mario_butt_dl_vertex_group10, 14, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  0, 0x0),
    ...Gbi.gsSP2Triangles( 3,  4,  0, 0x0,  0,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  5,  7,  0, 0x0),
    ...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
    ...Gbi.gsSP2Triangles( 9,  1, 11, 0x0, 11, 12, 10, 0x0),
    Gbi.gsSP1Triangle(10, 13,  8, 0x0),
    Gbi.gsSPEndDisplayList()
]

export const mario_butt = [
    Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALFADE), //G_CC_SHADEFADE
    Gbi.gsSPLight(mario_blue_lights_group.l[0], 1),
    Gbi.gsSPLight(mario_blue_lights_group.a, 2, true),
    Gbi.gsSPDisplayList(mario_butt_dl),
    Gbi.gsSPEndDisplayList()
]