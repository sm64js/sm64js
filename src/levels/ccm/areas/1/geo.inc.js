import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_movtex_draw_water_regions, geo_movtex_draw_nocolor } from "../../../../game/MovingTexture"
import { ccm_seg7_dl_0700B090 } from "./1/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const ccm_geo_00051C = [
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
        args: [1, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, ccm_seg7_dl_0700B090] },
    { command: GeoLayout.node_generated, args: [0x0501, geo_movtex_draw_water_regions] },
    { command: GeoLayout.node_render_object_parent },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]