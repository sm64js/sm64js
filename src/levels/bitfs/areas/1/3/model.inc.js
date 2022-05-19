// 0x07002B30 - 0x07002C30

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { bitfs_seg7_texture_07001800 } from "../../../texture.inc"

import { sky_09001000 } from "../../../../../textures/sky"

const bitfs_seg7_vertex_07002B30 = [
    [[    61,  -1535,    492], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1228,    573], 0, [     0,      0], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1535,    573], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1535,   -654], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1228,   -572], 0, [     0,      0], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1535,   -572], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1228,   -654], 0, [   240,      0], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1535,   -572], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,   -654], 0, [     0,      0], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1535,   -654], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,   -572], 0, [   240,      0], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1535,    573], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,    492], 0, [     0,      0], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1535,    492], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,    573], 0, [   240,      0], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1228,    492], 0, [   240,      0], [0x72, 0x67, 0x34, 0xff]],
];

// 0x07002C30 - 0x07002D20
const bitfs_seg7_vertex_07002C30 = [
    [[   -81,  -1535,   -511], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,   -511], 0, [     0,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,   -572], 0, [  -234,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1535,   -572], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1228,   -572], 0, [   444,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,   -511], 0, [   240,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1535,   -511], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1535,   -716], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,   -716], 0, [   240,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1228,   -654], 0, [   444,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1535,   -654], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1535,   -654], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,   -716], 0, [   258,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1535,   -716], 0, [   258,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,   -654], 0, [     0,      0], [0x8a, 0x7d, 0x4c, 0xff]],
];

// 0x07002D20 - 0x07002E10
const bitfs_seg7_vertex_07002D20 = [
    [[     0,  -1535,    430], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,    430], 0, [   240,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1228,    492], 0, [   444,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1535,   -511], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,   -572], 0, [  -234,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1535,   -572], 0, [  -234,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1535,    635], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,    635], 0, [     0,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,    573], 0, [  -234,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1535,    573], 0, [  -234,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1535,    492], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,    430], 0, [   258,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1535,    430], 0, [   258,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,    492], 0, [     0,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1535,    492], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
];

// 0x07002E10 - 0x07002F00
const bitfs_seg7_vertex_07002E10 = [
    [[    61,  -1535,    573], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1228,    573], 0, [   444,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,    635], 0, [   240,      0], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1535,    635], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1535,    635], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,    635], 0, [     0,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1535,    635], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1535,   -511], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,   -511], 0, [   240,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,   -511], 0, [     0,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1535,   -511], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1535,   -716], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,   -716], 0, [     0,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,   -716], 0, [   240,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1535,   -716], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
];

// 0x07002F00 - 0x07002F70
const bitfs_seg7_vertex_07002F00 = [
    [[   -81,  -1535,    430], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,    430], 0, [     0,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,    430], 0, [   240,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1535,    430], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1535,    635], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,    635], 0, [   240,      0], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,    635], 0, [     0,      0], [0xac, 0x9d, 0x52, 0xff]],
];

// 0x07002F70 - 0x07003070
const bitfs_seg7_vertex_07002F70 = [
    [[    61,  -1228,   -654], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[    61,   1536,   -654], 0, [   240,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[    61,   1536,   -572], 0, [     0,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1228,    492], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[    61,   1536,    573], 0, [     0,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1228,    573], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
    [[    61,   1536,    492], 0, [   240,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,    573], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,   1536,    573], 0, [   240,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,   1536,    492], 0, [     0,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,    492], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,   -572], 0, [   240,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,   1536,   -654], 0, [     0,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,  -1228,   -654], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
    [[  -142,   1536,   -572], 0, [   240,  -8208], [0x72, 0x67, 0x34, 0xff]],
    [[    61,  -1228,   -572], 0, [     0,    990], [0x72, 0x67, 0x34, 0xff]],
];

// 0x07003070 - 0x07003160
const bitfs_seg7_vertex_07003070 = [
    [[   -81,  -1228,    635], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,   1536,    573], 0, [  -234,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,    573], 0, [  -234,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1228,    573], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,   1536,    573], 0, [   444,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,   1536,    635], 0, [   240,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,    635], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,    430], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,   1536,    430], 0, [   240,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,   1536,    492], 0, [   444,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1228,    492], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,    492], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,   1536,    430], 0, [   258,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,    430], 0, [   258,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,   1536,    492], 0, [     0,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
];

// 0x07003160 - 0x07003250
const bitfs_seg7_vertex_07003160 = [
    [[     0,  -1228,   -716], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,   1536,   -654], 0, [   444,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,  -1228,   -654], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,    635], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,   1536,    635], 0, [     0,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,   1536,    573], 0, [  -234,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,   -511], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,   1536,   -572], 0, [  -234,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,   -572], 0, [  -234,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,   1536,   -511], 0, [     0,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,  -1228,   -654], 0, [     0,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[  -142,   1536,   -654], 0, [     0,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,   1536,   -716], 0, [   258,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[   -81,  -1228,   -716], 0, [   258,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,   1536,   -716], 0, [   240,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
];

// 0x07003250 - 0x07003340
const bitfs_seg7_vertex_07003250 = [
    [[    61,  -1228,   -572], 0, [   444,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,   1536,   -511], 0, [   240,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,   -511], 0, [   240,    990], [0x8a, 0x7d, 0x4c, 0xff]],
    [[    61,   1536,   -572], 0, [   444,  -8208], [0x8a, 0x7d, 0x4c, 0xff]],
    [[     0,  -1228,   -511], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,   1536,   -511], 0, [     0,  -8208], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,   -511], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,    635], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,   1536,    635], 0, [     0,  -8208], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,    635], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,   1536,    635], 0, [   240,  -8208], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,  -1228,    430], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,   1536,    430], 0, [   240,  -8208], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,    430], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,   1536,    430], 0, [     0,  -8208], [0xac, 0x9d, 0x52, 0xff]],
];

// 0x07003340 - 0x070033B0
const bitfs_seg7_vertex_07003340 = [
    [[   -81,  -1228,   -716], 0, [  -302,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,   1536,   -716], 0, [     0,  -8206], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,   -716], 0, [     0,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,   1536,   -716], 0, [  -302,  -8206], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,  -1228,   -511], 0, [   240,    990], [0xac, 0x9d, 0x52, 0xff]],
    [[     0,   1536,   -511], 0, [   240,  -8208], [0xac, 0x9d, 0x52, 0xff]],
    [[   -81,   1536,   -511], 0, [     0,  -8208], [0xac, 0x9d, 0x52, 0xff]],
];

// TODO: what is this?
// Possibly vertices for a perfect triangle, but flag seems to be used here.
// 0x070033B0 - 0x070033E0
const bitfs_seg7_todo_070033B0 = [
    0x0080, 0x0100, 0x0000, 0x0000, 0x03de, 0x0000, 0xFFFF, 0xFFFF,
    0xFF81, 0x0100, 0x0000, 0x0000, 0xFBE4, 0x0000, 0xFFFF, 0xFFFF,
    0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x07DA, 0xFFFF, 0xFFFF,
]

// 0x070033E0 - 0x07003528
const bitfs_seg7_dl_070033E0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bitfs_seg7_texture_07001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitfs_seg7_vertex_07002B30, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 14, 12, 0x0,  0, 15,  1, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07002C30, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07002D20, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
    gsSP1Triangle( 0,  2, 14, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07002E10, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07002F00, 7, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP1Triangle( 4,  5,  6, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07003528 - 0x07003670
const bitfs_seg7_dl_07003528 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sky_09001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bitfs_seg7_vertex_07002F70, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07003070, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07003160, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07003250, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(bitfs_seg7_vertex_07003340, 7, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP1Triangle( 4,  5,  6, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07003670 - 0x07003700
export const bitfs_seg7_dl_07003670 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitfs_seg7_dl_070033E0),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bitfs_seg7_dl_07003528),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)