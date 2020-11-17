/* CometSPECTRUM color code parser port
    Author: GlitchyPSI
    License: MIT
*/

import { defaultSkinData } from "./cosmetics";
import _ from "lodash";

const classicSkinDataOffsetMap = {
    "overalls": [0, 8],
    "hat": [0x18, 0x20],
    "shirt": [0x18, 0x20],
    "gloves": [0x30, 0x38],
    "boots": [0x48, 0x50],
    "skin": [0x60, 0x68],
    "hair": [0x78, 0x80]
}

// Website related stuff
const colorCodeWindowHtml = $('#colorCodePasteWindow').detach();

$('[data-toggle="colorCodePasteWindowToggle"]').popover({
    container: "body",
    html: true,
    sanitize: false,
    content: colorCodeWindowHtml,
});

window.parseColorCode = (colorcode) => {
    let buffer = new Uint8ClampedArray(0x90);
    let gamesharkLines = colorcode.split(/[\n| ]/);
    let data = defaultSkinData();

    // Parse Gameshark
    for (let i = 0; i < gamesharkLines.length/2; i++) {
        if (gamesharkLines.length < 2){
            break;
        }
        // Get just the offset from known 0x04 location (most color codes are 0x04 anyways)
        let offset = (parseInt(gamesharkLines[i * 2], 16) & 0x00FFFFFF) - 0x7EC20;
        let value = gamesharkLines[(i * 2)+1].match(/.{1,2}/g).map(x => { return parseInt(x, 16) });
        // SPARK color code support removed for now; model is not suitable
        if (offset >= 0 && offset < 0x88){
            buffer.set(value, offset);
        }
    }
    let offsets = classicSkinDataOffsetMap;

    _.forIn(offsets, function (value, key) {
        for (let i = 0; i < 8; i++){
            let newdata = [...buffer.slice(value[0], value[0]+3), ...buffer.slice(value[1], value[1]+3)]
            data[key] = newdata;
        }
    });
    console.log("Skin data loaded from color code");
    return data;
}