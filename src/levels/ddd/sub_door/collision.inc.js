// Ddd

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700FC48 - 0x0700FC78
export const ddd_seg7_collision_bowser_sub_door = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX(4941, -1015, -4197),
    COL_VERTEX(2893, -1015, -4197),
    COL_VERTEX(2893, -3063, -4197),
    COL_VERTEX(4941, -3063, -4197),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
