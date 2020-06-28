import { intro_seg7_texture_070086A0, intro_seg7_texture_07007EA0, intro_seg7_texture_0700B4A0, intro_seg7_texture_0700C4A0 } from "./levels/intro/leveldata"
import { title_texture_0A0001C0, title_texture_0A000E40, title_texture_0A001AC0, title_texture_0A002740 } from "./levels/intro/title_screen_bg"
import {
    gd_texture_mario_face_shine,
    gd_texture_red_star_0,
    gd_texture_red_star_1,
    gd_texture_red_star_2,
    gd_texture_red_star_3,
    gd_texture_red_star_4,
    gd_texture_red_star_5,
    gd_texture_red_star_6,
    gd_texture_red_star_7,
    gd_texture_white_star_0,
    gd_texture_white_star_1,
    gd_texture_white_star_2,
    gd_texture_white_star_3,
    gd_texture_white_star_4,
    gd_texture_white_star_5,
    gd_texture_white_star_6,
    gd_texture_white_star_7,
    gd_texture_sparkle_0,
    gd_texture_sparkle_1,
    gd_texture_sparkle_2,
    gd_texture_sparkle_3,
    gd_texture_sparkle_4
 } from "./goddard/GoddardRenderer"

const processExtractedResults = (data) => {
    const msgElement = document.getElementById('uploadMessage')
    if (data == 'Fail') {
        msgElement.innerHTML = "Rom Extraction Fail"
        msgElement.style = "color:red"
        return
    }
    intro_seg7_texture_070086A0.push( ...data['levels/intro/1.rgba16.png'].split(',') )
    intro_seg7_texture_07007EA0.push( ...data['levels/intro/0.rgba16.png'].split(',') )
    intro_seg7_texture_0700B4A0.push( ...data['levels/intro/2_copyright.rgba16.png'].split(','))
    intro_seg7_texture_0700C4A0.push( ...data['levels/intro/3_tm.rgba16.png'].split(','))
    gd_texture_mario_face_shine.push( ...data['textures/intro_raw/mario_face_shine.ia8.png'].split(','))
    gd_texture_red_star_0.push( ...data['textures/intro_raw/red_star_0.rgba16.png'].split(','))
    gd_texture_red_star_1.push( ...data['textures/intro_raw/red_star_1.rgba16.png'].split(','))
    gd_texture_red_star_2.push( ...data['textures/intro_raw/red_star_2.rgba16.png'].split(','))
    gd_texture_red_star_3.push( ...data['textures/intro_raw/red_star_3.rgba16.png'].split(','))
    gd_texture_red_star_4.push( ...data['textures/intro_raw/red_star_4.rgba16.png'].split(','))
    gd_texture_red_star_5.push( ...data['textures/intro_raw/red_star_5.rgba16.png'].split(','))
    gd_texture_red_star_6.push( ...data['textures/intro_raw/red_star_6.rgba16.png'].split(','))
    gd_texture_red_star_7.push( ...data['textures/intro_raw/red_star_7.rgba16.png'].split(','))
    gd_texture_white_star_0.push( ...data['textures/intro_raw/white_star_0.rgba16.png'].split(','))
    gd_texture_white_star_1.push( ...data['textures/intro_raw/white_star_1.rgba16.png'].split(','))
    gd_texture_white_star_2.push( ...data['textures/intro_raw/white_star_2.rgba16.png'].split(','))
    gd_texture_white_star_3.push( ...data['textures/intro_raw/white_star_3.rgba16.png'].split(','))
    gd_texture_white_star_4.push( ...data['textures/intro_raw/white_star_4.rgba16.png'].split(','))
    gd_texture_white_star_5.push( ...data['textures/intro_raw/white_star_5.rgba16.png'].split(','))
    gd_texture_white_star_6.push( ...data['textures/intro_raw/white_star_6.rgba16.png'].split(','))
    gd_texture_white_star_7.push( ...data['textures/intro_raw/white_star_7.rgba16.png'].split(','))
    gd_texture_sparkle_0.push( ...data['textures/intro_raw/sparkle_0.rgba16.png'].split(','))
    gd_texture_sparkle_1.push( ...data['textures/intro_raw/sparkle_1.rgba16.png'].split(','))
    gd_texture_sparkle_2.push( ...data['textures/intro_raw/sparkle_2.rgba16.png'].split(','))
    gd_texture_sparkle_3.push( ...data['textures/intro_raw/sparkle_3.rgba16.png'].split(','))
    gd_texture_sparkle_4.push( ...data['textures/intro_raw/sparkle_4.rgba16.png'].split(','))
    title_texture_0A0001C0.push( ...data['textures/title_screen_bg/title_screen_bg.001C0.rgba16.png'].split(','))
    title_texture_0A000E40.push( ...data['textures/title_screen_bg/title_screen_bg.00E40.rgba16.png'].split(','))
    title_texture_0A001AC0.push( ...data['textures/title_screen_bg/title_screen_bg.01AC0.rgba16.png'].split(','))
    title_texture_0A002740.push( ...data['textures/title_screen_bg/title_screen_bg.02740.rgba16.png'].split(','))
    msgElement.innerHTML = "Rom Texture Extraction Success - You may now start the game"
    msgElement.style = "color:#00ff00"
    document.getElementById("startbutton").disabled = false
}

const url = new URL(window.location.href)
if(url.searchParams.get("romExternal")) {
    $.ajax({
        url: '/romTransfer',
        type: 'GET',
        dataType: 'json',
        data: { romExternal: url.searchParams.get("romExternal")},
        success: (extractedData) => { processExtractedResults(extractedData) }
    })
}

$('#romUpload').submit(
    (e) =>  {
        e.preventDefault()
        $.ajax({
            url: '/romUpload',
            type: 'POST',
            data: new FormData(e.target),
            processData: false,
            contentType: false,
            success: (extractedData) => { processExtractedResults(extractedData) }
        })
    }
)
