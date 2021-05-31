// Ccm

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    BACKGROUND_SNOW_MOUNTAINS, LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT_DECAL
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { ccm_seg7_dl_0700B090 } from "./1/model.inc"

import { ccm_seg7_dl_0700B1D8 } from "./2/model.inc"

import { ccm_seg7_dl_0700C380 } from "./3/model.inc"

import { ccm_seg7_dl_0700D578 } from "./4/model.inc"

import { ccm_seg7_dl_0700DDF0 } from "./5/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

//import { geo_cannon_circle_base } from "../../../../game/ObjectHelpers"


// 0x0E00051C
export const ccm_geo_00051C = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND(BACKGROUND_SNOW_MOUNTAINS, geo_skybox_main),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 12800, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(1, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_0700B090),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_0700B1D8),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_0700C380),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, ccm_seg7_dl_0700D578),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, ccm_seg7_dl_0700DDF0),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x0501, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(1, geo_envfx_main),
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

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
