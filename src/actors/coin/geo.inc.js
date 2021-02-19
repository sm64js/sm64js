import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"
import { coin_seg3_dl_03007800 } from "./model.inc"
import { coin_seg3_dl_03007828 } from "./model.inc"
import { coin_seg3_dl_03007850 } from "./model.inc"
import { coin_seg3_dl_03007878 } from "./model.inc"
import { coin_seg3_dl_030078A0 } from "./model.inc"
import { coin_seg3_dl_030078C8 } from "./model.inc"
import { coin_seg3_dl_030078F0 } from "./model.inc"
import { coin_seg3_dl_03007918 } from "./model.inc"
import { coin_seg3_dl_03007940 } from "./model.inc"
import { coin_seg3_dl_03007990 } from "./model.inc"
import { coin_seg3_dl_03007968 } from "./model.inc"
import { coin_seg3_dl_030079B8 } from "./model.inc"

export const yellow_coin_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0xB4, 50]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [8, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007800] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007800] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007828] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007828] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007850] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007850] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007878] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007878] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const yellow_coin_no_shadow_geo = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [8, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007800] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007800] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007828] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007828] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007850] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007850] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007878] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007878] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const blue_coin_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0xB4, 80]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [8, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078F0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078F0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007918] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007918] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const blue_coin_no_shadow_geo = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [8, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078F0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030078F0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007918] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007918] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const red_coin_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0xB4, 80]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [8, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007968] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007968] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007990] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007990] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030079B8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030079B8] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const red_coin_no_shadow_geo = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [8, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007968] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007968] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007990] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_03007990] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030079B8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, coin_seg3_dl_030079B8] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
