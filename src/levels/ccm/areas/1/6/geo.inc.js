import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ccm_seg7_dl_0700E708 } from "./1.inc"
import { ccm_seg7_dl_0700E970 } from "./2.inc"

export const ccm_geo_00042C = [
    { command: Geo.node_culling_radius, args: [800] },
    { command: Geo.open_node },
        { command: Geo.node_render_range, args: [-1000, 4000] },
        { command: Geo.open_node },
            { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ccm_seg7_dl_0700E708] },
            { command: Geo.display_list, args: [Geo.LAYER_ALPHA, ccm_seg7_dl_0700E970] },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
