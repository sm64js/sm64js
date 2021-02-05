import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
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
        command: Geo.node_screen_area,
        args: [10, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2]
    },
    { command: Geo.open_node },
        { command: Geo.node_master_list, args: [0] },
        { command: Geo.open_node },
            { command: Geo.node_ortho, args: [100] },
            { command: Geo.open_node },
                { command: Geo.node_background, args: [Geo.BACKGROUND_OCEAN_SKY, geo_skybox_main] },
            { command: Geo.close_node },
        { command: Geo.close_node },
        { command: Geo.node_master_list, args: [1] },
        { command: Geo.open_node },
            { command: Geo.node_perspective, args: [45, 100, 20000, Camera.geo_camera_fov] },
            { command: Geo.open_node },
                {
                    command: Geo.node_camera,
                    args: [1, 0, 2000, 6000, 3072, 0, -4608, Camera.geo_camera_main]
                },
                { command: Geo.open_node },
                    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bob_seg7_dl_07004390] },
                    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bob_seg7_dl_07009D80] },
                    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, bob_seg7_dl_0700A470] },
                    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, bob_seg7_dl_0700A920] },
                    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bob_seg7_dl_0700DD18] },
                    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bob_seg7_dl_0700E338] },
                    { command: Geo.node_render_object_parent },
                { command: Geo.close_node },
            { command: Geo.close_node },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
