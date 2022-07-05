// Chain Ball

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import { chain_ball_seg6_dl_060212E8 } from "./model.inc"


// 0x0D0005D0
export const metallic_ball_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 60),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, chain_ball_seg6_dl_060212E8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:16:29 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
