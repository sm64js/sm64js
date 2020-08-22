import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { castle_grounds_seg7_dl_0700A290 } from "./model.inc"

export const castle_grounds_geo_0006F4 = [
    { command: Geo.node_culling_radius, args: [2100] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, castle_grounds_seg7_dl_0700A290] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]