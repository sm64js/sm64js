/**
 * Behavior for bhvMerryGoRound.
 * This is the merry-go-round in BBH.
 */

import { play_sound, gGlobalSoundSource, play_secondary_music, func_80321080 } from "../../audio/external"
import {
    oPosX, oPosY, oPosZ, BBH_DYNAMIC_SURFACE_ROOM, oMerryGoRoundMarioIsOutside,
    oAngleVelYaw, oFaceAngleYaw, oMoveAngleYaw, oMerryGoRoundStopped, BBH_OUTSIDE_ROOM,
    BBH_NEAR_MERRY_GO_ROUND_ROOM, oMerryGoRoundMusicShouldPlay
} from "../../include/object_constants"
import { SEQ_EVENT_MERRY_GO_ROUND } from "../../include/seq_ids"
import { SOUND_AIR_HOWLING_WIND, SOUND_ENV_MERRY_GO_ROUND_CREAKING } from "../../include/sounds"
import { SURFACE_MGR_MUSIC } from "../../include/surface_terrains"
import { cur_obj_is_mario_on_platform } from "../ObjectHelpers"
import { cur_obj_play_sound_1 } from "../SpawnSound"

/**
 * This function handles the merry-go-round's music.
 * It starts the music when Mario enters the room around the
 * merry-go-round's enclosure, and ends the music when he's neither
 * in the enclosure nor in the room around it.
 */

const handle_merry_go_round_music = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    const gMarioCurrentRoom = gLinker.ObjectListProcessor.gMarioCurrentRoom
    // If the music should play, play it and check whether it still should.
    // Otherwise, don't play it and check whether it should.
    if (o.rawData[oMerryGoRoundMusicShouldPlay] == false) {
        if (gMarioCurrentRoom == BBH_NEAR_MERRY_GO_ROUND_ROOM) {
            // Play the merry-go-round and BBH music at the same time
            play_secondary_music(SEQ_EVENT_MERRY_GO_ROUND, 45, 20, 200)
            // Set to TRUE
            o.rawData[oMerryGoRoundMusicShouldPlay]++
        }
    } else {
        let marioFloor = {}
        let marioFloorType

        let floorWrapper = {floor: marioFloor}
        gLinker.SurfaceCollision.find_floor(gMarioObject.rawData[oPosX], gMarioObject.rawData[oPosY], gMarioObject.rawData[oPosZ], marioFloor)
        marioFloor = floorWrapper.floor

        if (marioFloor == null) {
            marioFloorType = 0
        } else {
            marioFloorType = marioFloor.type
        }

        // All floors in the merry-go-round's enclosure have surface type 0x1A.
        // The cur_obj_is_mario_on_platform check is redundant since the merry-go-round
        // has surface type 0x1A, so Mario cannot be on the merry-go-round
        // without being on a floor with surface type 0x1A (SURFACE_MGR_MUSIC).
        if (cur_obj_is_mario_on_platform() || marioFloorType == SURFACE_MGR_MUSIC) {
            // If Mario is in the merry-go-round's enclosure, play only the merry-go-round music.
            play_secondary_music(SEQ_EVENT_MERRY_GO_ROUND, 0, 78, 50)
            gLinker.ObjectListProcessor.gMarioOnMerryGoRound = true
        } else {
            // If Mario is not in the merry-go-round's enclosure,
            // i.e. he's around it, play both the merry-go-round music and the BBH music.
            play_secondary_music(SEQ_EVENT_MERRY_GO_ROUND, 45, 20, 200)
            gLinker.ObjectListProcessor.gMarioOnMerryGoRound = false
        }

        // If Mario is not in the merry-go-round's area of the basement anymore,
        // stop playing the music.
        // If he is, play the creaking sound.
        if (gMarioCurrentRoom != BBH_DYNAMIC_SURFACE_ROOM
            && gMarioCurrentRoom != BBH_NEAR_MERRY_GO_ROUND_ROOM) {
                func_80321080(300)
                o.rawData[oMerryGoRoundMusicShouldPlay] = false
        } else {
            cur_obj_play_sound_1(SOUND_ENV_MERRY_GO_ROUND_CREAKING)
        }
    }
}

/**
 * Merry-go-round update function.
 */
export const bhv_merry_go_round_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioCurrentRoom = gLinker.ObjectListProcessor.gMarioCurrentRoom
    
    // Surprisingly, the merry-go-round is what's responsible
    // for playing the howling wind sound in BBH.
    if (!o.rawData[oMerryGoRoundMarioIsOutside]) {
        if (gMarioCurrentRoom == BBH_OUTSIDE_ROOM) {
            // Set to TRUE
            o.rawData[oMerryGoRoundMarioIsOutside]++
        }
    } else {
        play_sound(SOUND_AIR_HOWLING_WIND, gGlobalSoundSource)

        // There are objects outside BBH, such as corkboxes.
        // The howling wind should not stop when Mario stands on a cork box.
        //! @bug Interestingly, this means if Mario goes from outside
        // to a dynamic surface *inside* the mansion in a single frame,
        // the howling wind music will still play.
        if (gMarioCurrentRoom != BBH_OUTSIDE_ROOM && gMarioCurrentRoom != BBH_DYNAMIC_SURFACE_ROOM) {
            o.rawData[oMerryGoRoundMarioIsOutside] = false
        }
    }
    
    // Rotate the merry-go-round and play appropriate music if it's not stopped.
    if (!o.rawData[oMerryGoRoundStopped]) {
        o.rawData[oAngleVelYaw] = 0x80
        o.rawData[oMoveAngleYaw] += o.rawData[oAngleVelYaw]
        o.rawData[oFaceAngleYaw] += o.rawData[oAngleVelYaw]
        handle_merry_go_round_music()
    } else {
        o.rawData[oAngleVelYaw] = 0
        func_80321080(300)
    }
}

gLinker.bhv_merry_go_round_loop = bhv_merry_go_round_loop