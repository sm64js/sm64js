import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_switch_area } from "../../../../game/ObjectHelpers"

import { bbh_seg7_dl_070075A8 } from "./1/model.inc"
import { bbh_seg7_dl_07007940 } from "./2/model.inc"
import { bbh_seg7_dl_07007B90 } from "./3/model.inc"
import { bbh_seg7_dl_07007FD0 } from "./4/model.inc"
import { bbh_seg7_dl_07008B58 } from "./5/model.inc"
import { bbh_seg7_dl_07008EA8 } from "./6/model.inc"
import { bbh_seg7_dl_0700AFF0 } from "./7/model.inc"
import { bbh_seg7_dl_0700B1C8 } from "./8/model.inc"
import { bbh_seg7_dl_0700B418 } from "./9/model.inc"
import { bbh_seg7_dl_0700B9E0 } from "./10/model.inc"
import { bbh_seg7_dl_0700BBF8 } from "./11/model.inc"
import { bbh_seg7_dl_0700D080 } from "./12/model.inc"
import { bbh_seg7_dl_0700D2E0 } from "./13/model.inc"
import { bbh_seg7_dl_0700D490 } from "./14/model.inc"
import { bbh_seg7_dl_0700D7E0 } from "./15/model.inc"
import { bbh_seg7_dl_07012220 } from "./19/model.inc"
import { bbh_seg7_dl_07012510 } from "./20/model.inc"
import { bbh_seg7_dl_070126E8 } from "./21/model.inc"
import { bbh_seg7_dl_0700F510 } from "./16/model.inc"
import { bbh_seg7_dl_0700F848 } from "./17/model.inc"
import { bbh_seg7_dl_07011120 } from "./18/model.inc"
import { bbh_seg7_dl_070139A8 } from "./22/model.inc"
import { bbh_seg7_dl_07013BE8 } from "./23/model.inc"
import { bbh_seg7_dl_07014FD8 } from "./24/model.inc"
import { bbh_seg7_dl_07015398 } from "./25/model.inc"
import { bbh_seg7_dl_070156E0 } from "./26/model.inc"
import { bbh_seg7_dl_07015A20 } from "./27/model.inc"
import { bbh_seg7_dl_07017378 } from "./28/model.inc"
import { bbh_seg7_dl_07017570 } from "./29/model.inc"
import { bbh_seg7_dl_07017788 } from "./30/model.inc"
import { bbh_seg7_dl_07019EF8 } from "./31/model.inc"
import { bbh_seg7_dl_0701A080 } from "./32/model.inc"
import { bbh_seg7_dl_0701A850 } from "./33/model.inc"
import { bbh_seg7_dl_0701B6D0 } from "./34/model.inc"
import { bbh_seg7_dl_0701E4E0 } from "./35/model.inc"
import { bbh_seg7_dl_0701E8D8 } from "./36/model.inc"
import { bbh_seg7_dl_0701ED18 } from "./37/model.inc"
import { bbh_seg7_dl_0701EEC8 } from "./38/model.inc"
import { bbh_seg7_dl_0701F070 } from "./39/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const geo_bbh_000670 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_0006B0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700AFF0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B1C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700B418] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B9E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_0006E8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D080] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700D2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D490] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012220] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012510] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_070126E8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000730 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700F510] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700F848] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000750 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07011120] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000768 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D080] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700D2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D490] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012220] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012510] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_070126E8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_0007B0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070139A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07013BE8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_0007D0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07014FD8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07015398] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_070156E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07015A20] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000800 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07017378] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07017570] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07017788] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000828 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07019EF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701A080] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
//	{ command: Geo.node_generated, args: [0x0401, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000860 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701A850] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000888 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701B6D0] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_0008B0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701E4E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701E8D8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701ED18] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701F070] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_0008E8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700AFF0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B1C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700B418] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B9E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000950 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D080] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700D2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D490] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012220] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012510] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_070126E8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_0009C8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700F510] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700F848] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000A18 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07011120] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000A60 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D080] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700D2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D490] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012220] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012510] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_070126E8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000AD8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070139A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07013BE8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000B28 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07014FD8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07015398] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_070156E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07015A20] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000B88 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_070075A8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_07007940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07007B90] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07008B58] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701E4E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701E8D8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701ED18] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701F070] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000BF0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700AFF0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B1C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700B418] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B9E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700F510] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700F848] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000C38 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700AFF0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B1C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700B418] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B9E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07017378] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07017570] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07017788] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000C88 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700AFF0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B1C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700B418] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700B9E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07019EF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701A080] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
//	{ command: Geo.node_generated, args: [0x0401, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000CE8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D080] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700D2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D490] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07011120] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000D20 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D080] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700D2E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700D490] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012220] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07012510] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_070126E8] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000D68 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0700F510] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0700F848] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07019EF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701A080] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
//	{ command: Geo.node_generated, args: [0x0401, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000DB0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07011120] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701E4E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701E8D8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701ED18] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701F070] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000DF0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07017378] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07017570] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_07017788] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701E4E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701E8D8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701ED18] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701F070] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000E40 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_07019EF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701A080] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701A850] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
//	{ command: Geo.node_generated, args: [0x0401, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000E80 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701A850] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701B6D0] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const geo_bbh_000EB0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701B6D0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701E4E0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bbh_seg7_dl_0701E8D8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701ED18] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, bbh_seg7_dl_0701F070] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x0400, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },

]

export const geo_bbh_000F00 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100]},
	{ command: Geo.open_node },
// 	{ command: GeoLayout.node_background, args: [GeoLayout.BACKGROUND_HAUNTED, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45, 50, 10000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [4, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [32, geo_switch_area]},
	{ command: Geo.open_node },
	{ command: Geo.branch, args: [1,geo_bbh_000670]},
	{ command: Geo.branch, args: [1,geo_bbh_0006B0]},
	{ command: Geo.branch, args: [1,geo_bbh_0006E8]},
	{ command: Geo.branch, args: [1,geo_bbh_000730]},
	{ command: Geo.branch, args: [1,geo_bbh_000750]},
	{ command: Geo.branch, args: [1,geo_bbh_000768]},
	{ command: Geo.branch, args: [1,geo_bbh_0007B0]},
	{ command: Geo.branch, args: [1,geo_bbh_0007D0]},
	{ command: Geo.branch, args: [1,geo_bbh_000800]},
	{ command: Geo.branch, args: [1,geo_bbh_000828]},
	{ command: Geo.branch, args: [1,geo_bbh_000860]},
	{ command: Geo.branch, args: [1,geo_bbh_000888]},
	{ command: Geo.branch, args: [1,geo_bbh_0008B0]},
	{ command: Geo.branch, args: [1,geo_bbh_0008E8]},
	{ command: Geo.branch, args: [1,geo_bbh_000950]},
	{ command: Geo.branch, args: [1,geo_bbh_0009C8]},
	{ command: Geo.branch, args: [1,geo_bbh_000A18]},
	{ command: Geo.branch, args: [1,geo_bbh_000A60]},
	{ command: Geo.branch, args: [1,geo_bbh_000AD8]},
	{ command: Geo.branch, args: [1,geo_bbh_000B28]},
	{ command: Geo.branch, args: [1,geo_bbh_000B88]},
	{ command: Geo.branch, args: [1,geo_bbh_000BF0]},
	{ command: Geo.branch, args: [1,geo_bbh_000C38]},
	{ command: Geo.branch, args: [1,geo_bbh_000C88]},
	{ command: Geo.branch, args: [1,geo_bbh_000CE8]},
	{ command: Geo.branch, args: [1,geo_bbh_000D20]},
	{ command: Geo.branch, args: [1,geo_bbh_000D68]},
	{ command: Geo.branch, args: [1,geo_bbh_000DB0]},
	{ command: Geo.branch, args: [1,geo_bbh_000DF0]},
	{ command: Geo.branch, args: [1,geo_bbh_000E40]},
	{ command: Geo.branch, args: [1,geo_bbh_000E80]},
	{ command: Geo.branch, args: [1,geo_bbh_000EB0]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_object_parent },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
