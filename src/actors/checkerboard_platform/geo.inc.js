import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { checkerboard_platform_seg8_dl_0800D680 } from "../checkerboard_platform/model.inc"

export const checkerboard_platform_geo = [
    { command: Geo.node_culling_radius, args: [400] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, checkerboard_platform_seg8_dl_0800D680] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
