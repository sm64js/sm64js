import { dl_ia_text_tex_settings, dl_rgba16_load_tex_block, main_font_lut, main_hud_lut } from "../bin/segment2"
import * as MathUtil from "../engine/math_util"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../include/config"
import * as Gbi from "../include/gbi"
import { menu_hud_lut } from "../levels/menu/leveldata"
import { DIALOG_NONE } from "../text/us/dialogs"
import { GameInstance as Game } from "./Game"

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

export const MENU_MTX_PUSH = 1
export const MENU_MTX_NOPUSH = 2

export const TEXT_THE_RAW = [ASCII_TO_DIALOG('t'), ASCII_TO_DIALOG('h'), ASCII_TO_DIALOG('e'), 0x00]
export const TEXT_YOU_RAW = [ASCII_TO_DIALOG('y'), ASCII_TO_DIALOG('o'), ASCII_TO_DIALOG('u'), 0x00]

export const MAX_STRING_WIDTH = 16

export const HUD_LUT_JPMENU = 1
export const HUD_LUT_GLOBAL = 1

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
            DIALOG_MARK_NONE: 0,
            DIALOG_MARK_DAKUTEN: 1,
            DIALOG_MARK_HANDAKUTEN: 2
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

        this.gDialogColorFadeTimer
        this.gLastDialogLineNum
        this.gDialogVariable
        this.gDialogTextAlpha

        this.gDialogID = -1
        this.gDialogVariable = 0
        this.gDialogBoxType = 0
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

        // // Should produce G_RDPHALF_1 in Fast3D
        // gSPPerspNormalize(gDisplayListHead++, 0xFFFF);

        Gbi.gSPMatrix(Game.gDisplayList, matrix, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
    }

    render_generic_char(c) {
        this.fontLUT = main_font_lut
        this.packedTexture = this.fontLUT[c]

        Gbi.gDPPipeSync(Game.gDisplayList)
        Gbi.gDPSetTextureImage(gDisplayList, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, this.packedTexture)
        Gbi.gSPDisplayList(gDisplayList, dl_ia_text_tex_settings)
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

        while (str[this.strPos] != DIALOG_CHAR_TERMINATOR) {
            switch (str[this.strPos]) {
                case DIALOG_CHAR_DAKUTEN:
                    this.mark = DIALOG_CHAR_DAKUTEN
                    break
                case DIALOG_CHAR_PERIOD_OR_HANDAKUTEN:
                    this.mark = DIALOG_MARK_HANDAKUTEN
                    break
                case DIALOG_CHAR_NEWLINE:
                    Gbi.gSPPopMatrix(gDisplayList, Gbi.G_MTX_MODELVIEW);
                    this.create_dl_translation_matrix(MENU_MTX_PUSH, x, y - (this.lineNum * MAX_STRING_WIDTH), 0.0)
                    lineNum++
                    break
                case DIALOG_CHAR_PERIOD:
                    this.create_dl_translation_matrix(MENU_MTX_PUSH, -2.0, -5.0, 0.0)
                    this.render_generic_char(DIALOG_CHAR_PERIOD_OR_HANDAKUTEN)
                    Gbi.gSPPopMatrix(gDisplayList, Gbi.G_MTX_MODELVIEW)
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
                    this.render_generic_char(str[this.strPos])
                    if (this.mark != DIALOG_MARK_NONE) {
                        this.create_dl_translation_matrix(MENU_MTX_PUSH, 5.0, 5.0, 0.0)
                        this.render_generic_char(DIALOG_CHAR_MARK_START + this.mark)
                        Gbi.gSPPopMatrix(gDisplayList, Gbi.G_MTX_MODELVIEW)
                        mark = DIALOG_MARK_NONE
                    }

                    this.create_dl_translation_matrix(MENU_MTX_NOPUSH, this.CHAR_WIDTH_DEFAULT, 0.0, 0.0)
                    break
            }

            this.strPos++
        }

        Gbi.gSPPopMatrix(gDisplayList, Gbi.G_MTX_MODELVIEW)
    }
    
    print_hud_lut_string(hudLUT, x, y, str) {
        this.strPos = 0
        this.hudLUT1 = menu_hud_lut
        this.hudLUT2 = main_hud_lut
        this.curX = x
        this.curY = y
        hudLUT == HUD_LUT_JPMENU ? this.xStride = 16 : this.xStride = 12

        while (str[this.strPos] != GLOBAL_CHAR_TERMINATOR) {
            switch (str[this.strPos]) {
                case GLOBAL_CHAR_SPACE:
                    this.curX += 8
                    break
                default:
                    Gbi.gDPPipeSync(gDisplayList)

                    hudLUT == HUD_LUT_JPMENU ? Gbi.gDPSetTextureImage(gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, this.hudLUT1[str[this.strPos]])
                        : Gbi.gDPSetTextureImage(gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, this.hudLUT2[str[this.strPos]])
                    
                        Gbi.gSPDisplayList(gDisplayList, dl_rgba16_load_tex_block)
                        Gbi.gSPTextureRectangle(gDisplayList, this.curX << 2, this.curY << 2, (curX + 16) << 2, (curY + 16) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 1 << 10, 1 << 10)

                        this.curX += this.xStride
            }

            this.strPos++
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