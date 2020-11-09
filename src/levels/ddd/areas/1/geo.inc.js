import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { ddd_seg7_dl_07004D48 } from "./1/model.inc"
import { ddd_seg7_dl_070057E8 } from "./2/model.inc"
import { ddd_seg7_dl_07005C40 } from "./3/model.inc"
import { ddd_seg7_dl_07005F78 } from "./4/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const ddd_geo_0004C0 = [
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
            { command: GeoLayout.node_perspective, args: [45, 100, 20000, Camera.geo_camera_fov] },
            { command: GeoLayout.open_node },
                {
                    command: GeoLayout.node_camera,
                    args: [2, 0, 2000, 6000, 2560, 0, 512, Camera.geo_camera_main]
                },
                { command: GeoLayout.open_node },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, ddd_seg7_dl_07004D48] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, ddd_seg7_dl_070057E8] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, ddd_seg7_dl_07005C40] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_TRANSPARENT, ddd_seg7_dl_07005F78] },
                    { command: GeoLayout.node_render_object_parent },
                { command: GeoLayout.close_node },
            { command: GeoLayout.close_node },
        { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]
