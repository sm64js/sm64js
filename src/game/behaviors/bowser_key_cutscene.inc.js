import * as _Linker from "../../game/Linker"
import { oBowserKeyScale } from "../../include/object_constants"

export const geo_scale_bowser_key = (run, node) => {
    if (run == 1) {
        let obj = gLinker.GeoRenderer.gCurGraphNodeObject.object
        node.next.scale = obj.rawData[oBowserKeyScale]
    }
    return false
}

// void bhv_bowser_key_unlock_door_loop(void) {
//     s32 animTimer;
//     animTimer = o->.gfx.animInfo.animFrame;
//     cur_obj_init_animation_with_sound(0);
//     if (animTimer < 38)
//         o->oBowserKeyScale = 0.0f;
//     else if (animTimer < 49)
//         o->oBowserKeyScale = 0.2f;
//     else if (animTimer < 58)
//         o->oBowserKeyScale = (animTimer - 53) * 0.11875f + 0.2; // 0.11875?
//     else if (animTimer < 59)
//         o->oBowserKeyScale = 1.1f;
//     else if (animTimer < 60)
//         o->oBowserKeyScale = 1.05f;
//     else
//         o->oBowserKeyScale = 1.0f;
//     if (o->oTimer > 150)
//         obj_mark_for_deletion(o);
// }

// void bhv_bowser_key_course_exit_loop(void) {
//     s32 animTimer = o->.gfx.animInfo.animFrame;
//     cur_obj_init_animation_with_sound(1);
//     if (animTimer < 38)
//         o->oBowserKeyScale = 0.2f;
//     else if (animTimer < 52)
//         o->oBowserKeyScale = (animTimer - 42) * 0.042857f + 0.2; // TODO 3/70?
//     else if (animTimer < 94)
//         o->oBowserKeyScale = 0.8f;
//     else if (animTimer < 101)
//         o->oBowserKeyScale = (101 - animTimer) * 0.085714f + 0.2; // TODO 6/70?
//     else
//         o->oBowserKeyScale = 0.2f;
//     if (o->oTimer > 138)
//         obj_mark_for_deletion(o);
// }
