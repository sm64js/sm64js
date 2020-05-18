import { GeoLayoutInstance } from "../../engine/geo_layout"

const canvas = document.querySelector('#gameCanvas')

export const intro_geo_0002D0 = [
    {
        command: GeoLayoutInstance.node_screen_area,
        args: [0, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]
    }
]
