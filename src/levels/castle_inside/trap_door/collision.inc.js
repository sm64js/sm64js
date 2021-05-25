// Castle Inside

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07078DE4 - 0x07078E14
export const inside_castle_seg7_collision_floor_trap = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(358, 0, -306),
    COL_VERTEX(0, 0, -306),
    COL_VERTEX(0, 0, 307),
    COL_VERTEX(358, 0, 307),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1621726940 - 2021-05-22 16:42:23 -0700
