
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
export const G_TEXTURE_ENABLE = 3
export const G_SHADING_SMOOTH = 4
export const G_CULL_FRONT = 5
export const G_CULL_BACK = 6
export const G_CULL_BOTH = 7
export const G_FOG = 8
export const G_LIGHTING = 9
export const G_TEXTURE_GEN = 10
export const G_LOD = 11
export const G_TEXTURE_GEN_LINEAR = 12
export const G_CLIPPING = 13

export const  G_ON	= 1
export const G_OFF = 0


/* flags to inhibit pushing of the display list (on branch) */
export const G_DL_PUSH	=	0x00
export const G_DL_NOPUSH	=	0x01


export const 	G_TEXTURE_IMAGE_FRAC =	2
export const 	G_TEXTURE_SCALE_FRAC =	16
export const 	G_SCALE_FRAC	=	8
export const 	G_ROTATE_FRAC	=	16


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
    G_IM_SIZ_16b: 0
}
export const G_IM_SIZ_SHIFT_TABLE = {
    G_IM_SIZ_16b: 0
}

export const G_IM_SIZ_LOAD_BLOCK_TABLE = {
    G_IM_SIZ_16b: G_IM_SIZ_16b
}
export const G_IM_SIZ_BYTES_TABLE = {
    G_IM_SIZ_16b: G_IM_SIZ_16b
}

export const G_IM_SIZ_LINE_BYTES_TABLE = {
    G_IM_SIZ_16b: G_IM_SIZ_16b
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
    rgb: [7, 7, 7, 4],
    alpha: [1, 15, 4, 7]
}

export const G_CC_SHADE = {
    rgb: [7, 7, 7, 4],
    alpha: [15, 15, 31, 4]
}

export const G_CC_DECALFADE = {
    rgb: [7, 7, 7, 5],
    alpha: [15, 15, 31, 1]
}

export const gDPSetEnvColor = (displaylist, r, g, b, a) => {
    displaylist.push({
        words: {
            w0: G_SETENVCOLOR,
            w1: { r, g, b, a }
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
            w1: mode
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
            w1: mode
        }
    }
}

export const gsSPSetGeometryMode = (mode) => {
    return {
        words: {
            w0: G_SETGEOMETRYMODE,
            w1: mode
        }
    }
}

export const gsDPSetCombineMode = (mode) => {
    return {
        words: {
            w0: G_SETCOMBINE,
            w1: mode
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
            w1: { format, size, width, imageData }
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
