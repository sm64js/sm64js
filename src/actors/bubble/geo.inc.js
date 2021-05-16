// Bubble

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_SWITCH_CASE, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    bubble_seg4_dl_0401DD60, bubble_seg4_dl_0401DDE0
} from "./model.inc"


// 0x17000000
export const bubble_geo = () => {return [
    GEO_SWITCH_CASE(1, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bubble_seg4_dl_0401DD60),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x1700001C
export const purple_marble_geo = () => {return [
    GEO_SWITCH_CASE(1, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bubble_seg4_dl_0401DDE0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 03:12:01 -1000
