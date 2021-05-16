import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"

export const bhv_castle_flag_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.header.gfx.unk38.animFrame = Math.floor(Math.random() * 28.0)
}