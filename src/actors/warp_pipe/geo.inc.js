// Warp Pipe

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    warp_pipe_seg3_dl_03008F98, warp_pipe_seg3_dl_03009A50
} from "./model.inc"


// 0x16000388
export const warp_pipe_geo = () => {return [
    GEO_CULLING_RADIUS(350),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, warp_pipe_seg3_dl_03008F98),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, warp_pipe_seg3_dl_03009A50),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619277377 - 2021-04-24 05:50:45 -1000
