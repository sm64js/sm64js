import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import * as MODEL from "../include/model_ids"

import { bhvTree, bhvStaticObject } from "./BehaviorData"
import { spawn_object_abs_with_rot } from "./ObjectHelpers"
import { oBehParams, RESPAWN_INFO_DONT_RESPAWN, oUnk1A8, oBehParams2ndByte, RESPAWN_INFO_TYPE_16 } from "../include/object_constants"
import { MacroObjectPresets } from "../include/macro_presets"
import { uint16, int16, s16 } from "../utils"

const SPTYPE_NO_YROT_OR_PARAMS  = 0 // object is 8-bytes long, no y-rotation or any behavior params
const SPTYPE_YROT_NO_PARAMS     = 1 // object is 10-bytes long, has y-rotation but no params
const SPTYPE_PARAMS_AND_YROT    = 2 // object is 12-bytes long, has y-rotation and params
const SPTYPE_UNKNOWN            = 3 // object is 14-bytes long, has 3 extra shorts that get converted to floats.
const SPTYPE_DEF_PARAM_AND_YROT = 4 // object is 10-bytes long, has y-rotation and uses the default param

const SpecialObjectPresets = {};
const SpecialObjectPresets_init = () => {
[
    [0x00, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_NONE", null],
    [0x01, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_YELLOW_COIN", "bhvYellowCoin"],
    [0x02, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_YELLOW_COIN", "bhvYellowCoin"],
    [0x03, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_UNKNOWN_B8", "bhvStaticObject"],
    [0x04, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_BOO", "bhvCourtyardBooTriplet"],
    [0x05, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_UNKNOWN_AC", "bhvCastleFloorTrap"],
    [0x06, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_LLL_MOVING_OCTAGONAL_MESH_PLATFORM", "bhvLllMovingOctagonalMeshPlatform"],
    [0x07, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_CCM_SNOWMAN_HEAD", "bhvSnowBall"],
    [0x08, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LLL_DRAWBRIDGE_PART", "bhvLllDrawbridgeSpawner"],
    [0x09, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x0A, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_LLL_ROTATING_BLOCK_FIRE_BARS", "bhvLllRotatingBlockWithFireBars"],
    [0x0B, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvLllFloatingWoodBridge"],
    [0x0C, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvLLLTumblingBridge"],
    [0x0D, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_LLL_ROTATING_HEXAGONAL_RING" , "bhvLllRotatingHexagonalRing"],
    [0x0E, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LLL_SINKING_RECTANGULAR_PLATFORM", "bhvLllSinkingRectangularPlatform"],
    [0x0F, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_LLL_SINKING_SQUARE_PLATFORMS", "bhvLllSinkingSquarePlatforms"],
    [0x10, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_LLL_TILTING_SQUARE_PLATFORM", "bhvLllTiltingInvertedPyramid"],
    [0x11, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvLllBowserPuzzle"],
    [0x12, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvMrI"],
    [0x13, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_BULLY", "bhvSmallBully"],
    [0x14, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_BULLY_BOSS", "bhvBigBully"],
    [0x15, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x16, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x17, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x18, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x19, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x1A, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_YELLOW_COIN", "bhvMovingBlueCoin"],
    [0x1B, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_TREASURE_CHEST_BASE", "bhvBetaChestBottom"],
    [0x1C, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_WATER_RING", "bhvJetStreamRingSpawner"],
    [0x1D, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_WATER_MINE", "bhvBowserBomb"],
    [0x1E, SPTYPE_UNKNOWN           , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x1F, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvStaticObject"],
    [0x20, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_BUTTERFLY", "bhvButterfly"],
    [0x21, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_BOWSER", "bhvBowser"],
    [0x22, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_WF_ROTATING_WOODEN_PLATFORM", "bhvWFRotatingWoodenPlatform"],
    [0x23, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_WF_SMALL_BOMP", "bhvSmallBomp"],
    [0x24, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_WF_SLIDING_PLATFORM", "bhvWfSlidingPlatform"],
    [0x25, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvTowerPlatformGroup"],
    [0x26, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", "bhvRotatingCounterClockwise"],
    [0x27, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_WF_TUMBLING_BRIDGE", "bhvTumblingBridge"],
    [0x28, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_WF_LARGE_BOMP", "bhvLargeBomp"],
    [0x65, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_03", "bhvStaticObject"],
    [0x66, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_04", "bhvStaticObject"],
    [0x67, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_05", "bhvStaticObject"],
    [0x68, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_06", "bhvStaticObject"],
    [0x69, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_07", "bhvStaticObject"],
    [0x6A, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_08", "bhvStaticObject"],
    [0x6B, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_09", "bhvStaticObject"],
    [0x6C, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_0A", "bhvStaticObject"],
    [0x6D, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_0B", "bhvStaticObject"],
    [0x6E, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_0C", "bhvStaticObject"],
    [0x6F, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_0D", "bhvStaticObject"],
    [0x70, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_0E", "bhvStaticObject"],
    [0x71, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_0F", "bhvStaticObject"],
    [0x72, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_10", "bhvStaticObject"],
    [0x73, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_11", "bhvStaticObject"],
    [0x74, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_12", "bhvStaticObject"],
    [0x75, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_13", "bhvStaticObject"],
    [0x76, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_14", "bhvStaticObject"],
    [0x77, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_15", "bhvStaticObject"],
    [0x78, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_LEVEL_GEOMETRY_16", "bhvStaticObject"],
    [0x79, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_BOB_BUBBLY_TREE", "bhvTree"],
    [0x7A, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_COURTYARD_SPIKY_TREE", "bhvTree"],
    [0x7B, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_CCM_SNOW_TREE", "bhvTree"],
    [0x7C, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_UNKNOWN_TREE_1A", "bhvTree"],
    [0x7D, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_SSL_PALM_TREE", "bhvTree"],
    [0x89, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_CASTLE_CASTLE_DOOR_UNUSED", "bhvDoor"],
    [0x7E, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_CASTLE_WOODEN_DOOR_UNUSED", "bhvDoor"],
    [0x7F, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_UNKNOWN_DOOR_1E", "bhvDoor"],
    [0x80, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_HMC_METAL_DOOR", "bhvDoor"],
    [0x81, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_HMC_HAZY_MAZE_DOOR", "bhvDoor"],
    [0x82, SPTYPE_YROT_NO_PARAMS    , 0x00, "MODEL_UNKNOWN_DOOR_21", "bhvDoor"],
    [0x8A, SPTYPE_DEF_PARAM_AND_YROT, 0x00, "MODEL_CASTLE_DOOR_0_STARS", "bhvDoor"],
    [0x8B, SPTYPE_DEF_PARAM_AND_YROT, 0x01, "MODEL_CASTLE_DOOR_1_STAR", "bhvDoor"],
    [0x8C, SPTYPE_DEF_PARAM_AND_YROT, 0x03, "MODEL_CASTLE_DOOR_3_STARS", "bhvDoor"],
    [0x8D, SPTYPE_DEF_PARAM_AND_YROT, 0x00, "MODEL_CASTLE_KEY_DOOR", "bhvDoor"],
    [0x88, SPTYPE_PARAMS_AND_YROT   , 0x00, "MODEL_CASTLE_CASTLE_DOOR", "bhvDoorWarp"],
    [0x83, SPTYPE_PARAMS_AND_YROT   , 0x00, "MODEL_CASTLE_WOODEN_DOOR", "bhvDoorWarp"],
    [0x84, SPTYPE_PARAMS_AND_YROT   , 0x00, "MODEL_UNKNOWN_DOOR_28", "bhvDoorWarp"],
    [0x85, SPTYPE_PARAMS_AND_YROT   , 0x00, "MODEL_CASTLE_METAL_DOOR", "bhvDoorWarp"],
    [0x86, SPTYPE_PARAMS_AND_YROT   , 0x00, "MODEL_UNKNOWN_DOOR_2A", "bhvDoorWarp"],
    [0x87, SPTYPE_PARAMS_AND_YROT   , 0x00, "MODEL_UNKNOWN_DOOR_2B", "bhvDoorWarp"],
    [0xFF, SPTYPE_NO_YROT_OR_PARAMS , 0x00, "MODEL_NONE", null],
].forEach(s => {
    let beh = gLinker.behaviors[s[4]]
    if (!beh) {
        // console.log("no behavior for " + s[4])
    }
    SpecialObjectPresets[s[0]] = {type: s[1], defParam: s[2], model: MODEL[s[3]], behavior: beh }
})
}

const convert_rotation = (inRotation) => {
    let rotation = uint16(inRotation & 0xFF)
    rotation <<= 8

    if (rotation == 0x3F00) {
        rotation = 0x4000
    }

    if (rotation == 0x7F00) {
        rotation = 0x8000
    }

    if (rotation == 0xBF00) {
        rotation = 0xC000
    }

    if (rotation == 0xFF00) {
        rotation = 0x0000
    }

    return int16(rotation)
}

const spawn_macro_abs_yrot_2params = (model, behavior, x, y, z, ry, params) => {
    if (behavior) {
        const newObj = spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent,
            model, behavior, x, y, z, 0, convert_rotation(ry), 0)
        newObj.rawData[oBehParams] = params << 16
    } else {
        console.log("no behavior - 0x" + model.toString(16))
    }
}

/*
 * Spawns an object at an absolute location with rotation around the y-axis and
 * a single parameter filling up the upper byte of newObj->oBehParams.
 * The object will not spawn if 'behavior' is NULL.
 */
const spawn_macro_abs_yrot_param1 = (model, behavior, x, y, z, ry, param) => {
    if (behavior) {
        const newObj = spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent,
            model, behavior, x, y, z, 0, convert_rotation(ry), 0)
        newObj.rawData[oBehParams] = param << 24
    } else {
        console.log("no behavior - 0x" + model.toString(16))
    }
}


export const spawn_special_objects = (areaIndex, specialObjList, dataIndex) => {
    SpecialObjectPresets_init()
    const numOfSpecialObjects = specialObjList[dataIndex++]
    ObjectListProc.gMacroObjectDefaultParent = {
        gfx: {
            areaIndex: areaIndex,
            activeAreaIndex: areaIndex
        }
    }

    for (let i = 0; i < numOfSpecialObjects; i++) {
        const presetID = specialObjList[dataIndex++]
        const x = specialObjList[dataIndex++]
        const y = specialObjList[dataIndex++]
        const z = specialObjList[dataIndex++]

        const { model, behavior, type, defParam } = SpecialObjectPresets[presetID]
        let yrot, params, unk0, unk1, unk2

        switch (type) {
            case SPTYPE_NO_YROT_OR_PARAMS:
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z, 0, 0)
                break
            case SPTYPE_YROT_NO_PARAMS:
                yrot = specialObjList[dataIndex++] // Y-rotation
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z, yrot, 0)
                break
            case SPTYPE_PARAMS_AND_YROT:
                yrot = specialObjList[dataIndex++] // Y-rotation
                params = specialObjList[dataIndex++] // Params
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z, yrot, params)
                break
            case SPTYPE_UNKNOWN:
                unk0 = specialObjList[dataIndex++] // Unknown, gets put into obj->oMacroUnk108 as a float
                unk1 = specialObjList[dataIndex++] // Unknown, gets put into obj->oMacroUnk10C as a float
                unk2 = specialObjList[dataIndex++] // Unknown, gets put into obj->oMacroUnk110 as a float
                spawn_macro_abs_special(model, behavior, x, y, z, unk0, unk1, unk2)
                break
            case SPTYPE_DEF_PARAM_AND_YROT:
                yrot = specialObjList[dataIndex++] // Y-rotation
                spawn_macro_abs_yrot_param1(model, behavior, x, y, z, yrot, defParam)
                break
        }

    }

    return dataIndex
}

export const spawn_macro_objects = (areaIndex, macroObjList) => {
    ObjectListProc.gMacroObjectDefaultParent.gfx.areaIndex = areaIndex
    ObjectListProc.gMacroObjectDefaultParent.gfx.activeAreaIndex = areaIndex

    let p, preset

    macroObjList.forEach(objToSpawn => {
        if (!objToSpawn) {
            return  // skip null
        }
        if (Array.isArray(objToSpawn)) {
            const o = objToSpawn
            objToSpawn = { yaw: o[1], pos: [o[2], o[3], o[4]], param: o[5]}
            p = MacroObjectPresets[o[0]]
        } else {
            p = MacroObjectPresets[objToSpawn.preset]
        }
        preset = {behavior: gLinker.behaviors[p[0]], model: MODEL[p[1]], param: p[2]}

        if (!preset.behavior) {
            console.log("no behavior - ", p[0]) // , objToSpawn)
            return
        }

        const macroObject = {
            obj_y_rot: s16((objToSpawn.yaw * 0x10 / 45) << 1),
            obj_pos: objToSpawn.pos,
            obj_param: objToSpawn.param
        }
        if (preset.param != 0) {
            macroObject.obj_param = (macroObject.obj_param & 0xFF00) + (preset.param & 0x00FF)
        }

        if (((macroObject.obj_param >> 8) & RESPAWN_INFO_DONT_RESPAWN) != RESPAWN_INFO_DONT_RESPAWN) {
            const newObj = spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent, preset.model, preset.behavior,
                macroObject.obj_pos[0], macroObject.obj_pos[1], macroObject.obj_pos[2], 0, convert_rotation(macroObject.obj_y_rot), 0)

            newObj.rawData[oUnk1A8] = macroObject.obj_param
            newObj.rawData[oBehParams] = ((macroObject.obj_param & 0x00FF) << 16) + (macroObject.obj_param & 0xFF00)
            newObj.rawData[oBehParams2ndByte] = macroObject.obj_param & 0x00FF
            newObj.respawnInfoType = RESPAWN_INFO_TYPE_16
            newObj.respawnInfo = macroObject.obj_param
            newObj.parentObj = newObj
        }

    })
}

export const MACRO_OBJECT = (preset, yaw, posX, posY, posZ) => {return [preset, yaw, posX, posY, posZ]}
export const MACRO_OBJECT_WITH_BEH_PARAM = (preset, yaw, posX, posY, posZ, behParam) => {return [preset, yaw, posX, posY, posZ, behParam]}
export const MACRO_OBJECT_END = () => {return null}
