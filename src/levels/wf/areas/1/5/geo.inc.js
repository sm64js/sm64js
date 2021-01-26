import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_07005DD8 } from "./1.inc"
import { wf_seg7_dl_07005EE8 } from "./2.inc"

export const wf_geo_0007E0 = [
{ command: Geo.node_culling_radius, args: [600] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2048, 5000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_07005DD8] },
{ command: Geo.close_node },
{ command: Geo.node_render_range, args: [5000, 32767] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_07005EE8] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
