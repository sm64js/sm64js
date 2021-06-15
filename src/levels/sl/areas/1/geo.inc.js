// Sl

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    BACKGROUND_SNOW_MOUNTAINS, LAYER_OPAQUE, LAYER_TRANSPARENT, LAYER_ALPHA,
    LAYER_TRANSPARENT_DECAL
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { sl_seg7_dl_07005478 } from "./1/model.inc"

import { sl_seg7_dl_070056B0 } from "./2/model.inc"

import { sl_seg7_dl_070073D0 } from "./3/model.inc"

import { sl_seg7_dl_07007880 } from "./4/model.inc"

import { sl_seg7_dl_070088B0 } from "./5/model.inc"

import { sl_seg7_dl_07008D58 } from "./6/model.inc"

import { sl_seg7_dl_0700A5A0 } from "./7/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

//import { geo_cannon_circle_base } from "../../../../game/ObjectHelpers"


// 0x0E0003A8
export const sl_geo_0003A8 = () => {return [
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
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 20000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(16, 0, 2000, 6000, 0, 4400, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, sl_seg7_dl_07005478),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sl_seg7_dl_070056B0),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, sl_seg7_dl_070073D0),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, sl_seg7_dl_07007880),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sl_seg7_dl_070088B0),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, sl_seg7_dl_07008D58),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, sl_seg7_dl_0700A5A0),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x1001, geo_movtex_draw_water_regions),
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

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
