// Wf

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700FC0C - 0x0700FC42
export const wf_seg7_collision_breakable_wall = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(0, 384, 128),
    COL_VERTEX(184, 384, -378),
    COL_VERTEX(0, 384, -378),
    COL_VERTEX(0, -383, 128),
    COL_TRI_INIT(SURFACE_DEFAULT, 3),
    COL_TRI(3, 1, 0),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 0, 2),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
