import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_07009780 } from "./1.inc"
import { wf_seg7_dl_07009890 } from "./2.inc"

export const wf_geo_000900 = [
{ command: Geo.node_culling_radius, args: [1600] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2048, 5000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_07009780] },
{ command: Geo.close_node },
{ command: Geo.node_render_range, args: [5000, 32767] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_07009890] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
