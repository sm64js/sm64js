import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { wf_seg7_dl_07007220 } from "./model.inc"

export const wf_geo_000878 = [
{ command: Geo.node_culling_radius, args: [9000] },
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, wf_seg7_dl_07007220] },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
