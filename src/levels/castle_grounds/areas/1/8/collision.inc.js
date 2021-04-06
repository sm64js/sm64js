import { COL_INIT, COL_END,
         COL_VERTEX_INIT, COL_VERTEX,
         COL_TRI_INIT, COL_TRI, COL_TRI_STOP,
         SURFACE_DEFAULT                      } from "../../../../../include/surface_terrains"


export const castle_grounds_seg7_collision_cannon_grill = [
    ...COL_INIT(),
    ...COL_VERTEX_INIT(0x4),
    ...COL_VERTEX(2283, 65, 2072),
    ...COL_VERTEX(2485, 65, 1849),
    ...COL_VERTEX(2283, 65, 1849),
    ...COL_VERTEX(2485, 65, 2072),
    ...COL_TRI_INIT(SURFACE_DEFAULT, 2),
    ...COL_TRI(0, 1, 2),
    ...COL_TRI(0, 3, 1),
    ...COL_TRI_STOP(),
    ...COL_END(),
]
