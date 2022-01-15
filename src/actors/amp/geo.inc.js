// Amp

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_SWITCH_CASE, GEO_CLOSE_NODE,
    GEO_BILLBOARD, GEO_DISPLAY_LIST, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    amp_seg8_dl_08002C88, amp_seg8_dl_08002BA0, amp_seg8_dl_08002D70, amp_seg8_dl_08002E58
} from "./model.inc"

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"


// 0x0F000028
export const amp_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, amp_seg8_dl_08002C88),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_SWITCH_CASE(2, geo_switch_anim_state),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                            GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, amp_seg8_dl_08002BA0),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_SWITCH_CASE(2, geo_switch_anim_state),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                            GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, amp_seg8_dl_08002BA0),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_SWITCH_CASE(2, geo_switch_anim_state),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                            GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, amp_seg8_dl_08002BA0),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_SWITCH_CASE(2, geo_switch_anim_state),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                            GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, amp_seg8_dl_08002BA0),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, amp_seg8_dl_08002D70),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                    GEO_BILLBOARD(),
                    GEO_OPEN_NODE(),
                        GEO_DISPLAY_LIST(LAYER_ALPHA, amp_seg8_dl_08002E58),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 03:38:40 -1000
