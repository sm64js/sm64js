// Lll

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    BACKGROUND_FLAMING_SKY, LAYER_OPAQUE, LAYER_ALPHA
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { lll_seg7_dl_070134E0 } from "./1/model.inc"

import { lll_seg7_dl_070138F8 } from "./3/model.inc"

import { lll_seg7_dl_070137C0 } from "./2/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_nocolor
} from "../../../../game/MovingTexture"


// 0x0E000E00
export const lll_geo_000E00 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND(BACKGROUND_FLAMING_SKY, geo_skybox_main),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(64, 100, 20000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(1, 0, 2000, 6000, 0, 0, -8192, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, lll_seg7_dl_070134E0),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, lll_seg7_dl_070138F8),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, lll_seg7_dl_070137C0),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x2201, geo_movtex_draw_nocolor),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(12, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
