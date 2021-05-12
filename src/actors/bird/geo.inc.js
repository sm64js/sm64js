// Bird

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {birds_seg5_dl_05000670, birds_seg5_dl_05000528, birds_seg5_dl_05000600, birds_seg5_dl_05000598}
from "./model.inc"

// 0x0C000000
export const birds_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000670),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 1, -12, 37, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000528),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 1, -12, -37, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000600),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000598),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619334742 - 2021-04-25 14:44:44 -1000
