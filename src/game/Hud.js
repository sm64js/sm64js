import { CameraInstance as Camera } from "./Camera"
import * as Gbi from "../include/gbi"
import { dl_hud_img_load_tex_block, main_hud_lut, dl_hud_img_begin, dl_hud_img_end, main_hud_camera_lut } from "../common_gfx/segment2"
import { power_meter_health_segments_lut, dl_power_meter_base, dl_power_meter_health_segments_begin, dl_power_meter_health_segments_end } from "./behaviors/power_meter.inc.js"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import * as Mario from "./Mario"
import * as MathUtil from "../engine/math_util"
import * as IngameMenu from "./IngameMenu"
import { PrintInstance as Print } from "./Print"
import * as GfxDimensions from "../include/gfx_dimensions"

class PowerMeterHUD {
    constructor(animation, x, y, unused) {
        this.animation = animation;
        this.x = x;
        this.y = y;
        this.unused = unused;
    }

};

class UnusedHUDStruct {
    constructor(unused1, unused2, unused3) {
        this.unused1 = unused1;
        this.unused2 = unused2;
        this.unused3 = unused3;
    }

};

class CameraHUD {
    constructor() {
        this.status = status;
    }
};


class Hud {
    constructor() {
        // PowerMeterAnimation enum
        this.POWER_METER_HIDDEN = 0;
        this.POWER_METER_EMPHASIZED = 1;
        this.POWER_METER_DEEMPHASIZING = 2;
        this.POWER_METER_HIDING = 3;
        this.POWER_METER_VISIBLE = 4;

        // CameraHUDLut enum
        this.GLYPH_CAM_CAMERA = 0;
        this.GLYPH_CAM_MARIO_HEAD = 1;
        this.GLYPH_CAM_LAKITU_HEAD = 2;
        this.GLYPH_CAM_FIXED = 3;
        this.GLYPH_CAM_ARROW_UP = 4;
        this.GLYPH_CAM_ARROW_DOWN = 5;

        // Stores health segmented value defined by numHealthWedges
        // When the HUD is rendered this value is 8, full health.
        this.sPowerMeterStoredHealth = 0;

        this.sPowerMeterHUD = new PowerMeterHUD(this.POWER_METER_HIDDEN, 140, 166, 1.0);

        // Power Meter timer that keeps counting when it's visible.
        // Gets reset when the health is filled and stops counting
        // when the power meter is hidden.
        this.sPowerMeterVisibleTimer = 0;

        this.sUnusedHUDValues = new UnusedHUDStruct(0x00, 0x0A, 0x00);

        this.sCameraHUD = new CameraHUD(0);

        var VERSION_JP = false;

        if (VERSION_JP) {
            this.HUD_TOP_Y = 210;
        } else {
            this.HUD_TOP_Y = 209;
        }

        if (VERSION_JP) {
            this.HUD_STARS_X = 73;
        } else {
            this.HUD_STARS_X = 78;
        }
    }

    /**
     * Renders a rgba16 16x16 glyph texture from a table list.
     */
    render_hud_tex_lut(x, y, texture) {
        // Gbi.gDPPipeSync(Game.gDisplayList);
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, texture);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_load_tex_block);
        Gbi.gSPTextureRectangle(Game.gDisplayList, x << 2, y << 2, (x + 15) << 2, (y + 15) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 4 << 10, 1 << 10);
    }

    /**
     * Renders a rgba16 8x8 glyph texture from a table list.
     */
    render_hud_small_tex_lut(x, y, texture) {
        // Gbi.gDPSetTile(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD);
        // Gbi.gDPTileSync(Game.gDisplayList);
        // Gbi.gDPSetTile(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 2, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 3, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 3, Gbi.G_TX_NOLOD);
        Gbi.gDPSetTileSize(Game.gDisplayList, Gbi.G_TX_RENDERTILE, 0, 0, (8 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (8 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC);
        // Gbi.gDPPipeSync(Game.gDisplayList);
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, texture);
        // Gbi.gDPLoadSync(Game.gDisplayList);
        // Gbi.gDPLoadBlock(Game.gDisplayList, Gbi.G_TX_LOADTILE, 0, 0, 8 * 8 - 1, Gbi.CALC_DXT(8, Gbi.G_IM_SIZ_16b_BYTES));
        Gbi.gSPTextureRectangle(Game.gDisplayList, x << 2, y << 2, (x + 7) << 2, (y + 7) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 4 << 10, 1 << 10);
    }

    /**
    * Renders power meter health segment texture using a table list.
    */
    render_power_meter_health_segment(numHealthWedges) {
        var healthLUT = power_meter_health_segments_lut;

        // Gbi.gDPPipeSync(Game.gDisplayList);
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, healthLUT[numHealthWedges - 1]);
        // Gbi.gDPLoadSync(Game.gDisplayList);
        // Gbi.gDPLoadBlock(Game.gDisplayList, Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1, Gbi.CALC_DXT(32, Gbi.G_IM_SIZ_16b_BYTES));
        Gbi.gSP1Triangle(Game.gDisplayList, 0, 1, 2, 0);
        Gbi.gSP1Triangle(Game.gDisplayList, 0, 2, 3, 0);
    }

    /**
     * Renders power meter display lists.
     * That includes the "POWER" base and the colored health segment textures.
     */
    render_dl_power_meter(numHealthWedges) {
        var mtx;

        MathUtil.guTranslate(mtx, HudInstance.sPowerMeterHUD.x, HudInstance.sPowerMeterHUD.y, 0);

        Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_power_meter_base);

        if (numHealthWedges != 0) {
            Gbi.gSPDisplayList(Game.gDisplayList, dl_power_meter_health_segments_begin);
            HudInstance.render_power_meter_health_segment(numHealthWedges);
            Gbi.gSPDisplayList(Game.gDisplayList, dl_power_meter_health_segments_end);
        }

        // Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    /**
     * Power meter animation called when there's less than 8 health segments
     * Checks its timer to later change into deemphasizing mode.
     */
    animate_power_meter_emphasized() {
        var hudDisplayFlags = LevelUpdate.gHudDisplay.flags;

        if (!(hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_EMPHASIZE_POWER)) {
            if (HudInstance.sPowerMeterVisibleTimer == 45.0) {
                HudInstance.sPowerMeterHUD.animation = HudInstance.POWER_METER_DEEMPHASIZING;
            }
        } else {
            HudInstance.sPowerMeterVisibleTimer = 0;
        }
    }

    /**
     * Power meter animation called after emphasized mode.
     * Moves power meter y pos speed until it's at 200 to be visible.
     */
    animate_power_meter_deemphasizing() {
        var speed = 5;

        if (HudInstance.sPowerMeterHUD.y >= 181) {
            speed = 3;
        }

        if (HudInstance.sPowerMeterHUD.y >= 191) {
            speed = 2;
        }

        if (HudInstance.sPowerMeterHUD.y >= 196) {
            speed = 1;
        }

        HudInstance.sPowerMeterHUD.y += speed;

        if (HudInstance.sPowerMeterHUD.y >= 201) {
            HudInstance.sPowerMeterHUD.y = 200;
            HudInstance.sPowerMeterHUD.animation = HudInstance.POWER_METER_VISIBLE;
        }
    }

    /**
     * Power meter animation called when there's 8 health segments.
     * Moves power meter y pos quickly until it's at 301 to be hidden.
     */
    animate_power_meter_hiding() {
        HudInstance.sPowerMeterHUD.y += 20;
        if (HudInstance.sPowerMeterHUD.y >= 301) {
            HudInstance.sPowerMeterHUD.animation = HudInstance.POWER_METER_HIDDEN;
            HudInstance.sPowerMeterVisibleTimer = 0;
        }
    }

    /**
     * Handles power meter actions depending of the health segments values.
     */
    handle_power_meter_actions(numHealthWedges) {
        // Show power meter if health is not full, less than 8
        if (numHealthWedges < 8 && HudInstance.sPowerMeterStoredHealth == 8 && sPowerMeterHUD.animation == HudInstance.POWER_METER_HIDDEN) {
            HudInstance.sPowerMeterHUD.animation = HudInstance.POWER_METER_EMPHASIZED;
            HudInstance.sPowerMeterHUD.y = 166;
        }

        // Show power meter if health is full, has 8
        if (numHealthWedges == 8 && HudInstance.sPowerMeterStoredHealth == 7) {
            HudInstance.sPowerMeterVisibleTimer = 0;
        }

        // After health is full, hide power meter
        if (numHealthWedges == 8 && HudInstance.sPowerMeterVisibleTimer > 45.0) {
            HudInstance.sPowerMeterHUD.animation = HudInstance.POWER_METER_HIDING;
        }

        // Update to match health value
        HudInstance.sPowerMeterStoredHealth = numHealthWedges;

        // If Mario is swimming, keep power meter visible
        if (Camera.gPlayerCameraState.action & Mario.ACT_FLAG_SWIMMING) {
            if (HudInstance.sPowerMeterHUD.animation == HudInstance.POWER_METER_HIDDEN || HudInstance.sPowerMeterHUD.animation == HudInstance.POWER_METER_EMPHASIZED) {
                HudInstance.sPowerMeterHUD.animation = HudInstance.POWER_METER_DEEMPHASIZING;
                HudInstance.sPowerMeterHUD.y = 166;
            }
            HudInstance.sPowerMeterVisibleTimer = 0;
        }
    }

    /**
     * Renders the power meter that shows when Mario is in underwater
     * or has taken damage and has less than 8 health segments.
     * And calls a power meter animation function depending of the value defined.
     */
    render_hud_power_meter() {
        var shownHealthWedges = LevelUpdate.gHudDisplay.wedges;

        if (HudInstance.sPowerMeterHUD.animation != HudInstance.POWER_METER_HIDING) {
            HudInstance.handle_power_meter_actions(shownHealthWedges);
        }

        if (HudInstance.sPowerMeterHUD.animation == HudInstance.POWER_METER_HIDDEN) {
            return;
        }

        switch (HudInstance.sPowerMeterHUD.animation) {
            case HudInstance.POWER_METER_EMPHASIZED:
                HudInstance.animate_power_meter_emphasized();
                break;
            case HudInstance.POWER_METER_DEEMPHASIZING:
                HudInstance.animate_power_meter_deemphasizing();
                break;
            case HudInstance.POWER_METER_HIDING:
                HudInstance.animate_power_meter_hiding();
                break;
            default:
                break;
        }

        HudInstance.render_dl_power_meter(shownHealthWedges);

        HudInstance.sPowerMeterVisibleTimer += 1;
    }

    /**
     * Renders the amount of lives Mario has.
     */
    render_hud_mario_lives() {
        Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE(22), HudInstance.HUD_TOP_Y, ","); // 'Mario Head' glyph
        Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE(38), HudInstance.HUD_TOP_Y, "*"); // 'X' glyph
        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE(54), HudInstance.HUD_TOP_Y, "%d", LevelUpdate.gHudDisplay.lives);
    }

    /**
     * Renders the amount of coins collected.
     */
    render_hud_coins() {
        Print.print_text(168, HudInstance.HUD_TOP_Y, "+"); // 'Coin' glyph
        Print.print_text(184, HudInstance.HUD_TOP_Y, "*"); // 'X' glyph
        Print.print_text_fmt_int(198, HudInstance.HUD_TOP_Y, "%d", LevelUpdate.gHudDisplay.coins);
    }

    /**
     * Renders the amount of stars collected.
     * Disables "X" glyph when Mario has 100 stars or more.
     */
    render_hud_stars() {
        var showX = 0;

        if (LevelUpdate.gHudFlash == 1 && LevelUpdate.gGlobalTimer & 0x08) {
            return;
        }

        if (LevelUpdate.gHudDisplay.stars < 100) {
            showX = 1;
        }

        Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(HudInstance.HUD_STARS_X), HudInstance.HUD_TOP_Y, "-"); // 'Star' glyph
        if (showX == 1) {
            Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(HudInstance.HUD_STARS_X) + 16, HudInstance.HUD_TOP_Y, "*"); // 'X' glyph
        }
        Print.print_text_fmt_int((showX * 14) + GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(HudInstance.HUD_STARS_X - 16), HudInstance.HUD_TOP_Y, "%d", LevelUpdate.gHudDisplay.stars);
    }

    /**
     * Unused function that renders the amount of keys collected.
     * Leftover function from the beta version of the game.
     */
    render_hud_keys() {
        var i;

        for (var i = 0; i < LevelUpdate.gHudDisplay.keys; i++) {
            Print.print_text((i * 16) + 220, 142, "/"); // unused glyph - beta key
        }
    }

    /**
     * Renders the timer when Mario start sliding in PSS.
     */
    render_hud_timer() {
        var hudLUT = main_hud_lut;

        var timerValFrames = LevelUpdate.gHudDisplay.timer;
        // if (VERSION_EU) {
        // switch (eu_get_language()) {
        //     case LANGUAGE_ENGLISH:
        //         Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(150), 185, "TIME");
        //         break;
        //     case LANGUAGE_FRENCH:
        //         Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(155), 185, "TEMPS");
        //         break;
        //     case LANGUAGE_GERMAN:
        //         Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(150), 185, "ZEIT");
        //         break;
        // }
        // }
        var timerMins = timerValFrames / (30 * 60);
        var timerSecs = (timerValFrames - (timerMins * 1800)) / 30;

        var timerFracSecs = ((timerValFrames - (timerMins * 1800) - (timerSecs * 30)) & 0xFFFF) / 3;

        // if (VERSION_EU) {
        // Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(150), 185, "TIME");
        // }
        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(91), 185, "%0d", timerMins);
        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(71), 185, "%02d", timerSecs);
        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(37), 185, "%d", timerFracSecs);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_begin);
        HudInstance.render_hud_tex_lut(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(81), 32, hudLUT[GLYPH_APOSTROPHE]);
        HudInstance.render_hud_tex_lut(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(46), 32, hudLUT[GLYPH_DOUBLE_QUOTE]);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_end);
    }

    /**
     * Sets HUD status camera value depending of the actions
     * defined in update_camera_status.
     */
    set_hud_camera_status(status) {
        HudInstance.sCameraHUD.status = status;
    }

    /**
     * Renders camera HUD glyphs using a table list, depending of
     * the camera status called, a defined glyph is rendered.
     */
    render_hud_camera_status() {
        var cameraLUT = main_hud_camera_lut;
        var x = GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(54);
        var y = 205;

        if (HudInstance.sCameraHUD.status == Camera.CAM_STATUS_NONE) {
            return;
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_begin);
        HudInstance.render_hud_tex_lut(x, y, cameraLUT[HudInstance.GLYPH_CAM_CAMERA]);

        switch (HudInstance.sCameraHUD.status & Camera.CAM_STATUS_MODE_GROUP) {
            case Camera.CAM_STATUS_MARIO:
                render_hud_tex_lut(x + 16, y, cameraLUT[HudInstance.GLYPH_CAM_MARIO_HEAD]);
                break;
            case Camera.CAM_STATUS_LAKITU:
                render_hud_tex_lut(x + 16, y, cameraLUT[HudInstance.GLYPH_CAM_LAKITU_HEAD]);
                break;
            case Camera.CAM_STATUS_FIXED:
                render_hud_tex_lut(x + 16, y, cameraLUT[HudInstance.GLYPH_CAM_FIXED]);
                break;
        }

        switch (HudInstance.sCameraHUD.status & Camera.CAM_STATUS_C_MODE_GROUP) {
            case Camera.CAM_STATUS_C_DOWN:
                HudInstance.render_hud_small_tex_lut(x + 4, y + 16, cameraLUT[HudInstance.GLYPH_CAM_ARROW_DOWN]);
                break;
            case Camera.CAM_STATUS_C_UP:
                HudInstance.render_hud_small_tex_lut(x + 4, y - 8, cameraLUT[HudInstance.GLYPH_CAM_ARROW_UP]);
                break;
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_end);
    }

    /**
     * Render HUD strings using hudDisplayFlags with it's render functions,
     * excluding the cannon reticle which detects a camera preset for it.
     */
    render_hud() {
        var hudDisplayFlags = LevelUpdate.gHudDisplay.flags;

        if (hudDisplayFlags == LevelUpdate.HUD_DISPLAY_NONE) {
            HudInstance.sPowerMeterHUD.animation = HudInstance.POWER_METER_HIDDEN;
            HudInstance.sPowerMeterStoredHealth = 8;
            HudInstance.sPowerMeterVisibleTimer = 0;
        } else {
            var VERSION_EU = false;
            if (VERSION_EU) {
                // // basically create_dl_ortho_matrix but guOrtho screen width is different

                // mtx = alloc_display_list(sizeof(* mtx));
                // if (mtx == NULL) {
                //     return;
                // }
                // create_dl_identity_matrix();
                // guOrtho(mtx, -16.0f, SCREEN_WIDTH + 16, 0, SCREEN_HEIGHT, -10.0, 10.0, 1.0);
                // gSPPerspNormalize(Game.gDisplayList, 0xFFFF);
                // gSPMatrix(Game.gDisplayList, VIRTUAL_TO_PHYSICAL(mtx), Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH);
            } else {
                IngameMenu.create_dl_ortho_matrix();
            }


            if (LevelUpdate.gCurrentArea != null && LevelUpdate.gCurrentArea.camera.mode == Camera.CAMERA_MODE_INSIDE_CANNON) {
                HudInstance.render_hud_cannon_reticle();
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_LIVES) {
                HudInstance.render_hud_mario_lives();
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_COIN_COUNT) {
                HudInstance.render_hud_coins();
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_STAR_COUNT) {
                HudInstance.render_hud_stars();
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_KEYS) {
                HudInstance.render_hud_keys();
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_CAMERA_AND_POWER) {
                HudInstance.render_hud_power_meter();
                HudInstance.render_hud_camera_status();
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_TIMER) {
                HudInstance.render_hud_timer();
            }
        }
    }
}

export const HudInstance = new Hud();