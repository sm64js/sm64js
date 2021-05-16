// Mario Cap

import {
    SHADOW_CIRCLE_9_VERTS
} from "../../game/Shadow"

import {
    geo_update_layer_transparency, geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ASM, GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_END, GEO_NODE_START,
    LAYER_OPAQUE, LAYER_TRANSPARENT, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    mario_cap_seg3_dl_03022F48, mario_cap_seg3_dl_03022FF8, mario_cap_seg3_dl_030230B0,
    mario_cap_seg3_dl_03023160, mario_cap_seg3_dl_03023108, mario_cap_seg3_dl_03023298
} from "./model.inc"


// 0x16000CA4
export const marios_cap_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_9_VERTS, 0xB4, 75),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ASM(10, geo_update_layer_transparency),
            GEO_SWITCH_CASE(2, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, mario_cap_seg3_dl_03022F48),
                GEO_DISPLAY_LIST(LAYER_TRANSPARENT, mario_cap_seg3_dl_03022F48),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000CF0
export const marios_metal_cap_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_9_VERTS, 0xB4, 75),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ASM(10, geo_update_layer_transparency),
            GEO_SWITCH_CASE(2, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, mario_cap_seg3_dl_03022FF8),
                GEO_DISPLAY_LIST(LAYER_TRANSPARENT, mario_cap_seg3_dl_03022FF8),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000D3C
export const marios_wing_cap_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_9_VERTS, 0xB4, 75),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ASM(10, geo_update_layer_transparency),
            GEO_SWITCH_CASE(2, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_NODE_START(),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, mario_cap_seg3_dl_03022F48),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, mario_cap_seg3_dl_030230B0),
                GEO_CLOSE_NODE(),
                GEO_NODE_START(),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, mario_cap_seg3_dl_03023160),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000DA8
export const marios_winged_metal_cap_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_9_VERTS, 0xB4, 75),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ASM(10, geo_update_layer_transparency),
            GEO_SWITCH_CASE(2, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_NODE_START(),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, mario_cap_seg3_dl_03022FF8),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, mario_cap_seg3_dl_03023108),
                GEO_CLOSE_NODE(),
                GEO_NODE_START(),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, mario_cap_seg3_dl_03023298),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 02:44:05 -1000
