import { castle_grounds_seg7_texture_07001000, castle_grounds_seg7_texture_07002000 } from "./../../../texture.inc"
import { outside_09005800 } from "../../../../../textures/outside"
import * as Gbi from "../../../../../include/gbi"

const castle_grounds_seg7_vertex_0700BBF0 = [
    {pos:[  2283,     65,   2072], flag:0, tc:[     0,      0], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[  2485,     65,   2072], flag:0, tc:[     0,    990], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[  2485,     65,   1849], flag:0, tc:[   990,    990], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[  2283,     65,   1849], flag:0, tc:[   990,      0], color:[0xff, 0xff, 0xff, 0xff]},
]

const castle_grounds_seg7_dl_0700BC30 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, outside_09005800),
    // Gbi.gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsSPVertex(castle_grounds_seg7_vertex_0700BBF0, 4, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    Gbi.gsSPEndDisplayList(),
]

export const castle_grounds_seg7_dl_0700BC68 = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    // Gbi.gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPDisplayList(castle_grounds_seg7_dl_0700BC30),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPEndDisplayList(),
]
