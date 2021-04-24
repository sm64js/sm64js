// Bowser Key

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    GEO_ANIMATED_PART, GEO_ASM,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    bowser_key_dl
} from "./model.inc"

import {
    geo_scale_bowser_key
} from "../../game/behaviors/bowser_key_cutscene.inc"


// 0x16000A84
export const bowser_key_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x9B, 300),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 65536),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, bowser_key_dl),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000AB0
export const bowser_key_cutscene_geo = () => {return [
    GEO_SCALE(0x00, 16384),
    GEO_OPEN_NODE(),
        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ASM(0, geo_scale_bowser_key),
                GEO_SCALE(0x00, 65536),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, bowser_key_dl),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
GEO_CLOSE_NODE(), //! more close than open nodes
GEO_END(),
]};

// 1619267130 - 2021-04-24 02:25:32 -1000
