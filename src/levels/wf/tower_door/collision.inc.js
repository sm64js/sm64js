// Wf

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700FD00 - 0x0700FD30
export const wf_seg7_collision_tower_door = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(0, 0, -107),
    COL_VERTEX(0, 0, 108),
    COL_VERTEX(0, 205, 108),
    COL_VERTEX(0, 205, -107),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
