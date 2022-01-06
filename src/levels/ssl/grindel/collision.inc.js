// Ssl

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07027ED0 - 0x07027F54
export const ssl_seg7_collision_grindel = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(224, 450, -224),
    COL_VERTEX(224, 3, -224),
    COL_VERTEX(-224, 3, -224),
    COL_VERTEX(-224, 450, -224),
    COL_VERTEX(-224, 3, 224),
    COL_VERTEX(224, 3, 224),
    COL_VERTEX(224, 450, 224),
    COL_VERTEX(-224, 450, 224),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(3, 2, 4),
    COL_TRI(2, 1, 5),
    COL_TRI(2, 5, 4),
    COL_TRI(6, 5, 1),
    COL_TRI(6, 1, 0),
    COL_TRI(7, 4, 5),
    COL_TRI(7, 5, 6),
    COL_TRI(3, 4, 7),
    COL_TRI(7, 6, 0),
    COL_TRI(7, 0, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
