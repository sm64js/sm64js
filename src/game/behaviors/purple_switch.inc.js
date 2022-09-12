import { gGlobalSoundSource, play_sound } from "../../audio/external"
import { MODEL_PURPLE_SWITCH } from "../../include/model_ids"
import { oAction, oBehParams2ndByte, oTimer } from "../../include/object_constants"
import { SOUND_GENERAL2_PURPLE_SWITCH, SOUND_GENERAL2_SWITCH_TICK_FAST, SOUND_GENERAL2_SWITCH_TICK_SLOW } from "../../include/sounds"
import { SHAKE_POS_SMALL } from "../Camera"
import { MARIO_UNKNOWN_13 } from "../Mario"
import { cur_obj_is_mario_on_platform, cur_obj_scale, cur_obj_scale_over_time, cur_obj_set_model, cur_obj_shake_screen, lateral_dist_between_objects } from "../ObjectHelpers"
import { cur_obj_play_sound_2 } from "../SpawnSound"

/**
 * Behavior for bhvFloorSwitchHardcodedModel, bhvFloorSwitchGrills, and
 * bhvFloorSwitchAnimatesObject.
 *
 * This controls the purple switches that Mario can step on to affect parts of
 * the environment.
 */

/* Purple switch */
export const PURPLE_SWITCH_IDLE                      = 0
export const PURPLE_SWITCH_PRESSED                   = 1
export const PURPLE_SWITCH_TICKING                   = 2
export const PURPLE_SWITCH_UNPRESSED                 = 3
export const PURPLE_SWITCH_WAIT_FOR_MARIO_TO_GET_OFF = 4

export const bhv_purple_switch_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

    switch (o.rawData[oAction]) {
        /**
         * Set the switch's model and scale. If Mario is standing near the
         * switch's middle section, transition to the pressed state.
         */
        case PURPLE_SWITCH_IDLE:
            cur_obj_set_model(MODEL_PURPLE_SWITCH)
            cur_obj_scale(1.5)
            if (gMarioObject.platform == o && !(gMarioStates[0].action & MARIO_UNKNOWN_13)) {
                if (lateral_dist_between_objects(o, gMarioObject) < 127.5) {
                    o.rawData[oAction] = PURPLE_SWITCH_PRESSED
                }
            }
            break
        
        /**
         * Collapse the switch downward, play a sound, and shake the screen.
         * Immediately transition to the ticking state.
         */
        case PURPLE_SWITCH_PRESSED:
            cur_obj_scale_over_time(2, 3, 1.5, 0.2)
            if (o.rawData[oTimer] == 3) {
                cur_obj_play_sound_2(SOUND_GENERAL2_PURPLE_SWITCH)
                o.rawData[oAction] = PURPLE_SWITCH_TICKING
                cur_obj_shake_screen(SHAKE_POS_SMALL)
                //queue_rumble_data(5, 80)
            }
            break

        /**
         * Play a continuous ticking sound that gets faster when time is almost
         * up. When time is up, move to a waiting-while-pressed state.
         */
        case PURPLE_SWITCH_TICKING:
            if (o.rawData[oBehParams2ndByte] != 0) {
                if (o.rawData[oBehParams2ndByte] == 1 && gMarioObject.platform != o) {
                    o.rawData[oAction]++
                } else {
                    if (o.rawData[oTimer] < 360) {
                        play_sound(SOUND_GENERAL2_SWITCH_TICK_FAST, gGlobalSoundSource)
                    } else {
                        play_sound(SOUND_GENERAL2_SWITCH_TICK_SLOW, gGlobalSoundSource)
                    }
                    if (o.rawData[oTimer] > 400) {
                        o.rawData[oAction] = PURPLE_SWITCH_WAIT_FOR_MARIO_TO_GET_OFF
                    }
                }
            }
            break

        /**
         * Make the switch look unpressed again, and transition back to the
         * idle state.
         */
        case PURPLE_SWITCH_UNPRESSED:
            cur_obj_scale_over_time(2, 3, 0.2, 1.5)
            if (o.rawData[oTimer] == 3) {
                o.rawData[oAction] = PURPLE_SWITCH_IDLE
            }
            break

        /**
         * Mario is standing on the switch, but time has expired. Wait for
         * him to get off the switch, and when he does so, transition to the
         * unpressed state.
         */
        case PURPLE_SWITCH_WAIT_FOR_MARIO_TO_GET_OFF:
            if (!cur_obj_is_mario_on_platform()) {
                o.rawData[oAction] = PURPLE_SWITCH_UNPRESSED
            }
            break
    }
}

gLinker.bhv_purple_switch_loop = bhv_purple_switch_loop
