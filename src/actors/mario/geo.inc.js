import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { 
    mario_butt, 
    mario_torso, 
    mario_cap_on_eyes_front,
    mario_cap_on_eyes_half_closed,
    mario_cap_on_eyes_closed,
    mario_left_arm,
    mario_left_forearm_shared_dl,
    mario_left_hand_closed,
    mario_right_arm,
    mario_right_forearm_shared_dl,
    mario_right_hand_closed,
    mario_left_thigh,
    mario_left_leg_shared_dl,
    mario_left_foot,
    mario_right_thigh,
    mario_right_leg_shared_dl,
    mario_right_foot
 } from "./model.inc"
import { MarioMiscInstance as MarioMisc } from "../../game/MarioMisc"

const mario_geo_face_and_wings = [
    { command: Geo.node_rotation, args: [ 0x00, 0, 0, 0] },
    { command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_eyes, MarioMisc] },
    { command: Geo.open_node },
        { command: Geo.display_list, args: [ Geo.LAYER_OPAQUE, mario_cap_on_eyes_front ]},
        { command: Geo.display_list, args: [ Geo.LAYER_OPAQUE, mario_cap_on_eyes_half_closed ]}, 
        { command: Geo.display_list, args: [ Geo.LAYER_OPAQUE, mario_cap_on_eyes_closed ]}, 
    { command: Geo.close_node },
    { command: Geo.return }
]

export const mario_geo = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.node_scale, args: [0x00, 16384] },
    { command: Geo.open_node },
    { command: Geo.open_node },
    //GEO_BRANCH(1, mario_geo_render_body),
        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null] },
        { command: Geo.open_node },
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_butt] },
            { command: Geo.open_node },
                // { command: Geo.node_generated, args: [ 0, geo_move_mario_part_from_parent ] },
                // { command: Geo.node_generated, args: [ 0, geo_mario_tilt_torso ] },
                { command: Geo.node_rotation, args: [ 0x00, 0, 0, 0 ] },
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, 0, 0, mario_torso] },
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 87, 0, 0, null] },
                        { command: Geo.open_node },
                            { command: Geo.branch, args: [ 1, mario_geo_face_and_wings ]},
                        { command: Geo.close_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, -10, 79, null] },  /// open mario left arm
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_left_arm] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_left_forearm_shared_dl] },
                                { command: Geo.open_node },
                                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_left_hand_closed] },
                                { command: Geo.close_node },
                            { command: Geo.close_node },
                        { command: Geo.close_node },    /// close mario left arm
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, -10, -79, null] },  /// open mario left arm
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_right_arm] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_right_forearm_shared_dl] },
                                { command: Geo.open_node },
                                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_right_hand_closed] },
                                { command: Geo.close_node },
                            { command: Geo.close_node },
                        { command: Geo.close_node },    /// close mario left arm
                    { command: Geo.close_node },
                { command: Geo.close_node },
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, 42, null] },  /// open left leg stuff
                { command: Geo.open_node }, 
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_left_thigh] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_left_leg_shared_dl] }, 
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_left_foot] }, 
                        { command: Geo.close_node },
                    { command: Geo.close_node },
                { command: Geo.close_node },  /// end left leg stuff
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, -42, null] },  /// open right leg stuff
                { command: Geo.open_node }, 
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_right_thigh] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_right_leg_shared_dl] }, 
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_right_foot] }, 
                        { command: Geo.close_node },
                    { command: Geo.close_node },
                { command: Geo.close_node },  /// end right leg stuff
            { command: Geo.close_node },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]