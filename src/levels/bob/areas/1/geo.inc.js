import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { bob_seg7_dl_07004390 } from "./1/model.inc"
import { bob_seg7_dl_0700DD18 } from "./5/model.inc"
import { bob_seg7_dl_07009D80 } from "./2/model.inc"
import { bob_seg7_dl_0700A920 } from "./4/model.inc"
import { bob_seg7_dl_0700A470 } from "./3/model.inc"
import { bob_seg7_dl_0700E338 } from "./6/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const bob_geo_000488 = [
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
                    args: [1, 0, 2000, 6000, 3072, 0, -4608, Camera.geo_camera_main]
                },
                { command: GeoLayout.open_node },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, bob_seg7_dl_07004390] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, bob_seg7_dl_07009D80] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_TRANSPARENT_DECAL, bob_seg7_dl_0700A470] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, bob_seg7_dl_0700A920] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, bob_seg7_dl_0700DD18] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, bob_seg7_dl_0700E338] },
                    { command: GeoLayout.node_render_object_parent },
                { command: GeoLayout.close_node },
            { command: GeoLayout.close_node },
        { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]
