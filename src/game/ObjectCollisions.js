import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { oIntangibleTimer, oPosY, oPosX, oPosZ, oInteractType, oInteractionSubtype, oDistanceToMario, ACTIVE_FLAG_UNK9 } from "../include/object_constants"
import { INT_SUBTYPE_DELAY_INVINCIBILITY } from "./Interaction"

const clear_object_collision = (startNode) => {
    let sp4 = startNode.next

    while (sp4 != startNode) {
        const obj = sp4.wrapperObject
        obj.collidedObjs = []
        obj.numCollidedObjs = 0 // possibly not necessary
        obj.collidedObjInteractTypes = 0
        if (obj.rawData[oIntangibleTimer] > 0) obj.rawData[oIntangibleTimer]--
        sp4 = sp4.next
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

const detect_object_hurtbox_overlap = (a, b) => {
    const sp3C = a.rawData[oPosY] - a.hitboxDownOffset
    const sp38 = b.rawData[oPosY] - b.hitboxDownOffset
    const dx = a.rawData[oPosX] - b.rawData[oPosX]
    const dz = a.rawData[oPosZ] - b.rawData[oPosZ]
    const collisionRadius = a.hurtboxRadius + b.hurtboxRadius
    const distance = Math.sqrt(dx * dx + dz * dz)

    if (a == ObjectListProc.gMarioObject) {
        b.rawData[oInteractionSubtype] |= INT_SUBTYPE_DELAY_INVINCIBILITY
    }

    if (collisionRadius > distance) {
        let sp20 = a.hitboxHeight + sp3C
        let sp1C = b.hurtboxHeight + sp38

        if (sp3C > sp1C) return 0
        if (sp20 < sp38) return 0

        if (a == ObjectListProc.gMarioObject) {
            b.rawData[oInteractionSubtype] &= ~INT_SUBTYPE_DELAY_INVINCIBILITY
        }

        return 1

    }
}



const check_collision_in_list = (aObj, b, c) => {
    
    if (aObj.rawData[oIntangibleTimer] == 0) {
        while (b != c) {
            const bObj = b.wrapperObject
            if (bObj.rawData[oIntangibleTimer] == 0) {
                if (detect_object_hitbox_overlap(aObj, bObj) && bObj.hurtboxRadius != 0.0) {
                    detect_object_hurtbox_overlap(aObj, bObj)
                }
            }
            b = b.next
        }
    }
}

const check_player_object_collision = () => {

    const playerObjectList = ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PLAYER]
    let mario1Object = playerObjectList.wrapperObject

    //while (sp18 != sp1C) { /// only 1 player in vanilla, so don't need this while loop
        //check_collision_in_list(sp18, sp18.header.next) only for players collide with players
    check_collision_in_list(mario1Object, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_POLELIKE].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_POLELIKE])
    check_collision_in_list(mario1Object, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_LEVEL].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_LEVEL])
    check_collision_in_list(mario1Object, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_GENACTOR].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_GENACTOR])
    check_collision_in_list(mario1Object, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PUSHABLE].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PUSHABLE])
    check_collision_in_list(mario1Object, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_SURFACE].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_SURFACE])
    check_collision_in_list(mario1Object, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_DESTRUCTIVE].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_DESTRUCTIVE])
        //sp18 = sp18.next
    //}
}

const check_destructive_object_collision = () => {
    const sp1C = ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_DESTRUCTIVE]
    let sp18 = sp1C.next

    while (sp18 != sp1C) {
        const obj = sp18.wrapperObject
        if (obj.rawData[oDistanceToMario] < 2000 && !(obj.activeFlags & ACTIVE_FLAG_UNK9)) {
            check_collision_in_list(obj, sp18.next, sp1C)
            check_collision_in_list(obj, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_GENACTOR].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_GENACTOR])
            check_collision_in_list(obj, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PUSHABLE].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PUSHABLE])
            check_collision_in_list(obj, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_SURFACE].next, ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_SURFACE])
        }
        sp18 = sp18.next
    }
}

const check_pushable_object_collision = () => {
    const sp1C = ObjectListProc.gObjectLists[ObjectListProc.OBJ_LIST_PUSHABLE]
    let sp18 = sp1C.next

    while (sp18 != sp1C) {
        const obj = sp18.wrapperObject
        check_collision_in_list(obj, sp18.next, sp1C)
        sp18 = sp18.next
    }
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
    check_pushable_object_collision()
    check_destructive_object_collision()
}