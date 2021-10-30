import * as Gbi from "../../include/gbi"
// Butterfly

// 0x03004348
const butterfly_seg3_vertex_03004348 = [
    {pos:[     0,      0,    -78], flag:0, tc:[  2004,    -48], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    79,      0,     39], flag:0, tc:[   -60,   4056], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    79,      0,    -78], flag:0, tc:[   -56,    -48], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[     0,      0,    -78], flag:0, tc:[  2004,    -48], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[     0,      0,     39], flag:0, tc:[  2004,   4056], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    79,      0,     39], flag:0, tc:[   -60,   4056], color:[0xff, 0xff, 0xff, 0xff]},
]

// 0x030043A8
export const butterfly_seg3_texture_030043A8 = []

// 0x030053A8
const butterfly_seg3_vertex_030053A8 = [
    {pos:[    79,      0,    -78], flag:0, tc:[   -56,      0], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[     0,      0,     39], flag:0, tc:[  1972,   4024], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[     0,      0,    -78], flag:0, tc:[  2000,      0], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    79,      0,    -78], flag:0, tc:[   -56,      0], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    79,      0,     39], flag:0, tc:[   -80,   4032], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[     0,      0,     39], flag:0, tc:[  1972,   4024], color:[0xff, 0xff, 0xff, 0xff]},
]

export const butterfly_seg3_dl_03005408 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
    Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    ...Gbi.gsDPLoadTextureBlock(butterfly_seg3_texture_030043A8, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 32, 64, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 5, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
    Gbi.gsSPVertex(butterfly_seg3_vertex_03004348, 6, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    Gbi.gsSPTexture(0x8000, 0x8000, 1, Gbi.G_TX_RENDERTILE + 1, Gbi.G_OFF),
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
    Gbi.gsSPEndDisplayList()
]

export const butterfly_seg3_dl_030054A0 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
    Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    ...Gbi.gsDPLoadTextureBlock(butterfly_seg3_texture_030043A8, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 32, 64, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 5, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
    Gbi.gsSPVertex(butterfly_seg3_vertex_030053A8, 6, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    Gbi.gsSPTexture(0x8000, 0x8000, 1, Gbi.G_TX_RENDERTILE + 1, Gbi.G_OFF),
    // gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
    Gbi.gsSPEndDisplayList()
]
