// Thi

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../../../include/surface_terrains"

// 0x0700E228 - 0x0700E258
export const thi_seg7_collision_top_trap = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(-101, 0, -101),
    COL_VERTEX(-101, 0, 102),
    COL_VERTEX(102, 0, -101),
    COL_VERTEX(102, 0, 102),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 2),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1621007118 - 2021-05-15 11:25:19 -0400
