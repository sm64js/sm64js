import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_0700D300 } from "./model.inc"

export const wf_geo_0009E8 = [
{ command: Geo.node_culling_radius, args: [2700] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_0700D300] },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
