export const int16 = (num) => {
    num = parseInt(num)
    num = num > 32767 ? num - 65536 : num
    num = num < -32768 ? num + 65536 : num
    return num
}

// alias
export const s16 = (num) => {
    return int16(num)
}

export const uint16 = (num) => {
    num = parseInt(num)
    num = num > 65535 ? num - 65536 : num
    num = num < 0 ? num + 65536 : num
    return num
}

// alias
export const u16 = (num) => {
    return uint16(num)
}

export const int32 = (num) => {
    num = parseInt(num)
    num = num > 2147483647 ? num - 4294967296 : num
    num = num < -2147483648 ? num + 4294967296 : num
    return num
}

// alias
export const s32 = (num) => {
    return int32(num)
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

export const lerp = (min,max,amt) => { 
	if (amt < 0) amt = 0
	if (amt > 1) amt = 1
    return ((min * (1 - amt)) + (max * amt))
}

export const getSelectedLevel = () => {
    return window.selectedMap
}

export const levelIdToName = {
    4: "Big Boo's Haunt",
    5: "Cool, Cool Mountain",
    6: "Castle Inside First Level",
    7: "Hazy Maze Cave",
    8: "Shifting Sand Land",
    9: "Bob-omb Battlefield",
    10: "Snowman's Land",
    16: "Castle Grounds",
    24: "Whomp's Fortress",
    26: "Castle Courtyard",
    27: "Princess's Secret Slide",
    29: "Tower of the Wing Cap",
    36: "Tall, Tall Mountain",
    56: "Cool, Cool Mountain Slide",
    602: "Castle Inside Second Level",
    999: "Clouded Ruins",
    1000: "Mushroom Battlefield",
    1001: "CTF/Race Map",
    1002: "Starman Fortress",
    1003: "Glider Jungle",
    1004: "Mushroom Raceway",
    1006: "Dolphin Town",
}

export const random_uint16 = () => {
    return Math.floor(Math.random() * 65535)
}

// alias
export const random_u16 = () => {
    return random_uint16()
}

export const random_int16 = () => {
    return Math.floor(Math.random() * 65536 - 32768)
}

export const random_float = () => {
    return Math.random()
}
