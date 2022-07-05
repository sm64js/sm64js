// Sa

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    BACKGROUND_BELOW_CLOUDS, LAYER_OPAQUE, LAYER_TRANSPARENT
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { sa_seg7_dl_07002DE8 } from "./1/model.inc"

import { sa_seg7_dl_07002FD0 } from "./2/model.inc"


// 0x0E000170
export const sa_geo_000170 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND(BACKGROUND_BELOW_CLOUDS, geo_skybox_main),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 12800, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(1, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, sa_seg7_dl_07002DE8),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sa_seg7_dl_07002FD0),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(2, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:02:29 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
