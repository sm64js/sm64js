// Ssl

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    BACKGROUND_DESERT, LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT_DECAL
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { ssl_seg7_dl_07009F48 } from "./1/model.inc"

import { ssl_seg7_dl_0700BA78 } from "./2/model.inc"

import { ssl_seg7_dl_0700BC18 } from "./3/model.inc"

import { ssl_seg7_dl_0700BD00 } from "./4/model.inc"

import {
    geo_movtex_update_horizontal, geo_movtex_pause_control, geo_movtex_draw_water_regions,
    geo_movtex_draw_colored
} from "../../../../game/MovingTexture"

//import { geo_cannon_circle_base } from "../../../../game/ObjectHelpers"


// 0x0E000648
export const ssl_geo_000648 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND(BACKGROUND_DESERT, geo_skybox_main),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 20000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(1, 0, 2000, 6000, -2048, 0, -1024, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_seg7_dl_07009F48),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_seg7_dl_0700BA78),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, ssl_seg7_dl_0700BC18),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, ssl_seg7_dl_0700BD00),
                    //GEO_ASM(0x0801, geo_movtex_update_horizontal),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x0801, geo_movtex_draw_water_regions),
                    //GEO_ASM(0x0851, geo_movtex_draw_water_regions),
                    //GEO_ASM(0x0801, geo_movtex_draw_colored),
                    //GEO_ASM(0x0802, geo_movtex_draw_colored),
                    //GEO_ASM(0x0803, geo_movtex_draw_colored),
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

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
