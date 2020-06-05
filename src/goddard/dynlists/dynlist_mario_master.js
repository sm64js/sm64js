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
    Macros.MakeDynObj(Dynlist.D_LIGHT, 0xE7),
    Macros.SetId(0),
    Macros.SetDiffuse(1.0, 0.0, 0.0),
    Macros.SetShapePtrPtr(ShapesGlobals.gShape.redStarPtr),
    Macros.StartGroup(0x1),
    Macros.MakeDynObj(Dynlist.D_NET, 0xDD),
    Macros.SetType(2),
    Macros.SetFlag(0x2),
    Macros.SetShapePtr(0xE1),
    Macros.SetScale(1.0, 1.0, 1.0),
    Macros.SetRotation(112.873, 0.0, 0.0),
    Macros.SetAttachOffset(0.0, 0.0, -20010.0),
    Macros.MakeNetWithSubGroup(0, 0xDA),
    Macros.AttachTo(0xd, 0xDD),
]