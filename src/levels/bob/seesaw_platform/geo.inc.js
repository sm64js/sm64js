import { GeoLayoutInstance as Geo } from "../../../engine/GeoLayout"
import { bob_seg7_dl_0700E768 } from "./model.inc"

export const bob_geo_000458 = [
    { command: Geo.node_culling_radius, args: [1200] },
    { command: Geo.open_node },
    {    command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bob_seg7_dl_0700E768] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
