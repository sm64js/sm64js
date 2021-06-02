// Thi

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    BACKGROUND_OCEAN_SKY, LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT, LAYER_TRANSPARENT_DECAL
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { thi_seg7_dl_07005260 } from "./1/model.inc"

import { thi_seg7_dl_07006968 } from "./2/model.inc"

import { thi_seg7_dl_07007008 } from "./3/model.inc"

import { thi_seg7_dl_070072E8 } from "./4/model.inc"

import { thi_seg7_dl_070073C0 } from "./5/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { geo_cannon_circle_base } from "../../../../game/ObjectHelpers"


// 0x0E000608
export const thi_geo_000608 = () => {return [
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
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 20000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(1, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07005260),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07006968),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, thi_seg7_dl_07007008),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, thi_seg7_dl_070072E8),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, thi_seg7_dl_070073C0),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x1301, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
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

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
