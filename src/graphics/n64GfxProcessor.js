import { WebGLInstance as WebGL } from "./WebGL"

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
            z_buf_address: null,
            color_image_address: null
        }

        /// create opengl shaders
        precomp_shaders.forEach(shader_id => {
            WebGL.gfx_lookup_or_create_shader_program(shader_id)
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

    run_dl(commands) {
        /// Here We Go
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