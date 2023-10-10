import { BACKGROUND_BELOW_CLOUDS, GEO_ASM, GEO_BACKGROUND, GEO_CAMERA, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CLOSE_NODE, GEO_DISPLAY_LIST, GEO_END, GEO_NODE_ORTHO, GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_RENDER_OBJ, GEO_ZBUFFER, LAYER_OPAQUE, LAYER_TRANSPARENT } from "../../../../engine/GeoLayout";
import { geo_camera_fov, geo_camera_main } from "../../../../game/Camera";
import { geo_envfx_main, geo_skybox_main } from "../../../../game/LevelGeo";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../../include/config";
import { totwc_seg7_dl_07005D28 } from "./1/model.inc";
import { totwc_seg7_dl_07007048 } from "./2/model.inc";
import { totwc_seg7_dl_070078B8 } from "./3/model.inc";

export const totwc_geo_000188 = [
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
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 25000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(16, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, totwc_seg7_dl_07005D28),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, totwc_seg7_dl_07007048),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, totwc_seg7_dl_070078B8),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
];