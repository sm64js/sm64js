import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"

export const SHADOW_CIRCLE_9_VERTS = 0
export const SHADOW_CIRCLE_4_VERTS = 1
export const SHADOW_CIRCLE_4_VERTS_FLAT_UNUSED = 2
export const SHADOW_SQUARE_PERMANENT = 10
export const SHADOW_SQUARE_SCALABLE = 11
export const SHADOW_SQUARE_TOGGLABLE = 12
/**
    * This defines an offset after which rectangular shadows with custom
    * widths and heights can be defined.
    */
export const SHADOW_RECTANGLE_HARDCODED_OFFSET = 50
export const SHADOW_CIRCLE_PLAYER = 99

let sSurfaceTypeBelowShadow

const create_shadow_player = (xPos, yPos, zPos, shadowScale, solidity, isLuigi) => {
    return []
}

export const create_shadow_below_xyz = (xPos, yPos, zPos, shadowScale, shadowSolidity, shadowType) => {

    const floorWrapper = {}
    SurfaceCollision.find_floor(xPos, yPos, zPos, floorWrapper)

    if (floorWrapper.floor) {
        sSurfaceTypeBelowShadow = floorWrapper.floor.type
    } else throw "no floor for shadow"

    switch (shadowType) {
        case SHADOW_CIRCLE_PLAYER:
            return create_shadow_player(xPos, yPos, zPos, shadowScale, shadowSolidity, false)
        default: throw "unimplemented shadow type - create_shadow_below_xyz"
    }

}