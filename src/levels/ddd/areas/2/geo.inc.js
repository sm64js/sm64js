// Ddd

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
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT
} from "../../../../engine/GeoLayout"

import { ddd_seg7_dl_07007408 } from "./1/model.inc"

import { ddd_seg7_dl_07007CB8 } from "./2/model.inc"

import { ddd_seg7_dl_07008C48 } from "./3/model.inc"

import { ddd_seg7_dl_07008F80 } from "./4/model.inc"

import { ddd_seg7_dl_0700BAE0 } from "./5/model.inc"

import { ddd_seg7_dl_0700CE48 } from "./6/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E000570
export const ddd_geo_000570 = () => {return [
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
                GEO_CAMERA(4, 0, 2000, 6000, 2560, 0, 512, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ddd_seg7_dl_07007408),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ddd_seg7_dl_07007CB8),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, ddd_seg7_dl_07008C48),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, ddd_seg7_dl_07008F80),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, ddd_seg7_dl_0700BAE0),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ddd_seg7_dl_0700CE48),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x2302, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(14, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
