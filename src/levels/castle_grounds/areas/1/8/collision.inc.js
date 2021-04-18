// Castle Grounds

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../../../include/surface_terrains"

// 0x07010E10 - 0x07010E40
export const castle_grounds_seg7_collision_cannon_grill = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(2283, 65, 2072),
    COL_VERTEX(2485, 65, 1849),
    COL_VERTEX(2283, 65, 1849),
    COL_VERTEX(2485, 65, 2072),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1618763470 - 2021-04-18 06:31:12 -1000
