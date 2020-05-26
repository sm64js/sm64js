import { GeoLayoutInstance as GeoLayout } from "../../engine/GeoLayout"
import { geo_title_screen, geo_fade_transition } from "./gfx"

const canvas = document.querySelector('#gameCanvas')

export const intro_geo_0002D0 = [
    {
        command: GeoLayout.node_screen_area,
        args: [ 0, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2 ]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_master_list, args: [0] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_ortho, args: [100] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_background, args: [0x0F01] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_master_list, args: [1] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_perspective, args: [45, 128, 16384] },
    { command: GeoLayout.open_node },
    {
        command: GeoLayout.node_camera,
        args: [ 0, 0, 0, 3200, 0, 0, 0, 0x00000000 ]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [ 0, geo_title_screen ] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_master_list, args: [0] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [ 0, geo_fade_transition ] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]
