import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700DF78 } from "./model.inc"
export const ttm_geo_000920 = [
{ command: Geo.node_culling_radius, args: [1650] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2650, 5500] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700DF78] },
{ command: Geo.open_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
