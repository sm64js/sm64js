import * as Gbi from "../include/gbi"

const canvas = document.querySelector('#gameCanvas')

export const matrix_identity = [
    [1.0, 0.0, 0.0, 0.0],
    [0.0, 1.0, 0.0, 0.0],
    [0.0, 0.0, 1.0, 0.0],
    [0.0, 0.0, 0.0, 1.0]
]

export const matrix_fullscreen = [
    [2.0 / canvas.width, 0.0, 0.0, 0.0],
    [0.0, 2.0 / canvas.height, 0.0, 0.0],
    [0.0, 0.0, -1.0, 0.0],
    [-1.0, -1.0, -1.0, 1.0]
]

export const dl_proj_mtx_fullscreen = [
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPMatrix(matrix_fullscreen, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPEndDisplayList()
]
