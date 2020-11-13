import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_0700BF50 } from "./model.inc"

export const wf_geo_0009B8 = [
{ command: Geo.node_culling_radius, args: [1100] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_0700BF50] },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
