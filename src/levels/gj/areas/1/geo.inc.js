// Glider Jungle

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_ASM,
    GEO_RENDER_OBJ, GEO_END,
    BACKGROUND_OCEAN_SKY, LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT_DECAL, LAYER_OPAQUE_DECAL
} from "../../../../engine/GeoLayout"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import {
    gj_dl_jungle_mesh_layer_1,
	gj_dl_trees_mesh_layer_1,
    gj_dl_vines_mesh_layer_4,
    gj_dl_launch2_mesh,
    gj_dl_launch3_mesh,
	gj_dl_launch4_mesh,
    gj_dl_launch5_mesh,
    gj_dl_ring9_mesh_layer_1
} from "./1/model.inc"

import { geo_movtex_draw_water_regions } from "../../../../game/MovingTexture"

export const gj_area_1_geo = () => {return [
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
	                GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_jungle_mesh_layer_1),
	                GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_trees_mesh_layer_1),
                    // GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_vines_mesh_layer_4),
	                GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_launch2_mesh),
	                GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_launch3_mesh),
	                GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_launch4_mesh),
	                GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_launch5_mesh),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, gj_dl_ring9_mesh_layer_1),
	                GEO_ASM(0x3701, geo_movtex_draw_water_regions),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};
