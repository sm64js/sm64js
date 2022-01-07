import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { cap_switch_exclamation_seg5_dl_05002E00 } from "./model.inc"

export const cap_switch_geo = [
    { command: Geo.node_culling_radius, args: [600] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, cap_switch_exclamation_seg5_dl_05002E00] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]