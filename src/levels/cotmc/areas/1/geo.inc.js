// Cotmc

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT
} from "../../../../engine/GeoLayout"

import { cotmc_seg7_dl_07007D48 } from "./1/model.inc"

import { cotmc_seg7_dl_0700A160 } from "./2/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_nocolor, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { cotmc_seg7_dl_0700A4B8 } from "./3/model.inc"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E0001A0
export const cotmc_geo_0001A0 = () => {return [
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
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, cotmc_seg7_dl_07007D48),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, cotmc_seg7_dl_0700A160),
                    GEO_ASM(0, geo_movtex_pause_control),
                    //GEO_ASM(0x2801, geo_movtex_draw_nocolor),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, cotmc_seg7_dl_0700A4B8),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-30 20:59:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
