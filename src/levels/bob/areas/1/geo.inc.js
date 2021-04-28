// Bob

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    BACKGROUND_OCEAN_SKY, LAYER_OPAQUE, LAYER_TRANSPARENT_DECAL, LAYER_ALPHA
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { bob_seg7_dl_07004390 } from "./1/model.inc"

import { bob_seg7_dl_07009D80 } from "./2/model.inc"

import { bob_seg7_dl_0700A470 } from "./3/model.inc"

import { bob_seg7_dl_0700A920 } from "./4/model.inc"

import { bob_seg7_dl_0700DD18 } from "./5/model.inc"

import { bob_seg7_dl_0700E338 } from "./6/model.inc"

import { geo_cannon_circle_base } from "../../../../game/ScreenTransition"


// 0x0E000488
export const bob_geo_000488 = () => {return [
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
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 30000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(1, 0, 2000, 6000, 3072, 0, -4608, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, bob_seg7_dl_07004390),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, bob_seg7_dl_07009D80),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, bob_seg7_dl_0700A470),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, bob_seg7_dl_0700A920),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, bob_seg7_dl_0700DD18),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, bob_seg7_dl_0700E338),
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

// 1619334742 - 2021-04-24 21:12:30 -1000
