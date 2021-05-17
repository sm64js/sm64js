import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ttm_seg7_dl_0700A8C0 } from "./1.inc"
import { ttm_seg7_dl_0700AB08 } from "./2.inc"
export const ttm_geo_000748 = [
{ command: Geo.node_culling_radius, args: [1800] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2800, 10000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ttm_seg7_dl_0700A8C0] },
{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, ttm_seg7_dl_0700AB08] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
