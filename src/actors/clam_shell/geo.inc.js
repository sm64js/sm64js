// Clam Shell

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    clam_shell_seg5_dl_05001568, clam_shell_seg5_dl_050012B8
} from "./model.inc"


// 0x0C000000
export const clam_shell_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, clam_shell_seg5_dl_05001568),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -520, -6, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, clam_shell_seg5_dl_050012B8),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:10:00 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
