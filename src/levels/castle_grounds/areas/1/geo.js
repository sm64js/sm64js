/*export const intro_geo_0002D0 = [
    {
        command: GeoLayout.node_screen_area,
        args: [0, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_master_list, args: [0] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_ortho, args: [100] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_background, args: [0x0001] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_master_list, args: [1] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_perspective, args: [45, 128, 16384] },
    { command: GeoLayout.open_node },
    {
        command: GeoLayout.node_camera,
        args: [0, 0, 0, 3200, 0, 0, 0, 0x00000000]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [0, geo_title_screen] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_master_list, args: [0] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [0, geo_fade_transition] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]*/

import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"

const canvas = document.querySelector('#gameCanvas')

export const castle_grounds_geo_00073C = [
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
        args: [16, 0, 1500, 2500, 0, 1500, -12000, Camera.geo_camera_main]
    },


]