import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oBehParams2ndByte, oCheckerBoardPlatformUnk1AC } from "../../include/object_constants"
import { spawn_object, spawn_object_relative } from "../ObjectHelpers"
import { MODEL_CHECKERBOARD_PLATFORM } from "../../include/model_ids"
import { bhvCheckerboardPlatformSub } from "../BehaviorData"

const checkerPlatformData = [
	{ unk0: 145, unk1: [0.7, 1.5, 0.7], unk2: 7.0 },
	{ unk0: 235, unk1: [1.2, 2.0, 0.7], unk2: 11.6 },
]

export const bhv_checkerboard_elevator_group_init = () => {
	console.log("spawn once")
	const o = ObjectListProc.gCurrentObject

	if (o.rawData[oBehParams2ndByte] == 0) o.rawData[oBehParams2ndByte] = 65

	const sp3C = o.rawData[oBehParams2ndByte] * 10.0
	const sp34 = (o.rawData[oBehParams2ndByte] >> 24) & 0xFF

	for (let i = 0; i < 2; i++) {
		const sp38 = i == 0 ? -checkerPlatformData[sp34].unk0 : checkerPlatformData[sp34].unk0

		const sp2C = spawn_object_relative(i, 0, i * sp3C, sp38, o, MODEL_CHECKERBOARD_PLATFORM, bhvCheckerboardPlatformSub)
		sp2C.rawData[oCheckerBoardPlatformUnk1AC] = checkerPlatformData[sp34].unk2
		sp2C.header.gfx.scale = [...checkerPlatformData[sp34].unk1]
	}
}