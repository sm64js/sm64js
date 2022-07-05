// Unagi

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_SWITCH_CASE,
    GEO_NODE_START, GEO_TRANSLATE_ROTATE_WITH_DL, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    unagi_seg5_dl_0500D268, unagi_seg5_dl_0500D468, unagi_seg5_dl_0500D668,
    unagi_seg5_dl_0500D828, unagi_seg5_dl_0500D050, unagi_seg5_dl_0500DEB8,
    unagi_seg5_dl_0500E258, unagi_seg5_dl_0500CDD0, unagi_seg5_dl_0500E088,
    unagi_seg5_dl_0500DD08
} from "./model.inc"

import { star_seg3_dl_0302B870, star_seg3_dl_0302BA18 } from "../star/model.inc"

import { geo_switch_anim_state } from "../../game/ObjectHelpers"


// 0x0C00010C
export const unagi_geo = () => {return [
    GEO_CULLING_RADIUS(2000),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, unagi_seg5_dl_0500D268),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 245, 0, 0, unagi_seg5_dl_0500D468),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 494, 0, 0, unagi_seg5_dl_0500D668),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 475, 0, 0, unagi_seg5_dl_0500D828),
                            GEO_OPEN_NODE(),
                                GEO_SWITCH_CASE(2, geo_switch_anim_state),
                                GEO_OPEN_NODE(),
                                    GEO_NODE_START(),
                                    GEO_NODE_START(),
                                    GEO_OPEN_NODE(),
                                        GEO_SCALE(0x00, 16384),
                                        GEO_OPEN_NODE(),
                                            GEO_TRANSLATE_ROTATE_WITH_DL(LAYER_OPAQUE, 2000, 0, 0, 0, 0, 0, star_seg3_dl_0302B870),
                                            GEO_TRANSLATE_ROTATE_WITH_DL(LAYER_ALPHA, 2000, 0, 0, 0, 0, 0, star_seg3_dl_0302BA18),
                                        GEO_CLOSE_NODE(),
                                    GEO_CLOSE_NODE(),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -254, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, unagi_seg5_dl_0500D050),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_ALPHA, 527, 0, 0, unagi_seg5_dl_0500DEB8),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 226, 65, 0, null),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, unagi_seg5_dl_0500E258),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, unagi_seg5_dl_0500CDD0),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                            GEO_ANIMATED_PART(LAYER_ALPHA, 527, 0, 0, unagi_seg5_dl_0500E088),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 527, 0, 0, unagi_seg5_dl_0500DD08),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 527, 0, 0, null),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:06:51 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
