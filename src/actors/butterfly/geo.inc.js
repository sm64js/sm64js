import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { butterfly_seg3_dl_03005408, butterfly_seg3_dl_030054A0 } from "./model.inc"
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"

// 0x160000A8
export const butterfly_geo = [
  { command: Geo.node_shadow, args:[SHADOW_CIRCLE_4_VERTS, 0xB4, 25],},
  { command: Geo.open_node },
    { command: Geo.node_scale, args:[0x00, 16384],},
    { command: Geo.open_node },
      { command: Geo.node_animated_part, args:[Geo.LAYER_OPAQUE, 0, 0, 0, null],},
      { command: Geo.open_node },
        { command: Geo.node_animated_part, args:[Geo.LAYER_OPAQUE, 0, 0, 0, butterfly_seg3_dl_03005408],},
        { command: Geo.open_node },
          { command: Geo.node_animated_part, args:[Geo.LAYER_OPAQUE, 0, 0, 0, null],},
        { command: Geo.close_node },
      { command: Geo.close_node },
      { command: Geo.open_node },
        { command: Geo.node_animated_part, args:[Geo.LAYER_OPAQUE, 0, 0, 0, null],},
        { command: Geo.open_node },
          { command: Geo.node_animated_part, args:[Geo.LAYER_ALPHA, 0, 0, 0, butterfly_seg3_dl_030054A0],},
          { command: Geo.open_node },
            { command: Geo.node_animated_part, args:[Geo.LAYER_OPAQUE, 0, 0, 0, null],},
          { command: Geo.close_node },
        { command: Geo.close_node },
      { command: Geo.close_node },
    { command: Geo.close_node },
  { command: Geo.close_node },
  { command: Geo.node_end },
]
