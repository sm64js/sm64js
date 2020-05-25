import { WebGLInstance as WebGL } from "./WebGL"
import * as Gbi from "../include/gbi"

const precomp_shaders = [
    0x01200200,
    0x00000045,
    0x00000200,
    0x01200a00,
    0x00000a00,
    0x01a00045,
    0x00000551,
    0x01045045,
    0x05a00a00,
    0x01200045,
    0x05045045,
    0x01045a00,
    0x01a00a00,
    0x0000038d,
    0x01081081,
    0x0120038d,
    0x03200045,
    0x03200a00,
    0x01a00a6f,
    0x01141045,
    0x07a00a00,
    0x05200200,
    0x03200200
]

const MAX_BUFFERED = 256
const MAX_LIGHTS = 2
const MAX_VERTICES = 64

export class n64GfxProcessor {
    constructor() {

        //buffer
        this.buf_vbo = new Array(MAX_BUFFERED * 26 * 3).fill(0.0) // 3 vertices in a triangle and 26 floats per vtx
        this.buf_vbo_len = 0
        this.buf_vbo_num_tris = 0

        //RSP
        this.rsp = {
            modelview_matrix_stack: new Array(11).fill(0).map(() => new Array(4).fill(0).map(() => new Array(4).fill(0))),
            modelview_matrix_stack_size: 0,
            MP_matrix: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            P_matrix: new Array(4).fill(0).map(() => new Array(4).fill(0)),
            current_lights: new Array(MAX_LIGHTS + 1).fill(0).map(() => ({
                col: [0, 0, 0],
                pad1: 0,
                colc: [0, 0, 0],
                pad2: 0,
                dir: [0, 0, 0],
                pad3: 0
            })),
            current_lights_coeffs: new Array(MAX_LIGHTS).fill(0).map(() => new Array(3).fill(0.0)),
            current_lookat_coeffs: new Array(2).fill(0).map(() => new Array(3).fill(0.0)),
            current_num_lights: 0,
            lights_changed: false,
            geometry_mode: 0,
            fog_mul: 0,
            fog_offset: 0,
            texture_scaling_factor: { s: 0, t: 0 },
            loaded_vertices: new Array(MAX_VERTICES + 4).fill(0).map(() => ({
                x: 0.0, y: 0.0, z: 0.0, w: 0.0, u: 0.0, v: 0.0,
                color: { r: 0, g: 0, b: 0, a: 0 },
                clip_rej: 0
            }))
        }

        //RDP
        this.rdp = {
            palette: [],
            texture_to_load: { textureData: null, tile_number: 0 },
            loaded_texture: [{ textureData: null }, { textureData: null }],
            texture_tile: { fmt: 0, siz: 0, cms: 0, cmt: 0, uls: 0, ult: 0, lrs: 0, lrt: 0, line_size: 0 },
            textures_changed: [false, false],
            other_mode_l: 0, other_mode_h: 0,
            combine_mode: 0,
            env_color: { r: 0, g: 0, b: 0, a: 0 },
            prim_color: { r: 0, g: 0, b: 0, a: 0 },
            fog_color: { r: 0, g: 0, b: 0, a: 0 },
            fill_color: { r: 0, g: 0, b: 0, a: 0 },
            viewport: { x: 0, y: 0, width: 0, height: 0 },
            scissor: { x: 0, y: 0, width: 0, height: 0 },
            viewport_or_scissor_changed: false,
            z_buf_address: null,
            color_image_address: null
        }

        this.rendering_state = {
            depth_test: false,
            depth_mask: false,
            decal_mode: false,
            alpha_blend: false,
            viewport: {
                x: 0, y: 0, width: 0, height: 0
            },
            scissor: {
                x: 0, y: 0, width: 0, height: 0
            },
            shader_program: null,
            textures: [null, null]
        }

        /// create opengl shaders
        precomp_shaders.forEach(shader_id => {
            WebGL.lookup_or_create_shader_program(shader_id)
        })
    }

    start_frame(){
        /// handle input
        /// handle dimensions
    }

    end_frame() { }

    sp_reset() {
        this.rsp.modelview_matrix_stack_size = 1
        this.rsp.current_num_lights = 2
        this.rsp.lights_changed = true
    }

    matrix_mul(res, a, b) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                res[i][j] = a[i][0] * b[0][j] +
                            a[i][1] * b[1][j] +
                            a[i][2] * b[2][j] +
                            a[i][3] * b[3][j]
            }
        }
    }

    sp_matrix(parameters, matrix) {
        if (parameters & Gbi.G_MTX_PROJECTION) {
            if (parameters & Gbi.G_MTX_LOAD) {
                this.rsp.P_matrix = matrix
            } else {
                this.matrix_mul(this.rsp.P_matrix, matrix, this.rsp.P_matrix)
            }
        } else { // G_MTX_MODELVIEW
            if ((parameters & Gbi.G_MTX_PUSH) && this.rsp.modelview_matrix_stack_size < 11) {
                this.rsp.modelview_matrix_stack_size++
                this.rsp.modelview_matrix_stack[this.rsp.modelview_matrix_stack_size - 1] = this.rsp.modelview_matrix_stack[this.rsp.modelview_matrix_stack_size - 2]
            }
            if (parameters & Gbi.G_MTX_LOAD) {
                this.rsp.modelview_matrix_stack[this.rsp.modelview_matrix_stack_size - 1] = matrix
            } else {
                this.matrix_mul(
                    this.rsp.modelview_matrix_stack[this.rsp.modelview_matrix_stack_size - 1],
                    matrix,
                    this.rsp.modelview_matrix_stack[this.rsp.modelview_matrix_stack_size - 1]
                )
            }
            this.rsp.lights_changed = true
        }
        this.matrix_mul(
            this.rsp.MP_matrix,
            this.rsp.modelview_matrix_stack[this.rsp.modelview_matrix_stack_size - 1],
            this.rsp.P_matrix
        )
    }

    sp_geometry_mode(clear, set) {
        this.rsp.geometry_mode &= ~clear
        this.rsp.geometry_mode |= set
    }

    scale_5_8(val) {
        return ((val) * 0xFF) / 0x1F
    }

    dp_set_fill_color(color) {
        this.rdp.fill_color.r = parseInt(this.scale_5_8(color >> 11))
        this.rdp.fill_color.g = parseInt(this.scale_5_8((color >> 6) & 0x1f))
        this.rdp.fill_color.b = parseInt(this.scale_5_8((color >> 1) & 0x1f))
        this.rdp.fill_color.a = (color & 1) * 255
    }

    color_comb_component(v) {
        switch (v) {
            case Gbi.G_CCMUX_TEXEL0:
                return Gbi.CC_TEXEL0
            case Gbi.G_CCMUX_TEXEL1:
                return Gbi.CC_TEXEL1
            case Gbi.G_CCMUX_PRIMITIVE:
                return Gbi.CC_PRIM
            case Gbi.G_CCMUX_SHADE:
                return Gbi.CC_SHADE
            case Gbi.G_CCMUX_ENVIRONMENT:
                return Gbi.CC_ENV
            case Gbi.G_CCMUX_TEXEL0_ALPHA:
                return Gbi.CC_TEXEL0A
            case Gbi.G_CCMUX_LOD_FRACTION:
                return Gbi.CC_LOD
            default:
                return Gbi.CC_0
        }
    }

    color_comb(a, b, c, d) {
        return this.color_comb_component(a) |
            (this.color_comb_component(b) << 3) |
            (this.color_comb_component(c) << 6) |
            (this.color_comb_component(d) << 9)
    }

    dp_set_combine_mode(rgb, alpha) {
        this.rdp.combine_mode = rgb | (alpha << 12)
    }

    viewportsEqual(vp1, vp2) {
        return vp1.x == vp2.x && vp1.y == vp2.y && vp1.width == vp2.width && vp1.height == vp2.height
    }

    sp_tri1(vtx1_idx, vtx2_idx, vtx3_idx) {
        const v1 = this.rsp.loaded_vertices[vtx1_idx]
        const v2 = this.rsp.loaded_vertices[vtx2_idx]
        const v3 = this.rsp.loaded_vertices[vtx3_idx]

        if (v1.clip_rej & v2.clip_rej & v3.clip_rej) return

        if ((this.rsp.geometry_mode & Gbi.G_CULL_BOTH) != 0) {
            throw "not implemented section in sp_tri1"
        }

        const depth_test = (this.rsp.geometry_mode & Gbi.G_ZBUFFER) == Gbi.G_ZBUFFER
        if (depth_test != this.rendering_state.depth_test) {
            this.flush()
            WebGL.set_depth_test(depth_test)
            this.rendering_state.depth_test = depth_test
        }

        const z_upd = (this.rdp.other_mode_l & Gbi.Z_UPD) == Gbi.Z_UPD
        if (z_upd != this.rendering_state.depth_mask) {
            this.flush()
            WebGL.set_depth_mask(z_upd)
            this.rendering_state.depth_mask = z_upd
        }

        const zmode_decal = (this.rdp.other_mode_l & Gbi.ZMODE_DEC) == Gbi.ZMODE_DEC
        if (zmode_decal != this.rendering_state.decal_mode) {
            this.flush()
            WebGL.set_zmode_decal(zmode_decal)
            this.rendering_state.decal_mode = zmode_decal
        }

        if (this.rdp.viewport_or_scissor_changed) {
            if (!this.viewportsEqual(this.rdp.viewport, this.rendering_state.viewport)) {
                this.flush()
                WebGL.set_viewport(this.rdp.viewport)
                this.rendering_state.viewport = this.rdp.viewport
            }
            if (!this.viewportsEqual(this.rdp.scissor, this.rendering_state.scissor)) {
                this.flush()
                WebGL.set_scissor(this.rdp.scissor)
                this.rendering_state.scissor = this.rdp.scissor
            }
            this.rdp.viewport_or_scissor_changed = false
        }



    }

    draw_rectangle(ulx, uly, lrx, lry) {
        const saved_other_mode_h = this.rdp.other_mode_h
        const cycle_type = (this.rdp.other_mode_h & (3 << Gbi.G_MDSFT_CYCLETYPE))

        if (cycle_type == Gbi.G_CYC_COPY) {
            this.rdp.other_mode_h = (this.rdp.other_mode_h & ~(3 << Gbi.G_MDSFT_TEXTFILT)) | Gbi.G_TF_POINT
        }

        ulx = (ulx / (WebGL.canvas.width / 2.0)) - 1.0
        uly = -(uly / (WebGL.canvas.height / 2.0)) + 1.0
        lrx = (lrx / (WebGL.canvas.width / 2.0)) - 1.0
        lry = -(lry / (WebGL.canvas.height / 2.0)) + 1.0

        const ul = this.rsp.loaded_vertices[MAX_VERTICES + 0]
        const ll = this.rsp.loaded_vertices[MAX_VERTICES + 1]
        const lr = this.rsp.loaded_vertices[MAX_VERTICES + 2]
        const ur = this.rsp.loaded_vertices[MAX_VERTICES + 3]

        ul.x = ulx
        ul.y = uly
        ul.z = -1.0
        ul.w = 1.0

        ll.x = ulx
        ll.y = lry
        ll.z = -1.0
        ll.w = 1.0

        lr.x = lrx
        lr.y = lry
        lr.z = -1.0
        lr.w = 1.0

        ur.x = lrx
        ur.y = uly
        ur.z = -1.0
        ur.w = 1.0

        const default_viewport = { x: 0, y: 0, width: WebGL.canvas.width, height: WebGL.canvas.height }
        const viewport_saved = this.rdp.viewport
        const geometry_mode_saved = this.rsp.geometry_mode

        this.rdp.viewport = default_viewport
        this.rdp.viewport_or_scissor_changed = true
        this.rsp.geometry_mode = 0

        this.sp_tri1(MAX_VERTICES + 0, MAX_VERTICES + 1, MAX_VERTICES + 3)
        this.sp_tri1(MAX_VERTICES + 1, MAX_VERTICES + 2, MAX_VERTICES + 3)

        this.rsp.geometry_mode = geometry_mode_saved
        this.rdp.viewport = viewport_saved
        this.rdp.viewport_or_scissor_changed = true

        if (cycle_type == Gbi.G_CYC_COPY) {
            this.rdp.other_mode_h = saved_other_mode_h
        }

    } 

    dp_fill_rectangle(ulx, uly, lrx, lry) {

        if (this.rdp.color_image_address == this.rdp.z_buf_address) {
            //return 
        }

        const mode = this.rdp.other_mode_h & (3 << Gbi.G_MDSFT_CYCLETYPE)

        if (mode == Gbi.G_CYC_COPY || mode == Gbi.G_CYC_FILL) {
            // Per documentation one extra pixel is added in this modes to each edge
            lrx += 1 
            lry += 1 
        }

        for (let i = MAX_VERTICES; i < MAX_VERTICES + 4; i++) {
            const v = this.rsp.loaded_vertices[i]
            v.color = this.rdp.fill_color
        }

        const saved_combine_mode = this.rdp.combine_mode
        this.dp_set_combine_mode(this.color_comb(0, 0, 0, Gbi.G_CCMUX_SHADE), this.color_comb(0, 0, 0, Gbi.G_CCMUX_SHADE))
        this.draw_rectangle(ulx, uly, lrx, lry)
        this.rdp.combine_mode = saved_combine_mode

    }

    run_dl(commands) {
        /// Here We Go
        for (const command of commands) {
            const opcode = command.words.w0
            const args = command.words.w1

            console.log(command)

            switch (opcode) {
                case Gbi.G_ENDDL: /// not necessary for JS
                    break
                case Gbi.G_MTX:
                    this.sp_matrix(args.parameters, args.matrix)
                    break
                case Gbi.G_SETGEOMETRYMODE:
                    this.sp_geometry_mode(0, args.mode)
                    break
                case Gbi.G_CLEARGEOMETRYMODE:
                    this.sp_geometry_mode(args.mode, 0)
                    break
                case Gbi.G_SETFILLCOLOR:
                    this.dp_set_fill_color(args.color)
                    break
                case Gbi.G_FILLRECT:
                    this.dp_fill_rectangle(args.ulx, args.uly, args.lrx, args.lry)
                    break
                case Gbi.G_DL:
                    this.run_dl(args.childDisplayList)
                    break
            }

        }
    }

    flush() {
        if (this.buf_vbo_len > 0) {
            WebGL.draw_triangles(this.buf_vbo, this.buf_vbo_len, this.buf_vbo_num_tris)
            this.buf_vbo_len = 0
            this.buf_vbo_num_tris = 0
        }
    }

    run(commands) {
        this.sp_reset()

        WebGL.start_frame()
        this.run_dl(commands)
        this.flush()
    }
}

export const n64GfxProcessorInstance = new n64GfxProcessor()