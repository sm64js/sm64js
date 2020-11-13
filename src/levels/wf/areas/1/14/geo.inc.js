import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_0700A170 } from "./model.inc"

export const wf_geo_000AE0 = [
{ command: Geo.node_culling_radius, args: [2000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_0700A170] },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
