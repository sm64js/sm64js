import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_07011C78 } from "./1.inc"
import { ttm_seg7_dl_07011D78 } from "./2.inc"
export const ttm_geo_000A40 = [
{ command: Geo.node_culling_radius, args: [900] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-1900, 5000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_07011C78] },
{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, ttm_seg7_dl_07011D78] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
