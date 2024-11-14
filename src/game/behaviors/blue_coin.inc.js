/**
 * Behavior for bhvHiddenBlueCoin and bhvBlueCoinSwitch.
 * bhvHiddenBlueCoin are the stationary blue coins that appear when
 * you press a blue coin switch (a.k.a. bhvBlueCoinSwitch).
 */

import { gGlobalSoundSource, play_sound } from "../../audio/external"
import { MODEL_SPARKLES } from "../../include/model_ids"
import { BLUE_COIN_SWITCH_ACT_IDLE, BLUE_COIN_SWITCH_ACT_RECEDING, BLUE_COIN_SWITCH_ACT_TICKING, HIDDEN_BLUE_COIN_ACT_ACTIVE, HIDDEN_BLUE_COIN_ACT_INACTIVE, HIDDEN_BLUE_COIN_ACT_WAITING, oAction, oGravity, oHiddenBlueCoinSwitch, oInteractStatus, oPosY, oTimer, oVelY } from "../../include/object_constants"
import { SOUND_GENERAL2_SWITCH_TICK_FAST, SOUND_GENERAL2_SWITCH_TICK_SLOW, SOUND_GENERAL_SWITCH_DOOR_OPEN } from "../../include/sounds"
import { spawn_mist_particles_variable } from "../BehaviorActions"
import { bhvBlueCoinSwitch, bhvGoldenCoinSparkles, bhvHiddenBlueCoin } from "../BehaviorData"
import { INT_STATUS_INTERACTED } from "../Interaction"
import { ACT_GROUND_POUND_LAND } from "../Mario"
import { cur_obj_become_intangible, cur_obj_become_tangible, cur_obj_disable_rendering, cur_obj_enable_rendering, cur_obj_hide, cur_obj_move_using_fvel_and_gravity, cur_obj_nearest_object_with_behavior, cur_obj_scale, cur_obj_wait_then_blink, obj_mark_for_deletion, spawn_object } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"

/**
 * Update function for bhvHiddenBlueCoin.
 */
export const bhv_hidden_blue_coin_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    switch (o.rawData[oAction]) {
        case HIDDEN_BLUE_COIN_ACT_INACTIVE:
            cur_obj_disable_rendering()
            cur_obj_become_intangible()

            o.rawData[oHiddenBlueCoinSwitch] = cur_obj_nearest_object_with_behavior(o, bhvBlueCoinSwitch)

            if (o.rawData[oHiddenBlueCoinSwitch] != null) {
                o.rawData[oAction]++
            }

            break
        
        case HIDDEN_BLUE_COIN_ACT_WAITING:
            // const blueCoinSwitch = o.rawData[oHiddenBlueCoinSwitch]

            if (o.rawData[oHiddenBlueCoinSwitch].rawData[oAction] == BLUE_COIN_SWITCH_ACT_TICKING) {
                o.rawData[oAction]++
            }

            break
        
        case HIDDEN_BLUE_COIN_ACT_ACTIVE:
            cur_obj_enable_rendering()
            cur_obj_become_tangible()

            if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED) {
                spawn_object(o, MODEL_SPARKLES, bhvGoldenCoinSparkles)
                obj_mark_for_deletion(o)
            }

            if (cur_obj_wait_then_blink(200, 20)) {
                obj_mark_for_deletion(o)
            }

            break
    }

    o.rawData[oInteractStatus] = 0
}

/**
 * Update function for bhvBlueCoinSwitch.
 */
export const bhv_blue_coin_switch_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

    cur_obj_scale(3.0)

    switch (o.rawData[oAction]) {
        case BLUE_COIN_SWITCH_ACT_IDLE:
            if (gMarioObject.platform == o) {
                if (gMarioStates[0].action == ACT_GROUND_POUND_LAND) {
                    o.rawData[oAction]++
                    o.rawData[oVelY] = -20.0
                    o.rawData[oGravity] = 0.0

                    cur_obj_play_sound_2(SOUND_GENERAL_SWITCH_DOOR_OPEN)
                }
            }

            gLinker.SurfaceLoad.load_object_collision_model()

            break
        
        case BLUE_COIN_SWITCH_ACT_RECEDING:
            if (o.rawData[oTimer] > 5) {
                cur_obj_hide()

                o.rawData[oAction]++
                o.rawData[oPosY] = gMarioObject.rawData[oPosY] - 40.0

                spawn_mist_particles_variable(0, 0, 46.0)
            } else {
                gLinker.SurfaceLoad.load_object_collision_model()
                cur_obj_move_using_fvel_and_gravity()
            }
        
        case BLUE_COIN_SWITCH_ACT_TICKING:
            if (o.rawData[oTimer] < 200) {
                play_sound(SOUND_GENERAL2_SWITCH_TICK_FAST, gGlobalSoundSource)
            } else {
                play_sound(SOUND_GENERAL2_SWITCH_TICK_SLOW, gGlobalSoundSource)
            }

            if (cur_obj_nearest_object_with_behavior(o, bhvHiddenBlueCoin) == null || o.rawData[oTimer] > 240) {
                obj_mark_for_deletion(o)
            }

            break
    }
}

gLinker.bhv_hidden_blue_coin_loop = bhv_hidden_blue_coin_loop
gLinker.bhv_blue_coin_switch_loop = bhv_blue_coin_switch_loop