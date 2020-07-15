import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"

class SpawnObject {
    constructor() {

    }

    clear_object_lists() {
        for (let i = 0; i < ObjectListProc.NUM_OBJ_LISTS; i++) {
            ObjectListProc.gObjectLists[i].next = ObjectListProc.gObjectLists[i]
            ObjectListProc.gObjectLists[i].prev = ObjectListProc.gObjectLists[i]
        }
    }

    create_object(bhvScript) {
        //current working spot
    }
}

export const SpawnObjectInstance = new SpawnObject()