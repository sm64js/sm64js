import * as Mario from "../game/Mario"
import { AreaInstance } from "../game/Area"

export const GRAPH_RENDER_ACTIVE = (1 << 0)
export const GRAPH_RENDER_CHILDREN_FIRST = (1 << 1)
export const GRAPH_RENDER_BILLBOARD = (1 << 2)
export const GRAPH_RENDER_Z_BUFFER = (1 << 3)
export const GRAPH_RENDER_INVISIBLE = (1 << 4)
export const GRAPH_RENDER_HAS_ANIMATION = (1 << 5)
export const GRAPH_RENDER_CYLBOARD      = (1 << 6)

// Whether the node type has a function pointer of type GraphNodeFunc
export const GRAPH_NODE_TYPE_FUNCTIONAL =             0x100

// Type used for Bowser and an unused geo function in obj_behaviors.c
export const GRAPH_NODE_TYPE_400    =                 0x400

export const GRAPH_NODE_TYPE_OBJECT   =               0x018


export const GFX_NUM_MASTER_LISTS = 8

export const GEO_CONTEXT_CREATE        =   0 // called when node is created from a geo command
export const GEO_CONTEXT_RENDER        =   1 // called from rendering_graph_node.c
export const GEO_CONTEXT_AREA_UNLOAD   =   2 // called when unloading an area
export const GEO_CONTEXT_AREA_LOAD     =   3 // called when loading an area
export const GEO_CONTEXT_AREA_INIT     =   4 // called when initializing the 8 areas
export const GEO_CONTEXT_HELD_OBJ      =   5 // called when processing a GraphNodeHeldObj

export const geo_obj_init_spawninfo = (graphNode, spawn) => {

    graphNode.scale = [1,1,1]
    graphNode.angle = [ ...spawn.startAngle ]
    graphNode.pos = [ ...spawn.startPos ]

    graphNode.unk18 = spawn.areaIndex
    graphNode.unk19 = spawn.activeAreaIndex
    graphNode.sharedChild = spawn.unk18
    graphNode.unk4C = spawn
    graphNode.throwMatrix = null
    graphNode.unk38 = { curAnim: 0 }

    graphNode.node.flags |= GRAPH_RENDER_ACTIVE
    graphNode.node.flags &= ~GRAPH_RENDER_INVISIBLE
    graphNode.node.flags |= GRAPH_RENDER_HAS_ANIMATION
    graphNode.node.flags &= ~GRAPH_RENDER_BILLBOARD
} 

export const geo_obj_init = (graphNode, sharedChild, pos, angle) => {

    Object.assign(graphNode, {
        pos: [...pos],
        angle: [...angle],
        scale: [1.0, 1.0, 1.0],
        sharedChild,
        throwMatrix: null,
        unk38: { curAnim: null }
    })

    graphNode.node.flags |= GRAPH_RENDER_ACTIVE
    graphNode.node.flags &= ~GRAPH_RENDER_INVISIBLE
    graphNode.node.flags |= GRAPH_RENDER_HAS_ANIMATION
    graphNode.node.flags &= ~GRAPH_RENDER_BILLBOARD

}

export const geo_obj_init_animation = (graphNode, anim) => {

    if (graphNode.unk38.curAnim != anim) {
        graphNode.unk38.curAnim = anim
        graphNode.unk38.animFrame = anim.unk04 + ((anim.flags & Mario.ANIM_FLAG_FORWARD) ? 1 : -1)
        graphNode.unk38.animAccel = 0
        graphNode.unk38.animYTrans = 0
    }

}

export const geo_obj_init_animation_accel = (graphNode, anim, animAccel) => {

    if (graphNode.unk38.curAnim != anim) {
        graphNode.unk38.curAnim = anim
        graphNode.unk38.animFrameAccelAssist = (anim.unk04 << 16) + ((anim.flags & Mario.ANIM_FLAG_FORWARD) ? animAccel : -animAccel)
        graphNode.unk38.animFrame = graphNode.unk38.animFrameAccelAssist >> 16
        graphNode.unk38.animYTrans = 0
    }

    graphNode.unk38.animAccel = animAccel

}


const getTopBits = (number) => {
    number = number >>> 16
    return number > 32767 ? number - 65536 : number
}

const setTopBits = (number32, number16) => { return (number16 << 16) | (number32 & 0xFFFF) }

export const retrieve_animation_index = (curFrame, attributes) => {

    let result

    if (curFrame < attributes.indices[attributes.indexToIndices]) {
        result = attributes.indices[attributes.indexToIndices + 1] + curFrame
    } else {
        result = attributes.indices[attributes.indexToIndices + 1] + attributes.indices[attributes.indexToIndices] - 1
    }

    attributes.indexToIndices += 2

    return result
}

export const geo_update_animation_frame = (obj, accelAssist) => {

    const anim = obj.curAnim

    if (obj.animTimer == AreaInstance.gAreaUpdateCounter || anim.flags & Mario.ANIM_FLAG_2) {
/*        if (accelAssist) {
            accelAssist = obj.animFrameAccelAssist
        }*/

        return obj.animFrame
    }


    let result

    if (anim.flags & Mario.ANIM_FLAG_FORWARD) {

        if (obj.animAccel) {
            result = parseInt(obj.animFrameAccelAssist - obj.animAccel)
        } else {
            result = (obj.animFrame - 1) << 16
        }

        if (getTopBits(result) < anim.unk06) {
            if (anim.flags & Mario.ANIM_FLAG_NOLOOP) {
                result = setTopBits(result, anim.unk06)
            } else {
                result = setTopBits(result, anim.unk08 - 1)
            }
        }
    } else {
        if (obj.animAccel != 0) {
            result = parseInt(obj.animFrameAccelAssist + obj.animAccel)
        } else {
            result = (obj.animFrame + 1) << 16
        }

        if (getTopBits(result) >= anim.unk08) {
            if (anim.flags & Mario.ANIM_FLAG_NOLOOP) {
                result = setTopBits(result, anim.unk08 - 1)
            } else {
                result = setTopBits(result, anim.unk06)
            }
        }
    }

    obj.animFrameAccelAssist = result

    return getTopBits(result)
}