import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"
import {
	explosion_seg3_dl_03004298,
	explosion_seg3_dl_030042B0,
	explosion_seg3_dl_030042C8,
	explosion_seg3_dl_030042E0,
	explosion_seg3_dl_030042F8,
	explosion_seg3_dl_03004310,
	explosion_seg3_dl_03004328,
} from "./model.inc"

export const explosion_geo = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [9, geo_switch_anim_state], },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_03004298] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_03004298] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_030042B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_030042B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_030042C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_030042E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_030042F8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_03004310] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, explosion_seg3_dl_03004328] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
