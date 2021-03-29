import { GeoLayoutInstance as Geo         } from "../../engine/GeoLayout"
import { geo_switch_anim_state            } from "../../game/ObjectHelpers"

import { water_splash_seg4_dl_04032640,
         water_splash_seg4_dl_04032658,
         water_splash_seg4_dl_04032670,
         water_splash_seg4_dl_04032688,
         water_splash_seg4_dl_040326A0,
         water_splash_seg4_dl_040326B8,
         water_splash_seg4_dl_040326D0,
         water_splash_seg4_dl_040326E8    } from "./model.inc"

export const water_splash_geo = [
   ['GEO_SWITCH_CASE', 8, geo_switch_anim_state],
   ['GEO_OPEN_NODE'],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_04032640],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_04032658],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_04032670],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_04032688],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_040326A0],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_040326B8],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_040326D0],
      ['GEO_DISPLAY_LIST', Geo.LAYER_ALPHA, water_splash_seg4_dl_040326E8],
   ['GEO_CLOSE_NODE'],
   ['GEO_END'],
]


import { stomp_smoke_seg4_dl_040251F8,
         stomp_smoke_seg4_dl_04025210,
         stomp_smoke_seg4_dl_04025228,
         stomp_smoke_seg4_dl_04025240,
         stomp_smoke_seg4_dl_04025258,
         stomp_smoke_seg4_dl_04025270     } from "./model.inc"

export const small_water_splash_geo = [
   ['GEO_SWITCH_CASE', 6, geo_switch_anim_state],
   ['GEO_OPEN_NODE'],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, stomp_smoke_seg4_dl_040251F8],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025210],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025228],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025240],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025258],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, stomp_smoke_seg4_dl_04025270],
   ['GEO_CLOSE_NODE'],
   ['GEO_END'],
]
