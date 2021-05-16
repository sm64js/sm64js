// Castle Grounds

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import {
    castle_grounds_seg7_dl_0700C768, castle_grounds_seg7_dl_0700C728,
    castle_grounds_seg7_dl_0700C6E8, castle_grounds_seg7_dl_0700C6A8,
    castle_grounds_seg7_dl_0700C670
} from "./model.inc"


// 0x0E000660
export const castle_grounds_geo_000660 = () => {return [
    GEO_CULLING_RADIUS(1000),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 24576),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, castle_grounds_seg7_dl_0700C768),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 459, 0, 0, castle_grounds_seg7_dl_0700C728),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 460, 0, 0, castle_grounds_seg7_dl_0700C6E8),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 345, 0, 0, castle_grounds_seg7_dl_0700C6A8),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 287, 0, 0, castle_grounds_seg7_dl_0700C670),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
GEO_CLOSE_NODE(), //! more close than open nodes
GEO_END(),
]};

// 1618763470 - 2021-04-18 06:31:12 -1000
