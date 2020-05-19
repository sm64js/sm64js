import { GeoLayoutInstance } from "../../engine/geo_layout"
import { geo_title_screen, geo_fade_transition } from "./gfx"

const canvas = document.querySelector('#gameCanvas')

export const intro_geo_0002D0 = [
    {
        command: GeoLayoutInstance.node_screen_area,
        args: [ 0, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2 ]
    },
    { command: GeoLayoutInstance.open_node },
    { command: GeoLayoutInstance.node_master_list, args: [0] },
    { command: GeoLayoutInstance.open_node },
    { command: GeoLayoutInstance.node_ortho, args: [100] },
    { command: GeoLayoutInstance.open_node },
    { command: GeoLayoutInstance.node_background, args: [0x0001] },
    { command: GeoLayoutInstance.close_node },
    { command: GeoLayoutInstance.close_node },
    { command: GeoLayoutInstance.node_master_list, args: [1] },
    { command: GeoLayoutInstance.open_node },
    { command: GeoLayoutInstance.node_perspective, args: [45, 128, 16384] },
    { command: GeoLayoutInstance.open_node },
    {
        command: GeoLayoutInstance.node_camera,
        args: [ 0, 0, 0, 3200, 0, 0, 0, 0x00000000 ]
    },
    { command: GeoLayoutInstance.open_node },
    { command: GeoLayoutInstance.node_generated, args: [ 0, geo_title_screen ] },
    { command: GeoLayoutInstance.close_node },
    { command: GeoLayoutInstance.close_node },
    { command: GeoLayoutInstance.close_node },
    { command: GeoLayoutInstance.node_master_list, args: [0] },
    { command: GeoLayoutInstance.open_node },
    { command: GeoLayoutInstance.node_generated, args: [ 0, geo_fade_transition ] },
    { command: GeoLayoutInstance.close_node },
    { command: GeoLayoutInstance.close_node },
    { command: GeoLayoutInstance.node_end }
]
