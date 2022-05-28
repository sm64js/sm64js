/**
 * This is the behavior file for the tilting inverted pyramids in BitFS/LLL.
 * The object essentially just tilts and moves Mario with it.
 */

import { mtxf_align_terrain_normal, sqrtf } from "../../engine/math_util"
import { oPosX, oPosY, oPosZ, oTiltingPyramidMarioOnPlatform, oTiltingPyramidNormalX, oTiltingPyramidNormalY, oTiltingPyramidNormalZ } from "../../include/object_constants"
import { linear_mtxf_mul_vec3f } from "../ObjectHelpers"
import { PlatformDisplacementInstance as PlatformDisplacement } from "../PlatformDisplacement"

/**
 * Creates a transform matrix on a variable passed in from given normals
 * and the object's position.
 */
export const create_transform_from_normals = (transform, xNorm, yNorm, zNorm) => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    let normal = new Array(3)
    let pos = new Array(3)

    pos[0] = o.rawData[oPosX]
    pos[1] = o.rawData[oPosY]
    pos[2] = o.rawData[oPosZ]

    normal[0] = xNorm
    normal[1] = yNorm
    normal[2] = zNorm

    mtxf_align_terrain_normal(transform, normal, pos, 0)
}

/**
 * Initialize the object's transform matrix with Y being up.
 */
export const bhv_platform_normals_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    let transform = o.transform

    o.rawData[oTiltingPyramidNormalX] = 0.0
    o.rawData[oTiltingPyramidNormalY] = 1.0
    o.rawData[oTiltingPyramidNormalZ] = 0.0
    
    create_transform_from_normals(transform, 0.0, 1.0, 0.0)
}

/**
 * Returns a value that is src incremented/decremented by inc towards goal
 * until goal is reached. Does not overshoot.
 */
const approach_by_increment = (goal, src, inc) => {
    let newVal

    if (src <= goal) {
        if (goal - src < inc) {
            newVal = goal
        } else {
            newVal = src + inc
        }
    } else if (goal - src > -inc) {
        newVal = goal
    } else {
        newVal = src - inc
    }

    return newVal
}

export const bhv_tilting_inverted_pyramid_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    const gMarioObject = gLinker.ObjectListProcessor.gMarioObject
    let transform = o.transform

    let dx
    let dy
    let dz
    let d

    let dist = new Array(3)
    let posBeforeRotation = new Array(3)
    let posAfterRotation = new Array(3)

    // Mario's position
    let mx
    let my
    let mz

    let marioOnPlatform = false
    
    if (gMarioObject.platform == o) {
        mx = gLinker.LevelUpdate.gMarioState.pos[0]
        my = gLinker.LevelUpdate.gMarioState.pos[1]
        mz = gLinker.LevelUpdate.gMarioState.pos[2]

        dist[0] = gMarioObject.rawData[oPosX] - o.rawData[oPosX]
        dist[1] = gMarioObject.rawData[oPosY] - o.rawData[oPosY]
        dist[2] = gMarioObject.rawData[oPosZ] - o.rawData[oPosZ]
        linear_mtxf_mul_vec3f(transform, posBeforeRotation, dist)

        dx = gMarioObject.rawData[oPosX] - o.rawData[oPosX]
        dy = 500.0
        dz = gMarioObject.rawData[oPosZ] - o.rawData[oPosZ]
        d = sqrtf(dx * dx + dy * dy + dz * dz)
        
        //! Always true since dy = 500, making d >= 500
        if (d != 0.0) {
            // Normalizing
            d = 1.0 / d
            dx *= d
            dy *= d
            dz *= d
        } else {
            dx = 0.0
            dy = 1.0
            dz = 0.0
        }

        if (o.rawData[oTiltingPyramidMarioOnPlatform == true]) {
            marioOnPlatform++
        }

        o.rawData[oTiltingPyramidMarioOnPlatform] = true
    } else {
        dx = 0.0
        dy = 1.0
        dz = 0.0
        o.rawData[oTiltingPyramidMarioOnPlatform] = false
    }

    // Approach the normals by 0.01f towards the new goal, then create a transform matrix and orient the object. 
    // Outside of the other conditionals since it needs to tilt regardless of whether Mario is on.
    o.rawData[oTiltingPyramidNormalX] = approach_by_increment(dx, o.rawData[oTiltingPyramidNormalX], 0.01)
    o.rawData[oTiltingPyramidNormalY] = approach_by_increment(dy, o.rawData[oTiltingPyramidNormalY], 0.01)
    o.rawData[oTiltingPyramidNormalZ] = approach_by_increment(dz, o.rawData[oTiltingPyramidNormalZ], 0.01)

    create_transform_from_normals(transform, o.rawData[oTiltingPyramidNormalX], o.rawData[oTiltingPyramidNormalY], o.rawData[oTiltingPyramidNormalZ])

    // If Mario is on the platform, adjust his position for the platform tilt.
    if (marioOnPlatform) {
        linear_mtxf_mul_vec3f(transform, posAfterRotation, dist)
        mx += posAfterRotation[0] - posBeforeRotation[0]
        my += posAfterRotation[1] - posBeforeRotation[1]
        mz += posAfterRotation[2] - posBeforeRotation[2]

        PlatformDisplacement.set_mario_pos(mx, my, mz)
    }

    o.gfx.throwMatrix = transform
}

gLinker.create_transform_from_normals = create_transform_from_normals
gLinker.bhv_platform_normals_init = bhv_platform_normals_init
gLinker.bhv_tilting_inverted_pyramid_loop = bhv_tilting_inverted_pyramid_loop