//Taunt stuff
window.tauntOpened = false
// const tauntsMap = {
    // "!taunt-wave": 0x1D,
    // "!taunt-die": 0x2E,
    // "!taunt-star": 0xCD,
    // "!taunt-die2": 0x79,
    // "!taunt-shock": 0x7A,
    // "!taunt-magic": 0xB3
// }

export const tcx = 640 * 0.5
export const tcy = 480 * 0.5
export const gfxTscale = 128
export const gfxTscaleICO = 38

export const tauntsPos = [
    [tcx-(gfxTscaleICO*0.5),tcy-(gfxTscaleICO*0.5)],								// 0
    [tcx-(gfxTscaleICO*0.5),tcy-(gfxTscale*0.5)-(gfxTscaleICO*0.5)],				// 1 ; wave
    [tcx+(((gfxTscale*0.5)-gfxTscaleICO)) + (gfxTscaleICO*0.25)+4,(tcy-(gfxTscale*0.5)-(gfxTscaleICO*0.5)) + (gfxTscaleICO * 0.75)],								// 2
    [tcx-(gfxTscaleICO*0.5),tcy-(gfxTscaleICO*0.5)],								// 3
    [tcx+(((gfxTscale*0.5)-gfxTscaleICO)) + (gfxTscaleICO*0.25)+4,(tcy+((gfxTscale*0.5)-(gfxTscaleICO*0.5))) - (gfxTscaleICO * 0.75)],							// 4
    [tcx-(gfxTscaleICO*0.5),tcy+((gfxTscale*0.5)-(gfxTscaleICO*0.5))],								// 5
    [tcx-(((gfxTscale*0.5)+((gfxTscaleICO*0.5)*1.1))) + (gfxTscaleICO*0.25)+4,(tcy+((gfxTscale*0.5)-(gfxTscaleICO*0.5))) - (gfxTscaleICO * 0.75)],												// 6
    [tcx-(gfxTscaleICO*0.5),tcy-(gfxTscaleICO*0.5)],								// 7
    [tcx-(((gfxTscale*0.5)+((gfxTscaleICO*0.5)*1.1))) + (gfxTscaleICO*0.25)+4,(tcy-(gfxTscale*0.5)-(gfxTscaleICO*0.5)) + (gfxTscaleICO * 0.75)]									// 8 - topleft
]
			
export const tauntsPosWheel = [
    [tcx-((gfxTscaleICO*1.1)*0.5),tcy-((gfxTscaleICO*1.1)*0.5)],								// 0
    [tcx-((gfxTscaleICO*1.1)*0.5),tcy-(gfxTscale*0.5)-((gfxTscaleICO*1.1)*0.5)],				// 1 ; wave
    [tcx+(((gfxTscale*0.5)-(gfxTscaleICO*1.1))) + ((gfxTscaleICO*1.1)*0.25)+4,(tcy-(gfxTscale*0.5)-((gfxTscaleICO*1.1)*0.5)) + ((gfxTscaleICO*1.1) * 0.75)],								// 2
    [tcx-((gfxTscaleICO*1.1)*0.5),tcy-((gfxTscaleICO*1.1)*0.5)],								// 3
    [tcx+(((gfxTscale*0.5)-(gfxTscaleICO*1.1))) + ((gfxTscaleICO*1.1)*0.25)+4,(tcy+((gfxTscale*0.5)-((gfxTscaleICO*1.1)*0.5))) - ((gfxTscaleICO*1.1) * 0.75)],							// 4
    [tcx-((gfxTscaleICO*1.1)*0.5),tcy+((gfxTscale*0.5)-((gfxTscaleICO*1.1)*0.5))],								// 5
    [tcx-(((gfxTscale*0.5)+((gfxTscaleICO*0.5)*1.1))) + ((gfxTscaleICO*1.1)*0.25)+4,(tcy+((gfxTscale*0.5)-((gfxTscaleICO*1.1)*0.5))) - ((gfxTscaleICO*1.1) * 0.75)],												// 6
    [tcx-((gfxTscaleICO*1.1)*0.5),tcy-((gfxTscaleICO*1.1)*0.5)],								// 7
    [tcx-(((gfxTscale*0.5)+((gfxTscaleICO*0.5)*1.1))) + ((gfxTscaleICO*1.1)*0.25)+4,(tcy-(gfxTscale*0.5)-((gfxTscaleICO*1.1)*0.5)) + ((gfxTscaleICO*1.1) * 0.75)]									// 8 - topleft
]

export const tauntsMap = [
    -1,								// 0
    0x1D,							// 1 ; wave
    0x79,								// 2
    -1,								// 3
    0xCD,								// 4
    0x7A,								// 5
    0xB3,								// 6
    -1,								// 7
    0x2E,								// 8 - topleft
]
//
export const getSelectedTaunt = () => {
	let IDXb = 0
	let IDX = 0
	if (window.playerInput.buttonDownCu) {IDXb = 1}
	if (window.playerInput.buttonDownCd) {IDXb = -1}
	switch (IDXb) {
		case (0) : {
			IDX = 0;
			if (window.playerInput.buttonDownCr) IDX = 3
			if (window.playerInput.buttonDownCl) IDX = 7
			break;
		}
		case (1) : {
			IDX = 1;
			if (window.playerInput.buttonDownCr) IDX = 2
			if (window.playerInput.buttonDownCl) IDX = 8
			break;
		}
		case (-1) : {
			IDX = 5;
			if (window.playerInput.buttonDownCr) IDX = 4
			if (window.playerInput.buttonDownCl) IDX = 6
			break;
		}
	}
	return IDX
}