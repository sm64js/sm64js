import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700CAE0 } from "./model.inc"
export const ttm_geo_000880 = [
{ command: Geo.node_culling_radius, args: [2200] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-3200, 10000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700CAE0] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
