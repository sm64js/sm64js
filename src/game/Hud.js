import { CAMERA_MODE_INSIDE_CANNON, CameraInstance as Camera } from "./Camera"
import { 
    CAM_STATUS_NONE,
    CAM_STATUS_MARIO,
    CAM_STATUS_LAKITU,
    CAM_STATUS_FIXED,
    CAM_STATUS_C_UP,
    CAM_STATUS_C_DOWN,
    CAM_STATUS_MODE_GROUP,
    CAM_STATUS_C_MODE_GROUP
} from "./Camera"
import * as Gbi from "../include/gbi"
import { dl_hud_img_load_tex_block, main_hud_lut, dl_hud_img_begin, dl_hud_img_end, main_hud_camera_lut } from "../bin/segment2"
import { power_meter_health_segments_lut, dl_power_meter_base, dl_power_meter_health_segments_begin, dl_power_meter_health_segments_end } from "../actors/power_meter/model.inc"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import * as Mario from "./Mario"
import * as MathUtil from "../engine/math_util"
import { IngameMenuInstance as IngameMenu } from "./IngameMenu"
import { PrintInstance as Print } from "./Print"
import * as GfxDimensions from "../include/gfx_dimensions"
import { GameInstance as Game } from "./Game"
import { AreaInstance as Area } from "./Area"

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
        this.HUD_TOP_Y = 209;
        this.HUD_STARS_X = 78;
    }

    render_hud_tex_lut(x, y, texture) {
        // Gbi.gDPPipeSync(Game.gDisplayList);
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, texture);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_load_tex_block);
        x = parseInt(x / 2.0)
        y = parseInt(y / 2.0)
        Gbi.gSPTextureRectangle(Game.gDisplayList, x << 2, y << 2, (x + 15.0 / 2.0) << 2, (y + 15.0 / 2.0) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 8 << 10, 2 << 10);
    }

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

    render_power_meter_health_segment(numHealthWedges) {
        const healthLUT = power_meter_health_segments_lut
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, healthLUT[numHealthWedges - 1])
        Gbi.gDPLoadBlock(Game.gDisplayList, Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1)
        Gbi.gSP1Triangle(Game.gDisplayList, 0, 1, 2, 0)
        Gbi.gSP1Triangle(Game.gDisplayList, 0, 2, 3, 0)
    }

    render_dl_power_meter(numHealthWedges) {
        const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.guTranslate(mtx, this.sPowerMeterHUD.x, this.sPowerMeterHUD.y, 0);
        Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_MUL | Gbi.G_MTX_PUSH);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_power_meter_base);

        if (numHealthWedges != 0) {
            Gbi.gSPDisplayList(Game.gDisplayList, dl_power_meter_health_segments_begin);
            this.render_power_meter_health_segment(numHealthWedges);
            Gbi.gSPDisplayList(Game.gDisplayList, dl_power_meter_health_segments_end);
        }

        // Gbi.gSPPopMatrix(Game.gDisplayList, Gbi.G_MTX_MODELVIEW);
    }

    animate_power_meter_emphasized() {
        var hudDisplayFlags = LevelUpdate.gHudDisplay.flags;


        if (!(hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_EMPHASIZE_POWER)) {
            if (this.sPowerMeterVisibleTimer == 45.0) {
                this.sPowerMeterHUD.animation = this.POWER_METER_DEEMPHASIZING;
            }
        } else {
            this.sPowerMeterVisibleTimer = 0;
        }
    }

    animate_power_meter_deemphasizing() {
        var speed = 5;

        if (this.sPowerMeterHUD.y >= 181) {
            speed = 3;
        }

        if (this.sPowerMeterHUD.y >= 191) {
            speed = 2;
        }

        if (this.sPowerMeterHUD.y >= 196) {
            speed = 1;
        }

        this.sPowerMeterHUD.y += speed;

        if (this.sPowerMeterHUD.y >= 201) {
            this.sPowerMeterHUD.y = 200;
            this.sPowerMeterHUD.animation = this.POWER_METER_VISIBLE;
        }
    }

    animate_power_meter_hiding() {
        this.sPowerMeterHUD.y += 20;
        if (this.sPowerMeterHUD.y >= 301) {
            this.sPowerMeterHUD.animation = this.POWER_METER_HIDDEN;
            this.sPowerMeterVisibleTimer = 0;
        }
    }

    handle_power_meter_actions(numHealthWedges) {
        // Show power meter if health is not full, less than 8
        if (numHealthWedges < 8 && this.sPowerMeterStoredHealth == 8 && this.sPowerMeterHUD.animation == this.POWER_METER_HIDDEN) {
            this.sPowerMeterHUD.animation = this.POWER_METER_EMPHASIZED
            this.sPowerMeterHUD.y = 166
        }

        // Show power meter if health is full, has 8
        if (numHealthWedges == 8 && this.sPowerMeterStoredHealth == 7) {
            this.sPowerMeterVisibleTimer = 0;
        }

        // After health is full, hide power meter
        if (numHealthWedges == 8 && this.sPowerMeterVisibleTimer > 45.0) {
            this.sPowerMeterHUD.animation = this.POWER_METER_HIDING;
        }

        // Update to match health value
        this.sPowerMeterStoredHealth = numHealthWedges;

        // If Mario is swimming, keep power meter visible
        if (Camera.gPlayerCameraState.action & Mario.ACT_FLAG_SWIMMING) {
            if (this.sPowerMeterHUD.animation == this.POWER_METER_HIDDEN || this.sPowerMeterHUD.animation == this.POWER_METER_EMPHASIZED) {
                this.sPowerMeterHUD.animation = this.POWER_METER_DEEMPHASIZING;
                this.sPowerMeterHUD.y = 166;
            }
            this.sPowerMeterVisibleTimer = 0;
        }
    }

    render_hud_power_meter() {
        const shownHealthWedges = LevelUpdate.gHudDisplay.wedges;

        if (this.sPowerMeterHUD.animation != this.POWER_METER_HIDING) {
            this.handle_power_meter_actions(shownHealthWedges)
        }

        if (this.sPowerMeterHUD.animation == this.POWER_METER_HIDDEN) {
            return;
        }

        switch (this.sPowerMeterHUD.animation) {
            case this.POWER_METER_EMPHASIZED:
                this.animate_power_meter_emphasized();
                break;
            case this.POWER_METER_DEEMPHASIZING:
                this.animate_power_meter_deemphasizing();
                break;
            case this.POWER_METER_HIDING:
                this.animate_power_meter_hiding();
                break;
            default:
                break;
        }

        this.render_dl_power_meter(shownHealthWedges);

        this.sPowerMeterVisibleTimer += 1;
    }

    render_hud_mario_lives() {
        Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE(22), this.HUD_TOP_Y, ","); // 'Mario Head' glyph
        Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE(38), this.HUD_TOP_Y, "*"); // 'X' glyph
        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE(54), this.HUD_TOP_Y, "%d", LevelUpdate.gHudDisplay.lives);
    }

    render_hud_coins() {
        Print.print_text(168, this.HUD_TOP_Y, "+"); // 'Coin' glyph
        Print.print_text(184, this.HUD_TOP_Y, "*"); // 'X' glyph
        Print.print_text_fmt_int(198, this.HUD_TOP_Y, "%d", LevelUpdate.gHudDisplay.coins);
    }

    render_hud_stars() {
        var showX = 0;

        if (LevelUpdate.gHudFlash == 1 && window.gGlobalTimer & 0x08) {
            return;
        }

        if (LevelUpdate.gHudDisplay.stars < 100) {
            showX = 1;
        }

        Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(this.HUD_STARS_X), this.HUD_TOP_Y, "-"); // 'Star' glyph
        if (showX == 1) {
            Print.print_text(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(this.HUD_STARS_X) + 16, this.HUD_TOP_Y, "*"); // 'X' glyph
        }
        Print.print_text_fmt_int((showX * 14) + GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(this.HUD_STARS_X - 16), this.HUD_TOP_Y, "%d", LevelUpdate.gHudDisplay.stars);
    }

    render_hud_keys() {
        var i;

        for (var i = 0; i < LevelUpdate.gHudDisplay.keys; i++) {
            Print.print_text((i * 16) + 220, 142, "/"); // unused glyph - beta key
        }
    }

    render_hud_timer() {
        var hudLUT = main_hud_lut;

        var timerValFrames = LevelUpdate.gHudDisplay.timer;
        var timerMins = timerValFrames / (30 * 60);
        var timerSecs = (timerValFrames - (timerMins * 1800)) / 30;

        var timerFracSecs = ((timerValFrames - (timerMins * 1800) - (timerSecs * 30)) & 0xFFFF) / 3;

        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(91), 185, "%0d", timerMins);
        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(71), 185, "%02d", timerSecs);
        Print.print_text_fmt_int(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(37), 185, "%d", timerFracSecs);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_begin);
        this.render_hud_tex_lut(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(81), 32, hudLUT[this.GLYPH_APOSTROPHE]);
        this.render_hud_tex_lut(GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(46), 32, hudLUT[this.GLYPH_DOUBLE_QUOTE]);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_end);
    }

    set_hud_camera_status(status) {
        this.sCameraHUD.status = status;
    }

    render_hud_camera_status() {
        var cameraLUT = main_hud_camera_lut;
        var x = GfxDimensions.GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE(54);
        var y = 205;

        if (this.sCameraHUD.status == CAM_STATUS_NONE) {
            return;
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_begin);
        this.render_hud_tex_lut(x, y, cameraLUT[this.GLYPH_CAM_CAMERA]);


        switch (this.sCameraHUD.status & CAM_STATUS_MODE_GROUP) {
            case CAM_STATUS_MARIO:
                this.render_hud_tex_lut(x + 16, y, cameraLUT[this.GLYPH_CAM_MARIO_HEAD]);
                break;
            case CAM_STATUS_LAKITU:
                this.render_hud_tex_lut(x + 16, y, cameraLUT[this.GLYPH_CAM_LAKITU_HEAD]);
                break;
            case CAM_STATUS_FIXED:
                this.render_hud_tex_lut(x + 16, y, cameraLUT[this.GLYPH_CAM_FIXED]);
                break;
        }

        switch (this.sCameraHUD.status & CAM_STATUS_C_MODE_GROUP) {
            case CAM_STATUS_C_DOWN:
                this.render_hud_small_tex_lut(x + 4, y + 16, cameraLUT[this.GLYPH_CAM_ARROW_DOWN]);
                break;
            case CAM_STATUS_C_UP:
                this.render_hud_small_tex_lut(x + 4, y - 8, cameraLUT[this.GLYPH_CAM_ARROW_UP]);
                break;
        }

        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_end);
    }

    render_hud() {
        const hudDisplayFlags = LevelUpdate.gHudDisplay.flags;

        if (hudDisplayFlags == LevelUpdate.HUD_DISPLAY_NONE || hudDisplayFlags == undefined) {
            this.sPowerMeterHUD.animation = this.POWER_METER_HIDDEN
            this.sPowerMeterStoredHealth = 8
            this.sPowerMeterVisibleTimer = 0
        } else {
            IngameMenu.create_dl_ortho_matrix();
            if (Area.gCurrentArea != null && Area.gCurrentArea.camera.mode == CAMERA_MODE_INSIDE_CANNON) {
                IngameMenu.render_hud_cannon_reticle()
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_LIVES) {
                this.render_hud_mario_lives()
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_COIN_COUNT) {
                this.render_hud_coins()
            }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_STAR_COUNT) {
                this.render_hud_stars()
            }

            // if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_KEYS) {
            //     this.render_hud_keys();
            // }

            if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_CAMERA_AND_POWER) {
                this.render_hud_power_meter()
                this.render_hud_camera_status()
            }

            // if (hudDisplayFlags & LevelUpdate.HUD_DISPLAY_FLAG_TIMER) {
            //     this.render_hud_timer();
            // }
        }
    }
}

export const HudInstance = new Hud();