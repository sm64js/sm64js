// Bitdw

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    BACKGROUND_GREEN_SKY, LAYER_ALPHA
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { bitdw_seg7_dl_070020C8 } from "./1/model.inc"


// 0x0E000618
export const geo_bitdw_000618 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND(BACKGROUND_GREEN_SKY, geo_skybox_main),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 20000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(14, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, bitdw_seg7_dl_070020C8),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
