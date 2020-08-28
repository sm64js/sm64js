import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { castle_grounds_seg7_dl_07006D70 } from "./1/model.inc"
import { castle_grounds_seg7_dl_070095F0 } from "./2/model.inc"
import { castle_grounds_seg7_dl_0700A860 } from "./4/model.inc"
import { castle_grounds_seg7_dl_0700B1D0 } from "./5/model.inc"
import { castle_grounds_seg7_dl_0700BA20 } from "./6/model.inc"
import { castle_grounds_seg7_dl_0700C210 } from "./9/model.inc"
import { castle_grounds_seg7_dl_0700C430 } from "./10/model.inc"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_movtex_draw_water_regions, geo_movtex_draw_nocolor } from "../../../../game/MovingTexture"

const canvas = document.querySelector('#gameCanvas')

export const castle_grounds_geo_00073C = [
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
    { command: GeoLayout.node_perspective, args: [45, 100, 20000, Camera.geo_camera_fov] },
    { command: GeoLayout.open_node },
    {
        command: GeoLayout.node_camera,
        args: [16, 0, 1500, 2500, 0, 1500, -12000, Camera.geo_camera_main]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, castle_grounds_seg7_dl_07006D70] },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, castle_grounds_seg7_dl_070095F0] },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, castle_grounds_seg7_dl_0700A860] },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_TRANSPARENT_DECAL, castle_grounds_seg7_dl_0700B1D0] },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, castle_grounds_seg7_dl_0700BA20] },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE_DECAL, castle_grounds_seg7_dl_0700C430] },
    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, castle_grounds_seg7_dl_0700C210] },
    { command: GeoLayout.node_generated, args: [0x1601, geo_movtex_draw_nocolor] },
    { command: GeoLayout.node_generated, args: [0x1601, geo_movtex_draw_water_regions] },
    { command: GeoLayout.node_render_object_parent },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]