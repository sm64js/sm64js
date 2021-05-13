// Bowling Ball
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    GEO_NODE_START,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

// This is a weird file where it cross-references another actor.
// Most likely, it was a compile time optimization due to the
// exact same DL being referenced.
import { bobomb_seg8_dl_08022D08 } from "../bobomb/model.inc"

// 0x0F000640
export const bowling_ball_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 280),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 170393),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, bobomb_seg8_dl_08022D08),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0F00066C
export const bowling_ball_track_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 170393),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, bobomb_seg8_dl_08022D08),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619756659 - 2021-05-09 10:49:26 -0500
