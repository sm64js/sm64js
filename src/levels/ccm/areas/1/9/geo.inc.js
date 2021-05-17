import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ccm_seg7_dl_0700FD08 } from "./model.inc"

export const ccm_geo_0004BC = [
    { command: Geo.node_culling_radius, args: [800] },
    { command: Geo.open_node },
        { command: Geo.node_render_range, args: [-1000, 7000] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ccm_seg7_dl_0700FD08] },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
