import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700D1D8 } from "./model.inc"
export const ttm_geo_0008D0 = [
{ command: Geo.node_culling_radius, args: [1200] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2200, 8000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700D1D8] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
