// 0x0700F2E8

import {
    gsDPPipeSync, gsDPSetTexturePersp, gsDPSetCombineMode, gsDPSetRenderMode,
    gsDPSetTextureFilter, gsDPSetTile, gsDPTileSync, gsDPSetTileSize, gsDPSetTextureImage,
    gsDPLoadSync, gsDPLoadBlock, gsSPTextureRectangle, gsDPSetEnvColor, gsSPTexture,
    gsSPEndDisplayList,
    G_TP_NONE, G_CC_FADEA, G_RM_AA_XLU_SURF, G_RM_AA_XLU_SURF2, G_TF_POINT, G_IM_FMT_IA,
    G_IM_SIZ_8b, G_TX_LOADTILE, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD,
    G_TX_RENDERTILE, G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, CALC_DXT, G_IM_SIZ_16b_BYTES, G_TP_PERSP,
    G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2, G_CC_SHADE, G_OFF, G_TF_BILERP
} from "../../../../../include/gbi"
export const castle_grounds_seg7_us_texture_0700EAE8 = []  // "levels/castle_grounds/5.ia8.inc.c"

export const castle_grounds_seg7_us_dl_0700F2E8 = [
    gsDPPipeSync(),
    gsDPSetTexturePersp(G_TP_NONE),
    gsDPSetCombineMode(G_CC_FADEA, G_CC_FADEA),
    gsDPSetRenderMode(G_RM_AA_XLU_SURF, G_RM_AA_XLU_SURF2),
    gsDPSetTextureFilter(G_TF_POINT),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_8b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_8b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_8b, 1, castle_grounds_seg7_us_texture_0700EAE8),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPTextureRectangle(116 << 2, 166 << 2, (116 + 64) << 2, (166 + 32) << 2, G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10),
    gsDPPipeSync(),
    gsDPSetTexturePersp(G_TP_PERSP),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetTextureFilter(G_TF_BILERP),
    gsSPEndDisplayList(),
].flat();

// 1618722039 - 2021-04-17 19:00:51 -1000
