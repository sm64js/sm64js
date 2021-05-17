import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_0700ABA0 } from "./1.inc"
import { wf_seg7_dl_0700AFB8 } from "./3.inc"
import { wf_seg7_dl_0700AEC8 } from "./2.inc"

export const wf_geo_000958 = [
{ command: Geo.node_culling_radius, args: [2000] },
{ command: Geo.open_node },
{ command: Geo.node_render_range, args: [-2000, 8000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_0700ABA0] },
{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, wf_seg7_dl_0700AFB8] },
{ command: Geo.close_node },
{ command: Geo.node_render_range, args: [8000, 20000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_0700AEC8] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
