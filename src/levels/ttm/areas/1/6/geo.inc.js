import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700BAD0 } from "./1.inc"
import { ttm_seg7_dl_0700BC10 } from "./2.inc"
export const ttm_geo_0007D8 = [
{ command: Geo.node_culling_radius, args: [1700] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2700, 6500] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700BAD0] },
{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, ttm_seg7_dl_0700BC10] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
