import { SEQUENCE_ARGS, SEQ_PLAYER_LEVEL, play_music, play_sound, seq_player_lower_volume, seq_player_unlower_volume } from "../audio/external"
import { dl_draw_text_bg_box, dl_draw_triangle, dl_ia_text_begin, dl_ia_text_end, dl_ia_text_tex_settings, dl_rgba16_load_tex_block, dl_rgba16_text_begin, dl_rgba16_text_end, main_font_lut, main_hud_lut } from "../bin/segment2"
import * as MathUtil from "../engine/math_util"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../include/config"
import * as Gbi from "../include/gbi"
import { SOUND_GENERAL_COLLECT_1UP, SOUND_MENU_CHANGE_SELECT, SOUND_MENU_MESSAGE_APPEAR, SOUND_MENU_MESSAGE_DISAPPEAR, SOUND_MENU_MESSAGE_NEXT_PAGE, SOUND_MENU_PAUSE, SOUND_MENU_PAUSE_2, SOUND_MENU_STAR_SOUND, SOUND_MENU_YOSHI_GAIN_LIVES } from "../include/sounds"
import { menu_font_lut, menu_hud_lut } from "../levels/menu/leveldata"
import { DIALOG_005, DIALOG_009, DIALOG_010, DIALOG_011, DIALOG_012, DIALOG_013, DIALOG_014, DIALOG_017, DIALOG_020, DIALOG_055, DIALOG_114, DIALOG_115, DIALOG_116, DIALOG_117, DIALOG_118, DIALOG_128, DIALOG_150, DIALOG_152, DIALOG_164, DIALOG_NONE, seg2_dialog_table } from "../text/us/dialogs"
import { GameInstance as Game } from "./Game"
import { PrintInstance as Print } from "./Print"
import { gCurrCourseStarFlags, gGotFileCoinHiScore, gLastCompletedCourseNum, gLastCompletedStarNum, save_file_get_course_coin_score, save_file_get_course_star_count, save_file_get_max_coin_score, save_file_get_star_flags } from "./SaveFile"
import { CameraInstance as Camera } from "./Camera"
import { TEXT_CAMERA_ANGLE_R, TEXT_CLEAR, TEXT_COIN, TEXT_CONTINUE, TEXT_CONTINUE_WITHOUT_SAVING, TEXT_COURSE, TEXT_EXIT_COURSE, TEXT_HI_SCORE, TEXT_LAKITU_MARIO, TEXT_LAKITU_STOP, TEXT_MY_SCORE, TEXT_NORMAL_FIXED, TEXT_NORMAL_UPCLOSE, TEXT_PAUSE, TEXT_SAVE_AND_CONTINUE, TEXT_SAVE_AND_QUIT, TEXT_STAR, TEXT_STAR_X, TEXT_UNFILLED_STAR } from "../include/text_strings"
import { seg2_act_name_table, seg2_course_name_table } from "../text/us/courses"
import { COURSE_BITFS, COURSE_BONUS_STAGES, COURSE_NUM_TO_INDEX, COURSE_STAGES_MAX } from "../levels/course_defines"
import { COURSE_BITDW, COURSE_MAX, COURSE_MIN, COURSE_NONE } from "../include/course_table"
import { ACT_FLAG_PAUSE_EXIT } from "./Mario"
import { coin_seg3_dl_03007940, coin_seg3_dl_03007968, coin_seg3_dl_03007990, coin_seg3_dl_030079B8 } from "../actors/coin/model.inc"
import { GFX_DIMENSIONS_FROM_LEFT_EDGE, GFX_DIMENSIONS_FROM_RIGHT_EDGE } from "../include/gfx_dimensions"
import { castle_grounds_seg7_dl_0700EA58 } from "../levels/castle_grounds/areas/1/12/model.inc"
import { castle_grounds_seg7_us_dl_0700F2E8 } from "../levels/castle_grounds/areas/1/13/model.inc"
import { SEQ_EVENT_BOSS } from "../include/seq_ids"

export const ASCII_TO_DIALOG = (asc) => {
    return (((asc) >= '0' && (asc) <= '9') ? ((asc) - '0') :
     ((asc) >= 'A' && (asc) <= 'Z') ? ((asc) - 'A' + 0x0A) :
     ((asc) >= 'a' && (asc) <= 'z') ? ((asc) - 'a' + 0x24) : 0x00)
}

export const DIALOG_RESPONSE_NONE = 0
export const DIALOG_RESPONSE_YES = 1
export const DIALOG_RESPONSE_NO = 2
export const DIALOG_RESPONSE_NOT_DEFINED = 3

export const MENU_MTX_PUSH = 1
export const MENU_MTX_NOPUSH = 2

export const MENU_OPT_NONE = 0;
export const MENU_OPT_1 = 1;
export const MENU_OPT_2 = 2;
export const MENU_OPT_3 = 3;
export const MENU_OPT_DEFAULT = MENU_OPT_1;

export const MENU_OPT_CONTINUE = MENU_OPT_1;
export const MENU_OPT_EXIT_COURSE = MENU_OPT_2;
export const MENU_OPT_CAMERA_ANGLE_R = MENU_OPT_3;

export const MENU_OPT_SAVE_AND_CONTINUE = MENU_OPT_1;
export const MENU_OPT_SAVE_AND_QUIT = MENU_OPT_2;
export const MENU_OPT_CONTINUE_DONT_SAVE = MENU_OPT_3;

export const DIALOG_BOX_ANGLE_DEFAULT = 90.0
export const DIALOG_BOX_SCALE_DEFAULT = 19.0

export const TEXT_THE_RAW = [ASCII_TO_DIALOG('t'), ASCII_TO_DIALOG('h'), ASCII_TO_DIALOG('e'), 0x00]
export const TEXT_YOU_RAW = [ASCII_TO_DIALOG('y'), ASCII_TO_DIALOG('o'), ASCII_TO_DIALOG('u'), 0x00]

export const MAX_STRING_WIDTH = 16

export const HUD_LUT_JPMENU = 1
export const HUD_LUT_GLOBAL = 2

export const DIALOG_MARK_NONE = 0
export const DIALOG_MARK_DAKUTEN = 1
export const DIALOG_MARK_HANDAKUTEN = 2

export const HUD_PRINT_HISCORE = 0
export const HUD_PRINT_CONGRATULATIONS = 1

export const MENU_SCROLL_VERTICAL = 1
export const MENU_SCROLL_HORIZONTAL = 2


export const CAM_SELECTION_MARIO = 1
export const CAM_SELECTION_FIXED = 2

const DIALOG_CHAR_SLASH =                0xD0
const DIALOG_CHAR_MULTI_THE =            0xD1 // 'the'
const DIALOG_CHAR_MULTI_YOU =            0xD2 // 'you'
const DIALOG_CHAR_PERIOD =               0x6E
const DIALOG_CHAR_COMMA =                0x6F
const DIALOG_CHAR_SPACE =                0x9E
const DIALOG_CHAR_STAR_COUNT =           0xE0 // number of stars
const DIALOG_CHAR_UMLAUT =               0xE9
const DIALOG_CHAR_MARK_START =           0xEF
const DIALOG_CHAR_DAKUTEN =              0xEF + DIALOG_MARK_DAKUTEN
const DIALOG_CHAR_PERIOD_OR_HANDAKUTEN = 0xEF + DIALOG_MARK_HANDAKUTEN
const DIALOG_CHAR_STAR_FILLED =          0xFA
const DIALOG_CHAR_STAR_OPEN =            0xFD
const DIALOG_CHAR_NEWLINE =              0xFE
const DIALOG_CHAR_TERMINATOR =           0xFF

const GLOBAL_CHAR_SPACE = 0x9E
const GLOBAL_CHAR_TERMINATOR = 0xFF


const STRING_THE = 0
const STRING_YOU = 1

//// MENU STATES ////
export const MENU_STATE_0 = 0;
export const MENU_STATE_1 = 1;
export const MENU_STATE_2 = 2;
export const MENU_STATE_3 = 3;
export const MENU_STATE_DEFAULT = MENU_STATE_0;

// Dialog
export const MENU_STATE_DIALOG_OPENING = MENU_STATE_0;
export const MENU_STATE_DIALOG_OPEN = MENU_STATE_1;
export const MENU_STATE_DIALOG_SCROLLING = MENU_STATE_2;
export const MENU_STATE_DIALOG_CLOSING = MENU_STATE_3;

// Pause Screen
export const MENU_STATE_PAUSE_SCREEN_OPENING = MENU_STATE_0;
export const MENU_STATE_PAUSE_SCREEN_COURSE = MENU_STATE_1;
export const MENU_STATE_PAUSE_SCREEN_CASTLE = MENU_STATE_2;

// Course Complete Screen
export const MENU_STATE_COURSE_COMPLETE_SCREEN_OPENING = MENU_STATE_0;
export const MENU_STATE_COURSE_COMPLETE_SCREEN_OPEN = MENU_STATE_1;

// MODES //
export const MENU_MODE_NONE = -1;
export const MENU_MODE_UNUSED_0 = 0;
export const MENU_MODE_RENDER_PAUSE_SCREEN = 1;
export const MENU_MODE_RENDER_COURSE_COMPLETE_SCREEN = 2;
export const MENU_MODE_UNUSED_3 = 3;

//// DIALOG STATES ////
export const DIALOG_PAGE_STATE_NONE = 0;
export const DIALOG_PAGE_STATE_SCROLL = 1;
export const DIALOG_PAGE_STATE_END = 2;

//// DIALOG BOX TYPE ////
export const DIALOG_TYPE_ROTATE = 0;
export const DIALOG_TYPE_ZOOM = 1;

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

        this.strPos = 0
        this.lineNum = 1

        this.gMenuTextColorTransTimer = 0;
        this.gLastDialogLineNum = 0;
        this.gDialogVariable = 0;
        this.gMenuTextAlpha = 0;

        this.gCutsceneMsgXOffset = 0;
        this.gCutsceneMsgYOffset = 0;

        this.gMenuHoldKeyIndex = 0;
        this.gMenuHoldKeyTimer = 0;

        this.gCourseCompleteCoinsEqual = false;
        this.gCourseCompleteScreenTimer = 0;
        this.gCourseCompleteCoins = 0;

        this.gHudSymCoin = [ Print.GLYPH_COIN, Print.GLYPH_SPACE ];
        this.gHudSymX = [ Print.GLYPH_MULTIPLY, Print.GLYPH_SPACE ];
        this.gHudFlash = 0;

        this.gMenuState = MENU_STATE_DEFAULT
        this.gMenuMode = MENU_MODE_NONE
        this.gDialogBoxAngle = DIALOG_BOX_ANGLE_DEFAULT;
        this.gDialogBoxScale = DIALOG_BOX_SCALE_DEFAULT;
        this.gDialogScrollOffsetY = 0;
        this.gDialogBoxType = DIALOG_TYPE_ROTATE;
        this.gDialogID = DIALOG_NONE;
        this.gNextDialogPageStartStrIndex = 0;
        this.gDialogPageStartStrIndex = 0;
        this.gMenuLineNum = 1;
        this.gDialogWithChoice = false;
        this.gMenuHoldKeyIndex = 0;
        this.gMenuHoldKeyTimer = 0;
        this.gDialogResponse = DIALOG_RESPONSE_NONE;

        this.gCutsceneMsgFade = 0;
        this.gCutsceneMsgIndex = -1;
        this.gCutsceneMsgDuration = -1;
        this.gCutsceneMsgTimer = 0;
        this.gDialogCameraAngleIndex = CAM_SELECTION_MARIO;
        this.gDialogCourseActNum = 1;
        

        this.gRedCoinsCollected = 0;
    }

    create_dl_identity_matrix() {
        const matrix = [
            [0x00010000, 0x00000000, 0x00000000, 0x00000000],
            [0x00000000, 0x00010000, 0x00000000, 0x00000000],
            [0x00000001, 0x00000000, 0x00000000, 0x00000000],
            [0x00000000, 0x00000001, 0x00000000, 0x00000000]]

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
        let matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.guScale(matrix, x, y, z)

        if (pushOp == MENU_MTX_PUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        } else if (pushOp == MENU_MTX_NOPUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        }
    }

    create_dl_ortho_matrix() {
        const matrix = new Array(4).fill([0, 0, 0, 0])
        this.create_dl_identity_matrix()

        MathUtil.guOrtho(matrix, 0.0, SCREEN_WIDTH, 0.0, SCREEN_HEIGHT, -10.0, 10.0, 1.0)

        // // Should produce G_RDPHALF_1 in Fast3D
        // gSPPerspNormalize(gDisplayListHead++, 0xFFFF);

        Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
    }

    alloc_ia8_text_from_i1(inArr, width, height) {
        let out = new Array(width * height).fill(0);
        let outPos = 0;

        for (let inPos = 0; inPos < (width * height) / 16; inPos++) {
            let bitMask = 0x8000;

            while (bitMask != 0) {
                if (inArr[inPos] & bitMask) out[outPos] = 0xFF;
                else out[outPos] = 0x00;

                bitMask /= 2;
                outPos++;
            }
        }

        return out;
    }

    render_generic_char(c) {
        let fontLUT = main_font_lut
        let packedTexture = fontLUT[c]

        Gbi.gDPPipeSync(Game.gDisplayList)
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, packedTexture)
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
        let strPos = 0
        let lineNum = 1;
        let mark = DIALOG_RESPONSE_NONE

        this.create_dl_translation_matrix(MENU_MTX_PUSH, x, y, 0.0)

        while (str[strPos] != DIALOG_CHAR_TERMINATOR && strPos < str.length) {
            switch (str[strPos]) {
                case DIALOG_CHAR_DAKUTEN:
                    mark = DIALOG_CHAR_DAKUTEN
                    break
                case DIALOG_CHAR_PERIOD_OR_HANDAKUTEN:
                    mark = DIALOG_MARK_HANDAKUTEN
                    break
                case DIALOG_CHAR_NEWLINE:
                    Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
                    this.create_dl_translation_matrix(MENU_MTX_PUSH, x, y - (lineNum * MAX_STRING_WIDTH), 0.0)
                    lineNum++
                    break
                case DIALOG_CHAR_PERIOD:
                    this.create_dl_translation_matrix(MENU_MTX_PUSH, -2.0, -5.0, 0.0)
                    this.render_generic_char(DIALOG_CHAR_PERIOD_OR_HANDAKUTEN)
                    Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW)
                    break
                case DIALOG_CHAR_SLASH:
                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[DIALOG_CHAR_SPACE] * 2, 0.0, 0.0)
                    break
                case DIALOG_CHAR_MULTI_THE:
                    this.render_multi_text_string(STRING_THE)
                    break
                case DIALOG_CHAR_MULTI_YOU:
                    this.render_multi_text_string(STRING_YOU)
                    break
                case DIALOG_CHAR_SPACE:
                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.CHAR_WIDTH_SPACE, 0.0, 0.0)
                    break
                default:
                    this.render_generic_char(str[strPos])
                    if (mark != DIALOG_MARK_NONE) {
                        this.create_dl_translation_matrix(MENU_MTX_PUSH, 5.0, 5.0, 0.0)
                        this.render_generic_char(DIALOG_CHAR_MARK_START + mark)
                        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW)
                        mark = DIALOG_MARK_NONE
                    }

                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.CHAR_WIDTH_DEFAULT, 0.0, 0.0)
                    break
            }

           strPos++
        }

        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW)
    }
    
    print_hud_lut_string(x, y, str) {
        let strPos = 0;
        let hudLUT1 = main_hud_lut;
        let curX = x;
        let curY = y;
        let xStride = 12;

        while (str[strPos] != GLOBAL_CHAR_TERMINATOR) {
            switch (str[strPos]) {
                case GLOBAL_CHAR_SPACE:
                    curX += 8
                    break
                default:
                    Gbi.gDPPipeSync(Game.gDisplayList)

                    Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, hudLUT1[str[strPos]])
                    
                    Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_load_tex_block)
                    Gbi.gSPTextureRectangle(Game.gDisplayList, (curX / 2) << 2, (curY / 2) << 2,
                                                               ((curX + 15) / 2) << 2, ((curY + 15) / 2) << 2,
                                                               Gbi.G_TX_RENDERTILE, 0, 0,
                                                               6 << 10, 7 << 8);

                    curX += xStride
            }

            strPos++
        }
    }

    print_menu_generic_string(x, y, str) {
        let mark = DIALOG_MARK_NONE;
        let strPos = 0;
        let curX = x;
        let curY = y;
        let fontLUT = menu_font_lut;

        while (str[strPos] != DIALOG_CHAR_TERMINATOR) {
            switch (str[strPos]) {
                case DIALOG_CHAR_DAKUTEN:
                    mark = DIALOG_MARK_DAKUTEN;
                    break;
                case DIALOG_CHAR_PERIOD_OR_HANDAKUTEN:
                    mark = DIALOG_MARK_HANDAKUTEN;
                    break;
                case DIALOG_CHAR_SPACE:
                    curX += 4;
                    break;
                default:
                    Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 1, fontLUT[str[strPos]]);
                    Gbi.gDPLoadSync(Game.gDisplayList);
                    Gbi.gDPLoadBlock(Game.gDisplayList, Gbi.G_TX_LOADTILE, 0, 0, 255, CALC_DXT(8, Gbi.G_IM_SIZ_8b_BYTES));
                    Gbi.gSPTextureRectangle(Game.gDisplayList, curX << 2, curY << 2, (curX + 8) << 2, (curY + 8) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10);

                    if (mark != DIALOG_MARK_NONE) {
                        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 1, fontLUT[DIALOG_CHAR_MARK_START + mark]);
                        Gbi.gDPLoadSync(Game.gDisplayList);
                        Gbi.gDPLoadBlock(Game.gDisplayList, Gbi.G_TX_LOADTILE, 0, 0, 255, CALC_DXT(8, Gbi.G_IM_SIZ_8b_BYTES));
                        Gbi.gSPTextureRectangle(Game.gDisplayList, (curX + 6) << 2, (curY - 7) << 2, (curX + 14) << 2, (curY + 1) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10);
                        mark = DIALOG_MARK_NONE;
                    }
            }
            strPos++;
        }
    }

    // print_credits_string

    handle_menu_scrolling(scrollDirection, indexWrapper, minIndex, maxIndex) {
        let index = 0;

        if (scrollDirection == MENU_SCROLL_VERTICAL) {
            if (window.playerInput.stickY > 60) {
                index++;
            }
            if (window.playerInput.stickY < -60) {
                index += 2;
            }
        } else if (scrollDirection == MENU_SCROLL_HORIZONTAL) {
            if (window.playerInput.stickX > 60) {
                index += 2;
            }
            if (window.playerInput.stickX < -60) {
                index++;
            }
        }

        if ((indexWrapper.index != maxIndex)) {
            switch ((index ^ this.gMenuHoldKeyIndex) & index) {
                case 1:
                    play_sound(SOUND_MENU_CHANGE_SELECT, Game.gGlobalSoundSource);
                    indexWrapper.index--;
                    break;
                case 2:
                    play_sound(SOUND_MENU_CHANGE_SELECT, Game.gGlobalSoundSource);
                    indexWrapper.index++;
                    break;
            }
        }

        if (this.gMenuHoldKeyTimer == 10) {
            this.gMenuHoldKeyTimer = 8;
            this.gMenuHoldKeyIndex = 0;
        } else {
            this.gMenuHoldKeyTimer++;
            this.gMenuHoldKeyIndex = index;
        }

        if (index & 3 == 0) {
            this.gMenuHoldKeyTimer = 0;
        }
    }

    get_str_x_pos_from_center(centerPos, str, scale) {
         let strPos = 0;
         let spacesWidth = 0.0;

        while (str[strPos] != DIALOG_CHAR_TERMINATOR) {
            spacesWidth += this.gDialogCharWidths[str[strPos]];
            strPos++;
        }

        return centerPos - spacesWidth / 2.0
    }

    get_string_width(str) {
        let strPos = 0;
        let width = 0;

        while (str[strPos] != DIALOG_CHAR_TERMINATOR) {
            width += this.gDialogCharWidths[str[strPos]];
            strPos++;
        }

        return width;
    }

    print_hud_my_score_coins(useCourseCoinScore, fileIndex, courseIndex, x, y) {
        let numCoins;
        const wrapper = {};

        if (!useCourseCoinScore)
            numCoins = save_file_get_max_coin_score(courseIndex) & 0xFFFF;
        else
            numCoins = save_file_get_course_coin_score(fileIndex, courseIndex);
        
        if (numCoins != 0) {
            this.print_hud_lut_string(x, y, this.gHudSymCoin);
            this.print_hud_lut_string(x + 16, y, this.gHudSymX);
            this.int_to_str(numCoins, wrapper)
            this.print_hud_lut_string(x + 32, y, wrapper.dst);
        }
    }

    int_to_str(num, dstWrapper) {
        let digit1, digit2, digit3;

        dstWrapper.dst = []

        let pos = 0;

        if (num > 999) {
            dstWrapper.dst[0] = 0x00;
            dstWrapper.dst[1] = DIALOG_CHAR_TERMINATOR;
            return;
        }

        digit1 = Math.round(num / 100);
        digit2 = Math.round((num - digit1 * 100) / 10);
        digit3 = (num - digit1 * 100 - digit2 * 10);

        if (digit1 != 0) {
            dstWrapper.dst[pos] = digit1;
            pos++;
        }

        if (digit2 != 0 || digit1 != 0) {
            dstWrapper.dst[pos] = digit2;
            pos++;
        }

        dstWrapper.dst[pos] = digit3;
        pos++;
        dstWrapper.dst[pos] = DIALOG_CHAR_TERMINATOR;
    }

    get_dialog_id() {
        return this.gDialogID
    }

    create_dialog_box(dialog) {
        if (this.gDialogID == DIALOG_NONE) {
            this.gDialogID = dialog.id;
            this.gDialogBoxType = DIALOG_TYPE_ROTATE;
        }
    }

    create_dialog_box_with_var(dialog, dialogVar) {
        if (this.gDialogID == DIALOG_NONE) {
            this.gDialogID = dialog.id;
            this.gDialogVariable = dialogVar;
            this.gDialogBoxType = DIALOG_TYPE_ROTATE;
        }
    }

    create_dialog_inverted_box(dialog) {
        if (this.gDialogID == DIALOG_NONE) {
            this.gDialogID = dialog;
            this.gDialogBoxType = DIALOG_TYPE_ZOOM;
        }
    }

    create_dialog_box_with_response(dialog) {
        if (this.gDialogID == DIALOG_NONE) {
            this.gDialogID = dialog.id;
            this.gDialogBoxType = DIALOG_TYPE_ZOOM;
        }
    }

    reset_dialog_render_state() {
        gLinker.LevelUpdate.level_set_transition(0, null);

        if (this.gDialogBoxType == DIALOG_TYPE_ZOOM) {
            Camera.trigger_cutscene_dialog(2);
        }

        this.gDialogBoxScale = DIALOG_BOX_SCALE_DEFAULT;
        this.gDialogBoxAngle = DIALOG_BOX_ANGLE_DEFAULT;
        this.gMenuState = MENU_STATE_DEFAULT;
        this.gDialogID = DIALOG_NONE;
        this.gDialogPageStartStrIndex = 0
        this.gDialogWithChoice = false;
        this.gNextDialogPageStartStrIndex = 0;
        this.gDialogResponse = DIALOG_RESPONSE_NONE;
    }

    render_dialog_box_type(dialog, linesPerBox) {
        this.create_dl_translation_matrix(MENU_MTX_NOPUSH, dialog.leftOffset, dialog.width, 0);

        switch (this.gDialogBoxType) {
            case DIALOG_TYPE_ROTATE:
                if (this.gMenuState == MENU_STATE_DIALOG_OPENING || this.gMenuState == MENU_STATE_DIALOG_CLOSING) {
                    this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 1.0 / this.gDialogBoxScale, 1.0 / this.gDialogBoxScale, 1.0);
                    // convert speed into angle
                    this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, this.gDialogBoxAngle * 4.0, 0, 0, 1.0);
                }
                Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, 150);
                break;

            case DIALOG_TYPE_ZOOM:
                if (this.gMenuState == MENU_STATE_DIALOG_OPENING || this.gMenuState == MENU_STATE_DIALOG_CLOSING) {
                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, 65.0 - 65.0 / this.gDialogBoxScale, 40.0 / this.gDialogBoxScale - 40, 0)
                    this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 1.0 / this.gDialogBoxScale, 1.0 / this.gDialogBoxScale, 1.0);
                }
                Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, 150);
                break;
        }

        this.create_dl_translation_matrix(MENU_MTX_PUSH, -7.0, 5.0, 0);
        this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 1.1, linesPerBox / 5.0 + 0.1, 1.0);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_text_bg_box);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    change_and_flash_dialog_text_color_lines(colorMode, lineNum) {
        let color;

        if (colorMode == 1) {
            if (lineNum == 1) Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, 255);
            else if (lineNum == this.gMenuLineNum) {
                color = sins(this.gMenuTextColorTransTimer) * 50.0 + 200.0;
                Gbi.gDPSetEnvColor(Game.gDisplayList, color, color, color, 255);
            } else Gbi.gDPSetEnvColor(Game.gDisplayList, 200, 200, 200, 255);
        } else {
            switch (this.gDialogBoxType) {
                case DIALOG_TYPE_ZOOM:
                    Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, 255);
                    break;
            }
        }
    }

    // PTR PARAMS:
    // wrapper.pageState, wrapper.xMatrix, wrapper.linePos
    handle_dialog_scroll_page_state(lineNum, totalLines, ptrWrapper) {
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);

        if (lineNum == totalLines) {
            ptrWrapper.pageState = DIALOG_PAGE_STATE_SCROLL;
            return;
        }
        
        this.create_dl_translation_matrix(MENU_MTX_PUSH, 0.0, 2 - lineNum * 16, 0);
        ptrWrapper.linePos = 0;
        ptrWrapper.xMatrix = 1;
    }

    // PTR PARAMS:
    // wrapper.xMatrix, wrapper.linePos
    render_star_count_dialog_text(ptrWrapper) {
        let tensDigit = this.gDialogVariable / 10;
        let onesDigit = this.gDialogVariable - (tensDigit * 10); // remainder

        if (tensDigit != 0) {
            if (ptrWrapper.xMatrix != 1) {
                this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[DIALOG_CHAR_SPACE] * ptrWrapper.xMatrix, 0, 0);
            }

            this.render_generic_char(tensDigit);
            this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[tensDigit], 0, 0);
            ptrWrapper.xMatrix = 1;
            ptrWrapper.linePos++;
        }

        if (ptrWrapper.xMatrix != 1) {
            this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[DIALOG_CHAR_SPACE] * (ptrWrapper.xMatrix - 1), 0, 0);
        }

        this.render_generic_char(onesDigit);
        this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[onesDigit], 0, 0);
        ptrWrapper.linePos++;
        ptrWrapper.xMatrix = 1;
    }

    render_multi_text_string_lines(multiTextId, lineNum, linePosWrapper, linesPerBox, xMatrix, lowerBound) {
        let textLengths = [
            {length: 3, str: [TEXT_THE_RAW]},
            {length: 3, str: [TEXT_YOU_RAW]}
        ]

        if (lineNum >= lowerBound && lineNum <= lowerBound + linesPerBox) {
            if (linePosWrapper.linePos != 0 || xMatrix != 1) {
                this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[DIALOG_CHAR_SPACE] * (xMatrix - 1), 0, 0);
            }

            for (let i = 0; i < textLengths[multiTextId].str[0]; i++) {
                this.render_generic_char(textLengths[multiTextId].str[1 + i]);
                this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[textLengths[multiTextId].str[1 + i]], 0, 0);
            }
        }

        linePosWrapper.linePos += textLengths[multiTextId].str[0];
    }

    ensure_nonnegative(value) {
        if (value < 0) {
            value = 0;
        }

        return value;
    }

    handle_dialog_text_and_pages(colorMode, dialog, lowerBound) {
        let strChar, totalLines, strIndex;
        let str = dialog.str;
        let lineNum = 1;
        let pageState = DIALOG_PAGE_STATE_NONE;
        let mark = DIALOG_MARK_NONE;
        let xMatrix = 1;
        let linesPerBox = dialog.linesPerBox;
        let linePos = 0;
        const wrapper = {};

        if (this.gMenuState == MENU_STATE_DIALOG_SCROLLING) {
            totalLines = linesPerBox * 2 + 1;
        } else {
            totalLines = linesPerBox;
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
        strIndex = this.gDialogPageStartStrIndex;

        if (this.gMenuState == MENU_STATE_DIALOG_SCROLLING) {
            this.create_dl_translation_matrix(MENU_MTX_NOPUSH, 0, this.gDialogScrollOffsetY, 0);
        }

        this.create_dl_translation_matrix(MENU_MTX_PUSH, 0.0, 2 - lineNum * 16, 0);

        while (pageState == DIALOG_PAGE_STATE_NONE) {
            this.change_and_flash_dialog_text_color_lines(colorMode, lineNum);
            strChar = str[strIndex];

            switch (strChar) {
                case DIALOG_CHAR_TERMINATOR:
                    pageState = DIALOG_PAGE_STATE_END;
                    Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
                    break;
                
                case DIALOG_CHAR_NEWLINE:
                    lineNum++;
                    wrapper.pageState = pageState; wrapper.xMatrix = xMatrix; wrapper.linePos = linePos
                    this.handle_dialog_scroll_page_state(lineNum, totalLines, wrapper);
                    pageState = wrapper.pageState; xMatrix = wrapper.xMatrix; linePos = wrapper.linePos;
                    break;

                case DIALOG_CHAR_DAKUTEN:
                    mark = DIALOG_MARK_DAKUTEN;
                    break;

                case DIALOG_CHAR_SPACE:
                    xMatrix++;
                    linePos++;
                    break;
                
                case DIALOG_CHAR_SLASH:
                    xMatrix += 2;
                    linePos += 2;
                    break;

                case DIALOG_CHAR_MULTI_THE:
                    wrapper.linePos = linePos
                    this.render_multi_text_string_lines(STRING_THE, lineNum, wrapper, linesPerBox, xMatrix, lowerBound);
                    linePos = wrapper.linePos;
                    break;
                
                case DIALOG_CHAR_MULTI_YOU:
                    wrapper.linePos = linePos
                    this.render_multi_text_string_lines(STRING_YOU, lineNum, wrapper, linesPerBox, xMatrix, lowerBound);
                    linePos = wrapper.linePos;
                    xMatrix = 1;
                    break;
                
                case DIALOG_CHAR_STAR_COUNT:
                    wrapper = {xMatrix: xMatrix, linePos: linePos};
                    this.render_star_count_dialog_text(wrapper);
                    xMatrix = wrapper.xMatrix; linePos = wrapper.linePos;
                    break;
                
                default:
                    if (lineNum >= lowerBound && lineNum <= lowerBound + linesPerBox) {
                        if (linePos != 0 || xMatrix != 1) {
                            this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[DIALOG_CHAR_SPACE] * (xMatrix - 1), 0, 0);
                        }

                        this.render_generic_char(strChar);
                        this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.gDialogCharWidths[strChar], 0, 0);
                        xMatrix = 1;
                        linePos++;
                    }
            }
            strIndex++;
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);

        if (this.gMenuState == MENU_STATE_DIALOG_OPEN) {
            if (pageState == DIALOG_PAGE_STATE_END)
                this.gMenuState = -1;
            else
                this.gNextDialogPageStartStrIndex = strIndex;
        }

        this.gLastDialogLineNum = lineNum;
    }

    // ...

    render_dialog_triangle_choice() {
        const wrapper = {};
        if (this.gMenuState == MENU_STATE_DIALOG_OPEN) {
            wrapper = {index: this.gMenuLineNum }
            this.handle_menu_scrolling(MENU_SCROLL_HORIZONTAL, wrapper, 1, 2);
            this.gMenuLineNum = wrapper.index;
        }

        this.create_dl_translation_matrix(MENU_MTX_NOPUSH, (this.gMenuLineNum - 1) * 56 + 9 , 2 - this.gLastDialogLineNum * 16, 0)

        if (this.gDialogBoxType == DIALOG_TYPE_ROTATE)
            Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, 255);
        else
            Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, 255);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
    }

    render_dialog_triangle_next(linesPerBox) {
        let globalTimer = window.gGlobalTimer;

        if (globalTimer & 8) return;

        this.create_dl_translation_matrix(MENU_MTX_PUSH, 118.0, linesPerBox * -16 + 5, 0);
        this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 0.8, 0.8, 1.0);
        this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, -90.0, 0, 0, 1.0);

        if (this.gDialogBoxType == DIALOG_TYPE_ROTATE) Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, 255);
        else Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, 255);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    handle_special_dialog_text(dialogID) {
        let dialogBossStart = [ DIALOG_017.id, DIALOG_114.id, DIALOG_128.id, DIALOG_117.id, DIALOG_150.id ];
        let dialogRaceSound = [ DIALOG_005.id, DIALOG_009.id, DIALOG_055.id, DIALOG_164.id ];
        let dialogStarSound = [ DIALOG_010.id, DIALOG_011.id, DIALOG_012.id, DIALOG_013.id, DIALOG_014.id ];
        let dialogBossStop =  [ DIALOG_017.id, DIALOG_115.id, DIALOG_116.id, DIALOG_118.id, DIALOG_152.id ];

        for (let i = 0; i < dialogBossStart.length; i++) {
            if (dialogBossStart[i] == dialogID) {
                seq_player_lower_volume(SEQ_PLAYER_LEVEL, 60);
                play_music(SEQ_PLAYER_LEVEL, SEQUENCE_ARGS(4, SEQ_EVENT_BOSS), 0);
                return;
            }
        }

        for (let i = 0; i < dialogRaceSound.length; i++) {
            if (dialogRaceSound[i] == dialogID && this.gMenuLineNum == DIALOG_RESPONSE_YES) {
                // play_race_fanfare();
                return;
            }
        }

        for (let i = 0; i < dialogStarSound.length; i++) {
            if (dialogStarSound[i] == dialogID) {
                play_sound(SOUND_MENU_STAR_SOUND, Game.gGlobalSoundSource);
                return;
            }
        }

        for (let i = 0; i < dialogBossStop.length; i++) {
            if (dialogBossStop[i] == dialogID) {
                seq_player_unlower_volume(SEQ_PLAYER_LEVEL, 60);
                return;
            }
        }
    }

    render_dialog_entries() {
        let lowerBound;

        let dialogTable = seg2_dialog_table;
        let dialog = dialogTable[this.gDialogID];

        console.log(this.gDialogID, dialog)

        switch (this.gMenuState) {
            case MENU_STATE_DIALOG_OPENING:
                if (this.gDialogBoxAngle == DIALOG_BOX_ANGLE_DEFAULT) {
                    // play_dialog_sound(this.gDialogID);
                    play_sound(SOUND_MENU_MESSAGE_APPEAR, Game.gGlobalSoundSource);
                }

                if (this.gDialogBoxType == DIALOG_TYPE_ROTATE) {
                    this.gDialogBoxAngle -= 7.5;
                    this.gDialogBoxScale -= 1.5;
                } else {
                    this.gDialogBoxAngle -= 10.0;
                    this.gDialogBoxScale -= 2.0;
                }

                if (this.gDialogBoxAngle == 0.0) {
                    this.gMenuState = MENU_STATE_DIALOG_OPEN;
                    this.gMenuLineNum = 1;
                }

                lowerBound = 1;
                break;

            case MENU_STATE_DIALOG_OPEN:
                this.gDialogBoxAngle = 0.0;

                if (window.playerInput.buttonPressedA || window.playerInput.buttonPressedB) {
                    if (this.gNextDialogPageStartStrIndex == -1) {
                        this.handle_special_dialog_text(this.gDialogID);
                        this.gMenuState = MENU_STATE_DIALOG_CLOSING;
                    } else {
                        this.gMenuState = MENU_STATE_DIALOG_SCROLLING;
                        play_sound(SOUND_MENU_MESSAGE_NEXT_PAGE, Game.gGlobalSoundSource);
                    }
                }

                lowerBound = 1;
                break;
            
            case MENU_STATE_DIALOG_SCROLLING:
                this.gDialogScrollOffsetY += dialog.linesPerBox * 2;

                if (this.gDialogScrollOffsetY >= dialog.linesPerBox * 16) {
                    this.gDialogPageStartStrIndex = this.gNextDialogPageStartStrIndex;
                    this.gMenuState = MENU_STATE_DIALOG_OPEN;
                    this.gDialogScrollOffsetY = 0;
                }

                lowerBound = this.gDialogScrollOffsetY / 16 + 1;
                break;

            case MENU_STATE_DIALOG_CLOSING:
                if (this.gDialogBoxAngle == 20.0) {
                    level_set_transition(0, null);
                    play_sound(SOUND_MENU_MESSAGE_DISAPPEAR, Game.gGlobalSoundSource);

                    if (this.gDialogBoxType == DIALOG_TYPE_ZOOM) trigger_cutscene_dialog(2);

                    this.gDialogResponse = this.gMenuLineNum;
                }

                this.gDialogBoxAngle += 10.0;
                this.gDialogBoxScale += 2.0;

                if (this.gDialogBoxAngle == DIALOG_BOX_ANGLE_DEFAULT) {
                    this.gMenuState = MENU_STATE_DEFAULT;
                    this.gDialogID = DIALOG_NONE;
                    this.gDialogPageStartStrIndex = 0;
                    this.gDialogWithChoice = false;
                    this.gNextDialogPageStartStrIndex = 0;
                    this.gDialogResponse = DIALOG_RESPONSE_NONE;
                }

                lowerBound = 1;
                break;
        }

        this.render_dialog_box_type(dialog, dialog.linesPerBox);

        // Gbi.gDPSetScissor(Game.gDisplayList, this.ensure_nonnegative(dialog.leftOffset), this.ensure_nonnegative(240 - dialog.width), this.ensure_nonnegative(dialog.leftOffset + 132), this.ensure_nonnegative(240 - dialog.width + dialog.linesPerBox * 16));
        this.handle_dialog_text_and_pages(0, dialog, lowerBound);

        if (this.gNextDialogPageStartStrIndex == -1 && this.gDialogWithChoice == true) this.render_dialog_triangle_choice();

        // Gbi.gDPSetScissor(Game.gDisplayList, 2, 2, SCREEN_WIDTH, SCREEN_HEIGHT, 238);

        if (this.gNextDialogPageStartStrIndex != -1 && this.gMenuState == MENU_STATE_DIALOG_OPEN) this.render_dialog_triangle_next(dialog.linesPerBox);
    }

    set_menu_mode(mode) {
        if (this.gMenuMode == MENU_MODE_NONE) {
            this.gMenuMode = mode;
        }
    }

    // ...

    // "Dear Mario" message handler
    print_peach_letter_message() {
        let dialogTable = seg2_dialog_table;
        let dialog = dialogTable[this.gDialogID];
        let str = dialog.str;

        this.create_dl_translation_matrix(MENU_MTX_PUSH, 97.0, 118.0, 0);

        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gCutsceneMsgFade);
        Gbi.gSPDisplayList(Game.gDisplayList, castle_grounds_seg7_dl_0700EA58);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 20, 20, 20, this.gCutsceneMsgFade);

        this.print_generic_string(38, 142, str);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, 255);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 200, 80, 120, this.gCutsceneMsgFade);
        Gbi.gSPDisplayList(Game.gDisplayList, castle_grounds_seg7_us_dl_0700F2E8);

        if (this.gCutsceneMsgTimer == 0) {
            this.gCutsceneMsgFade = 0;
        }

        if (this.gCutsceneMsgTimer < 20) {
            this.gCutsceneMsgFade += 10;
        }

        if (this.gCutsceneMsgTimer > 250) {
            this.gCutsceneMsgFade -= 10;
        }

        // 20 increments after the start of the decrease, we're
        // back where we are, so reset everything at the end.
        if (this.gCutsceneMsgTimer > 270) {
            this.gCutsceneMsgIndex = -1;
            this.gDialogID = DIALOG_NONE;
            this.gCutsceneMsgTimer = 0;
            return; // return to avoid incrementing the timer
        }

        this.gCutsceneMsgTimer++;
    }

    /**
     * Renders the cannon reticle when Mario is inside a cannon.
     * Formed by four triangles.
     */
    render_hud_cannon_reticle() {
        this.create_dl_translation_matrix(MENU_MTX_PUSH, 160.0, 120.0, 0);

        Gbi.gDPSetEnvColor(Game.gDisplayList, 50, 50, 50, 180);
        this.create_dl_translation_matrix(MENU_MTX_PUSH, -20.0, -8.0, 0);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);

        this.create_dl_translation_matrix(MENU_MTX_PUSH, 20.0, 8.0, 0);
        this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, 180.0, 0, 0, 1.0);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);

        this.create_dl_translation_matrix(MENU_MTX_PUSH, 8.0, -20.0, 0);
        this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, 90.0, 0, 0, 1.0);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);

        this.create_dl_translation_matrix(MENU_MTX_PUSH, -8.0, 20.0, 0);
        this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, -90.0, 0, 0, 1.0);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);

        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    reset_red_coins_collected() {
        this.gRedCoinsCollected = 0;
    }

    change_dialog_camera_angle() {
        if (cam_select_alt_mode(0) == CAM_SELECTION_MARIO) {
            this.gDialogCameraAngleIndex = CAM_SELECTION_MARIO;
        } else {
            this.gDialogCameraAngleIndex = CAM_SELECTION_FIXED;
        }
    }

    shade_screen() {
        this.create_dl_translation_matrix(MENU_MTX_PUSH, GFX_DIMENSIONS_FROM_LEFT_EDGE(0), SCREEN_HEIGHT, 0);

        // This is a bit weird. It reuses the dialog text box (width 130, height -80),
        // so scale to at least fit the screen.
        this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 2.6, 3.4, 1.0);

        Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, 110);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_text_bg_box);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    print_animated_red_coin(x, y) {
        let globalTimer = window.gGlobalTimer;

        this.create_dl_translation_matrix(MENU_MTX_PUSH, x, y, 0);
        this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 0.2, 0.2, 1.0);
        Gbi.gDPSetRenderMode(Game.gDisplayList, Gbi.G_RM_TEX_EDGE, Gbi.G_RM_TEX_EDGE2);

        switch (globalTimer & 6) {
            case 0:
                Gbi.gSPDisplayList(Game.gDisplayList, coin_seg3_dl_03007940);
                break;
            case 2:
                Gbi.gSPDisplayList(Game.gDisplayList, coin_seg3_dl_03007968);
                break;
            case 4:
                Gbi.gSPDisplayList(Game.gDisplayList, coin_seg3_dl_03007990);
                break;
            case 6:
                Gbi.gSPDisplayList(Game.gDisplayList, coin_seg3_dl_030079B8);
                break;
        }

        Gbi.gDPSetRenderMode(Game.gDisplayList, Gbi.G_RM_AA_ZB_OPA_SURF, Gbi.G_RM_AA_ZB_OPA_SURF2);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    render_pause_red_coins() {
        for (let x = 0; x < this.gRedCoinsCollected; x++) {
            this.print_animated_red_coin(GFX_DIMENSIONS_FROM_RIGHT_EDGE(30) - x * 20, 16);
        }
    }

    render_pause_my_score_coins() {
        let courseNameTbl = seg2_course_name_table;
        let actNameTbl = seg2_act_name_table;

        let courseIndex = gLinker.Area.gCurrCourseNum
        let starFlags = save_file_get_star_flags(gLinker.Area.gCurrSaveFileNum - 1, COURSE_NUM_TO_INDEX(courseIndex));

        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
        if (courseIndex <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX)) {
            this.print_hud_my_score_coins(1, gLinker.Area.gCurrSaveFileNum - 1, courseIndex, 178, 103);
            // this.print_hud_my_score_stars(gLinker.Area.gCurrSaveFileNum - 1, courseIndex, 118, 103);
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_end);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);

        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);

        if (courseIndex <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX) && save_file_get_course_star_count(gLinker.Area.gCurrSaveFileNum - 1, courseIndex) != 0) {
            this.print_generic_string(62, 121, TEXT_MY_SCORE);
        }

        let courseName = courseNameTbl[courseIndex].slice(3)

        if (courseIndex <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX)) {
            this.print_generic_string(63, 157, TEXT_COURSE);
            let strCourseNum = {};
            this.int_to_str(gLinker.Area.gCurrCourseNum, strCourseNum);
            this.print_generic_string(100, 157, strCourseNum.dst);

            let actName = actNameTbl[COURSE_NUM_TO_INDEX(courseIndex) * 6 + this.gDialogCourseActNum - 1]
            
            if (starFlags & (1 << this.gDialogCourseActNum - 1))
                this.print_generic_string(98, 140, TEXT_STAR);
            else 
                this.print_generic_string(98, 140, TEXT_UNFILLED_STAR);

            this.print_generic_string(116, 140, actName);
            this.print_generic_string(117, 157, courseName);
        } else this.print_generic_string(94, 157, courseName);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);
    }

    render_pause_camera_options(x, y, indexWrapper, xIndex) {
        this.handle_menu_scrolling(MENU_SCROLL_HORIZONTAL, indexWrapper, 0, 2);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);

        this.print_generic_string(x + 14, y + 2, TEXT_LAKITU_MARIO);
        this.print_generic_string(x + 3, y - 13, TEXT_NORMAL_UPCLOSE);
        this.print_generic_string(x + 124, y + 2, TEXT_LAKITU_STOP);
        this.print_generic_string(x + 119, y - 13, TEXT_NORMAL_FIXED);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);
        this.create_dl_translation_matrix(MENU_MTX_PUSH, x + (indexWrapper.index - 1) * xIndex, y + 2, 0)
        gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    render_pause_course_options(x, y, indexWrapper, yIndex) {
        this.handle_menu_scrolling(MENU_SCROLL_VERTICAL, indexWrapper, 1, 3);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);

        this.print_generic_string(x + 10, y - 2, TEXT_CONTINUE);
        this.print_generic_string(x + 10, y - 17, TEXT_EXIT_COURSE);

        if (indexWrapper.index != MENU_OPT_CAMERA_ANGLE_R) {
            this.print_generic_string(x + 10, y - 33, TEXT_CAMERA_ANGLE_R);
            Gbi.gSPDisplayList(dl_ia_text_end);

            this.create_dl_translation_matrix(MENU_MTX_PUSH, x - 4, y - (indexWrapper.index - 1) * yIndex - 2, 0);

            Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
            Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
            Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
        }

        if (indexWrapper.index == MENU_OPT_CAMERA_ANGLE_R) {
            const wrapper = {index: this.gDialogCameraAngleIndex}
            this.render_pause_camera_options(x - 42, y - 42, wrapper, 110);
            this.gDialogCameraAngleIndex = wrapper.index;
        }
    }

    render_pause_castle_menu_box(x, y) {
        this.create_dl_translation_matrix(MENU_MTX_PUSH, x - 78, y - 32, 0);
        this.create_dl_scale_matrix(MENU_MTX_NOPUSH, 1.2, 0.8, 1.0);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, 105);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_text_bg_box);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);

        this.create_dl_translation_matrix(MENU_MTX_PUSH, x + 6, y - 28, 0);
        this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, 90.0, 0, 0, 1.0);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);

        this.create_dl_translation_matrix(MENU_MTX_PUSH, x - 9, y - 101, 0);
        this.create_dl_rotation_matrix(MENU_MTX_NOPUSH, 270.0, 0, 0, 1.0)
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);
        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    highlight_last_course_complete_stars() {
        let completedCourseIndex;

        if (gLastCompletedCourseNum == COURSE_NONE) {
            completedCourseIndex = 0;
        } else {
            completedCourseIndex = COURSE_NUM_TO_INDEX(gLastCompletedCourseNum);

            if (completedCourseIndex >= COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES)) {
                completedCourseIndex = COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES)
            }
        }

        this.gMenuLineNum = completedCourseIndex;
    }

    print_hud_pause_colorful_str() {
        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);

        this.print_hud_lut_string(123, 81, TEXT_PAUSE);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_end);
    }

    render_pause_castle_course_stars(x, y, fileIndex, courseIndex) {
        let hasStar = 0;
        let starFlags = save_file_get_star_flags(fileIndex, courseIndex);
        let starCount = save_file_get_course_star_count(fileIndex, courseIndex);
        let nextStar = 0;
        let str = new Array(30).fill(0);

        if (starFlags & (1 << 6)) {
            starCount--;
            this.print_generic_string(x + 89, y - 5, TEXT_STAR);
        }

        while (hasStar != starCount) { 
            if (starFlags & (1 << nextStar)) {
                str[nextStar * 2] = DIALOG_CHAR_STAR_FILLED;
                hasStar++;
            } else {
                str[nextStar * 2] = DIALOG_CHAR_STAR_OPEN;
            }

            str[nextStar * 2 + 1] = DIALOG_CHAR_SPACE;
            nextStar++;
        }

        if (starCount == nextStar && starCount != 6) {
            str[nextStar * 2] = DIALOG_CHAR_STAR_OPEN;
            str[nextStar * 2 + 1] = DIALOG_CHAR_SPACE;
            nextStar++;
        }

        str[nextStar * 2] = DIALOG_CHAR_TERMINATOR;

        this.print_generic_string(x + 14, y + 13, str);
    }

    render_pause_castle_main_strings(x, y) {
        let courseNameTbl = seg2_course_name_table;
        let courseName;
        let prevCourseIndex = this.gMenuLineNum;
        const wrapper = {index: this.gMenuLineNum};

        this.handle_menu_scrolling(
            MENU_SCROLL_VERTICAL,
            wrapper,
            COURSE_NUM_TO_INDEX(COURSE_MIN) - 1,
            COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES) + 1
        );

        if (this.gMenuLineNum == COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES) + 1) {
            this.gMenuLineNum = COURSE_NUM_TO_INDEX(COURSE_MIN); // Exceeded max, set to min
        }

        if (this.gMenuLineNum == COURSE_NUM_TO_INDEX(COURSE_MIN) - 1) {
            this.gMenuLineNum = COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES); // Exceeded min, set to max
        }

        if (this.gMenuLineNum != COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES)) {
            while (save_file_get_course_star_count(gLinker.Area.gCurrSaveFileNum - 1, this.gMenuLineNum) == 0) {
                if (this.gMenuLineNum >= prevCourseIndex) this.gMenuLineNum++;
                else this.gMenuLineNum--;

                if (this.gMenuLineNum == COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX) + 1 || this.gMenuLineNum == COURSE_NUM_TO_INDEX(COURSE_MIN) - 1) {
                    this.gMenuLineNum = COURSE_NUM_TO_INDEX(COURSE_BONUS_STAGES);
                    break;
                }
            }
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);

        if (this.gMenuLineNum <= COURSE_NUM_TO_INDEX(COURSE_STAGES_MAX)) { // Main courses
            courseName = courseNameTbl[this.gMenuLineNum];
            this.render_pause_castle_course_stars(x, y, gLinker.Area.gCurrSaveFileNum - 1, this.gMenuLineNum);
            this.print_generic_string(x + 34, y - 5, TEXT_COIN);
            this.int_to_str(save_file_get_course_coin_score(gLinker.Area.gCurrSaveFileNum - 1, this.gMenuLineNum), wrapper);
            this.print_generic_string(x + 54, y - 5, wrapper.dst);
        } else { // Castle secret stars
            courseName = courseNameTbl[COURSE_MAX];
            this.print_generic_string(x + 40, y + 13, TEXT_STAR_X);
            this.int_to_str(save_file_get_course_coin_score(gLinker.Area.gCurrSaveFileNum - 1, this.gMenuLineNum), wrapper);
            this.print_generic_string(x + 54, y + 13, wrapper.dst);
        }

        this.print_generic_string(x - 9, y + 30, courseName);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);
    }

    render_pause_screen() {
        const gCurrCourseNum = gLinker.Area.gCurrCourseNum
        const gMarioStates = [ gLinker.LevelUpdate.gMarioState ]
        let index;

        switch(this.gMenuState) {
            case MENU_STATE_PAUSE_SCREEN_OPENING:
                this.gMenuLineNum = MENU_OPT_DEFAULT;
                this.gMenuTextAlpha = 0;
                gLinker.LevelUpdate.level_set_transition(-1, null);
                play_sound(SOUND_MENU_PAUSE, Game.gGlobalSoundSource);

                if (gCurrCourseNum >= COURSE_MIN && gCurrCourseNum <= COURSE_MAX) {
                    // this.change_dialog_camera_angle();
                    this.gMenuState = MENU_STATE_PAUSE_SCREEN_COURSE;
                } else {
                    this.highlight_last_course_complete_stars();
                    this.gMenuState = MENU_STATE_PAUSE_SCREEN_CASTLE;
                }
                break;

            case MENU_STATE_PAUSE_SCREEN_COURSE:
                this.shade_screen();
                this.render_pause_my_score_coins();
                this.render_pause_red_coins();

                if (gMarioStates[0].action & ACT_FLAG_PAUSE_EXIT) {
                    const wrapper = {ptr: this.gMenuLineNum}
                    this.render_pause_course_options(99, 93, wrapper, 15);
                    this.gMenuLineNum = wrapper.ptr;
                }

                if (window.playerInput.buttonPressedA || window.playerInput.buttonPressedStart) {
                    gLinker.LevelUpdate.level_set_transition(0, null);
                    play_sound(SOUND_MENU_PAUSE_2, Game.gGlobalSoundSource);
                    this.gMenuState = MENU_STATE_DEFAULT;
                    this.gMenuMode = MENU_MODE_NONE;

                    if (this.gMenuLineNum == MENU_OPT_EXIT_COURSE) index = this.gMenuLineNum
                    else index = MENU_OPT_DEFAULT
                    
                    return index;
                }
                break;
            
            case MENU_STATE_PAUSE_SCREEN_CASTLE:
                this.shade_screen();
                this.print_hud_pause_colorful_str();
                this.render_pause_castle_menu_box(160, 143);
                this.render_pause_castle_main_strings(104, 60);

                if (window.playerInput.buttonPressedA || window.playerInput.buttonPressedStart) {
                    gLinker.LevelUpdate.level_set_transition(0, null);
                    play_sound(SOUND_MENU_PAUSE_2, Game.gGlobalSoundSource);
                    this.gMenuMode = MENU_MODE_NONE;
                    this.gMenuState = MENU_STATE_DEFAULT;

                    return MENU_OPT_DEFAULT;
                }
                break;
        }

        if (this.gMenuTextAlpha < 250) {
            this.gMenuTextAlpha += 25;
        }

        return MENU_OPT_NONE;
    }

    print_hud_course_complete_string(str) {
        let color = sins(this.gMenuTextColorTransTimer) * 50.0 + 200.0;

        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, color, color, color, 255);

        if (str == HUD_PRINT_HISCORE) this.print_hud_lut_string(109, 36, TEXT_HI_SCORE);
        else this.print_hud_lut_string(70, 67, TEXT_COURSE);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_end);
    }

    print_hud_course_complete_coins(x, y) {
        const gHudDisplay = gLinker.LevelUpdate.gHudDisplay
        const gMarioState = gLinker.LevelUpdate.gMarioState

        let hudTextSymCoin = [ Print.GLYPH_COIN, Print.GLYPH_SPACE ];
        let hudTextSymX = [ Print.GLYPH_MULTIPLY, Print.GLYPH_SPACE ];

        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, 255);

        this.print_hud_lut_string(x, y, hudTextSymCoin);
        this.print_hud_lut_string(x + 16, y, hudTextSymX);

        const wrapper = {}
        this.int_to_str(this.gCourseCompleteCoins, wrapper)
        this.print_hud_lut_string(x + 32, y, wrapper.dst);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_end);

        if (this.gCourseCompleteCoins >= gHudDisplay.coins) {
            this.gCourseCompleteCoinsEqual = true;
            this.gCourseCompleteCoins = gHudDisplay.coins;

            if (gGotFileCoinHiScore) this.print_hud_course_complete_string(HUD_PRINT_HISCORE);
        } else {
            if (this.gCourseCompleteScreenTimer & 1 || gHudDisplay.coins > 70) {
                this.gCourseCompleteCoins++;
                play_sound(SOUND_MENU_YOSHI_GAIN_LIVES, Game.gGlobalSoundSource);

                if (this.gCourseCompleteCoins == 50 || this.gCourseCompleteCoins == 100 || this.gCourseCompleteCoins == 150) {
                    play_sound(SOUND_GENERAL_COLLECT_1UP, Game.gGlobalSoundSource);
                    gMarioState.numLives++;
                }
            }

            if (this.gCourseCompleteCoins == gHudDisplay.coins && gGotFileCoinHiScore)
                play_sound(SOUND_MENU_MARIO_CASTLE_WARP2, Game.gGlobalSoundSource)
        }
    }

    play_star_fanfare_and_flash_hud(arg, starFlag) {
        const gHudDisplay = gLinker.LevelUpdate.gHudDisplay

        if (this.gCourseCompleteCoins == gHudDisplay.coins && !(gCurrCourseStarFlags & starFlag) && this.gHudFlash == 0) {
            // play_star_fanfare();
            this.gHudFlash = arg;
        }
    }

    render_course_complete_lvl_info_and_hud_str() {
        let textSymStar = Print.GLYPH_STAR + Print.GLYPH_SPACE;

        let actNameTbl = seg2_act_name_table;
        let courseNameTbl = seg2_course_name_table;
        let name;

        if (gLastCompletedCourseNum <= COURSE_STAGES_MAX) { // Main courses
            // this.print_hud_course_complete_coins(118, 103);
            this.play_star_fanfare_and_flash_hud(1, 1 << (gLastCompletedStarNum - 1));

            if (gLastCompletedStarNum == 7)
                name = actNameTbl[COURSE_STAGES_MAX * 6 + 1];
            else
                name = actNameTbl[COURSE_NUM_TO_INDEX(gLastCompletedCourseNum) * 6 + gLastCompletedStarNum - 1];

            // Print course num
            Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);

            const wrapper = {}
            this.int_to_str(gLastCompletedCourseNum, wrapper)

            Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
            this.print_generic_string(65, 165, TEXT_COURSE);
            this.print_generic_string(104, 165, wrapper.dst);

            Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
            this.print_generic_string(63, 167, TEXT_COURSE);
            this.print_generic_string(102, 167, wrapper.dst);

            Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);
        } else if (gLastCompletedCourseNum == COURSE_BITDW || gLastCompletedCourseNum == COURSE_BITFS) { // Bowser courses
            name = courseNameTbl[COURSE_NUM_TO_INDEX(gLastCompletedCourseNum)];

            // Print course name
            Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
            Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, this.gMenuTextAlpha);

            this.print_generic_string(71, 130, name)
            this.print_generic_string(this.get_string_width(name) + 81, 130, TEXT_CLEAR);

            Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
            this.print_generic_string(69, 132, name);
            this.print_generic_string(this.get_string_width(name) + 79, 132, TEXT_CLEAR);

            Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);

            // this.print_hud_course_complete_string(HUD_PRINT_CONGRATULATIONS);
            // this.print_hud_course_complete_coins(118, 111);
            // this.play_star_fanfare_and_flash_hud(2, 0);

            return;
        } else {
            name = actNameTbl[COURSE_STAGES_MAX * 6];

            // this.print_hud_course_complete_coins(118, 103);
            // this.play_star_fanfare_and_flash_hud(1, 1 << (gLastCompletedStarNum - 1));
        }

        // Print star glyph
        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
        // this.print_hud_lut_string(55, 77, textSymStar);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_text_end);

        // Print act name
        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 0, 0, 0, this.gMenuTextAlpha);
        this.print_generic_string(76, 145, name);

        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
        this.print_generic_string(74, 147, name);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);
    }

    render_save_confirmation(x, y, indexWrapper, yOffset) {
        this.handle_menu_scrolling(MENU_SCROLL_VERTICAL, indexWrapper, 1, 3);

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_begin);
        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);

        this.print_generic_string(x + 12, y, TEXT_SAVE_AND_CONTINUE)
        this.print_generic_string(x + 12, y - 20, TEXT_SAVE_AND_QUIT)
        this.print_generic_string(x + 12, y - 40, TEXT_CONTINUE_WITHOUT_SAVING)

        Gbi.gSPDisplayList(Game.gDisplayList, dl_ia_text_end);

        this.create_dl_translation_matrix(MENU_MTX_PUSH, x, y - ((indexWrapper.index - 1) * yOffset), 0);

        Gbi.gDPSetEnvColor(Game.gDisplayList, 255, 255, 255, this.gMenuTextAlpha);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_triangle);

        Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    render_course_complete_screen() {
        let index;

        switch (this.gMenuState) {
            case MENU_STATE_COURSE_COMPLETE_SCREEN_OPENING:
                this.render_course_complete_lvl_info_and_hud_str();

                if (this.gCourseCompleteScreenTimer > 100 && this.gCourseCompleteCoinsEqual == true) {
                    this.gMenuState = MENU_STATE_COURSE_COMPLETE_SCREEN_OPEN;
                    gLinker.LevelUpdate.level_set_transition(-1, null);
                    this.gMenuTextAlpha = 0;
                    this.gMenuLineNum = MENU_OPT_DEFAULT;
                }
                break;

            case MENU_STATE_COURSE_COMPLETE_SCREEN_OPEN:
                this.shade_screen();
                this.render_course_complete_lvl_info_and_hud_str();
                
                const wrapper = {index: this.gMenuLineNum};
                this.render_save_confirmation(100, 86, wrapper, 20);
                this.gMenuLineNum = wrapper.index;

                if (this.gCourseCompleteScreenTimer > 110 && (window.playerInput.buttonPressedA || window.playerInput.buttonPressedStart)) {
                    gLinker.LevelUpdate.level_set_transition(0, null);
                    play_sound(SOUND_MENU_STAR_SOUND, Game.gGlobalSoundSource);
                    this.gMenuState = MENU_STATE_DEFAULT;
                    this.gMenuMode = MENU_MODE_NONE;
                    index = this.gMenuLineNum;
                    this.gCourseCompleteScreenTimer = 0;
                    this.gCourseCompleteCoins = 0;
                    this.gCourseCompleteCoinsEqual = false;
                    gHudFlash = 0;
                    return index;
                }
                break;
        }

        if (this.gMenuTextAlpha < 250) {
            this.gMenuTextAlpha += 25;
        }

        this.gCourseCompleteScreenTimer++;
        
        return MENU_OPT_NONE;
    }

    render_menus_and_dialogs() {
        let index = MENU_OPT_NONE;

        this.create_dl_ortho_matrix();

        if (this.gMenuMode != MENU_MODE_NONE) {
            switch (this.gMenuMode) {
                case MENU_MODE_RENDER_PAUSE_SCREEN:
                    index = this.render_pause_screen();
                    break;

                case MENU_MODE_RENDER_COURSE_COMPLETE_SCREEN:
                    index = this.render_course_complete_screen();
                    break;
            }

            this.gMenuTextColorTransTimer = this.gMenuTextColorTransTimer + 0x1000;
        } else if (this.gDialogID != DIALOG_NONE) {
            if (this.gDialogID == DIALOG_020.id) {
                this.print_peach_letter_message();
                return index;
            }

            // this.render_dialog_entries();
            this.gMenuTextColorTransTimer = this.gMenuTextColorTransTimer + 0x1000;
        }

        return index;
    }
}

export const IngameMenuInstance = new IngameMenu()