// Breakable Box

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_NO_CAM_COLLISION
} from "../../include/surface_terrains"

// Breakable Box

// 0x08012D70 - 0x08012DF4
export const breakable_box_seg8_collision_08012D70 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-100, 0, -100),
    COL_VERTEX(-100, 0, 100),
    COL_VERTEX(-100, 200, 100),
    COL_VERTEX(100, 0, 100),
    COL_VERTEX(100, 200, 100),
    COL_VERTEX(100, 0, -100),
    COL_VERTEX(100, 200, -100),
    COL_VERTEX(-100, 200, -100),

    COL_TRI_INIT(SURFACE_NO_CAM_COLLISION, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 4),
    COL_TRI(1, 4, 2),
    COL_TRI(5, 3, 1),
    COL_TRI(5, 1, 0),
    COL_TRI(6, 4, 3),
    COL_TRI(6, 3, 5),
    COL_TRI(7, 4, 6),
    COL_TRI(7, 2, 4),
    COL_TRI(0, 2, 7),
    COL_TRI(7, 6, 5),
    COL_TRI(7, 5, 0),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1619272096 - 2021-04-24 04:08:36 -1000
