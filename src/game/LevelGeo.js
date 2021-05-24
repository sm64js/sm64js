import { GEO_CONTEXT_AREA_LOAD, GEO_CONTEXT_RENDER } from "../engine/graph_node"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"
import { SkyboxInstance as Skybox } from "./Skybox"
import { CameraInstance as Camera } from "./Camera"
import { vec3f_to_vec3s } from "../engine/math_util"

/**
 * Geo function that generates a displaylist for environment effects such as
 * snow or jet stream bubbles.
 */
export const geo_envfx_main = (callContext, node, mtxf) => {
    // const marioPos = []
    // const camFrom = []
    // const camTo = []
    // let particleList
    // let gfx = []

    // if (callContext == GEO_CONTEXT_RENDER && gCurGraphNodeCamera != null) {
    //     struct GraphNodeGenerated *execNode = (struct GraphNodeGenerated *) node
    //    let /*u32*/*params = &execNode.parameter;   // accessed a s32 as 2 u16s by pointing to the variable and
    //                                           // casting to a local struct as necessary.

    //     if (GET_HIGH_U16_OF_32(*params) != gAreaUpdateCounter) {
    //        let /*s32*/snowMode = GET_LOW_U16_OF_32(*params)

    //         vec3f_to_vec3s(camTo, gCurGraphNodeCamera.focus)
    //         vec3f_to_vec3s(camFrom, gCurGraphNodeCamera.pos)
    //         vec3f_to_vec3s(marioPos, gPlayerCameraState.pos)
    //         particleList = envfx_update_particles(snowMode, marioPos, camTo, camFrom)
    //         if (particleList != null) {
    //             Mtx *mtx = alloc_display_list(sizeof(*mtx))

    //             gfx = alloc_display_list(2 * sizeof(*gfx))
    //             mtxf_to_mtx(mtx, mtxf)
    //             gSPMatrix(&gfx[0], VIRTUAL_TO_PHYSICAL(mtx), G_MTX_MODELVIEW | G_MTX_LOAD | G_MTX_NOPUSH)
    //             gSPBranchList(&gfx[1], VIRTUAL_TO_PHYSICAL(particleList))
    //             execNode.fnNode.node.flags = (execNode.fnNode.node.flags & 0xFF) | 0x400
    //         }
    //         SET_HIGH_U16_OF_32(*params, gAreaUpdateCounter)
    //     }
    // } else if (callContext == GEO_CONTEXT_AREA_INIT) {
    //       // Give these arguments some dummy values. Not used in ENVFX_MODE_NONE
    //     vec3s_copy(camTo, gVec3sZero)
    //     vec3s_copy(camFrom, gVec3sZero)
    //     vec3s_copy(marioPos, gVec3sZero)
    //     envfx_update_particles(ENVFX_MODE_NONE, marioPos, camTo, camFrom)
    // }

    // return gfx
    return []
}


export const geo_skybox_main = (callContext, graphNode) => {
    let gfx = []
    if (callContext == GEO_CONTEXT_AREA_LOAD) {

    } else if (callContext == GEO_CONTEXT_RENDER) {
        const camNode = GeoRenderer.gCurGraphNodeRoot.views[0]
        const camFrustum = camNode.parent

        gfx = Skybox.create_skybox_facing_camera(0, graphNode.background, camFrustum.fov, Camera.gLakituState.pos[0], Camera.gLakituState.pos[1], Camera.gLakituState.pos[2], Camera.gLakituState.focus[0], Camera.gLakituState.focus[1], Camera.gLakituState.focus[2])
    }
    return gfx
}
