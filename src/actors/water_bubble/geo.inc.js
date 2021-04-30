// Water Bubble

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END, GEO_SHADOW,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import { water_bubble_seg5_dl_05011000 } from "./model.inc"

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"


// 0x0C000308
export const water_bomb_geo = () => {return [
    GEO_CULLING_RADIUS(150),
    GEO_OPEN_NODE(),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_bubble_seg5_dl_05011000),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0C000328
export const water_bomb_shadow_geo = () => {return [
    GEO_CULLING_RADIUS(150),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x64, 160),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619756659 - 2021-04-29 22:50:40 -1000
