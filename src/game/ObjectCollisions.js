import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import {
    OBJ_LIST_PLAYER, OBJ_LIST_UNUSED_1, OBJ_LIST_DESTRUCTIVE, OBJ_LIST_UNUSED_3, OBJ_LIST_GENACTOR, OBJ_LIST_PUSHABLE,
    OBJ_LIST_LEVEL, OBJ_LIST_UNUSED_7, OBJ_LIST_DEFAULT, OBJ_LIST_SURFACE, OBJ_LIST_POLELIKE, OBJ_LIST_SPAWNER,
    OBJ_LIST_UNIMPORTANT,
} from "./ObjectListProcessor"
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
    const gObjectLists = ObjectListProc.gObjectLists
    const marioObj = gObjectLists[OBJ_LIST_PLAYER].next.wrapperObject

    check_collision_in_list(marioObj, gObjectLists[OBJ_LIST_POLELIKE].next,    gObjectLists[OBJ_LIST_POLELIKE])
    check_collision_in_list(marioObj, gObjectLists[OBJ_LIST_LEVEL].next,       gObjectLists[OBJ_LIST_LEVEL])
    check_collision_in_list(marioObj, gObjectLists[OBJ_LIST_GENACTOR].next,    gObjectLists[OBJ_LIST_GENACTOR])
    check_collision_in_list(marioObj, gObjectLists[OBJ_LIST_PUSHABLE].next,    gObjectLists[OBJ_LIST_PUSHABLE])
    check_collision_in_list(marioObj, gObjectLists[OBJ_LIST_SURFACE].next,     gObjectLists[OBJ_LIST_SURFACE])
    check_collision_in_list(marioObj, gObjectLists[OBJ_LIST_DESTRUCTIVE].next, gObjectLists[OBJ_LIST_DESTRUCTIVE])
}

const check_destructive_object_collision = () => {
    const headObj = ObjectListProc.gObjectLists[OBJ_LIST_DESTRUCTIVE]
    let objNode = headObj.next

    while (objNode != headObj) {
        const obj = objNode.wrapperObject
        if (obj.rawData[oDistanceToMario] < 2000 && !(obj.activeFlags & ACTIVE_FLAG_UNK9)) {
            check_collision_in_list(obj, objNode.next, headObj)
            check_collision_in_list(obj, ObjectListProc.gObjectLists[OBJ_LIST_GENACTOR].next, ObjectListProc.gObjectLists[OBJ_LIST_GENACTOR])
            check_collision_in_list(obj, ObjectListProc.gObjectLists[OBJ_LIST_PUSHABLE].next, ObjectListProc.gObjectLists[OBJ_LIST_PUSHABLE])
            check_collision_in_list(obj, ObjectListProc.gObjectLists[OBJ_LIST_SURFACE].next, ObjectListProc.gObjectLists[OBJ_LIST_SURFACE])
        }
        objNode = objNode.next
    }
}

const check_pushable_object_collision = () => {
    const headObj = ObjectListProc.gObjectLists[OBJ_LIST_PUSHABLE]
    let objNode = headObj.next

    while (objNode != headObj) {
        const obj = objNode.wrapperObject
        check_collision_in_list(obj, objNode.next, headObj)
        objNode = objNode.next
    }
}

export const detect_object_collisions = () => {
    clear_object_collision(ObjectListProc.gObjectLists[OBJ_LIST_POLELIKE])
    clear_object_collision(ObjectListProc.gObjectLists[OBJ_LIST_PLAYER])
    clear_object_collision(ObjectListProc.gObjectLists[OBJ_LIST_PUSHABLE])
    clear_object_collision(ObjectListProc.gObjectLists[OBJ_LIST_GENACTOR])
    clear_object_collision(ObjectListProc.gObjectLists[OBJ_LIST_LEVEL])
    clear_object_collision(ObjectListProc.gObjectLists[OBJ_LIST_SURFACE])
    clear_object_collision(ObjectListProc.gObjectLists[OBJ_LIST_DESTRUCTIVE])
    check_player_object_collision()
    check_pushable_object_collision()
    check_destructive_object_collision()
}
