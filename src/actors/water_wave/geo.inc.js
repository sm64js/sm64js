import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { geo_switch_anim_state    } from "../../game/ObjectHelpers"

import { water_wave_seg4_dl_040273F0,
         water_wave_seg4_dl_04027408,
         water_wave_seg4_dl_04027420,
         water_wave_seg4_dl_04027438  } from "./model.inc"

export const idle_water_wave_geo = [
   ['GEO_SWITCH_CASE', 6, geo_switch_anim_state],
   ['GEO_OPEN_NODE'],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_040273F0],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027408],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027420],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027438],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027420],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027408],
   ['GEO_CLOSE_NODE'],
   ['GEO_END']
]

export const wave_trail_geo = [
   ['GEO_SWITCH_CASE', 8, geo_switch_anim_state],
   ['GEO_OPEN_NODE'],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_040273F0],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027408],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027420],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027438],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027438],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027438],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027438],
      ['GEO_DISPLAY_LIST', Geo.LAYER_TRANSPARENT, water_wave_seg4_dl_04027438],
   ['GEO_CLOSE_NODE'],
   ['GEO_END']
]
