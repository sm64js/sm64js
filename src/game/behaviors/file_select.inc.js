import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { cur_obj_scale } from "../ObjectHelpers"
import { oFaceAngleYaw, oMenuButtonScale } from "../../include/object_constants"

const beh_yellow_background_menu_init = () => {
    ObjectListProc.gCurrentObject.rawData[oFaceAngleYaw] = 0x8000
    ObjectListProc.gCurrentObject.rawData[oMenuButtonScale] = 9
}

const beh_yellow_background_menu_loop = () => {
    cur_obj_scale(9)
}

gLinker.beh_yellow_background_menu_init = beh_yellow_background_menu_init
gLinker.beh_yellow_background_Menu_loop = beh_yellow_background_menu_loop