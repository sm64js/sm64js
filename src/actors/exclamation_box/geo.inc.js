// Exclamation Box

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
    exclamation_box_seg8_dl_08019318, exclamation_box_seg8_dl_08019378,
    exclamation_box_seg8_dl_080193D8, exclamation_box_seg8_dl_08019438
} from "./model.inc"


// 0x0F000694
export const exclamation_box_geo = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_PERMANENT, 0xB4, 70),
        GEO_OPEN_NODE(),
            GEO_SWITCH_CASE(4, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, exclamation_box_seg8_dl_08019318),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, exclamation_box_seg8_dl_08019378),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, exclamation_box_seg8_dl_080193D8),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, exclamation_box_seg8_dl_08019438),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619272096 - 2021-04-24 04:09:50 -1000
