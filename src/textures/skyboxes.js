export const bbh_skybox_texture = []
export const bidw_skybox_texture = []
export const bitfs_skybox_texture = []
export const bits_skybox_texture = []
export const ccm_skybox_texture = []
export const cloud_floor_skybox_texture = []
export const clouds_skybox_texture = []
export const ssl_skybox_texture = []
export const water_skybox_texture = []
export const wdw_skybox_texture = []

export const bbh_skybox_ptrlist = []
export const bidw_skybox_ptrlist = []
export const bitfs_skybox_ptrlist = []
export const bits_skybox_ptrlist = []
export const ccm_skybox_ptrlist = []
export const cloud_floor_skybox_ptrlist = []
export const clouds_skybox_ptrlist = []
export const ssl_skybox_ptrlist = []
export const water_skybox_ptrlist = []
export const wdw_skybox_ptrlist = []

const tiling = [
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x00, 0x01,
    0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x08, 0x09,
    0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x10, 0x11,
    0x18, 0x19, 0x1A, 0x1B, 0x1C, 0x1D, 0x1E, 0x1F, 0x18, 0x19,
    0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x20, 0x21,
    0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x28, 0x29,
    0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x30, 0x31,
    0x38, 0x39, 0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F, 0x38, 0x39
]

const skyboxes = [
    [bbh_skybox_texture,         bbh_skybox_ptrlist],
    [bidw_skybox_texture,        bidw_skybox_ptrlist],
    [bitfs_skybox_texture,       bitfs_skybox_ptrlist],
    [bits_skybox_texture,        bits_skybox_ptrlist],
    [ccm_skybox_texture,         ccm_skybox_ptrlist],
    [cloud_floor_skybox_texture, cloud_floor_skybox_ptrlist],
    [clouds_skybox_texture,      clouds_skybox_ptrlist],
    [ssl_skybox_texture,         ssl_skybox_ptrlist],
    [water_skybox_texture,       water_skybox_ptrlist],
    [wdw_skybox_texture,         wdw_skybox_ptrlist],
]

// preset textures to empty arrays
// and fill in ptrlists with tiling
for (let s = 0; s < skyboxes.length; ++s) {
    let t = skyboxes[s][0], p = skyboxes[s][1], i
    for (i = 0; i < 64; ++i) {
        t[i] = []
    }
    for (i = 0; i < 80; ++i) {
        p[i] = t[tiling[i]]
    }
}
