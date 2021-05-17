import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700C408 } from "./model.inc"
export const ttm_geo_000858 = [
{ command: Geo.node_culling_radius, args: [450] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-1450, 5500] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700C408] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
