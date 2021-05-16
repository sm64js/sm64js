// Breakable Box

import {
    SHADOW_SQUARE_PERMANENT
} from "../../game/Shadow"

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    breakable_box_seg8_dl_08012D20, breakable_box_seg8_dl_08012D48
} from "./model.inc"


// 0x0F0005D0
export const breakable_box_geo = () => {return [
    GEO_CULLING_RADIUS(500),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_PERMANENT, 0xB4, 240),
        GEO_OPEN_NODE(),
            GEO_SWITCH_CASE(2, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, breakable_box_seg8_dl_08012D20),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, breakable_box_seg8_dl_08012D48),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0F000610
export const breakable_box_small_geo = () => {return [
    GEO_CULLING_RADIUS(500),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(2, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, breakable_box_seg8_dl_08012D20),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, breakable_box_seg8_dl_08012D48),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619272096 - 2021-04-24 04:08:36 -1000
