// Blue Fish
import * as Gbi from "../../include/gbi"

// 0x0301B5E0
export const blue_fish_seg3_texture_0301B5E0 = []

// 0x0301B5C8
const blue_fish_seg3_lights_0301B5C8 = Gbi.gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

// 0x0301BDE0
const blue_fish_seg3_vertex_0301BDE0 = [
    {pos:[  -108,      1,      0], flag:0, tc:[    14,    566], color:[0x89, 0x00, 0xd7, 0xff]},
    {pos:[   -44,    -13,    -31], flag:0, tc:[   286,    688], color:[0xeb, 0x89, 0xdc, 0xff]},
    {pos:[   -62,    -19,     12], flag:0, tc:[   210,    502], color:[0xe8, 0x84, 0x0a, 0xff]},
    {pos:[   -44,     16,    -31], flag:0, tc:[   286,    688], color:[0xea, 0x77, 0xdc, 0xff]},
    {pos:[   -62,     21,     12], flag:0, tc:[   210,    502], color:[0xe8, 0x7c, 0x0b, 0xff]},
    {pos:[   -47,      1,    -64], flag:0, tc:[   274,    830], color:[0xbd, 0xff, 0x95, 0xff]},
    {pos:[   -97,      1,     23], flag:0, tc:[    62,    462], color:[0xa2, 0x00, 0x54, 0xff]},
    {pos:[    55,      1,    127], flag:0, tc:[   712,     -8], color:[0x1a, 0x00, 0x7c, 0xff]},
    {pos:[    41,     16,     56], flag:0, tc:[   656,    298], color:[0x43, 0x67, 0x1b, 0xff]},
    {pos:[    50,     16,    -43], flag:0, tc:[   692,    722], color:[0x35, 0x6f, 0xe6, 0xff]},
    {pos:[    41,    -14,     56], flag:0, tc:[   656,    298], color:[0x43, 0x99, 0x1b, 0xff]},
    {pos:[    50,    -13,    -43], flag:0, tc:[   692,    722], color:[0x35, 0x91, 0xe6, 0xff]},
    {pos:[    62,      1,    -92], flag:0, tc:[   742,    930], color:[0x42, 0xff, 0x94, 0xff]},
    {pos:[   101,      1,      1], flag:0, tc:[   910,    520], color:[0x7e, 0x00, 0x01, 0xff]},
]

// 0x0301BEC0 - 0x0301BFB8
const blue_fish_seg3_dl_0301BEC0 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, blue_fish_seg3_texture_0301B5E0),
    // gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsSPLight(blue_fish_seg3_lights_0301B5C8.l[0], 1),
    Gbi.gsSPLight(blue_fish_seg3_lights_0301B5C8.a, 2),
    Gbi.gsSPVertex(blue_fish_seg3_vertex_0301BDE0, 14, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  4, 0x0),
    ...Gbi.gsSP2Triangles( 5,  0,  3, 0x0,  2,  6,  0, 0x0),
    ...Gbi.gsSP2Triangles( 0,  6,  4, 0x0,  5,  1,  0, 0x0),
    ...Gbi.gsSP2Triangles( 4,  6,  7, 0x0,  6,  2,  7, 0x0),
    ...Gbi.gsSP2Triangles( 7,  8,  4, 0x0,  9,  4,  8, 0x0),
    ...Gbi.gsSP2Triangles( 9,  3,  4, 0x0,  2, 10,  7, 0x0),
    ...Gbi.gsSP2Triangles( 1, 11,  2, 0x0, 11, 10,  2, 0x0),
    ...Gbi.gsSP2Triangles( 1,  5, 12, 0x0, 12,  5,  3, 0x0),
    ...Gbi.gsSP2Triangles( 9, 11, 12, 0x0,  3,  9, 12, 0x0),
    ...Gbi.gsSP2Triangles(12, 11,  1, 0x0,  8,  7, 10, 0x0),
    ...Gbi.gsSP2Triangles(13,  9,  8, 0x0,  9, 13, 11, 0x0),
    ...Gbi.gsSP2Triangles(11, 13, 10, 0x0, 10, 13,  8, 0x0),
    Gbi.gsSPEndDisplayList(),
]

// 0x0301BFB8 - 0x0301C018
export const blue_fish_seg3_dl_0301BFB8 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    // gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPDisplayList(blue_fish_seg3_dl_0301BEC0),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPEndDisplayList(),
]

// 0x0301C018
const blue_fish_seg3_vertex_0301C018 = [
    {pos:[    67,      0,    -58], flag:0, tc:[   736,    728], color:[0x7a, 0x00, 0xde, 0xff]},
    {pos:[    67,     -3,    -28], flag:0, tc:[   704,    574], color:[0x53, 0xa3, 0x14, 0xff]},
    {pos:[     0,      1,     -3], flag:0, tc:[  1022,    356], color:[0xa1, 0xf9, 0xad, 0xff]},
    {pos:[    67,      4,     27], flag:0, tc:[   644,    290], color:[0x3f, 0x6d, 0xf3, 0xff]},
    {pos:[    53,      0,      0], flag:0, tc:[   744,    414], color:[0x7e, 0x00, 0xfe, 0xff]},
    {pos:[    67,     -3,     27], flag:0, tc:[   644,    290], color:[0x40, 0x95, 0xeb, 0xff]},
    {pos:[     0,      0,      5], flag:0, tc:[  1016,    312], color:[0x9e, 0xfd, 0x50, 0xff]},
    {pos:[    67,      4,    -28], flag:0, tc:[   704,    574], color:[0x54, 0x5c, 0x15, 0xff]},
    {pos:[    67,      0,     57], flag:0, tc:[   612,    138], color:[0x7a, 0x00, 0x22, 0xff]},
]

// 0x0301C0A8 - 0x0301C150
const blue_fish_seg3_dl_0301C0A8 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, blue_fish_seg3_texture_0301B5E0),
    // gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsSPLight(blue_fish_seg3_lights_0301B5C8.l[0], 1),
    Gbi.gsSPLight(blue_fish_seg3_lights_0301B5C8.a, 2),
    Gbi.gsSPVertex(blue_fish_seg3_vertex_0301C018, 9, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
    ...Gbi.gsSP2Triangles( 4,  5,  2, 0x0,  2,  5,  6, 0x0),
    ...Gbi.gsSP2Triangles( 2,  1,  4, 0x0,  2,  6,  3, 0x0),
    ...Gbi.gsSP2Triangles( 4,  7,  2, 0x0,  2,  7,  0, 0x0),
    ...Gbi.gsSP2Triangles( 6,  8,  3, 0x0,  3,  8,  5, 0x0),
    ...Gbi.gsSP2Triangles( 3,  5,  4, 0x0,  4,  1,  7, 0x0),
    ...Gbi.gsSP2Triangles( 6,  5,  8, 0x0,  1,  0,  7, 0x0),
    Gbi.gsSPEndDisplayList(),
]

// 0x0301C150 - 0x0301C1B0
export const blue_fish_seg3_dl_0301C150 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    // gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPDisplayList(blue_fish_seg3_dl_0301C0A8),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPEndDisplayList(),
]
