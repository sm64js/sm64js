import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_switch_area } from "../../../../game/ObjectHelpers"

import { inside_castle_seg7_dl_0703E6F0 } from "./1/model.inc"
import { inside_castle_seg7_dl_07043028 } from "./2/model.inc"
import { inside_castle_seg7_dl_07043B48 } from "./3/model.inc"
import { inside_castle_seg7_dl_07043CD8 } from "./4/model.inc"
import { inside_castle_seg7_dl_0704A0E8 } from "./5/model.inc"
import { inside_castle_seg7_dl_0704A2E0 } from "./6/model.inc"
import { inside_castle_seg7_dl_0704AA98 } from "./7/model.inc"
import { inside_castle_seg7_dl_0704C7D8 } from "./8/model.inc"
import { inside_castle_seg7_dl_07050938 } from "./9/model.inc"
import { inside_castle_seg7_dl_07051678 } from "./10/model.inc"
import { inside_castle_seg7_dl_070519C8 } from "./11/model.inc"
import { inside_castle_seg7_dl_07051B60 } from "./12/model.inc"
import { inside_castle_seg7_dl_070558D0 } from "./13/model.inc"
import { inside_castle_seg7_dl_070572A0 } from "./14/model.inc"
import { inside_castle_seg7_dl_07057F00 } from "./15/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const castle_geo_001560 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703E6F0] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001578 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043028] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043B48] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07043CD8] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(8, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(10, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0015B8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0704A0E8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_0704A2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0704AA98] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(12, 1]},
//	{ command: Geo.node_generated, args: [  0, geo_render_mirror_mario]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0015F8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0704C7D8] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(9, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(13, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001628 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07050938] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07051678] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_070519C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07051B60] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(11, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001668 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070558D0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070572A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07057F00] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001690 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703E6F0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043028] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043B48] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07043CD8] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(8, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(10, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0016D8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043028] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043B48] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07043CD8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0704A0E8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_0704A2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0704AA98] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(8, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(10, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(12, 1]},
//	{ command: Geo.node_generated, args: [  0, geo_render_mirror_mario]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001740 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043028] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043B48] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07043CD8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0704C7D8] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(8, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(9, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(10, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(13, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001798 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043028] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07043B48] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07043CD8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07050938] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07051678] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_070519C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07051B60] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(8, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(10, 1]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(11, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001800 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07050938] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07051678] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_070519C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07051B60] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070558D0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070572A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07057F00] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(11, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001858 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
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
	{ command: Geo.node_perspective, args: [64, 50, 8000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [4, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [11, geo_switch_area]},
	{ command: Geo.open_node },
	{ command: Geo.branch, args: [1, castle_geo_001560]},
	{ command: Geo.branch, args: [1, castle_geo_001578]},
	{ command: Geo.branch, args: [1, castle_geo_0015B8]},
	{ command: Geo.branch, args: [1, castle_geo_0015F8]},
	{ command: Geo.branch, args: [1, castle_geo_001628]},
	{ command: Geo.branch, args: [1, castle_geo_001668]},
	{ command: Geo.branch, args: [1, castle_geo_001690]},
	{ command: Geo.branch, args: [1, castle_geo_0016D8]},
	{ command: Geo.branch, args: [1, castle_geo_001740]},
	{ command: Geo.branch, args: [1, castle_geo_001798]},
	{ command: Geo.branch, args: [1, castle_geo_001800]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_object_parent },
//	{ command: Geo.node_generated, args: [0, geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
