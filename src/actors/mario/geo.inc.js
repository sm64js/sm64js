import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { mario_butt } from "./model.inc"

export const mario_geo = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.node_scale, args: [0x00, 16384] },
    { command: Geo.open_node },
    { command: Geo.open_node },
    //GEO_BRANCH(1, mario_geo_render_body),
        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null] },
        { command: Geo.open_node },
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_butt] },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]