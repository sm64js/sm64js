import { GEO_CONTEXT_AREA_LOAD, GEO_CONTEXT_RENDER } from "../engine/graph_node"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"
import { SkyboxInstance as Skybox } from "./Skybox"
import { CameraInstance as Camera } from "./Camera"

export const geo_skybox_main = (callContext, graphNode) => {
    let gfx = []
    if (callContext == GEO_CONTEXT_AREA_LOAD) {

    } else if (callContext == GEO_CONTEXT_RENDER) {
        const camNode = GeoRenderer.gCurGraphNodeRoot.wrapper.views[0]
        const camFrustum = camNode.node.parent.wrapper

        gfx = Skybox.create_skybox_facing_camera(0, graphNode.background, camFrustum.fov, Camera.gLakituState.pos[0], Camera.gLakituState.pos[1], Camera.gLakituState.pos[2], Camera.gLakituState.focus[0], Camera.gLakituState.focus[1], Camera.gLakituState.focus[2])
    }
    return gfx
}