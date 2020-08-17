import { intro_seg7_texture_070086A0, intro_seg7_texture_07007EA0, intro_seg7_texture_0700B4A0, intro_seg7_texture_0700C4A0 } from "./levels/intro/leveldata"
import { castle_grounds_seg7_texture_07000000 } from "./levels/castle_grounds/areas/1/4/model.inc.js"
import { title_texture_0A0001C0, title_texture_0A000E40, title_texture_0A001AC0, title_texture_0A002740 } from "./levels/intro/title_screen_bg"
import { tree_seg3_texture_0302DE28, tree_seg3_texture_0302EE28, tree_seg3_texture_0302FF60, tree_seg3_texture_03031048, tree_seg3_texture_03032218 } from "./actors/tree/model.inc"
import { texture_shadow_quarter_circle } from "./common_gfx/segment2"
import * as SkyboxWater from "./textures/skyboxes/water_skybox"

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
    outside_0900BC00,
} from "./textures/outside"

import { 
    mario_texture_yellow_button, 
    mario_texture_eyes_front, 
    mario_texture_hair_sideburn, 
    mario_texture_mustache, 
    mario_texture_m_logo,
    mario_texture_eyes_half_closed,
    mario_texture_eyes_closed
} from "./actors/mario/model.inc"

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
    outside_0900B400.push(...data['textures/outside/castle_grounds_textures.0B400.rgba16.png'].split(','))
    outside_0900BC00.push(...data['textures/outside/castle_grounds_textures.0BC00.ia16.png'].split(','))

    mario_texture_yellow_button.push ( ...data['actors/mario/mario_overalls_button.rgba16.png'].split(','))
    mario_texture_m_logo.push ( ...data['actors/mario/mario_logo.rgba16.png'].split(','))
    mario_texture_mustache.push ( ...data["actors/mario/mario_mustache.rgba16.png"].split(','))
    mario_texture_hair_sideburn.push ( ...data["actors/mario/mario_sideburn.rgba16.png"].split(','))
    mario_texture_eyes_front.push ( ...data["actors/mario/mario_eyes_center.rgba16.png"].split(','))
    mario_texture_eyes_half_closed.push ( ...data["actors/mario/mario_eyes_half_closed.rgba16.png"].split(','))
    mario_texture_eyes_closed.push(...data["actors/mario/mario_eyes_closed.rgba16.png"].split(','))

    tree_seg3_texture_0302DE28.push(...data["actors/tree/tree_left_side.rgba16.png"].split(','))
    tree_seg3_texture_0302EE28.push(...data["actors/tree/tree_right_side.rgba16.png"].split(','))
    tree_seg3_texture_0302FF60.push(...data["actors/tree/pine_tree.rgba16.png"].split(','))
    tree_seg3_texture_03031048.push(...data["actors/tree/snowy_pine_tree.rgba16.png"].split(','))
    tree_seg3_texture_03032218.push(...data["actors/tree/palm_tree.rgba16.png"].split(','))

    texture_shadow_quarter_circle.push(...data["textures/segment2/shadow_quarter_circle.ia8.png"].split(','))

    SkyboxWater.water_skybox_texture_00000.push(...data["water_skybox_texture_00000"].split(','))
    SkyboxWater.water_skybox_texture_00001.push(...data["water_skybox_texture_00001"].split(','))
    SkyboxWater.water_skybox_texture_00002.push(...data["water_skybox_texture_00002"].split(','))
    SkyboxWater.water_skybox_texture_00003.push(...data["water_skybox_texture_00003"].split(','))
    SkyboxWater.water_skybox_texture_00004.push(...data["water_skybox_texture_00004"].split(','))
    SkyboxWater.water_skybox_texture_00005.push(...data["water_skybox_texture_00005"].split(','))
    SkyboxWater.water_skybox_texture_00006.push(...data["water_skybox_texture_00006"].split(','))
    SkyboxWater.water_skybox_texture_00007.push(...data["water_skybox_texture_00007"].split(','))
    SkyboxWater.water_skybox_texture_00008.push(...data["water_skybox_texture_00008"].split(','))
    SkyboxWater.water_skybox_texture_00009.push(...data["water_skybox_texture_00009"].split(','))
    SkyboxWater.water_skybox_texture_0000A.push(...data["water_skybox_texture_0000A"].split(','))
    SkyboxWater.water_skybox_texture_0000B.push(...data["water_skybox_texture_0000B"].split(','))
    SkyboxWater.water_skybox_texture_0000C.push(...data["water_skybox_texture_0000C"].split(','))
    SkyboxWater.water_skybox_texture_0000D.push(...data["water_skybox_texture_0000D"].split(','))
    SkyboxWater.water_skybox_texture_0000E.push(...data["water_skybox_texture_0000E"].split(','))
    SkyboxWater.water_skybox_texture_0000F.push(...data["water_skybox_texture_0000F"].split(','))

    SkyboxWater.water_skybox_texture_00010.push(...data["water_skybox_texture_00010"].split(','))
    SkyboxWater.water_skybox_texture_00011.push(...data["water_skybox_texture_00011"].split(','))
    SkyboxWater.water_skybox_texture_00012.push(...data["water_skybox_texture_00012"].split(','))
    SkyboxWater.water_skybox_texture_00013.push(...data["water_skybox_texture_00013"].split(','))
    SkyboxWater.water_skybox_texture_00014.push(...data["water_skybox_texture_00014"].split(','))
    SkyboxWater.water_skybox_texture_00015.push(...data["water_skybox_texture_00015"].split(','))
    SkyboxWater.water_skybox_texture_00016.push(...data["water_skybox_texture_00016"].split(','))
    SkyboxWater.water_skybox_texture_00017.push(...data["water_skybox_texture_00017"].split(','))
    SkyboxWater.water_skybox_texture_00018.push(...data["water_skybox_texture_00018"].split(','))
    SkyboxWater.water_skybox_texture_00019.push(...data["water_skybox_texture_00019"].split(','))
    SkyboxWater.water_skybox_texture_0001A.push(...data["water_skybox_texture_0001A"].split(','))
    SkyboxWater.water_skybox_texture_0001B.push(...data["water_skybox_texture_0001B"].split(','))
    SkyboxWater.water_skybox_texture_0001C.push(...data["water_skybox_texture_0001C"].split(','))
    SkyboxWater.water_skybox_texture_0001D.push(...data["water_skybox_texture_0001D"].split(','))
    SkyboxWater.water_skybox_texture_0001E.push(...data["water_skybox_texture_0001E"].split(','))
    SkyboxWater.water_skybox_texture_0001F.push(...data["water_skybox_texture_0001F"].split(','))

    SkyboxWater.water_skybox_texture_00020.push(...data["water_skybox_texture_00020"].split(','))
    SkyboxWater.water_skybox_texture_00021.push(...data["water_skybox_texture_00021"].split(','))
    SkyboxWater.water_skybox_texture_00022.push(...data["water_skybox_texture_00022"].split(','))
    SkyboxWater.water_skybox_texture_00023.push(...data["water_skybox_texture_00023"].split(','))
    SkyboxWater.water_skybox_texture_00024.push(...data["water_skybox_texture_00024"].split(','))
    SkyboxWater.water_skybox_texture_00025.push(...data["water_skybox_texture_00025"].split(','))
    SkyboxWater.water_skybox_texture_00026.push(...data["water_skybox_texture_00026"].split(','))
    SkyboxWater.water_skybox_texture_00027.push(...data["water_skybox_texture_00027"].split(','))
    SkyboxWater.water_skybox_texture_00028.push(...data["water_skybox_texture_00028"].split(','))
    SkyboxWater.water_skybox_texture_00029.push(...data["water_skybox_texture_00029"].split(','))
    SkyboxWater.water_skybox_texture_0002A.push(...data["water_skybox_texture_0002A"].split(','))
    SkyboxWater.water_skybox_texture_0002B.push(...data["water_skybox_texture_0002B"].split(','))
    SkyboxWater.water_skybox_texture_0002C.push(...data["water_skybox_texture_0002C"].split(','))
    SkyboxWater.water_skybox_texture_0002D.push(...data["water_skybox_texture_0002D"].split(','))
    SkyboxWater.water_skybox_texture_0002E.push(...data["water_skybox_texture_0002E"].split(','))
    SkyboxWater.water_skybox_texture_0002F.push(...data["water_skybox_texture_0002F"].split(','))

    SkyboxWater.water_skybox_texture_00030.push(...data["water_skybox_texture_00030"].split(','))
    SkyboxWater.water_skybox_texture_00031.push(...data["water_skybox_texture_00031"].split(','))
    SkyboxWater.water_skybox_texture_00032.push(...data["water_skybox_texture_00032"].split(','))
    SkyboxWater.water_skybox_texture_00033.push(...data["water_skybox_texture_00033"].split(','))
    SkyboxWater.water_skybox_texture_00034.push(...data["water_skybox_texture_00034"].split(','))
    SkyboxWater.water_skybox_texture_00035.push(...data["water_skybox_texture_00035"].split(','))
    SkyboxWater.water_skybox_texture_00036.push(...data["water_skybox_texture_00036"].split(','))
    SkyboxWater.water_skybox_texture_00037.push(...data["water_skybox_texture_00037"].split(','))
    SkyboxWater.water_skybox_texture_00038.push(...data["water_skybox_texture_00038"].split(','))
    SkyboxWater.water_skybox_texture_00039.push(...data["water_skybox_texture_00039"].split(','))
    SkyboxWater.water_skybox_texture_0003A.push(...data["water_skybox_texture_0003A"].split(','))
    SkyboxWater.water_skybox_texture_0003B.push(...data["water_skybox_texture_0003B"].split(','))
    SkyboxWater.water_skybox_texture_0003C.push(...data["water_skybox_texture_0003C"].split(','))
    SkyboxWater.water_skybox_texture_0003D.push(...data["water_skybox_texture_0003D"].split(','))
    SkyboxWater.water_skybox_texture_0003E.push(...data["water_skybox_texture_0003E"].split(','))
    SkyboxWater.water_skybox_texture_0003F.push(...data["water_skybox_texture_0003F"].split(','))

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
