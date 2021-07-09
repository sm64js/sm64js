// Wdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07018528 - 0x070185AC
export const wdw_seg7_collision_07018528 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(193, 128, -190),
    COL_VERTEX(-190, 128, -190),
    COL_VERTEX(-190, 128, 193),
    COL_VERTEX(193, 128, 193),
    COL_VERTEX(193, 0, -190),
    COL_VERTEX(-190, 0, -190),
    COL_VERTEX(193, 0, 193),
    COL_VERTEX(-190, 0, 193),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(0, 4, 5),
    COL_TRI(0, 5, 1),
    COL_TRI(3, 4, 0),
    COL_TRI(6, 5, 4),
    COL_TRI(3, 6, 4),
    COL_TRI(6, 7, 5),
    COL_TRI(1, 5, 7),
    COL_TRI(1, 7, 2),
    COL_TRI(2, 6, 3),
    COL_TRI(2, 7, 6),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-15 11:42:13 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
