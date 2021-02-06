import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_movtex_draw_water_regions } from "../../../../game/MovingTexture"

import { ssl_seg7_dl_07009F48 } from "./1/model.inc"
import { ssl_seg7_dl_0700BA78 } from "./2/model.inc"
import { ssl_seg7_dl_0700BC18 } from "./3/model.inc"
import { ssl_seg7_dl_0700BD00 } from "./4/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const ssl_geo_000648 = [
{
command: Geo.node_screen_area,
args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2],
},
{ command: Geo.open_node },
{ command: Geo.node_master_list, args: [0]},
{ command: Geo.open_node },
{ command: Geo.node_ortho, args: [100]},
{ command: Geo.open_node },
{ command: Geo.node_background, args: [Geo.BACKGROUND_DESERT, geo_skybox_main] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_master_list, args: [1]},
{ command: Geo.open_node },
{ command: Geo.node_perspective, args: [45, 100, 20000, Camera.geo_camera_fov] },
{ command: Geo.open_node },
{
command: Geo.node_camera,
args: [1, 0, 2000, 6000, -2048, 0, -1024, Camera.geo_camera_main],
},
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ssl_seg7_dl_07009F48] },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ssl_seg7_dl_0700BA78] },
{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, ssl_seg7_dl_0700BC18] },
{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, ssl_seg7_dl_0700BD00] },
//{ command: Geo.node_generated, args: [0x0801, geo_movtex_update_horizontal]},
//{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//{ command: Geo.node_generated, args: [0x0801, geo_movtex_draw_water_regions]},
//{ command: Geo.node_generated, args: [0x0851, geo_movtex_draw_water_regions]},
//{ command: Geo.node_generated, args: [0x0801, geo_movtex_draw_colored]},
//{ command: Geo.node_generated, args: [0x0802, geo_movtex_draw_colored]},
//{ command: Geo.node_generated, args: [0x0803, geo_movtex_draw_colored]},
{ command: Geo.node_render_object_parent },
//{ command: Geo.node_generated, args: [   0, geo_envfx_main]},
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_master_list, args: [0]},
{ command: Geo.open_node },
//{ command: Geo.node_generated, args: [0, geo_cannon_circle_base]},
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
