import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ccm_seg7_dl_0700F440 } from "./1.inc"
import { ccm_seg7_dl_0700F650 } from "./2.inc"
import { ccm_seg7_dl_0700F780 } from "./3.inc"


export const ccm_geo_00045C = [
    { command: Geo.node_culling_radius, args: [900] },
    { command: Geo.open_node },
        { command: Geo.node_render_range, args: [-1000, 7000] },
        { command: Geo.open_node },
            { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ccm_seg7_dl_0700F440] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, ccm_seg7_dl_0700F650] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, ccm_seg7_dl_0700F780] },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
