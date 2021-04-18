// Coin

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SWITCH_CASE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    GEO_NODE_START,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    coin_seg3_dl_03007800, coin_seg3_dl_03007828, coin_seg3_dl_03007850, coin_seg3_dl_03007878,
    coin_seg3_dl_030078A0, coin_seg3_dl_030078C8, coin_seg3_dl_030078F0, coin_seg3_dl_03007918,
    coin_seg3_dl_03007940, coin_seg3_dl_03007968, coin_seg3_dl_03007990, coin_seg3_dl_030079B8
} from "./model.inc"


// 0x1600013C
export const yellow_coin_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xB4, 50),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007800),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007800),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007828),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007828),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007850),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007850),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007878),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007878),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x160001A0
export const yellow_coin_no_shadow_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007800),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007800),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007828),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007828),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007850),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007850),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007878),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007878),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000200
export const blue_coin_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xB4, 80),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078A0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078A0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078C8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078C8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078F0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078F0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007918),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007918),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000264
export const blue_coin_no_shadow_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078A0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078A0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078C8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078C8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078F0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030078F0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007918),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007918),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x160002C4
export const red_coin_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xB4, 80),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007940),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007940),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007968),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007968),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007990),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007990),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030079B8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030079B8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000328
export const red_coin_no_shadow_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007940),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007940),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007968),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007968),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007990),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_03007990),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030079B8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, coin_seg3_dl_030079B8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1618763501 - 2021-04-18 06:36:19 -1000
