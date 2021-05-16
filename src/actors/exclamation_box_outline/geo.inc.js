// Exclamation Box Outline

import {
    SHADOW_SQUARE_PERMANENT
} from "../../game/Shadow"

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    exclamation_box_outline_seg8_dl_08024F88, exclamation_box_outline_seg8_dl_08024FA8,
    exclamation_box_outline_seg8_dl_08024FC8, exclamation_box_outline_seg8_dl_08024FE8,
    exclamation_box_outline_seg8_dl_080259F8
} from "./model.inc"


// 0x0F000A5A
export const exclamation_box_outline_geo = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_PERMANENT, 0xB4, 70),
        GEO_OPEN_NODE(),
            GEO_SWITCH_CASE(4, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_TRANSPARENT, exclamation_box_outline_seg8_dl_08024F88),
                GEO_DISPLAY_LIST(LAYER_TRANSPARENT, exclamation_box_outline_seg8_dl_08024FA8),
                GEO_DISPLAY_LIST(LAYER_TRANSPARENT, exclamation_box_outline_seg8_dl_08024FC8),
                GEO_DISPLAY_LIST(LAYER_TRANSPARENT, exclamation_box_outline_seg8_dl_08024FE8),
            GEO_CLOSE_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, exclamation_box_outline_seg8_dl_080259F8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619272096 - 2021-04-24 04:09:47 -1000
