import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700EAC8 } from "./1.inc"
import { ttm_seg7_dl_0700EC58 } from "./2.inc"
export const ttm_geo_000970 = [
{ command: Geo.node_culling_radius, args: [3200] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700EAC8] },
{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, ttm_seg7_dl_0700EC58] },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
