import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"

//Using TTM model for testing.

const canvas = document.querySelector('#gameCanvas')

import { special_DL } from "./1/model.inc"

export const special_area_1_geo = [
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
            { command: GeoLayout.node_perspective, args: [45, 100, 28000, Camera.geo_camera_fov] },
            { command: GeoLayout.open_node },
                {
                    command: GeoLayout.node_camera,
                    args: [1, 0, 2000, 6000, 0, -2200, 0, Camera.geo_camera_main]
                },
                { command: GeoLayout.open_node },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, special_DL] },
                    { command: GeoLayout.node_render_object_parent },
                { command: GeoLayout.close_node },
            { command: GeoLayout.close_node },
        { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]