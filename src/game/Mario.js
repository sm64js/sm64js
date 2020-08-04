import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { AreaInstance as Area } from "./Area"
import { MarioMiscInstance as MarioMisc } from "./MarioMisc"
import { CameraInstance as Camera } from "./Camera"
import { ObjectListProcessorInstance as ObjectListProcessor } from "./ObjectListProcessor"
import { GRAPH_RENDER_INVISIBLE } from "../engine/graph_node"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import * as SurfaceTerrains from "../include/surface_terrains"
import { atan2s } from "../engine/math_util"
import { mario_execute_stationary_action } from "./MarioActionsStationary"
import { gMarioAnimData } from "../actors/mario/marioAnimData"
import { mario_execute_moving_action } from "./MarioActionsMoving"
import { mario_execute_airborne_action } from "./MarioActionsAirborne"


////// Mario Constants
export const ANIM_FLAG_NOLOOP = (1 << 0) // 0x01
export const ANIM_FLAG_FORWARD = (1 << 1) // 0x02
export const ANIM_FLAG_2 = (1 << 2) // 0x04
export const ANIM_FLAG_HOR_TRANS = (1 << 3) // 0x08
export const ANIM_FLAG_VERT_TRANS = (1 << 4) // 0x10
export const ANIM_FLAG_5 = (1 << 5) // 0x20
export const ANIM_FLAG_6 = (1 << 6) // 0x40
export const ANIM_FLAG_7 = (1 << 7) // 0x80

// after processing an object, the type is reset to this
export const ANIM_TYPE_NONE = 0

// Not all parts have full animation: to save space, some animations only
// have xz, y, or no translation at all. All animations have rotations though
export const ANIM_TYPE_TRANSLATION = 1
export const ANIM_TYPE_VERTICAL_TRANSLATION = 2
export const ANIM_TYPE_LATERAL_TRANSLATION = 3
export const ANIM_TYPE_NO_TRANSLATION = 4

// Every animation includes rotation, after processing any of the above
// translation types the type is set to this
export const ANIM_TYPE_ROTATION = 5

export const MARIO_ANIM_IDLE_HEAD_LEFT = 0xC3
export const MARIO_ANIM_IDLE_HEAD_RIGHT = 0xC4
export const MARIO_ANIM_IDLE_HEAD_CENTER = 0xC5
export const MARIO_ANIM_WALKING = 0x48
export const MARIO_ANIM_RUNNING = 0x72
export const MARIO_ANIM_SKID_ON_GROUND = 0x0F
export const MARIO_ANIM_STOP_SKID = 0x10
export const MARIO_ANIM_TURNING_PART1 = 0xBC
export const MARIO_ANIM_TURNING_PART2 = 0xBD
export const MARIO_ANIM_LAND_FROM_SINGLE_JUMP = 0x4E
export const MARIO_ANIM_SINGLE_JUMP = 0x4D
export const MARIO_ANIM_GENERAL_FALL = 0x56
export const MARIO_ANIM_GENERAL_LAND = 0x57
export const MARIO_ANIM_SLIDEFLIP_LAND = 0xBE
export const MARIO_ANIM_SLIDEFLIP = 0xBF
export const MARIO_ANIM_LAND_FROM_DOUBLE_JUMP = 0x4B
export const MARIO_ANIM_DOUBLE_JUMP_FALL = 0x4C
export const MARIO_ANIM_DOUBLE_JUMP_RISE = 0x50

export const MARIO_NORMAL_CAP = 0x00000001
export const MARIO_VANISH_CAP = 0x00000002
export const MARIO_METAL_CAP = 0x00000004
export const MARIO_WING_CAP = 0x00000008
export const MARIO_CAP_ON_HEAD = 0x00000010
export const MARIO_CAP_IN_HAND = 0x00000020
export const MARIO_METAL_SHOCK = 0x00000040
export const MARIO_TELEPORTING = 0x00000080
export const MARIO_UNKNOWN_08 = 0x00000100
export const MARIO_UNKNOWN_13 = 0x00002000
export const MARIO_ACTION_SOUND_PLAYED = 0x00010000
export const MARIO_MARIO_SOUND_PLAYED = 0x00020000
export const MARIO_UNKNOWN_18 = 0x00040000
export const MARIO_PUNCHING = 0x00100000
export const MARIO_KICKING = 0x00200000
export const MARIO_TRIPPING = 0x00400000
export const MARIO_UNKNOWN_25 = 0x02000000
export const MARIO_UNKNOWN_30 = 0x40000000
export const MARIO_UNKNOWN_31 = 0x80000000

export const ACT_GROUP_MASK = 0x000001C0
export const ACT_GROUP_STATIONARY = (0 << 6)
export const ACT_GROUP_MOVING = (1 << 6)
export const ACT_GROUP_AIRBORNE = (2 << 6)
export const ACT_GROUP_SUBMERGED = (3 << 6)
export const ACT_GROUP_CUTSCENE = (4 << 6)
export const ACT_GROUP_AUTOMATIC = (5 << 6)
export const ACT_GROUP_OBJECT = (6 << 6)

export const ACT_IDLE = 0x0C400201
export const ACT_WALKING = 0x04000440
export const ACT_DECELERATING = 0x0400044A
export const ACT_BRAKING = 0x04000445
export const ACT_BRAKING_STOP = 0x0C00023D
export const ACT_TURNING_AROUND = 0x00000443
export const ACT_FINISH_TURNING_AROUND = 0x00000444
export const ACT_CRAWLING = 0x04008448
export const ACT_JUMP = 0x03000880
export const ACT_JUMP_LAND = 0x04000470
export const ACT_FREEFALL = 0x0100088C
export const ACT_FREEFALL_LAND = 0x04000471
export const ACT_FREEFALL_LAND_STOP = 0x0C000232
export const ACT_DOUBLE_JUMP    = 0x03000881
export const ACT_JUMP_LAND_STOP = 0x0C000230
export const ACT_BEGIN_SLIDING = 0x00000050
export const ACT_LONG_JUMP = 0x03000888
export const ACT_SIDE_FLIP = 0x01000887
export const ACT_SIDE_FLIP_LAND = 0x04000473
export const ACT_SIDE_FLIP_LAND_STOP = 0x0C000233
export const ACT_DOUBLE_JUMP_LAND = 0x04000472
export const ACT_DOUBLE_JUMP_LAND_STOP = 0x0C000231

export const AIR_STEP_CHECK_LEDGE_GRAB = 0x00000001
export const AIR_STEP_CHECK_HANG = 0x00000002
export const AIR_STEP_NONE            =  0
export const AIR_STEP_LANDED          =  1
export const AIR_STEP_HIT_WALL        =  2
export const AIR_STEP_GRABBED_LEDGE   =  3
export const AIR_STEP_GRABBED_CEILING =  4
export const AIR_STEP_HIT_LAVA_WALL   =  6


export const ACT_FLAG_STATIONARY = (1 << 9)
export const ACT_FLAG_MOVING = (1 << 10)
export const ACT_FLAG_AIR = (1 << 11)
export const ACT_FLAG_INTANGIBLE = (1 << 12)
export const ACT_FLAG_SWIMMING = (1 << 13)
export const ACT_FLAG_METAL_WATER = (1 << 14)
export const ACT_FLAG_SHORT_HITBOX = (1 << 15)
export const ACT_FLAG_RIDING_SHELL = (1 << 16)
export const ACT_FLAG_INVULNERABLE = (1 << 17)
export const ACT_FLAG_BUTT_OR_STOMACH_SLIDE = (1 << 18)
export const ACT_FLAG_DIVING = (1 << 19)
export const ACT_FLAG_ON_POLE = (1 << 20)
export const ACT_FLAG_HANGING = (1 << 21)
export const ACT_FLAG_IDLE = (1 << 22)
export const ACT_FLAG_ATTACKING = (1 << 23)
export const ACT_FLAG_ALLOW_VERTICAL_WIND_ACTION = (1 << 24)
export const ACT_FLAG_CONTROL_JUMP_HEIGHT = (1 << 25)
export const ACT_FLAG_ALLOW_FIRST_PERSON = (1 << 26)
export const ACT_FLAG_PAUSE_EXIT = (1 << 27)
export const ACT_FLAG_SWIMMING_OR_FLYING = (1 << 28)
export const ACT_FLAG_WATER_OR_TEXT = (1 << 29)
export const ACT_FLAG_THROWING = (1 << 31)

export const INPUT_NONZERO_ANALOG = 0x0001
export const INPUT_A_PRESSED = 0x0002
export const INPUT_OFF_FLOOR = 0x0004
export const INPUT_ABOVE_SLIDE = 0x0008
export const INPUT_FIRST_PERSON = 0x0010
export const INPUT_UNKNOWN_5 = 0x0020
export const INPUT_SQUISHED = 0x0040
export const INPUT_A_DOWN = 0x0080
export const INPUT_IN_POISON_GAS = 0x0100
export const INPUT_IN_WATER = 0x0200
export const INPUT_UNKNOWN_10 = 0x0400
export const INPUT_INTERACT_OBJ_GRABBABLE = 0x0800
export const INPUT_UNKNOWN_12 = 0x1000
export const INPUT_B_PRESSED = 0x2000
export const INPUT_Z_DOWN = 0x4000
export const INPUT_Z_PRESSED = 0x8000

export const GROUND_STEP_LEFT_GROUND = 0
export const GROUND_STEP_NONE = 1
export const GROUND_STEP_HIT_WALL = 2
export const GROUND_STEP_HIT_WALL_STOP_QSTEPS = 2
export const GROUND_STEP_HIT_WALL_CONTINUE_QSTEPS = 3

export const PARTICLE_DUST                 /* 0x00000001 */ = (1 << 0)
export const PARTICLE_VERTICAL_STAR        /* 0x00000002 */ = (1 << 1)
export const PARTICLE_2                    /* 0x00000004 */ = (1 << 2)
export const PARTICLE_SPARKLES             /* 0x00000008 */ = (1 << 3)
export const PARTICLE_HORIZONTAL_STAR      /* 0x00000010 */ = (1 << 4)
export const PARTICLE_BUBBLE               /* 0x00000020 */ = (1 << 5)
export const PARTICLE_WATER_SPLASH         /* 0x00000040 */ = (1 << 6)
export const PARTICLE_IDLE_WATER_WAVE      /* 0x00000080 */ = (1 << 7)
export const PARTICLE_SHALLOW_WATER_WAVE   /* 0x00000100 */ = (1 << 8)
export const PARTICLE_PLUNGE_BUBBLE        /* 0x00000200 */ = (1 << 9)
export const PARTICLE_WAVE_TRAIL           /* 0x00000400 */ = (1 << 10)
export const PARTICLE_FIRE                 /* 0x00000800 */ = (1 << 11)
export const PARTICLE_SHALLOW_WATER_SPLASH /* 0x00001000 */ = (1 << 12)
export const PARTICLE_LEAF                 /* 0x00002000 */ = (1 << 13)
export const PARTICLE_SNOW                 /* 0x00004000 */ = (1 << 14)
export const PARTICLE_DIRT                 /* 0x00008000 */ = (1 << 15)
export const PARTICLE_MIST_CIRCLE          /* 0x00010000 */ = (1 << 16)
export const PARTICLE_BREATH               /* 0x00020000 */ = (1 << 17)
export const PARTICLE_TRIANGLE             /* 0x00040000 */ = (1 << 18)
export const PARTICLE_19                   /* 0x00080000 */ = (1 << 19)

export const INT_STATUS_HOOT_GRABBED_BY_MARIO = (1 << 0) /* 0x00000001 */
export const INT_STATUS_MARIO_UNK1 = (1 << 1) /* 0x00000002 */
export const INT_STATUS_MARIO_UNK2 = (1 << 2) /* 0x00000004 */
export const INT_STATUS_MARIO_DROP_OBJECT = (1 << 3) /* 0x00000008 */
export const INT_STATUS_MARIO_UNK4 = (1 << 4) /* 0x00000010 */
export const INT_STATUS_MARIO_UNK5 = (1 << 5) /* 0x00000020 */
export const INT_STATUS_MARIO_UNK6 = (1 << 6) /* 0x00000040 */
export const INT_STATUS_MARIO_UNK7 = (1 << 7) /* 0x00000080 */
export const INT_STATUS_GRABBED_MARIO = (1 << 11) /* 0x00000800 */
export const INT_STATUS_ATTACKED_MARIO = (1 << 13) /* 0x00002000 */
export const INT_STATUS_WAS_ATTACKED = (1 << 14) /* 0x00004000 */
export const INT_STATUS_INTERACTED = (1 << 15) /* 0x00008000 */
export const INT_STATUS_TRAP_TURN = (1 << 20) /* 0x00100000 */
export const INT_STATUS_HIT_MINE = (1 << 21) /* 0x00200000 */
export const INT_STATUS_STOP_RIDING = (1 << 22) /* 0x00400000 */
export const INT_STATUS_TOUCHED_BOB_OMB = (1 << 23) /* 0x00800000 */


export const sJumpLandAction = {
    numFrames: 4,
    unk02: 5,
    verySteepAction: ACT_FREEFALL,
    endAction: ACT_JUMP_LAND_STOP,
    aPressedAction: ACT_DOUBLE_JUMP,
    offFloorAction: ACT_FREEFALL,
    slideAction: ACT_BEGIN_SLIDING
}

export const sFreefallLandAction = {
    numFrames: 4,
    unk02: 5,
    verySteepAction: ACT_FREEFALL,
    endAction: ACT_FREEFALL_LAND_STOP,
    aPressedAction: ACT_DOUBLE_JUMP,
    offFloorAction: ACT_FREEFALL,
    slideAction: ACT_BEGIN_SLIDING
}

export const sSideFlipLandAction = {
    numFrames: 4,
    unk02: 5,
    verySteepAction: ACT_FREEFALL,
    endAction: ACT_SIDE_FLIP_LAND_STOP,
    aPressedAction: ACT_DOUBLE_JUMP,
    offFloorAction: ACT_FREEFALL,
    slideAction: ACT_BEGIN_SLIDING
}

export const sDoubleJumpLandAction = {
    numFrames: 4,
    unk02: 5,
    verySteepAction: ACT_FREEFALL,
    endAction: ACT_DOUBLE_JUMP_LAND_STOP,
    aPressedAction: ACT_JUMP,
    offFloorAction: ACT_FREEFALL,
    slideAction: ACT_BEGIN_SLIDING
}


export const init_marios = () => {

    if (LevelUpdate.gMarioState.length != ObjectListProcessor.gMarioObject.length)
        throw "Error incorrect number of Marios -- init marios"

    LevelUpdate.gMarioState.forEach((marioState, index) => {
        Object.assign(marioState, {
            actionTimer: 0,
            framesSinceA: 0xFF,
            framesSinceB: 0xFF,
            invincTimer: 0,
            flags: MARIO_CAP_ON_HEAD | MARIO_NORMAL_CAP,
            forwardVel: 0.0,
            squishTimer: 0,
            hurtCounter: 0,
            healCounter: 0,
            capTimer: 0,
            quicksandDepth: 0.0,
            area: Area.gCurrentArea,
            marioObj: ObjectListProcessor.gMarioObject[index],
            faceAngle: [...ObjectListProcessor.gMarioObject[index].header.gfx.angle], //[ ...Area.gMarioSpawnInfo.startAngle ],
            angleVel: [0, 0, 0],
            pos: [...ObjectListProcessor.gMarioObject[index].header.gfx.pos],///[ ...Area.gMarioSpawnInfo.startPos ],
            vel: [0, 0, 0],
            action: ACT_IDLE
        })
    })


    ////Redundant
    /*        Object.assign(LevelUpdate.gMarioState.marioObj, {
        oPosX: LevelUpdate.gMarioState.pos[0],
        oPosY: LevelUpdate.gMarioState.pos[1],
        oPosZ: LevelUpdate.gMarioState.pos[2],
        oMoveAnglePitch: LevelUpdate.gMarioState.faceAngle[0],
        oMoveAngleYaw: LevelUpdate.gMarioState.faceAngle[1],
        oMoveAngleRoll: LevelUpdate.gMarioState.faceAngle[2]
    })*/


    LevelUpdate.gMarioState.forEach((marioState, index) => {
        Object.assign(marioState.marioObj.header.gfx, {
            //// Also Redundant
            //pos: [ ...LevelUpdate.gMarioState.pos ],
            //angle: [ 0, LevelUpdate.gMarioState.faceAngle[1], 0 ],
            unk38: {
                ...marioState.marioObj.header.gfx.unk38,
                animID: -1,
                animID: 0,
                animFrame: 0,
                animFrameAccelAssist: 0,
                animAccel: 0x10000,
                animTimer: 0
            }
        })
    })

}

export const set_forward_vel = (m, forwardVel) => {
    m.forwardVel = forwardVel

    m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
    m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

    m.vel[0] = m.slideVelX
    m.vel[2] = m.slideVelZ
}

export const set_mario_y_vel_based_on_fspeed = (m, initialVelY, multiplier) => {
    m.vel[1] = initialVelY + (m.forwardVel * multiplier)
}

export const check_common_action_exits = (m) => {

    if (m.input & INPUT_A_PRESSED) {
        return set_mario_action(m, ACT_JUMP, 0)
    }

    if (m.input & INPUT_NONZERO_ANALOG) {
        return set_mario_action(m, ACT_WALKING, 0)
    }

    return 0
}

export const set_jumping_action = (m, action, actionArg) => {
    set_mario_action(m, action, actionArg)
    return 1
}

export const set_jump_from_landing = (m) => {

    if (m.doubleJumpTimer == 0) {
        set_mario_action(m, ACT_JUMP, 0)
    } else {
        switch (m.prevAction) {
            case ACT_JUMP_LAND: set_mario_action(m, ACT_DOUBLE_JUMP, 0); break
            case ACT_FREEFALL_LAND: set_mario_action(m, ACT_DOUBLE_JUMP, 0); break
            case ACT_SIDE_FLIP_LAND_STOP: set_mario_action(m, ACT_DOUBLE_JUMP, 0); break
            default: set_mario_action(m, ACT_JUMP, 0)
        }
    }


    m.doubleJumpTimer = 0

    return 1
}

export const set_mario_action = (m, action, actionArg) => {

    switch (action & ACT_GROUP_MASK) {
        case ACT_GROUP_MOVING:
            action = set_mario_action_moving(m, action, actionArg); break
        case ACT_GROUP_AIRBORNE:
            action = set_mario_action_airborne(m, action, actionArg); break
    }

    m.flags &= ~(MARIO_ACTION_SOUND_PLAYED | MARIO_MARIO_SOUND_PLAYED)

    m.prevAction = m.action
    m.action = action
    m.actionArg = actionArg
    m.actionState = 0
    m.actionTimer = 0

    return 1
}

export const set_mario_action_airborne = (m, action, actionArg) => {
    switch (action) {
        case ACT_JUMP:
            m.marioObj.header.gfx.unk38.animID = -1
            set_mario_y_vel_based_on_fspeed(m, 42.0, 0.25)
            m.forwardVel *= 0.8
            break
        case ACT_SIDE_FLIP:
            set_mario_y_vel_based_on_fspeed(m, 62.0, 0.0)
            m.forwardVel = 8.0
            m.faceAngle[1] = m.intendedYaw
            break
        case ACT_DOUBLE_JUMP:
            set_mario_y_vel_based_on_fspeed(m, 52.0, 0.25)
            m.forwardVel *= 0.8
            break
    }

    m.peakHeight = m.pos[1]
    m.flags |= MARIO_UNKNOWN_08

    return action
}

export const set_mario_action_moving = (m, action, actionArg) => {
    const floorClass = mario_get_floor_class(m)
    const forwardVel = m.forwardVel
    const mag = Math.min(m.intendedMag, 8.0)

    switch (action) {
        case ACT_WALKING:
            if (floorClass != SurfaceTerrains.SURFACE_CLASS_VERY_SLIPPERY) {
                if (0.0 <= forwardVel && forwardVel < mag) {
                    m.forwardVel = mag
                }
            }

            m.marioObj.oMarioWalkingPitch = 0
            break
    }

    return action
}

export const set_mario_animation = (m, targetAnimID) => {
    const o = m.marioObj
    m.animation.targetAnim = m.animation.animList[targetAnimID]

    if (m.animation.targetAnim == undefined) throw "cant find animation"

    if (o.header.gfx.unk38.animID != targetAnimID) {
        o.header.gfx.unk38.animID = targetAnimID
        o.header.gfx.unk38.curAnim = m.animation.targetAnim
        o.header.gfx.unk38.animAccel = 0
        o.header.gfx.unk38.animYTrans = m.unkB0
    
        if (m.animation.targetAnim.flags & ANIM_FLAG_2) {
            o.header.gfx.unk38.animFrame = m.animation.targetAnim.unk04
        } else {
            if (m.animation.targetAnim.flags & ANIM_FLAG_FORWARD) {
                o.header.gfx.unk38.animFrame = m.animation.targetAnim.unk04 + 1
            } else {
                o.header.gfx.unk38.animFrame = m.animation.targetAnim.unk04 - 1
            }
        }
    }

    return o.header.gfx.unk38.animFrame
        
}

export const set_mario_anim_with_accel = (m, targetAnimID, accel) => {
    const o = m.marioObj
    m.animation.targetAnim = m.animation.animList[targetAnimID]

    if (o.header.gfx.unk38.animID != targetAnimID) {
        o.header.gfx.unk38.animID = targetAnimID
        o.header.gfx.unk38.curAnim = m.animation.targetAnim
        o.header.gfx.unk38.animYTrans = m.unkB0

        if (m.animation.targetAnim.flags & ANIM_FLAG_2) {
            o.header.gfx.unk38.animFrameAccelAssist = (m.animation.targetAnim << 0x10)
        } else {
            if (m.animation.targetAnim.flags & ANIM_FLAG_FORWARD) {
                o.header.gfx.unk38.animFrameAccelAssist = (m.animation.targetAnim << 0x10) + accel
            } else {
                o.header.gfx.unk38.animFrameAccelAssist = (m.animation.targetAnim << 0x10) - accel
            }
        }

        o.header.gfx.unk38.animFrame = (o.header.gfx.unk38.animFrameAccelAssist >> 0x10)
    }

    o.header.gfx.unk38.animAccel = accel

    return o.header.gfx.unk38.animFrame

}

export const is_anim_at_end = (m) => {
    const o = m.marioObj
    return (o.header.gfx.unk38.animFrame + 1) == o.header.gfx.unk38.curAnim.unk08
}

export const execute_mario_action = (marioIndex) => {
    if (LevelUpdate.gMarioState[marioIndex].action) {
        LevelUpdate.gMarioState[marioIndex].marioObj.header.gfx.node.flags &= ~GRAPH_RENDER_INVISIBLE
        update_mario_inputs(LevelUpdate.gMarioState[marioIndex])

        let inLoop = 1

        while (inLoop) {
            switch (LevelUpdate.gMarioState[marioIndex].action & ACT_GROUP_MASK) {
                case ACT_GROUP_STATIONARY:
                    inLoop = mario_execute_stationary_action(LevelUpdate.gMarioState[marioIndex]); break

                case ACT_GROUP_MOVING:
                    inLoop = mario_execute_moving_action(LevelUpdate.gMarioState[marioIndex]); break

                case ACT_GROUP_AIRBORNE:
                    inLoop = mario_execute_airborne_action(LevelUpdate.gMarioState[marioIndex]); break

                default: throw "unkown action group"
            }
        }


        LevelUpdate.gMarioState[marioIndex].marioObj.oInteractStatus = 0
    }
}

const update_mario_button_inputs = (m, playerInput) => {
    if (playerInput.buttonPressedA) m.input |= INPUT_A_PRESSED
    if (playerInput.buttonDownA) m.input |= INPUT_A_DOWN
}

const update_mario_joystick_inputs = (m, playerInput) => {

    const mag = playerInput.stickMag

    m.intendedMag = mag / 2.0

    if (m.intendedMag > 0.0) {
        m.intendedYaw = atan2s(-playerInput.stickY, playerInput.stickX) + m.area.camera.yaw
        m.input |= INPUT_NONZERO_ANALOG
    } else {
        m.intendedYaw = m.faceAngle[1]
    }

    m.intendedYaw = m.intendedYaw > 32767 ? m.intendedYaw - 65536 : m.intendedYaw
    m.intendedYaw = m.intendedYaw < -32768 ? m.intendedYaw + 65536 : m.intendedYaw
}

const update_mario_geometry_inputs = (m) => {
    if (!m.floor) {
        m.pos = [ ...m.marioObj.header.gfx.pos ]
        m.floorHeight = SurfaceCollision.find_floor(m.pos[0], m.pos[1], m.pos[2], m)
    }

    m.ceilHeight = 20000.0 //vec3f_find_ceil(&m->pos[0], m->floorHeight, &m->ceil);
    m.waterLevel = -20000.0 //find_water_level(m->pos[0], m->pos[2]);

    if (m.floor) {
        m.floorAngle = atan2s(m.floor.normal.z, m.floor.normal.x)

        if ((m.pos[1] > m.waterLevel - 40) && mario_floor_is_slippery(m)) {
            m.input |= INPUT_ABOVE_SLIDE
        }

        if ((m.floor.flags & SurfaceTerrains.SURFACE_FLAG_DYNAMIC)
            || (m.ceil && m.ceil.flags & SurfaceTerrains.SURFACE_FLAG_DYNAMIC)) {
            let ceilToFloorDist = m.ceilHeight - m.floorHeight;

            if ((0.0 <= ceilToFloorDist) && (ceilToFloorDist <= 150.0)) {
                m.input |= INPUT_SQUISHED
            }
        }

        if (m.pos[1] > m.floorHeight + 100.0) {
            m.input |= INPUT_OFF_FLOOR;
        }

        if (m.pos[1] < (m.waterLevel - 10)) {
            m.input |= INPUT_IN_WATER
        }

    } else {
        throw "no floor"
    }
}

export const mario_floor_is_slippery = (m) => {
    let normY
        
    if ((m.area.terrainType & SurfaceTerrains.TERRAIN_MASK) == SurfaceTerrains.TERRAIN_SLIDE
        && m.floor.normal.y < 0.9998477 //~cos(1 deg)
    ) {
        return true
    }
    
    switch (mario_get_floor_class(m)) {
        case SurfaceTerrains.SURFACE_VERY_SLIPPERY:
            normY = 0.9848077 //~cos(10 deg)
            break
    
        case SurfaceTerrains.SURFACE_SLIPPERY:
            normY = 0.9396926 //~cos(20 deg)
            break
    
        default:
            normY = 0.7880108 //~cos(38 deg)
            break
    
        case SurfaceTerrains.SURFACE_NOT_SLIPPERY:
            normY = 0.0
            break
    }
    
    return m.floor.normal.y <= normY
}

export const mario_floor_is_slope = (m) => {
    let normY

    if ((m.area.terrainType & SurfaceTerrains.TERRAIN_MASK) == SurfaceTerrains.TERRAIN_SLIDE
        && m.floor.normal.y < 0.9998477 //~cos(1 deg)
    ) {
        return true
    }

    switch (mario_get_floor_class(m)) {
        case SurfaceTerrains.SURFACE_VERY_SLIPPERY:
            normY = 0.9961947 //~cos(10 deg)
            break

        case SurfaceTerrains.SURFACE_SLIPPERY:
            normY = 0.9848077 //~cos(20 deg)
            break

        default:
            normY = 0.9659258 //~cos(38 deg)
            break

        case SurfaceTerrains.SURFACE_NOT_SLIPPERY:
            normY = 0.9396926
            break
    }

    return m.floor.normal.y <= normY
}

export const mario_get_floor_class = (m) => {
    let floorClass

    // The slide terrain type defaults to slide slipperiness.
    // This doesn't matter too much since normally the slide terrain
    // is checked for anyways.
    if ((m.area.terrainType & SurfaceTerrains.TERRAIN_MASK) == SurfaceTerrains.TERRAIN_SLIDE) {
        floorClass = SurfaceTerrains.SURFACE_CLASS_VERY_SLIPPERY
    } else {
        floorClass = SurfaceTerrains.SURFACE_CLASS_DEFAULT
    }
    
    if (m.floor) {
        switch (m.floor.type) {
            case SurfaceTerrains.SURFACE_NOT_SLIPPERY:
            case SurfaceTerrains.SURFACE_HARD_NOT_SLIPPERY:
            case SurfaceTerrains.SURFACE_SWITCH:
                floorClass = SurfaceTerrains.SURFACE_CLASS_NOT_SLIPPERY
                break
    
            case SurfaceTerrains.SURFACE_SLIPPERY:
            case SurfaceTerrains.SURFACE_NOISE_SLIPPERY:
            case SurfaceTerrains.SURFACE_HARD_SLIPPERY:
            case SurfaceTerrains.SURFACE_NO_CAM_COL_SLIPPERY:
                floorClass = SurfaceTerrains.SURFACE_CLASS_SLIPPERY
                break
    
            case SurfaceTerrains.SURFACE_VERY_SLIPPERY:
            case SurfaceTerrains.SURFACE_ICE:
            case SurfaceTerrains.SURFACE_HARD_VERY_SLIPPERY:
            case SurfaceTerrains.SURFACE_NOISE_VERY_SLIPPERY_73:
            case SurfaceTerrains.SURFACE_NOISE_VERY_SLIPPERY_74:
            case SurfaceTerrains.SURFACE_NOISE_VERY_SLIPPERY:
            case SurfaceTerrains.SURFACE_NO_CAM_COL_VERY_SLIPPERY:
                floorClass = SurfaceTerrains.SURFACE_CLASS_VERY_SLIPPERY
                break
        }
    }
    
    // Crawling allows Mario to not slide on certain steeper surfaces.
    if (m.action == ACT_CRAWLING && m.floor.normal.y > 0.5 && floorClass == SurfaceTerrains.SURFACE_CLASS_DEFAULT) {
        floorClass = SurfaceTerrains.SURFACE_CLASS_NOT_SLIPPERY
    }
    
    return floorClass
}

export const resolve_and_return_wall_collisions = (pos, offset, radius) => {
    const collisionData = {
        radius,
        offsetY: offset,
        x: pos[0], y: pos[1], z: pos[2]
    }

    let wall

    if (SurfaceCollision.find_wall_collisions(collisionData)) {
        wall = collisionData.walls[collisionData.numWalls - 1]
    }

    pos[0] = collisionData.x
    pos[1] = collisionData.y
    pos[2] = collisionData.z

    return wall
}

const update_mario_inputs = (m) => {
    m.particleFlags = 0
    m.input = 0
    m.collidedObjInteractTypes = m.marioObj.collidedObjInteractTypes
    m.flags &= 0xFFFFFF

    if (m.marioObj.OG) {
        update_mario_joystick_inputs(m, window.playerInput)
        update_mario_button_inputs(m, window.playerInput)
    }
    else update_mario_joystick_inputs(m, window.playerInput2)

    update_mario_geometry_inputs(m)

    if (Camera.gCameraMovementFlags & Camera.CAM_MOVE_C_UP_MODE) { 
        if (m.action & ACT_FLAG_ALLOW_FIRST_PERSON) {
            m.input |= INPUT_FIRST_PERSON;
        } else {
            Camera.gCameraMovementFlags &= ~Camera.CAM_MOVE_C_UP_MODE;
        }
    }
    
    if (!(m.input & (INPUT_NONZERO_ANALOG | INPUT_A_PRESSED))) {
        m.input |= INPUT_UNKNOWN_5;
    }
    
    if (m.marioObj.oInteractStatus
        & (INT_STATUS_HOOT_GRABBED_BY_MARIO | INT_STATUS_MARIO_UNK1 | INT_STATUS_MARIO_UNK4)) {
        m.input |= INPUT_UNKNOWN_10;
    }

    if (m.wallKickTimer > 0) {
        m.wallKickTimer--
    }
    
    if (m.doubleJumpTimer > 0) {
        m.doubleJumpTimer--
    }
}

export const init_mario_from_save_file = () => {

    LevelUpdate.gMarioState.forEach(marioState => {
        Object.assign(marioState, {
            unk00: 0, flags: 0, action: 0,
            spawnInfo: Area.gMarioSpawnInfo,
            statusForCamera: Camera.gPlayerCameraState,
            marioBodyState: MarioMisc.gBodyState,
            controller: null,
            animation: { animList: gMarioAnimData, targetAnim: null },
            numCoins: 0, numStars: 0, numKeys: 0,
            numLives: 4, health: 0x880,
            unkB8: 0, unkB0: 0xBD
        })
    })


}
