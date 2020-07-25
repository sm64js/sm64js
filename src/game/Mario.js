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

class Mario {
    constructor() {

        this.ANIM_FLAG_NOLOOP          =  (1 << 0) // 0x01
        this.ANIM_FLAG_FORWARD         =  (1 << 1) // 0x02
        this.ANIM_FLAG_2               =  (1 << 2) // 0x04
        this.ANIM_FLAG_HOR_TRANS       =  (1 << 3) // 0x08
        this.ANIM_FLAG_VERT_TRANS      =  (1 << 4) // 0x10
        this.ANIM_FLAG_5               =  (1 << 5) // 0x20
        this.ANIM_FLAG_6               =  (1 << 6) // 0x40
        this.ANIM_FLAG_7               =  (1 << 7) // 0x80

        // after processing an object, the type is reset to this
        this.ANIM_TYPE_NONE                 = 0

        // Not all parts have full animation: to save space, some animations only
        // have xz, y, or no translation at all. All animations have rotations though
        this.ANIM_TYPE_TRANSLATION          = 1
        this.ANIM_TYPE_VERTICAL_TRANSLATION = 2
        this.ANIM_TYPE_LATERAL_TRANSLATION  = 3
        this.ANIM_TYPE_NO_TRANSLATION       = 4

        // Every animation includes rotation, after processing any of the above
        // translation types the type is set to this
        this.ANIM_TYPE_ROTATION             = 5

        this.MARIO_ANIM_IDLE_HEAD_LEFT = 0xC3
        this.MARIO_ANIM_IDLE_HEAD_RIGHT = 0xC4
        this.MARIO_ANIM_IDLE_HEAD_CENTER = 0xC5
        this.MARIO_ANIM_WALKING = 0x48
        this.MARIO_ANIM_RUNNING = 0x72
        this.MARIO_ANIM_SKID_ON_GROUND = 0x0F
        this.MARIO_ANIM_STOP_SKID = 0x10
        this.MARIO_ANIM_TURNING_PART1 = 0xBC
        this.MARIO_ANIM_TURNING_PART2 = 0xBD

        this.MARIO_NORMAL_CAP          =  0x00000001
        this.MARIO_VANISH_CAP          =  0x00000002
        this.MARIO_METAL_CAP           =  0x00000004
        this.MARIO_WING_CAP            =  0x00000008
        this.MARIO_CAP_ON_HEAD         =  0x00000010
        this.MARIO_CAP_IN_HAND         =  0x00000020
        this.MARIO_METAL_SHOCK         =  0x00000040
        this.MARIO_TELEPORTING         =  0x00000080
        this.MARIO_UNKNOWN_08          =  0x00000100
        this.MARIO_UNKNOWN_13          =  0x00002000
        this.MARIO_ACTION_SOUND_PLAYED =  0x00010000
        this.MARIO_MARIO_SOUND_PLAYED  =  0x00020000
        this.MARIO_UNKNOWN_18          =  0x00040000
        this.MARIO_PUNCHING            =  0x00100000
        this.MARIO_KICKING             =  0x00200000
        this.MARIO_TRIPPING            =  0x00400000
        this.MARIO_UNKNOWN_25          =  0x02000000
        this.MARIO_UNKNOWN_30          =  0x40000000
        this.MARIO_UNKNOWN_31 = 0x80000000

        this.ACT_GROUP_MASK            = 0x000001C0
        this.ACT_GROUP_STATIONARY      = (0 << 6)
        this.ACT_GROUP_MOVING          = (1 << 6)
        this.ACT_GROUP_AIRBORNE        = (2 << 6)
        this.ACT_GROUP_SUBMERGED       = (3 << 6)
        this.ACT_GROUP_CUTSCENE        = (4 << 6)
        this.ACT_GROUP_AUTOMATIC       = (5 << 6)
        this.ACT_GROUP_OBJECT          = (6 << 6)

        this.ACT_IDLE = 0x0C400201 
        this.ACT_WALKING = 0x04000440
        this.ACT_DECELERATING = 0x0400044A 
        this.ACT_BRAKING      = 0x04000445 
        this.ACT_BRAKING_STOP = 0x0C00023D
        this.ACT_TURNING_AROUND          =   0x00000443 
        this.ACT_FINISH_TURNING_AROUND   =   0x00000444 

        this.ACT_FLAG_STATIONARY                  = (1 << 9)
        this.ACT_FLAG_MOVING                      = (1 << 10)
        this.ACT_FLAG_AIR                         = (1 << 11)
        this.ACT_FLAG_INTANGIBLE                  = (1 << 12)
        this.ACT_FLAG_SWIMMING                    = (1 << 13)
        this.ACT_FLAG_METAL_WATER                 = (1 << 14)
        this.ACT_FLAG_SHORT_HITBOX                = (1 << 15)
        this.ACT_FLAG_RIDING_SHELL                = (1 << 16)
        this.ACT_FLAG_INVULNERABLE                = (1 << 17)
        this.ACT_FLAG_BUTT_OR_STOMACH_SLIDE       = (1 << 18)
        this.ACT_FLAG_DIVING                      = (1 << 19)
        this.ACT_FLAG_ON_POLE                     = (1 << 20)
        this.ACT_FLAG_HANGING                     = (1 << 21)
        this.ACT_FLAG_IDLE                        = (1 << 22)
        this.ACT_FLAG_ATTACKING                   = (1 << 23)
        this.ACT_FLAG_ALLOW_VERTICAL_WIND_ACTION  = (1 << 24)
        this.ACT_FLAG_CONTROL_JUMP_HEIGHT         = (1 << 25)
        this.ACT_FLAG_ALLOW_FIRST_PERSON          = (1 << 26)
        this.ACT_FLAG_PAUSE_EXIT                  = (1 << 27)
        this.ACT_FLAG_SWIMMING_OR_FLYING          = (1 << 28)
        this.ACT_FLAG_WATER_OR_TEXT               = (1 << 29)
        this.ACT_FLAG_THROWING                    = (1 << 31)

        this.INPUT_NONZERO_ANALOG         = 0x0001
        this.INPUT_A_PRESSED              = 0x0002
        this.INPUT_OFF_FLOOR              = 0x0004
        this.INPUT_ABOVE_SLIDE            = 0x0008
        this.INPUT_FIRST_PERSON           = 0x0010
        this.INPUT_UNKNOWN_5              = 0x0020
        this.INPUT_SQUISHED               = 0x0040
        this.INPUT_A_DOWN                 = 0x0080
        this.INPUT_IN_POISON_GAS          = 0x0100
        this.INPUT_IN_WATER               = 0x0200
        this.INPUT_UNKNOWN_10             = 0x0400
        this.INPUT_INTERACT_OBJ_GRABBABLE = 0x0800
        this.INPUT_UNKNOWN_12             = 0x1000
        this.INPUT_B_PRESSED              = 0x2000
        this.INPUT_Z_DOWN                 = 0x4000
        this.INPUT_Z_PRESSED = 0x8000

        this.GROUND_STEP_LEFT_GROUND              = 0
        this.GROUND_STEP_NONE                     = 1
        this.GROUND_STEP_HIT_WALL                 = 2
        this.GROUND_STEP_HIT_WALL_STOP_QSTEPS     = 2
        this.GROUND_STEP_HIT_WALL_CONTINUE_QSTEPS = 3

        this.PARTICLE_DUST                 /* 0x00000001 */ = (1 << 0)
        this.PARTICLE_VERTICAL_STAR        /* 0x00000002 */ = (1 << 1)
        this.PARTICLE_2                    /* 0x00000004 */ = (1 << 2)
        this.PARTICLE_SPARKLES             /* 0x00000008 */ = (1 << 3)
        this.PARTICLE_HORIZONTAL_STAR      /* 0x00000010 */ = (1 << 4)
        this.PARTICLE_BUBBLE               /* 0x00000020 */ = (1 << 5)
        this.PARTICLE_WATER_SPLASH         /* 0x00000040 */ = (1 << 6)
        this.PARTICLE_IDLE_WATER_WAVE      /* 0x00000080 */ = (1 << 7)
        this.PARTICLE_SHALLOW_WATER_WAVE   /* 0x00000100 */ = (1 << 8)
        this.PARTICLE_PLUNGE_BUBBLE        /* 0x00000200 */ = (1 << 9)
        this.PARTICLE_WAVE_TRAIL           /* 0x00000400 */ = (1 << 10)
        this.PARTICLE_FIRE                 /* 0x00000800 */ = (1 << 11)
        this.PARTICLE_SHALLOW_WATER_SPLASH /* 0x00001000 */ = (1 << 12)
        this.PARTICLE_LEAF                 /* 0x00002000 */ = (1 << 13)
        this.PARTICLE_SNOW                 /* 0x00004000 */ = (1 << 14)
        this.PARTICLE_DIRT                 /* 0x00008000 */ = (1 << 15)
        this.PARTICLE_MIST_CIRCLE          /* 0x00010000 */ = (1 << 16)
        this.PARTICLE_BREATH               /* 0x00020000 */ = (1 << 17)
        this.PARTICLE_TRIANGLE             /* 0x00040000 */ = (1 << 18)
        this.PARTICLE_19                   /* 0x00080000 */ = (1 << 19)

        this.INT_STATUS_HOOT_GRABBED_BY_MARIO = (1 <<  0) /* 0x00000001 */
        this.INT_STATUS_MARIO_UNK1            = (1 <<  1) /* 0x00000002 */
        this.INT_STATUS_MARIO_UNK2            = (1 <<  2) /* 0x00000004 */
        this.INT_STATUS_MARIO_DROP_OBJECT     = (1 <<  3) /* 0x00000008 */
        this.INT_STATUS_MARIO_UNK4            = (1 <<  4) /* 0x00000010 */
        this.INT_STATUS_MARIO_UNK5            = (1 <<  5) /* 0x00000020 */
        this.INT_STATUS_MARIO_UNK6            = (1 <<  6) /* 0x00000040 */
        this.INT_STATUS_MARIO_UNK7            = (1 <<  7) /* 0x00000080 */
        this.INT_STATUS_GRABBED_MARIO         = (1 << 11) /* 0x00000800 */
        this.INT_STATUS_ATTACKED_MARIO        = (1 << 13) /* 0x00002000 */
        this.INT_STATUS_WAS_ATTACKED          = (1 << 14) /* 0x00004000 */
        this.INT_STATUS_INTERACTED            = (1 << 15) /* 0x00008000 */
        this.INT_STATUS_TRAP_TURN             = (1 << 20) /* 0x00100000 */
        this.INT_STATUS_HIT_MINE              = (1 << 21) /* 0x00200000 */
        this.INT_STATUS_STOP_RIDING           = (1 << 22) /* 0x00400000 */
        this.INT_STATUS_TOUCHED_BOB_OMB       = (1 << 23) /* 0x00800000 */
    }

    init_mario() {
        Object.assign(LevelUpdate.gMarioState, {
            actionTimer: 0,
            framesSinceA: 0xFF,
            framesSinceB: 0xFF,
            invincTimer: 0,
            flags: this.MARIO_CAP_ON_HEAD | this.MARIO_NORMAL_CAP,
            forwardVel: 0.0,
            squishTimer: 0,
            hurtCounter: 0,
            healCounter: 0,
            capTimer: 0,
            quicksandDepth: 0.0,
            area: Area.gCurrentArea,
            marioObj: ObjectListProcessor.gMarioObject,  
            faceAngle: [ ...Area.gMarioSpawnInfo.startAngle ],
            angleVel: [ 0, 0, 0 ],
            pos: [ ...Area.gMarioSpawnInfo.startPos ],
            vel: [ 0, 0, 0 ],
            action: this.ACT_IDLE,
            marioBodyState: { punchState: 0 },

        })

        Object.assign(LevelUpdate.gMarioState.marioObj, {
            oPosX: LevelUpdate.gMarioState.pos[0],
            oPosY: LevelUpdate.gMarioState.pos[1],
            oPosZ: LevelUpdate.gMarioState.pos[2],
            oMoveAnglePitch: LevelUpdate.gMarioState.faceAngle[0],
            oMoveAngleYaw: LevelUpdate.gMarioState.faceAngle[1],
            oMoveAngleRoll: LevelUpdate.gMarioState.faceAngle[2]
        })

        Object.assign(LevelUpdate.gMarioState.marioObj.header.gfx, {
            pos: [ ...LevelUpdate.gMarioState.pos ],
            angle: [ 0, LevelUpdate.gMarioState.faceAngle[1], 0 ],
            unk38: { 
                ...LevelUpdate.gMarioState.marioObj.header.gfx.unk38, 
                animID: -1,
                animID: 0,
                animFrame: 0,
                animFrameAccelAssist: 0,
                animAccel: 0x10000,
                animTimer: 0
            }
        })


    }

    set_forward_vel(m, forwardVel) {
        m.forwardVel = forwardVel

        m.slideVelX = m.forwardVel * Math.sin(m.faceAngle[1] / 0x8000 * Math.PI)
        m.slideVelZ = m.forwardVel * Math.cos(m.faceAngle[1] / 0x8000 * Math.PI)

        m.vel[0] = m.slideVelX
        m.vel[2] = m.slideVelZ
    }

    check_common_action_exits(m) {
        if (m.input & this.INPUT_NONZERO_ANALOG) {
            return this.set_mario_action(m, this.ACT_WALKING, 0)
        }

        return 0
    }

    set_mario_action(m, action, actionArg) {

        switch (action & this.ACT_GROUP_MASK) {
            case this.ACT_GROUP_MOVING:
                action = this.set_mario_action_moving(m, action, actionArg); break
        }

        m.flags &= ~(this.MARIO_ACTION_SOUND_PLAYED | this.MARIO_MARIO_SOUND_PLAYED)

        m.prevAction = m.action
        m.action = action
        m.actionArg = actionArg
        m.actionState = 0
        m.actionTimer = 0

        return 1
    }

    set_mario_action_moving(m, action, actionArg) {
        const floorClass = this.mario_get_floor_class(m)
        const forwardVel = m.forwardVel
        const mag = Math.min(m.intendedMag, 8.0)

        switch (action) {
            case this.ACT_WALKING:
                if (floorClass != this.SURFACE_CLASS_VERY_SLIPPERY) {
                    if (0.0 <= forwardVel && forwardVel < mag) {
                        m.forwardVel = mag
                    }
                }

                m.marioObj.oMarioWalkingPitch = 0
                break
        }

        return action
    }

    set_mario_animation(m, targetAnimID) {
        const o = m.marioObj
        m.animation.targetAnim = m.animation.animList[targetAnimID]

        if (m.animation.targetAnim == undefined) throw "cant find animation"

        if (o.header.gfx.unk38.animID != targetAnimID) {
            o.header.gfx.unk38.animID = targetAnimID
            o.header.gfx.unk38.curAnim = m.animation.targetAnim
            o.header.gfx.unk38.animAccel = 0
            o.header.gfx.unk38.animYTrans = m.unkB0
    
            if (m.animation.targetAnim.flags & this.ANIM_FLAG_2) {
                o.header.gfx.unk38.animFrame = m.animation.targetAnim.unk04
            } else {
                if (m.animation.targetAnim.flags & this.ANIM_FLAG_FORWARD) {
                    o.header.gfx.unk38.animFrame = m.animation.targetAnim.unk04 + 1
                } else {
                    o.header.gfx.unk38.animFrame = m.animation.targetAnim.unk04 - 1
                }
            }
        }

        return o.header.gfx.unk38.animFrame
        
    }

    set_mario_anim_with_accel(m, targetAnimID, accel) {
        const o = m.marioObj
        m.animation.targetAnim = m.animation.animList[targetAnimID]

        if (o.header.gfx.unk38.animID != targetAnimID) {
            o.header.gfx.unk38.animID = targetAnimID
            o.header.gfx.unk38.curAnim = m.animation.targetAnim
            o.header.gfx.unk38.animYTrans = m.unkB0

            if (m.animation.targetAnim.flags & this.ANIM_FLAG_2) {
                o.header.gfx.unk38.animFrameAccelAssist = (m.animation.targetAnim << 0x10)
            } else {
                if (m.animation.targetAnim.flags & this.ANIM_FLAG_FORWARD) {
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

    is_anim_at_end(m) {
        const o = m.marioObj
        return (o.header.gfx.unk38.animFrame + 1) == o.header.gfx.unk38.curAnim.unk08
    }

    execute_mario_action() {
        if (LevelUpdate.gMarioState.action) {
            LevelUpdate.gMarioState.marioObj.header.gfx.node.flags &= ~GRAPH_RENDER_INVISIBLE
            this.update_mario_inputs(LevelUpdate.gMarioState)

            let inLoop = 1

            while (inLoop) {
                switch (LevelUpdate.gMarioState.action & this.ACT_GROUP_MASK) {
                    case this.ACT_GROUP_STATIONARY:
                        inLoop = mario_execute_stationary_action(LevelUpdate.gMarioState); break

                    case this.ACT_GROUP_MOVING:
                        inLoop = mario_execute_moving_action(LevelUpdate.gMarioState); break

                    default: throw "unkown action group"
                }
            }


            LevelUpdate.gMarioState.marioObj.oInteractStatus = 0
        }
    }

    update_mario_joystick_inputs(m) {
        const mag = window.playerInput.stickMag

        m.intendedMag = mag / 2.0

        if (m.intendedMag > 0.0) {
            m.intendedYaw = atan2s(-window.playerInput.stickY, window.playerInput.stickX) + m.area.camera.yaw
            m.input |= this.INPUT_NONZERO_ANALOG
        } else {
            m.intendedYaw = m.faceAngle[1]
        }

    }

    update_mario_geometry_inputs(m) {
        if (!m.floor) {
            m.pos = [ ...m.marioObj.header.gfx.pos ]
            m.floorHeight = SurfaceCollision.find_floor(m.pos[0], m.pos[1], m.pos[2], m)
        }

        m.ceilHeight = 20000.0 //vec3f_find_ceil(&m->pos[0], m->floorHeight, &m->ceil);
        m.waterLevel = -20000.0 //find_water_level(m->pos[0], m->pos[2]);

        if (m.floor) {
            m.floorAngle = atan2s(m.floor.normal.z, m.floor.normal.x)

            if ((m.pos[1] > m.waterLevel - 40) && this.mario_floor_is_slippery(m)) {
                m.input |= this.INPUT_ABOVE_SLIDE
            }

            if ((m.floor.flags & SurfaceTerrains.SURFACE_FLAG_DYNAMIC)
                || (m.ceil && m.ceil.flags & SurfaceTerrains.SURFACE_FLAG_DYNAMIC)) {
                let ceilToFloorDist = m.ceilHeight - m.floorHeight;

                if ((0.0 <= ceilToFloorDist) && (ceilToFloorDist <= 150.0)) {
                    m.input |= this.INPUT_SQUISHED
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

    mario_floor_is_slippery(m) {
        let normY
        
        if ((m.area.terrainType & SurfaceTerrains.TERRAIN_MASK) == SurfaceTerrains.TERRAIN_SLIDE
            && m.floor.normal.y < 0.9998477 //~cos(1 deg)
        ) {
            return true
        }
    
        switch (this.mario_get_floor_class(m)) {
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

    mario_get_floor_class(m) {
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
        if (m.action == this.ACT_CRAWLING && m.floor.normal.y > 0.5 && floorClass == SurfaceTerrains.SURFACE_CLASS_DEFAULT) {
            floorClass = SurfaceTerrains.SURFACE_CLASS_NOT_SLIPPERY
        }
    
        return floorClass
    }

    update_mario_inputs(m) {
        m.particleFlags = 0
        m.input = 0
        m.collidedObjInteractTypes = m.marioObj.collidedObjInteractTypes
        m.flags &= 0xFFFFFF

        this.update_mario_joystick_inputs(m)
        this.update_mario_geometry_inputs(m)

        if (Camera.gCameraMovementFlags & Camera.CAM_MOVE_C_UP_MODE) { 
            if (m.action & this.ACT_FLAG_ALLOW_FIRST_PERSON) {
                m.input |= this.INPUT_FIRST_PERSON;
            } else {
                Camera.gCameraMovementFlags &= ~Camera.CAM_MOVE_C_UP_MODE;
            }
        }
    
        if (!(m.input & (this.INPUT_NONZERO_ANALOG | this.INPUT_A_PRESSED))) {
            m.input |= this.INPUT_UNKNOWN_5;
        }
    
        if (m.marioObj.oInteractStatus
            & (this.INT_STATUS_HOOT_GRABBED_BY_MARIO | this.INT_STATUS_MARIO_UNK1 | this.INT_STATUS_MARIO_UNK4)) {
            m.input |= this.INPUT_UNKNOWN_10;
        }

        if (m.wallKickTimer > 0) {
            m.wallKickTimer--
        }
    
        if (m.doubleJumpTimer > 0) {
            m.doubleJumpTimer--
        }
    }

    init_mario_from_save_file() {
        Object.assign(LevelUpdate.gMarioState, {
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
    }
}

export const MarioInstance = new Mario()