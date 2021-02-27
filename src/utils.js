export const int16 = (num) => {
    num = parseInt(num)
    num = num > 32767 ? num - 65536 : num
    num = num < -32768 ? num + 65536 : num
    return num
}

export const uint16 = (num) => {
    num = parseInt(num)
    num = num > 65535 ? num - 65536 : num
    num = num < 0 ? num + 65536 : num
    return num
}

export const int32 = (num) => {
    num = parseInt(num)
    num = num > 2147483647 ? num - 4294967296 : num
    num = num < -2147483648 ? num + 4294967296 : num
    return num
}

export const uint32 = (num) => {
    num = parseInt(num)
    num = num > 4294967295 ? num - 4294967296 : num
    num = num < 0 ? num + 4294967296 : num
    return num
}

export const sins = (num) => {
    return Math.sin(num / 0x8000 * Math.PI)
}

export const coss = (num) => {
    return Math.cos(num / 0x8000 * Math.PI)
}

export const random_uint16 = () => {
    return Math.floor(Math.random() * 65535)
}