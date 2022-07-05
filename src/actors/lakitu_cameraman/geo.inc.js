// Lakitu Cameraman

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import { geo_switch_anim_state } from "../../game/ObjectHelpers"


// 0x0D000000
export const lakitu_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_seg6_dl_06003E30),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 132, 0, 0, lakitu_seg6_dl_06004680),
                    GEO_OPEN_NODE(),
                        GEO_SWITCH_CASE(2, geo_switch_anim_state),
                        GEO_OPEN_NODE(),
                            GEO_DISPLAY_LIST(LAYER_ALPHA, lakitu_seg6_dl_06004C60),
                            GEO_DISPLAY_LIST(LAYER_ALPHA, lakitu_seg6_dl_06004C88),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 87, 18, 72, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_seg6_dl_060047E8),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 87, 18, -72, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_seg6_dl_060049E0),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 334, -214, -50, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_seg6_dl_06005610),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 191, 0, 0, lakitu_seg6_dl_06005360),
                                GEO_CLOSE_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_seg6_dl_060055E8),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_seg6_dl_06005598),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 17:36:11 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
