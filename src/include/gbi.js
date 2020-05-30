
/// graphics opcodes
export const G_MTX = 1
export const G_POPMTX = 2
export const G_MOVEMEM = 3
export const G_MOVEWORD = 4
export const G_TEXTURE = 5
export const G_VTX = 6
export const G_DL = 7
export const G_ENDDL = 8
export const G_SETGEOMETRYMODE = 9
export const G_CLEARGEOMETRYMODE = 10
export const G_TRI1 = 11
export const G_SETOTHERMODE_L = 12
export const G_SETOTHERMODE_H = 13
export const G_SETTIMG = 14
export const G_LOADBLOCK = 15
export const G_SETTILE = 16
export const G_SETTILESIZE = 17
export const G_LOADTLUT = 18
export const G_SETENVCOLOR = 19
export const G_SETPRIMCOLOR = 20
export const G_SETFOGCOLOR = 21
export const G_SETFILLCOLOR = 22
export const G_SETCOMBINE = 23
export const G_TEXRECTFLIP = 24
export const G_FILLRECT = 25
export const G_SETSCISSOR = 26
export const G_SETZIMG = 27
export const G_SETCIMG = 28
export const G_RDPLOADSYNC = 29

export const G_ZBUFFER = 1
export const G_SHADE = 2
export const G_TEXTURE_ENABLE = 4
export const G_SHADING_SMOOTH = 8
/*export const G_CULL_FRONT = 16
export const G_CULL_BACK = 32*/
export const G_FOG = 16
export const G_LIGHTING = 32
export const G_TEXTURE_GEN = 64
//export const G_LOD = 11
export const G_TEXTURE_GEN_LINEAR = 128
export const G_CLIPPING = 256
export const G_CULL_BOTH = 512

export const  G_ON	= 1
export const G_OFF = 0


/* flags to inhibit pushing of the display list (on branch) */
export const G_DL_PUSH	=	0x00
export const G_DL_NOPUSH	=	0x01


export const 	G_TEXTURE_IMAGE_FRAC =	2
export const 	G_TEXTURE_SCALE_FRAC =	16
export const 	G_SCALE_FRAC	=	8
export const G_ROTATE_FRAC = 16



/*
 * G_SETOTHERMODE_L sft: shift count
 */
export const G_MDSFT_ALPHACOMPARE	=	0
export const G_MDSFT_ZSRCSEL		=	2
export const G_MDSFT_RENDERMODE		=   3
export const G_MDSFT_BLENDER		=	16

/*
 * G_SETOTHERMODE_H sft: shift count
 */
export const G_MDSFT_BLENDMASK		=0	/* unsupported */
export const G_MDSFT_ALPHADITHER	=	4
export const G_MDSFT_RGBDITHER		=6

export const G_MDSFT_COMBKEY		=	8
export const G_MDSFT_TEXTCONV		= 9
export const G_MDSFT_TEXTFILT		= 12
export const G_MDSFT_TEXTLUT		=	14
export const G_MDSFT_TEXTLOD		=	16
export const G_MDSFT_TEXTDETAIL		=17
export const G_MDSFT_TEXTPERSP		=19
export const G_MDSFT_CYCLETYPE		=20
export const G_MDSFT_COLORDITHER	=	22	/* unsupported in HW 2.0 */
export const G_MDSFT_PIPELINE		=23


/* G_SETOTHERMODE_H gPipelineMode */
export const G_PM_1PRIMITIVE =  1 << G_MDSFT_PIPELINE
export const G_PM_NPRIMITIVE =  0 << G_MDSFT_PIPELINE

/* G_SETOTHERMODE_H gSetCycleType */
export const G_CYC_1CYCLE =  0 << G_MDSFT_CYCLETYPE
export const G_CYC_2CYCLE =  1 << G_MDSFT_CYCLETYPE
export const G_CYC_COPY =  2 << G_MDSFT_CYCLETYPE
export const G_CYC_FILL = 3 << G_MDSFT_CYCLETYPE

/* G_SETOTHERMODE_H gSetTexturePersp */
export const G_TP_NONE  =  (0 << G_MDSFT_TEXTPERSP)
export const G_TP_PERSP  =  (1 << G_MDSFT_TEXTPERSP)

/* G_SETOTHERMODE_H gSetTextureDetail */
export const G_TD_CLAMP  =  (0 << G_MDSFT_TEXTDETAIL)
export const G_TD_SHARPEN  =  (1 << G_MDSFT_TEXTDETAIL)
export const G_TD_DETAIL  =  (2 << G_MDSFT_TEXTDETAIL)

/* G_SETOTHERMODE_H gSetTextureLOD */
export const G_TL_TILE  =  (0 << G_MDSFT_TEXTLOD)
export const G_TL_LOD  =  (1 << G_MDSFT_TEXTLOD)

/* G_SETOTHERMODE_H gSetTextureLUT */
export const G_TT_NONE  =  (0 << G_MDSFT_TEXTLUT)
export const G_TT_RGBA16  =  (2 << G_MDSFT_TEXTLUT)
export const G_TT_IA16  =  (3 << G_MDSFT_TEXTLUT)

/* G_SETOTHERMODE_H gSetTextureFilter */
export const G_TF_POINT  =  (0 << G_MDSFT_TEXTFILT)
export const G_TF_AVERAGE  =  (3 << G_MDSFT_TEXTFILT)
export const G_TF_BILERP  =  (2 << G_MDSFT_TEXTFILT)

/* G_SETOTHERMODE_H gSetTextureConvert */
export const G_TC_CONV  =  (0 << G_MDSFT_TEXTCONV)
export const G_TC_FILTCONV  =  (5 << G_MDSFT_TEXTCONV)
export const G_TC_FILT  =  (6 << G_MDSFT_TEXTCONV)

/* G_SETOTHERMODE_H gSetCombineKey */
export const G_CK_NONE  =  (0 << G_MDSFT_COMBKEY)
export const G_CK_KEY  =  (1 << G_MDSFT_COMBKEY)

/* G_SETOTHERMODE_H gSetColorDither */
export const	G_CD_MAGICSQ  =  (0 << G_MDSFT_RGBDITHER)
export const	G_CD_BAYER  =  (1 << G_MDSFT_RGBDITHER)
export const G_CD_NOISE = (2 << G_MDSFT_RGBDITHER)

/* G_SETOTHERMODE_H gSetAlphaDither */
export const G_AD_PATTERN = (0 << G_MDSFT_ALPHADITHER)
export const G_AD_NOTPATTERN = (1 << G_MDSFT_ALPHADITHER)
export const G_AD_NOISE = (2 << G_MDSFT_ALPHADITHER)
export const G_AD_DISABLE = (3 << G_MDSFT_ALPHADITHER)

/* G_SETOTHERMODE_L gSetAlphaCompare */
export const G_AC_NONE = (0 << G_MDSFT_ALPHACOMPARE)
export const G_AC_THRESHOLD = (1 << G_MDSFT_ALPHACOMPARE)
export const G_AC_DITHER = (3 << G_MDSFT_ALPHACOMPARE)

/* G_SETOTHERMODE_L gSetDepthSource */
export const G_ZS_PIXEL = (0 << G_MDSFT_ZSRCSEL)
export const G_ZS_PRIM = (1 << G_MDSFT_ZSRCSEL)

/* G_SETOTHERMODE_L gSetRenderMode */
export const AA_EN	=	0x8
export const Z_CMP	=	0x10
export const Z_UPD	=	0x20
export const IM_RD	=	0x40
export const CLR_ON_CVG	= 0x80
export const CVG_DST_CLAMP =	0
export const CVG_DST_WRAP =	0x100
export const CVG_DST_FULL =	0x200
export const CVG_DST_SAVE	= 0x300
export const ZMODE_OPA	= 0
export const ZMODE_INTER =	0x400
export const ZMODE_XLU	= 0x800
export const ZMODE_DEC	= 0xc00
export const CVG_X_ALPHA	= 0x1000
export const ALPHA_CVG_SEL = 	0x2000
export const FORCE_BL	= 0x4000
export const TEX_EDGE	= 0x0000 /* used to be 0x8000 */

export const G_BL_CLR_IN	=  0
export const G_BL_CLR_MEM	=  1
export const G_BL_CLR_BL	=  2
export const G_BL_CLR_FOG	=  3
export const G_BL_1MA	=  0
export const G_BL_A_MEM	=  1
export const G_BL_A_IN	=  0
export const G_BL_A_FOG	=  1
export const G_BL_A_SHADE	=  2
export const G_BL_1		=  2
export const G_BL_0		=  3

export const CC_0 = 0
export const CC_TEXEL0 = 1
export const CC_TEXEL1 = 2
export const CC_PRIM = 3
export const CC_SHADE = 4
export const CC_ENV = 5
export const CC_TEXEL0A = 6
export const CC_LOD = 7

export const SHADER_0 = 0
export const SHADER_INPUT_1 = 1
export const SHADER_INPUT_2 = 2
export const SHADER_INPUT_3 = 3
export const SHADER_INPUT_4 = 4
export const SHADER_TEXEL0 = 5
export const SHADER_TEXEL0A = 6
export const SHADER_TEXEL1 = 7

export const SHADER_OPT_ALPHA = (1 << 24)
export const SHADER_OPT_FOG = (1 << 25)
export const SHADER_OPT_TEXTURE_EDGE = (1 << 26)

/*
 * G_SETCOMBINE: color combine modes
 */
/* Color combiner constants: */
export const G_CCMUX_COMBINED        = 0
export const G_CCMUX_TEXEL0          = 1
export const G_CCMUX_TEXEL1          = 2
export const G_CCMUX_PRIMITIVE       = 3
export const G_CCMUX_SHADE           = 4
export const G_CCMUX_ENVIRONMENT     = 5
export const G_CCMUX_CENTER         =  6
export const G_CCMUX_SCALE          =  6
export const G_CCMUX_COMBINED_ALPHA =  7
export const G_CCMUX_TEXEL0_ALPHA   =  8
export const G_CCMUX_TEXEL1_ALPHA   =  9
export const G_CCMUX_PRIMITIVE_ALPHA = 10
export const G_CCMUX_SHADE_ALPHA     = 11
export const G_CCMUX_ENV_ALPHA       = 12
export const G_CCMUX_LOD_FRACTION    = 13
export const G_CCMUX_PRIM_LOD_FRAC   = 14
export const G_CCMUX_NOISE           = 7
export const G_CCMUX_K4              = 7
export const G_CCMUX_K5              = 15
export const G_CCMUX_1               = 6
export const G_CCMUX_0               = 31

/* Alpha combiner constants: */
export const G_ACMUX_COMBINED	    = 0
export const G_ACMUX_TEXEL0		   =  1
export const G_ACMUX_TEXEL1		    = 2
export const G_ACMUX_PRIMITIVE	    = 3
export const G_ACMUX_SHADE		    = 4
export const G_ACMUX_ENVIRONMENT	=     5
export const G_ACMUX_LOD_FRACTION	= 0
export const G_ACMUX_PRIM_LOD_FRAC	= 6
export const G_ACMUX_1		       =  6
export const G_ACMUX_0		       =  7


/*
 * G_SETIMG fmt: set image formats
 */
export const G_IM_FMT_RGBA = 0
export const G_IM_FMT_YUV	=  1
export const G_IM_FMT_CI	= 2
export const G_IM_FMT_IA =	3
export const G_IM_FMT_I	=  4

/*
 * G_SETIMG siz: set image pixel size
 */
export const G_IM_SIZ_4b	= 0
export const G_IM_SIZ_8b	= 1
export const G_IM_SIZ_16b	= 2
export const G_IM_SIZ_32b	= 3
export const G_IM_SIZ_DD = 5

export const G_IM_SIZ_INCR_TABLE = {
    2: 0
}
export const G_IM_SIZ_SHIFT_TABLE = {
    2: 0
}

export const G_IM_SIZ_LOAD_BLOCK_TABLE = {
    2: G_IM_SIZ_16b
}
export const G_IM_SIZ_BYTES_TABLE = {
    2: G_IM_SIZ_16b
}

export const G_IM_SIZ_LINE_BYTES_TABLE = {
    2: G_IM_SIZ_16b
}


export const G_TX_LOADTILE	= 7
export const G_TX_RENDERTILE	= 0

export const G_TX_NOMIRROR	= 0
export const G_TX_WRAP	= 0
export const G_TX_MIRROR	= 0x1
export const G_TX_CLAMP	= 0x2
export const G_TX_NOMASK	= 0
export const G_TX_NOLOD	= 0


/// G_MTX parameter flags
export const G_MTX_MODELVIEW     = 0	/* matrix types */
export const G_MTX_PROJECTION    = 1
export const G_MTX_MUL           = 0	/* concat or load */
export const G_MTX_LOAD          = 2
export const G_MTX_NOPUSH        = 0	/* push or not */
export const G_MTX_PUSH = 4

export const G_CC_MODULATERGB = {
    alpha: [7, 7, 7, 4],
    rgb: [1, 15, 4, 7]
}

export const G_CC_SHADE = {
    alpha: [7, 7, 7, 4],
    rgb: [15, 15, 31, 4]
}

export const G_CC_DECALFADE = {
    alpha: [7, 7, 7, 5],
    rgb: [15, 15, 31, 1]
}


let textureImageId = 0

export const gDPSetEnvColor = (displaylist, r, g, b, a) => {
    displaylist.push({
        words: {
            w0: G_SETENVCOLOR,
            w1: { r, g, b, a }
        }
    })
}

export const gDPSetFillColor = (displaylist, color) => {
    displaylist.push({
        words: {
            w0: G_SETFILLCOLOR,
            w1: { color }
        }
    })
}

export const gDPFillRectangle = (displaylist, ulx, uly, lrx, lry) => {
    displaylist.push({
        words: {
            w0: G_FILLRECT,
            w1: { ulx, uly, lrx, lry }
        }
    })
}

export const gSPMatrix = (displaylist, matrix, parameters) => {
    displaylist.push({
        words: {
            w0: G_MTX,
            w1: { matrix, parameters }
        }
    })
}

export const gSPSetGeometryMode = (displaylist, mode) => {
    displaylist.push({
        words: {
            w0: G_SETGEOMETRYMODE,
            w1: { mode }
        }
    })
}

export const gSPClearGeometryMode = (displaylist, mode) => {
    displaylist.push({
        words: {
            w0: G_CLEARGEOMETRYMODE,
            w1: { mode }
        }
    })
}

export const gSPEndDisplayList = (displaylist) => {
    displaylist.push({
        words: {
            w0: G_ENDDL
        }
    })
}

export const gSPBranchList = (displaylist, childDisplayList) => {
    displaylist.push({
        words: {
            w0: G_DL,
            w1: { childDisplayList, branch: G_DL_NOPUSH }
        }
    })
}

export const gSPDisplayList = (displaylist, childDisplayList) => {
    displaylist.push({
        words: {
            w0: G_DL,
            w1: { childDisplayList, branch: G_DL_PUSH }
        }
    })
}

export const gsSPDisplayList = (childDisplayList) => {
    return {
        words: {
            w0: G_DL,
            w1: { childDisplayList, branch: G_DL_PUSH }
        }
    }
}

export const gsSPBranchList = (childDisplayList) => {
    return {
        words: {
            w0: G_DL,
            w1: { childDisplayList, branch: G_DL_NOPUSH }
        }
    }
}


export const gsSPEndDisplayList = () => {
    return {
        words: {
            w0: G_ENDDL
        }
    }
}

export const gsSPClearGeometryMode = (mode) => {
    return {
        words: {
            w0: G_CLEARGEOMETRYMODE,
            w1: { mode }
        }
    }
}

export const gsSPSetGeometryMode = (mode) => {
    return {
        words: {
            w0: G_SETGEOMETRYMODE,
            w1: { mode }
        }
    }
}

export const gsDPSetCombineMode = (mode) => {
    return {
        words: {
            w0: G_SETCOMBINE,
            w1: { mode }
        }
    }
}

export const gsSPMatrix = (matrix, parameters) => {
    return {
        words: {
            w0: G_MTX,
            w1: { matrix, parameters }
        }
    }
}

export const gsDPSetEnvColor = (r, g, b, a) => {
    return {
        words: {
            w0: G_SETENVCOLOR,
            w1: { r, g, b, a }
        }
    }
}

export const gsDPSetTile = (fmt, siz, line, tmem, tile, palette, cmt, maskt, shiftt, cms, masks, shifts) => {
  return {
    words: {
      w0: G_SETTILE,
      w1: { fmt, siz, line, tmem, tile, palette, cmt, cms }
    }
  }
}

export const gsSPTexture = (s, t, level, tile, on) => {
  return {
    words: {
      w0: G_TEXTURE,
      w1: { s, t }
    }
  }
}

export const gsDPSetTileSize = (t, uls, ult, lrs, lrt) => {
  return {
    words: {
      w0: G_SETTILESIZE,
      w1: { t, uls, ult, lrs, lrt }
    }
  }
}

export const gsDPSetTextureImage = (format, size, width, imageData) => {
    return {
        words: {
            w0: G_SETTIMG,
            w1: { format, size, width, imageData, id: textureImageId++ }
        }
    }
}

export const gsDPLoadSync = () => {
    return {
        words: {
            w0: G_RDPLOADSYNC
        }
    }
}

export const gsDPLoadBlock = (tile, uls, ult, lrs) => { ///dxt skipped
    return {
        words: {
            w0: G_LOADBLOCK,
            w1: { tile, uls, ult, lrs }
        }
    }
}

export const gsSPVertex = (vertices, num_vertices, dest_index) => {
    return {
        words: {
            w0: G_VTX,
            w1: { vertices, dest_index }
        }
    }
}

export const gsSP1Triangle = (v0, v1, v2, flag) => {
    return {
        words: {
            w0: G_TRI1,
            w1: { v0, v1, v2, flag }
        }
    }
}

export const gsSP2Triangles = (v00, v01, v02, flag0, v10, v11, v12, flag1) => {
    return [{
        words: {
            w0: G_TRI1,
            w1: { v0: v00, v1: v01, v2: v02, flag: flag0 }
        }
    }, {
        words: {
            w0: G_TRI1,
            w1: { v0: v10, v1: v11, v2: v12, flag: flag1 }
        }
    }]
}

export const gsDPLoadTextureBlock = (timg, fmt, siz, width, height, pal, cms, cmt, masks, maskt, shifts, shiftt) => {
    return [
        gsDPSetTextureImage(fmt, siz, 1, timg),
        gsDPSetTile(fmt, G_IM_SIZ_LOAD_BLOCK_TABLE[siz], 0, 0, G_TX_LOADTILE, 0, cmt, maskt, shiftt, cms, masks, shifts),
        gsDPLoadBlock(G_TX_LOADTILE, 0, 0, (((width) * (height) + G_IM_SIZ_INCR_TABLE[siz]) >> G_IM_SIZ_SHIFT_TABLE[siz]) - 1),
        gsDPSetTile(fmt, siz,
            ((((width) * G_IM_SIZ_LINE_BYTES_TABLE[siz]) + 7) >> 3),
            0, G_TX_RENDERTILE, pal, cmt, maskt, shiftt, cms, masks, shifts),
        gsDPSetTileSize(G_TX_RENDERTILE, 0, 0, ((width) - 1) << G_TEXTURE_IMAGE_FRAC, ((height) - 1) << G_TEXTURE_IMAGE_FRAC)
    ]
}
