// Cannon Lid

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../include/surface_terrains"

// Cannon Lid

// 0x08004950 - 0x08004980
export const cannon_lid_seg8_collision_08004950 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(112, 0, -111),
    COL_VERTEX(-111, 0, -111),
    COL_VERTEX(-111, 0, 112),
    COL_VERTEX(112, 0, 112),

    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1619274064 - 2021-04-24 04:24:36 -1000
