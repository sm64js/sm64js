/**
 * Behavior for bhvHauntedBookshelf.
 * This is the bookshelf that recedes after solving the puzzle of the haunted books.
 * Its sole purpose is to recede when its action is set to 1 by a bhvHauntedBookshelfManager.
 */

import { oFaceAngleYaw, oTimer, oHauntedBookshelfShouldOpen, oAction, 
    oPosX, oDistanceToMario, 
    HAUNTED_BOOKSHELF_ACT_IDLE, HAUNTED_BOOKSHELF_ACT_RECEDE
} from "../../include/object_constants"
import { SOUND_ENV_ELEVATOR4_2 } from "../../include/sounds"
import { obj_mark_for_deletion, dist_between_objects } from "../ObjectHelpers"
import { cur_obj_play_sound_1 } from "../SpawnSound"

/**
 * Update function for bhvHauntedBookshelf.
 */
export const bhv_haunted_bookshelf_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject

    // oDistanceToMario is unused by this object.
    // This may have been used for revealing the books when Mario comes near,
    // but in the final game this is done by bhvHauntedBookshelfManager.
    o.rawData[oDistanceToMario] = dist_between_objects(o, gMarioObject)

    o.rawData[oFaceAngleYaw] = 0

    switch (o.rawData[oAction]) {
        case HAUNTED_BOOKSHELF_ACT_IDLE:
            // ???
            if (o.rawData[oTimer] == 0) {
            }

            // This code never runs, since the action is set to 1 directly
            // by bhvHauntedBookshelfManager. Maybe this was
            // intended to be used to set the action instead?
            if (o.rawData[oHauntedBookshelfShouldOpen] != false) {
                o.rawData[oAction]++
            }

            break
        
        case HAUNTED_BOOKSHELF_ACT_RECEDE:
            // Move the bookshelf and play the sound
            o.rawData[oPosX] += 5.0
            cur_obj_play_sound_1(SOUND_ENV_ELEVATOR4_2)

            // Delete the object after 102 frames
            if (o.rawData[oTimer] > 101) {
                obj_mark_for_deletion(o)
            }

            break

        default:
            break
    }
}

gLinker.bhv_haunted_bookshelf_loop = bhv_haunted_bookshelf_loop