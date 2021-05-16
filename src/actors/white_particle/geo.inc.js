// White Particle

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    white_particle_dl
} from "./model.inc"


// 0x16000F98
export const white_particle_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xB4, 50),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, white_particle_dl),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 03:19:12 -1000
