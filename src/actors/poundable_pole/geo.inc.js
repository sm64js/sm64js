// Poundable Pole

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import { poundable_pole_seg6_dl_06002410 } from "./model.inc"


// 0x0D0000B8
export const wooden_post_geo = () => {return [
    GEO_CULLING_RADIUS(450),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, poundable_pole_seg6_dl_06002410),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:16:59 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
