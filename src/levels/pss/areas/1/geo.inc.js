import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { pss_seg7_dl_0700A7C0 } from "./1/model.inc"
import { pss_seg7_dl_0700AFA8 } from "./2/model.inc"
import { pss_seg7_dl_0700B3F0 } from "./3/model.inc"
import { pss_seg7_dl_0700D338 } from "./4/model.inc"
import { pss_seg7_dl_0700DAD8 } from "./5/model.inc"
import { pss_seg7_dl_0700E2B0 } from "./6/model.inc"
import { pss_seg7_dl_0700E3E8 } from "./7/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const pss_geo_000100 = [
    {
        command: GeoLayout.node_screen_area,
        args: [10, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2]
    },
    { command: GeoLayout.open_node },
        { command: GeoLayout.node_master_list, args: [1] },
        { command: GeoLayout.open_node },
            { command: GeoLayout.node_perspective, args: [45, 100, 20000, Camera.geo_camera_fov] },
            { command: GeoLayout.open_node },
                {
                    command: GeoLayout.node_camera,
                    args: [9, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]
                },
                { command: GeoLayout.open_node },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, pss_seg7_dl_0700A7C0] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, pss_seg7_dl_0700AFA8] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, pss_seg7_dl_0700B3F0] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, pss_seg7_dl_0700D338] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_TRANSPARENT, pss_seg7_dl_0700DAD8] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, pss_seg7_dl_0700E2B0] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE_DECAL, pss_seg7_dl_0700E3E8] },
                    { command: GeoLayout.node_render_object_parent },
                { command: GeoLayout.close_node },
            { command: GeoLayout.close_node },
        { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]
