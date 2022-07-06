import { dl_draw_text_bg_box, dl_ia_text_begin, dl_ia_text_end, dl_ia_text_tex_settings, dl_rgba16_load_tex_block, dl_rgba16_text_begin, dl_rgba16_text_end, main_credits_font_lut, main_font_lut, main_hud_lut } from "../common_gfx/segment2"
import * as MathUtil from "../engine/math_util"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../include/config"
import * as Gbi from "../include/gbi"
import { menu_font_lut, menu_hud_lut } from "../levels/menu/leveldata"
import { AreaInstance as Area} from "./Area"
import { GameInstance as Game } from "./Game"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { DialogIdInstance as DialogId, LANGUAGE_ARRAY } from "../include/dialog_ids"
import { gGlobalSoundSource, play_sound } from "../audio/external"
import { SOUND_MENU_PAUSE, SOUND_MENU_PAUSE_2 } from "../include/sounds"
import { COURSE_BONUS_STAGES, COURSE_MAX, COURSE_MIN, COURSE_NONE, COURSE_NUM_TO_INDEX, COURSE_STAGES_MAX } from "../levels/course_defines"
import { ACT_FLAG_PAUSE_EXIT } from "./Mario"
import { gLastCompletedCourseNum, save_file_get_course_star_count, save_file_get_star_flags } from "./SaveFile"
import { GFX_DIMENSIONS_ASPECT_RATIO, GFX_DIMENSIONS_FROM_LEFT_EDGE } from "../include/gfx_dimensions"
import { TEXT_COURSE, TEXT_MY_SCORE, TEXT_STAR, TEXT_UNFILLED_STAR } from "../include/text_strings"

export const ASCII_TO_DIALOG = (asc) => {
    return (((asc) >= '0' && (asc) <= '9') ? ((asc) - '0') :
     ((asc) >= 'A' && (asc) <= 'Z') ? ((asc) - 'A' + 0x0A) :
     ((asc) >= 'a' && (asc) <= 'z') ? ((asc) - 'a' + 0x24) : 0x00)
}

export const DIALOG_TYPE_ROTATE = 0  // used in NPCs and level messages
export const DIALOG_TYPE_ZOOM = 1    // used in signposts and wall signs and etc

export const DIALOG_RESPONSE_NONE = 0
export const DIALOG_RESPONSE_YES = 1
export const DIALOG_RESPONSE_NO = 2
export const DIALOG_RESPONSE_NOT_DEFINED = 3

export const DIALOG_STATE_OPENING = 0
export const DIALOG_STATE_VERTICAL = 1
export const DIALOG_STATE_HORIZONTAL = 2
export const DIALOG_STATE_CLOSING = 3

export const DEFAULT_DIALOG_BOX_ANGLE = 90.0
export const DEFAULT_DIALOG_BOX_SCALE = 19.0

export const MENU_MTX_PUSH = 1
export const MENU_MTX_NOPUSH = 2

export const TEXT_THE_RAW = [ASCII_TO_DIALOG('t'), ASCII_TO_DIALOG('h'), ASCII_TO_DIALOG('e'), 0x00]
export const TEXT_YOU_RAW = [ASCII_TO_DIALOG('y'), ASCII_TO_DIALOG('o'), ASCII_TO_DIALOG('u'), 0x00]

export const MAX_STRING_WIDTH = 16

export const HUD_LUT_JPMENU = 1
export const HUD_LUT_GLOBAL = 1

export const X_VAL1 = -7.0
export const Y_VAL1 = 5.0
export const Y_VAL2 = 5.0

export const CAM_SELECTION_MARIO = 1
export const CAM_SELECTION_FIXED = 2

export const TXT_COURSE_X      = 63
export const TXT_STAR_X        = 98
export const ACT_NAME_X        = 116
export const LVL_NAME_X        = 117
export const SECRET_LVL_NAME_X = 94
export const MYSCORE_X         = 62

export const CRS_NUM_X1 = 100

// move these to a seperate file if needed
export const seg2_course_name_table = new Array(0)
export const seg2_act_name_table = new Array(0)
export const seg2_dialog_table = new Array(0)

class IngameMenu {
    constructor() {
        this.gDialogCharWidths = [
            7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  6,  6,  6,  6,  6,  6,
            6,  6,  5,  6,  6,  5,  8,  8,  6,  6,  6,  6,  6,  5,  6,  6,
            8,  7,  6,  6,  6,  5,  5,  6,  5,  5,  6,  5,  4,  5,  5,  3,
            7,  5,  5,  5,  6,  5,  5,  5,  5,  5,  7,  7,  5,  5,  4,  4,
            8,  6,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            8,  8,  8,  8,  7,  7,  6,  7,  7,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  6,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            7,  5, 10,  5,  9,  8,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            0,  0,  5,  7,  7,  6,  6,  8,  0,  8, 10,  6,  4, 10,  0,  0
        ]

        this.DIALOG_MARK_NONE = 0
        this.DIALOG_MARK_DAKUTEN = 1,
        this.DIALOG_MARK_HANDAKUTEN = 2
        this.DIALOG_CHAR_SLASH                 = 0xD0
        this.DIALOG_CHAR_MULTI_THE             = 0xD1 // 'the'
        this.DIALOG_CHAR_MULTI_YOU             = 0xD2 // 'you'
        this.DIALOG_CHAR_PERIOD                = 0x6E
        this.DIALOG_CHAR_COMMA                 = 0x6F
        this.DIALOG_CHAR_SPACE                 = 0x9E
        this.DIALOG_CHAR_STAR_COUNT            = 0xE0 // number of stars
        this.DIALOG_CHAR_UMLAUT                = 0xE9
        this.DIALOG_CHAR_MARK_START            = 0xEF
        this.DIALOG_CHAR_DAKUTEN               = 0xEF + this.DIALOG_MARK_DAKUTEN
        this.DIALOG_CHAR_PERIOD_OR_HANDAKUTEN  = 0xEF + this.DIALOG_MARK_HANDAKUTEN
        this.DIALOG_CHAR_STAR_FILLED           = 0xFA
        this.DIALOG_CHAR_STAR_OPEN             = 0xFD
        this.DIALOG_CHAR_NEWLINE               = 0xFE
        this.DIALOG_CHAR_TERMINATOR            = 0xFF
        this.GLOBAL_CHAR_SPACE                 = 0x9E
        this.GLOBAL_CHAR_TERMINATOR            = 0xFF

        this.strPos = 0
        this.lineNum = 1

        this.MultiTextEntry = {
            length,
            str: new Array(4)
        }

        this.MultiStringIDs = {
            STRING_THE: 0,
            STRING_YOU: 1
        }

        this.CHAR_WIDTH_SPACE   = this.gDialogCharWidths[this.DIALOG_CHAR_SPACE]
        this.CHAR_WIDTH_DEFAULT = this.gDialogCharWidths[this.MultiTextEntry.str[this.strPos]]

        this.gDialogColorFadeTimer
        this.gLastDialogLineNum
        this.gDialogVariable
        this.gDialogTextAlpha

        this.gDialogID = -1
        this.gDialogVariable = 0
        this.gDialogBoxType = 0
        this.gDialogBoxState = DIALOG_STATE_OPENING
        this.gDialogBoxScale = DEFAULT_DIALOG_BOX_SCALE
        this.gDialogBoxOpenTimer = DEFAULT_DIALOG_BOX_ANGLE
        this.gDialogLineNum = 1
        this.gDialogCourseActNum = 1

        this.gDialogCameraAngleIndex = CAM_SELECTION_MARIO

        this.MENU_MODE_NONE = -1
        this.MENU_MODE_UNUSED_0 = 0
        this.MENU_MODE_RENDER_PAUSE_SCREEN = 1
        this.MENU_MODE_RENDER_COURSE_COMPLETE_SCREEN = 2
        this.MENU_MODE_UNUSED_3 = 3

        this.gMenuMode = this.MENU_MODE_NONE
    }

    // This is probably incorrect. I'm not sure what kind of identity matrix should be created here

    create_dl_identity_matrix() {
        const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.mtxf_identity(matrix)

        Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
        Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)

    }

    create_dl_translation_matrix(pushOp, x, y, z) {
        const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.guTranslate(matrix, x, y, z)

        if (pushOp == MENU_MTX_PUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        } else if (pushOp == MENU_MTX_NOPUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        }
    }

    create_dl_rotation_matrix(pushOp, a, x, y, z) {
        const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.guTranslate(matrix, a, x, y, z)

        if (pushOp == MENU_MTX_PUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        } else if (pushOp == MENU_MTX_NOPUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        }
    }

    create_dl_scale_matrix(pushOp, x, y, z) {
        const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.guScale(matrix, x, y, z)

        if (pushOp == MENU_MTX_PUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        } else if (pushOp == MENU_MTX_NOPUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        }
    }

    create_dl_ortho_matrix() {
        const matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

        this.create_dl_identity_matrix()

        MathUtil.guOrtho(matrix, 0.0, SCREEN_WIDTH, 0.0, SCREEN_HEIGHT, -10.0, 10.0, 1.0)

        // Should produce G_RDPHALF_1 in Fast3D
        Gbi.gSPPerspNormalize(Game.gDisplayList, 0xFFFF);

        Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
    }

    render_generic_char(c) {
        this.fontLUT = main_font_lut
        this.packedTexture = this.fontLUT[c]

        Gbi.gDPPipeSync(Game.gDisplayList)
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, this.packedTexture)
        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_tex_settings)
    }

    render_multi_text_string(multiTextID) {
        this.textLengths = [
            {length: 3, str: [TEXT_THE_RAW]},
            {length: 3, str: [TEXT_YOU_RAW]}
        ]

        for (let i = 0; i < this.textLengths[multiTextID].length; i++) {
            this.render_generic_char(this.textLengths[multiTextID].str[i])
            this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[this.textLengths[multiTextID].str[i]], 0.0, 0.0)
        }
    }

    /**
     * Prints a generic white string.
     * In JP/EU a IA1 texture is used but in US a IA4 texture is used.
     */
    print_generic_string(x, y, str) {
        this.create_dl_translation_matrix(MENU_MTX_PUSH, x, y, 0.0)
        this.mark = DIALOG_RESPONSE_NONE

        while (str[this.strPos] != this.DIALOG_CHAR_TERMINATOR) {
            switch (str[this.strPos]) {
                case this.DIALOG_CHAR_DAKUTEN:
                    this.mark = this.DIALOG_CHAR_DAKUTEN
                    break
                case this.DIALOG_CHAR_PERIOD_OR_HANDAKUTEN:
                    this.mark = DIALOG_MARK_HANDAKUTEN
                    break
                case this.DIALOG_CHAR_NEWLINE:
                    Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
                    this.create_dl_translation_matrix(MENU_MTX_PUSH, x, y - (this.lineNum * MAX_STRING_WIDTH), 0.0)
                    lineNum++
                    break
                case this.DIALOG_CHAR_PERIOD:
                    this.create_dl_translation_matrix(MENU_MTX_PUSH, -2.0, -5.0, 0.0)
                    this.render_generic_char(this.DIALOG_CHAR_PERIOD_OR_HANDAKUTEN)
                    Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW)
                    break
                case this.DIALOG_CHAR_SLASH:
                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[this.DIALOG_CHAR_SPACE] * 2, 0.0, 0.0)
                    break
                case this.DIALOG_CHAR_MULTI_THE:
                    this.render_multi_text_string(STRING_THE)
                    break
                case this.DIALOG_CHAR_MULTI_YOU:
                    this.render_multi_text_string(STRING_YOU)
                    break
                case this.DIALOG_CHAR_SPACE:
                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.CHAR_WIDTH_SPACE, 0.0, 0.0)
                    break
                default:
                    this.render_generic_char(str[this.strPos])
                    if (this.mark != DIALOG_MARK_NONE) {
                        this.create_dl_translation_matrix(MENU_MTX_PUSH, 5.0, 5.0, 0.0)
                        this.render_generic_char(this.DIALOG_CHAR_MARK_START + this.mark)
                        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW)
                        mark = DIALOG_MARK_NONE
                    }

                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.CHAR_WIDTH_DEFAULT, 0.0, 0.0)
                    break
            }

            this.strPos++
        }

        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW)
    }
    
    print_hud_lut_string(hudLUT, x, y, str) {
        this.strPos = 0
        this.hudLUT1 = menu_hud_lut
        this.hudLUT2 = main_hud_lut
        this.curX = x
        this.curY = y
        hudLUT == HUD_LUT_JPMENU ? this.xStride = 16 : this.xStride = 12

        while (str[this.strPos] != this.GLOBAL_CHAR_TERMINATOR) {
            switch (str[this.strPos]) {
                case this.GLOBAL_CHAR_SPACE:
                    this.curX += 8
                    break
                default:
                    Gbi.gDPPipeSync(Game.gDisplayList)

                    hudLUT == HUD_LUT_JPMENU ? Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, this.hudLUT1[str[this.strPos]])
                        : Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, this.hudLUT2[str[this.strPos]])
                    
                        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_load_tex_block)
                        Gbi.gSPTextureRectangle(Game.gDisplayList, this.curX << 2, this.curY << 2, (curX + 16) << 2, (curY + 16) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10)

                        this.curX += this.xStride
            }

            this.strPos++
        }
    }

    print_menu_generic_string(x, y, str) {
        this.mark = DIALOG_MARK_NONE
        this.strPos = 0
        this.curX = x
        this.curY = y
        this.fontLUT = menu_font_lut

        while (str[this.strPos] != this.DIALOG_CHAR_TERMINATOR) {
            switch (str[this.strPos]) {
                case this.DIALOG_CHAR_DAKUTEN:
                    this.mark = DIALOG_MARK_DAKUTEN;
                    break;
                case this.DIALOG_CHAR_PERIOD_OR_HANDAKUTEN:
                    mark = DIALOG_MARK_HANDAKUTEN;
                    break;
                case this.DIALOG_CHAR_SPACE:
                    curX += 4;
                    break;
                default:
                    if (mark != this.DIALOG_MARK_NONE) {
                    Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 1, this.fontLUT[this.DIALOG_CHAR_MARK_START + this.mark])
                    Gbi.gDPLoadSync(Game.gDisplayList)
                    Gbi.gDPLoadBlock(Game.gDisplayList, Gbi.G_TX_LOADTILE, 0, 0, 8 * 8 - 1, Gbi.CALC_DXT(8, Gbi.G_IM_SIZ_8b_BYTES))
                    Gbi.gSPTextureRectangle(Game.gDisplayList, (this.curX + 6) << 2, (this.curY - 7) << 2, (this.curX + 6 + 8) << 2, (this.curY - 7 + 8) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10)

                    this.mark = this.DIALOG_MARK_NONE
                    }

                    this.curX += this.gDialogCharWidths[str[this.strPos]]
            }
            this.strPos++
        }
    }

    print_credits_string(x, y, str) {
        this.strPos = 0
        this.fontLUT = main_credits_font_lut
        this.curX = x
        this.curY = y

        Gbi.gDPSetTile(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD)
        Gbi.gDPTileSync(Game.gDisplayList)
        Gbi.gDPSetTile(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 2, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 3, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 3, Gbi.G_TX_NOLOD)
        Gbi.gDPSetTileSize(Game.gDisplayList, Gbi.G_TX_RENDERTILE, 0, 0, (8 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (8 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC)

        while (str[this.strPos] != this.GLOBAL_CHAR_TERMINATOR) {
            switch (str[this.strPos]) {
                case this.GLOBAL_CHAR_SPACE:
                    this.curX += 4
                    break
                default:
                    Gbi.gDPPipeSync(Game.gDisplayList)
                    Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, this.fontLUT[str[this.strPos]])
                    Gbi.gDPLoadSync(Game.gDisplayList)
                    Gbi.gDPLoadBlock(Game.gDisplayList, Gbi.G_TX_LOADTILE, 0, 0, 8 * 8 - 1, Gbi.CALC_DXT(8, Gbi.G_IM_SIZ_16b_BYTES))
                    Gbi.gSPTextureRectangle(Game.gDisplayList, this.curX << 2, this.curY << 2, (this.curX + 8) << 2, (this.curY) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10)
                    this.curX += 7
                    break
            }
            this.strPos++
        }
    }

    render_dialog_box_type(dialog, linesPerBox) {
        this.create_dl_translation_matrix(MENU_MTX_NOPUSH, dialog.leftOffset, dialog.width, 0)

        switch (this.gDialogBoxType) {
            case DIALOG_TYPE_ROTATE: // Renders a dialog black box with zoom and rotation
                if (this.gDialogBoxState == DIALOG_STATE_OPENING || this.gDialogBoxState == DIALOG_STATE_CLOSING) {
                    this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 1.0 / this.gDialogBoxScale, 1.0 / this.gDialogBoxScale, 1.0)
                    // speed -> angle
                    this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, this.gDialogBoxOpenTimer * 4.0, 0, 0, 1.0)
                }
                Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, 150)
                break
            case DIALOG_TYPE_ZOOM: // Renders a dialog white box with zoom
                if (this.gDialogBoxState == DIALOG_STATE_OPENING || this.gDialogBoxState == DIALOG_STATE_CLOSING) {
                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, 65.0 - (65.0 / this.gDialogBoxScale), (40.0 / this.gDialogBoxScale) - 40, 0)
                    this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 1.0 / this.gDialogBoxScale, 1.0 / this.gDialogBoxScale, 1.0)
                }
                Gbi.gDPSetEnvColor(gDisplayList, 255, 255, 255, 150)
                break
        }

        this.create_dl_translation_matrix(MENU_MTX_PUSH, X_VAL1, Y_VAL1, 0)
        this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 1.1, (linesPerBox / Y_VAL2) + 0.1, 1.0)

        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_text_bg_box)
        Gbi.gSPPopMatrix(Game.gDisplayList, 255, 255, 255, 150)
    }

    get_dialog_id() {
        return this.gDialogID
    }

    create_dialog_box(dialog) {
        if (this.gDialogID == -1) {
            this.gDialogID = dialog
            this.gDialogBoxType = DIALOG_TYPE_ROTATE
        }
    }

    create_dialog_box_with_var(dialog, dialogVar) {
        if (this.gDialogID == -1) {
            this.gDialogID = dialog;
            this.gDialogVariable = dialogVar
            this.gDialogBoxType = DIALOG_TYPE_ROTATE
        }
    }

    create_dialog_inverted_box(dialog) {
        if (this.gDialogID == -1) {
            this.gDialogID = dialog
            this.gDialogBoxType = DIALOG_TYPE_ZOOM
        }
    }

    change_dialog_camera_angle() {
        // waiting on Agent X
        //
        // if (cam_select_alt_mode(0) == CAM_SELECTION_MARIO) {
            this.gDialogCameraAngleIndex = CAM_SELECTION_MARIO
        // } else {
        //     gDialogCameraAngleIndex = CAM_SELECTION_FIXED;
        // }
    }

    shade_screen() {
        this.create_dl_translation_matrix(MENU_MTX_PUSH, GFX_DIMENSIONS_FROM_LEFT_EDGE(0), SCREEN_HEIGHT, 0)

        // This is a bit weird. It reuses the dialog text box (width 130, height -80),
        // so scale to at least fit the screen. (WIDESCREEN OPTION)
        // this.create_dl_scale_matrix(MENU_MTX_NOPUSH, GFX_DIMENSIONS_ASPECT_RATIO * SCREEN_HEIGHT / 130.0, 3.0, 1.0)
        this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 2.6, 3.4, 1.0)

        Gbi.gDPSetEnvColor(gDisplayList, 0, 0, 0, 110)
        Gbi.gSPDisplayList(gDisplayList, dl_draw_text_bg_box)
        Gbi.gSPPopMatrix(gDisplayList, Gbi.G_MTX_MODELVIEW)
    }

    render_pause_my_score_coins() {
        this.textCourse = [ TEXT_COURSE ]
        this.textMyScore = [ TEXT_MY_SCORE ]
        this.textStar = [ TEXT_STAR ]
        this.textUnfilledStar = [ TEXT_UNFILLED_STAR ]
        this.strCourseNum = new Array(4)
        this.courseNameTbl = seg2_course_name_table
        this.courseName = seg2_act_name_table
        this.actNameTbl
        this.actName
        this.courseIndex = COURSE_NUM_TO_INDEX(Area.gCurrCourseNum)
        this.starFlags = save_file_get_star_flags(Area.gCurrSaveFileNum - 1, COURSE_NUM_TO_INDEX(Area.gCurrCourseNum))

        Gbi.gSPDisplayList(gDisplayList, dl_rgba16_text_begin)
        Gbi.gDPSetEnvColor(gDisplayList, 255, 255, 255, this.gDialogTextAlpha)

        if (this.courseIndex <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX)) {
            // print_hud_my_score_coins(1, gCurrSaveFileNum - 1, this.courseIndex, 178, 103)
            // print_hud_my_score_stars(gCurrSaveFileNum - 1, this.courseIndex, 118, 103)
        }

        Gbi.gSPDisplayList(gDisplayList, dl_rgba16_text_end)
        Gbi.gSPDisplayList(gDisplayList, dl_ia_text_begin)
        Gbi.gDPSetEnvColor(gDisplayList, 255, 255, 255, this.gDialogTextAlpha)

        if (this.courseIndex <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX) && save_file_get_course_star_count(gCurrSaveFileNum - 1, this.courseIndex) != 0) {
            this.print_generic_string(MYSCORE_X, 121, LANGUAGE_ARRAY(this.textMyScore))
        }

        this.courseName = this.courseNameTbl[this.courseIndex]

        if (this.courseIndex <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX)) {
            this.print_generic_string(TXT_COURSE_X, 157, LANGUAGE_ARRAY(this.textMyScore))
            int_to_str(gCurrCourseNum, this.strCourseNum)
            this.print_generic_string(CRS_NUM_X1, 157, this.strCourseNum)

            this.actName = actNameTbl[COURSE_NUM_TO_INDEX(gCurrCourseNum) * 6 + this.gDialogCourseActNum - 1]

            if (this.starFlags & (1 << (this.gDialogCourseActNum - 1))) {
                this.print_generic_string(TXT_STAR_X, 140, this.textStar)
            } else {
                this.print_generic_string(TXT_STAR_X, 140, this.textUnfilledStar)
            }

            this.print_generic_string(ACT_NAME_X, 140, this.actName)
            this.print_generic_string(LVL_NAME_X, 157, this.courseName[3])
        } else {
            this.print_generic_string(SECRET_LVL_NAME_X, 157, this.courseName[3])
        }
        
        Gbi.gSPDisplayList(gDisplayList, dl_ia_text_end)
    }

    highlight_last_course_complete_stars() {
        this.doneCourseIndex

        if (gLastCompletedCourseNum == COURSE_NONE) {
            this.doneCourseIndex = 0
        } else {
            this.doneCourseIndex = COURSE_NUM_TO_INDEX(gLastCompletedCourseNum)

            if (this.doneCourseIndex >= COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES)) {
                this.doneCourseIndex = COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES)
            }
        }

        this.gDialogLineNum = this.doneCourseIndex
    }

    render_pause_courses_and_castle() {
        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]

        switch (this.gDialogBoxState) {
            case DIALOG_STATE_OPENING:
            this.gDialogLineNum = Area.MENU_OPT_DEFAULT
            this.gDialogTextAlpha = 0
            LevelUpdate.level_set_transition(-1, null)
            play_sound(SOUND_MENU_PAUSE, gGlobalSoundSource)

            if (Area.gCurrCourseNum >= COURSE_MIN && Area.gCurrCourseNum <= COURSE_MAX) {
                change_dialog_camera_angle()
                this.gDialogBoxState = DIALOG_STATE_VERTICAL
            } else {
                highlight_last_course_complete_stars()
                this.gDialogBoxState = DIALOG_STATE_HORIZONTAL
            }
            break
            
            case DIALOG_STATE_VERTICAL:
                shade_screen()
                // render_pause_my_score_coins()
                // render_pause_red_coins()

                if (gMarioStates[0].action & ACT_FLAG_PAUSE_EXIT) {
                    // render_pause_course_options(99, 93, gDialogLineNum, 15)
                }

                if (Game.gPlayer3Controller.buttonPressed & A_BUTTON || Game.gPlayer3Controller.buttonPressed & START_BUTTON) {
                    LevelUpdate.level_set_transition(0, null)
                    play_sound(SOUND_MENU_PAUSE_2, gGlobalSoundSource)
                    this.gDialogBoxState = DIALOG_STATE_OPENING
                    this.gMenuMode = this.MENU_MODE_NONE

                    if (this.gDialogLineNum == Area.MENU_OPT_EXIT_COURSE) {
                        this.index = this.gDialogLineNum
                    } else {
                        this.index = MENU_OPT_DEFAULT
                    }

                    return this.index
                }
            
                break
            case DIALOG_STATE_HORIZONTAL:
                // shade_screen()
                // print_hud_pause_colorful_str()
                // render_pause_castle_menu_box(160, 143)
                // render_pause_castle_main_strings(104, 60)

                if (Game.gPlayer3Controller.buttonPressed & A_BUTTON || Game.gPlayer3Controller.buttonPressed & START_BUTTON) {
                    LevelUpdate.level_set_transition(0, null)
                    play_sound(SOUND_MENU_PAUSE_2, gGlobalSoundSource)
                    this.gDialogBoxState = DIALOG_STATE_OPENING
                    this.gMenuMode = this.MENU_MODE_NONE

                    return MENU_OPT_DEFAULT
                }
                break
        }

        if (this.gDialogTextAlpha < 250) {
            this.gDialogTextAlpha += 25
        }

        return this.MENU_OPT_NONE
    }

    // END GOAL!
    render_menu_and_dialogs() {
        this.index = Area.MENU_OPT_NONE

        this.create_dl_ortho_matrix()

        if (gMenuMode != this.MENU_MODE_NONE) {
            switch (gMenuMode) {
                case this.MENU_MODE_UNUSED_0:
                    index = render_pause_courses_and_castle();
                    break;
                case this.MENU_MODE_RENDER_PAUSE_SCREEN:
                    //index = render_pause_courses_and_castle();
                    break;
                case this.MENU_MODE_RENDER_COURSE_COMPLETE_SCREEN:
                    //index = render_course_complete_screen();
                    break;
                case this.MENU_MODE_UNUSED_3:
                    //index = render_course_complete_screen();
                    break;
            }

            this.gDialogColorFadeTimer += 0x1000
        } else if (this.gDialogID != DialogId.DIALOG_NONE) {
            // The Peach "Dear Mario" message needs to be repositioned separately
            if (this.gDialogID == DialogId.DIALOG_020) {
                // print_peach_letter_message();
                return index;
            }

            // render_dialog_entries()
            this.gDialogColorFadeTimer += 0x1000
        }
    }
}

export const IngameMenuInstance = new IngameMenu()