import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { hmc_seg7_dl_070078B0 } from "./1/model.inc"
import { hmc_seg7_dl_07007B50 } from "./2/model.inc"
import { hmc_seg7_dl_070080E8 } from "./3/model.inc"
import { hmc_seg7_dl_070093F0 } from "./4/model.inc"
import { hmc_seg7_dl_0700E448 } from "./5/model.inc"
import { hmc_seg7_dl_0700EF00 } from "./6/model.inc"
import { hmc_seg7_dl_0700F3E8 } from "./7/model.inc"
import { hmc_seg7_dl_0700FA40 } from "./8/model.inc"
import { hmc_seg7_dl_0700FEF0 } from "./9/model.inc"
import { hmc_seg7_dl_07010070 } from "./10/model.inc"
import { hmc_seg7_dl_07013CA8 } from "./11/model.inc"
import { hmc_seg7_dl_07013E80 } from "./12/model.inc"
import { hmc_seg7_dl_07014300 } from "./13/model.inc"
import { hmc_seg7_dl_07014B08 } from "./14/model.inc"
import { hmc_seg7_dl_07014C00 } from "./15/model.inc"
import { hmc_seg7_dl_07014E48 } from "./16/model.inc"
import { hmc_seg7_dl_070173A8 } from "./17/model.inc"
import { hmc_seg7_dl_07017C98 } from "./18/model.inc"
import { hmc_seg7_dl_07018200 } from "./19/model.inc"
import { hmc_seg7_dl_07019248 } from "./20/model.inc"
import { hmc_seg7_dl_07019368 } from "./21/model.inc"
import { hmc_seg7_dl_0701A080 } from "./22/model.inc"
import { hmc_seg7_dl_0701A400 } from "./23/model.inc"
import { hmc_seg7_dl_0701E820 } from "./24/model.inc"
import { hmc_seg7_dl_0701F1B0 } from "./25/model.inc"
import { hmc_seg7_dl_0701F690 } from "./26/model.inc"
import { hmc_seg7_dl_0701F818 } from "./27/model.inc"
import { hmc_seg7_dl_0701FD58 } from "./28/model.inc"
import { hmc_seg7_dl_07020FD0 } from "./29/model.inc"
import { hmc_seg7_dl_07021760 } from "./30/model.inc"
import { hmc_seg7_dl_07021BA0 } from "./31/model.inc"
import { hmc_seg7_dl_070228A0 } from "./32/model.inc"
import { geo_switch_area } from "../../../../game/ObjectHelpers"

const canvas = document.querySelector('#gameCanvas')

export const hmc_geo_0005E8 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070078B0] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07007B50] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_070080E8] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070093F0] },
    { command: Geo.close_node },
    { command: Geo.return }

]
export const hmc_geo_000618 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700E448] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0700EF00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700FA40] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070] },
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000658 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07013CA8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07013E80] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014300] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014B08] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07014C00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014E48] },
    // { command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
    // { command: Geo.node_generated, args: [0x0702, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_0006A8 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070173A8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07017C98] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07018200] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07019248] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07019368] },
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_0006E0 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701A080] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701A400] },
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000700 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701E820] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701F1B0] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F690] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F818] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701FD58] },
    //{ command: Geo.node_generated, args: [0, geo_movtex_pause_control]},
    //{ command: Geo.node_generated, args: [0x0701, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000748 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07020FD0] },
    //{ command: Geo.node_generated, args: [0, geo_painting_update]},
    //{ command: Geo.node_generated, args: [PAINTING_ID(0, 0]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000770 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07021760] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07021BA0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070228A0] },
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000798 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070078B0] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07007B50] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_070080E8] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070093F0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700E448] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0700EF00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700FA40] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070] },
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_0007F8 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070078B0] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07007B50] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_070080E8] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070093F0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070173A8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07017C98] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07018200] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07019248] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07019368] },
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000850 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700E448] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0700EF00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700FA40] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07013CA8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07013E80] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014300] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014B08] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07014C00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014E48] },
    //{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
    //{ command: Geo.node_generated, args: [0x0702, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_0008D0 = [
     { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700E448] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0700EF00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700F3E8] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0700FA40] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0700FEF0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE_DECAL, hmc_seg7_dl_07010070] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070173A8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07017C98] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07018200] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07019248] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07019368] },
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000938 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07013CA8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07013E80] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014300] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014B08] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07014C00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014E48] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701A080] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701A400] },
    //{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
    //{ command: Geo.node_generated, args: [0x0702, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000998 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07013CA8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07013E80] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014300] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014B08] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07014C00] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07014E48] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701E820] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701F1B0] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F690] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F818] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701FD58] },
    //{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
    //{ command: Geo.node_generated, args: [0x0701, geo_movtex_draw_water_regions]},
    //{ command: Geo.node_generated, args: [0x0702, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000A18 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070173A8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07017C98] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07018200] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07019248] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07019368] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701E820] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701F1B0] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F690] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F818] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701FD58] },
    //{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
    //{ command: Geo.node_generated, args: [0x0701, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000A88 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701E820] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701F1B0] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F690] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F818] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701FD58] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07020FD0] },
    //{ command: Geo.node_generated, args: [   0, geo_painting_update]},
    //{ command: Geo.node_generated, args: [   PAINTING_ID(0, 0]},
    //{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
    //{ command: Geo.node_generated, args: [0x0701, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000AE8 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701E820] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701F1B0] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F690] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_0701F818] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701FD58] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07021760] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07021BA0] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070228A0] },
    //{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
    //{ command: Geo.node_generated, args: [0x0701, geo_movtex_draw_water_regions]},
    { command: Geo.close_node },
    { command: Geo.return }
]
export const hmc_geo_000B48 = [
    { command: Geo.node_start },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_070173A8] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_07017C98] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07018200] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_07019248] },
    { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, hmc_seg7_dl_07019368] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, hmc_seg7_dl_0701A080] },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, hmc_seg7_dl_0701A400] },
    { command: Geo.close_node },
    { command: Geo.return }
]

export const hmc_geo_000B90 = [
    {
        command: Geo.node_screen_area,
        args: [10, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2],
    },
    { command: Geo.open_node },
    { command: Geo.node_master_list, args: [0] },
    { command: Geo.open_node },
    { command: Geo.node_ortho, args: [100] },
    { command: Geo.open_node },
    // TODO GEO_BACKGROUND_COLOR(0x0001),
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_master_list, args: [1] },
    { command: Geo.open_node },
    { command: Geo.node_perspective, args: [45, 100, 12800, Camera.geo_camera_fov] },
    { command: Geo.open_node },
    {
        command: Geo.node_camera,
        args: [16, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main],
    },
    { command: Geo.open_node },
    { command: Geo.node_switch_case, args: [18, geo_switch_area] },
    { command: Geo.open_node },
        { command: Geo.branch, args: [1, hmc_geo_0005E8] },
        { command: Geo.branch, args: [1, hmc_geo_000618] },
        { command: Geo.branch, args: [1, hmc_geo_000658] },
        { command: Geo.branch, args: [1, hmc_geo_0006A8] },
        { command: Geo.branch, args: [1, hmc_geo_0006E0] },
        { command: Geo.branch, args: [1, hmc_geo_000700] },
        { command: Geo.branch, args: [1, hmc_geo_000748] },
        { command: Geo.branch, args: [1, hmc_geo_000770] },
        { command: Geo.branch, args: [1, hmc_geo_000798] },
        { command: Geo.branch, args: [1, hmc_geo_0007F8] },
        { command: Geo.branch, args: [1, hmc_geo_000850] },
        { command: Geo.branch, args: [1, hmc_geo_0008D0] },
        { command: Geo.branch, args: [1, hmc_geo_000938] },
        { command: Geo.branch, args: [1, hmc_geo_000998] },
        { command: Geo.branch, args: [1, hmc_geo_000A18] },
        { command: Geo.branch, args: [1, hmc_geo_000A88] },
        { command: Geo.branch, args: [1, hmc_geo_000AE8] },
        { command: Geo.branch, args: [1, hmc_geo_000B48] },
    { command: Geo.close_node },
    { command: Geo.node_render_object_parent },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end },
]
