// Stomp Smoke

import { geo_switch_anim_state } from "../../game/ObjectHelpers"

import {
    GEO_SWITCH_CASE, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    stomp_smoke_seg4_dl_040251F8, stomp_smoke_seg4_dl_04025210, stomp_smoke_seg4_dl_04025228,
    stomp_smoke_seg4_dl_04025240, stomp_smoke_seg4_dl_04025258, stomp_smoke_seg4_dl_04025270,
    stomp_smoke_seg4_dl_04025288, stomp_smoke_seg4_dl_040252A0, stomp_smoke_seg4_dl_040252B8,
    stomp_smoke_seg4_dl_040252D0, stomp_smoke_seg4_dl_040252E8, stomp_smoke_seg4_dl_04025300
} from "./model.inc"


// 0x1700009C
export const small_water_splash_geo = () => {return [
    GEO_SWITCH_CASE(6, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_040251F8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025210),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025228),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025240),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025258),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025270),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x170000E0
export const mario_TODO_geo_0000E0 = () => {return [
    GEO_SWITCH_CASE(6, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025288),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_040252A0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_040252B8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_040252D0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_040252E8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025300),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619334742 - 2021-04-25 14:39:20 -1000
