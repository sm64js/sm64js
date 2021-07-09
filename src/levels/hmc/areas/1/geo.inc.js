// Hmc

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_RETURN, GEO_ASM,
    GEO_NODE_SCREEN_AREA, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_SWITCH_CASE, GEO_BRANCH, GEO_RENDER_OBJ,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT, LAYER_OPAQUE_DECAL, PAINTING_ID
} from "../../../../engine/GeoLayout"

import { hmc_seg7_dl_070078B0 } from "./1/model.inc"

import { hmc_seg7_dl_07007B50 } from "./2/model.inc"

import { hmc_seg7_dl_070080E8 } from "./3/model.inc"

import { hmc_seg7_dl_070093F0 } from "./4/model.inc"

import { hmc_seg7_dl_0700E448 } from "./5/model.inc"

import { hmc_seg7_dl_0700EF00 } from "./6/model.inc"

import { hmc_seg7_dl_0700F3E8 } from "./7/model.inc"

import { hmc_seg7_dl_0700FA40 } from "./8/model.inc"

import { hmc_seg7_dl_0700FEF0 } from "./9/model.inc"

import { hmc_seg7_dl_07010070 } from "./10/model.inc"

import { hmc_seg7_dl_07013CA8 } from "./11/model.inc"

import { hmc_seg7_dl_07013E80 } from "./12/model.inc"

import { hmc_seg7_dl_07014300 } from "./13/model.inc"

import { hmc_seg7_dl_07014B08 } from "./14/model.inc"

import { hmc_seg7_dl_07014C00 } from "./15/model.inc"

import { hmc_seg7_dl_07014E48 } from "./16/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { hmc_seg7_dl_070173A8 } from "./17/model.inc"

import { hmc_seg7_dl_07017C98 } from "./18/model.inc"

import { hmc_seg7_dl_07018200 } from "./19/model.inc"

import { hmc_seg7_dl_07019248 } from "./20/model.inc"

import { hmc_seg7_dl_07019368 } from "./21/model.inc"

import { hmc_seg7_dl_0701A080 } from "./22/model.inc"

import { hmc_seg7_dl_0701A400 } from "./23/model.inc"

import { hmc_seg7_dl_0701E820 } from "./24/model.inc"

import { hmc_seg7_dl_0701F1B0 } from "./25/model.inc"

import { hmc_seg7_dl_0701F690 } from "./26/model.inc"

import { hmc_seg7_dl_0701F818 } from "./27/model.inc"

import { hmc_seg7_dl_0701FD58 } from "./28/model.inc"

import { hmc_seg7_dl_07020FD0 } from "./29/model.inc"

import {
    /*geo_painting_update, geo_painting_draw, */geo_switch_area
} from "../../../../game/ObjectHelpers"

import { hmc_seg7_dl_07021760 } from "./30/model.inc"

import { hmc_seg7_dl_07021BA0 } from "./31/model.inc"

import { hmc_seg7_dl_070228A0 } from "./32/model.inc"

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E0005E8
export const hmc_geo_0005E8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070078B0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07007B50),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_070080E8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070093F0),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000618
export const hmc_geo_000618 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700E448),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0700EF00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700FA40),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000658
export const hmc_geo_000658 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07013CA8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07013E80),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014300),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014B08),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07014C00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014E48),
        GEO_ASM(0, geo_movtex_pause_control),
        //GEO_ASM(0x0702, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0006A8
export const hmc_geo_0006A8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070173A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07017C98),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07018200),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07019248),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07019368),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0006E0
export const hmc_geo_0006E0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701A080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701A400),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000700
export const hmc_geo_000700 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701E820),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701F1B0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F690),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F818),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701FD58),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0701, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000748
export const hmc_geo_000748 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07020FD0),
        //GEO_ASM(0, geo_painting_update),
        //GEO_ASM(PAINTING_ID(0, 0), geo_painting_draw),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000770
export const hmc_geo_000770 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07021760),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07021BA0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070228A0),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000798
export const hmc_geo_000798 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070078B0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07007B50),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_070080E8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070093F0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700E448),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0700EF00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700FA40),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0007F8
export const hmc_geo_0007F8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070078B0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07007B50),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_070080E8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070093F0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070173A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07017C98),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07018200),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07019248),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07019368),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000850
export const hmc_geo_000850 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700E448),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0700EF00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700FA40),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07013CA8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07013E80),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014300),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014B08),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07014C00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014E48),
        GEO_ASM(0, geo_movtex_pause_control),
        //GEO_ASM(0x0702, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0008D0
export const hmc_geo_0008D0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700E448),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0700EF00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0700FA40),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070173A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07017C98),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07018200),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07019248),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07019368),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000938
export const hmc_geo_000938 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07013CA8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07013E80),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014300),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014B08),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07014C00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014E48),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701A080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701A400),
        GEO_ASM(0, geo_movtex_pause_control),
        //GEO_ASM(0x0702, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000998
export const hmc_geo_000998 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07013CA8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07013E80),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014300),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014B08),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07014C00),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07014E48),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701E820),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701F1B0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F690),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F818),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701FD58),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0701, geo_movtex_draw_water_regions),
        //GEO_ASM(0x0702, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000A18
export const hmc_geo_000A18 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070173A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07017C98),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07018200),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07019248),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07019368),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701E820),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701F1B0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F690),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F818),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701FD58),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0701, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000A88
export const hmc_geo_000A88 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701E820),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701F1B0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F690),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F818),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701FD58),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07020FD0),
        //GEO_ASM(0, geo_painting_update),
        //GEO_ASM(PAINTING_ID(0, 0), geo_painting_draw),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0701, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000AE8
export const hmc_geo_000AE8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701E820),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701F1B0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F690),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_0701F818),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701FD58),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07021760),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07021BA0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070228A0),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0701, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000B48
export const hmc_geo_000B48 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_070173A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_07017C98),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07018200),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07019248),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, hmc_seg7_dl_07019368),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_0701A080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, hmc_seg7_dl_0701A400),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000B90
export const hmc_geo_000B90 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND_COLOR(0x0001),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 12800, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(16, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_SWITCH_CASE(18, geo_switch_area),
                    GEO_OPEN_NODE(),
                        GEO_BRANCH(1, hmc_geo_0005E8), // 0x0E0005E8
                        GEO_BRANCH(1, hmc_geo_000618), // 0x0E000618
                        GEO_BRANCH(1, hmc_geo_000658), // 0x0E000658
                        GEO_BRANCH(1, hmc_geo_0006A8), // 0x0E0006A8
                        GEO_BRANCH(1, hmc_geo_0006E0), // 0x0E0006E0
                        GEO_BRANCH(1, hmc_geo_000700), // 0x0E000700
                        GEO_BRANCH(1, hmc_geo_000748), // 0x0E000748
                        GEO_BRANCH(1, hmc_geo_000770), // 0x0E000770
                        GEO_BRANCH(1, hmc_geo_000798), // 0x0E000798
                        GEO_BRANCH(1, hmc_geo_0007F8), // 0x0E0007F8
                        GEO_BRANCH(1, hmc_geo_000850), // 0x0E000850
                        GEO_BRANCH(1, hmc_geo_0008D0), // 0x0E0008D0
                        GEO_BRANCH(1, hmc_geo_000938), // 0x0E000938
                        GEO_BRANCH(1, hmc_geo_000998), // 0x0E000998
                        GEO_BRANCH(1, hmc_geo_000A18), // 0x0E000A18
                        GEO_BRANCH(1, hmc_geo_000A88), // 0x0E000A88
                        GEO_BRANCH(1, hmc_geo_000AE8), // 0x0E000AE8
                        GEO_BRANCH(1, hmc_geo_000B48), // 0x0E000B48
                    GEO_CLOSE_NODE(),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
