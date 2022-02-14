// Bitfs

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07015124 - 0x070151B4
export const bitfs_seg7_collision_07015124 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-204, 154, -204),
    COL_VERTEX(205, 154, -204),
    COL_VERTEX(184, 0, -183),
    COL_VERTEX(-183, 0, -183),
    COL_VERTEX(184, 0, 184),
    COL_VERTEX(-183, 0, 184),
    COL_VERTEX(205, 154, 205),
    COL_VERTEX(-204, 154, 205),
    COL_TRI_INIT(SURFACE_DEFAULT, 14),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(3, 4, 5),
    COL_TRI(3, 2, 4),
    COL_TRI(2, 6, 4),
    COL_TRI(6, 5, 4),
    COL_TRI(2, 1, 6),
    COL_TRI(1, 3, 2),
    COL_TRI(6, 7, 5),
    COL_TRI(5, 7, 0),
    COL_TRI(5, 0, 3),
    COL_TRI(7, 6, 1),
    COL_TRI(7, 1, 0),
    COL_TRI(1, 0, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
