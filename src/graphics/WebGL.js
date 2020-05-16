const SHADER_OPT_ALPHA = (1 << 24)
const SHADER_OPT_FOG = (1 << 25)
const SHADER_OPT_TEXTURE_EDGE = (1 << 26)

const SHADER_0 = 0
const SHADER_INPUT_1 = 1
const SHADER_INPUT_2 = 2
const SHADER_INPUT_3 = 3
const SHADER_INPUT_4 = 4
const SHADER_TEXEL0 = 5
const SHADER_TEXEL0A = 6
const SHADER_TEXEL1 = 7

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

export class WebGL {

    constructor(canvas) {
        this.canvas = canvas
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
            textures: [
                {
                    next: null,
                    texture_addr: 0,
                    fmt: 0,
                    siz: 0,
                    texture_id: 0,
                    cms: 0,
                    cmt: 0,
                    linear_filter: false
                },
                {
                    next: null,
                    texture_addr: 0,
                    fmt: 0,
                    siz: 0,
                    texture_id: 0,
                    cms: 0,
                    cmt: 0,
                    linear_filter: false
                }
            ]
        }
        this.shader_program_pool = []

        // Initialize the GL context
        this.gl = this.canvas.getContext("webgl")

        // Only continue if WebGL is available and working
        if (this.gl === null) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.")
        }

        // Set clear color to black, fully opaque
        this.gl.clearColor(1.0, 0.0, 0.0, 1.0)
        // Clear the color buffer with specified clear color
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)

        //gfx_opengl_init
        const buffer = this.gl.createBuffer()
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer)
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        precomp_shaders.forEach(shader_id => {
            this.gfx_lookup_or_create_shader_program(shader_id)
        })

    }

    append_line(buf, vs_len, str) {
        let str_index = 0
        while (str_index < str.length) {
            buf[vs_len.value++] = str[str_index++]
        }
        buf[vs_len.value++] = '\n'
    }

    create_and_load_new_shader(shader_id) {
        const c = new Array(2).fill(0).map(() => new Array(4).fill(0))
        for (let i = 0; i < 4; i++) {
            c[0][i] = (shader_id >> (i * 3)) & 7
            c[1][i] = (shader_id >> (12 + i * 3)) & 7
        }
        let opt_alpha = (shader_id & SHADER_OPT_ALPHA) != 0
        let opt_fog = (shader_id & SHADER_OPT_FOG) != 0
        let opt_texture_edge = (shader_id & SHADER_OPT_TEXTURE_EDGE) != 0
        let used_textures = [ 0, 0 ]
        let num_inputs = 0

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                if (c[i][j] >= SHADER_INPUT_1 && c[i][j] <= SHADER_INPUT_4) {
                    if (c[i][j] > num_inputs) {
                        num_inputs = c[i][j]
                    }
                }
                if (c[i][j] == SHADER_TEXEL0 || c[i][j] == SHADER_TEXEL0A) {
                    used_textures[0] = true
                }
                if (c[i][j] == SHADER_TEXEL1) {
                    used_textures[1] = true
                }
            }
        }
        let do_single = [ c[0][2] == 0, c[1][2] == 0 ]
        let do_multiply = [ c[0][1] == 0 && c[0][3] == 0, c[1][1] == 0 && c[1][3] == 0 ]
        let do_mix = [ c[0][1] == c[0][3], c[1][1] == c[1][3] ]
        let color_alpha_same = (shader_id & 0xfff) == ((shader_id >> 12) & 0xfff)

        const vs_buf = Array(1024).fill(0)
        const fs_buf = Array(1024).fill(0)
        let vs_len = { value: 0 }
        let fs_len = 0
        let num_floats = 4

        // Vertex Shader
        this.append_line(vs_buf, vs_len, "#version 100")
        this.append_line(vs_buf, vs_len, "attribute vec4 aVtxPos;")
    }

    gfx_lookup_or_create_shader_program(shader_id) {
        let shaderProgram = this.lookup_shader(shader_id)
        if (!shaderProgram) {
            this.unload_shader(this.rendering_state.shader_program)
            shaderProgram = this.create_and_load_new_shader(shader_id)
            this.rendering_state.shader_program = shaderProgram
        }
    }

    lookup_shader(shader_id) {
        return this.shader_program_pool.find(x => x.shader_id == shader_id)
    }

    unload_shader(old_prg) {
        if (old_prg) {
            old_prg.attrib_locations.forEach(attrib_index => {
                this.gl.disableVertexAttribArray(attrib_index);
            })
        }
    }

    static printAbc() {
        console.log("abcdefg");
    }

}
