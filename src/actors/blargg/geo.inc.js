// blargg

import {
    GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_CLOSE_NODE, GEO_END, LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    blargg_seg5_dl_05005D00, blargg_seg5_dl_05005A60, blargg_seg5_dl_050058D0
} from "./model.inc"

export const blargg_geo = () => {return [
    GEO_SCALE(0x00, 16384),
    GEO_OPEN_NODE(),
       GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, NULL),
       GEO_OPEN_NODE(),
          GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, blargg_seg5_dl_05005D00),
          GEO_OPEN_NODE(),
             GEO_ANIMATED_PART(LAYER_OPAQUE, 306, 0, 0, blargg_seg5_dl_05005A60),
             GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 6, 3, 0, NULL),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, blargg_seg5_dl_050058D0),
                GEO_CLOSE_NODE(),
             GEO_CLOSE_NODE(),
          GEO_CLOSE_NODE(),
       GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
 ]};