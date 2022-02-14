// Lll

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0701D408 - 0x0701D450
export const lll_seg7_collision_slow_tilting_platform = [
    COL_INIT(),
    COL_VERTEX_INIT(0x6),
    COL_VERTEX(-383, 0, -1023),
    COL_VERTEX(5, 41, 1024),
    COL_VERTEX(5, 41, -1023),
    COL_VERTEX(-383, 0, 1024),
    COL_VERTEX(384, 0, -1023),
    COL_VERTEX(384, 0, 1024),
    COL_TRI_INIT(SURFACE_DEFAULT, 4),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI(1, 4, 2),
    COL_TRI(1, 5, 4),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
