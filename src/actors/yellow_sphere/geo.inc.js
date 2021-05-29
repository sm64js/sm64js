// Yellow Sphere

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_BILLBOARD, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import { yellow_sphere_seg6_dl_0601F3C0 } from "./model.inc"


// 0x0D0000B0
export const bowser_1_yellow_sphere_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_BILLBOARD(),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, yellow_sphere_seg6_dl_0601F3C0),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-28 06:02:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
