import { BehaviorCommandsInstance as BhvCmds } from "../engine/BehaviorCommands";
import { ObjectListProcessorInstance as ObjectListProcessor } from "./ObjectListProcessor";

export const bhvMario = [
    { command: BhvCmds.begin, args: { objListIndex: 0 } },
    { command: BhvCmds.set_hitbox, args: { radius: 37, height: 160 } },
    { command: BhvCmds.begin_loop },
        { command: BhvCmds.call_native, args: { func: ObjectListProcessor.bhv_mario_update } },
    { command: BhvCmds.end_loop },
]
