import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"

import { thi_seg7_dl_07007C20 } from "./1/model.inc"
import { thi_seg7_dl_07009670 } from "./2/model.inc"
import { thi_seg7_dl_07009D50 } from "./3/model.inc"
import { thi_seg7_dl_07009F58 } from "./4/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const thi_geo_00079C = [
{
command: Geo.node_screen_area,
args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2],
},
{ command: Geo.open_node },
{ command: Geo.node_master_list, args: [0]},
{ command: Geo.open_node },
{ command: Geo.node_ortho, args: [100]},
{ command: Geo.open_node },
// TODO GEO_BACKGROUND_COLOR(0x0001),
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_master_list, args: [1]},
{ command: Geo.open_node },
{ command: Geo.node_perspective, args: [45, 100, 12800, Camera.geo_camera_fov] },
{ command: Geo.open_node },
{
command: Geo.node_camera,
args: [16, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main],
},
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, thi_seg7_dl_07007C20] },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, thi_seg7_dl_07009670] },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, thi_seg7_dl_07009D50] },
{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, thi_seg7_dl_07009F58] },
{ command: Geo.node_render_object_parent },
{ command: Geo.node_generated, args: [0, Camera.geo_envfx_main]},
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
