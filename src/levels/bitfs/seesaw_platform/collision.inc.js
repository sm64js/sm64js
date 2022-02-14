// Bitfs

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07015928 - 0x070159AC
export const bitfs_seg7_collision_07015928 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-511, 179, 307),
    COL_VERTEX(512, 179, 307),
    COL_VERTEX(512, 179, -306),
    COL_VERTEX(512, 26, -306),
    COL_VERTEX(512, 26, 307),
    COL_VERTEX(-511, 26, 307),
    COL_VERTEX(-511, 26, -306),
    COL_VERTEX(-511, 179, -306),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 2),
    COL_TRI(1, 4, 3),
    COL_TRI(5, 1, 0),
    COL_TRI(5, 4, 1),
    COL_TRI(4, 6, 3),
    COL_TRI(7, 2, 3),
    COL_TRI(0, 2, 7),
    COL_TRI(4, 5, 6),
    COL_TRI(0, 6, 5),
    COL_TRI(0, 7, 6),
    COL_TRI(7, 3, 6),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
