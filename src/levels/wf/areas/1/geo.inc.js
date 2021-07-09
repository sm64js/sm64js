// Wf

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    BACKGROUND_BELOW_CLOUDS, LAYER_OPAQUE, LAYER_OPAQUE_DECAL, LAYER_TRANSPARENT_DECAL,
    LAYER_TRANSPARENT
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { wf_seg7_dl_070050C8 } from "./1/model.inc"

import { wf_seg7_dl_070052B8 } from "./2/model.inc"

import { wf_seg7_dl_07005538 } from "./3/model.inc"

import { wf_seg7_dl_07005690 } from "./4/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

//import { geo_cannon_circle_base } from "../../../../game/ObjectHelpers"


// 0x0E000BF8
export const wf_geo_000BF8 = () => {return [
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
                GEO_CAMERA(1, 0, 2000, 6000, 0, 2000, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_070050C8),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE_DECAL, wf_seg7_dl_070052B8),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, wf_seg7_dl_07005538),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, wf_seg7_dl_07005690),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x2401, geo_movtex_draw_water_regions),
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

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
