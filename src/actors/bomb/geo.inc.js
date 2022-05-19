// Bomb

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SCALE, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, GEO_DISPLAY_LIST, GEO_BILLBOARD
} from "../../engine/GeoLayout"

import {
    bomb_seg6_dl_0605A830, bomb_seg6_dl_0605A830
} from "./model.inc"

export const bowser_bomb_geo = () => {return [
    GEO_CULLING_RADIUS(1000),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 196608),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, bomb_seg6_dl_0605A9C0),
            GEO_BILLBOARD(),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_ALPHA, bomb_seg6_dl_0605A830),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};