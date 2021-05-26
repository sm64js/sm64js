// Bookend

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    bookend_seg5_dl_05001F98, bookend_seg5_dl_05001B20, bookend_seg5_dl_05002140,
    bookend_seg5_dl_05001D68, bookend_seg5_dl_05001978, bookend_seg5_dl_050022E0
} from "./model.inc"


// 0x0C000000
export const bookend_part_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bookend_seg5_dl_05001F98),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bookend_seg5_dl_05001B20),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bookend_seg5_dl_05002140),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bookend_seg5_dl_05001D68),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bookend_seg5_dl_05001978),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bookend_seg5_dl_050022E0),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
GEO_CLOSE_NODE(), //! more close than open nodes
GEO_END(),
]};

// 1622010961 - 2021-05-25 23:37:51 -0700
