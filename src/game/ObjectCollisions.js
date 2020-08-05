import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { oIntangibleTimer, oPosY, oPosX, oPosZ, oInteractType } from "../include/object_constants"

const clear_object_collision = (startNode) => {
    let sp4 = startNode.header.next

    while (sp4 != startNode) {
        sp4.numCollidedObjs = 0
        sp4.collidedObjInteractTypes = 0
        if (sp4.rawData[oIntangibleTimer] > 0) sp4.rawData[oIntangibleTimer]--
        sp4 = sp4.header.next
    }
}

const detect_object_hitbox_overlap = (a, b) => {
    const sp3C = a.rawData[oPosY] - a.hitboxDownOffset
    const sp38 = b.rawData[oPosY] - b.hitboxDownOffset
    const dx = a.rawData[oPosX] - b.rawData[oPosX]
    const dz = a.rawData[oPosZ] - b.rawData[oPosZ]
    const collisionRadius = a.hitboxRadius + b.hitboxRadius
    const distance = Math.sqrt(dx * dx + dz * dz)

    if (collisionRadius > distance) {
        let sp20 = a.hitboxHeight + sp3C
        let sp1C = b.hitboxHeight + sp38

        if (sp3C > sp1C) return 0
        if (sp20 < sp38) return 0
        if (a.numCollidedObjs >= 4) return 0
        if (b.numCollidedObjs >= 4) return 0

        a.collidedObjs.push(b)
        b.collidedObjs.push(a)

        a.numCollidedObjs++ //possibly unnecessary
        b.numCollidedObjs++ //possibly unnecessary

        a.collidedObjInteractTypes |= b.rawData[oInteractType]
        b.collidedObjInteractTypes |= a.rawData[oInteractType]

        return 1

    }
}

const check_collision_in_list = (a, bStart) => {
    
    if (a.rawData[oIntangibleTimer] == 0) {
        let bNode = bStart.next
        while (bNode != bStart) {
            const b = bNode.wrapperObject
            if (b.rawData[oIntangibleTimer] == 0) {
                if (detect_object_hitbox_overlap(a, b) && b.hurtboxRadius != 0.0) {
                    throw "unimplemented hurt box"
                    detect_object_hurtbox_overlap(a, b)
                }
            }
            bNode = bNode.next
        }
    }
}

const check_player_object_collision = () => {
    const playerObjectList = ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PLAYER]
    let mario1Object = playerObjectList.next.wrapperObject

    //while (sp18 != sp1C) {
        ///check_collision_in_list(sp18, sp18.header.next) only for players collide with players
           check_collision_in_list(mario1Object, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_POLELIKE])
/*        check_collision_in_list(sp18, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_LEVEL])
        check_collision_in_list(sp18, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_GENACTOR])
        check_collision_in_list(sp18, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PUSHABLE])
        check_collision_in_list(sp18, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_SURFACE])
        check_collision_in_list(sp18, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_DESTRUCTIVE])*/
        //sp18 = sp18.next
    //}
}

export const detect_object_collisions = () => {
    clear_object_collision(ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_POLELIKE])
    clear_object_collision(ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PLAYER])
    clear_object_collision(ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PUSHABLE])
    clear_object_collision(ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_GENACTOR])
    clear_object_collision(ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_LEVEL])
    clear_object_collision(ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_SURFACE])
    clear_object_collision(ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_DESTRUCTIVE])
    check_player_object_collision()
}