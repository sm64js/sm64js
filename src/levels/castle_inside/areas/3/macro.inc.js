// Castle Inside

import {
    MACRO_OBJECT_WITH_BEH_PARAM, MACRO_OBJECT, MACRO_OBJECT_END
} from "../../../../game/MacroSpecialObjects"

import { MacroObjectPresets } from "../../../../include/macro_presets"
const P = MacroObjectPresets

import { DialogTexts } from "../../../../text/us/dialogs"
const D = DialogTexts

// 0x070777EC - 0x0707782A
export const inside_castle_seg7_area_3_macro_objs = [
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_sign_on_wall,       /*yaw*/   0, /*pos*/  6400, -1178, -1270, /*behParam*/ D.DIALOG_077),
    MACRO_OBJECT(/*preset*/ P.macro_hidden_1up_trigger, /*yaw*/   0, /*pos*/  2130, -2508,  -946),
    MACRO_OBJECT(/*preset*/ P.macro_hidden_1up_trigger, /*yaw*/   0, /*pos*/  2130, -2508,   -92),
    MACRO_OBJECT(/*preset*/ P.macro_hidden_1up_trigger, /*yaw*/   0, /*pos*/  3515, -2508,  -946),
    MACRO_OBJECT(/*preset*/ P.macro_hidden_1up_trigger, /*yaw*/   0, /*pos*/  3515, -2508,   -92),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_hidden_1up,         /*yaw*/   0, /*pos*/  2861, -2508,  -515, /*behParam*/ 4),
    MACRO_OBJECT_END(),
];

// 1621007118 - 2021-05-15 13:16:04 -0400
