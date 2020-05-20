
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


/// G_MTX parameter flags
export const G_MTX_MODELVIEW     = 0	/* matrix types */
export const G_MTX_PROJECTION    = 1
export const G_MTX_MUL           = 0	/* concat or load */
export const G_MTX_LOAD          = 2
export const G_MTX_NOPUSH        = 0	/* push or not */
export const G_MTX_PUSH          = 4


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

export const gSPDisplayList = (displaylist, childDisplayList) => {
    displaylist.push({
        words: {
            w0: G_DL,
            w1: childDisplayList
        }
    })
}
