import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oPosX, oPosZ, oTimer, oBehParams} from "../../include/object_constants"
import { MODEL_YELLOW_SPHERE } from "../../include/model_ids"
import { spawn_object, obj_set_pos } from "../ObjectHelpers"
import { bhv_pole_base_loop } from "./pole_base.inc"

export const bhv_pole_init = () => {
	const o = ObjectListProc.gCurrentObject
	const tenthHitboxHeight = o.rawData[oBehParams] >> 0x10 & 0xFF
	o.hitboxHeight = tenthHitboxHeight * 10
}

export const bhv_giant_pole_loop = () => {
	const o = ObjectListProc.gCurrentObject
	var topBall = null;
	if (o.rawData[oTimer] == 0) {
		topBall = spawn_object(o, MODEL_YELLOW_SPHERE, gLinker.behaviors.bhvYellowBall) 
		topBall.rawData[oPosY] += o.hitboxHeight + 50.0
	}
	bhv_pole_base_loop()
}


gLinker.bhv_pole_init = bhv_pole_init
gLinker.bhv_giant_pole_loop = bhv_giant_pole_loop
