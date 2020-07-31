import { intro_seg7_texture_070086A0, intro_seg7_texture_07007EA0, intro_seg7_texture_0700B4A0, intro_seg7_texture_0700C4A0 } from "./levels/intro/leveldata"
import { castle_grounds_seg7_texture_07000000 } from "./levels/castle_grounds/areas/1/4/model.inc.js"
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
    gd_texture_sparkle_4 } from "./goddard/GoddardRenderer"

import { 
    outside_09000000,
    outside_09001000,
    outside_09002000,
    outside_09003000,
    outside_09003800, 
    outside_09004000, 
    outside_09004800, 
    outside_09006000,
    outside_09006800, 
    outside_09007800,
    outside_09008000, 
    outside_09009000, 
    outside_09009800,
    outside_0900A000,
    outside_0900B000,
    outside_0900B400,

} from "./textures/outside"

import { 
    mario_texture_yellow_button, 
    mario_texture_eyes_front, 
    mario_texture_hair_sideburn, 
    mario_texture_mustache, 
    mario_texture_m_logo,
    mario_texture_eyes_half_closed,
    mario_texture_eyes_closed } from "./actors/mario/model.inc"


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
    intro_seg7_texture_0700C4A0.push(...data['levels/intro/3_tm.rgba16.png'].split(','))

    castle_grounds_seg7_texture_07000000.push(...data['levels/castle_grounds/0.rgba16.png'].split(','))

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

    outside_09000000.push(...data['textures/outside/castle_grounds_textures.00000.rgba16.png'].split(','))
    outside_09001000.push(...data['textures/outside/castle_grounds_textures.01000.rgba16.png'].split(','))
    outside_09002000.push(...data['textures/outside/castle_grounds_textures.02000.rgba16.png'].split(','))
    outside_09003000.push(...data['textures/outside/castle_grounds_textures.03000.rgba16.png'].split(','))
    outside_09003800.push( ...data['textures/outside/castle_grounds_textures.03800.rgba16.png'].split(','))
    outside_09004000.push( ...data['textures/outside/castle_grounds_textures.04000.rgba16.png'].split(','))
    outside_09004800.push(...data['textures/outside/castle_grounds_textures.04800.rgba16.png'].split(','))
    outside_09006000.push(...data['textures/outside/castle_grounds_textures.06000.rgba16.png'].split(','))
    outside_09006800.push(...data['textures/outside/castle_grounds_textures.06800.rgba16.png'].split(','))
    outside_09007800.push(...data['textures/outside/castle_grounds_textures.07800.rgba16.png'].split(','))
    outside_09008000.push( ...data['textures/outside/castle_grounds_textures.08000.rgba16.png'].split(','))
    outside_09009000.push( ...data['textures/outside/castle_grounds_textures.09000.rgba16.png'].split(','))
    outside_09009800.push(...data['textures/outside/castle_grounds_textures.09800.rgba16.png'].split(','))
    outside_0900A000.push(...data['textures/outside/castle_grounds_textures.0A000.rgba16.png'].split(','))
    outside_0900B000.push( ...data['textures/outside/castle_grounds_textures.0B000.rgba16.png'].split(','))
    outside_0900B400.push( ...data['textures/outside/castle_grounds_textures.0B400.rgba16.png'].split(','))

    mario_texture_yellow_button.push ( ...data['actors/mario/mario_overalls_button.rgba16.png'].split(','))
    mario_texture_m_logo.push ( ...data['actors/mario/mario_logo.rgba16.png'].split(','))
    mario_texture_mustache.push ( ...data["actors/mario/mario_mustache.rgba16.png"].split(','))
    mario_texture_hair_sideburn.push ( ...data["actors/mario/mario_sideburn.rgba16.png"].split(','))
    mario_texture_eyes_front.push ( ...data["actors/mario/mario_eyes_center.rgba16.png"].split(','))
    mario_texture_eyes_half_closed.push ( ...data["actors/mario/mario_eyes_half_closed.rgba16.png"].split(','))
    mario_texture_eyes_closed.push ( ...data["actors/mario/mario_eyes_closed.rgba16.png"].split(','))

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
