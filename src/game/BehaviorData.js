import { BehaviorCommandsInstance as BhvCmds } from "../engine/BehaviorCommands"
import { ObjectListProcessorInstance as ObjectListProcessor } from "./ObjectListProcessor"
import { oFlags, oInteractType, oAnimations, OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE, oIntangibleTimer } from "../include/object_constants"
import * as Interact from "./Interaction"
import { bhv_pole_base_loop } from "./behaviors/pole_base.inc"
import { bhv_pole_init, bhv_giant_pole_loop } from "./behaviors/pole.inc"
import { bhv_castle_flag_init } from "./behaviors/bhv_castle_flag_init.inc"
import { castle_grounds_seg7_anims_flags } from "../levels/castle_grounds/areas/1/11/anim.inc"


const OBJ_LIST_PLAYER = 0     //  (0) mario
const OBJ_LIST_UNUSED_1 = 1    //  (1) (unused)
const OBJ_LIST_DESTRUCTIVE = 2 //  (2) things that can be used to destroy other objects, like
//      bob-ombs and corkboxes
const OBJ_LIST_UNUSED_3 = 3   //  (3) (unused)
const OBJ_LIST_GENACTOR = 4   //  (4) general actors. most normal 'enemies' or actors are
//      on this list. (MIPS, bullet bill, bully, etc)
const OBJ_LIST_PUSHABLE = 5   //  (5) pushable actors. This is a group of objects which
//      can push each other around as well as their parent
//      objects. (goombas, koopas, spinies)
const OBJ_LIST_LEVEL = 6     //  (6) level objects. general level objects such as heart, star
const OBJ_LIST_UNUSED_7 = 7  //  (7) (unused)
const OBJ_LIST_DEFAULT = 8     //  (8) default objects. objects that didnt start with a 00
//      command are put here, so this is treated as a default.
const OBJ_LIST_SURFACE = 9     //  (9) surface objects. objects that specifically have surface
//      collision and not object collision. (thwomp, whomp, etc)
const OBJ_LIST_POLELIKE = 10    // (10) polelike objects. objects that attract or otherwise
//      "cling" mario similar to a pole action. (hoot,
//      whirlpool, trees/poles, etc)
const OBJ_LIST_SPAWNER = 11     // (11) spawners
const OBJ_LIST_UNIMPORTANT = 12 // (12) unimportant objects. objects that will not load
//      if there are not enough object slots: they will also
//      be manually unloaded to make room for slots if the list
//      gets exhausted.
const NUM_OBJ_LISTS = 13

export const bhvMario = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_PLAYER } },
    { command: BhvCmds.set_int, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.set_hitbox, args: { radius: 37, height: 160 } },
    { command: BhvCmds.set_interact_type, args: { type: Interact.INTERACT_PLAYER } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: ObjectListProcessor.bhv_mario_update, funcClass: ObjectListProcessor } },
    { command: BhvCmds.end_loop },
]

export const bhvTree = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE } },
    { command: BhvCmds.cyclboard },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_int, args: { field: oInteractType, value: Interact.INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 500 } },
    { command: BhvCmds.set_int, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_pole_base_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvYellowBall = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.cyclboard },
    { command: BhvCmds.break },
]

export const bhvGiantPole = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_int, args: { field: oInteractType, value: Interact.INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 2100 } },
    { command: BhvCmds.set_int, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_giant_pole_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvPoleGrabbing = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_POLELIKE } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.set_int, args: { field: oInteractType, value: Interact.INTERACT_POLE } },
    { command: BhvCmds.set_hitbox, args: { radius: 80, height: 1500 } },
	{ command: BhvCmds.call_native, args: { func: bhv_pole_init } },
    { command: BhvCmds.set_int, args: { field: oIntangibleTimer, value: 0 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: bhv_pole_base_loop } },
    { command: BhvCmds.end_loop },
]

export const bhvStaticObject = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.break },
]

export const bhvCastleFlagWaving = [
    { command: BhvCmds.begin, args: { objListIndex: OBJ_LIST_DEFAULT } },
    { command: BhvCmds.or_int, args: { field: oFlags, value: OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE } },
    { command: BhvCmds.load_animations, args: { field: oAnimations, anims: castle_grounds_seg7_anims_flags } },
    { command: BhvCmds.animate, args: { animIndex: 0 } },
    { command: BhvCmds.call_native, args: { func: bhv_castle_flag_init } },
    { command: BhvCmds.begin_loop },
    { command: BhvCmds.end_loop },
]
