// Ssl

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_HARD_SLIPPERY
} from "../../../include/surface_terrains"

// 0x070125F4 - 0x07012642
export const ssl_seg7_collision_pyramid_top = [
    COL_INIT(),
    COL_VERTEX_INIT(0x5),
    COL_VERTEX(-511, -255, 512),
    COL_VERTEX(512, -255, -511),
    COL_VERTEX(512, -255, 512),
    COL_VERTEX(0, 256, 0),
    COL_VERTEX(-511, -255, -511),
    COL_TRI_INIT(SURFACE_HARD_SLIPPERY, 6),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(2, 1, 3),
    COL_TRI(0, 4, 1),
    COL_TRI(1, 4, 3),
    COL_TRI(4, 0, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
