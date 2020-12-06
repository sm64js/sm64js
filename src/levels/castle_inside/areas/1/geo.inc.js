import { GeoLayoutInstance as GeoLayout } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { inside_castle_seg7_dl_07028FD0 } from "./2/model.inc"
import { inside_castle_seg7_dl_07029578 } from "./3/model.inc"
import { inside_castle_seg7_dl_0702A650 } from "./4/model.inc"
import { inside_castle_seg7_dl_0702AA10 } from "./6/model.inc"
import { inside_castle_seg7_dl_0702AB20 } from "./7/model.inc"
import { inside_castle_seg7_dl_0702E408 } from "./8/model.inc"
import { inside_castle_seg7_dl_0702FD30 } from "./9/model.inc"
import { inside_castle_seg7_dl_07023DB0 } from "./1/model.inc"
import { inside_castle_seg7_dl_07031588 } from "./10/model.inc"
import { inside_castle_seg7_dl_07031720 } from "./11/model.inc"
import { inside_castle_seg7_dl_07031830 } from "./12/model.inc"
import { inside_castle_seg7_dl_07032FC0 } from "./13/model.inc"
import { inside_castle_seg7_dl_07033158 } from "./14/model.inc"
import { inside_castle_seg7_dl_07034D88 } from "./15/model.inc"
import { inside_castle_seg7_dl_07035178 } from "./16/model.inc"
import { inside_castle_seg7_dl_07035288 } from "./17/model.inc"
import { inside_castle_seg7_dl_07036D88 } from "./18/model.inc"
import { inside_castle_seg7_dl_07037988 } from "./19/model.inc"
import { inside_castle_seg7_dl_07037BF8 } from "./20/model.inc"
import { inside_castle_seg7_dl_07037DE8 } from "./21/model.inc"
import { inside_castle_seg7_dl_07038350 } from "./23/model.inc"
import { inside_castle_seg7_dl_0703A6C8 } from "./24/model.inc"
import { inside_castle_seg7_dl_0703A808 } from "./25/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const castle_geo_001400 = [
    {
        command: GeoLayout.node_screen_area,
        args: [10, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2]
    },
    { command: GeoLayout.open_node },
        { command: GeoLayout.node_master_list, args: [0] },
        { command: GeoLayout.open_node },
            { command: GeoLayout.node_perspective, args: [64, 50, 7000, Camera.geo_camera_fov] },
            { command: GeoLayout.open_node },
                {
                    command: GeoLayout.node_camera,
                    args: [13, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]
                },
                { command: GeoLayout.open_node },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_0702E408] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_0702FD30] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07023DB0] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07031588] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_07031720] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_07031830] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07032FC0] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_07033158] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07034D88] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_07035178] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_07035288] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07036D88] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07037988] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07037BF8] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_TRANSPARENT, inside_castle_seg7_dl_07037DE8] },
                    // { command: GeoLayout.display_list, args: [GeoLayout.LAYER_TRANSPARENT, dl_castle_aquarium_light] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_07038350] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_0703A6C8] },
                    { command: GeoLayout.display_list, args: [GeoLayout.LAYER_ALPHA, inside_castle_seg7_dl_0703A808] },
                    // { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_070234C0] },
                    // { command: GeoLayout.display_list, args: [GeoLayout.LAYER_OPAQUE, inside_castle_seg7_dl_07023520] },
                    { command: GeoLayout.node_render_object_parent },
                { command: GeoLayout.close_node },
            { command: GeoLayout.close_node },
        { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]
