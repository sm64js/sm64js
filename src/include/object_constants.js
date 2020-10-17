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

export const OBJ_FLAG_UPDATE_GFX_POS_AND_ANGLE = (1 << 0) // 0x00000001

export const oFlags = 0x01
export const oSyncID = 0x04
export const oIntangibleTimer = 0x05

export const oPosX = 0x06
export const oPosY = 0x07
export const oPosZ = 0x08

export const oMoveAnglePitch = 0x0F
export const oMoveAngleYaw = 0x10
export const oMoveAngleRoll = 0x11

export const oFaceAnglePitch = 0x12
export const oFaceAngleYaw = 0x13
export const oFaceAngleRoll = 0x14

export const oFloorHeight = 0x18

export const oVelX = 0x09
export const oVelY = 0x0A
export const oVelZ = 0x0B

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

export const oInteractType = 0x2A
export const oInteractStatus = 0x2B

export const oBehParams2ndByte = 0x2F

export const oDistanceToMario = 0x35

export const oDamageOrCoinValue  = 0x3E
export const oHealth             = 0x3F
export const oBehParams = 0x40
export const oPrevAction         = 0x41
export const oInteractionSubtype = 0x42
export const oCollisionDistance  = 0x43
export const oNumLootCoins       = 0x44
export const oDrawingDistance    = 0x45
export const oRoom               = 0x46

export const oGraphYOffset = 0x15

export const oAction = 0x31
export const oSubAction = 0x32

export const oTimer = 0x33

