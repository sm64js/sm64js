import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"
import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { goomba_seg8_dl_0801D760, goomba_seg8_dl_0801B690, goomba_seg8_dl_0801B5C8, goomba_seg8_dl_0801B5F0, goomba_seg8_dl_0801CE20, goomba_seg8_dl_0801CF78 } from "./model.inc"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"

export const goomba_geo = [
    { command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0x96, 100] },
    { command: Geo.open_node },
        { command: Geo.node_scale, args: [0x00, 16384] },
        { command: Geo.open_node },
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, goomba_seg8_dl_0801D760] }, 
            { command: Geo.open_node },
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null] }, 
                { command: Geo.open_node },
                    { command: Geo.node_billboard },
                    { command: Geo.open_node },
                        { command: Geo.display_list, args: [ Geo.LAYER_ALPHA, goomba_seg8_dl_0801B690 ]},
                    { command: Geo.close_node },
                { command: Geo.close_node },
                { command: Geo.open_node },
                    { command: Geo.node_switch_case, args: [2, geo_switch_anim_state] },
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 48, 0, 0, goomba_seg8_dl_0801B5C8] },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 48, 0, 0, goomba_seg8_dl_0801B5F0] },
                    { command: Geo.close_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -60, -16, 45, null] },
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, goomba_seg8_dl_0801CE20] },
                    { command: Geo.close_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -60, -16, -45, null] },
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, goomba_seg8_dl_0801CF78] },
                    { command: Geo.close_node },
                { command: Geo.close_node },
            { command: Geo.close_node },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]