// Koopa Shell

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    koopa_shell_seg8_dl_08028B78, koopa_shell_seg8_dl_08027420, koopa_shell_seg8_dl_080273C8
} from "./model.inc"


// 0x0F000AB0
export const koopa_shell_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 70),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 65536),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, koopa_shell_seg8_dl_08028B78),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0F000ADC
export const koopa_shell2_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 70),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, koopa_shell_seg8_dl_08027420),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0F000B08
export const koopa_shell3_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 70),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, koopa_shell_seg8_dl_080273C8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619274064 - 2021-04-24 04:21:12 -1000
