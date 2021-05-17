import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ccm_seg7_dl_0700FB00 } from "./model.inc"

export const ccm_geo_000494 = [
    { command: Geo.node_culling_radius, args: [400] },
    { command: Geo.open_node },
        { command: Geo.node_render_range, args: [-500, 7000] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ccm_seg7_dl_0700FB00] },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
