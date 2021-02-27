export const RESPAWN_INFO_DONT_RESPAWN = 0xFF

export const RESPAWN_INFO_TYPE_NULL = 0
export const RESPAWN_INFO_TYPE_32   = 1
export const RESPAWN_INFO_TYPE_16   = 2

export const ACTIVE_FLAG_ACTIVE                 =  (1 <<  0) // 0x0001
export const ACTIVE_FLAG_FAR_AWAY               =  (1 <<  1) // 0x0002
export const ACTIVE_FLAG_UNK2                   =  (1 <<  2) // 0x0004
export const ACTIVE_FLAG_IN_DIFFERENT_ROOM      =  (1 <<  3) // 0x0008
export const ACTIVE_FLAG_UNIMPORTANT            =  (1 <<  4) // 0x0010
export const ACTIVE_FLAG_INITIATED_TIME_STOP    =  (1 <<  5) // 0x0020
export const ACTIVE_FLAG_MOVE_THROUGH_GRATE     =  (1 <<  6) // 0x0040
export const ACTIVE_FLAG_UNK7                   =  (1 <<  7) // 0x0080
export const ACTIVE_FLAG_UNK8                   =  (1 <<  8) // 0x0100
export const ACTIVE_FLAG_UNK9                   =  (1 <<  9) // 0x0200
export const ACTIVE_FLAG_UNK10                  =  (1 << 10) // 0x0400

export const ACTIVE_FLAGS_DEACTIVATED = 0

/* oAction */
export const OBJ_ACT_LAVA_DEATH = 100
export const OBJ_ACT_DEATH_PLANE_DEATH = 101

export const OBJ_ACT_HORIZONTAL_KNOCKBACK = 100
export const OBJ_ACT_VERTICAL_KNOCKBACK = 101
export const OBJ_ACT_SQUISHED = 102

/* oMoveFlags */
export const OBJ_MOVE_LANDED  = (1 << 0) // 0x0001
export const OBJ_MOVE_ON_GROUND  = (1 << 1) // 0x0002  // mutually exclusive to OBJ_MOVE_LANDED
export const OBJ_MOVE_LEFT_GROUND  = (1 << 2) // 0x0004
export const OBJ_MOVE_ENTERED_WATER  = (1 << 3) // 0x0008
export const OBJ_MOVE_AT_WATER_SURFACE  = (1 << 4) // 0x0010
export const OBJ_MOVE_UNDERWATER_OFF_GROUND  = (1 << 5) // 0x0020
export const OBJ_MOVE_UNDERWATER_ON_GROUND  = (1 << 6) // 0x0040
export const OBJ_MOVE_IN_AIR  = (1 << 7) // 0x0080
export const OBJ_MOVE_8  = (1 << 8) // 0x0100
export const OBJ_MOVE_HIT_WALL  = (1 << 9) // 0x0200
export const OBJ_MOVE_HIT_EDGE  = (1 << 10) // 0x0400
export const OBJ_MOVE_ABOVE_LAVA  = (1 << 11) // 0x0800
export const OBJ_MOVE_LEAVING_WATER  = (1 << 12) // 0x1000
export const OBJ_MOVE_13  = (1 << 13) // 0x2000
export const OBJ_MOVE_ABOVE_DEATH_BARRIER = (1 << 14) // 0x4000

export const OBJ_MOVE_MASK_ON_GROUND = (OBJ_MOVE_LANDED | OBJ_MOVE_ON_GROUND)
export const OBJ_MOVE_MASK_33 =  0x33
export const OBJ_MOVE_MASK_IN_WATER = (OBJ_MOVE_ENTERED_WATER | OBJ_MOVE_AT_WATER_SURFACE | OBJ_MOVE_UNDERWATER_OFF_GROUND | OBJ_MOVE_UNDERWATER_ON_GROUND)
export const OBJ_MOVE_MASK_HIT_WALL_OR_IN_WATER = (OBJ_MOVE_HIT_WALL | OBJ_MOVE_MASK_IN_WATER)
export const OBJ_MOVE_MASK_NOT_AIR = ( OBJ_MOVE_LANDED | OBJ_MOVE_ON_GROUND | OBJ_MOVE_AT_WATER_SURFACE | OBJ_MOVE_UNDERWATER_ON_GROUND)

/* oFlags */
export const OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE        =  (1 <<  0) // 0x00000001
export const OBJ_FLAG_MOVE_XZ_USING_FVEL              =  (1 <<  1) // 0x00000002
export const OBJ_FLAG_MOVE_Y_WITH_TERMINAL_VEL        =  (1 <<  2) // 0x00000004
export const OBJ_FLAG_SET_FACE_YAW_TO_MOVE_YAW        =  (1 <<  3) // 0x00000008
export const OBJ_FLAG_SET_FACE_ANGLE_TO_MOVE_ANGLE    =  (1 <<  4) // 0x00000010
export const OBJ_FLAG_0020                            =  (1 <<  5) // 0x00000020
export const OBJ_FLAG_COMPUTE_DIST_TO_MARIO           =  (1 <<  6) // 0x00000040
export const OBJ_FLAG_ACTIVE_FROM_AFAR                =  (1 <<  7) // 0x00000080
export const OBJ_FLAG_0100                            =  (1 <<  8) // 0x00000100
export const OBJ_FLAG_TRANSFORM_RELATIVE_TO_PARENT    =  (1 <<  9) // 0x00000200
export const OBJ_FLAG_HOLDABLE                        =  (1 << 10) // 0x00000400
export const OBJ_FLAG_SET_THROW_MATRIX_FROM_TRANSFORM =  (1 << 11) // 0x00000800
export const OBJ_FLAG_1000                            =  (1 << 12) // 0x00001000
export const OBJ_FLAG_COMPUTE_ANGLE_TO_MARIO          =  (1 << 13) // 0x00002000
export const OBJ_FLAG_PERSISTENT_RESPAWN              =  (1 << 14) // 0x00004000
export const OBJ_FLAG_8000                            =  (1 << 15) // 0x00008000
export const OBJ_FLAG_30 = (1 << 30) // 0x40000000



/* oActiveParticleFlags */
export const ACTIVE_PARTICLE_DUST = (1 << 0) // 0x00000001
export const ACTIVE_PARTICLE_UNUSED_1 = (1 << 1) // 0x00000002
export const ACTIVE_PARTICLE_UNUSED_2 = (1 << 2) // 0x00000004
export const ACTIVE_PARTICLE_SPARKLES = (1 << 3) // 0x00000008
export const ACTIVE_PARTICLE_H_STAR = (1 << 4) // 0x00000010
export const ACTIVE_PARTICLE_BUBBLE = (1 << 5) // 0x00000020
export const ACTIVE_PARTICLE_WATER_SPLASH = (1 << 6) // 0x00000040
export const ACTIVE_PARTICLE_IDLE_WATER_WAVE = (1 << 7) // 0x00000080
export const ACTIVE_PARTICLE_SHALLOW_WATER_WAVE = (1 << 8) // 0x00000100
export const ACTIVE_PARTICLE_PLUNGE_BUBBLE = (1 << 9) // 0x00000200
export const ACTIVE_PARTICLE_WAVE_TRAIL = (1 << 10) // 0x00000400
export const ACTIVE_PARTICLE_FIRE = (1 << 11) // 0x00000800
export const ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH = (1 << 12) // 0x00001000
export const ACTIVE_PARTICLE_LEAF = (1 << 13) // 0x00002000
export const ACTIVE_PARTICLE_DIRT = (1 << 14) // 0x00004000
export const ACTIVE_PARTICLE_MIST_CIRCLE = (1 << 15) // 0x00008000
export const ACTIVE_PARTICLE_SNOW = (1 << 16) // 0x00010000
export const ACTIVE_PARTICLE_BREATH = (1 << 17) // 0x00020000
export const ACTIVE_PARTICLE_V_STAR = (1 << 18) // 0x00040000
export const ACTIVE_PARTICLE_TRIANGLE = (1 << 19) // 0x00080000

/* oHeldState */
export const HELD_FREE = 0
export const HELD_HELD = 1
export const HELD_THROWN = 2
export const HELD_DROPPED = 3

export const oFlags = 1

export const oIntangibleTimer = 5

export const oPosX = 6
export const oPosY = 7
export const oPosZ = 8

export const oMoveAnglePitch = 0x0F
export const oMoveAngleYaw = 0x10
export const oMoveAngleRoll = 0x11

export const oFaceAnglePitch = 0x12
export const oFaceAngleYaw = 0x13
export const oFaceAngleRoll = 0x14

export const oGravity = 0x17
export const oFloorHeight = 0x18
export const oMoveFlags = 0x19

export const oAnimState = 0x1A

export const oVelX = 0x09
export const oVelY = 0x0A
export const oVelZ = 0x0B
export const oForwardVel = 0x0C

export const oMarioParticleFlags    = 0x1B
export const oMarioPoleUnk108       = 0x20
export const oMarioReadingSignDYaw  = 0x20
export const oMarioPoleYawVel       = 0x21
export const oMarioCannonObjectYaw  = 0x21
export const oMarioTornadoYawVel    = 0x21
export const oMarioReadingSignDPosX = 0x21
export const oMarioSteepJumpYaw     = 0x22
export const oMarioPolePos          = 0x22

export const oMarioWalkingPitch = 0x22
export const oAngleVelPitch = 0x23
export const oAngleVelYaw = 0x24
export const oAngleVelRoll = 0x25
export const oAnimations = 0x26
export const oHeldState = 0x27
export const oWallHitboxRadius = 0x28
export const oDragStrength = 0x29
export const oInteractType = 0x2A
export const oInteractStatus = 0x2B

export const oParentRelativePosX = 0x2C
export const oParentRelativePosY = 0x2D
export const oParentRelativePosZ = 0x2E

export const oBehParams2ndByte = 0x2F

export const oTimer = 0x33
export const oBounciness      = 0x34
export const oDistanceToMario = 0x35
export const oAngleToMario    = 0x36
export const oHomeX           = 0x37
export const oHomeY           = 0x38
export const oHomeZ           = 0x39
export const oFriction        = 0x3A
export const oBuoyancy = 0x3B
export const oOpacity = 0x3D

export const oDamageOrCoinValue  = 0x3E
export const oHealth             = 0x3F
export const oBehParams = 0x40
export const oPrevAction         = 0x41
export const oInteractionSubtype = 0x42
export const oCollisionDistance  = 0x43
export const oNumLootCoins       = 0x44
export const oDrawingDistance    = 0x45
export const oRoom = 0x46
export const oUnk1A8 = 0x48
export const oWallAngle          = 0x4B
export const oFloorType          = 0x4C
export const oFloorRoom          = 0x4C
export const oAngleToHome        = 0x4D
export const oFloor = 0x4E
export const oDeathSound    =    0x4F

export const oGraphYOffset = 0x15
export const oActiveParticleFlags = 0x16

export const oAction = 0x31
export const oSubAction = 0x32

/* Checkerboard Platform */
export const oCheckerBoardPlatformUnkF8  = 0x1C
export const oCheckerBoardPlatformUnkFC  = 0x1D
export const oCheckerBoardPlatformUnk1AC = 0x49

/* Seesaw Platform */
export const oSeesawPlatformPitchVel = 0x1B

/* Collision Particle */
export const oCollisionParticleUnkF4 = 0x1B

/* Goomba */
export const oGoombaSize                = 0x1B
export const oGoombaScale               = 0x1C
export const oGoombaWalkTimer           = 0x1D
export const oGoombaTargetYaw           = 0x1E
export const oGoombaBlinkTimer          = 0x1F
export const oGoombaTurningAwayFromWall = 0x20
export const oGoombaRelativeSpeed = 0x21

/* Bob-omb */
export const oBobombBlinkTimer = 0x1B
export const oBobombFuseLit = 0x1C
export const oBobombFuseTimer = 0x1D

/* Wooden Post */
export const oWoodenPostTotalMarioAngle  = 0x1B
export const oWoodenPostPrevAngleToMario = 0x1C
export const oWoodenPostSpeedY           = 0x1D
export const oWoodenPostMarioPounding    = 0x1E
export const oWoodenPostOffsetY = 0x1F

/* Chain Chomp */
export const oChainChompSegments                     = 0x1B
export const oChainChompMaxDistFromPivotPerChainPart = 0x1C
export const oChainChompMaxDistBetweenChainParts     = 0x1D
export const oChainChompDistToPivot                  = 0x1E
export const oChainChompUnk104                       = 0x1F
export const oChainChompRestrictedByChain            = 0x20
export const oChainChompTargetPitch                  = 0x21
export const oChainChompNumLunges                    = 0x22
export const oChainChompReleaseStatus                = 0x49
export const oChainChompHitGate = 0x4A

/* oAction */
export const CHAIN_CHOMP_ACT_UNINITIALIZED = 0
export const CHAIN_CHOMP_ACT_MOVE = 1
export const CHAIN_CHOMP_ACT_UNLOAD_CHAIN = 2

/* oSubAction */
export const CHAIN_CHOMP_SUB_ACT_TURN = 0
export const CHAIN_CHOMP_SUB_ACT_LUNGE = 1

/* Moving Yellow Coin */
    /* oAction */
    export const MOV_YCOIN_ACT_IDLE = 0
    export const MOV_YCOIN_ACT_BLINKING = 1
    export const MOV_YCOIN_ACT_LAVA_DEATH = 100
    export const MOV_YCOIN_ACT_DEATH_PLANE_DEATH = 101

/* oChainChompReleaseStatus */
export const CHAIN_CHOMP_NOT_RELEASED = 0
export const CHAIN_CHOMP_RELEASED_TRIGGER_CUTSCENE = 1
export const CHAIN_CHOMP_RELEASED_LUNGE_AROUND = 2
export const CHAIN_CHOMP_RELEASED_BREAK_GATE = 3
export const CHAIN_CHOMP_RELEASED_JUMP_AWAY = 4
export const CHAIN_CHOMP_RELEASED_END_CUTSCENE = 5

/* Chain chomp chain part */
    /* oBehParams2ndByte */
export const CHAIN_CHOMP_CHAIN_PART_BP_PIVOT = 0

/* Wooden post */
    /* oBehParams */
export const WOODEN_POST_BP_NO_COINS_MASK = 0x0000FF00

/* Goomba triplet spawner */
    /* oBehParams2ndByte */
    export const GOOMBA_TRIPLET_SPAWNER_BP_SIZE_MASK = 0x00000003
    export const GOOMBA_TRIPLET_SPAWNER_BP_EXTRA_GOOMBAS_MASK = 0x000000FC
    /* oAction */
    export const GOOMBA_TRIPLET_SPAWNER_ACT_UNLOADED = 0
    export const GOOMBA_TRIPLET_SPAWNER_ACT_LOADED = 1

/* Goomba */
    /* oBehParams2ndByte */
    export const GOOMBA_BP_SIZE_MASK = 0x00000003
    export const GOOMBA_SIZE_REGULAR = 0
    export const GOOMBA_SIZE_HUGE = 1
    export const GOOMBA_SIZE_TINY = 2
    export const GOOMBA_BP_TRIPLET_FLAG_MASK = 0x000000FC
    /* oAction */
    export const GOOMBA_ACT_WALK = 0
    export const GOOMBA_ACT_ATTACKED_MARIO = 1
    export const GOOMBA_ACT_JUMP = 2

/* Bob-omb */
    /* oBehParams2ndByte */
    export const BOBOMB_BP_STYPE_GENERIC =0
    export const BOBOMB_BP_STYPE_STATIONARY =1
    /* oAction */
    export const BOBOMB_ACT_PATROL = 0
    export const BOBOMB_ACT_LAUNCHED = 1
    export const BOBOMB_ACT_CHASE_MARIO = 2
    export const BOBOMB_ACT_EXPLODE = 3
    export const BOBOMB_ACT_LAVA_DEATH = 100
    export const BOBOMB_ACT_DEATH_PLANE_DEATH = 101

/* Object Respawner */
export const oRespawnerModelToRespawn    = 0x1B
export const oRespawnerMinSpawnDist      = 0x1C
export const oRespawnerBehaviorToRespawn = 0x1D

export const oSmokeTimer = 0x1B

/* White Puff Explode */
export const oWhitePuffUnkF4 = 0x1B
export const oWhitePuffUnkF8 = 0x1C
export const oWhitePuffUnkFC = 0x1D

/* Water Objects */
export const oWaterObjUnkF4  = 0x1B
export const oWaterObjUnkF8  = 0x1C
export const oWaterObjUnkFC  = 0x1D
export const oWaterObjUnk100 = 0x1E

export const oCoinUnkF4  = 0x1B
export const oCoinUnkF8  = 0x1C
export const oCoinUnk110 = 0x22