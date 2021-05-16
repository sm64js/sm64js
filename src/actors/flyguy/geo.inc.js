// Flyguy

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    flyguy_seg8_dl_08011710, flyguy_seg8_dl_08010840, flyguy_seg8_dl_08010968,
    flyguy_seg8_dl_08010B80
} from "./model.inc"


// 0x0F000518
export const flyguy_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, flyguy_seg8_dl_08011710),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -45, -20, -55, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, flyguy_seg8_dl_08010840),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -45, -20, 55, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, flyguy_seg8_dl_08010968),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 250, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_TRANSPARENT, 0, 0, 0, flyguy_seg8_dl_08010B80),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619275628 - 2021-04-24 04:47:48 -1000
