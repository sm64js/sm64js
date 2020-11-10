import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { ttm_seg7_dl_0700A120 } from "./1/model.inc"
import { ttm_seg7_dl_0700A2E0 } from "./2/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const ttm_geo_000A70 = [
    {
        command: GeoLayout.node_screen_area,
        args: [10, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2]
    },
    { command: GeoLayout.open_node },
        { command: GeoLayout.node_master_list, args: [0] },
        { command: GeoLayout.open_node },
            { command: GeoLayout.node_ortho, args: [100] },
            { command: GeoLayout.open_node },
                { command: GeoLayout.node_background, args: [GeoLayout.BACKGROUND_OCEAN_SKY, geo_skybox_main] },
            { command: GeoLayout.close_node },
        { command: GeoLayout.close_node },
        { command: GeoLayout.node_master_list, args: [1] },
        { command: GeoLayout.open_node },
            { command: GeoLayout.node_perspective, args: [45, 100, 12800, Camera.geo_camera_fov] },
            { command: GeoLayout.open_node },
                {
                    command: GeoLayout.node_camera,
                    args: [1, 0, 2000, 6000, 0, -2200, 0, Camera.geo_camera_main]
                },
                { command: GeoLayout.open_node },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, ttm_seg7_dl_0700A120] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, ttm_seg7_dl_0700A2E0] },
                    { command: GeoLayout.node_render_object_parent },
                { command: GeoLayout.close_node },
            { command: GeoLayout.close_node },
        { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]
