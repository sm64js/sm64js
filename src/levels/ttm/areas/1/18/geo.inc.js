import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_07010978 } from "./1.inc"
import { ttm_seg7_dl_07010A68 } from "./2.inc"
export const ttm_geo_0009C0 = [
{ command: Geo.node_culling_radius, args: [1700] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2700, 5000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_07010978] },
{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, ttm_seg7_dl_07010A68] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
