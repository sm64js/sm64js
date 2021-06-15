// 0x0700EE30 - 0x0700EE48

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { grass_09007000 } from "../../../textures/grass"

const wf_seg7_lights_0700EE30 = gdSPDefLights1(
    0x66, 0x66, 0x66,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700EE48 - 0x0700EF48
const wf_seg7_vertex_0700EE48 = [
    [[  -214,    102,   -204], 0, [     0,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -214,      0,   -204], 0, [     0,    478], [0x81, 0x00, 0x00, 0xff]],
    [[  -214,      0,    205], 0, [  2012,    478], [0x81, 0x00, 0x00, 0xff]],
    [[  -214,    102,    205], 0, [  2012,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -214,    102,    205], 0, [     0,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   215,      0,    205], 0, [  2012,    478], [0x00, 0x00, 0x7f, 0xff]],
    [[   215,    102,    205], 0, [  2012,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -214,      0,    205], 0, [     0,    478], [0x00, 0x00, 0x7f, 0xff]],
    [[   215,    102,    205], 0, [     0,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   215,      0,   -204], 0, [  2012,    478], [0x7f, 0x00, 0x00, 0xff]],
    [[   215,    102,   -204], 0, [  2012,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   215,      0,    205], 0, [     0,    478], [0x7f, 0x00, 0x00, 0xff]],
    [[   215,    102,   -204], 0, [   990,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[  -214,    102,    205], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   215,    102,    205], 0, [   990,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[  -214,    102,   -204], 0, [     0,      0], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x0700EF48 - 0x0700EF88
const wf_seg7_vertex_0700EF48 = [
    [[   215,      0,    205], 0, [   990,    990], [0x00, 0x81, 0x00, 0xff]],
    [[  -214,      0,    205], 0, [     0,    990], [0x00, 0x81, 0x00, 0xff]],
    [[  -214,      0,   -204], 0, [     0,      0], [0x00, 0x81, 0x00, 0xff]],
    [[   215,      0,   -204], 0, [   990,      0], [0x00, 0x81, 0x00, 0xff]],
];

// 0x0700EF88 - 0x0700F018
const wf_seg7_dl_0700EF88 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, grass_09007000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(wf_seg7_lights_0700EE30.l, 1),
    gsSPLight(wf_seg7_lights_0700EE30.a, 2),
    gsSPVertex(wf_seg7_vertex_0700EE48, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
    gsSPVertex(wf_seg7_vertex_0700EF48, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700F018 - 0x0700F088
export const wf_seg7_dl_0700F018 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(wf_seg7_dl_0700EF88),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
