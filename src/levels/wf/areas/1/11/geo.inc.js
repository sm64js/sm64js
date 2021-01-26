import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_07009278 } from "./model.inc"

export const wf_geo_0008E8 = [
{ command: Geo.node_culling_radius, args: [400] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_07009278] },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
