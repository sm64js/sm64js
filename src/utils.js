export const int16 = (num) => {
    num = num > 32767 ? num - 65536 : num
    num = num < -32768 ? num + 65536 : num
    return num
}

export const uint16 = (num) => {
    num = num > 65535 ? num - 65536 : num
    num = num < 0 ? num + 65536 : num
    return num
}

export const int32 = (num) => {
    num = num > 2147483647 ? num - 4294967296 : num
    num = num < -2147483648 ? num + 4294967296 : num
    return num
}

export const uint32 = (num) => {
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
    1001: "CTF/Race Map",
    1000: "Mushroom Battlefield",
    16: "Castle Grounds",
    26: "Castle Courtyard",
    9: "Bob-omb Battlefield",
    8: "Shifting Sand Land",
    7: "Hazy Maze Cave",
    4: "Big Boo's Haunt",
    5: "Cool, Cool Mountain",
    27: "Princess's Secret Slide",
    36: "Tall, Tall Mountain",
    24: "Whomps Fortress"
}
