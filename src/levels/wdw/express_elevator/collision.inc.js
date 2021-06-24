// Wdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x070185AC - 0x07018630
export const wdw_seg7_collision_express_elevator_platform = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(512, 0, -64),
    COL_VERTEX(-357, 0, -64),
    COL_VERTEX(-357, 51, -64),
    COL_VERTEX(512, 51, -64),
    COL_VERTEX(512, 0, 384),
    COL_VERTEX(-357, 0, 384),
    COL_VERTEX(512, 51, 384),
    COL_VERTEX(-357, 51, 384),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(0, 4, 5),
    COL_TRI(0, 5, 1),
    COL_TRI(6, 4, 0),
    COL_TRI(6, 0, 3),
    COL_TRI(5, 4, 6),
    COL_TRI(5, 6, 7),
    COL_TRI(1, 5, 7),
    COL_TRI(1, 7, 2),
    COL_TRI(2, 7, 6),
    COL_TRI(2, 6, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-15 11:42:13 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
