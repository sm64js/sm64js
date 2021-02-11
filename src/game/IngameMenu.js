import * as MathUtil from "../engine/math_util"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../include/config"
import * as Gbi from "../include/gbi"
import { GameInstance as Game } from "./Game"

export const create_dl_ortho_matrix = () => {
    // if (matrix == NULL) {
    //     return;
    // }

    var matrix = create_dl_identity_matrix();
    MathUtil.guOrtho(matrix, 0.0, SCREEN_WIDTH, 0.0, SCREEN_HEIGHT, -10.0, 10.0, 1.0);

    // // Should produce G_RDPHALF_1 in Fast3D
    // gSPPerspNormalize(gDisplayListHead++, 0xFFFF);

    Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
}

export const create_dl_identity_matrix = () => {
    var matrix = new Array(4).fill(0).map(() => new Array(4).fill(0));

    // if (matrix == NULL) {
    //     return;
    // }

    var GBI_FLOATS = true;
    if (GBI_FLOATS) {
        matrix[0][0] = 0x00010000;    matrix[1][0] = 0x00000000;    matrix[2][0] = 0x00000000;    matrix[3][0] = 0x00000000;
        matrix[0][1] = 0x00000000;    matrix[1][1] = 0x00010000;    matrix[2][1] = 0x00000000;    matrix[3][1] = 0x00000000;
        matrix[0][2] = 0x00000001;    matrix[1][2] = 0x00000000;    matrix[2][2] = 0x00000000;    matrix[3][2] = 0x00000000;
        matrix[0][3] = 0x00000000;    matrix[1][3] = 0x00000001;    matrix[2][3] = 0x00000000;    matrix[3][3] = 0x00000000;
    } else {
        // guMtxIdent(matrix);
    }

    Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH);
    Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH);

    return matrix;
}
