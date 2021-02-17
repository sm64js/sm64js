import * as MathUtil from "../engine/math_util"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../include/config"
import * as Gbi from "../include/gbi"
import { GameInstance as Game } from "./Game"


export const create_dl_ortho_matrix = () => {
    const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

    create_dl_identity_matrix()

    MathUtil.guOrtho(matrix, 0.0, SCREEN_WIDTH, 0.0, SCREEN_HEIGHT, -10.0, 10.0, 1.0)

    // // Should produce G_RDPHALF_1 in Fast3D
    // gSPPerspNormalize(gDisplayListHead++, 0xFFFF);

    Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
}

// This is probably incorrect. I'm not sure what kind of identity matrix should be created here

export const create_dl_identity_matrix = () => {
    const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

    MathUtil.mtxf_identity(matrix)

    Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
    Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)

}
