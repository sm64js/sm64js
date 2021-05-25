import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oBehParams2ndByte, oCheckerBoardPlatformUnk1AC, oCheckerBoardPlatformUnkFC, oCheckerBoardPlatformUnkF8, oDistanceToMario, oAction, oMoveAnglePitch, oAngleVelPitch, oForwardVel, oVelY, oTimer, oFaceAnglePitch, oFaceAngleYaw, oMoveAngleYaw } from "../../include/object_constants"
import { spawn_object_relative, cur_obj_move_using_fvel_and_gravity } from "../ObjectHelpers"
import { MODEL_CHECKERBOARD_PLATFORM } from "../../include/model_ids"
import { bhvCheckerboardPlatformSub } from "../BehaviorData"
import { sins, coss } from "../../utils"

const checkerPlatformData = [
	{ unk0: 145, unk1: [0.7, 1.5, 0.7], unk2: 7.0 },
	{ unk0: 235, unk1: [1.2, 2.0, 0.7], unk2: 11.6 },
]

const bhv_checkerboard_elevator_group_init = () => {
	const o = ObjectListProc.gCurrentObject

	if (o.rawData[oBehParams2ndByte] == 0) o.rawData[oBehParams2ndByte] = 65

	const sp3C = o.rawData[oBehParams2ndByte] * 10.0
	const sp34 = (o.rawData[oBehParams2ndByte] >> 24) & 0xFF

	for (let i = 0; i < 2; i++) {
		const sp38 = i == 0 ? -checkerPlatformData[sp34].unk0 : checkerPlatformData[sp34].unk0

		const sp2C = spawn_object_relative(i, 0, i * sp3C, sp38, o, MODEL_CHECKERBOARD_PLATFORM, bhvCheckerboardPlatformSub)
		sp2C.rawData[oCheckerBoardPlatformUnk1AC] = checkerPlatformData[sp34].unk2
		sp2C.gfx.scale = [...checkerPlatformData[sp34].unk1]
	}
}

const bhv_checkerboard_platform_init = () => {
	const o = ObjectListProc.gCurrentObject

	o.rawData[oCheckerBoardPlatformUnkFC] = o.parentObj.rawData[oBehParams2ndByte]
}

const checkerboard_plat_act_move_y = (vel, a2) => {
	const o = ObjectListProc.gCurrentObject

	o.rawData[oMoveAnglePitch] = 0
	o.rawData[oAngleVelPitch] = 0
	o.rawData[oForwardVel] = 0.0
	o.rawData[oVelY] = vel
	if (o.rawData[oTimer] > a2)
		o.rawData[oAction]++
}

const checkerboard_plat_act_rotate = (a0, a1) => {
	const o = ObjectListProc.gCurrentObject

	o.rawData[oVelY] = 0.0
	o.rawData[oAngleVelPitch] = a1
	if (o.rawData[oTimer] + 1 == parseInt(0x8000 / Math.abs(a1)))
		o.rawData[oAction] = a0
	o.rawData[oCheckerBoardPlatformUnkF8] = a0
}

const signum_positive = (x) => {
	if (x >= 0) return 1
	else return -1
}

const bhv_checkerboard_platform_loop = () => {
	const o = ObjectListProc.gCurrentObject

	const sp24 = o.rawData[oCheckerBoardPlatformUnk1AC]
	o.rawData[oCheckerBoardPlatformUnkF8] = 0

	/// TODO play elevator sound

	switch (o.rawData[oAction]) {
		case 0:
			if (o.rawData[oBehParams2ndByte] == 0)
				o.rawData[oAction] = 1
			else
				o.rawData[oAction] = 3
			break
		case 1: 
			checkerboard_plat_act_move_y(10.0, o.rawData[oCheckerBoardPlatformUnkFC])
			break
		case 2:
			checkerboard_plat_act_rotate(3, 512)
			break
		case 3:
			checkerboard_plat_act_move_y(-10.0, o.rawData[oCheckerBoardPlatformUnkFC])
			break
		case 4:
			checkerboard_plat_act_rotate(1, -512)
			break
	}

	o.rawData[oMoveAnglePitch] += Math.abs(o.rawData[oAngleVelPitch])
	o.rawData[oFaceAnglePitch] += Math.abs(o.rawData[oAngleVelPitch])
	o.rawData[oFaceAngleYaw] = o.rawData[oMoveAngleYaw]
	if (o.rawData[oMoveAnglePitch] != 0) {
		o.rawData[oForwardVel] = signum_positive(o.rawData[oAngleVelPitch]) * sins(o.rawData[oMoveAnglePitch]) * sp24
		o.rawData[oVelY] = signum_positive(o.rawData[oAngleVelPitch]) * coss(o.rawData[oMoveAnglePitch]) * sp24
	}
	if (o.rawData[oCheckerBoardPlatformUnkF8] == 1) {
		o.rawData[oAngleVelPitch] = 0
		o.rawData[oFaceAnglePitch] &= ~0x7FFF
	}
	cur_obj_move_using_fvel_and_gravity()
	gLinker.SurfaceLoad.load_object_collision_model()
}


gLinker.bhv_checkerboard_elevator_group_init = bhv_checkerboard_elevator_group_init
gLinker.bhv_checkerboard_platform_init = bhv_checkerboard_platform_init
gLinker.bhv_checkerboard_platform_loop = bhv_checkerboard_platform_loop
