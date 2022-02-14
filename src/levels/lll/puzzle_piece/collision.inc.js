// Lll

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0701D560 - 0x0701D590
export const lll_seg7_collision_puzzle_piece = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(246, 0, -245),
    COL_VERTEX(-245, 0, -245),
    COL_VERTEX(-245, 0, 246),
    COL_VERTEX(246, 0, 246),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
