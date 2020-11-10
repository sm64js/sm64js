import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700F270 } from "./1.inc"
import { ttm_seg7_dl_0700FA18 } from "./2.inc"
export const ttm_geo_000990 = [
{ command: Geo.node_culling_radius, args: [780] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-1780, 5500] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, ttm_seg7_dl_0700F270] },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700FA18] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
