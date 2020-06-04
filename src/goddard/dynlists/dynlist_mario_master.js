import * as Macros from "./dynlist_macros"
import { DynlistProcInstance as Dynlist } from "../DynlistProc"
import { dynlist_mario_face } from "./dynlist_mario_face"
import { dynlist_mario_eye_right, dynlist_mario_eye_left } from "./dynlist_mario_eyes"
import { dynlist_mario_eyebrow_right, dynlist_mario_eyebrow_left, dynlist_mario_mustache } from "./dynlist_mario_eyebrows_mustache"
import { ShapeHelperGlobalsInstance as ShapesGlobals } from "../ShapeHelperGlobals"


export const dynlist_mario_master = [
    Macros.StartList(),
    Macros.UseIntId(true),
    Macros.StartGroup(0x3E8),
    Macros.JumpToList(dynlist_mario_face),
    Macros.JumpToList(dynlist_mario_eye_right),
    Macros.JumpToList(dynlist_mario_eye_left),
    Macros.JumpToList(dynlist_mario_eyebrow_right),
    Macros.JumpToList(dynlist_mario_eyebrow_left),
    Macros.JumpToList(dynlist_mario_mustache),
    Macros.EndGroup(0x3E8),
    Macros.MakeDynObj(Dynlist.D_LIGHT, 0xE4),
    Macros.SetId(1),
    Macros.SetDiffuse(1.0, 1.0, 1.0),
    Macros.SetFlag(0x20),
    Macros.SetShapePtrPtr(ShapesGlobals.gShape.silverStarPtr),
]