import { atan2s, guOrtho } from "../engine/math_util"
import  * as Gbi from "../include/gbi"
import { dl_skybox_begin, dl_skybox_tile_tex_settings, dl_skybox_end, dl_draw_quad_verts_0123 } from "../common_gfx/segment2"
import { water_skybox_ptrlist } from "../textures/skyboxes/water_skybox"
import { make_vertex } from "./GeoMisc"

const canvas = document.querySelector('#gameCanvas')
const SCREEN_WIDTH = canvas.width / 2
const SCREEN_HEIGHT = canvas.height / 2
const SKYBOX_WIDTH = SCREEN_WIDTH * 4
const SKYBOX_HEIGHT = SCREEN_HEIGHT * 4
const SKYBOX_TILE_WIDTH = SCREEN_WIDTH / 2
const SKYBOX_TILE_HEGIHT = SCREEN_HEIGHT / 2
const SKYBOX_COLS = 10
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT

class SkyBox {
    constructor() {
        this.sSkyBoxInfo = {
            yaw: 0, pitch: 0, scaledX: 0, scaledY: 0, upperLeftTile: 0
        }

        this.sSkyboxTextures = [
            water_skybox_ptrlist,
/*            bitfs_skybox_ptrlist,
            wdw_skybox_ptrlist,
            cloud_floor_skybox_ptrlist,
            ccm_skybox_ptrlist,
            ssl_skybox_ptrlist,
            bbh_skybox_ptrlist,
            bidw_skybox_ptrlist,
            clouds_skybox_ptrlist,
            bits_skybox_ptrlist,*/
        ]

        this.sSkyboxColors = [
            [0x50, 0x64, 0x5A],
            [0xFF, 0xFF, 0xFF]
        ]
    }

    calculate_skybox_scaled_x(fov) {
        const yaw = this.sSkyBoxInfo.yaw
        const yawScaled = SCREEN_WIDTH * 360.0 * yaw / (fov * 65536.0)
        let scaledX = Math.floor(yawScaled + 0.5)

        if (scaledX > SKYBOX_WIDTH) {
            throw "sky box width"
            scaledX -= (scaledX / SKYBOX_WIDTH * SKYBOX_WIDTH)
        }

        return SKYBOX_WIDTH - scaledX
    }

    calculate_skybox_scaled_y() {
        const pitchInDegrees = this.sSkyBoxInfo.pitch * 360.0 / 65535.0
        const degreesToScale = 360 * pitchInDegrees / 90
        const roundedY = Math.floor(degreesToScale)

        let scaledY = roundedY + 5 * SKYBOX_TILE_HEGIHT

        if (scaledY > SKYBOX_HEIGHT) scaledY = SKYBOX_HEIGHT
        if (scaledY < SCREEN_HEIGHT) scaledY = SCREEN_HEIGHT

        return scaledY
    }

    get_top_left_tile_idx() {
        const tileCol = Math.floor(this.sSkyBoxInfo.scaledX / SKYBOX_TILE_WIDTH)
        const tileRow = Math.floor((SKYBOX_HEIGHT - this.sSkyBoxInfo.scaledY) / SKYBOX_TILE_HEGIHT)

        return tileRow * SKYBOX_COLS + tileCol
    }

    create_skybox_ortho_matrix() {
        let left = this.sSkyBoxInfo.scaledX
        let right = this.sSkyBoxInfo.scaledX + SCREEN_WIDTH
        let top = this.sSkyBoxInfo.scaledY
        let bottom = this.sSkyBoxInfo.scaledY - SCREEN_HEIGHT

        const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))

        const half_width = (4.0 / 3.0) / ASPECT_RATIO * SCREEN_WIDTH / 2
        const center = (this.sSkyBoxInfo.scaledX + SCREEN_WIDTH / 2)
        if (half_width < SCREEN_WIDTH / 2) {
            throw "wide screen - create_skybox_ortho_matrix"
        }

        guOrtho(mtx, left, right, bottom, top, 0.0, 3.0, 1.0)

        return mtx
    }

    make_skybox_rect(tileIndex, colorIndex) {
        const verts = new Array(4)

        let x = tileIndex % SKYBOX_COLS * SKYBOX_TILE_WIDTH
        let y = SKYBOX_HEIGHT - Math.floor(tileIndex / SKYBOX_COLS) * SKYBOX_TILE_HEGIHT

        make_vertex(verts, 0, x, y, -1, 0, 0, this.sSkyboxColors[colorIndex][0], this.sSkyboxColors[colorIndex][1], this.sSkyboxColors[colorIndex][2], 255)
        make_vertex(verts, 1, x, y - SKYBOX_TILE_HEGIHT, -1, 0, 31 << 5, this.sSkyboxColors[colorIndex][0], this.sSkyboxColors[colorIndex][1], this.sSkyboxColors[colorIndex][2], 255)
        make_vertex(verts, 2, x + SKYBOX_TILE_WIDTH, y - SKYBOX_TILE_HEGIHT, -1, 31 << 5, 31 << 5, this.sSkyboxColors[colorIndex][0], this.sSkyboxColors[colorIndex][1], this.sSkyboxColors[colorIndex][2], 255)
        make_vertex(verts, 3, x + SKYBOX_TILE_WIDTH, y, -1, 31 << 5, 0, this.sSkyboxColors[colorIndex][0], this.sSkyboxColors[colorIndex][1], this.sSkyboxColors[colorIndex][2], 255)

        return verts
    }

    draw_skybox_tile_grid(dlist, background, colorIndex) {

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const tileIndex = this.sSkyBoxInfo.upperLeftTile + row * SKYBOX_COLS + col
                const texture = this.sSkyboxTextures[background][tileIndex]
                const vertices = this.make_skybox_rect(tileIndex, colorIndex)

                Gbi.gDPLoadBlockTexture(dlist, 32, 32, Gbi.G_IM_FMT_RGBA, texture)
                Gbi.gSPVertex(dlist, vertices, 4, 0)
                Gbi.gSPDisplayList(dlist, dl_draw_quad_verts_0123)
            }
        }
    }

    init_skybox_display_list(background, colorIndex) {
        const dlist = []

        const ortho = this.create_skybox_ortho_matrix()

        Gbi.gSPDisplayList(dlist, dl_skybox_begin)
        Gbi.gSPMatrix(dlist, ortho, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)
        Gbi.gSPDisplayList(dlist, dl_skybox_tile_tex_settings)
        this.draw_skybox_tile_grid(dlist, background, colorIndex)
        Gbi.gSPDisplayList(dlist, dl_skybox_end)
        Gbi.gSPEndDisplayList(dlist)

        return dlist
    }

    create_skybox_facing_camera(player, background, fov, posX, posY, posZ, focX, focY, focZ) {
        const cameraFaceX = focX - posX
        const cameraFaceY = focY - posY
        const cameraFaceZ = focZ - posZ
        let colorIndex = 1

        fov = 90.0
        this.sSkyBoxInfo.yaw = atan2s(cameraFaceZ, cameraFaceX)
        if (this.sSkyBoxInfo.yaw < 0) this.sSkyBoxInfo.yaw += 65536
        this.sSkyBoxInfo.pitch = atan2s(Math.sqrt(cameraFaceX * cameraFaceX + cameraFaceZ * cameraFaceZ), cameraFaceY)

        this.sSkyBoxInfo.scaledX = this.calculate_skybox_scaled_x(fov)
        this.sSkyBoxInfo.scaledY = this.calculate_skybox_scaled_y()

        this.sSkyBoxInfo.upperLeftTile = this.get_top_left_tile_idx()

        return this.init_skybox_display_list(background, colorIndex)
    }
}

export const SkyboxInstance = new SkyBox()