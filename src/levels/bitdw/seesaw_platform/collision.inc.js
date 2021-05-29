// Bitdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700F70C - 0x0700F790
export const bitdw_seg7_collision_0700F70C = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(307, 0, -767),
    COL_VERTEX(307, 102, -818),
    COL_VERTEX(307, 102, 819),
    COL_VERTEX(-306, 0, -767),
    COL_VERTEX(-306, 102, -818),
    COL_VERTEX(-306, 102, 819),
    COL_VERTEX(-306, 0, 768),
    COL_VERTEX(307, 0, 768),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 1, 0),
    COL_TRI(3, 4, 1),
    COL_TRI(1, 4, 5),
    COL_TRI(1, 5, 2),
    COL_TRI(6, 4, 3),
    COL_TRI(6, 5, 4),
    COL_TRI(7, 2, 5),
    COL_TRI(7, 5, 6),
    COL_TRI(0, 2, 7),
    COL_TRI(3, 0, 7),
    COL_TRI(3, 7, 6),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
