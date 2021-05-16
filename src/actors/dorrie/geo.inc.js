// Dorrie

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from '../../engine/GeoLayout'

import {
    dorrie_seg6_dl_0600CFD0, dorrie_seg6_dl_0600C8B8, dorrie_seg6_dl_0600C468,
    dorrie_seg6_dl_0600BAF8, dorrie_seg6_dl_0600DFA8, dorrie_seg6_dl_0600C030,
    dorrie_seg6_dl_0600D440, dorrie_seg6_dl_0600D6D8, dorrie_seg6_dl_0600DE38,
    dorrie_seg6_dl_0600DA88, dorrie_seg6_dl_0600DC60, dorrie_seg6_dl_0600D8B0
} from './model.inc'

// 0x0D000230
export const dorrie_geo = [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, dorrie_seg6_dl_0600CFD0),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 1295, 0, 0, dorrie_seg6_dl_0600C8B8),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 916, 0, 0, dorrie_seg6_dl_0600C468),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 874, 0, 0, dorrie_seg6_dl_0600BAF8),
                            GEO_OPEN_NODE(),
                                GEO_DISPLAY_LIST(LAYER_ALPHA, dorrie_seg6_dl_0600DFA8),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 30, 444, -6, null),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, dorrie_seg6_dl_0600C030),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -893, -490, -6, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, dorrie_seg6_dl_0600D440),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 1300, 0, 0, dorrie_seg6_dl_0600D6D8),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -1086, 91, -700, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, dorrie_seg6_dl_0600DE38),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 902, 700, -785, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, dorrie_seg6_dl_0600DA88),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -1086, 91, 698, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, dorrie_seg6_dl_0600DC60),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 902, 700, 783, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, dorrie_seg6_dl_0600D8B0),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
GEO_CLOSE_NODE(), //! more close than open nodes
GEO_END(),
]

// 1618208663 - 2021-04-11 20:47:50 -1000
