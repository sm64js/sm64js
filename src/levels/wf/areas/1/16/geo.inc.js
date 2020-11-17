import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_0700BA28 } from "./model.inc"

export const wf_geo_0009A0 = [
{ command: Geo.node_culling_radius, args: [3000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_0700BA28] },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
