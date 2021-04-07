// Cannon Base
import * as Gbi from "../../include/gbi"

export const cannon_base_seg8_texture_080049B8 = []

const cannon_base_seg8_lights_08004988 = Gbi.gdSPDefLights1(
    0x4c, 0x4c, 0x4c,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

const cannon_base_seg8_lights_080049A0 = Gbi.gdSPDefLights1(
    0x0e, 0x10, 0x4c,
    0x30, 0x37, 0xff, 0x28, 0x28, 0x28
);

const cannon_base_seg8_vertex_080051B8 = [
    {pos: [   102,   -101,     51], flag: 0, tc: [     0,   1758], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   102,   -101,    -50], flag: 0, tc: [   990,   1758], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   102,     51,    -50], flag: 0, tc: [   990,    228], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   102,     77,     26], flag: 0, tc: [   224,    -28], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   102,     51,     51], flag: 0, tc: [     0,    228], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   102,     77,    -25], flag: 0, tc: [   734,    -28], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [  -101,     51,    -50], flag: 0, tc: [     0,    224], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [  -101,     77,     26], flag: 0, tc: [   734,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [  -101,     77,    -25], flag: 0, tc: [   224,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [  -101,   -101,    -50], flag: 0, tc: [     0,   1754], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [  -101,   -101,     51], flag: 0, tc: [   990,   1754], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [  -101,     51,     51], flag: 0, tc: [   990,    224], color: [0x81, 0x00, 0x00, 0xff]},
]

// 0x08005278
const cannon_base_seg8_vertex_08005278 = [
    {pos: [   -60,   -101,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [    61,   -101,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [    61,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [   102,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [    61,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [   102,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [    61,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [    61,     51,    -50], flag: 0, tc: [     0,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [    61,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [    61,   -101,     51], flag: 0, tc: [     0,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [    61,     77,     26], flag: 0, tc: [     0,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [    61,     77,    -25], flag: 0, tc: [     0,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [    61,     51,     51], flag: 0, tc: [     0,      0], color: [0x81, 0x00, 0x00, 0xff]},
    {pos: [   102,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [    61,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [    61,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
]

// 0x08005378
const cannon_base_seg8_vertex_08005378 = [
    {pos: [   102,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [    61,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [   102,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [   102,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [    61,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [    61,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [   102,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [   102,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [    61,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [    61,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [   102,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [   102,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
    {pos: [    61,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
    {pos: [    61,   -101,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
    {pos: [   102,   -101,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
]

// 0x08005468
const cannon_base_seg8_vertex_08005468 = [
    {pos: [   -60,   -101,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [    61,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [   -60,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [  -101,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [   -60,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [  -101,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [  -101,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [   -60,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [  -101,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [   -60,     51,    -50], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x81, 0xff]},
    {pos: [   -60,   -101,     51], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   -60,   -101,    -50], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   -60,     51,    -50], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   -60,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0xa5, 0xff]},
    {pos: [   -60,     77,    -25], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
]

// 0x08005558
const cannon_base_seg8_vertex_08005558 = [
    {pos: [  -101,   -101,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
    {pos: [   -60,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
    {pos: [  -101,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
    {pos: [   -60,   -101,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x00, 0x7f, 0xff]},
    {pos: [   -60,   -101,     51], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   -60,     77,    -25], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   -60,     77,     26], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [   -60,     51,     51], flag: 0, tc: [     0,      0], color: [0x7f, 0x00, 0x00, 0xff]},
    {pos: [  -101,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [   -60,     51,     51], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [   -60,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [  -101,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x58, 0x5b, 0xff]},
    {pos: [  -101,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [   -60,     77,     26], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [   -60,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
    {pos: [  -101,     77,    -25], flag: 0, tc: [     0,      0], color: [0x00, 0x7f, 0x00, 0xff]},
]

const cannon_base_seg8_dl_08005658 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cannon_base_seg8_texture_080049B8),
    // Gbi.gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsSPLight(cannon_base_seg8_lights_08004988.l[0], 1),
    Gbi.gsSPLight(cannon_base_seg8_lights_08004988.a, 2),
    Gbi.gsSPVertex(cannon_base_seg8_vertex_080051B8, 12, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
    ...Gbi.gsSP2Triangles( 0,  2,  5, 0x0,  0,  5,  3, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9, 10, 0x0),
    ...Gbi.gsSP2Triangles( 6, 10, 11, 0x0,  6, 11,  7, 0x0),
    Gbi.gsSPEndDisplayList(),
]

const cannon_base_seg8_dl_080056D0 = [
    Gbi.gsSPLight(cannon_base_seg8_lights_080049A0.l[0], 1),
    Gbi.gsSPLight(cannon_base_seg8_lights_080049A0.a, 2),
    Gbi.gsSPVertex(cannon_base_seg8_vertex_08005278, 16, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    ...Gbi.gsSP2Triangles( 7, 10, 11, 0x0,  7, 12, 10, 0x0),
    ...Gbi.gsSP2Triangles( 7,  9, 12, 0x0, 13, 14, 15, 0x0),
    Gbi.gsSPVertex(cannon_base_seg8_vertex_08005378, 15, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    ...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    Gbi.gsSP1Triangle(11, 13, 14, 0x0),
    Gbi.gsSPVertex(cannon_base_seg8_vertex_08005468, 15, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    ...Gbi.gsSP2Triangles(10, 11, 12, 0x0,  3, 13,  4, 0x0),
    Gbi.gsSP1Triangle(10, 12, 14, 0x0),
    Gbi.gsSPVertex(cannon_base_seg8_vertex_08005558, 16, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    ...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    ...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    ...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    Gbi.gsSPEndDisplayList(),
]

export const cannon_base_seg8_dl_080057F8 = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB, Gbi.G_CC_MODULATERGB),
    Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    // Gbi.gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPDisplayList(cannon_base_seg8_dl_08005658),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE, Gbi.G_CC_SHADE),
    Gbi.gsSPDisplayList(cannon_base_seg8_dl_080056D0),
    Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
    Gbi.gsSPEndDisplayList(),
]
