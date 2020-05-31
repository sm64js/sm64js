import * as Macros from "./dynlist_macros"

export const dynlist_mario_master = [
    Macros.StartList(),
    Macros.UseIntId(true),
    Macros.StartGroup(0x3E8),
/*    Macros.JumpToList(dynlist_mario_face),
    Macros.JumpToList(dynlist_mario_eye_right),
    Macros.JumpToList(dynlist_mario_eye_left),
    Macros.JumpToList(dynlist_mario_eyebrow_right),
    Macros.JumpToList(dynlist_mario_eyebrow_left),
    Macros.JumpToList(dynlist_mario_mustache),*/
    Macros.EndGroup(0x3E8),
]