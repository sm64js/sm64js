import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700E308 } from "./model.inc"
export const ttm_geo_000948 = [
{ command: Geo.node_culling_radius, args: [350] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-1350, 3000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700E308] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
