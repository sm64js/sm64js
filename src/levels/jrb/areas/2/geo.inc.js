// Jrb

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
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../../engine/GeoLayout"

import { jrb_seg7_dl_0700EF00 } from "./1/model.inc"

import { jrb_seg7_dl_0700FE48 } from "./2/model.inc"

import { jrb_seg7_dl_07010548 } from "./3/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E000AFC
export const jrb_geo_000AFC = () => {return [
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
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 10000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(16, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, jrb_seg7_dl_0700EF00),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, jrb_seg7_dl_0700FE48),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, jrb_seg7_dl_07010548),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x1202, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(2, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
