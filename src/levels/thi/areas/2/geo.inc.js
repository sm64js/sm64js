// Thi

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_SCALE, GEO_DISPLAY_LIST,
    GEO_ASM, GEO_RENDER_OBJ, GEO_END,
    BACKGROUND_OCEAN_SKY, LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT, LAYER_TRANSPARENT_DECAL
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { thi_seg7_dl_07005260 } from "../1/1/model.inc"

import { thi_seg7_dl_07006968 } from "../1/2/model.inc"

import { thi_seg7_dl_07007008 } from "../1/3/model.inc"

import { thi_seg7_dl_070072E8 } from "../1/4/model.inc"

import { thi_seg7_dl_07007538 } from "./1/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"


// SHARE_PATH: [level]/areas/1/1/, [level]/areas/1/2/, [level]/areas/1/3/, [level]/areas/1/4/

// 0x0E0006D4
export const thi_geo_0006D4 = () => {return [
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
                GEO_CAMERA(1, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_SCALE(0x00, 19660),
                    GEO_OPEN_NODE(),
                        GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07005260),
                        GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07006968),
                        GEO_DISPLAY_LIST(LAYER_ALPHA, thi_seg7_dl_07007008),
                        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, thi_seg7_dl_070072E8),
                    GEO_CLOSE_NODE(),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, thi_seg7_dl_07007538),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x1302, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
