// 0x0C000000
import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import { birds_seg5_dl_05000670, birds_seg5_dl_05000528,
    birds_seg5_dl_05000600, birds_seg5_dl_05000598} from "./model.inc"

export const birds_geo = [
    ['GEO_SHADOW', SHADOW_CIRCLE_4_VERTS, 0x96, 100],
    ['GEO_OPEN_NODE'],
       ['GEO_SCALE', 0x00, 16384],
       ['GEO_OPEN_NODE'],
          ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 0, 0, 0, null],
          ['GEO_OPEN_NODE'],
             ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000670],
             ['GEO_OPEN_NODE'],
                ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 1, -12, 37, null],
                ['GEO_OPEN_NODE'],
                   ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000528],
                ['GEO_CLOSE_NODE'],
                ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 1, -12, -37, null],
                ['GEO_OPEN_NODE'],
                   ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000600],
                ['GEO_CLOSE_NODE'],
             ['GEO_CLOSE_NODE'],
             ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 0, 0, 0, birds_seg5_dl_05000598],
          ['GEO_CLOSE_NODE'],
       ['GEO_CLOSE_NODE'],
    ['GEO_CLOSE_NODE'],
    ['GEO_END'],
];
