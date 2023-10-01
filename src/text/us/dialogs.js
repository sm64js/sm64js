// Parameters: dialog enum ID, (unused), lines per box, left offset, width

const DEFINE_DIALOG = (id, unused, linesPerBox, leftOffset, width, str) => {
    return {id: id, str: str, linesPerBox: linesPerBox, leftOffset: leftOffset, width: width}
}

export const DIALOG_NONE = -1

export const DIALOG_000 = DEFINE_DIALOG(0, 1, 6, 30, 200,
[
    0x20,0x32,0x3A,0xF2,0x9E,0x22,0x32,0x38,0x3E,0x35,0x28,0x9E,0x36,0x30,0x24,0x26,0x2E,0x9E,0x2C,0x31,0x9E,0xD1,
    0xFE,0x30,0x2C,0x27,0x27,0x2F,0x28,0x9E,0x32,0x29,0x9E,0xD1,0x9E,0x25,0x24,0x37,0x37,0x2F,0x28,0x29,0x2C,0x28,
    0x2F,0x27,0x3F,0xFE,0x22,0x32,0x38,0x3E,0x2F,0x2F,0x9E,0x29,0x2C,0x31,0x27,0x9E,0xD1,0x9E,0x19,0x32,0x3A,0x28,
    0x35,0xFE,0x1C,0x37,0x24,0x35,0x36,0x9E,0x37,0x2B,0x24,0x37,0x9E,0x0B,0x32,0x3A,0x36,0x28,0x35,0x9E,0x36,0x37,
    0x32,0x2F,0x28,0xFE,0x2C,0x31,0x36,0x2C,0x27,0x28,0x9E,0xD1,0x9E,0x33,0x24,0x2C,0x31,0x37,0x2C,0x31,0x2A,0xFE,
    0x3A,0x32,0x35,0x2F,0x27,0x36,0x3F,0xFE,0x0F,0x2C,0x35,0x36,0x37,0x6F,0x9E,0x37,0x24,0x2F,0x2E,0x9E,0x37,0x32,
    0x9E,0xD1,0xFE,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x9E,0x0B,0x38,0x27,0x27,0x3C,0x3F,0x9E,0xE1,0x19,0x35,0x28,
    0x36,0x36,0x9E,0x55,0xFE,0x37,0x32,0x9E,0x37,0x24,0x2F,0x2E,0x3F,0xE3,0x9E,0x11,0x28,0x3E,0x2F,0x2F,0x9E,0x26,
    0x28,0x35,0x37,0x24,0x2C,0x31,0x2F,0x3C,0xFE,0x2B,0x28,0x2F,0x33,0x9E,0xD2,0x9E,0x32,0x38,0x37,0x6F,0x9E,0x24,
    0x31,0x27,0x9E,0x36,0x32,0x9E,0x3A,0x2C,0x2F,0x2F,0xFE,0x2B,0x2C,0x36,0x9E,0x26,0x32,0x30,0x35,0x24,0x27,0x28,
    0x36,0x9E,0x2C,0x31,0x9E,0x32,0xD1,0x35,0xFE,0x24,0x35,0x28,0x24,0x36,0x3F,0xFE,0x1D,0x32,0x9E,0x35,0x28,0x24,
    0x27,0x9E,0x36,0x2C,0x2A,0x31,0x36,0x6F,0x9E,0x36,0x37,0x32,0x33,0x6F,0x9E,0x29,0x24,0x26,0x28,0xFE,0xD1,0x30,
    0x9E,0x24,0x31,0x27,0x9E,0x33,0x35,0x28,0x36,0x36,0x9E,0x55,0x3F,0x9E,0x19,0x35,0x28,0x36,0x36,0x9E,0x54,0xFE,
    0x32,0x35,0x9E,0x55,0x9E,0x37,0x32,0x9E,0x36,0x26,0x35,0x32,0x2F,0x2F,0x9E,0x24,0x2B,0x28,0x24,0x27,0x3F,0x9E,
    0x22,0x32,0x38,0xFE,0x26,0x24,0x31,0x9E,0x37,0x24,0x2F,0x2E,0x9E,0x37,0x32,0x9E,0x36,0x32,0x30,0x28,0x9E,0x32,
    0xD1,0x35,0xFE,0x26,0x2B,0x24,0x35,0x24,0x26,0x37,0x28,0x35,0x36,0x9E,0x25,0x3C,0x9E,0x29,0x24,0x26,0x2C,0x31,
    0x2A,0x9E,0xD1,0x30,0xFE,0x24,0x31,0x27,0x9E,0x33,0x35,0x28,0x36,0x36,0x2C,0x31,0x2A,0x9E,0x55,0x3F,0xFF,
])

export const DIALOG_001 = DEFINE_DIALOG(1, 1, 4, 95, 200, 
[
    0x20,0x24,0x37,0x26,0x2B,0x9E,0x32,0x38,0x37,0xF2,0x9E,0x12,0x29,0x9E,0xD2,0x9E,0x3A,0x24,0x31,0x27,0x28,0x35,
    0xFE,0x24,0x35,0x32,0x38,0x31,0x27,0x9E,0x2B,0x28,0x35,0x28,0x6F,0x9E,0xD2,0x3E,0x35,0x28,0x9E,0x2F,0x2C,0x24,
    0x25,0x2F,0x28,0xFE,0x37,0x32,0x9E,0x25,0x28,0x9E,0x33,0x2F,0x24,0x36,0x37,0x28,0x35,0x28,0x27,0x9E,0x25,0x3C,
    0x9E,0x24,0xFE,0x3A,0x24,0x37,0x28,0x35,0x9E,0x25,0x32,0x30,0x25,0xF2,0xFE,0x1D,0x2B,0x32,0x36,0x28,0x9E,0x28,
    0x31,0x28,0x30,0x3C,0x9E,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x36,0x9E,0x2F,0x32,0x39,0x28,0xFE,0x37,0x32,0x9E,
    0x29,0x2C,0x2A,0x2B,0x37,0x6F,0x9E,0x24,0x31,0x27,0x9E,0xD1,0x3C,0x3E,0x35,0x28,0xFE,0x24,0x2F,0x3A,0x24,0x3C,
    0x36,0x9E,0x29,0x2C,0x31,0x27,0x2C,0x31,0x2A,0x9E,0x3A,0x24,0x3C,0x36,0x9E,0x37,0x32,0xFE,0x24,0x37,0x37,0x24,
    0x26,0x2E,0x3F,0xFE,0x1D,0x2B,0x2C,0x36,0x9E,0x30,0x28,0x24,0x27,0x32,0x3A,0x9E,0x2B,0x24,0x36,0x9E,0x25,0x28,
    0x26,0x32,0x30,0x28,0xFE,0x24,0x9E,0x25,0x24,0x37,0x37,0x2F,0x28,0x29,0x2C,0x28,0x2F,0x27,0x9E,0x28,0x39,0x28,
    0x35,0x9E,0x36,0x2C,0x31,0x26,0x28,0xFE,0xD1,0x9E,0x0B,0x2C,0x2A,0x9E,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x9E,
    0x2A,0x32,0x37,0x9E,0x2B,0x2C,0x36,0xFE,0x33,0x24,0x3A,0x36,0x9E,0x32,0x31,0x9E,0xD1,0x9E,0x19,0x32,0x3A,0x28,
    0x35,0x9E,0x1C,0x37,0x24,0x35,0x3F,0xFE,0x0C,0x24,0x31,0x9E,0xD2,0x9E,0x35,0x28,0x26,0x32,0x39,0x28,0x35,0x9E,
    0xD1,0x9E,0x1C,0x37,0x24,0x35,0xFE,0x29,0x32,0x35,0x9E,0x38,0x36,0xF4,0x9E,0x0C,0x35,0x32,0x36,0x36,0x9E,0xD1,
    0x9E,0x25,0x35,0x2C,0x27,0x2A,0x28,0xFE,0x24,0x31,0x27,0x9E,0x2A,0x32,0x9E,0x2F,0x28,0x29,0x37,0x9E,0x38,0x33,
    0x9E,0xD1,0x9E,0x33,0x24,0x37,0x2B,0xFE,0x37,0x32,0x9E,0x29,0x2C,0x31,0x27,0x9E,0xD1,0x9E,0x0B,0x2C,0x2A,0x9E,
    0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x3F,0xFE,0x19,0x2F,0x28,0x24,0x36,0x28,0x9E,0x26,0x32,0x30,0x28,0x9E,0x25,
    0x24,0x26,0x2E,0x9E,0x37,0x32,0x9E,0x36,0x28,0x28,0xFE,0x30,0x28,0x9E,0x24,0x29,0x37,0x28,0x35,0x9E,0xD2,0x3E,
    0x39,0x28,0x9E,0x35,0x28,0x37,0x35,0x2C,0x28,0x39,0x28,0x27,0xFE,0xD1,0x9E,0x19,0x32,0x3A,0x28,0x35,0x9E,0x1C,
    0x37,0x24,0x35,0xF2,0xFF,
])

export const DIALOG_002 = DEFINE_DIALOG(2, 1, 4, 95, 200, 
[
    0x11,0x28,0x3C,0x6F,0x9E,0xD2,0xF2,0x9E,0x12,0x37,0x3E,0x36,0x9E,0x27,0x24,0x31,0x2A,0x28,0x35,0x32,
    0x38,0x36,0xFE,0x24,0x2B,0x28,0x24,0x27,0x6F,0x9E,0x36,0x32,0x9E,0x2F,0x2C,0x36,0x37,0x28,0x31,0x9E,
    0x38,0x33,0xF2,0x9E,0x1D,0x24,0x2E,0x28,0xFE,0x30,0x3C,0x9E,0x24,0x27,0x39,0x2C,0x26,0x28,0x3F,0xFE,
    0xFE,0x0C,0x35,0x32,0x36,0x36,0x9E,0xD1,0x9E,0x37,0x3A,0x32,0xFE,0x25,0x35,0x2C,0x27,0x2A,0x28,0x36,
    0x9E,0x24,0x2B,0x28,0x24,0x27,0x6F,0x9E,0xD1,0x31,0xFE,0x3A,0x24,0x37,0x26,0x2B,0x9E,0x29,0x32,0x35,
    0x9E,0x29,0x24,0x2F,0x2F,0x2C,0x31,0x2A,0xFE,0x3A,0x24,0x37,0x28,0x35,0x9E,0x25,0x32,0x30,0x25,0x36,
    0x3F,0xFE,0x1D,0x2B,0x28,0x9E,0x0B,0x2C,0x2A,0x9E,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x9E,0x24,0x37,
    0x9E,0xD1,0xFE,0x37,0x32,0x33,0x9E,0x32,0x29,0x9E,0xD1,0x9E,0x30,0x32,0x38,0x31,0x37,0x24,0x2C,0x31,
    0x9E,0x2C,0x36,0xFE,0x39,0x28,0x35,0x3C,0x9E,0x33,0x32,0x3A,0x28,0x35,0x29,0x38,0x2F,0x9F,0x9F,0x27,
    0x32,0x31,0x3E,0x37,0x9E,0x2F,0x28,0x37,0xFE,0x2B,0x2C,0x30,0x9E,0x2A,0x35,0x24,0x25,0x9E,0xD2,0xF2,
    0xFE,0x20,0x28,0x3E,0x35,0x28,0x9E,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x9E,0x0B,0x38,0x27,0x27,0x2C,
    0x28,0x36,0x6F,0xFE,0x24,0x31,0x27,0x9E,0x3A,0x28,0x3E,0x35,0x28,0x9E,0x32,0x31,0x9E,0xD2,0x35,0x9E,
    0x36,0x2C,0x27,0x28,0x3F,0xFE,0x22,0x32,0x38,0x9E,0x26,0x24,0x31,0x9E,0x37,0x24,0x2F,0x2E,0x9E,0x37,
    0x32,0x9E,0x38,0x36,0xFE,0x3A,0x2B,0x28,0x31,0x28,0x39,0x28,0x35,0x9E,0xD2,0x3E,0x27,0x9E,0x2F,0x2C,
    0x2E,0x28,0x9E,0x37,0x32,0xF2,0xFF,
])

export const DIALOG_003 = DEFINE_DIALOG(3, 1, 5, 95, 200, 
[
    0x1D,0x2B,0x24,0x31,0x2E,0x9E,0xD2,0x6F,0x9E,0x16,0x24,0x35,0x2C,0x32,0xF2,0x9E,0x1D,0x2B,0x28,0x9E,
    0x0B,0x2C,0x2A,0xFE,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x9E,0x2C,0x36,0x9E,0x31,0x32,0x37,0x2B,0x2C,
    0x31,0x2A,0x9E,0x25,0x38,0x37,0x9E,0x24,0xFE,0x25,0x2C,0x2A,0x9E,0x27,0x38,0x27,0x9E,0x31,0x32,0x3A,
    0xF2,0x9E,0x0B,0x38,0x37,0x9E,0xD1,0xFE,0x25,0x24,0x37,0x37,0x2F,0x28,0x9E,0x29,0x32,0x35,0x9E,0xD1,
    0x9E,0x26,0x24,0x36,0x37,0x2F,0x28,0x9E,0x2B,0x24,0x36,0xFE,0x2D,0x38,0x36,0x37,0x9E,0x25,0x28,0x2A,
    0x38,0x31,0x3F,0xFE,0x18,0xD1,0x35,0x9E,0x28,0x31,0x28,0x30,0x2C,0x28,0x36,0x9E,0x24,0x35,0x28,0x9E,
    0x2B,0x32,0x2F,0x27,0x2C,0x31,0x2A,0xFE,0xD1,0x9E,0x32,0xD1,0x35,0x9E,0x19,0x32,0x3A,0x28,0x35,0x9E,
    0x1C,0x37,0x24,0x35,0x36,0x3F,0x9E,0x12,0x29,0xFE,0xD2,0x9E,0x35,0x28,0x26,0x32,0x39,0x28,0x35,0x9E,
    0x30,0x32,0x35,0x28,0x9E,0x1C,0x37,0x24,0x35,0x36,0x6F,0xFE,0xD2,0x9E,0x26,0x24,0x31,0x9E,0x32,0x33,
    0x28,0x31,0x9E,0x31,0x28,0x3A,0x9E,0x27,0x32,0x32,0x35,0x36,0xFE,0x37,0x2B,0x24,0x37,0x9E,0x2F,0x28,
    0x24,0x27,0x9E,0x37,0x32,0x9E,0x31,0x28,0x3A,0x9E,0x3A,0x32,0x35,0x2F,0x27,0x36,0xF2,0xFE,0x16,0x3C,
    0x9E,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x9E,0x0B,0x38,0x27,0x27,0x2C,0x28,0x36,0x9E,0x24,0x35,0x28,
    0xFE,0x3A,0x24,0x2C,0x37,0x2C,0x31,0x2A,0x9E,0x29,0x32,0x35,0x9E,0xD2,0x3F,0x9E,0x0B,0x28,0x9E,0x36,
    0x38,0x35,0x28,0xFE,0x37,0x32,0x9E,0x37,0x24,0x2F,0x2E,0x9E,0x37,0x32,0x9E,0xD1,0x30,0x9F,0x9F,0xD1,
    0x3C,0x3E,0x2F,0x2F,0xFE,0x36,0x28,0x37,0x9E,0x38,0x33,0x9E,0x26,0x24,0x31,0x31,0x32,0x31,0x36,0x9E,
    0x29,0x32,0x35,0x9E,0xD2,0x3F,0xFF,
])

export const DIALOG_004 = DEFINE_DIALOG(4, 1, 3, 95, 200, 
[
    0x20,0x28,0x3E,0x35,0x28,0x9E,0x33,0x28,0x24,0x26,0x28,0x9F,0x2F,0x32,0x39,0x2C,0x31,0x2A,0xFE,0x0B,
    0x32,0x25,0x9F,0x32,0x30,0x25,0x36,0x6F,0x9E,0x36,0x32,0x9E,0x3A,0x28,0x9E,0x27,0x32,0x31,0x3E,0x37,
    0x9E,0x38,0x36,0x28,0xFE,0x26,0x24,0x31,0x31,0x32,0x31,0x36,0x3F,0xFE,0x0B,0x38,0x37,0x9E,0x2C,0x29,
    0x9E,0xD2,0x3E,0x27,0x9E,0x2F,0x2C,0x2E,0x28,0xFE,0x37,0x32,0x9E,0x25,0x2F,0x24,0x36,0x37,0x9E,0x32,
    0x29,0x29,0x6F,0x9E,0x3A,0x28,0x9E,0x27,0x32,0x31,0x3E,0x37,0xFE,0x30,0x2C,0x31,0x27,0x3F,0x9E,0x11,
    0x28,0x2F,0x33,0x9E,0xD2,0x35,0x36,0x28,0x2F,0x29,0x3F,0xFE,0x20,0x28,0x3E,0x2F,0x2F,0x9E,0x33,0x35,
    0x28,0x33,0x24,0x35,0x28,0x9E,0x24,0x2F,0x2F,0x9E,0x32,0x29,0x9E,0xD1,0xFE,0x26,0x24,0x31,0x31,0x32,
    0x31,0x36,0x9E,0x2C,0x31,0x9E,0x37,0x2B,0x2C,0x36,0x9E,0x26,0x32,0x38,0x35,0x36,0x28,0x9E,0x29,0x32,
    0x35,0xFE,0xD2,0x9E,0x37,0x32,0x9E,0x38,0x36,0x28,0x3F,0x9E,0x0B,0x32,0x31,0x9E,0x1F,0x32,0x3C,0x24,
    0x2A,0x28,0xF2,0xFF,
])

export const DIALOG_005 = DEFINE_DIALOG(5, 1, 3, 30, 200, 
[
    0x11,0x28,0x3C,0x6F,0x9E,0x16,0x24,0x35,0x2C,0x32,0xF2,0x9E,0x12,0x36,0x9E,0x2C,0x37,0x9E,0x37,0x35,
    0x38,0x28,0xFE,0x37,0x2B,0x24,0x37,0x9E,0xD2,0x9E,0x25,0x28,0x24,0x37,0x9E,0xD1,0x9E,0x0B,0x2C,0x2A,
    0xFE,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0xF4,0x9E,0x0C,0x32,0x32,0x2F,0xF2,0xFE,0x22,0x32,0x38,0x9E,
    0x30,0x38,0x36,0x37,0x9E,0x25,0x28,0x9E,0x36,0x37,0x35,0x32,0x31,0x2A,0x3F,0x9E,0x0A,0x31,0x27,0xFE,
    0x33,0x35,0x28,0x37,0x37,0x3C,0x9E,0x29,0x24,0x36,0x37,0x3F,0x9E,0x1C,0x32,0x6F,0x9E,0x2B,0x32,0x3A,
    0x9E,0x29,0x24,0x36,0x37,0xFE,0x24,0x35,0x28,0x9E,0xD2,0x6F,0x9E,0x24,0x31,0x3C,0x3A,0x24,0x3C,0xF4,
    0xFE,0x0F,0x24,0x36,0x37,0x9E,0x28,0x31,0x32,0x38,0x2A,0x2B,0x9E,0x37,0x32,0x9E,0x25,0x28,0x24,0x37,
    0x9E,0x30,0x28,0x3F,0x3F,0x3F,0xFE,0x14,0x32,0x32,0x33,0x24,0x9E,0xD1,0x9E,0x1A,0x38,0x2C,0x26,0x2E,
    0xF4,0x9E,0x12,0x9E,0x27,0x32,0x31,0x3E,0x37,0xFE,0x37,0x2B,0x2C,0x31,0x2E,0x9E,0x36,0x32,0x3F,0x9E,
    0x13,0x38,0x36,0x37,0x9E,0x37,0x35,0x3C,0x9E,0x30,0x28,0x3F,0xFE,0x11,0x32,0x3A,0x9E,0x24,0x25,0x32,
    0x38,0x37,0x9E,0x24,0x9E,0x35,0x24,0x26,0x28,0x9E,0x37,0x32,0x9E,0xD1,0xFE,0x30,0x32,0x38,0x31,0x37,
    0x24,0x2C,0x31,0x37,0x32,0x33,0x6F,0x9E,0x3A,0x2B,0x28,0x35,0x28,0x9E,0xD1,0xFE,0x0B,0x2C,0x2A,0x9E,
    0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x9E,0x3A,0x24,0x36,0xF4,0xFE,0x20,0x2B,0x24,0x27,0x27,0x3C,0x24,
    0x9E,0x36,0x24,0x3C,0xF4,0x9E,0x20,0x2B,0x28,0x31,0x9E,0x12,0x9E,0x36,0x24,0x3C,0xFE,0xF5,0x10,0x32,
    0x6F,0xF6,0x9E,0x2F,0x28,0x37,0x9E,0xD1,0x9E,0x35,0x24,0x26,0x28,0x9E,0x25,0x28,0x2A,0x2C,0x31,0xF2,
    0xFE,0xFE,0x1B,0x28,0x24,0x27,0x3C,0x3F,0x3F,0x3F,0x3F,0xFE,0xFE,0xD0,0xD0,0x10,0x32,0xF2,0xD0,0xD0,
    0xD0,0xD0,0x0D,0x32,0x31,0x3E,0x37,0x9E,0x10,0x32,0xFF,
])

export const DIALOG_006 = DEFINE_DIALOG(6, 1, 3, 30, 200, 
[
    0x11,0x28,0x3C,0xF2,0xF2,0xF2,0x9E,0x0D,0x32,0x31,0x3E,0x37,0x9E,0x37,0x35,0x3C,0x9E,0x37,0x32,0x9E,
    0x36,0x26,0x24,0x30,0xFE,0x16,0x0E,0x3F,0x9E,0x22,0x32,0x38,0x3E,0x39,0x28,0x9E,0x2A,0x32,0x37,0x37,
    0x24,0x9E,0x35,0x38,0x31,0xFE,0xD1,0x9E,0x3A,0x2B,0x32,0x2F,0x28,0x9E,0x26,0x32,0x38,0x35,0x36,0x28,
    0x3F,0xFE,0x15,0x24,0x37,0x28,0x35,0x3F,0x9E,0x15,0x32,0x32,0x2E,0x9E,0x30,0x28,0x9E,0x38,0x33,0x9E,
    0x3A,0x2B,0x28,0x31,0xFE,0xD2,0x9E,0x3A,0x24,0x31,0x37,0x9E,0x37,0x32,0x9E,0x35,0x24,0x26,0x28,0x9E,
    0x29,0x32,0x35,0xFE,0x35,0x28,0x24,0x2F,0x3F,0xFF,
])

export const DIALOG_007 = DEFINE_DIALOG(7, 1, 5, 30, 200, 
[
    0x11,0x38,0x29,0x29,0x29,0x3F,0x3F,0x3F,0x29,0x29,0x29,0x3F,0x3F,0x3F,0x33,0x38,0x29,0x29,0x29,0x3F,
    0x3F,0x3F,0xFE,0x20,0x2B,0x32,0x24,0xF2,0x9E,0x22,0x32,0x38,0x3F,0x3F,0x3F,0x35,0x28,0x24,0x2F,0x2F,
    0x3C,0x3F,0x3F,0x3F,0x24,0x35,0x28,0x3F,0x3F,0x3F,0xFE,0x29,0x24,0x36,0x37,0xF2,0x9E,0x0A,0x9E,0x2B,
    0x38,0x30,0x24,0x31,0x9E,0x25,0x2F,0x38,0x35,0xF2,0xFE,0x11,0x28,0x35,0x28,0x9E,0xD2,0x9E,0x2A,0x32,
    0x9F,0x9F,0xD2,0x3E,0x39,0x28,0x9E,0x3A,0x32,0x31,0xFE,0x2C,0x37,0x6F,0x9E,0x29,0x24,0x2C,0x35,0x9E,
    0x24,0x31,0x27,0x9E,0x36,0x34,0x38,0x24,0x35,0x28,0xF2,0xFF,
])

export const DIALOG_008 = DEFINE_DIALOG(8, 1, 4, 30, 200, 
[
    0x0B,0x0E,0x20,0x0A,0x1B,0x0E,0x9E,0x18,0x0F,0x9E,0x0C,0x11,0x0A,0x12,0x17,0x9E,0x0C,0x11,0x18,0x16,
    0x19,0xFE,0x0E,0x3B,0x37,0x35,0x28,0x30,0x28,0x9E,0x0D,0x24,0x31,0x2A,0x28,0x35,0xF2,0xFE,0x10,0x28,
    0x37,0x9E,0x26,0x2F,0x32,0x36,0x28,0x9E,0x24,0x31,0x27,0x9E,0x33,0x35,0x28,0x36,0x36,0x9E,0x56,0x50,
    0xFE,0x29,0x32,0x35,0x9E,0x24,0x9E,0x25,0x28,0x37,0x37,0x28,0x35,0x9E,0x2F,0x32,0x32,0x2E,0x3F,0xFE,
    0x1C,0x26,0x24,0x35,0x3C,0x6F,0x9E,0x2B,0x38,0x2B,0xF4,0xFE,0x1C,0x28,0x28,0x9E,0xD1,0x9E,0x1B,0x28,
    0x27,0x9E,0x0C,0x32,0x2C,0x31,0x9E,0x32,0x31,0x9E,0x37,0x32,0x33,0xFE,0x32,0x29,0x9E,0xD1,0x9E,0x36,
    0x37,0x24,0x2E,0x28,0xF4,0xFE,0xFE,0x20,0x2B,0x28,0x31,0x9E,0xD2,0x9E,0x26,0x32,0x2F,0x2F,0x28,0x26,
    0x37,0x9E,0x28,0x2C,0x2A,0x2B,0x37,0x9E,0x32,0x29,0xFE,0xD1,0x30,0x6F,0x9E,0x24,0x9E,0x19,0x32,0x3A,
    0x28,0x35,0x9E,0x1C,0x37,0x24,0x35,0x9E,0x3A,0x2C,0x2F,0x2F,0xFE,0x24,0x33,0x33,0x28,0x24,0x35,0x9E,
    0x2C,0x31,0x9E,0xD1,0x9E,0x30,0x28,0x24,0x27,0x32,0x3A,0xFE,0x24,0x26,0x35,0x32,0x36,0x36,0x9E,0xD1,
    0x9E,0x25,0x35,0x2C,0x27,0x2A,0x28,0x3F,0xFF,
])

export const DIALOG_009 = DEFINE_DIALOG(9, 1, 5, 30, 200, 
[
    0x15,0x32,0x31,0x2A,0x9E,0x37,0x2C,0x30,0x28,0x6F,0x9E,0x31,0x32,0x9E,0x36,0x28,0x28,0xF2,0x9E,0x20,
    0x32,0x3A,0x6F,0xFE,0x2B,0x24,0x39,0x28,0x9E,0xD2,0x9E,0x2A,0x32,0x37,0x37,0x28,0x31,0x9E,0x29,0x24,
    0x36,0x37,0xF2,0xFE,0x11,0x24,0x39,0x28,0x9E,0xD2,0x9E,0x25,0x28,0x28,0x31,0x9E,0x37,0x35,0x24,0x2C,
    0x31,0x2C,0x31,0x2A,0xFE,0x32,0x31,0x9E,0xD1,0x9E,0x36,0x2F,0x3C,0x6F,0x9E,0x32,0x35,0x9E,0x2C,0x36,
    0x9E,0x2C,0x37,0x9E,0xD1,0xFE,0x33,0x32,0x3A,0x28,0x35,0x9E,0x32,0x29,0x9E,0xD1,0x9E,0x1C,0x37,0x24,
    0x35,0x36,0xF4,0xFE,0x12,0x3E,0x39,0x28,0x9E,0x25,0x28,0x28,0x31,0x9E,0x29,0x28,0x28,0x2F,0x2C,0x31,
    0x2A,0x9E,0x27,0x32,0x3A,0x31,0xFE,0x24,0x25,0x32,0x38,0x37,0x9E,0x2F,0x32,0x36,0x2C,0x31,0x2A,0x9E,
    0xD1,0x9E,0x2F,0x24,0x36,0x37,0xFE,0x35,0x24,0x26,0x28,0x3F,0x9E,0x1D,0x2B,0x2C,0x36,0x9E,0x2C,0x36,
    0x9E,0x30,0x3C,0x9E,0x2B,0x32,0x30,0x28,0xFE,0x26,0x32,0x38,0x35,0x36,0x28,0x9F,0x9F,0x2B,0x32,0x3A,
    0x9E,0x24,0x25,0x32,0x38,0x37,0x9E,0x24,0xFE,0x35,0x28,0x30,0x24,0x37,0x26,0x2B,0xF4,0xFE,0x1D,0x2B,
    0x28,0x9E,0x2A,0x32,0x24,0x2F,0x9E,0x2C,0x36,0x9E,0x2C,0x31,0xFE,0x20,0x2C,0x31,0x27,0x36,0x3A,0x28,
    0x33,0x37,0x9E,0x1F,0x24,0x2F,0x2F,0x28,0x3C,0x3F,0xFE,0x1B,0x28,0x24,0x27,0x3C,0xF4,0xFE,0xFE,0xD0,
    0xD0,0x10,0x32,0xD0,0xD0,0xD0,0xD0,0x9E,0x0D,0x32,0x31,0x3E,0x37,0x9E,0x10,0x32,0xFF,
])

export const DIALOG_010 = DEFINE_DIALOG(10, 1, 4, 30, 200, 
[
    0x22,0x32,0x38,0x3E,0x39,0x28,0x9E,0x36,0x37,0x28,0x33,0x33,0x28,0x27,0x9E,0x32,0x31,0x9E,0xD1,0xFE,
    0x20,0x2C,0x31,0x2A,0x9E,0x0C,0x24,0x33,0x9E,0x1C,0x3A,0x2C,0x37,0x26,0x2B,0x3F,0x9E,0x20,0x28,0x24,
    0x35,0x2C,0x31,0x2A,0xFE,0xD1,0x9E,0x20,0x2C,0x31,0x2A,0x9E,0x0C,0x24,0x33,0x6F,0x9E,0xD2,0x9E,0x26,
    0x24,0x31,0xFE,0x36,0x32,0x24,0x35,0x9E,0x37,0x2B,0x35,0x32,0x38,0x2A,0x2B,0x9E,0xD1,0x9E,0x36,0x2E,
    0x3C,0x3F,0xFE,0x17,0x32,0x3A,0x9E,0x20,0x2C,0x31,0x2A,0x9E,0x0C,0x24,0x33,0x36,0x9E,0x3A,0x2C,0x2F,
    0x2F,0x9E,0x33,0x32,0x33,0xFE,0x32,0x38,0x37,0x9E,0x32,0x29,0x9E,0x24,0x2F,0x2F,0x9E,0xD1,0x9E,0x35,
    0x28,0x27,0x9E,0x25,0x2F,0x32,0x26,0x2E,0x36,0xFE,0xD2,0x9E,0x29,0x2C,0x31,0x27,0x3F,0xFE,0xFE,0x20,
    0x32,0x38,0x2F,0x27,0x9E,0xD2,0x9E,0x2F,0x2C,0x2E,0x28,0x9E,0x37,0x32,0x9E,0x1C,0x24,0x39,0x28,0xF4,
    0xFE,0xFE,0xD0,0xD0,0x22,0x28,0x36,0xD0,0xD0,0xD0,0xD0,0x17,0x32,0xFF,
])

export const DIALOG_011 = DEFINE_DIALOG(11, 1, 4, 30, 200, ("\
Youve just stepped on\n\
the Metal Cap Switch!\n\
The Metal Cap makes\n\
Mario invincible.\n\
Now Metal Caps will\n\
pop out of all of the\n\
green blocks you find.\n\
\n\
Would you like to Save?\n\
\n\
//Yes////No"))

export const DIALOG_012 = DEFINE_DIALOG(12, 1, 4, 30, 200, ("\
Youve just stepped on\n\
the Vanish Cap Switch.\n\
The Vanish Cap makes\n\
Mario disappear.\n\
Now Vanish Caps will pop\n\
from all of the blue\n\
blocks you find.\n\
\n\
Would you like to Save?\n\
\n\
//Yes////No"))

export const DIALOG_013 = DEFINE_DIALOG(13, 1, 5, 30, 200, ("\
Youve collected 100\n\
coins! Mario gains more\n\
power from the castle.\n\
Do you want to Save?\n\
//Yes////No"))

export const DIALOG_014 = DEFINE_DIALOG(14, 1, 4, 30, 200, ("\
Wow! Another Power Star!\n\
Mario gains more courage\n\
from the power of the\n\
castle.\n\
Do you want to Save?\n\
\n\
//You Bet//Not Now"))

export const DIALOG_015 = DEFINE_DIALOG(15, 1, 4, 30, 200, ("\
You can punch enemies to\n\
knock them down. Press [A]\n\
to jump, [B] to punch.\n\
Press [A] then [B] to Kick.\n\
To pick something up,\n\
press [B], too. To throw\n\
something youre holding,\n\
press [B] again."))

export const DIALOG_016 = DEFINE_DIALOG(16, 1, 3, 30, 200, ("\
Hop on the shiny shell and\n\
ride wherever you want to\n\
go! Shred those enemies!"))

export const DIALOG_017 = DEFINE_DIALOG(17, 1, 4, 30, 200, 
[
    0x12,0x3E,0x30,0x9E,0xD1,0x9E,0x0B,0x2C,0x2A,0x9E,0x0B,0x32,0x25,0x9F,0x32,0x30,0x25,0x6F,0x9E,0x2F,
    0x32,0x35,0x27,0xFE,0x32,0x29,0x9E,0x24,0x2F,0x2F,0x9E,0x25,0x2F,0x24,0x36,0x37,0x2C,0x31,0x2A,0x9E,
    0x30,0x24,0x37,0x37,0x28,0x35,0x6F,0xFE,0x2E,0x2C,0x31,0x2A,0x9E,0x32,0x29,0x9E,0x2E,0x24,0x9F,0x25,
    0x32,0x32,0x30,0x36,0x9E,0xD1,0xFE,0x3A,0x32,0x35,0x2F,0x27,0x9E,0x32,0x39,0x28,0x35,0xF2,0xFE,0x11,
    0x32,0x3A,0x9E,0x27,0x24,0x35,0x28,0x9E,0xD2,0x9E,0x36,0x26,0x24,0x2F,0x28,0x9E,0x30,0x3C,0xFE,0x30,
    0x32,0x38,0x31,0x37,0x24,0x2C,0x31,0xF4,0x9E,0x0B,0x3C,0x9E,0x3A,0x2B,0x24,0x37,0x9E,0x35,0x2C,0x2A,
    0x2B,0x37,0xFE,0x27,0x32,0x9E,0xD2,0x9E,0x36,0x28,0x37,0x9E,0x29,0x32,0x32,0x37,0x9E,0x32,0x31,0x9E,
    0x30,0x3C,0xFE,0x2C,0x30,0x33,0x28,0x35,0x2C,0x24,0x2F,0x9E,0x30,0x32,0x38,0x31,0x37,0x24,0x2C,0x31,
    0x37,0x32,0x33,0xF4,0xFE,0x22,0x32,0x38,0x9E,0x30,0x24,0x3C,0x9E,0x2B,0x24,0x39,0x28,0x9E,0x28,0x2F,
    0x38,0x27,0x28,0x27,0x9E,0x30,0x3C,0xFE,0x2A,0x38,0x24,0x35,0x27,0x36,0x6F,0x9E,0x25,0x38,0x37,0x9E,
    0xD2,0x3E,0x2F,0x2F,0x9E,0x31,0x28,0x39,0x28,0x35,0xFE,0x28,0x36,0x26,0x24,0x33,0x28,0x9E,0x30,0x3C,
    0x9E,0x2A,0x35,0x24,0x36,0x33,0x3F,0x3F,0x3F,0xFE,0xFE,0x3F,0x3F,0x3F,0x24,0x31,0x27,0x9E,0xD2,0x3E,
    0x2F,0x2F,0x9E,0x31,0x28,0x39,0x28,0x35,0x9E,0x37,0x24,0x2E,0x28,0xFE,0x24,0x3A,0x24,0x3C,0x9E,0x30,
    0x3C,0x9E,0x19,0x32,0x3A,0x28,0x35,0x9E,0x1C,0x37,0x24,0x35,0x3F,0x9E,0x12,0xFE,0x2B,0x28,0x35,0x28,
    0x25,0x3C,0x9E,0x26,0x2B,0x24,0x2F,0x2F,0x28,0x31,0x2A,0x28,0x9E,0xD2,0x6F,0xFE,0x16,0x24,0x35,0x2C,
    0x32,0xF2,0xFE,0x12,0x29,0x9E,0xD2,0x9E,0x3A,0x24,0x31,0x37,0x9E,0xD1,0x9E,0x1C,0x37,0x24,0x35,0x9E,
    0x12,0xFE,0x2B,0x32,0x2F,0x27,0x6F,0x9E,0xD2,0x9E,0x30,0x38,0x36,0x37,0x9E,0x33,0x35,0x32,0x39,0x28,
    0xFE,0xD2,0x35,0x36,0x28,0x2F,0x29,0x9E,0x2C,0x31,0x9E,0x25,0x24,0x37,0x37,0x2F,0x28,0x3F,0xFE,0xFE,
    0x0C,0x24,0x31,0x9E,0xD2,0x9E,0x33,0x2C,0x26,0x2E,0x9E,0x30,0x28,0x9E,0x38,0x33,0x9E,0x29,0x35,0x32,
    0x30,0xFE,0xD1,0x9E,0x25,0x24,0x26,0x2E,0x9E,0x24,0x31,0x27,0x9E,0x2B,0x38,0x35,0x2F,0x9E,0x30,0x28,
    0x9E,0x37,0x32,0xFE,0x37,0x2B,0x2C,0x36,0x9E,0x35,0x32,0x3C,0x24,0x2F,0x9E,0x37,0x38,0x35,0x29,0xF4,
    0x9E,0x12,0x9E,0x37,0x2B,0x2C,0x31,0x2E,0xFE,0x37,0x2B,0x24,0x37,0x9E,0xD2,0x9E,0x26,0x24,0x31,0x31,
    0x32,0x37,0xF2,0xFF,
])

export const DIALOG_018 = DEFINE_DIALOG(18, 1, 4, 30, 200, ("\
Im sleeping because...\n\
...Im sleepy. I dont\n\
like being disturbed.\n\
Please walk quietly."))

export const DIALOG_019 = DEFINE_DIALOG(19, 1, 2, 30, 200, ("\
Shhh! Please walk\n\
quietly in the hallway!"))

export const DIALOG_020 = DEFINE_DIALOG(20, 1, 6, 95, 150, ("\
Dear Mario:\n\
Please come to the\n\
castle. Ive baked\n\
a cake for you.\n\
Yours truly--\n\
Princess Toadstool"))

export const DIALOG_021 = DEFINE_DIALOG(21, 1, 5, 95, 200, ("\
Welcome.\n\
No ones home!\n\
Now scram--\n\
and dont come back!\n\
Gwa ha ha!"))

export const DIALOG_022 = DEFINE_DIALOG(22, 1, 2, 95, 200, ("\
You need a key to open\n\
this door."))

export const DIALOG_023 = DEFINE_DIALOG(23, 1, 3, 95, 200, ("\
This key doesnt fit!\n\
Maybe its for the\n\
basement..."))

export const DIALOG_024 = DEFINE_DIALOG(24, 1, 5, 95, 200, ("\
You need Star power to\n\
open this door. Recover a\n\
Power Star from an enemy\n\
inside one of the castles\n\
paintings."))

export const DIALOG_025 = DEFINE_DIALOG(25, 1, 4, 95, 200, ("\
It takes the power of\n\
3 Stars to open this\n\
door. You need [%] more\n\
Stars."))

export const DIALOG_026 = DEFINE_DIALOG(26, 1, 4, 95, 200, ("\
It takes the power of\n\
8 Stars to open this\n\
door. You need [%] more\n\
Stars."))

export const DIALOG_027 = DEFINE_DIALOG(27, 1, 4, 95, 200, ("\
It takes the power of\n\
30 Stars to open this\n\
door. You need [%] more\n\
Stars."))

export const DIALOG_028 = DEFINE_DIALOG(28, 1, 4, 95, 200, ("\
It takes the power of\n\
50 Stars to open this\n\
door. You need [%] more\n\
Stars."))

export const DIALOG_029 = DEFINE_DIALOG(29, 1, 5, 95, 200, ("\
To open the door that\n\
leads to the 『endless』\n\
stairs, you need 70\n\
Stars.\n\
Bwa ha ha!"))

export const DIALOG_030 = DEFINE_DIALOG(30, 1, 6, 30, 200, ("\
Hello! The Lakitu Bros.,\n\
cutting in with a live\n\
update on Marios\n\
progress. Hes about to\n\
learn a technique for\n\
sneaking up on enemies.\n\
The trick is this: He has\n\
to walk very slowly in\n\
order to walk quietly.\n\
\n\
\n\
\n\
And wrapping up filming\n\
techniques reported on\n\
earlier, you can take a\n\
look around using [C]> and\n\
[C]<. Press [C]| to view the\n\
action from a distance.\n\
When you cant move the\n\
camera any farther, the\n\
buzzer will sound. This is\n\
the Lakitu Bros.,\n\
signing off."))

export const DIALOG_031 = DEFINE_DIALOG(31, 1, 5, 30, 200, ("\
No way! You beat me...\n\
again!! And I just spent\n\
my entire savings on\n\
these new Koopa\n\
Mach 1 Sprint shoes!\n\
Here, I guess I have to\n\
hand over this Star to\n\
the winner of the race.\n\
Congrats, Mario!"))

export const DIALOG_032 = DEFINE_DIALOG(32, 1, 5, 30, 200, ("\
If you get the Wing Cap,\n\
you can fly! Put the cap\n\
on, then do a Triple\n\
Jump--jump three times\n\
in a row--to take off.\n\
You can fly even higher\n\
if you blast out of a\n\
cannon wearing the\n\
Wing Cap!\n\
\n\
Use the [C] Buttons to look\n\
around while flying, and\n\
press [Z] to land."))

export const DIALOG_033 = DEFINE_DIALOG(33, 1, 6, 30, 200, ("\
Ciao! Youve reached\n\
Princess Toadstools\n\
castle via a warp pipe.\n\
Using the controller is a\n\
piece of cake. Press [A] to\n\
jump and [B] to attack.\n\
Press [B] to read signs,\n\
too. Use the Control Stick\n\
in the center of the\n\
controller to move Mario\n\
around. Now, head for\n\
the castle."))

export const DIALOG_034 = DEFINE_DIALOG(34, 1, 6, 30, 200, ("\
Good afternoon. The\n\
Lakitu Bros., here,\n\
reporting live from just\n\
outside the Princesss\n\
castle.\n\
\n\
Mario has just arrived\n\
on the scene, and well\n\
be filming the action live\n\
as he enters the castle\n\
and pursues the missing\n\
Power Stars.\n\
As seasoned cameramen,\n\
well be shooting from the\n\
recommended angle, but\n\
you can change the\n\
camera angle by pressing\n\
the [C] Buttons.\n\
If we cant adjust the\n\
view any further, well\n\
buzz. To take a look at\n\
the surroundings, stop\n\
and press [C]^.\n\
\n\
Press [A] to resume play.\n\
Switch camera modes with\n\
the [R] Button. Signs along\n\
the way will review these\n\
instructions.\n\
\n\
For now, reporting live,\n\
this has been the\n\
Lakitu Bros."))

export const DIALOG_035 = DEFINE_DIALOG(35, 1, 5, 30, 200, ("\
There are four camera, or\n\
『[C],』 Buttons. Press [C]^\n\
to look around using the\n\
Control Stick.\n\
\n\
Youll usually see Mario\n\
through Lakitus camera.\n\
It is the camera\n\
recommended for normal\n\
play.\n\
You can change angles by\n\
pressing [C]>. If you press\n\
[R], the view switches to\n\
Marios camera, which\n\
is directly behind him.\n\
Press [R] again to return\n\
to Lakitus camera. Press\n\
[C]| to see Mario from\n\
afar, using either\n\
Lakitus or Marios view."))

export const DIALOG_036 = DEFINE_DIALOG(36, 1, 5, 30, 200, ("\
OBSERVATION PLATFORM\n\
Press [C]^ to take a look\n\
around. Dont miss\n\
anything!\n\
\n\
Press [R] to switch to\n\
Marios camera. It\n\
always follows Mario.\n\
Press [R] again to switch\n\
to Lakitus camera.\n\
Pause the game and\n\
switch the mode to 『fix』\n\
the camera in place while\n\
holding [R]. Give it a try!"))

export const DIALOG_037 = DEFINE_DIALOG(37, 1, 2, 30, 200, ("\
I win! You lose!\n\
Ha ha ha ha!\n\
Youre no slouch, but Im\n\
a better sledder!\n\
Better luck next time!"))

export const DIALOG_038 = DEFINE_DIALOG(38, 1, 3, 95, 200, ("\
Reacting to the Star\n\
power, the door slowly\n\
opens."))

export const DIALOG_039 = DEFINE_DIALOG(39, 1, 4, 30, 200, ("\
No visitors allowed,\n\
by decree of\n\
the Big Bob-omb\n\
\n\
I shall never surrender my\n\
Stars, for they hold the\n\
power of the castle in\n\
their glow.\n\
They were a gift from\n\
Bowser, the Koopa King\n\
himself, and they lie well\n\
hidden within my realm.\n\
Not a whisper of their\n\
whereabouts shall leave\n\
my lips. Oh, all right,\n\
perhaps one hint:\n\
Heed the Star names at\n\
the beginning of the\n\
course.\n\
//--The Big Bob-omb"))

export const DIALOG_040 = DEFINE_DIALOG(40, 1, 3, 30, 200, ("\
Warning!\n\
Cold, Cold Crevasse\n\
Below!"))

export const DIALOG_041 = DEFINE_DIALOG(41, 1, 3, 30, 200, ("\
I win! You lose!\n\
Ha ha ha!\n\
\n\
Thats what you get for\n\
messin with Koopa the\n\
Quick.\n\
Better luck next time!"))

export const DIALOG_042 = DEFINE_DIALOG(42, 1, 4, 30, 200, ("\
Caution! Narrow Bridge!\n\
Cross slowly!\n\
\n\
\n\
You can jump to the edge\n\
of the cliff and hang on,\n\
and you can climb off the\n\
edge if you move slowly.\n\
When you want to let go,\n\
either press [Z] or press\n\
the Control Stick in the\n\
direction of Marios back.\n\
To climb up, press Up on\n\
the Control Stick. To\n\
scurry up quickly, press\n\
the [A] Button."))

export const DIALOG_043 = DEFINE_DIALOG(43, 1, 5, 30, 200, ("\
If you jump and hold the\n\
[A] Button, you can hang on\n\
to some objects overhead.\n\
Its the same as grabbing\n\
a flying bird!"))

export const DIALOG_044 = DEFINE_DIALOG(44, 1, 5, 95, 200, ("\
Whooos there? Whooo\n\
woke me up? Its still\n\
daylight--I should be\n\
sleeping!\n\
\n\
Hey, as long as Im\n\
awake, why not take a\n\
short flight with me?\n\
Press and hold [A] to grab\n\
on. Release [A] to let go.\n\
Ill take you wherever\n\
you want to go, as long\n\
as my wings hold out.\n\
Watch my shadow, and\n\
grab on."))

export const DIALOG_045 = DEFINE_DIALOG(45, 1, 6, 95, 200, ("\
Whew! Im just about\n\
flapped out. You should\n\
lay off the pasta, Mario!\n\
Thats it for now. Press\n\
[A] to let go. Okay,\n\
bye byyyyyyeeee!"))

export const DIALOG_046 = DEFINE_DIALOG(46, 1, 5, 30, 200, ("\
You have to master three\n\
important jumping\n\
techniques.\n\
First try the Triple Jump.\n\
\n\
Run fast, then jump three\n\
times, one, two, three.\n\
If you time the jumps\n\
right, youll hop, skip,\n\
then jump really high.\n\
Next, go for distance\n\
with the Long Jump. Run,\n\
press [Z] to crouch then [A]\n\
to jump really far.\n\
\n\
To do the Wall Kick, press\n\
[A] to jump at a wall, then\n\
jump again when you hit\n\
the wall.\n\
\n\
Got that? Triple Jump,\n\
Long Jump, Wall Kick.\n\
Practice, practice,\n\
practice. You dont stand\n\
a chance without them."))

export const DIALOG_047 = DEFINE_DIALOG(47, 1, 2, 95, 200, ("\
Hi! Ill prepare the\n\
cannon for you!"))

export const DIALOG_048 = DEFINE_DIALOG(48, 1, 4, 30, 200, ("\
Snow Mountain Summit\n\
Watch for slippery\n\
conditions! Please enter\n\
the cottage first."))

export const DIALOG_049 = DEFINE_DIALOG(49, 1, 5, 30, 200, ("\
Remember that tricky Wall\n\
Kick jump? Its a\n\
technique youll have to\n\
master in order to reach\n\
high places.\n\
Use it to jump from wall\n\
to wall. Press the\n\
Control Stick in the\n\
direction you want to\n\
bounce to gain momentum.\n\
Practice makes perfect!"))

export const DIALOG_050 = DEFINE_DIALOG(50, 1, 4, 30, 200, ("\
Hold [Z] to crouch and\n\
slide down a slope.\n\
Or press [Z] while in the\n\
air to Pound the Ground!\n\
If you stop, crouch, then\n\
jump, youll do a\n\
Backward Somersault!\n\
Got that?\n\
Theres more. Crouch and\n\
then jump to do a\n\
Long Jump! Or crouch and\n\
walk to...never mind."))

export const DIALOG_051 = DEFINE_DIALOG(51, 1, 6, 30, 200, ("\
Climbings easy! When you\n\
jump at trees, poles or\n\
pillars, youll grab them\n\
automatically. Press [A] to\n\
jump off backward.\n\
\n\
To rotate around the\n\
object, press Right or\n\
Left on the Control Stick.\n\
When you reach the top,\n\
press Up to do a\n\
handstand!\n\
Jump off from the\n\
handstand for a high,\n\
stylin dismount."))

export const DIALOG_052 = DEFINE_DIALOG(52, 1, 5, 30, 200, ("\
Stop and press [Z] to\n\
crouch, then press [A]\n\
to do a high, Backward\n\
Somersault!\n\
\n\
To perform a Side\n\
Somersault, run, do a\n\
sharp U-turn and jump.\n\
You can catch lots of\n\
air with both jumps."))

export const DIALOG_053 = DEFINE_DIALOG(53, 1, 5, 30, 200, ("\
Sometimes, if you pass\n\
through a coin ring or\n\
find a secret point in a\n\
course, a red number will\n\
appear.\n\
If you trigger five red\n\
numbers, a secret Star\n\
will show up."))

export const DIALOG_054 = DEFINE_DIALOG(54, 1, 5, 30, 200, ("\
Welcome to the snow\n\
slide! Hop on! To speed\n\
up, press forward on the\n\
Control Stick. To slow\n\
down, pull back."))

export const DIALOG_055 = DEFINE_DIALOG(55, 1, 4, 30, 200, ("\
Hey-ey, Mario, buddy,\n\
howzit goin? Step right\n\
up. You look like a fast\n\
sleddin kind of guy.\n\
I know speed when I see\n\
it, yes siree--Im the\n\
world champion sledder,\n\
you know. Whaddya say?\n\
How about a race?\n\
Ready...\n\
\n\
//Go//// Dont Go"))

export const DIALOG_056 = DEFINE_DIALOG(56, 1, 6, 30, 200, ("\
You brrrr-oke my record!\n\
Unbelievable! I knew\n\
that you were the coolest.\n\
Now youve proven\n\
that youre also the\n\
fastest!\n\
I cant award you a gold\n\
medal, but here, take this\n\
Star instead. Youve\n\
earned it!"))

export const DIALOG_057 = DEFINE_DIALOG(57, 1, 4, 30, 200, ("\
Egad! My baby!! Have you\n\
seen my baby??? Shes\n\
the most precious baby in\n\
the whole wide world.\n\
(They say she has my\n\
beak...) I just cant\n\
remember where I left\n\
her.\n\
Lets see...I stopped\n\
for herring and ice cubes,\n\
then I...oohh! I just\n\
dont know!"))

export const DIALOG_058 = DEFINE_DIALOG(58, 1, 4, 30, 200, ("\
You found my precious,\n\
precious baby! Where\n\
have you been? How can\n\
I ever thank you, Mario?\n\
Oh, I do have this...\n\
...Star. Here, take it\n\
with my eternal\n\
gratitude."))

export const DIALOG_059 = DEFINE_DIALOG(59, 1, 4, 30, 200, ("\
Thats not my baby! She\n\
looks nothing like me!\n\
Her parents must be\n\
worried sick!"))

export const DIALOG_060 = DEFINE_DIALOG(60, 1, 4, 30, 200, ("\
ATTENTION!\n\
Read Before Diving In!\n\
\n\
\n\
If you stay under the\n\
water for too long, youll\n\
run out of oxygen.\n\
\n\
Return to the surface for\n\
air or find an air bubble\n\
or coins to breathe while\n\
underwater.\n\
Press [A] to swim. Hold [A]\n\
to swim slow and steady.\n\
Tap [A] with smooth timing\n\
to gain speed.\n\
Press Up on the\n\
Control Stick and press [A]\n\
to dive.\n\
\n\
Press Down on the Control\n\
Stick and press [A] to\n\
return to the surface.\n\
\n\
Hold Down and press [A]\n\
while on the surface near\n\
the edge of the water to\n\
jump out."))

export const DIALOG_061 = DEFINE_DIALOG(61, 1, 4, 30, 200, ("\
BRRR! Frostbite Danger!\n\
Do not swim here.\n\
Im serious.\n\
/--The Penguin"))

export const DIALOG_062 = DEFINE_DIALOG(62, 1, 3, 30, 200, ("\
Hidden inside the green\n\
block is the amazing\n\
Metal Cap.\n\
Wearing it, you wont\n\
catch fire or be hurt\n\
by enemy attacks.\n\
You dont even have to\n\
breathe while wearing it.\n\
\n\
The only problem:\n\
You cant swim in it."))

export const DIALOG_063 = DEFINE_DIALOG(63, 1, 5, 30, 200, ("\
The Vanish Cap is inside\n\
the blue block. Mr. I.\n\
will be surprised, since\n\
youll be invisible when\n\
you wear it!\n\
Even the Big Boo will be\n\
fooled--and you can walk\n\
through secret walls, too."))

export const DIALOG_064 = DEFINE_DIALOG(64, 1, 5, 30, 200, ("\
When you put on the Wing\n\
Cap that comes from a\n\
red block, do the Triple\n\
Jump to soar high into\n\
the sky.\n\
Use the Control Stick to\n\
guide Mario. Pull back to\n\
to fly up, press forward\n\
to nose down, and press [Z]\n\
to land."))

export const DIALOG_065 = DEFINE_DIALOG(65, 1, 6, 30, 200, ("\
Swimming Lessons!\n\
Tap [A] to do the breast\n\
stroke. If you time the\n\
taps right, youll swim\n\
fast.\n\
\n\
Press and hold [A] to do a\n\
slow, steady flutter kick.\n\
Press Up on the Control\n\
Stick to dive, and pull\n\
back on the stick to head\n\
for the surface.\n\
To jump out of the water,\n\
hold Down on the Control\n\
Stick, then press [A].\n\
Easy as pie, right?\n\
\n\
\n\
But remember:\n\
Mario cant breathe under\n\
the water! Return to the\n\
surface for air when the\n\
Power Meter runs low.\n\
\n\
And one last thing: You\n\
cant open doors that\n\
are underwater."))

export const DIALOG_066 = DEFINE_DIALOG(66, 1, 5, 30, 200, ("\
Mario, its Peach!\n\
Please be careful! Bowser\n\
is so wicked! He will try\n\
to burn you with his\n\
horrible flame breath.\n\
Run around behind and\n\
grab him by the tail with\n\
the [B] Button. Once you\n\
grab hold, swing him\n\
around in great circles.\n\
Rotate the Control Stick\n\
to go faster and faster.\n\
The faster you swing him,\n\
the farther hell fly.\n\
\n\
Use the [C] Buttons to look\n\
around, Mario. You have\n\
to throw Bowser into one\n\
of the bombs in the four\n\
corners.\n\
Aim well, then press [B]\n\
again to launch Bowser.\n\
Good luck, Mario! Our\n\
fate is in your hands."))

export const DIALOG_067 = DEFINE_DIALOG(67, 1, 5, 30, 200, ("\
Tough luck, Mario!\n\
Princess Toadstool isnt\n\
here...Gwa ha ha!! Go\n\
ahead--just try to grab\n\
me by the tail!\n\
Youll never be able to\n\
swing ME around! A wimp\n\
like you wont throw me\n\
out of here! Never! Ha!"))

export const DIALOG_068 = DEFINE_DIALOG(68, 1, 5, 30, 200, ("\
Its Lethal Lava Land!\n\
If you catch fire or fall\n\
into a pool of flames,\n\
youll be hopping mad, but\n\
dont lose your cool.\n\
You can still control\n\
Mario--just try to keep\n\
calm!"))

export const DIALOG_069 = DEFINE_DIALOG(69, 1, 6, 30, 200, ("\
Sometimes youll bump into\n\
invisible walls at the\n\
edges of the painting\n\
worlds. If you hit a wall\n\
while flying, youll bounce\n\
back."))

export const DIALOG_070 = DEFINE_DIALOG(70, 1, 5, 30, 200, ("\
You can return to the\n\
castles main hall at any\n\
time from the painting\n\
worlds where the enemies\n\
live.\n\
Just stop, stand still,\n\
press Start to pause the\n\
game, then select\n\
『Exit Course.』\n\
\n\
You dont have to collect\n\
all Power Stars in one\n\
course before going on to\n\
the next.\n\
\n\
Return later, when youre\n\
more experienced, to pick\n\
up difficult ones.\n\
\n\
\n\
Whenever you find a Star,\n\
a hint for finding the\n\
next one will appear on\n\
the courses start screen.\n\
\n\
You can, however, collect\n\
any of the remaining\n\
Stars next. You dont\n\
have to recover the one\n\
described by the hint."))

export const DIALOG_071 = DEFINE_DIALOG(71, 1, 3, 30, 200, ("\
Danger Ahead!\n\
Beware of the strange\n\
cloud! Dont inhale!\n\
If you feel faint, run for\n\
higher ground and fresh\n\
air!\n\
Circle: Shelter\n\
Arrow: Entrance-Exit"))

export const DIALOG_072 = DEFINE_DIALOG(72, 1, 5, 30, 200, ("\
High winds ahead!\n\
Pull your Cap down tight.\n\
If it blows off, youll\n\
have to find it on this\n\
mountain."))

export const DIALOG_073 = DEFINE_DIALOG(73, 1, 4, 95, 200, ("\
Aarrgh! Ahoy, matey. I\n\
have sunken treasure,\n\
here, I do.\n\
\n\
But to pluck the plunder,\n\
you must open the\n\
Treasure Chests in the\n\
right order.\n\
What order is that,\n\
ye say?\n\
\n\
\n\
Ill never tell!\n\
\n\
//--The Capn"))

export const DIALOG_074 = DEFINE_DIALOG(74, 1, 5, 30, 200, ("\
You can grab on to the\n\
edge of a cliff or ledge\n\
with your fingertips and\n\
hang down from it.\n\
\n\
To drop from the edge,\n\
either press the Control\n\
Stick in the direction of\n\
Marios back or press the\n\
[Z] Button.\n\
To get up onto the ledge,\n\
either press Up on the\n\
Control Stick or press [A]\n\
as soon as you grab the\n\
ledge to climb up quickly."))

export const DIALOG_075 = DEFINE_DIALOG(75, 1, 5, 30, 200, ("\
Mario!! My castle is in\n\
great peril. I know that\n\
Bowser is the cause...and\n\
I know that only you can\n\
stop him!\n\
The doors in the castle\n\
that have been sealed by\n\
Bowser can be opened only\n\
with Star Power.\n\
\n\
But there are secret\n\
paths in the castle,\n\
paths that Bowser hasnt\n\
found.\n\
\n\
One of those paths is in\n\
this room, and it holds\n\
one of the castles Secret\n\
Stars!\n\
\n\
Find that Secret Star,\n\
Mario! It will help you\n\
on your quest. Please,\n\
Mario, you have to\n\
help us!\n\
Retrieve all of the\n\
Power Stars in the castle\n\
and free us from this\n\
awful prison!\n\
Please!"))

export const DIALOG_076 = DEFINE_DIALOG(76, 1, 6, 30, 200, ("\
Thanks to the power of\n\
the Stars, life is\n\
returning to the castle.\n\
Please, Mario, you have\n\
to give Bowser the boot!\n\
\n\
Here, let me tell you a\n\
little something about the\n\
castle. In the room with\n\
the mirrors, look carefully\n\
for anything thats not\n\
reflected in the mirror.\n\
And when you go to the\n\
water town, you can flood\n\
it with a high jump into\n\
the painting. Oh, by the\n\
way, look what I found!"))

export const DIALOG_077 = DEFINE_DIALOG(77, 1, 2, 150, 200, ("\
It is decreed that one\n\
shall pound the pillars."))

export const DIALOG_078 = DEFINE_DIALOG(78, 1, 5, 30, 200, ("\
Break open the Blue Coin\n\
Block by Pounding the\n\
Ground with the [Z] Button.\n\
One Blue Coin is worth\n\
five Yellow Coins.\n\
But you have to hurry!\n\
The coins will disappear\n\
if youre not quick to\n\
collect them! Too bad."))

export const DIALOG_079 = DEFINE_DIALOG(79, 1, 4, 30, 200, ("\
Owwwuu! Let me go!\n\
Uukee-kee! I was only\n\
teasing! Cant you take\n\
a joke?\n\
Ill tell you what, lets\n\
trade. If you let me go,\n\
Ill give you something\n\
really good.\n\
So, how about it?\n\
\n\
//Free him/ Hold on"))

export const DIALOG_080 = DEFINE_DIALOG(80, 1, 1, 30, 200, ("\
Eeeh hee hee hee!"))

export const DIALOG_081 = DEFINE_DIALOG(81, 1, 4, 30, 200, ("\
The mystery is of Wet\n\
or Dry.\n\
And where does the\n\
solution lie?\n\
The city welcomes visitors\n\
with the depth they bring\n\
as they enter."))

export const DIALOG_082 = DEFINE_DIALOG(82, 1, 4, 30, 200, ("\
Hold on to your hat! If\n\
you lose it, youll be\n\
injured easily.\n\
\n\
If you do lose your Cap,\n\
youll have to find it in\n\
the course where you\n\
lost it.\n\
Oh, boy, its not looking\n\
good for Peach. Shes\n\
still trapped somewhere\n\
inside the walls.\n\
Please, Mario, you have\n\
to help her! Did you know\n\
that there are enemy\n\
worlds inside the walls?\n\
Yup. Its true. Bowsers\n\
troops are there, too.\n\
Oh, here, take this. Ive\n\
been keeping it for you."))

export const DIALOG_083 = DEFINE_DIALOG(83, 1, 6, 30, 200, ("\
Theres something strange\n\
about that clock. As you\n\
jump inside, watch the\n\
position of the big hand.\n\
Oh, look what I found!\n\
Here, Mario, catch!"))

export const DIALOG_084 = DEFINE_DIALOG(84, 1, 3, 30, 200, ("\
Yeeoww! Unhand me,\n\
brute! Im late, so late,\n\
I must make haste!\n\
This shiny thing? Mine!\n\
Its mine. Finders,\n\
keepers, losers...\n\
Late, late, late...\n\
Ouch! Take it then! A\n\
gift from Bowser, it was.\n\
Now let me be! I have a\n\
date! I cannot be late\n\
for tea!"))

export const DIALOG_085 = DEFINE_DIALOG(85, 1, 5, 30, 200, ("\
You dont stand a ghost\n\
of a chance in this house.\n\
If you walk out of here,\n\
you deserve...\n\
...a Ghoul Medal..."))

export const DIALOG_086 = DEFINE_DIALOG(86, 1, 3, 30, 200, ("\
Running around in circles\n\
makes some bad guys roll\n\
their eyes."))

export const DIALOG_087 = DEFINE_DIALOG(87, 1, 4, 30, 200, ("\
Santa Claus isnt the only\n\
one who can go down a\n\
chimney! Come on in!\n\
/--Cabin Proprietor"))

export const DIALOG_088 = DEFINE_DIALOG(88, 1, 5, 30, 200, ("\
Work Elevator\n\
For those who get off\n\
here: Grab the pole to the\n\
left and slide carefully\n\
down."))

export const DIALOG_089 = DEFINE_DIALOG(89, 1, 5, 95, 200, ("\
Both ways fraught with\n\
danger! Watch your feet!\n\
Those who cant do the\n\
Long Jump, tsk, tsk. Make\n\
your way to the right.\n\
Right: Work Elevator\n\
/// Cloudy Maze\n\
Left: Black Hole\n\
///Underground Lake\n\
\n\
Red Circle: Elevator 2\n\
//// Underground Lake\n\
Arrow: You are here"))

export const DIALOG_090 = DEFINE_DIALOG(90, 1, 6, 30, 200, ("\
Bwa ha ha ha!\n\
Youve stepped right into\n\
my trap, just as I knew\n\
you would! I warn you,\n\
『Friend,』 watch your\n\
step!"))

export const DIALOG_091 = DEFINE_DIALOG(91, 2, 2, 30, 200, ("\
Danger!\n\
Strong Gusts!\n\
But the wind makes a\n\
comfy ride."))

export const DIALOG_092 = DEFINE_DIALOG(92, 1, 5, 30, 200, ("\
Pestering me again, are\n\
you, Mario? Cant you see\n\
that Im having a merry\n\
little time, making\n\
mischief with my minions?\n\
Now, return those Stars!\n\
My troops in the walls\n\
need them! Bwa ha ha!"))

export const DIALOG_093 = DEFINE_DIALOG(93, 1, 5, 30, 200, ("\
Mario! You again! Well\n\
thats just fine--Ive\n\
been looking for something\n\
to fry with my fire\n\
breath!\n\
Your Star Power is\n\
useless against me!\n\
Your friends are all\n\
trapped within the\n\
walls...\n\
And youll never see the\n\
Princess again!\n\
Bwa ha ha ha!"))

export const DIALOG_094 = DEFINE_DIALOG(94, 1, 4, 30, 200, ("\
Get a good run up the\n\
slope! Do you remember\n\
the Long Jump? Run, press\n\
[Z], then jump!"))

export const DIALOG_095 = DEFINE_DIALOG(95, 1, 4, 30, 200, ("\
To read a sign, stand in\n\
front of it and press [B],\n\
like you did just now.\n\
\n\
When you want to talk to\n\
a Koopa Troopa or other\n\
animal, stand right in\n\
front of it.\n\
Please recover the Stars\n\
that were stolen by\n\
Bowser in this course."))

export const DIALOG_096 = DEFINE_DIALOG(96, 1, 4, 30, 200, ("\
The path is narrow here.\n\
Easy does it! No one is\n\
allowed on top of the\n\
mountain!\n\
And if you know whats\n\
good for you, you wont\n\
wake anyone whos\n\
sleeping!\n\
Move slowly,\n\
tread lightly."))

export const DIALOG_097 = DEFINE_DIALOG(97, 1, 5, 30, 200, ("\
Dont be a pushover!\n\
If anyone tries to shove\n\
you around, push back!\n\
Its one-on-one, with a\n\
fiery finish for the loser!"))

export const DIALOG_098 = DEFINE_DIALOG(98, 1, 2, 95, 200, ("\
Come on in here...\n\
...heh, heh, heh..."))

// unused
export const DIALOG_099 = DEFINE_DIALOG(99, 1, 5, 95, 200, ("\
Eh he he...\n\
Youre mine, now, hee hee!\n\
Ill pass right through\n\
this wall. Can you do\n\
that? Heh, heh, heh!"))

export const DIALOG_100 = DEFINE_DIALOG(100, 1, 3, 95, 200, ("\
Ukkiki...Wakkiki...kee kee!\n\
Ha! I snagged it!\n\
Its mine! Heeheeheeee!"))

export const DIALOG_101 = DEFINE_DIALOG(101, 1, 3, 95, 200, ("\
Ackk! Let...go...\n\
Youre...choking...me...\n\
Cough...Ive been framed!\n\
This Cap? Oh, all right,\n\
take it. Its a cool Cap,\n\
but Ill give it back.\n\
I think it looks better on\n\
me than it does on you,\n\
though! Eeeee! Kee keee!"))

export const DIALOG_102 = DEFINE_DIALOG(102, 1, 5, 30, 200, ("\
Pssst! The Boos are super\n\
shy. If you look them\n\
in the eyes, they fade\n\
away, but if you turn\n\
your back, they reappear.\n\
Its no use trying to hit\n\
them when theyre fading\n\
away. Instead, sneak up\n\
behind them and punch."))

export const DIALOG_103 = DEFINE_DIALOG(103, 1, 4, 95, 200, ("\
Upon four towers\n\
one must alight...\n\
Then at the peak\n\
shall shine the light..."))

export const DIALOG_104 = DEFINE_DIALOG(104, 1, 5, 30, 200, ("\
The shadowy star in front\n\
of you is a 『Star\n\
Marker.』 When you collect\n\
all 8 Red Coins, the Star\n\
will appear here."))

export const DIALOG_105 = DEFINE_DIALOG(105, 1, 3, 95, 200, ("\
Ready for blastoff! Come\n\
on, hop into the cannon!\n\
\n\
You can reach the Star on\n\
the floating island by\n\
using the four cannons.\n\
Use the Control Stick to\n\
aim, then press [A] to fire.\n\
\n\
If youre handy, you can\n\
grab on to trees or poles\n\
to land."))

export const DIALOG_106 = DEFINE_DIALOG(106, 1, 2, 95, 200, ("\
Ready for blastoff! Come\n\
on, hop into the cannon!"))

export const DIALOG_107 = DEFINE_DIALOG(107, 1, 3, 95, 200, ("\
Ghosts...\n\
...dont...\n\
...DIE!\n\
Heh, heh, heh!\n\
Can you get out of here...\n\
...alive?"))

export const DIALOG_108 = DEFINE_DIALOG(108, 1, 2, 95, 200, ("\
Boooooo-m! Here comes\n\
the master of mischief,\n\
the tower of terror,\n\
the Big Boo!\n\
Ka ha ha ha..."))

export const DIALOG_109 = DEFINE_DIALOG(109, 1, 4, 95, 200, ("\
Ooooo Nooooo!\n\
Talk about out-of-body\n\
experiences--my body\n\
has melted away!\n\
Have you run in to any\n\
headhunters lately??\n\
I could sure use a new\n\
body!\n\
Brrr! My face might\n\
freeze like this!"))

export const DIALOG_110 = DEFINE_DIALOG(110, 1, 5, 95, 200, ("\
I need a good head on my\n\
shoulders. Do you know of\n\
anybody in need of a good\n\
body? Please! Ill follow\n\
you if you do!"))

export const DIALOG_111 = DEFINE_DIALOG(111, 1, 4, 95, 200, ("\
Perfect! What a great\n\
new body! Here--this is a\n\
present for you. Its sure\n\
to warm you up."))

export const DIALOG_112 = DEFINE_DIALOG(112, 1, 4, 30, 200, ("\
Collect as many coins as\n\
possible! Theyll refill\n\
your Power Meter.\n\
\n\
You can check to see how\n\
many coins youve\n\
collected in each of the\n\
15 enemy worlds.\n\
You can also recover\n\
power by touching the\n\
Spinning Heart.\n\
\n\
The faster you run\n\
through the heart, the\n\
more power youll recover."))

export const DIALOG_113 = DEFINE_DIALOG(113, 1, 6, 30, 200, ("\
There are special Caps in\n\
the red, green and blue\n\
blocks. Step on the\n\
switches in the hidden\n\
courses to activate the\n\
Cap Blocks."))

export const DIALOG_114 = DEFINE_DIALOG(114, 1, 5, 95, 200, ("\
It makes me so mad! We\n\
build your houses, your\n\
castles. We pave your\n\
roads, and still you\n\
walk all over us.\n\
Do you ever say thank\n\
you? No! Well, youre not\n\
going to wipe your feet\n\
on me! I think Ill crush\n\
you just for fun!\n\
Do you have a problem\n\
with that? Just try to\n\
pound me, wimp! Ha!"))

export const DIALOG_115 = DEFINE_DIALOG(115, 1, 5, 95, 200, ("\
No! Crushed again!\n\
Im just a stepping stone,\n\
after all. I wont gravel,\n\
er, grovel. Here, you win.\n\
Take this with you!"))

export const DIALOG_116 = DEFINE_DIALOG(116, 1, 5, 95, 200, ("\
Whaaa....Whaaat?\n\
Can it be that a\n\
pipsqueak like you has\n\
defused the Bob-omb\n\
king????\n\
You might be fast enough\n\
to ground me, but youll\n\
have to pick up the pace\n\
if you want to take King\n\
Bowser by the tail.\n\
Methinks my troops could\n\
learn a lesson from you!\n\
Here is your Star, as I\n\
promised, Mario.\n\
\n\
If you want to see me\n\
again, select this Star\n\
from the menu. For now,\n\
farewell."))

export const DIALOG_117 = DEFINE_DIALOG(117, 1, 1, 95, 200, ("\
Who...walk...here?\n\
Who...break...seal?\n\
Wake..ancient..ones?\n\
We no like light...\n\
Rrrrummbbble...\n\
We no like...intruders!\n\
Now battle...\n\
...hand...\n\
...to...\n\
...hand!"))

export const DIALOG_118 = DEFINE_DIALOG(118, 1, 6, 95, 200, ("\
Grrrrumbbble!\n\
What...happen?\n\
We...crushed like pebble.\n\
You so strong!\n\
You rule ancient pyramid!\n\
For today...\n\
Now, take Star of Power.\n\
We...sleep...darkness."))

export const DIALOG_119 = DEFINE_DIALOG(119, 1, 6, 30, 200, ("\
Grrr! I was a bit\n\
careless. This is not as I\n\
had planned...but I still\n\
hold the power of the\n\
Stars, and I still have\n\
Peach.\n\
Bwa ha ha! Youll get no\n\
more Stars from me! Im\n\
not finished with you yet,\n\
but Ill let you go for\n\
now. Youll pay for this...\n\
later!"))

export const DIALOG_120 = DEFINE_DIALOG(120, 1, 4, 30, 200, ("\
Ooowaah! Can it be that\n\
Ive lost??? The power of\n\
the Stars has failed me...\n\
this time.\n\
Consider this a draw.\n\
Next time, Ill be in\n\
perfect condition.\n\
\n\
Now, if you want to see\n\
your precious Princess,\n\
come to the top of the\n\
tower.\n\
Ill be waiting!\n\
Gwa ha ha ha!"))

export const DIALOG_121 = DEFINE_DIALOG(121, 1, 5, 30, 200, ("\
Nooo! It cant be!\n\
Youve really beaten me,\n\
Mario?!! I gave those\n\
troops power, but now\n\
its fading away!\n\
Arrgghh! I can see peace\n\
returning to the world! I\n\
cant stand it! Hmmm...\n\
Its not over yet...\n\
\n\
Cmon troops! Lets watch\n\
the ending together!\n\
Bwa ha ha!"))

export const DIALOG_122 = DEFINE_DIALOG(122, 1, 4, 30, 200, ("\
The Black Hole\n\
Right: Work Elevator\n\
/// Cloudy Maze\n\
Left: Underground Lake"))

export const DIALOG_123 = DEFINE_DIALOG(123, 1, 4, 30, 200, ("\
Metal Cavern\n\
Right: To Waterfall\n\
Left: Metal Cap Switch"))

export const DIALOG_124 = DEFINE_DIALOG(124, 1, 4, 30, 200, ("\
Work Elevator\n\
Danger!!\n\
Read instructions\n\
thoroughly!\n\
Elevator continues in the\n\
direction of the arrow\n\
activated."))

export const DIALOG_125 = DEFINE_DIALOG(125, 1, 3, 30, 200, ("\
Hazy Maze-Exit\n\
Danger! Closed.\n\
Turn back now."))

export const DIALOG_126 = DEFINE_DIALOG(126, 2, 3, 30, 200, ("\
Up: Black Hole\n\
Right: Work Elevator\n\
/// Hazy Maze"))

export const DIALOG_127 = DEFINE_DIALOG(127, 3, 4, 30, 200, ("\
Underground Lake\n\
Right: Metal Cave\n\
Left: Abandoned Mine\n\
///(Closed)\n\
A gentle sea dragon lives\n\
here. Pound on his back to\n\
make him lower his head.\n\
Dont become his lunch."))

export const DIALOG_128 = DEFINE_DIALOG(128, 1, 4, 95, 200, ("\
You must fight with\n\
honor! It is against the\n\
royal rules to throw the\n\
king out of the ring!"))

export const DIALOG_129 = DEFINE_DIALOG(129, 1, 5, 30, 200, ("\
Welcome to the Vanish\n\
Cap Switch Course! All of\n\
the blue blocks you find\n\
will become solid once you\n\
step on the Cap Switch.\n\
Youll disappear when you\n\
put on the Vanish Cap, so\n\
youll be able to elude\n\
enemies and walk through\n\
many things. Try it out!"))

export const DIALOG_130 = DEFINE_DIALOG(130, 1, 5, 30, 200, ("\
Welcome to the Metal Cap\n\
Switch Course! Once you\n\
step on the Cap Switch,\n\
the green blocks will\n\
become solid.\n\
When you turn your body\n\
into metal with the Metal\n\
Cap, you can walk\n\
underwater! Try it!"))

export const DIALOG_131 = DEFINE_DIALOG(131, 1, 5, 30, 200, ("\
Welcome to the Wing Cap\n\
Course! Step on the red\n\
switch at the top of the\n\
tower, in the center of\n\
the rainbow ring.\n\
When you trigger the\n\
switch, all of the red\n\
blocks you find will\n\
become solid.\n\
\n\
Try out the Wing Cap! Do\n\
the Triple Jump to take\n\
off and press [Z] to land.\n\
\n\
\n\
Pull back on the Control\n\
Stick to go up and push\n\
forward to nose down,\n\
just as you would when\n\
flying an airplane."))

export const DIALOG_132 = DEFINE_DIALOG(132, 1, 4, 30, 200, ("\
Whoa, Mario, pal, you\n\
arent trying to cheat,\n\
are you? Shortcuts arent\n\
allowed.\n\
Now, I know that you\n\
know better. Youre\n\
disqualified! Next time,\n\
play fair!"))

export const DIALOG_133 = DEFINE_DIALOG(133, 1, 6, 30, 200, ("\
Am I glad to see you! The\n\
Princess...and I...and,\n\
well, everybody...were all\n\
trapped inside the castle\n\
walls.\n\
\n\
Bowser has stolen the\n\
castles Stars, and hes\n\
using their power to\n\
create his own world in\n\
the paintings and walls.\n\
\n\
Please recover the Power\n\
Stars! As you find them,\n\
you can use their power\n\
to open the doors that\n\
Bowser has sealed.\n\
\n\
There are four rooms on\n\
the first floor. Start in\n\
the one with the painting\n\
of Bob-omb inside. Its\n\
the only room that Bowser\n\
hasnt sealed.\n\
When you collect eight\n\
Power Stars, youll be\n\
able to open the door\n\
with the big star. The\n\
Princess must be inside!"))

export const DIALOG_134 = DEFINE_DIALOG(134, 1, 5, 30, 200, ("\
The names of the Stars\n\
are also hints for\n\
finding them. They are\n\
displayed at the beginning\n\
of each course.\n\
You can collect the Stars\n\
in any order. You wont\n\
find some Stars, enemies\n\
or items unless you select\n\
a specific Star.\n\
After you collect some\n\
Stars, you can try\n\
another course.\n\
Were all waiting for\n\
your help!"))

export const DIALOG_135 = DEFINE_DIALOG(135, 1, 5, 30, 200, ("\
It was Bowser who stole\n\
the Stars. I saw him with\n\
my own eyes!\n\
\n\
\n\
Hes hidden six Stars in\n\
each course, but you\n\
wont find all of them in\n\
some courses until you\n\
press the Cap Switches.\n\
The Stars youve found\n\
will show on each courses\n\
starting screen.\n\
\n\
\n\
If you want to see some\n\
of the enemies youve\n\
already defeated, select\n\
the Stars you recovered\n\
from them."))

export const DIALOG_136 = DEFINE_DIALOG(136, 1, 6, 30, 200, ("\
Wow! Youve already\n\
recovered that many\n\
Stars? Way to go, Mario!\n\
Ill bet youll have us out\n\
of here in no time!\n\
\n\
Be careful, though.\n\
Bowser and his band\n\
wrote the book on 『bad.』\n\
Take my advice: When you\n\
need to recover from\n\
injuries, collect coins.\n\
Yellow Coins refill one\n\
piece of the Power Meter,\n\
Red Coins refill two\n\
pieces, and Blue Coins\n\
refill five.\n\
\n\
To make Blue Coins\n\
appear, pound on Blue\n\
Coin Blocks.\n\
\n\
\n\
\n\
Also, if you fall from\n\
high places, youll\n\
minimize damage if you\n\
Pound the Ground as you\n\
land."))

export const DIALOG_137 = DEFINE_DIALOG(137, 1, 6, 30, 200, ("\
Thanks, Mario! The castle\n\
is recovering its energy\n\
as you retrieve Power\n\
Stars, and youve chased\n\
Bowser right out of here,\n\
on to some area ahead.\n\
Oh, by the by, are you\n\
collecting coins? Special\n\
Stars appear when you\n\
collect 100 coins in each\n\
of the 15 courses!"))

export const DIALOG_138 = DEFINE_DIALOG(138, 1, 3, 30, 200, ("\
Down: Underground Lake\n\
Left: Black Hole\n\
Right: Hazy Maze (Closed)"))

export const DIALOG_139 = DEFINE_DIALOG(139, 1, 6, 30, 200, ("\
Above: Automatic Elevator\n\
Elevator begins\n\
automatically and follows\n\
pre-set course.\n\
It disappears\n\
automatically, too."))

export const DIALOG_140 = DEFINE_DIALOG(140, 1, 6, 30, 200, ("\
Elevator Area\n\
Right: Hazy Maze\n\
/// Entrance\n\
Left: Black Hole\n\
///Elevator 1\n\
Arrow: You are here"))

export const DIALOG_141 = DEFINE_DIALOG(141, 1, 5, 150, 200, ("\
Youve recovered one of\n\
the stolen Power Stars!\n\
Now you can open some of\n\
the sealed doors in the\n\
castle.\n\
Try the Princesss room\n\
on the second floor and\n\
the room with the\n\
painting of Whomps\n\
Fortress on Floor 1.\n\
Bowsers troops are still\n\
gaining power, so you\n\
cant give up. Save us,\n\
Mario! Keep searching for\n\
Stars!"))

export const DIALOG_142 = DEFINE_DIALOG(142, 1, 5, 150, 200, ("\
Youve recovered three\n\
Power Stars! Now you can\n\
open any door with a 3\n\
on its star.\n\
\n\
You can come and go from\n\
the open courses as you\n\
please. The enemies ahead\n\
are even meaner, so be\n\
careful!"))

export const DIALOG_143 = DEFINE_DIALOG(143, 1, 6, 150, 200, ("\
Youve recovered eight of\n\
the Power Stars! Now you\n\
can open the door with\n\
the big Star! But Bowser\n\
is just ahead...can you\n\
hear the Princess calling?"))

export const DIALOG_144 = DEFINE_DIALOG(144, 1, 6, 150, 200, ("\
Youve recovered 30\n\
Power Stars! Now you can\n\
open the door with the\n\
big Star! But before you\n\
move on, hows it going\n\
otherwise?\n\
Did you pound the two\n\
columns down? You didnt\n\
lose your hat, did you?\n\
If you did, youll have to\n\
stomp on the condor to\n\
get it back!\n\
They say that Bowser has\n\
sneaked out of the sea\n\
and into the underground.\n\
Have you finally\n\
cornered him?"))

export const DIALOG_145 = DEFINE_DIALOG(145, 1, 6, 150, 200, ("\
Youve recovered 50\n\
Power Stars! Now you can\n\
open the Star Door on the\n\
third floor. Bowsers\n\
there, you know.\n\
\n\
Oh! Youve found all of\n\
the Cap Switches, havent\n\
you? Red, green and blue?\n\
The Caps you get from the\n\
colored blocks are really\n\
helpful.\n\
Hurry along, now. The\n\
third floor is just ahead."))

export const DIALOG_146 = DEFINE_DIALOG(146, 1, 6, 150, 200, ("\
Youve found 70 Power\n\
Stars! The mystery of the\n\
endless stairs is solved,\n\
thanks to you--and is\n\
Bowser ever upset! Now,\n\
on to the final bout!"))

export const DIALOG_147 = DEFINE_DIALOG(147, 1, 5, 30, 200, ("\
Are you using the Cap\n\
Blocks? You really should,\n\
you know.\n\
\n\
\n\
To make them solid so you\n\
can break them, you have\n\
to press the colored Cap\n\
Switches in the castles\n\
hidden courses.\n\
Youll find the hidden\n\
courses only after\n\
regaining some of the\n\
Power Stars.\n\
\n\
The Cap Blocks are a big\n\
help! Red for the Wing\n\
Cap, green for the Metal\n\
Cap, blue for the Vanish\n\
Cap."))

export const DIALOG_148 = DEFINE_DIALOG(148, 1, 6, 30, 200, ("\
Snowman Mountain ahead.\n\
Keep out! And dont try\n\
the Triple Jump over the\n\
ice block shooter.\n\
\n\
\n\
If you fall into the\n\
freezing pond, your power\n\
decreases quickly, and\n\
you wont recover\n\
automatically.\n\
//--The Snowman"))

export const DIALOG_149 = DEFINE_DIALOG(149, 1, 3, 30, 200, ("\
Welcome to\n\
Princess Toadstools\n\
secret slide!\n\
Theres a Star hidden\n\
here that Bowser couldnt\n\
find.\n\
When you slide, press\n\
forward to speed up,\n\
pull back to slow down.\n\
If you slide really\n\
fast, youll win the Star!"))

export const DIALOG_150 = DEFINE_DIALOG(150, 1, 5, 30, 200, ("\
Waaaa! Youve flooded my\n\
house! Wh-why?? Look at\n\
this mess! What am I\n\
going to do now?\n\
\n\
The ceilings ruined, the\n\
floor is soaked...what to\n\
do, what to do? Huff...\n\
huff...it makes me so...\n\
MAD!!!\n\
Everythings been going\n\
wrong ever since I got\n\
this Star...Its so shiny,\n\
but it makes me feel...\n\
strange..."))

export const DIALOG_151 = DEFINE_DIALOG(151, 1, 4, 30, 200, ("\
I cant take this\n\
anymore! First you get\n\
me all wet, then you\n\
stomp on me!\n\
Now Im really, really,\n\
REALLY mad!\n\
Waaaaaaaaaaaaaaaaa!!!"))

export const DIALOG_152 = DEFINE_DIALOG(152, 1, 3, 30, 200, ("\
Owwch! Uncle! Uncle!\n\
Okay, I give. Take this\n\
Star!\n\
Whew! I feel better now.\n\
I dont really need it\n\
anymore, anyway--\n\
I can see the stars\n\
through my ceiling at\n\
night.\n\
They make me feel...\n\
...peaceful. Please, come\n\
back and visit anytime."))

export const DIALOG_153 = DEFINE_DIALOG(153, 1, 4, 30, 200, ("\
Hey! Whos there?\n\
Whats climbing on me?\n\
Is it an ice ant?\n\
A snow flea?\n\
Whatever it is, its\n\
bugging me! I think Ill\n\
blow it away!"))

export const DIALOG_154 = DEFINE_DIALOG(154, 1, 5, 30, 200, ("\
Hold on to your hat! If\n\
you lose it, youll be\n\
easily injured. If you\n\
lose it, look for it in the\n\
course where you lost it.\n\
Speaking of lost, the\n\
Princess is still stuck in\n\
the walls somewhere.\n\
Please help, Mario!\n\
\n\
Oh, you know that there\n\
are secret worlds in the\n\
walls as well as in the\n\
paintings, right?"))

export const DIALOG_155 = DEFINE_DIALOG(155, 1, 6, 30, 200, ("\
Thanks to the power of\n\
the Stars, life is\n\
returning to the castle.\n\
Please, Mario, you have\n\
to give Bowser the boot!\n\
\n\
Here, let me tell you a\n\
little something about the\n\
castle. In the room with\n\
the mirrors, look carefully\n\
for anything thats not\n\
reflected in the mirror.\n\
And when you go to the\n\
water town, you can flood\n\
it with a high jump into\n\
the painting."))

export const DIALOG_156 = DEFINE_DIALOG(156, 1, 5, 30, 200, ("\
The world inside the\n\
clock is so strange!\n\
When you jump inside,\n\
watch the position of\n\
the big hand!"))

export const DIALOG_157 = DEFINE_DIALOG(157, 1, 5, 30, 200, ("\
Watch out! Dont let\n\
yourself be swallowed by\n\
quicksand.\n\
\n\
\n\
If you sink into the sand,\n\
you wont be able to\n\
jump, and if your head\n\
goes under, youll be\n\
smothered.\n\
The dark areas are\n\
bottomless pits."))

export const DIALOG_158 = DEFINE_DIALOG(158, 1, 6, 30, 200, ("\
1. If you jump repeatedly\n\
and time it right, youll\n\
jump higher and higher.\n\
If you run really fast and\n\
time three jumps right,\n\
you can do a Triple Jump.\n\
2. Jump into a solid wall,\n\
then jump again when you\n\
hit the wall. You can\n\
bounce to a higher level\n\
using this Wall Kick."))

export const DIALOG_159 = DEFINE_DIALOG(159, 1, 6, 30, 200, ("\
3. If you stop, press [Z]\n\
to crouch, then jump, you\n\
can perform a Backward\n\
Somersault. To do a Long\n\
Jump, run fast, press [Z],\n\
then jump."))

export const DIALOG_160 = DEFINE_DIALOG(160, 1, 4, 30, 200, ("\
Press [B] while running\n\
fast to do a Body Slide\n\
attack. To stand while\n\
sliding, press [A] or [B]."))

export const DIALOG_161 = DEFINE_DIALOG(161, 1, 4, 30, 200, ("\
Mario!!!\n\
It that really you???\n\
It has been so long since\n\
our last adventure!\n\
They told me that I might\n\
see you if I waited here,\n\
but Id just about given\n\
up hope!\n\
Is it true? Have you\n\
really beaten Bowser? And\n\
restored the Stars to the\n\
castle?\n\
And saved the Princess?\n\
I knew you could do it!\n\
Now I have a very special\n\
message for you.\n\
『Thanks for playing Super\n\
Mario 64! This is the\n\
end of the game, but not\n\
the end of the fun.\n\
We want you to keep on\n\
playing, so we have a\n\
little something for you.\n\
We hope that you like it!\n\
Enjoy!!!』\n\
\n\
The Super Mario 64 Team"))

export const DIALOG_162 = DEFINE_DIALOG(162, 1, 4, 30, 200, ("\
No, no, no! Not you\n\
again! Im in a great\n\
hurry, cant you see?\n\
\n\
Ive no time to squabble\n\
over Stars. Here, have it.\n\
I never meant to hide it\n\
from you...\n\
Its just that Im in such\n\
a rush. Thats it, thats\n\
all. Now, I must be off.\n\
Owww! Let me go!"))

export const DIALOG_163 = DEFINE_DIALOG(163, 1, 5, 30, 200, ("\
Noooo! Youve really\n\
beaten me this time,\n\
Mario! I cant stand\n\
losing to you!\n\
\n\
My troops...worthless!\n\
Theyve turned over all\n\
the Power Stars! What?!\n\
There are 120 in all???\n\
\n\
Amazing! There were some\n\
in the castle that I\n\
missed??!!\n\
\n\
\n\
Now I see peace\n\
returning to the world...\n\
Oooo! I really hate that!\n\
I cant watch--\n\
Im outta here!\n\
Just you wait until next\n\
time. Until then, keep\n\
that Control Stick\n\
smokin!\n\
Buwaa ha ha!"))

export const DIALOG_164 = DEFINE_DIALOG(164, 1, 4, 30, 200, ("\
Mario! Whats up, pal?\n\
I havent been on the\n\
slide lately, so Im out\n\
of shape.\n\
Still, Im always up for a\n\
good race, especially\n\
against an old sleddin\n\
buddy.\n\
Whaddya say?\n\
Ready...set...\n\
\n\
//Go//// Dont Go"))

export const DIALOG_165 = DEFINE_DIALOG(165, 1, 5, 30, 200, ("\
I take no responsibility\n\
whatsoever for those who\n\
get dizzy and pass out\n\
from running around\n\
this post."))

export const DIALOG_166 = DEFINE_DIALOG(166, 1, 4, 30, 200, ("\
Ill be back soon.\n\
Im out training now,\n\
so come back later.\n\
//--Koopa the Quick"))

export const DIALOG_167 = DEFINE_DIALOG(167, 1, 4, 30, 200, ("\
Princess Toadstools\n\
castle is just ahead.\n\
\n\
\n\
Press [A] to jump, [Z] to\n\
crouch, and [B] to punch,\n\
read a sign, or grab\n\
something.\n\
Press [B] again to throw\n\
something youre holding."))

export const DIALOG_168 = DEFINE_DIALOG(168, 1, 5, 30, 200, ("\
Hey! Knock it off! Thats\n\
the second time youve\n\
nailed me. Now youre\n\
asking for it, linguine\n\
breath!"))

export const DIALOG_169 = DEFINE_DIALOG(169, 1, 4, 30, 200, ("\
Keep out!\n\
That means you!\n\
Arrgghh!\n\
\n\
Anyone entering this cave\n\
without permission will\n\
meet certain disaster."))

export const seg2_dialog_table = [
    DIALOG_000, DIALOG_001, DIALOG_002, DIALOG_003, DIALOG_004, DIALOG_005, DIALOG_006, DIALOG_007,
    DIALOG_008, DIALOG_009, DIALOG_010, DIALOG_011, DIALOG_012, DIALOG_013, DIALOG_014, DIALOG_015,
    DIALOG_016, DIALOG_017, DIALOG_018, DIALOG_019, DIALOG_020, DIALOG_021, DIALOG_022, DIALOG_023,
    DIALOG_024, DIALOG_025, DIALOG_026, DIALOG_027, DIALOG_028, DIALOG_029, DIALOG_030, DIALOG_031,
    DIALOG_032, DIALOG_033, DIALOG_034, DIALOG_035, DIALOG_036, DIALOG_037, DIALOG_038, DIALOG_039,
    DIALOG_040, DIALOG_041, DIALOG_042, DIALOG_043, DIALOG_044, DIALOG_045, DIALOG_046, DIALOG_047,
    DIALOG_048, DIALOG_049, DIALOG_050, DIALOG_051, DIALOG_052, DIALOG_053, DIALOG_054, DIALOG_055,
    DIALOG_056, DIALOG_057, DIALOG_058, DIALOG_059, DIALOG_060, DIALOG_061, DIALOG_062, DIALOG_063,
    DIALOG_064, DIALOG_065, DIALOG_066, DIALOG_067, DIALOG_068, DIALOG_069, DIALOG_070, DIALOG_071,
    DIALOG_072, DIALOG_073, DIALOG_074, DIALOG_075, DIALOG_076, DIALOG_077, DIALOG_078, DIALOG_079,
    DIALOG_080, DIALOG_081, DIALOG_082, DIALOG_083, DIALOG_084, DIALOG_085, DIALOG_086, DIALOG_087,
    DIALOG_088, DIALOG_089, DIALOG_090, DIALOG_091, DIALOG_092, DIALOG_093, DIALOG_094, DIALOG_095,
    DIALOG_096, DIALOG_097, DIALOG_098, DIALOG_099, DIALOG_100, DIALOG_101, DIALOG_102, DIALOG_103,
    DIALOG_104, DIALOG_105, DIALOG_106, DIALOG_107, DIALOG_108, DIALOG_109, DIALOG_110, DIALOG_111,
    DIALOG_112, DIALOG_113, DIALOG_114, DIALOG_115, DIALOG_116, DIALOG_117, DIALOG_118, DIALOG_119,
    DIALOG_120, DIALOG_121, DIALOG_122, DIALOG_123, DIALOG_124, DIALOG_125, DIALOG_126, DIALOG_127,
    DIALOG_128, DIALOG_129, DIALOG_130, DIALOG_131, DIALOG_132, DIALOG_133, DIALOG_134, DIALOG_135,
    DIALOG_136, DIALOG_137, DIALOG_138, DIALOG_139, DIALOG_140, DIALOG_141, DIALOG_142, DIALOG_143,
    DIALOG_144, DIALOG_145, DIALOG_146, DIALOG_147, DIALOG_148, DIALOG_149, DIALOG_150, DIALOG_151,
    DIALOG_152, DIALOG_153, DIALOG_154, DIALOG_155, DIALOG_156, DIALOG_157, DIALOG_158, DIALOG_159,
    DIALOG_160, DIALOG_161, DIALOG_162, DIALOG_163, DIALOG_164, DIALOG_165, DIALOG_166, DIALOG_167,
    DIALOG_168, DIALOG_169, null
]