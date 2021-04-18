// Castle Grounds

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    SCREEN_WIDTH, SCREEN_HEIGHT, BACKGROUND_OCEAN_SKY, LAYER_OPAQUE, LAYER_ALPHA,
    LAYER_TRANSPARENT_DECAL, LAYER_OPAQUE_DECAL
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_camera_fov, geo_camera_main, geo_movtex_pause_control,
    geo_movtex_draw_nocolor, geo_movtex_draw_water_regions, geo_envfx_main,
    geo_cannon_circle_base
} from "../../../../game/ObjectHelpers"

import {
    castle_grounds_seg7_dl_07006D70, castle_grounds_seg7_dl_070095F0,
    castle_grounds_seg7_dl_0700A860, castle_grounds_seg7_dl_0700B1D0,
    castle_grounds_seg7_dl_0700BA20, castle_grounds_seg7_dl_0700C430,
    castle_grounds_seg7_dl_0700C210
} from "./model.inc"


// 0x0E00073C
export const castle_grounds_geo_00073C = () => {return [
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
                GEO_CAMERA(16, 0, 1500, 2500, 0, 1500, -12000, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, castle_grounds_seg7_dl_07006D70),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, castle_grounds_seg7_dl_070095F0),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, castle_grounds_seg7_dl_0700A860),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, castle_grounds_seg7_dl_0700B1D0),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, castle_grounds_seg7_dl_0700BA20),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE_DECAL, castle_grounds_seg7_dl_0700C430),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, castle_grounds_seg7_dl_0700C210),
                    GEO_ASM(0, geo_movtex_pause_control),
                    GEO_ASM(0x1601, geo_movtex_draw_nocolor),
                    GEO_ASM(0x1601, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_ASM(0, geo_cannon_circle_base),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1618763470 - 2021-04-18 06:31:12 -1000
