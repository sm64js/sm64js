// Sl

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700EF6C - 0x0700EFC0
export const sl_seg7_collision_sliding_snow_mound = [
    COL_INIT(),
    COL_VERTEX_INIT(0x6),
    COL_VERTEX(102, 0, -255),
    COL_VERTEX(0, 102, 256),
    COL_VERTEX(102, 0, 256),
    COL_VERTEX(0, 102, -255),
    COL_VERTEX(-101, 0, 256),
    COL_VERTEX(-101, 0, -255),
    COL_TRI_INIT(SURFACE_DEFAULT, 6),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI(3, 4, 1),
    COL_TRI(3, 5, 4),
    COL_TRI(1, 4, 2),
    COL_TRI(0, 5, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
