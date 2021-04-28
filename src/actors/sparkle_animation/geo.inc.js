// Sparkle Animation

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_SWITCH_CASE, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    sparkles_animation_seg4_dl_04035300, sparkles_animation_seg4_dl_04035318, sparkles_animation_seg4_dl_04035330,
    sparkles_animation_seg4_dl_04035348, sparkles_animation_seg4_dl_04035360, 
} from "./model.inc"


// 0x17000284
export const sparkles_animation_geo = () => {return [
    GEO_SWITCH_CASE(9, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035300),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035318),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035330),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035348),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035360),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035348),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035330),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035318),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sparkles_animation_seg4_dl_04035300),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 03:14:05 -1000
