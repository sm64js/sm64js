// Ttm

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    BACKGROUND_OCEAN_SKY, LAYER_OPAQUE, PAINTING_ID
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { ttm_seg7_dl_0700A120 } from "./1/model.inc"

import { ttm_seg7_dl_0700A2E0 } from "./2/model.inc"

/*import {
    geo_painting_update, geo_painting_draw, geo_cannon_circle_base
} from "../../../../game/ObjectHelpers"*/

import {
    geo_movtex_pause_control, geo_movtex_draw_nocolor, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"


// 0x0E000A70
export const ttm_geo_000A70 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND(BACKGROUND_OCEAN_SKY, geo_skybox_main),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 12800, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(1, 0, 2000, 6000, 0, -2200, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_0700A120),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_0700A2E0),
                    GEO_RENDER_OBJ(),
                    /*GEO_ASM(0, geo_painting_update),
                    GEO_ASM(PAINTING_ID(0, 2), geo_painting_draw),*/
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x3601, geo_movtex_draw_nocolor),
                    GEO_ASM(0x3602, geo_movtex_draw_nocolor),
                    GEO_ASM(0x3603, geo_movtex_draw_nocolor),
                    GEO_ASM(0x3604, geo_movtex_draw_nocolor),
                    GEO_ASM(0x3605, geo_movtex_draw_nocolor),
                    GEO_ASM(0x3601, geo_movtex_draw_water_regions),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(0),
        /*GEO_OPEN_NODE(),
            GEO_ASM(0, geo_cannon_circle_base),
        GEO_CLOSE_NODE(),*/
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
