export const VIEW_2_COL_BUF = 0x000008
export const VIEW_ALLOC_ZBUF = 0x000010
export const VIEW_SAVE_TO_GLOBAL = 0x000040
export const VIEW_DEFAULT_PARENT = 0x000100
export const VIEW_BORDERED = 0x000400
export const VIEW_UPDATE = 0x000800
export const VIEW_UNK_1000 = 0x001000 // used in setup_view_buffers
export const VIEW_UNK_2000 = 0x002000 // only see together with 0x4000
export const VIEW_UNK_4000 = 0x004000
export const VIEW_COLOUR_BUF = 0x008000
export const VIEW_Z_BUF = 0x010000
export const VIEW_1_CYCLE = 0x020000
export const VIEW_MOVEMENT = 0x040000
export const VIEW_DRAW = 0x080000
export const VIEW_WAS_UPDATED = 0x100000
export const VIEW_LIGHT = 0x20000

export const OBJ_TYPE_GROUPS = 0x00000001
export const OBJ_TYPE_BONES = 0x00000002
export const OBJ_TYPE_JOINTS = 0x00000004
export const OBJ_TYPE_PARTICLES = 0x00000008
export const OBJ_TYPE_SHAPES = 0x00000010
export const OBJ_TYPE_NETS = 0x00000020
export const OBJ_TYPE_PLANES = 0x00000040
export const OBJ_TYPE_FACES = 0x00000080
export const OBJ_TYPE_VERTICES = 0x00000100
export const OBJ_TYPE_CAMERAS = 0x00000200
// 0x400 was not used
export const OBJ_TYPE_MATERIALS = 0x00000800
export const OBJ_TYPE_WEIGHTS = 0x00001000
export const OBJ_TYPE_GADGETS = 0x00002000
export const OBJ_TYPE_VIEWS = 0x00004000
export const OBJ_TYPE_LABELS = 0x00008000
export const OBJ_TYPE_ANIMATORS = 0x00010000
export const OBJ_TYPE_VALPTRS = 0x00020000
// 0x40000 was not used
export const OBJ_TYPE_LIGHTS = 0x00080000
export const OBJ_TYPE_ZONES = 0x00100000
export const OBJ_TYPE_UNK200000 = 0x00200000

export const OBJ_TYPE_ALL = 0x00FFFFFF