import * as SkyboxCCM from "./textures/skyboxes/ccm_skybox"
import * as SkyboxSSL from "./textures/skyboxes/ssl_skybox"
import * as SkyboxWater from "./textures/skyboxes/water_skybox"
import { assets } from "./assets"



import { intro_seg7_texture_070086A0, intro_seg7_texture_07007EA0, intro_seg7_texture_0700B4A0, intro_seg7_texture_0700C4A0 } from "./levels/intro/leveldata"
import { castle_grounds_seg7_texture_07000000, castle_grounds_seg7_texture_07001000, castle_grounds_seg7_texture_07002000 } from "./levels/castle_grounds/texture.inc.js"
import { title_texture_0A0001C0, title_texture_0A000E40, title_texture_0A001AC0, title_texture_0A002740 } from "./levels/intro/title_screen_bg"
import { tree_seg3_texture_0302DE28, tree_seg3_texture_0302EE28, tree_seg3_texture_0302FF60, tree_seg3_texture_03031048, tree_seg3_texture_03032218 } from "./actors/tree/model.inc"
import * as segment2 from "./common_gfx/segment2"

import {
    texture_power_meter_left_side,
    texture_power_meter_right_side,
    texture_power_meter_full,
    texture_power_meter_seven_segments,
    texture_power_meter_six_segments,
    texture_power_meter_five_segments,
    texture_power_meter_four_segments,
    texture_power_meter_three_segments,
    texture_power_meter_two_segments,
    texture_power_meter_one_segments
} from "./actors/power_meter/model.inc"

import {
    ttm_seg7_texture_07000000,
    ttm_seg7_texture_07000800,
    ttm_seg7_texture_07001000,
    ttm_seg7_texture_07001800,
    ttm_seg7_texture_07002000,
    ttm_seg7_texture_07002800,
    ttm_seg7_texture_07003000,
    ttm_seg7_texture_07004000,
} from "./levels/ttm/textures.inc.js"

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
    outside_0900A800,
    outside_09000800,
    outside_09008800
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

import { yellow_sphere_seg5_texture_05000040 } from "./actors/yellow_sphere_small/model.inc"

import { checkerboard_platform_seg8_texture_0800C840, checkerboard_platform_seg8_texture_0800CC40 } from "./actors/checkerboard_platform/model.inc"

import { goomba_seg8_texture_08019530, goomba_seg8_texture_08019D30, goomba_seg8_texture_0801A530 } from "./actors/goomba/model.inc"

import {
    bobomb_seg8_texture_0801DA60,
    bobomb_seg8_texture_0801EA60,
    bobomb_seg8_texture_0801FA60,
    bobomb_seg8_texture_08020A60,
    bobomb_seg8_texture_08021A60,
    bobomb_seg8_texture_08022260
} from "./actors/bobomb/model.inc"

import {
    explosion_seg3_texture_03000A08,
    explosion_seg3_texture_03001208,
    explosion_seg3_texture_03001A08,
    explosion_seg3_texture_03002208,
    explosion_seg3_texture_03002A08,
    explosion_seg3_texture_03003208,
    explosion_seg3_texture_03003A08
} from "./actors/explosion/model.inc"

import {
    smoke_seg4_texture_0401DEA0,
    smoke_seg4_texture_0401E6A0,
    smoke_seg4_texture_0401EEA0,
    smoke_seg4_texture_0401F6A0,
    smoke_seg4_texture_0401FEA0,
    smoke_seg4_texture_040206A0,
    smoke_seg4_texture_04020EA0
} from "./actors/walk_smoke/model.inc"

import {
    generic_09000000,
    generic_09000800,
    generic_09001000,
    generic_09001800,
    generic_09002000,
    generic_09002800,
    generic_09003000,
    generic_09003800,
    generic_09004000,
    generic_09004800,
    generic_09005000,
    generic_09005800,
    generic_09006000,
    generic_09007000,
    generic_09007800,
    generic_09008000,
    generic_09008800,
    generic_09009000,
    generic_09009800,
    generic_0900A000,
    generic_0900A800,
    generic_0900B000
} from "./textures/generic"

import {
    bob_seg7_texture_07000000,
    bob_seg7_texture_07000800,
    bob_seg7_texture_07001000,
    bob_seg7_texture_07001800,
    bob_seg7_texture_07002000
} from "./levels/bob/textures.inc"

import { pss_seg7_texture_07000000, pss_seg7_texture_07000800, pss_seg7_texture_07001000 } from "./levels/pss/textures.inc"

import {
    wf_seg7_texture_07000000,
    wf_seg7_texture_07000800,
    wf_seg7_texture_07001000,
    wf_seg7_texture_07001800,
    wf_seg7_texture_07002000,
    wf_seg7_texture_07002800
} from "./levels/wf/textures.inc"

import {
    hmc_seg7_texture_07000000,
    hmc_seg7_texture_07001000,
    hmc_seg7_texture_07002000,
    hmc_seg7_texture_07003000,
    hmc_seg7_texture_07003800,
    hmc_seg7_texture_07004000,
    hmc_seg7_texture_07004800
} from "./levels/hmc/texture.inc"


import {
    texture_castle_light,
    inside_castle_seg7_texture_07000800,
    inside_castle_seg7_texture_07001000,
    inside_castle_seg7_texture_07002000,
    inside_castle_seg7_texture_07003000,
    inside_castle_seg7_texture_07003800,
    inside_castle_seg7_texture_07004800,
    inside_castle_seg7_texture_07005800,
    inside_castle_seg7_texture_07006000,
    inside_castle_seg7_texture_07006800,
    inside_castle_seg7_texture_07007000,
    inside_castle_seg7_texture_07007800,
    inside_castle_seg7_texture_07008000,
    inside_castle_seg7_texture_07008800,
    inside_castle_seg7_texture_07009000,
    inside_castle_seg7_texture_07009800,
    inside_castle_seg7_texture_0700A000,
    inside_castle_seg7_texture_0700A800,
    inside_castle_seg7_texture_0700B800,
    inside_castle_seg7_texture_0700C800,
    inside_castle_seg7_texture_0700D800,
    inside_castle_seg7_texture_0700E800,
    inside_castle_seg7_texture_0700F800,
} from "./levels/castle_inside/texture.inc"

import {
    inside_09000000,
    inside_09001000,
    inside_09002000,
    inside_09003000,
    inside_09003800,
    inside_09004000,
    inside_09004800,
    inside_09005000,
    inside_09005800,
    inside_09006000,
    inside_09007000,
    inside_09008000,
    inside_09008800,
    inside_09009000,
    inside_0900A000,
    inside_0900B000,
    inside_0900B800,
} from "./textures/inside"


import {
    mountain_09000000,
    mountain_09000800,
    mountain_09001800,
    mountain_09002800,
    mountain_09003000,
    mountain_09003800,
    mountain_09004000,
    mountain_09004800,
    mountain_09005000,
    mountain_09005800,
    mountain_09006800,
    mountain_09007000,
    mountain_09007800,
    mountain_09008000,
    mountain_09008800,
    mountain_09009800,
    mountain_0900A000,
    mountain_0900A800,
    mountain_0900B000,
    mountain_0900B800,
    mountain_0900C000,
} from "./textures/mountain.js"

import {
    snow_09000000,
    snow_09000800,
    snow_09001000,
    snow_09002000,
    snow_09002800,
    snow_09003000,
    snow_09003800,
    snow_09004000,
    snow_09004800,
    snow_09005000,
    snow_09005800,
    snow_09006000,
    snow_09006800,
    snow_09007000,
    snow_09008000,
    snow_09008800,
    snow_09009000,
    snow_09009800,
} from "./textures/snow.js"

import {
    grass_09000000,
    grass_09000800,
    grass_09001000,
    grass_09001800,
    grass_09002000,
    grass_09002800,
    grass_09003000,
    grass_09003800,
    grass_09004000,
    grass_09004800,
    grass_09005000,
    grass_09005800,
    grass_09006000,
    grass_09006800,
    grass_09007000,
    grass_09007800,
    grass_09008000,
    grass_09008800,
    grass_09009000,
    grass_09009800,
    grass_0900A000,
    grass_0900A800,
    grass_0900B000,
    grass_0900B800
} from "./textures/grass"

import {
    cave_09000000,
    cave_09001000,
    cave_09001800,
    cave_09002800,
    cave_09003000,
    cave_09003800,
    cave_09004800,
    cave_09005800,
    cave_09006800,
    cave_09007000,
    cave_09007800,
    cave_09008800,
    cave_09009800,
    cave_0900A000,
    cave_0900A800,
    cave_0900B800,
    cave_0900C000
} from "./textures/cave"

import {
    spooky_09000000,
    spooky_09000800,
    spooky_09001800,
    spooky_09002800,
    spooky_09003800,
    spooky_09004800,
    spooky_09005000,
    spooky_09006000,
    spooky_09006800,
    spooky_09007000,
    spooky_09008000,
    spooky_09008800,
    spooky_09009000,
    spooky_0900A000,
    spooky_0900A800,
    spooky_0900B000,
    spooky_0900B800
} from "./textures/spooky"


import {
    bbh_seg7_texture_07000000,
    bbh_seg7_texture_07001000,
    bbh_seg7_texture_07001800,
    bbh_seg7_texture_07002000,
    bbh_seg7_texture_07003000,
    bbh_seg7_texture_07003400,
    bbh_seg7_texture_07004400
} from "./levels/bbh/texture.inc"

import {
    ssl_seg7_texture_07000000,
    ssl_seg7_texture_07000800,
    ssl_seg7_texture_07001800,
    ssl_seg7_texture_07002000,
    ssl_seg7_texture_07002800,
    ssl_seg7_texture_07003800
} from "./levels/ssl/texture.inc"

import {
    ccs_seg7_texture_07003100,
    ccs_seg7_texture_07003B00,
    ccs_seg7_texture_07004B00
} from "./levels/ccs/texture.inc"

import {
    sl_seg7_texture_07000000,
    sl_seg7_texture_07000800,
    sl_seg7_texture_07001000,
    sl_seg7_texture_07001800,
    sl_seg7_texture_07002000
} from "./levels/sl/texture.inc"

import { chain_ball_seg6_texture_06020AE8 } from "./actors/chain_ball/model.inc"

import {
    chain_chomp_seg6_texture_060213D0,
    chain_chomp_seg6_texture_06021BD0,
    chain_chomp_seg6_texture_060223D0,
    chain_chomp_seg6_texture_06022BD0,
    chain_chomp_seg6_texture_060233D0
} from "./actors/chain_chomp/model.inc"

import { poundable_pole_seg6_texture_06001050, poundable_pole_seg6_texture_06001850 } from "./actors/poundable_pole/model.inc"

import { dirt_seg3_texture_0302BDF8 } from "./actors/dirt/model.inc"
import { mist_seg3_texture_03000080 } from "./actors/mist/model.inc"
import { bubble_seg4_texture_0401CD60, bubble_seg4_texture_0401D560 } from "./actors/bubble/model.inc"
import { 
    coin_seg3_texture_03005780,
    coin_seg3_texture_03005F80,
    coin_seg3_texture_03006780,
    coin_seg3_texture_03006F80
} from "./actors/coin/model.inc"

import {
    sparkles_seg4_texture_04027490,
    sparkles_seg4_texture_04027C90,
    sparkles_seg4_texture_04028490,
    sparkles_seg4_texture_04028C90,
    sparkles_seg4_texture_04029490,
    sparkles_seg4_texture_04029C90
} from "./actors/sparkle/model.inc"


const url = new URL(window.location.href)
const msgElement = document.getElementById('romMessage')
let loadedGameAssets = false
const textureVersion = 34

const loadDataIntoGame = (data) => {

    intro_seg7_texture_070086A0.push(...data['levels/intro/1.rgba16.png'].data)
    intro_seg7_texture_07007EA0.push(...data['levels/intro/0.rgba16.png'].data)
    intro_seg7_texture_0700B4A0.push(...data['levels/intro/2_copyright.rgba16.png'].data)
    intro_seg7_texture_0700C4A0.push(...data['levels/intro/3_tm.rgba16.png'].data)

    castle_grounds_seg7_texture_07000000.push(...data['levels/castle_grounds/0.rgba16.png'].data)
    castle_grounds_seg7_texture_07001000.push(...data['levels/castle_grounds/1.rgba16.png'].data)
    castle_grounds_seg7_texture_07002000.push(...data['levels/castle_grounds/2.rgba16.png'].data)
	
	ttm_seg7_texture_07000000.push(...data['levels/ttm/0.ia16.png'].data)
	ttm_seg7_texture_07000800.push(...data['levels/ttm/1.rgba16.png'].data)
	ttm_seg7_texture_07001000.push(...data['levels/ttm/2.rgba16.png'].data)
	ttm_seg7_texture_07001800.push(...data['levels/ttm/3.rgba16.png'].data)
	ttm_seg7_texture_07002000.push(...data['levels/ttm/4.rgba16.png'].data)
	ttm_seg7_texture_07002800.push(...data['levels/ttm/5.rgba16.png'].data)
	ttm_seg7_texture_07003000.push(...data['levels/ttm/6.rgba16.png'].data)
	ttm_seg7_texture_07004000.push(...data['levels/ttm/7.rgba16.png'].data)
	
    gd_texture_mario_face_shine.push(...data['textures/intro_raw/mario_face_shine.ia8.png'].data)
    gd_texture_red_star_0.push(...data['textures/intro_raw/red_star_0.rgba16.png'].data)
    gd_texture_red_star_1.push(...data['textures/intro_raw/red_star_1.rgba16.png'].data)
    gd_texture_red_star_2.push(...data['textures/intro_raw/red_star_2.rgba16.png'].data)
    gd_texture_red_star_3.push(...data['textures/intro_raw/red_star_3.rgba16.png'].data)
    gd_texture_red_star_4.push(...data['textures/intro_raw/red_star_4.rgba16.png'].data)
    gd_texture_red_star_5.push(...data['textures/intro_raw/red_star_5.rgba16.png'].data)
    gd_texture_red_star_6.push(...data['textures/intro_raw/red_star_6.rgba16.png'].data)
    gd_texture_red_star_7.push(...data['textures/intro_raw/red_star_7.rgba16.png'].data)
    gd_texture_white_star_0.push(...data['textures/intro_raw/white_star_0.rgba16.png'].data)
    gd_texture_white_star_1.push(...data['textures/intro_raw/white_star_1.rgba16.png'].data)
    gd_texture_white_star_2.push(...data['textures/intro_raw/white_star_2.rgba16.png'].data)
    gd_texture_white_star_3.push(...data['textures/intro_raw/white_star_3.rgba16.png'].data)
    gd_texture_white_star_4.push(...data['textures/intro_raw/white_star_4.rgba16.png'].data)
    gd_texture_white_star_5.push(...data['textures/intro_raw/white_star_5.rgba16.png'].data)
    gd_texture_white_star_6.push(...data['textures/intro_raw/white_star_6.rgba16.png'].data)
    gd_texture_white_star_7.push(...data['textures/intro_raw/white_star_7.rgba16.png'].data)
    gd_texture_sparkle_0.push(...data['textures/intro_raw/sparkle_0.rgba16.png'].data)
    gd_texture_sparkle_1.push(...data['textures/intro_raw/sparkle_1.rgba16.png'].data)
    gd_texture_sparkle_2.push(...data['textures/intro_raw/sparkle_2.rgba16.png'].data)
    gd_texture_sparkle_3.push(...data['textures/intro_raw/sparkle_3.rgba16.png'].data)
    gd_texture_sparkle_4.push(...data['textures/intro_raw/sparkle_4.rgba16.png'].data)

    mountain_09000000.push(...data['textures/mountain/ttm_textures.00000.rgba16.png'].data)
    mountain_09000800.push(...data['textures/mountain/ttm_textures.00800.rgba16.png'].data)
    mountain_09001800.push(...data['textures/mountain/ttm_textures.01800.rgba16.png'].data)
    mountain_09002800.push(...data['textures/mountain/ttm_textures.02800.rgba16.png'].data)
    mountain_09003000.push(...data['textures/mountain/ttm_textures.03000.rgba16.png'].data)
    mountain_09003800.push(...data['textures/mountain/ttm_textures.03800.rgba16.png'].data)
    mountain_09004000.push(...data['textures/mountain/ttm_textures.04000.rgba16.png'].data)
    mountain_09004800.push(...data['textures/mountain/ttm_textures.04800.rgba16.png'].data)
    mountain_09005000.push(...data['textures/mountain/ttm_textures.05000.rgba16.png'].data)
    mountain_09005800.push(...data['textures/mountain/ttm_textures.05800.rgba16.png'].data)
    mountain_09006800.push(...data['textures/mountain/ttm_textures.06800.rgba16.png'].data)
    mountain_09007000.push(...data['textures/mountain/ttm_textures.07000.rgba16.png'].data)
    mountain_09007800.push(...data['textures/mountain/ttm_textures.07800.rgba16.png'].data)
    mountain_09008000.push(...data['textures/mountain/ttm_textures.08000.rgba16.png'].data)
    mountain_09008800.push(...data['textures/mountain/ttm_textures.08800.rgba16.png'].data)
    mountain_09009800.push(...data['textures/mountain/ttm_textures.09800.rgba16.png'].data)
    mountain_0900A000.push(...data['textures/mountain/ttm_textures.0A000.rgba16.png'].data)
    mountain_0900A800.push(...data['textures/mountain/ttm_textures.0A800.rgba16.png'].data)
    mountain_0900B000.push(...data['textures/mountain/ttm_textures.0B000.rgba16.png'].data)
    mountain_0900B800.push(...data['textures/mountain/ttm_textures.0B800.rgba16.png'].data)
    mountain_0900C000.push(...data['textures/mountain/ttm_textures.0C000.rgba16.png'].data)

    title_texture_0A0001C0.push(...data['textures/title_screen_bg/title_screen_bg.001C0.rgba16.png'].data)
    title_texture_0A000E40.push(...data['textures/title_screen_bg/title_screen_bg.00E40.rgba16.png'].data)
    title_texture_0A001AC0.push(...data['textures/title_screen_bg/title_screen_bg.01AC0.rgba16.png'].data)
    title_texture_0A002740.push(...data['textures/title_screen_bg/title_screen_bg.02740.rgba16.png'].data)

    outside_09000000.push(...data['textures/outside/castle_grounds_textures.00000.rgba16.png'].data)
    outside_09001000.push(...data['textures/outside/castle_grounds_textures.01000.rgba16.png'].data)
    outside_09002000.push(...data['textures/outside/castle_grounds_textures.02000.rgba16.png'].data)
    outside_09003000.push(...data['textures/outside/castle_grounds_textures.03000.rgba16.png'].data)
    outside_09003800.push(...data['textures/outside/castle_grounds_textures.03800.rgba16.png'].data)
    outside_09004000.push(...data['textures/outside/castle_grounds_textures.04000.rgba16.png'].data)
    outside_09004800.push(...data['textures/outside/castle_grounds_textures.04800.rgba16.png'].data)
    outside_09006000.push(...data['textures/outside/castle_grounds_textures.06000.rgba16.png'].data)
    outside_09006800.push(...data['textures/outside/castle_grounds_textures.06800.rgba16.png'].data)
    outside_09007800.push(...data['textures/outside/castle_grounds_textures.07800.rgba16.png'].data)
    outside_09008000.push(...data['textures/outside/castle_grounds_textures.08000.rgba16.png'].data)
    outside_09009000.push(...data['textures/outside/castle_grounds_textures.09000.rgba16.png'].data)
    outside_09009800.push(...data['textures/outside/castle_grounds_textures.09800.rgba16.png'].data)
    outside_0900A000.push(...data['textures/outside/castle_grounds_textures.0A000.rgba16.png'].data)
    outside_0900B000.push(...data['textures/outside/castle_grounds_textures.0B000.rgba16.png'].data)
    outside_0900B400.push(...data['textures/outside/castle_grounds_textures.0B400.rgba16.png'].data)
    outside_0900A800.push(...data['textures/outside/castle_grounds_textures.0A800.rgba16.png'].data)
    outside_09000800.push(...data['textures/outside/castle_grounds_textures.00800.rgba16.png'].data)
    outside_09008800.push(...data['textures/outside/castle_grounds_textures.08800.rgba16.png'].data)
    outside_0900BC00.push(...data['textures/outside/castle_grounds_textures.0BC00.ia16.png'].data)

	grass_09000000.push(...data['textures/grass/wf_textures.00000.rgba16.png'].data)
	grass_09000800.push(...data['textures/grass/wf_textures.00800.rgba16.png'].data)
	grass_09001000.push(...data['textures/grass/wf_textures.01000.rgba16.png'].data)
	grass_09001800.push(...data['textures/grass/wf_textures.01800.rgba16.png'].data)
	grass_09002000.push(...data['textures/grass/wf_textures.02000.rgba16.png'].data)
	grass_09002800.push(...data['textures/grass/wf_textures.02800.rgba16.png'].data)
	grass_09003000.push(...data['textures/grass/wf_textures.03000.rgba16.png'].data)
	grass_09003800.push(...data['textures/grass/wf_textures.03800.rgba16.png'].data)
	grass_09004000.push(...data['textures/grass/wf_textures.04000.rgba16.png'].data)
	grass_09004800.push(...data['textures/grass/wf_textures.04800.rgba16.png'].data)
	grass_09005000.push(...data['textures/grass/wf_textures.05000.rgba16.png'].data)
	grass_09005800.push(...data['textures/grass/wf_textures.05800.rgba16.png'].data)
	grass_09006000.push(...data['textures/grass/wf_textures.06000.rgba16.png'].data)
	grass_09006800.push(...data['textures/grass/wf_textures.06800.rgba16.png'].data)
	grass_09007000.push(...data['textures/grass/wf_textures.07000.rgba16.png'].data)
	grass_09007800.push(...data['textures/grass/wf_textures.07800.rgba16.png'].data)
	grass_09008000.push(...data['textures/grass/wf_textures.08000.rgba16.png'].data)
	grass_09008800.push(...data['textures/grass/wf_textures.08800.rgba16.png'].data)
	grass_09009000.push(...data['textures/grass/wf_textures.09000.rgba16.png'].data)
	grass_09009800.push(...data['textures/grass/wf_textures.09800.rgba16.png'].data)
	grass_0900A000.push(...data['textures/grass/wf_textures.0A000.rgba16.png'].data)
	grass_0900A800.push(...data['textures/grass/wf_textures.0A800.rgba16.png'].data)
	grass_0900B000.push(...data['textures/grass/wf_textures.0B000.ia16.png'].data)
	grass_0900B800.push(...data['textures/grass/wf_textures.0B800.ia16.png'].data)

    generic_09000000.push(...data["textures/generic/bob_textures.00000.rgba16.png"].data)
    generic_09000800.push(...data["textures/generic/bob_textures.00800.rgba16.png"].data)
    generic_09001000.push(...data["textures/generic/bob_textures.01000.rgba16.png"].data)
    generic_09001800.push(...data["textures/generic/bob_textures.01800.rgba16.png"].data)
    generic_09002000.push(...data["textures/generic/bob_textures.02000.rgba16.png"].data)
    generic_09002800.push(...data["textures/generic/bob_textures.02800.rgba16.png"].data)
    generic_09003000.push(...data["textures/generic/bob_textures.03000.rgba16.png"].data)
    generic_09003800.push(...data["textures/generic/bob_textures.03800.rgba16.png"].data)
    generic_09004000.push(...data["textures/generic/bob_textures.04000.rgba16.png"].data)
    generic_09004800.push(...data["textures/generic/bob_textures.04800.rgba16.png"].data)
    generic_09005000.push(...data["textures/generic/bob_textures.05000.rgba16.png"].data)
    generic_09005800.push(...data["textures/generic/bob_textures.05800.rgba16.png"].data)
    generic_09006000.push(...data["textures/generic/bob_textures.06000.rgba16.png"].data)
    generic_09007000.push(...data["textures/generic/bob_textures.07000.rgba16.png"].data)
    generic_09007800.push(...data["textures/generic/bob_textures.07800.rgba16.png"].data)
    generic_09008000.push(...data["textures/generic/bob_textures.08000.rgba16.png"].data)
    generic_09008800.push(...data["textures/generic/bob_textures.08800.rgba16.png"].data)
    generic_09009000.push(...data["textures/generic/bob_textures.09000.rgba16.png"].data)
    generic_09009800.push(...data["textures/generic/bob_textures.09800.rgba16.png"].data)
    generic_0900A000.push(...data["textures/generic/bob_textures.0A000.rgba16.png"].data)
    generic_0900A800.push(...data["textures/generic/bob_textures.0A800.rgba16.png"].data)
    generic_0900B000.push(...data["textures/generic/bob_textures.0B000.ia16.png"].data)


    cave_09000000.push(...data["textures/cave/hmc_textures.00000.rgba16.png"].data)
    cave_09001000.push(...data["textures/cave/hmc_textures.01000.rgba16.png"].data)
    cave_09001800.push(...data["textures/cave/hmc_textures.01800.rgba16.png"].data)
    cave_09002800.push(...data["textures/cave/hmc_textures.02800.rgba16.png"].data)
    cave_09003000.push(...data["textures/cave/hmc_textures.03000.rgba16.png"].data)
    cave_09003800.push(...data["textures/cave/hmc_textures.03800.rgba16.png"].data)
    cave_09004800.push(...data["textures/cave/hmc_textures.04800.rgba16.png"].data)
    cave_09005800.push(...data["textures/cave/hmc_textures.05800.rgba16.png"].data)
    cave_09006800.push(...data["textures/cave/hmc_textures.06800.rgba16.png"].data)
    cave_09007000.push(...data["textures/cave/hmc_textures.07000.rgba16.png"].data)
    cave_09007800.push(...data["textures/cave/hmc_textures.07800.rgba16.png"].data)
    cave_09008800.push(...data["textures/cave/hmc_textures.08800.rgba16.png"].data)
    cave_09009800.push(...data["textures/cave/hmc_textures.09800.rgba16.png"].data)
    cave_0900A000.push(...data["textures/cave/hmc_textures.0A000.rgba16.png"].data)
    cave_0900A800.push(...data["textures/cave/hmc_textures.0A800.rgba16.png"].data)
    cave_0900B800.push(...data["textures/cave/hmc_textures.0B800.ia16.png"].data)
    cave_0900C000.push(...data["textures/cave/hmc_textures.0C000.ia16.png"].data)

    texture_castle_light.push(...data["levels/castle_inside/castle_light.ia16.png"].data)
    inside_castle_seg7_texture_07000800.push(...data["levels/castle_inside/1.rgba16.png"].data)
    inside_castle_seg7_texture_07001000.push(...data["levels/castle_inside/2.ia16.png"].data)
    inside_castle_seg7_texture_07002000.push(...data["levels/castle_inside/3.rgba16.png"].data)
    inside_castle_seg7_texture_07003000.push(...data["levels/castle_inside/4.rgba16.png"].data)
    inside_castle_seg7_texture_07003800.push(...data["levels/castle_inside/5.rgba16.png"].data)
    inside_castle_seg7_texture_07004800.push(...data["levels/castle_inside/6.rgba16.png"].data)
    inside_castle_seg7_texture_07005800.push(...data["levels/castle_inside/7.rgba16.png"].data)
    inside_castle_seg7_texture_07006000.push(...data["levels/castle_inside/8.rgba16.png"].data)
    inside_castle_seg7_texture_07006800.push(...data["levels/castle_inside/9.rgba16.png"].data)
    inside_castle_seg7_texture_07007000.push(...data["levels/castle_inside/10.rgba16.png"].data)
    inside_castle_seg7_texture_07007800.push(...data["levels/castle_inside/11.rgba16.png"].data)
    inside_castle_seg7_texture_07008000.push(...data["levels/castle_inside/12.rgba16.png"].data)
    inside_castle_seg7_texture_07008800.push(...data["levels/castle_inside/13.rgba16.png"].data)
    inside_castle_seg7_texture_07009000.push(...data["levels/castle_inside/14.rgba16.png"].data)
    inside_castle_seg7_texture_07009800.push(...data["levels/castle_inside/15.rgba16.png"].data)
    inside_castle_seg7_texture_0700A000.push(...data["levels/castle_inside/16.ia16.png"].data)
    inside_castle_seg7_texture_0700A800.push(...data["levels/castle_inside/17.rgba16.png"].data)
    inside_castle_seg7_texture_0700B800.push(...data["levels/castle_inside/18.rgba16.png"].data)
    inside_castle_seg7_texture_0700C800.push(...data["levels/castle_inside/19.rgba16.png"].data)
    inside_castle_seg7_texture_0700D800.push(...data["levels/castle_inside/20.rgba16.png"].data)
    inside_castle_seg7_texture_0700E800.push(...data["levels/castle_inside/21.rgba16.png"].data)
    inside_castle_seg7_texture_0700F800.push(...data["levels/castle_inside/22.rgba16.png"].data)

    inside_09000000.push(...data["textures/inside/inside_castle_textures.00000.rgba16.png"].data)
    inside_09001000.push(...data["textures/inside/inside_castle_textures.01000.rgba16.png"].data)
    inside_09002000.push(...data["textures/inside/inside_castle_textures.02000.rgba16.png"].data)
    inside_09003000.push(...data["textures/inside/inside_castle_textures.03000.rgba16.png"].data)
    inside_09003800.push(...data["textures/inside/inside_castle_textures.03800.rgba16.png"].data)
    inside_09004000.push(...data["textures/inside/inside_castle_textures.04000.rgba16.png"].data)
    inside_09004800.push(...data["textures/inside/inside_castle_textures.04800.rgba16.png"].data)
    inside_09005000.push(...data["textures/inside/inside_castle_textures.05000.rgba16.png"].data)
    inside_09005800.push(...data["textures/inside/inside_castle_textures.05800.rgba16.png"].data)
    inside_09006000.push(...data["textures/inside/inside_castle_textures.06000.rgba16.png"].data)
    inside_09007000.push(...data["textures/inside/inside_castle_textures.07000.rgba16.png"].data)
    inside_09008000.push(...data["textures/inside/inside_castle_textures.08000.rgba16.png"].data)
    inside_09008800.push(...data["textures/inside/inside_castle_textures.08800.rgba16.png"].data)
    inside_09009000.push(...data["textures/inside/inside_castle_textures.09000.rgba16.png"].data)
    inside_0900A000.push(...data["textures/inside/inside_castle_textures.0A000.rgba16.png"].data)
    inside_0900B000.push(...data["textures/inside/inside_castle_textures.0B000.rgba16.png"].data)
    inside_0900B800.push(...data["textures/inside/inside_castle_textures.0B800.rgba16.png"].data)

    hmc_seg7_texture_07000000.push(...data["levels/hmc/0.rgba16.png"].data)
    hmc_seg7_texture_07001000.push(...data["levels/hmc/1.rgba16.png"].data)
    hmc_seg7_texture_07002000.push(...data["levels/hmc/2.rgba16.png"].data)
    hmc_seg7_texture_07003000.push(...data["levels/hmc/3.rgba16.png"].data)
    hmc_seg7_texture_07003800.push(...data["levels/hmc/4.rgba16.png"].data)
    hmc_seg7_texture_07004000.push(...data["levels/hmc/5.rgba16.png"].data)
    hmc_seg7_texture_07004800.push(...data["levels/hmc/6.rgba16.png"].data)

    bob_seg7_texture_07000000.push(...data["levels/bob/0.rgba16.png"].data)
    bob_seg7_texture_07000800.push(...data["levels/bob/1.rgba16.png"].data)
    bob_seg7_texture_07001000.push(...data["levels/bob/2.rgba16.png"].data)
    bob_seg7_texture_07001800.push(...data["levels/bob/3.rgba16.png"].data)
    bob_seg7_texture_07002000.push(...data["levels/bob/4.rgba16.png"].data)

    pss_seg7_texture_07000000.push(...data["levels/pss/0.rgba16.png"].data)
    pss_seg7_texture_07000800.push(...data["levels/pss/1.ia16.png"].data)
    pss_seg7_texture_07001000.push(...data["levels/pss/2.rgba16.png"].data)

    wf_seg7_texture_07000000.push(...data["levels/wf/0.rgba16.png"].data)
    wf_seg7_texture_07000800.push(...data["levels/wf/1.rgba16.png"].data)
    wf_seg7_texture_07001000.push(...data["levels/wf/2.rgba16.png"].data)
    wf_seg7_texture_07001800.push(...data["levels/wf/3.rgba16.png"].data)
    wf_seg7_texture_07002000.push(...data["levels/wf/4.rgba16.png"].data)
    wf_seg7_texture_07002800.push(...data["levels/wf/5.ia8.png"].data)

    ssl_seg7_texture_07000000.push(...data["levels/ssl/0.rgba16.png"].data)
    ssl_seg7_texture_07000800.push(...data["levels/ssl/1.ia16.png"].data)
    ssl_seg7_texture_07001800.push(...data["levels/ssl/2.rgba16.png"].data)
    ssl_seg7_texture_07002000.push(...data["levels/ssl/3.rgba16.png"].data)
    ssl_seg7_texture_07002800.push(...data["levels/ssl/4.rgba16.png"].data)
    ssl_seg7_texture_07003800.push(...data["levels/ssl/5.rgba16.png"].data)

    sl_seg7_texture_07000000.push(...data["levels/sl/0.rgba16.png"].data)
    sl_seg7_texture_07000800.push(...data["levels/sl/1.rgba16.png"].data)
    sl_seg7_texture_07001000.push(...data["levels/sl/2.rgba16.png"].data)
    sl_seg7_texture_07001800.push(...data["levels/sl/3.rgba16.png"].data)
    sl_seg7_texture_07002000.push(...data["levels/sl/4.rgba16.png"].data)

    snow_09000000.push(...data["textures/snow/ccm_textures.00000.rgba16.png"].data)
    snow_09000800.push(...data["textures/snow/ccm_textures.00800.rgba16.png"].data)
    snow_09001000.push(...data["textures/snow/ccm_textures.01000.rgba16.png"].data)
    snow_09002000.push(...data["textures/snow/ccm_textures.02000.rgba16.png"].data)
    snow_09002800.push(...data["textures/snow/ccm_textures.02800.rgba16.png"].data)
    snow_09003000.push(...data["textures/snow/ccm_textures.03000.rgba16.png"].data)
    snow_09003800.push(...data["textures/snow/ccm_textures.03800.rgba16.png"].data)
    snow_09004000.push(...data["textures/snow/ccm_textures.04000.rgba16.png"].data)
    snow_09004800.push(...data["textures/snow/ccm_textures.04800.rgba16.png"].data)
    snow_09005000.push(...data["textures/snow/ccm_textures.05000.rgba16.png"].data)
    snow_09005800.push(...data["textures/snow/ccm_textures.05800.rgba16.png"].data)
    snow_09006000.push(...data["textures/snow/ccm_textures.06000.rgba16.png"].data)
    snow_09006800.push(...data["textures/snow/ccm_textures.06800.rgba16.png"].data)
    snow_09007000.push(...data["textures/snow/ccm_textures.07000.rgba16.png"].data)
    snow_09008000.push(...data["textures/snow/ccm_textures.08000.rgba16.png"].data)
    snow_09008800.push(...data["textures/snow/ccm_textures.08800.rgba16.png"].data)
    snow_09009000.push(...data["textures/snow/ccm_textures.09000.ia16.png"].data)
    snow_09009800.push(...data["textures/snow/ccm_textures.09800.ia16.png"].data)

    snow_09000000.push(...data["textures/snow/ccs_textures.00000.rgba16.png"].data)
    snow_09000800.push(...data["textures/snow/ccs_textures.00800.rgba16.png"].data)
    snow_09001000.push(...data["textures/snow/ccs_textures.01000.rgba16.png"].data)
    snow_09002000.push(...data["textures/snow/ccs_textures.02000.rgba16.png"].data)
    snow_09002800.push(...data["textures/snow/ccs_textures.02800.rgba16.png"].data)
    snow_09003000.push(...data["textures/snow/ccs_textures.03000.rgba16.png"].data)
    snow_09003800.push(...data["textures/snow/ccs_textures.03800.rgba16.png"].data)
    snow_09004000.push(...data["textures/snow/ccs_textures.04000.rgba16.png"].data)
    snow_09004800.push(...data["textures/snow/ccs_textures.04800.rgba16.png"].data)
    snow_09005000.push(...data["textures/snow/ccs_textures.05000.rgba16.png"].data)
    snow_09005800.push(...data["textures/snow/ccs_textures.05800.rgba16.png"].data)
    snow_09006000.push(...data["textures/snow/ccs_textures.06000.rgba16.png"].data)
    snow_09006800.push(...data["textures/snow/ccs_textures.06800.rgba16.png"].data)
    snow_09007000.push(...data["textures/snow/ccs_textures.07000.rgba16.png"].data)
    snow_09008000.push(...data["textures/snow/ccs_textures.08000.rgba16.png"].data)
    snow_09008800.push(...data["textures/snow/ccs_textures.08800.rgba16.png"].data)
    snow_09009000.push(...data["textures/snow/ccs_textures.09000.ia16.png"].data)
    snow_09009800.push(...data["textures/snow/ccs_textures.09800.ia16.png"].data)

    ccs_seg7_texture_07003100.push(...data["levels/ccs/7.rgba16.png"].data)
    ccs_seg7_texture_07003B00.push(...data["levels/ccs/9.ia16.png"].data)
    ccs_seg7_texture_07004B00.push(...data["levels/ccs/11.rgba16.png"].data)

    mario_texture_yellow_button.push(...data['actors/mario/mario_overalls_button.rgba16.png'].data)
    mario_texture_m_logo.push(...data['actors/mario/mario_logo.rgba16.png'].data)
    mario_texture_mustache.push(...data["actors/mario/mario_mustache.rgba16.png"].data)
    mario_texture_hair_sideburn.push(...data["actors/mario/mario_sideburn.rgba16.png"].data)
    mario_texture_eyes_front.push(...data["actors/mario/mario_eyes_center.rgba16.png"].data)
    mario_texture_eyes_half_closed.push(...data["actors/mario/mario_eyes_half_closed.rgba16.png"].data)
    mario_texture_eyes_closed.push(...data["actors/mario/mario_eyes_closed.rgba16.png"].data)

    texture_power_meter_left_side.push(...data["actors/power_meter/power_meter_left_side.rgba16.png"].data)
    texture_power_meter_right_side.push(...data["actors/power_meter/power_meter_right_side.rgba16.png"].data)
    texture_power_meter_full.push(...data["actors/power_meter/power_meter_full.rgba16.png"].data)
    texture_power_meter_seven_segments.push(...data["actors/power_meter/power_meter_seven_segments.rgba16.png"].data)
    texture_power_meter_six_segments.push(...data["actors/power_meter/power_meter_six_segments.rgba16.png"].data)
    texture_power_meter_five_segments.push(...data["actors/power_meter/power_meter_five_segments.rgba16.png"].data)
    texture_power_meter_four_segments.push(...data["actors/power_meter/power_meter_four_segments.rgba16.png"].data)
    texture_power_meter_three_segments.push(...data["actors/power_meter/power_meter_three_segments.rgba16.png"].data)
    texture_power_meter_two_segments.push(...data["actors/power_meter/power_meter_two_segments.rgba16.png"].data)
    texture_power_meter_one_segments.push(...data["actors/power_meter/power_meter_one_segment.rgba16.png"].data)

	yellow_sphere_seg5_texture_05000040.push(...data["actors/yellow_sphere_small/small_yellow_sphere.rgba16.png"].data)

    tree_seg3_texture_0302DE28.push(...data["actors/tree/tree_left_side.rgba16.png"].data)
    tree_seg3_texture_0302EE28.push(...data["actors/tree/tree_right_side.rgba16.png"].data)
    tree_seg3_texture_0302FF60.push(...data["actors/tree/pine_tree.rgba16.png"].data)
    tree_seg3_texture_03031048.push(...data["actors/tree/snowy_pine_tree.rgba16.png"].data)
    tree_seg3_texture_03032218.push(...data["actors/tree/palm_tree.rgba16.png"].data)

    segment2.texture_shadow_quarter_circle.push(...data["textures/segment2/shadow_quarter_circle.ia8.png"].data)
    segment2.texture_transition_star_half.push(...data["textures/segment2/segment2.0F458.ia8.png"].data)

    segment2.texture_hud_char_0.push(...data["textures/segment2/segment2.00000.rgba16.png"].data)
    segment2.texture_hud_char_1.push(...data["textures/segment2/segment2.00200.rgba16.png"].data)
    segment2.texture_hud_char_2.push(...data["textures/segment2/segment2.00400.rgba16.png"].data)
    segment2.texture_hud_char_3.push(...data["textures/segment2/segment2.00600.rgba16.png"].data)
    segment2.texture_hud_char_4.push(...data["textures/segment2/segment2.00800.rgba16.png"].data)
    segment2.texture_hud_char_5.push(...data["textures/segment2/segment2.00A00.rgba16.png"].data)
    segment2.texture_hud_char_6.push(...data["textures/segment2/segment2.00C00.rgba16.png"].data)
    segment2.texture_hud_char_7.push(...data["textures/segment2/segment2.00E00.rgba16.png"].data)
    segment2.texture_hud_char_8.push(...data["textures/segment2/segment2.01000.rgba16.png"].data)
    segment2.texture_hud_char_9.push(...data["textures/segment2/segment2.01200.rgba16.png"].data)
    segment2.texture_hud_char_A.push(...data["textures/segment2/segment2.01400.rgba16.png"].data)
    segment2.texture_hud_char_B.push(...data["textures/segment2/segment2.01600.rgba16.png"].data)
    segment2.texture_hud_char_C.push(...data["textures/segment2/segment2.01800.rgba16.png"].data)
    segment2.texture_hud_char_D.push(...data["textures/segment2/segment2.01A00.rgba16.png"].data)
    segment2.texture_hud_char_E.push(...data["textures/segment2/segment2.01C00.rgba16.png"].data)
    segment2.texture_hud_char_F.push(...data["textures/segment2/segment2.01E00.rgba16.png"].data)
    segment2.texture_hud_char_G.push(...data["textures/segment2/segment2.02000.rgba16.png"].data)
    segment2.texture_hud_char_H.push(...data["textures/segment2/segment2.02200.rgba16.png"].data)
    segment2.texture_hud_char_I.push(...data["textures/segment2/segment2.02400.rgba16.png"].data)
    segment2.texture_hud_char_K.push(...data["textures/segment2/segment2.02800.rgba16.png"].data)
    segment2.texture_hud_char_L.push(...data["textures/segment2/segment2.02A00.rgba16.png"].data)
    segment2.texture_hud_char_M.push(...data["textures/segment2/segment2.02C00.rgba16.png"].data)
    segment2.texture_hud_char_N.push(...data["textures/segment2/segment2.02E00.rgba16.png"].data)
    segment2.texture_hud_char_O.push(...data["textures/segment2/segment2.03000.rgba16.png"].data)
    segment2.texture_hud_char_P.push(...data["textures/segment2/segment2.03200.rgba16.png"].data)
    segment2.texture_hud_char_R.push(...data["textures/segment2/segment2.03600.rgba16.png"].data)
    segment2.texture_hud_char_S.push(...data["textures/segment2/segment2.03800.rgba16.png"].data)
    segment2.texture_hud_char_T.push(...data["textures/segment2/segment2.03A00.rgba16.png"].data)
    segment2.texture_hud_char_U.push(...data["textures/segment2/segment2.03C00.rgba16.png"].data)
    segment2.texture_hud_char_W.push(...data["textures/segment2/segment2.04000.rgba16.png"].data)
    segment2.texture_hud_char_Y.push(...data["textures/segment2/segment2.04400.rgba16.png"].data)
    segment2.texture_hud_char_apostrophe.push(...data["textures/segment2/segment2.04800.rgba16.png"].data)
    segment2.texture_hud_char_double_quote.push(...data["textures/segment2/segment2.04A00.rgba16.png"].data)
    segment2.texture_hud_char_question.push(...data["textures/segment2/segment2.05000.rgba16.png"].data)
    segment2.texture_hud_char_multiply.push(...data["textures/segment2/segment2.05600.rgba16.png"].data)
    segment2.texture_hud_char_coin.push(...data["textures/segment2/segment2.05800.rgba16.png"].data)
    segment2.texture_hud_char_mario_head.push(...data["textures/segment2/segment2.05A00.rgba16.png"].data)
    segment2.texture_hud_char_star.push(...data["textures/segment2/segment2.05C00.rgba16.png"].data)
    segment2.texture_credits_char_3.push(...data["textures/segment2/segment2.06200.rgba16.png"].data)
    segment2.texture_credits_char_4.push(...data["textures/segment2/segment2.06280.rgba16.png"].data)
    segment2.texture_credits_char_6.push(...data["textures/segment2/segment2.06300.rgba16.png"].data)
    segment2.texture_credits_char_A.push(...data["textures/segment2/segment2.06380.rgba16.png"].data)
    segment2.texture_credits_char_B.push(...data["textures/segment2/segment2.06400.rgba16.png"].data)
    segment2.texture_credits_char_C.push(...data["textures/segment2/segment2.06480.rgba16.png"].data)
    segment2.texture_credits_char_D.push(...data["textures/segment2/segment2.06500.rgba16.png"].data)
    segment2.texture_credits_char_E.push(...data["textures/segment2/segment2.06580.rgba16.png"].data)
    segment2.texture_credits_char_F.push(...data["textures/segment2/segment2.06600.rgba16.png"].data)
    segment2.texture_credits_char_G.push(...data["textures/segment2/segment2.06680.rgba16.png"].data)
    segment2.texture_credits_char_H.push(...data["textures/segment2/segment2.06700.rgba16.png"].data)
    segment2.texture_credits_char_I.push(...data["textures/segment2/segment2.06780.rgba16.png"].data)
    segment2.texture_credits_char_J.push(...data["textures/segment2/segment2.06800.rgba16.png"].data)
    segment2.texture_credits_char_K.push(...data["textures/segment2/segment2.06880.rgba16.png"].data)
    segment2.texture_credits_char_L.push(...data["textures/segment2/segment2.06900.rgba16.png"].data)
    segment2.texture_credits_char_M.push(...data["textures/segment2/segment2.06980.rgba16.png"].data)
    segment2.texture_credits_char_N.push(...data["textures/segment2/segment2.06A00.rgba16.png"].data)
    segment2.texture_credits_char_O.push(...data["textures/segment2/segment2.06A80.rgba16.png"].data)
    segment2.texture_credits_char_P.push(...data["textures/segment2/segment2.06B00.rgba16.png"].data)
    segment2.texture_credits_char_Q.push(...data["textures/segment2/segment2.06B80.rgba16.png"].data)
    segment2.texture_credits_char_R.push(...data["textures/segment2/segment2.06C00.rgba16.png"].data)
    segment2.texture_credits_char_S.push(...data["textures/segment2/segment2.06C80.rgba16.png"].data)
    segment2.texture_credits_char_T.push(...data["textures/segment2/segment2.06D00.rgba16.png"].data)
    segment2.texture_credits_char_U.push(...data["textures/segment2/segment2.06D80.rgba16.png"].data)
    segment2.texture_credits_char_V.push(...data["textures/segment2/segment2.06E00.rgba16.png"].data)
    segment2.texture_credits_char_W.push(...data["textures/segment2/segment2.06E80.rgba16.png"].data)
    segment2.texture_credits_char_X.push(...data["textures/segment2/segment2.06F00.rgba16.png"].data)
    segment2.texture_credits_char_Y.push(...data["textures/segment2/segment2.06F80.rgba16.png"].data)
    segment2.texture_credits_char_Z.push(...data["textures/segment2/segment2.07000.rgba16.png"].data)
    segment2.texture_credits_char_period.push(...data["textures/segment2/segment2.07080.rgba16.png"].data)
    segment2.texture_font_char_jp_long_vowel.push(...data["textures/segment2/segment2.07340.ia1.png"].data)
    segment2.texture_font_char_eu_colon.push(...data["textures/segment2/font_graphics.06410.ia1.png"].data)
    segment2.texture_font_char_EU_slash.push(...data["textures/segment2/font_graphics.06420.ia1.png"].data)
    segment2.texture_font_char_us_0.push(...data["textures/segment2/font_graphics.05900.ia4.png"].data)
    segment2.texture_font_char_us_1.push(...data["textures/segment2/font_graphics.05940.ia4.png"].data)
    segment2.texture_font_char_us_2.push(...data["textures/segment2/font_graphics.05980.ia4.png"].data)
    segment2.texture_font_char_us_3.push(...data["textures/segment2/font_graphics.059C0.ia4.png"].data)
    segment2.texture_font_char_us_4.push(...data["textures/segment2/font_graphics.05A00.ia4.png"].data)
    segment2.texture_font_char_us_5.push(...data["textures/segment2/font_graphics.05A40.ia4.png"].data)
    segment2.texture_font_char_us_6.push(...data["textures/segment2/font_graphics.05A80.ia4.png"].data)
    segment2.texture_font_char_us_7.push(...data["textures/segment2/font_graphics.05AC0.ia4.png"].data)
    segment2.texture_font_char_us_8.push(...data["textures/segment2/font_graphics.05B00.ia4.png"].data)
    segment2.texture_font_char_us_9.push(...data["textures/segment2/font_graphics.05B40.ia4.png"].data)
    segment2.texture_font_char_us_A.push(...data["textures/segment2/font_graphics.05B80.ia4.png"].data)
    segment2.texture_font_char_us_B.push(...data["textures/segment2/font_graphics.05BC0.ia4.png"].data)
    segment2.texture_font_char_us_C.push(...data["textures/segment2/font_graphics.05C00.ia4.png"].data)
    segment2.texture_font_char_us_D.push(...data["textures/segment2/font_graphics.05C40.ia4.png"].data)
    segment2.texture_font_char_us_E.push(...data["textures/segment2/font_graphics.05C80.ia4.png"].data)
    segment2.texture_font_char_us_F.push(...data["textures/segment2/font_graphics.05CC0.ia4.png"].data)
    segment2.texture_font_char_us_G.push(...data["textures/segment2/font_graphics.05D00.ia4.png"].data)
    segment2.texture_font_char_us_H.push(...data["textures/segment2/font_graphics.05D40.ia4.png"].data)
    segment2.texture_font_char_us_I.push(...data["textures/segment2/font_graphics.05D80.ia4.png"].data)
    segment2.texture_font_char_us_J.push(...data["textures/segment2/font_graphics.05DC0.ia4.png"].data)
    segment2.texture_font_char_us_K.push(...data["textures/segment2/font_graphics.05E00.ia4.png"].data)
    segment2.texture_font_char_us_L.push(...data["textures/segment2/font_graphics.05E40.ia4.png"].data)
    segment2.texture_font_char_us_M.push(...data["textures/segment2/font_graphics.05E80.ia4.png"].data)
    segment2.texture_font_char_us_N.push(...data["textures/segment2/font_graphics.05EC0.ia4.png"].data)
    segment2.texture_font_char_us_O.push(...data["textures/segment2/font_graphics.05F00.ia4.png"].data)
    segment2.texture_font_char_us_P.push(...data["textures/segment2/font_graphics.05F40.ia4.png"].data)
    segment2.texture_font_char_us_Q.push(...data["textures/segment2/font_graphics.05F80.ia4.png"].data)
    segment2.texture_font_char_us_R.push(...data["textures/segment2/font_graphics.05FC0.ia4.png"].data)
    segment2.texture_font_char_us_S.push(...data["textures/segment2/font_graphics.06000.ia4.png"].data)
    segment2.texture_font_char_us_T.push(...data["textures/segment2/font_graphics.06040.ia4.png"].data)
    segment2.texture_font_char_us_U.push(...data["textures/segment2/font_graphics.06080.ia4.png"].data)
    segment2.texture_font_char_us_V.push(...data["textures/segment2/font_graphics.060C0.ia4.png"].data)
    segment2.texture_font_char_us_W.push(...data["textures/segment2/font_graphics.06100.ia4.png"].data)
    segment2.texture_font_char_us_X.push(...data["textures/segment2/font_graphics.06140.ia4.png"].data)
    segment2.texture_font_char_us_Y.push(...data["textures/segment2/font_graphics.06180.ia4.png"].data)
    segment2.texture_font_char_us_Z.push(...data["textures/segment2/font_graphics.061C0.ia4.png"].data)
    segment2.texture_font_char_us_a.push(...data["textures/segment2/font_graphics.06200.ia4.png"].data)
    segment2.texture_font_char_us_b.push(...data["textures/segment2/font_graphics.06240.ia4.png"].data)
    segment2.texture_font_char_us_c.push(...data["textures/segment2/font_graphics.06280.ia4.png"].data)
    segment2.texture_font_char_us_d.push(...data["textures/segment2/font_graphics.062C0.ia4.png"].data)
    segment2.texture_font_char_us_e.push(...data["textures/segment2/font_graphics.06300.ia4.png"].data)
    segment2.texture_font_char_us_f.push(...data["textures/segment2/font_graphics.06340.ia4.png"].data)
    segment2.texture_font_char_us_g.push(...data["textures/segment2/font_graphics.06380.ia4.png"].data)
    segment2.texture_font_char_us_h.push(...data["textures/segment2/font_graphics.063C0.ia4.png"].data)
    segment2.texture_font_char_us_i.push(...data["textures/segment2/font_graphics.06400.ia4.png"].data)
    segment2.texture_font_char_us_j.push(...data["textures/segment2/font_graphics.06440.ia4.png"].data)
    segment2.texture_font_char_us_k.push(...data["textures/segment2/font_graphics.06480.ia4.png"].data)
    segment2.texture_font_char_us_l.push(...data["textures/segment2/font_graphics.064C0.ia4.png"].data)
    segment2.texture_font_char_us_m.push(...data["textures/segment2/font_graphics.06500.ia4.png"].data)
    segment2.texture_font_char_us_n.push(...data["textures/segment2/font_graphics.06540.ia4.png"].data)
    segment2.texture_font_char_us_o.push(...data["textures/segment2/font_graphics.06580.ia4.png"].data)
    segment2.texture_font_char_us_p.push(...data["textures/segment2/font_graphics.065C0.ia4.png"].data)
    segment2.texture_font_char_us_q.push(...data["textures/segment2/font_graphics.06600.ia4.png"].data)
    segment2.texture_font_char_us_r.push(...data["textures/segment2/font_graphics.06640.ia4.png"].data)
    segment2.texture_font_char_us_s.push(...data["textures/segment2/font_graphics.06680.ia4.png"].data)
    segment2.texture_font_char_us_t.push(...data["textures/segment2/font_graphics.066C0.ia4.png"].data)
    segment2.texture_font_char_us_u.push(...data["textures/segment2/font_graphics.06700.ia4.png"].data)
    segment2.texture_font_char_us_v.push(...data["textures/segment2/font_graphics.06740.ia4.png"].data)
    segment2.texture_font_char_us_w.push(...data["textures/segment2/font_graphics.06780.ia4.png"].data)
    segment2.texture_font_char_us_x.push(...data["textures/segment2/font_graphics.067C0.ia4.png"].data)
    segment2.texture_font_char_us_y.push(...data["textures/segment2/font_graphics.06800.ia4.png"].data)
    segment2.texture_font_char_us_z.push(...data["textures/segment2/font_graphics.06840.ia4.png"].data)
    segment2.texture_font_char_us_left_right_arrow.push(...data["textures/segment2/font_graphics.06880.ia4.png"].data)
    segment2.texture_font_char_us_exclamation.push(...data["textures/segment2/font_graphics.068C0.ia4.png"].data)
    segment2.texture_font_char_us_coin.push(...data["textures/segment2/font_graphics.06900.ia4.png"].data)
    segment2.texture_font_char_us_multiply.push(...data["textures/segment2/font_graphics.06940.ia4.png"].data)
    segment2.texture_font_char_us_open_parentheses.push(...data["textures/segment2/font_graphics.06980.ia4.png"].data)
    segment2.texture_font_char_us_close_open_parentheses.push(...data["textures/segment2/font_graphics.069C0.ia4.png"].data)
    segment2.texture_font_char_us_close_parentheses.push(...data["textures/segment2/font_graphics.06A00.ia4.png"].data)
    segment2.texture_font_char_us_tilde.push(...data["textures/segment2/font_graphics.06A40.ia4.png"].data)
    segment2.texture_font_char_us_period.push(...data["textures/segment2/font_graphics.06A80.ia4.png"].data)
    segment2.texture_font_char_us_percent.push(...data["textures/segment2/font_graphics.06AC0.ia4.png"].data)
    segment2.texture_font_char_us_interpunct.push(...data["textures/segment2/font_graphics.06B00.ia4.png"].data)
    segment2.texture_font_char_us_comma.push(...data["textures/segment2/font_graphics.06B40.ia4.png"].data)
    segment2.texture_font_char_us_apostrophe.push(...data["textures/segment2/font_graphics.06B80.ia4.png"].data)
    segment2.texture_font_char_us_question.push(...data["textures/segment2/font_graphics.06BC0.ia4.png"].data)
    segment2.texture_font_char_us_star_filled.push(...data["textures/segment2/font_graphics.06C00.ia4.png"].data)
    segment2.texture_font_char_us_star_hollow.push(...data["textures/segment2/font_graphics.06C40.ia4.png"].data)
    segment2.texture_font_char_us_double_quote_open.push(...data["textures/segment2/font_graphics.06C80.ia4.png"].data)
    segment2.texture_font_char_us_double_quote_close.push(...data["textures/segment2/font_graphics.06CC0.ia4.png"].data)
    segment2.texture_font_char_us_ellipsis.push(...data["textures/segment2/font_graphics.06D00.ia4.png"].data)
    segment2.texture_font_char_us_slash.push(...data["textures/segment2/font_graphics.06D40.ia4.png"].data)
    segment2.texture_font_char_us_ampersand.push(...data["textures/segment2/font_graphics.06D80.ia4.png"].data)
    segment2.texture_font_char_us_button_A.push(...data["textures/segment2/font_graphics.06DC0.ia4.png"].data)
    segment2.texture_font_char_us_button_B.push(...data["textures/segment2/font_graphics.06E00.ia4.png"].data)
    segment2.texture_font_char_us_button_C.push(...data["textures/segment2/font_graphics.06E40.ia4.png"].data)
    segment2.texture_font_char_us_button_Z.push(...data["textures/segment2/font_graphics.06E80.ia4.png"].data)
    segment2.texture_font_char_us_button_R.push(...data["textures/segment2/font_graphics.06EC0.ia4.png"].data)
    segment2.texture_font_char_us_button_C_up.push(...data["textures/segment2/font_graphics.06F00.ia4.png"].data)
    segment2.texture_font_char_us_button_C_down.push(...data["textures/segment2/font_graphics.06F40.ia4.png"].data)
    segment2.texture_font_char_us_button_C_left.push(...data["textures/segment2/font_graphics.06F80.ia4.png"].data)
    segment2.texture_font_char_us_button_C_right.push(...data["textures/segment2/font_graphics.06FC0.ia4.png"].data)
    segment2.texture_hud_char_camera.push(...data["textures/segment2/segment2.07B50.rgba16.png"].data)
    segment2.texture_hud_char_lakitu.push(...data["textures/segment2/segment2.07D50.rgba16.png"].data)
    segment2.texture_hud_char_no_camera.push(...data["textures/segment2/segment2.07F50.rgba16.png"].data)
    segment2.texture_hud_char_arrow_up.push(...data["textures/segment2/segment2.08150.rgba16.png"].data)
    segment2.texture_hud_char_arrow_down.push(...data["textures/segment2/segment2.081D0.rgba16.png"].data)

    segment2.texture_waterbox_water.push(...data["textures/segment2/segment2.11C58.rgba16.png"].data)
    segment2.texture_waterbox_lava.push(...data["textures/segment2/segment2.13C58.rgba16.png"].data)

    coin_seg3_texture_03005780.push(...data["actors/coin/coin_front.ia16.png"].data)
    coin_seg3_texture_03005F80.push(...data["actors/coin/coin_tilt_right.ia16.png"].data)
    coin_seg3_texture_03006780.push(...data["actors/coin/coin_side.ia16.png"].data)
    coin_seg3_texture_03006F80.push(...data["actors/coin/coin_tilt_left.ia16.png"].data)

    checkerboard_platform_seg8_texture_0800C840.push(...data["actors/checkerboard_platform/checkerboard_platform_side.rgba16.png"].data)
    checkerboard_platform_seg8_texture_0800CC40.push(...data["actors/checkerboard_platform/checkerboard_platform.rgba16.png"].data)

    goomba_seg8_texture_08019530.push(...data["actors/goomba/goomba_body.rgba16.png"].data)
    goomba_seg8_texture_08019D30.push(...data["actors/goomba/goomba_face.rgba16.png"].data)
    goomba_seg8_texture_0801A530.push(...data["actors/goomba/goomba_face_blink.rgba16.png"].data)

    bobomb_seg8_texture_0801DA60.push(...data["actors/bobomb/bob-omb_left_side.rgba16.png"].data)
    bobomb_seg8_texture_0801EA60.push(...data["actors/bobomb/bob-omb_right_side.rgba16.png"].data)
    bobomb_seg8_texture_0801FA60.push(...data["actors/bobomb/bob-omb_buddy_left_side.rgba16.png"].data)
    bobomb_seg8_texture_08020A60.push(...data["actors/bobomb/bob-omb_buddy_right_side.rgba16.png"].data)
    bobomb_seg8_texture_08021A60.push(...data["actors/bobomb/bob-omb_eyes.rgba16.png"].data)
    bobomb_seg8_texture_08022260.push(...data["actors/bobomb/bob-omb_eyes_blink.rgba16.png"].data)

    explosion_seg3_texture_03000A08.push(...data["actors/explosion/explosion_0.rgba16.png"].data)
    explosion_seg3_texture_03001208.push(...data["actors/explosion/explosion_1.rgba16.png"].data)
    explosion_seg3_texture_03001A08.push(...data["actors/explosion/explosion_2.rgba16.png"].data)
    explosion_seg3_texture_03002208.push(...data["actors/explosion/explosion_3.rgba16.png"].data)
    explosion_seg3_texture_03002A08.push(...data["actors/explosion/explosion_4.rgba16.png"].data)
    explosion_seg3_texture_03003208.push(...data["actors/explosion/explosion_5.rgba16.png"].data)
    explosion_seg3_texture_03003A08.push(...data["actors/explosion/explosion_6.rgba16.png"].data)

    smoke_seg4_texture_0401DEA0.push(...data["actors/walk_smoke/walk_smoke_0.ia16.png"].data)
    smoke_seg4_texture_0401E6A0.push(...data["actors/walk_smoke/walk_smoke_1.ia16.png"].data)
    smoke_seg4_texture_0401EEA0.push(...data["actors/walk_smoke/walk_smoke_2.ia16.png"].data)
    smoke_seg4_texture_0401F6A0.push(...data["actors/walk_smoke/walk_smoke_3.ia16.png"].data)
    smoke_seg4_texture_0401FEA0.push(...data["actors/walk_smoke/walk_smoke_4.ia16.png"].data)
    smoke_seg4_texture_040206A0.push(...data["actors/walk_smoke/walk_smoke_5.ia16.png"].data)
    smoke_seg4_texture_04020EA0.push(...data["actors/walk_smoke/walk_smoke_6.ia16.png"].data)

    sparkles_seg4_texture_04027490.push(...data["actors/sparkle/sparkle_0.rgba16.png"].data)
    sparkles_seg4_texture_04027C90.push(...data["actors/sparkle/sparkle_1.rgba16.png"].data)
    sparkles_seg4_texture_04028490.push(...data["actors/sparkle/sparkle_2.rgba16.png"].data)
    sparkles_seg4_texture_04028C90.push(...data["actors/sparkle/sparkle_3.rgba16.png"].data)
    sparkles_seg4_texture_04029490.push(...data["actors/sparkle/sparkle_4.rgba16.png"].data)
    sparkles_seg4_texture_04029C90.push(...data["actors/sparkle/sparkle_5.rgba16.png"].data)

    spooky_09000000.push(...data["textures/spooky/bbh_textures.00000.rgba16.png"].data)
    spooky_09000800.push(...data["textures/spooky/bbh_textures.00800.rgba16.png"].data)
    spooky_09001800.push(...data["textures/spooky/bbh_textures.01800.rgba16.png"].data)
    spooky_09002800.push(...data["textures/spooky/bbh_textures.02800.rgba16.png"].data)
    spooky_09003800.push(...data["textures/spooky/bbh_textures.03800.rgba16.png"].data)
    spooky_09004800.push(...data["textures/spooky/bbh_textures.04800.rgba16.png"].data)
    spooky_09005000.push(...data["textures/spooky/bbh_textures.05000.rgba16.png"].data)
    spooky_09006000.push(...data["textures/spooky/bbh_textures.06000.rgba16.png"].data)
    spooky_09006800.push(...data["textures/spooky/bbh_textures.06800.rgba16.png"].data)
    spooky_09007000.push(...data["textures/spooky/bbh_textures.07000.rgba16.png"].data)
    spooky_09008000.push(...data["textures/spooky/bbh_textures.08000.rgba16.png"].data)
    spooky_09008800.push(...data["textures/spooky/bbh_textures.08800.rgba16.png"].data)
    spooky_09009000.push(...data["textures/spooky/bbh_textures.09000.rgba16.png"].data)
    spooky_0900A000.push(...data["textures/spooky/bbh_textures.0A000.rgba16.png"].data)
    spooky_0900A800.push(...data["textures/spooky/bbh_textures.0A800.ia16.png"].data)
    spooky_0900B000.push(...data["textures/spooky/bbh_textures.0B000.ia16.png"].data)
    spooky_0900B800.push(...data["textures/spooky/bbh_textures.0B800.ia16.png"].data)

    bbh_seg7_texture_07000000.push(...data["levels/bbh/0.rgba16.png"].data)
    bbh_seg7_texture_07001000.push(...data["levels/bbh/1.rgba16.png"].data)
    bbh_seg7_texture_07001800.push(...data["levels/bbh/2.rgba16.png"].data)
    bbh_seg7_texture_07002000.push(...data["levels/bbh/3.rgba16.png"].data)
    bbh_seg7_texture_07003000.push(...data["levels/bbh/4.rgba16.png"].data)
    bbh_seg7_texture_07003400.push(...data["levels/bbh/5.rgba16.png"].data)
    bbh_seg7_texture_07004400.push(...data["levels/bbh/6.rgba16.png"].data)

    chain_ball_seg6_texture_06020AE8.push(...data["actors/chain_ball/chain_ball.rgba16.png"].data)

    chain_chomp_seg6_texture_060213D0.push(...data["actors/chain_chomp/chain_chomp_bright_shine.rgba16.png"].data)
    chain_chomp_seg6_texture_06021BD0.push(...data["actors/chain_chomp/chain_chomp_dull_shine.rgba16.png"].data)
    chain_chomp_seg6_texture_060223D0.push(...data["actors/chain_chomp/chain_chomp_tongue.rgba16.png"].data)
    chain_chomp_seg6_texture_06022BD0.push(...data["actors/chain_chomp/chain_chomp_tooth.rgba16.png"].data)
    chain_chomp_seg6_texture_060233D0.push(...data["actors/chain_chomp/chain_chomp_eye.rgba16.png"].data)

    poundable_pole_seg6_texture_06001050.push(...data["actors/poundable_pole/poundable_pole_top.rgba16.png"].data)
    poundable_pole_seg6_texture_06001850.push(...data["actors/poundable_pole/poundable_pole_side.rgba16.png"].data)

    dirt_seg3_texture_0302BDF8.push(...data["actors/dirt/dirt_particle.rgba16.png"].data)

    mist_seg3_texture_03000080.push(...data["actors/mist/mist.ia16.png"].data)


    bubble_seg4_texture_0401CD60.push(...data["actors/bubble/bubble.rgba16.png"].data)
    bubble_seg4_texture_0401D560.push(...data["actors/bubble/mr_i_bubble.rgba16.png"].data)

    SkyboxCCM.ccm_skybox_texture_00000.push(...data["ccm_skybox_texture_00000"].data)
    SkyboxCCM.ccm_skybox_texture_00001.push(...data["ccm_skybox_texture_00001"].data)
    SkyboxCCM.ccm_skybox_texture_00002.push(...data["ccm_skybox_texture_00002"].data)
    SkyboxCCM.ccm_skybox_texture_00003.push(...data["ccm_skybox_texture_00003"].data)
    SkyboxCCM.ccm_skybox_texture_00004.push(...data["ccm_skybox_texture_00004"].data)
    SkyboxCCM.ccm_skybox_texture_00005.push(...data["ccm_skybox_texture_00005"].data)
    SkyboxCCM.ccm_skybox_texture_00006.push(...data["ccm_skybox_texture_00006"].data)
    SkyboxCCM.ccm_skybox_texture_00007.push(...data["ccm_skybox_texture_00007"].data)
    SkyboxCCM.ccm_skybox_texture_00008.push(...data["ccm_skybox_texture_00008"].data)
    SkyboxCCM.ccm_skybox_texture_00009.push(...data["ccm_skybox_texture_00009"].data)
    SkyboxCCM.ccm_skybox_texture_0000A.push(...data["ccm_skybox_texture_0000A"].data)
    SkyboxCCM.ccm_skybox_texture_0000B.push(...data["ccm_skybox_texture_0000B"].data)
    SkyboxCCM.ccm_skybox_texture_0000C.push(...data["ccm_skybox_texture_0000C"].data)
    SkyboxCCM.ccm_skybox_texture_0000D.push(...data["ccm_skybox_texture_0000D"].data)
    SkyboxCCM.ccm_skybox_texture_0000E.push(...data["ccm_skybox_texture_0000E"].data)
    SkyboxCCM.ccm_skybox_texture_0000F.push(...data["ccm_skybox_texture_0000F"].data)

    SkyboxCCM.ccm_skybox_texture_00010.push(...data["ccm_skybox_texture_00010"].data)
    SkyboxCCM.ccm_skybox_texture_00011.push(...data["ccm_skybox_texture_00011"].data)
    SkyboxCCM.ccm_skybox_texture_00012.push(...data["ccm_skybox_texture_00012"].data)
    SkyboxCCM.ccm_skybox_texture_00013.push(...data["ccm_skybox_texture_00013"].data)
    SkyboxCCM.ccm_skybox_texture_00014.push(...data["ccm_skybox_texture_00014"].data)
    SkyboxCCM.ccm_skybox_texture_00015.push(...data["ccm_skybox_texture_00015"].data)
    SkyboxCCM.ccm_skybox_texture_00016.push(...data["ccm_skybox_texture_00016"].data)
    SkyboxCCM.ccm_skybox_texture_00017.push(...data["ccm_skybox_texture_00017"].data)
    SkyboxCCM.ccm_skybox_texture_00018.push(...data["ccm_skybox_texture_00018"].data)
    SkyboxCCM.ccm_skybox_texture_00019.push(...data["ccm_skybox_texture_00019"].data)
    SkyboxCCM.ccm_skybox_texture_0001A.push(...data["ccm_skybox_texture_0001A"].data)
    SkyboxCCM.ccm_skybox_texture_0001B.push(...data["ccm_skybox_texture_0001B"].data)
    SkyboxCCM.ccm_skybox_texture_0001C.push(...data["ccm_skybox_texture_0001C"].data)
    SkyboxCCM.ccm_skybox_texture_0001D.push(...data["ccm_skybox_texture_0001D"].data)
    SkyboxCCM.ccm_skybox_texture_0001E.push(...data["ccm_skybox_texture_0001E"].data)
    SkyboxCCM.ccm_skybox_texture_0001F.push(...data["ccm_skybox_texture_0001F"].data)

    SkyboxCCM.ccm_skybox_texture_00020.push(...data["ccm_skybox_texture_00020"].data)
    SkyboxCCM.ccm_skybox_texture_00021.push(...data["ccm_skybox_texture_00021"].data)
    SkyboxCCM.ccm_skybox_texture_00022.push(...data["ccm_skybox_texture_00022"].data)
    SkyboxCCM.ccm_skybox_texture_00023.push(...data["ccm_skybox_texture_00023"].data)
    SkyboxCCM.ccm_skybox_texture_00024.push(...data["ccm_skybox_texture_00024"].data)
    SkyboxCCM.ccm_skybox_texture_00025.push(...data["ccm_skybox_texture_00025"].data)
    SkyboxCCM.ccm_skybox_texture_00026.push(...data["ccm_skybox_texture_00026"].data)
    SkyboxCCM.ccm_skybox_texture_00027.push(...data["ccm_skybox_texture_00027"].data)
    SkyboxCCM.ccm_skybox_texture_00028.push(...data["ccm_skybox_texture_00028"].data)
    SkyboxCCM.ccm_skybox_texture_00029.push(...data["ccm_skybox_texture_00029"].data)
    SkyboxCCM.ccm_skybox_texture_0002A.push(...data["ccm_skybox_texture_0002A"].data)
    SkyboxCCM.ccm_skybox_texture_0002B.push(...data["ccm_skybox_texture_0002B"].data)
    SkyboxCCM.ccm_skybox_texture_0002C.push(...data["ccm_skybox_texture_0002C"].data)
    SkyboxCCM.ccm_skybox_texture_0002D.push(...data["ccm_skybox_texture_0002D"].data)
    SkyboxCCM.ccm_skybox_texture_0002E.push(...data["ccm_skybox_texture_0002E"].data)
    SkyboxCCM.ccm_skybox_texture_0002F.push(...data["ccm_skybox_texture_0002F"].data)

    SkyboxCCM.ccm_skybox_texture_00030.push(...data["ccm_skybox_texture_00030"].data)
    SkyboxCCM.ccm_skybox_texture_00031.push(...data["ccm_skybox_texture_00031"].data)
    SkyboxCCM.ccm_skybox_texture_00032.push(...data["ccm_skybox_texture_00032"].data)
    SkyboxCCM.ccm_skybox_texture_00033.push(...data["ccm_skybox_texture_00033"].data)
    SkyboxCCM.ccm_skybox_texture_00034.push(...data["ccm_skybox_texture_00034"].data)
    SkyboxCCM.ccm_skybox_texture_00035.push(...data["ccm_skybox_texture_00035"].data)
    SkyboxCCM.ccm_skybox_texture_00036.push(...data["ccm_skybox_texture_00036"].data)
    SkyboxCCM.ccm_skybox_texture_00037.push(...data["ccm_skybox_texture_00037"].data)
    SkyboxCCM.ccm_skybox_texture_00038.push(...data["ccm_skybox_texture_00038"].data)
    SkyboxCCM.ccm_skybox_texture_00039.push(...data["ccm_skybox_texture_00039"].data)
    SkyboxCCM.ccm_skybox_texture_0003A.push(...data["ccm_skybox_texture_0003A"].data)
    SkyboxCCM.ccm_skybox_texture_0003B.push(...data["ccm_skybox_texture_0003B"].data)
    SkyboxCCM.ccm_skybox_texture_0003C.push(...data["ccm_skybox_texture_0003C"].data)
    SkyboxCCM.ccm_skybox_texture_0003D.push(...data["ccm_skybox_texture_0003D"].data)
    SkyboxCCM.ccm_skybox_texture_0003E.push(...data["ccm_skybox_texture_0003E"].data)
    SkyboxCCM.ccm_skybox_texture_0003F.push(...data["ccm_skybox_texture_0003F"].data)

    SkyboxSSL.ssl_skybox_texture_00000.push(...data["ssl_skybox_texture_00000"].data)
    SkyboxSSL.ssl_skybox_texture_00001.push(...data["ssl_skybox_texture_00001"].data)
    SkyboxSSL.ssl_skybox_texture_00002.push(...data["ssl_skybox_texture_00002"].data)
    SkyboxSSL.ssl_skybox_texture_00003.push(...data["ssl_skybox_texture_00003"].data)
    SkyboxSSL.ssl_skybox_texture_00004.push(...data["ssl_skybox_texture_00004"].data)
    SkyboxSSL.ssl_skybox_texture_00005.push(...data["ssl_skybox_texture_00005"].data)
    SkyboxSSL.ssl_skybox_texture_00006.push(...data["ssl_skybox_texture_00006"].data)
    SkyboxSSL.ssl_skybox_texture_00007.push(...data["ssl_skybox_texture_00007"].data)
    SkyboxSSL.ssl_skybox_texture_00008.push(...data["ssl_skybox_texture_00008"].data)
    SkyboxSSL.ssl_skybox_texture_00009.push(...data["ssl_skybox_texture_00009"].data)
    SkyboxSSL.ssl_skybox_texture_0000A.push(...data["ssl_skybox_texture_0000A"].data)
    SkyboxSSL.ssl_skybox_texture_0000B.push(...data["ssl_skybox_texture_0000B"].data)
    SkyboxSSL.ssl_skybox_texture_0000C.push(...data["ssl_skybox_texture_0000C"].data)
    SkyboxSSL.ssl_skybox_texture_0000D.push(...data["ssl_skybox_texture_0000D"].data)
    SkyboxSSL.ssl_skybox_texture_0000E.push(...data["ssl_skybox_texture_0000E"].data)
    SkyboxSSL.ssl_skybox_texture_0000F.push(...data["ssl_skybox_texture_0000F"].data)

    SkyboxSSL.ssl_skybox_texture_00010.push(...data["ssl_skybox_texture_00010"].data)
    SkyboxSSL.ssl_skybox_texture_00011.push(...data["ssl_skybox_texture_00011"].data)
    SkyboxSSL.ssl_skybox_texture_00012.push(...data["ssl_skybox_texture_00012"].data)
    SkyboxSSL.ssl_skybox_texture_00013.push(...data["ssl_skybox_texture_00013"].data)
    SkyboxSSL.ssl_skybox_texture_00014.push(...data["ssl_skybox_texture_00014"].data)
    SkyboxSSL.ssl_skybox_texture_00015.push(...data["ssl_skybox_texture_00015"].data)
    SkyboxSSL.ssl_skybox_texture_00016.push(...data["ssl_skybox_texture_00016"].data)
    SkyboxSSL.ssl_skybox_texture_00017.push(...data["ssl_skybox_texture_00017"].data)
    SkyboxSSL.ssl_skybox_texture_00018.push(...data["ssl_skybox_texture_00018"].data)
    SkyboxSSL.ssl_skybox_texture_00019.push(...data["ssl_skybox_texture_00019"].data)
    SkyboxSSL.ssl_skybox_texture_0001A.push(...data["ssl_skybox_texture_0001A"].data)
    SkyboxSSL.ssl_skybox_texture_0001B.push(...data["ssl_skybox_texture_0001B"].data)
    SkyboxSSL.ssl_skybox_texture_0001C.push(...data["ssl_skybox_texture_0001C"].data)
    SkyboxSSL.ssl_skybox_texture_0001D.push(...data["ssl_skybox_texture_0001D"].data)
    SkyboxSSL.ssl_skybox_texture_0001E.push(...data["ssl_skybox_texture_0001E"].data)
    SkyboxSSL.ssl_skybox_texture_0001F.push(...data["ssl_skybox_texture_0001F"].data)

    SkyboxSSL.ssl_skybox_texture_00020.push(...data["ssl_skybox_texture_00020"].data)
    SkyboxSSL.ssl_skybox_texture_00021.push(...data["ssl_skybox_texture_00021"].data)
    SkyboxSSL.ssl_skybox_texture_00022.push(...data["ssl_skybox_texture_00022"].data)
    SkyboxSSL.ssl_skybox_texture_00023.push(...data["ssl_skybox_texture_00023"].data)
    SkyboxSSL.ssl_skybox_texture_00024.push(...data["ssl_skybox_texture_00024"].data)
    SkyboxSSL.ssl_skybox_texture_00025.push(...data["ssl_skybox_texture_00025"].data)
    SkyboxSSL.ssl_skybox_texture_00026.push(...data["ssl_skybox_texture_00026"].data)
    SkyboxSSL.ssl_skybox_texture_00027.push(...data["ssl_skybox_texture_00027"].data)
    SkyboxSSL.ssl_skybox_texture_00028.push(...data["ssl_skybox_texture_00028"].data)
    SkyboxSSL.ssl_skybox_texture_00029.push(...data["ssl_skybox_texture_00029"].data)
    SkyboxSSL.ssl_skybox_texture_0002A.push(...data["ssl_skybox_texture_0002A"].data)
    SkyboxSSL.ssl_skybox_texture_0002B.push(...data["ssl_skybox_texture_0002B"].data)
    SkyboxSSL.ssl_skybox_texture_0002C.push(...data["ssl_skybox_texture_0002C"].data)
    SkyboxSSL.ssl_skybox_texture_0002D.push(...data["ssl_skybox_texture_0002D"].data)
    SkyboxSSL.ssl_skybox_texture_0002E.push(...data["ssl_skybox_texture_0002E"].data)
    SkyboxSSL.ssl_skybox_texture_0002F.push(...data["ssl_skybox_texture_0002F"].data)

    SkyboxSSL.ssl_skybox_texture_00030.push(...data["ssl_skybox_texture_00030"].data)
    SkyboxSSL.ssl_skybox_texture_00031.push(...data["ssl_skybox_texture_00031"].data)
    SkyboxSSL.ssl_skybox_texture_00032.push(...data["ssl_skybox_texture_00032"].data)
    SkyboxSSL.ssl_skybox_texture_00033.push(...data["ssl_skybox_texture_00033"].data)
    SkyboxSSL.ssl_skybox_texture_00034.push(...data["ssl_skybox_texture_00034"].data)
    SkyboxSSL.ssl_skybox_texture_00035.push(...data["ssl_skybox_texture_00035"].data)
    SkyboxSSL.ssl_skybox_texture_00036.push(...data["ssl_skybox_texture_00036"].data)
    SkyboxSSL.ssl_skybox_texture_00037.push(...data["ssl_skybox_texture_00037"].data)
    SkyboxSSL.ssl_skybox_texture_00038.push(...data["ssl_skybox_texture_00038"].data)
    SkyboxSSL.ssl_skybox_texture_00039.push(...data["ssl_skybox_texture_00039"].data)
    SkyboxSSL.ssl_skybox_texture_0003A.push(...data["ssl_skybox_texture_0003A"].data)
    SkyboxSSL.ssl_skybox_texture_0003B.push(...data["ssl_skybox_texture_0003B"].data)
    SkyboxSSL.ssl_skybox_texture_0003C.push(...data["ssl_skybox_texture_0003C"].data)
    SkyboxSSL.ssl_skybox_texture_0003D.push(...data["ssl_skybox_texture_0003D"].data)
    SkyboxSSL.ssl_skybox_texture_0003E.push(...data["ssl_skybox_texture_0003E"].data)
    SkyboxSSL.ssl_skybox_texture_0003F.push(...data["ssl_skybox_texture_0003F"].data)

    SkyboxWater.water_skybox_texture_00000.push(...data["water_skybox_texture_00000"].data)
    SkyboxWater.water_skybox_texture_00001.push(...data["water_skybox_texture_00001"].data)
    SkyboxWater.water_skybox_texture_00002.push(...data["water_skybox_texture_00002"].data)
    SkyboxWater.water_skybox_texture_00003.push(...data["water_skybox_texture_00003"].data)
    SkyboxWater.water_skybox_texture_00004.push(...data["water_skybox_texture_00004"].data)
    SkyboxWater.water_skybox_texture_00005.push(...data["water_skybox_texture_00005"].data)
    SkyboxWater.water_skybox_texture_00006.push(...data["water_skybox_texture_00006"].data)
    SkyboxWater.water_skybox_texture_00007.push(...data["water_skybox_texture_00007"].data)
    SkyboxWater.water_skybox_texture_00008.push(...data["water_skybox_texture_00008"].data)
    SkyboxWater.water_skybox_texture_00009.push(...data["water_skybox_texture_00009"].data)
    SkyboxWater.water_skybox_texture_0000A.push(...data["water_skybox_texture_0000A"].data)
    SkyboxWater.water_skybox_texture_0000B.push(...data["water_skybox_texture_0000B"].data)
    SkyboxWater.water_skybox_texture_0000C.push(...data["water_skybox_texture_0000C"].data)
    SkyboxWater.water_skybox_texture_0000D.push(...data["water_skybox_texture_0000D"].data)
    SkyboxWater.water_skybox_texture_0000E.push(...data["water_skybox_texture_0000E"].data)
    SkyboxWater.water_skybox_texture_0000F.push(...data["water_skybox_texture_0000F"].data)

    SkyboxWater.water_skybox_texture_00010.push(...data["water_skybox_texture_00010"].data)
    SkyboxWater.water_skybox_texture_00011.push(...data["water_skybox_texture_00011"].data)
    SkyboxWater.water_skybox_texture_00012.push(...data["water_skybox_texture_00012"].data)
    SkyboxWater.water_skybox_texture_00013.push(...data["water_skybox_texture_00013"].data)
    SkyboxWater.water_skybox_texture_00014.push(...data["water_skybox_texture_00014"].data)
    SkyboxWater.water_skybox_texture_00015.push(...data["water_skybox_texture_00015"].data)
    SkyboxWater.water_skybox_texture_00016.push(...data["water_skybox_texture_00016"].data)
    SkyboxWater.water_skybox_texture_00017.push(...data["water_skybox_texture_00017"].data)
    SkyboxWater.water_skybox_texture_00018.push(...data["water_skybox_texture_00018"].data)
    SkyboxWater.water_skybox_texture_00019.push(...data["water_skybox_texture_00019"].data)
    SkyboxWater.water_skybox_texture_0001A.push(...data["water_skybox_texture_0001A"].data)
    SkyboxWater.water_skybox_texture_0001B.push(...data["water_skybox_texture_0001B"].data)
    SkyboxWater.water_skybox_texture_0001C.push(...data["water_skybox_texture_0001C"].data)
    SkyboxWater.water_skybox_texture_0001D.push(...data["water_skybox_texture_0001D"].data)
    SkyboxWater.water_skybox_texture_0001E.push(...data["water_skybox_texture_0001E"].data)
    SkyboxWater.water_skybox_texture_0001F.push(...data["water_skybox_texture_0001F"].data)

    SkyboxWater.water_skybox_texture_00020.push(...data["water_skybox_texture_00020"].data)
    SkyboxWater.water_skybox_texture_00021.push(...data["water_skybox_texture_00021"].data)
    SkyboxWater.water_skybox_texture_00022.push(...data["water_skybox_texture_00022"].data)
    SkyboxWater.water_skybox_texture_00023.push(...data["water_skybox_texture_00023"].data)
    SkyboxWater.water_skybox_texture_00024.push(...data["water_skybox_texture_00024"].data)
    SkyboxWater.water_skybox_texture_00025.push(...data["water_skybox_texture_00025"].data)
    SkyboxWater.water_skybox_texture_00026.push(...data["water_skybox_texture_00026"].data)
    SkyboxWater.water_skybox_texture_00027.push(...data["water_skybox_texture_00027"].data)
    SkyboxWater.water_skybox_texture_00028.push(...data["water_skybox_texture_00028"].data)
    SkyboxWater.water_skybox_texture_00029.push(...data["water_skybox_texture_00029"].data)
    SkyboxWater.water_skybox_texture_0002A.push(...data["water_skybox_texture_0002A"].data)
    SkyboxWater.water_skybox_texture_0002B.push(...data["water_skybox_texture_0002B"].data)
    SkyboxWater.water_skybox_texture_0002C.push(...data["water_skybox_texture_0002C"].data)
    SkyboxWater.water_skybox_texture_0002D.push(...data["water_skybox_texture_0002D"].data)
    SkyboxWater.water_skybox_texture_0002E.push(...data["water_skybox_texture_0002E"].data)
    SkyboxWater.water_skybox_texture_0002F.push(...data["water_skybox_texture_0002F"].data)

    SkyboxWater.water_skybox_texture_00030.push(...data["water_skybox_texture_00030"].data)
    SkyboxWater.water_skybox_texture_00031.push(...data["water_skybox_texture_00031"].data)
    SkyboxWater.water_skybox_texture_00032.push(...data["water_skybox_texture_00032"].data)
    SkyboxWater.water_skybox_texture_00033.push(...data["water_skybox_texture_00033"].data)
    SkyboxWater.water_skybox_texture_00034.push(...data["water_skybox_texture_00034"].data)
    SkyboxWater.water_skybox_texture_00035.push(...data["water_skybox_texture_00035"].data)
    SkyboxWater.water_skybox_texture_00036.push(...data["water_skybox_texture_00036"].data)
    SkyboxWater.water_skybox_texture_00037.push(...data["water_skybox_texture_00037"].data)
    SkyboxWater.water_skybox_texture_00038.push(...data["water_skybox_texture_00038"].data)
    SkyboxWater.water_skybox_texture_00039.push(...data["water_skybox_texture_00039"].data)
    SkyboxWater.water_skybox_texture_0003A.push(...data["water_skybox_texture_0003A"].data)
    SkyboxWater.water_skybox_texture_0003B.push(...data["water_skybox_texture_0003B"].data)
    SkyboxWater.water_skybox_texture_0003C.push(...data["water_skybox_texture_0003C"].data)
    SkyboxWater.water_skybox_texture_0003D.push(...data["water_skybox_texture_0003D"].data)
    SkyboxWater.water_skybox_texture_0003E.push(...data["water_skybox_texture_0003E"].data)
    SkyboxWater.water_skybox_texture_0003F.push(...data["water_skybox_texture_0003F"].data)

    document.getElementById('romSelect').hidden = true
    msgElement.innerHTML = "Rom Asset Extraction Success - You may now start the game"
    msgElement.style = "color:#00ff00"
    document.getElementById("startbutton").disabled = false
    loadedGameAssets = true

}

const processExtractedResults = (data) => {
    if (data == 'Fail') {
        msgElement.innerHTML = "Rom Asset Extraction Fail"
        msgElement.style = "color:red"
    } else {  /// Success
        data.textureVersion = textureVersion
        const stringified = JSON.stringify(data)
        loadDataIntoGame(JSON.parse(stringified))
        localStorage['sm64jsAssets'] = stringified
    }

}

export const checkForRom = () => {   /// happens one time when the page is loaded
    if (localStorage['sm64jsAssets']) {
        const data = JSON.parse(localStorage['sm64jsAssets'])
        if (data.textureVersion == textureVersion) loadDataIntoGame(data)
    }

    if (url.searchParams.get("romExternal") && !loadedGameAssets) {
        msgElement.innerHTML = "Transfering ROM Data..."
        msgElement.style = "color:yellow"
        //TODO transfer ROM to client and extract
        ///extractAssetsFromRom and url.searchParams.get("romExternal")
        throw "temporarily unsupported"
    }

    return loadedGameAssets
}


const bufferToUint32Be = (buffer) => {
    const arr = []
    if (buffer.length % 4 != 0) throw "error - should be divisble by 4"
    for (let i = 0; i < buffer.length; i += 4) {
        arr.push(buffer[i + 3] + (buffer[i + 2] << 8) + (buffer[i + 1] << 16) + (buffer[i] << 24))
    }
    return arr
}

const getBit = (buf, bit) => {
    return buf[Math.floor(bit / 8) + 16] & (1 << (7 - ((bit) % 8)))
}

const mio0_decode = (dataSlice) => {
    const firstfour = dataSlice.slice(0, 4)
    if (new TextDecoder().decode(new Uint8Array(firstfour)) == "MIO")
        throw "header not valid"

    const headerData = bufferToUint32Be(new Uint8Array(dataSlice.slice(4, 16)))
    const headerObject = {
        dest_size: headerData[0],
        comp_offset: headerData[1],
        uncomp_offset: headerData[2]
    }

    let bit_idx = 0, comp_idx = 0, uncomp_idx = 0

    const wholeData = new Uint8Array(dataSlice)
    const decoded_bytes = []

    while (decoded_bytes.length < headerObject.dest_size) {
        if (getBit(wholeData, bit_idx)) {
            // 1 - pull uncompressed data
            decoded_bytes.push(wholeData[headerObject.uncomp_offset + uncomp_idx])
            uncomp_idx++
        } else {
            // 0 - read compressed data
            const x = headerObject.comp_offset + comp_idx
            const vals = wholeData.slice(x, x + 2)
            comp_idx += 2
            const length = ((vals[0] & 0xF0) >> 4) + 3
            const idx = ((vals[0] & 0x0F) << 8) + vals[1] + 1
            for (let i = 0; i < length; i++) {
                decoded_bytes.push(decoded_bytes[decoded_bytes.length - idx])
            }
        }
        bit_idx++
    }

    return decoded_bytes
}

const extractAssetsFromRom = (romBufferData) => {

    const first_bytes = Buffer.from(romBufferData.slice(0, 4))
    
    if (first_bytes[0] != 0x80 ||
        first_bytes[1] != 0x37 ||
        first_bytes[2] != 0x12 ||
        first_bytes[3] != 0x40 ) {

        msgElement.innerHTML = "Rom Asset Extraction Fail - Must be a US '.z64' ROM file"
        msgElement.style = "color:red"
        return
    }

    const extractedData = {}

    ///// process assets by type
    const assetsMio0 = {}, assetsBasic = []
    Object.entries(assets).forEach(([key, value]) => { 
        if (key == '@comment') return
        if (value[3] == undefined) { /// skybox
            const mio0 = value[1]['us'][0]
            if (assetsMio0[mio0] == undefined) assetsMio0[mio0] = []
            assetsMio0[mio0].push({  /// needs Mio decode
                name: key,
                size: value[0],
                offset: value[1]['us'][1],
                skybox: true
            })
        } else if (value[3]['us'].length == 2) {
            const mio0 = value[3]['us'][0]
            if (assetsMio0[mio0] == undefined) assetsMio0[mio0] = []
            assetsMio0[mio0].push({  /// needs Mio decode
                name: key,
                size: value[2],
                offset: value[3]['us'][1]
            })
        } else if (value[3]['us'].length == 1) { /// Basic
            assetsBasic.push({
                name: key,
                size: value[2],
                offset: value[3]['us'][0]
            })
        } else throw "unknown asset type"

    })


    ////// process basic assets
    assetsBasic.forEach(asset => {
        extractedData[asset.name] = Buffer.from(romBufferData.slice(asset.offset, asset.offset + asset.size))
    })

    /////// process Mio0 assets
    Object.entries(assetsMio0).forEach(([mio0, assetSublist]) => {

        const decoded_bytes = mio0_decode(romBufferData.slice(mio0))
        assetSublist.forEach(asset => {
            if (asset.skybox) {  /// skybox
                const textureNamePrefix = /\/(\w*).png/.exec(asset.name)[1] + "_skybox_texture_"
                const numTiles = Math.floor(asset.size / 2048)
                for (let i = 0; i < numTiles; i++) {
                    let hextileString = i.toString(16).toUpperCase()
                    while (hextileString.length < 5) hextileString = '0' + hextileString
                    const finalTexureName = textureNamePrefix + hextileString
                    extractedData[finalTexureName] = Buffer.from(decoded_bytes.slice(i * 2048, (i + 1) * 2048))
                }
            } else { // not skybox
                extractedData[asset.name] = Buffer.from(decoded_bytes.slice(asset.offset, asset.offset + asset.size))
            }
        })

    })

    processExtractedResults(extractedData)
}

$('#romSelect').submit(
    (e) => {
        e.preventDefault()
        if (loadedGameAssets) return
        const romFile = document.getElementById('romFile').files[0]
        const reader = new FileReader()
        reader.readAsArrayBuffer(romFile)
        reader.onload = (evt) => { extractAssetsFromRom(evt.target.result) }
    }
)

/*        msgElement.innerHTML = "Please wait for ROM to be uploaded and game assets to be sent back to your device..."
        msgElement.style = "color:yellow"
        $.ajax({
            url: '/romUpload',
            type: 'POST',
            data: new FormData(e.target),
            processData: false,
            contentType: false,
            success: (extractedData) => {
                console.log(extractedData)
                processExtractedResults(extractedData)
            }
        })*/
