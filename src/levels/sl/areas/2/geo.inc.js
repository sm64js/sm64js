// Sl

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT
} from "../../../../engine/GeoLayout"

import { sl_seg7_dl_0700BAE8 } from "./1/model.inc"

import { sl_seg7_dl_0700BCF8 } from "./2/model.inc"

import { sl_seg7_dl_0700C9E8 } from "./3/model.inc"

import { sl_seg7_dl_0700CB58 } from "./4/model.inc"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E000484
export const sl_geo_000484 = () => {return [
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
                GEO_CAMERA(4, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, sl_seg7_dl_0700BAE8),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, sl_seg7_dl_0700BCF8),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sl_seg7_dl_0700C9E8),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sl_seg7_dl_0700CB58),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
