import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_movtex_draw_water_regions } from "../../../../game/MovingTexture"

const canvas = document.querySelector('#gameCanvas')

import { wf_seg7_dl_070050C8 } from "./1/model.inc"
import { wf_seg7_dl_070052B8 } from "./2/model.inc"
import { wf_seg7_dl_07005538 } from "./3/model.inc"
import { wf_seg7_dl_07005690 } from "./4/model.inc"

export const wf_geo_000BF8 = [
{
command: Geo.node_screen_area,
args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2],
},
{ command: Geo.open_node },
{ command: Geo.node_master_list, args: [0]},
{ command: Geo.open_node },
{ command: Geo.node_ortho, args: [100]},
{ command: Geo.open_node },
{ command: Geo.node_background, args: [Geo.BACKGROUND_OCEAN_SKY, geo_skybox_main] },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_master_list, args: [1]},
{ command: Geo.open_node },
{ command: Geo.node_perspective, args: [45, 100, 12800, Camera.geo_camera_fov] },
{ command: Geo.open_node },
{
command: Geo.node_camera,
args: [1, 0, 2000, 6000, 0, 2000, 0, Camera.geo_camera_main],
},
{ command: Geo.open_node },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, wf_seg7_dl_070050C8] },
{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE_DECAL, wf_seg7_dl_070052B8] },
{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, wf_seg7_dl_07005538] },
{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, wf_seg7_dl_07005690] },
{ command: Geo.node_render_object_parent },
// TODO: { command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
{ command: Geo.node_generated, args: [0x2401, geo_movtex_draw_water_regions]},
// TODO: { command: Geo.node_generated, args: [   0, geo_envfx_main]},
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_master_list, args: [0]},
{ command: Geo.open_node },
// TODO: { command: Geo.node_generated, args: [0, geo_cannon_circle_base]},
{ command: Geo.close_node },
{ command: Geo.close_node },
{ command: Geo.node_end },
]
