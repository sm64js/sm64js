// Lll

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
    LAYER_OPAQUE, LAYER_TRANSPARENT, LAYER_ALPHA
} from "../../../../engine/GeoLayout"

import { lll_seg7_dl_070235C8 } from "./1/model.inc"

import { lll_seg7_dl_07024C18 } from "./2/model.inc"

import { lll_seg7_dl_070255D8 } from "./3/model.inc"

import { lll_seg7_dl_07025A48 } from "./4/model.inc"

import { lll_seg7_dl_07025BD8 } from "./5/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_nocolor, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E000EC0
export const lll_geo_000EC0 = () => {return [
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
                GEO_CAMERA(2, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, lll_seg7_dl_070235C8),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, lll_seg7_dl_07024C18),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, lll_seg7_dl_070255D8),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, lll_seg7_dl_07025A48),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, lll_seg7_dl_07025BD8),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x2202, geo_movtex_draw_nocolor),
                    GEO_ASM(0x2202, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
