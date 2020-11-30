export const int16 = (num) => {
    num = num > 32767 ? num - 65536 : num;
    num = num < -32768 ? num + 65536 : num;
    return num;
}

export const sins = (num) => {
    return Math.sin(num / 0x8000 * Math.PI);
}

export const coss = (num) => {
    return Math.cos(num / 0x8000 * Math.PI);
}

export const lerp = (min,max,amt) => { 
	if (amt < 0) amt = 0
	if (amt > 1) amt = 1
    return ((min * (1 - amt)) + (max * amt))
}

import { LEVEL_CASTLE_GROUNDS, LEVEL_BOB, LEVEL_CCM, LEVEL_PSS, LEVEL_TTM, LEVEL_WF, LEVEL_MBF } from "./levels/level_defines_constants"

export const getSelectedLevel = () => {
    const mapSelect = document.getElementById("mapSelect").value

    switch (mapSelect) {
        case "Mushroom Battlefield": return LEVEL_MBF
        case "Castle Grounds": return LEVEL_CASTLE_GROUNDS
        case "Bob-omb Battlefield": return LEVEL_BOB
        case "Cool, Cool Mountain": return LEVEL_CCM
        case "Princess's Secret Slide": return LEVEL_PSS
        case "Tall, Tall Mountain": return LEVEL_TTM
        case "Whomps Fortress": return LEVEL_WF
        default: throw "no level selected"
    }
}
