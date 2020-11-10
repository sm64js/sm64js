import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700BE20 } from "./model.inc"
export const ttm_geo_000808 = [
{ command: Geo.node_culling_radius, args: [650] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-1650, 9500] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700BE20] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
