import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_07011128 } from "./model.inc"
export const ttm_geo_0009F0 = [
{ command: Geo.node_culling_radius, args: [920] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-1920, 5000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_07011128] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
