// Bob

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x070113F0 - 0x07011474
export const bob_seg7_collision_bridge = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-180, 51, -904),
    COL_VERTEX(-180, 0, -904),
    COL_VERTEX(-180, 51, 905),
    COL_VERTEX(181, 0, -904),
    COL_VERTEX(-180, 0, 905),
    COL_VERTEX(181, 0, 905),
    COL_VERTEX(181, 51, -904),
    COL_VERTEX(181, 51, 905),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 1, 0),
    COL_TRI(1, 4, 2),
    COL_TRI(1, 3, 5),
    COL_TRI(4, 1, 5),
    COL_TRI(3, 0, 6),
    COL_TRI(5, 3, 6),
    COL_TRI(4, 5, 7),
    COL_TRI(7, 5, 6),
    COL_TRI(4, 7, 2),
    COL_TRI(6, 0, 2),
    COL_TRI(7, 6, 2),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1619334742 - 2021-04-24 21:12:30 -1000
