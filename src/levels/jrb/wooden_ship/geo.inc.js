// Jrb

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END, GEO_ASM,
    LAYER_OPAQUE, LAYER_TRANSPARENT
} from "../../../engine/GeoLayout"

import { geo_update_layer_transparency } from "../../../game/ObjectHelpers"

import { jrb_seg7_dl_07008FD8, jrb_seg7_dl_070090B0, jrb_seg7_dl_07009A58, jrb_seg7_dl_07009B30, jrb_seg7_dl_0700A608, jrb_seg7_dl_0700AC68 } from "./model.inc"

// 0x0E000978
export const jrb_geo_000978 = () => {return [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, jrb_seg7_dl_07008FD8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0E000990
export const jrb_geo_000990 = () => {return [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_ASM(0, geo_update_layer_transparency),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, jrb_seg7_dl_070090B0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0E0009B0
export const jrb_geo_0009B0 = () => {return [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, jrb_seg7_dl_07009A58),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0E0009C8
export const jrb_geo_0009C8 = () => {return [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_ASM(0, geo_update_layer_transparency),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, jrb_seg7_dl_07009B30),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0E0009E8
export const jrb_geo_0009E8 = () => {return [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, jrb_seg7_dl_0700A608),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0E000A00
export const jrb_geo_000A00 = () => {return [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, jrb_seg7_dl_0700AC68),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
