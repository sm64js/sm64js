import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"

import { sparkles_seg4_dl_0402A570 } from "./model.inc"
import { sparkles_seg4_dl_0402A558 } from "./model.inc"
import { sparkles_seg4_dl_0402A540 } from "./model.inc"
import { sparkles_seg4_dl_0402A528 } from "./model.inc"
import { sparkles_seg4_dl_0402A510 } from "./model.inc"
import { sparkles_seg4_dl_0402A4F8 } from "./model.inc"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"

export const sparkles_geo = [
	{ command: Geo.node_switch_case, args: [12, geo_switch_anim_state] },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A570] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A570] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A558] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A558] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A540] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A540] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A528] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A528] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A510] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A510] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A4F8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sparkles_seg4_dl_0402A4F8] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
