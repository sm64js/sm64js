// Bitfs

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x070157E0 - 0x07015858
export const bitfs_seg7_collision_070157E0 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(307, 0, -306),
    COL_VERTEX(-306, 205, -306),
    COL_VERTEX(307, 205, -306),
    COL_VERTEX(-306, 0, -306),
    COL_VERTEX(307, 205, 307),
    COL_VERTEX(307, 0, 307),
    COL_VERTEX(-306, 205, 307),
    COL_VERTEX(-306, 0, 307),
    COL_TRI_INIT(SURFACE_DEFAULT, 10),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI(0, 4, 5),
    COL_TRI(0, 2, 4),
    COL_TRI(2, 1, 6),
    COL_TRI(7, 6, 1),
    COL_TRI(7, 1, 3),
    COL_TRI(2, 6, 4),
    COL_TRI(4, 7, 5),
    COL_TRI(4, 6, 7),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
