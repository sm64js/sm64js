// Jrb

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700D198 - 0x0700D1DA
export const jrb_seg7_collision_pillar_base = [
    COL_INIT(),
    COL_VERTEX_INIT(0x5),
    COL_VERTEX(102, 0, -101),
    COL_VERTEX(0, 102, 0),
    COL_VERTEX(102, 0, 102),
    COL_VERTEX(-101, 0, -101),
    COL_VERTEX(-101, 0, 102),
    COL_TRI_INIT(SURFACE_DEFAULT, 4),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 4, 1),
    COL_TRI(2, 1, 4),
    COL_TRI(1, 0, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
