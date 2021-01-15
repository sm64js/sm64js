import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"
import { smoke_seg4_dl_04021718 } from "./model.inc"
import { smoke_seg4_dl_04021730 } from "./model.inc"
import { smoke_seg4_dl_04021748 } from "./model.inc"
import { smoke_seg4_dl_04021760 } from "./model.inc"
import { smoke_seg4_dl_04021778 } from "./model.inc"
import { smoke_seg4_dl_04021790 } from "./model.inc"
import { smoke_seg4_dl_040217A8 } from "./model.inc"

export const smoke_geo = [
	{ command: Geo.node_switch_case,args: [7, geo_switch_anim_state],},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, smoke_seg4_dl_04021718] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, smoke_seg4_dl_04021730] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, smoke_seg4_dl_04021748] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, smoke_seg4_dl_04021760] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, smoke_seg4_dl_04021778] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, smoke_seg4_dl_04021790] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, smoke_seg4_dl_040217A8] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
