// Pss

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT, LAYER_OPAQUE_DECAL
} from "../../../../engine/GeoLayout"

import { pss_seg7_dl_0700A7C0 } from "./1/model.inc"

import { pss_seg7_dl_0700AFA8 } from "./2/model.inc"

import { pss_seg7_dl_0700B3F0 } from "./3/model.inc"

import { pss_seg7_dl_0700D338 } from "./4/model.inc"

import { pss_seg7_dl_0700DAD8 } from "./5/model.inc"

import { pss_seg7_dl_0700E2B0 } from "./6/model.inc"

import { pss_seg7_dl_0700E3E8 } from "./7/model.inc"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E000100
export const pss_geo_000100 = () => {return [
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
                GEO_CAMERA(9, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, pss_seg7_dl_0700A7C0),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, pss_seg7_dl_0700AFA8),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, pss_seg7_dl_0700B3F0),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, pss_seg7_dl_0700D338),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, pss_seg7_dl_0700DAD8),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, pss_seg7_dl_0700E2B0),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE_DECAL, pss_seg7_dl_0700E3E8),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-03 16:44:44 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
