// Ssl

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
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT_DECAL
} from "../../../../engine/GeoLayout"

import { ssl_seg7_dl_0701EE80 } from "./1/model.inc"

import { ssl_seg7_dl_0701F920 } from "./2/model.inc"

import { ssl_seg7_dl_0701FCE0 } from "./3/model.inc"

import {
    geo_movtex_update_horizontal, geo_movtex_pause_control, geo_movtex_draw_nocolor
} from "../../../../game/MovingTexture"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E0007CC
export const ssl_geo_0007CC = () => {return [
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
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_seg7_dl_0701EE80),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, ssl_seg7_dl_0701F920),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, ssl_seg7_dl_0701FCE0),
                    //GEO_ASM(0x802, geo_movtex_update_horizontal),
                    GEO_ASM(0, geo_movtex_pause_control),
                    //GEO_ASM(0x801, geo_movtex_draw_nocolor),
                    //GEO_ASM(0x802, geo_movtex_draw_nocolor),
                    //GEO_ASM(0x803, geo_movtex_draw_nocolor),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
