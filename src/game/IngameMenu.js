import { play_sound } from "../audio/external"
import { dl_ia_text_tex_settings, dl_rgba16_load_tex_block, main_font_lut, main_hud_lut } from "../bin/segment2"
import * as MathUtil from "../engine/math_util"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../include/config"
import * as Gbi from "../include/gbi"
import { SOUND_MENU_CHANGE_SELECT } from "../include/sounds"
import { menu_font_lut, menu_hud_lut } from "../levels/menu/leveldata"
import { DIALOG_NONE } from "../text/us/dialogs"
import { GameInstance as Game } from "./Game"
import { PrintInstance as Print } from "./Print"
import { save_file_get_max_coin_score } from "./SaveFile"

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

export const TEXT_THE_RAW = [ASCII_TO_DIALOG('t'), ASCII_TO_DIALOG('h'), ASCII_TO_DIALOG('e'), 0x00]
export const TEXT_YOU_RAW = [ASCII_TO_DIALOG('y'), ASCII_TO_DIALOG('o'), ASCII_TO_DIALOG('u'), 0x00]

export const MAX_STRING_WIDTH = 16

export const HUD_LUT_JPMENU = 1
export const HUD_LUT_GLOBAL = 1

export const DIALOG_MARK_NONE = 0
export const DIALOG_MARK_DAKUTEN = 1
export const DIALOG_MARK_HANDAKUTEN = 2

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

        this.DialogMark = {
            
        }

        this.DialogSpecialChars = {
            DIALOG_CHAR_SLASH: 0xD0,
            DIALOG_CHAR_MULTI_THE: 0xD1, // 'the'
            DIALOG_CHAR_MULTI_YOU: 0xD2, // 'you'
            DIALOG_CHAR_PERIOD:               0x6E,
            DIALOG_CHAR_COMMA:                0x6F,
            DIALOG_CHAR_SPACE:                0x9E,
            DIALOG_CHAR_STAR_COUNT:           0xE0, // number of stars
            DIALOG_CHAR_UMLAUT:               0xE9,
            DIALOG_CHAR_MARK_START:           0xEF,
            DIALOG_CHAR_DAKUTEN:              0xEF + this.DialogMark.DIALOG_MARK_DAKUTEN,
            DIALOG_CHAR_PERIOD_OR_HANDAKUTEN: 0xEF + this.DialogMark.DIALOG_MARK_HANDAKUTEN,
            DIALOG_CHAR_STAR_FILLED:          0xFA,
            DIALOG_CHAR_STAR_OPEN:            0xFD,
            DIALOG_CHAR_NEWLINE:              0xFE,
            DIALOG_CHAR_TERMINATOR:           0xFF
        }

        this.SpecialFontChars = {
            GLOBAL_CHAR_SPACE: 0x9E,
            GLOBAL_CHAR_TERMINATOR: 0xFF
        }

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

        this.CHAR_WIDTH_SPACE   = this.gDialogCharWidths[this.DialogSpecialChars.DIALOG_CHAR_SPACE]
        this.CHAR_WIDTH_DEFAULT = this.gDialogCharWidths[this.MultiTextEntry.str[this.strPos]]

        this.gDialogID = -1
        this.gDialogBoxType = 0
        this.gDialogResponse = DIALOG_RESPONSE_NONE

        this.gMenuTextColorTransTimer = 0;
        this.gLastDialogLineNum = 0;
        this.gDialogVariable = 0;
        this.gMenuTextAlpha = 0;

        this.gCutsceneMsgXOffset = 0;
        this.gCutsceneMsgYOffset = 0;

        this.gMenuHoldKeyIndex = 0;
        this.gMenuHoldKeyTimer = 0;

        this.gHudSymCoin = [ Print.GLYPH_COIN, Print.GLYPH_SPACE ]
        this.gHudSymX = [ Print.GLYPH_MULTIPLY, Print.GLYPH_SPACE ]
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
        const matrix = new Array(4).fill([0, 0, 0, 0])
        MathUtil.guTranslate(matrix, x, y, z)

        if (pushOp == MENU_MTX_PUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        } else if (pushOp == MENU_MTX_NOPUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        }
    }

    create_dl_rotation_matrix(pushOp, a, x, y, z) {
        const matrix = new Array(4).fill([0, 0, 0, 0])
        MathUtil.guTranslate(matrix, a, x, y, z)

        if (pushOp == MENU_MTX_PUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH)
        } else if (pushOp == MENU_MTX_NOPUSH) {
            Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        }
    }

    create_dl_scale_matrix(pushOp, x, y, z) {
        const matrix = new Array(4).fill([0, 0, 0, 0])

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

        while (str[strPos] != DIALOG_CHAR_TERMINATOR) {
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
    
    print_hud_lut_string(hudLUT, x, y, str) {
        let strPos = 0;
        let hudLUT1 = menu_hud_lut;
        let hudLUT2 = main_hud_lut;
        let curX = x;
        let curY = y;
        let xStride;
        hudLUT == HUD_LUT_JPMENU ? xStride = 16 : xStride = 12

        while (str[strPos] != GLOBAL_CHAR_TERMINATOR) {
            switch (str[strPos]) {
                case GLOBAL_CHAR_SPACE:
                    curX += 8
                    break
                default:
                    Gbi.gDPPipeSync(Game.gDisplayList)

                    hudLUT == HUD_LUT_JPMENU ? Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, hudLUT1[str[strPos]])
                        : Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, hudLUT2[str[strPos]])
                    
                        Gbi.gSPDisplayList(Game.gDisplayList, dl_rgba16_load_tex_block)
                        Gbi.gSPTextureRectangle(Game.gDisplayList, curX << 2, curY << 2, (curX + 16) << 2, (curY + 16) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10)

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
                index = indexWrapper.index++;
            }
            if (window.playerInput.stickY < -60) {
                index = indexWrapper.index += 2;
            }
        } else if (scrollDirection == MENU_SCROLL_HORIZONTAL) {
            if (window.playerInput.stickX > 60) {
                index = indexWrapper.index += 2;
            }
            if (window.playerInput.stickX < -60) {
                index = indexWrapper.index++;
            }
        }

        if ((currentIndex != maxIndex)) {
            switch ((index ^ this.gMenuHoldKeyIndex) & index) {
                case 1:
                    play_sound(SOUND_MENU_CHANGE_SELECT, Game.gGlobalSoundSource);
                    currentIndex--;
                    break;
                case 2:
                    play_sound(SOUND_MENU_CHANGE_SELECT, Game.gGlobalSoundSource);
                    currentIndex++;
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

        if (!useCourseCoinScore)
            numCoins = save_file_get_max_coin_score(courseIndex);
        else
            numCoins = save_file_get_course_coin_score(fileIndex, courseIndex);

        if (numCoins != 0) {
            this.print_hud_lut_string(HUD_LUT_GLOBAL, x, y, this.gHudSymCoin);
            this.print_hud_lut_string(HUD_LUT_GLOBAL, x + 16, y, this.gHudSymX);
            this.print_hud_lut_string(HUD_LUT_GLOBAL, x + 32, y, numCoins.toString());
        }
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

    create_dialog_box_with_response(dialog) {
        if (this.gDialogID == DIALOG_NONE) {
            this.gDialogID = dialog
            this.gDialogBoxType = DIALOG_TYPE_ZOOM
        }
    }
}

export const IngameMenuInstance = new IngameMenu()