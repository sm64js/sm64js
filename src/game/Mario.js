import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { AreaInstance as Area } from "./Area"
import { MarioMiscInstance as MarioMisc } from "./MarioMisc"
import { CameraInstance as Camera } from "./Camera"
import { ObjectListProcessorInstance as ObjectListProcessor } from "./ObjectListProcessor"
import { GRAPH_RENDER_INVISIBLE } from "../engine/graph_node"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import * as SurfaceTerrains from "../include/surface_terrains"
import { atan2s } from "../engine/math_util"

class Mario {
    constructor() {

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
        this.MARIO_UNKNOWN_31          =  0x80000000

        this.ACT_IDLE                    = 0x0C400201 
        this.ACT_FLAG_ALLOW_FIRST_PERSON = (1 << 26)

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
        this.INPUT_Z_PRESSED              = 0x8000

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
            unk38: { ...LevelUpdate.gMarioState.marioObj.header.gfx.unk38, animID: -1 }
        })

    }

    execute_mario_action() {
        if (LevelUpdate.gMarioState.action) {
            LevelUpdate.gMarioState.marioObj.header.gfx.node.flags &= ~GRAPH_RENDER_INVISIBLE

            this.update_mario_inputs(LevelUpdate.gMarioState)
        }
    }

    update_mario_geometry_inputs(m) {
        if (!m.floor) {
            m.pos = [ ...m.marioObj.header.gfx.pos ]
            m.floorHeight = SurfaceCollision.find_floor(m)
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
            animation: null,
            numCoins: 0, numStars: 0, numKeys: 0,
            numLives: 4, health: 0x880,
            unkB8: 0, unkB0: 0xBD
        })
    }
}

export const MarioInstance = new Mario()