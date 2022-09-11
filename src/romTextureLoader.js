import * as IDB from "idb-keyval"
var msgpack = require("msgpack-lite")
import { assets } from "./assets"

const textureVersion = 40  // bump this if you change ROM import

let loadedGameAssets = false
const url = new URL(window.location.href)
const msgElement = document.getElementById('romMessage')

import { amp_seg8_texture_08000F18,
         amp_seg8_texture_08001318,
         amp_seg8_texture_08001B18,
         amp_seg8_texture_08002318 } from "./actors/amp/model.inc"

import { blue_coin_switch_seg8_texture_08000018,
         blue_coin_switch_seg8_texture_08000418 } from "./actors/blue_coin_switch/model.inc"

import { blue_fish_seg3_texture_0301B5E0 } from "./actors/blue_fish/model.inc"

import { bobomb_seg8_texture_0801DA60,
         bobomb_seg8_texture_0801EA60,
         bobomb_seg8_texture_0801FA60,
         bobomb_seg8_texture_08020A60,
         bobomb_seg8_texture_08021A60,
         bobomb_seg8_texture_08022260 } from "./actors/bobomb/model.inc"

import { bomb_seg6_texture_06057AC0,
         bomb_seg6_texture_06058AC0,
         bomb_seg6_texture_06059AC0 } from "./actors/bomb/model.inc"

import { boo_seg5_texture_05009B40,
         boo_seg5_texture_0500AB40 } from "./actors/boo/model.inc"

import { boo_castle_seg6_texture_06015670,
         boo_castle_seg6_texture_06016670 } from "./actors/boo_castle/model.inc"

import { book_seg5_texture_05002570 } from "./actors/book/model.inc"

import { bookend_seg5_texture_05000060,
         bookend_seg5_texture_05000460,
         bookend_seg5_texture_05000860,
         bookend_seg5_texture_05000C60,
         bookend_seg5_texture_05001060 } from "./actors/bookend/model.inc"

import { bowser_seg6_texture_0601F438,
         bowser_seg6_texture_0601FC38,
         bowser_seg6_texture_06020C38,
         bowser_seg6_texture_06021438,
         bowser_seg6_texture_06022438,
         bowser_seg6_texture_06022C38,
         bowser_seg6_texture_06023C38,
         bowser_seg6_texture_06024438,
         bowser_seg6_texture_06025438,
         bowser_seg6_texture_06025C38,
         bowser_seg6_texture_06026438,
         bowser_seg6_texture_06027438,
         bowser_seg6_texture_06028438,
         bowser_seg6_texture_06028C38,
         bowser_seg6_texture_06029C38,
         bowser_seg6_texture_0602AC38,
         bowser_seg6_texture_0602BC38,
         bowser_seg6_texture_0602CC38,
         bowser_seg6_texture_0602DC38,
         bowser_seg6_texture_0602EC38,
         bowser_seg6_texture_0602FC38,
         bowser_seg6_texture_06030C38,
         bowser_seg6_texture_06031C38,
         bowser_seg6_texture_06032C38,
         bowser_seg6_texture_06033C38,
         bowser_seg6_texture_06034C38,
         bowser_seg6_texture_06035C38,
         bowser_seg6_texture_06036C38,
         bowser_seg6_texture_06037C38 } from "./actors/bowser/model.inc"

import { flame_seg6_texture_06000000,
         flame_seg6_texture_06002000,
         flame_seg6_texture_06004000,
         flame_seg6_texture_06006000,
         flame_seg6_texture_06008000,
         flame_seg6_texture_0600A000,
         flame_seg6_texture_0600C000,
         flame_seg6_texture_0600E000,
         flame_seg6_texture_06010000,
         flame_seg6_texture_06012000,
         flame_seg6_texture_06014000,
         flame_seg6_texture_06016000,
         flame_seg6_texture_06018000,
         flame_seg6_texture_0601A000 } from "./actors/bowser_flame/model.inc"

import { breakable_box_seg8_texture_08011A90,
         breakable_box_seg8_texture_08012290 } from "./actors/breakable_box/model.inc"

import { bub_seg6_texture_0600E2A8,
         bub_seg6_texture_0600EAA8,
         bub_seg6_texture_0600F2A8,
         bub_seg6_texture_060102A8 } from "./actors/bub/model.inc"

import { bubba_seg5_texture_05000008,
         bubba_seg5_texture_05000408,
         bubba_seg5_texture_05001408,
         bubba_seg5_texture_05001C08,
         bubba_seg5_texture_05002408 } from "./actors/bubba/model.inc"

import { bubble_seg4_texture_0401CD60,
         bubble_seg4_texture_0401D560 } from "./actors/bubble/model.inc"

import { bullet_bill_seg5_texture_0500BAA8,
         bullet_bill_seg5_texture_0500CAA8 } from "./actors/bullet_bill/model.inc"

import { bully_seg5_texture_050000E0,
         bully_seg5_texture_05000468,
         bully_seg5_texture_05001468,
         bully_seg5_texture_05002468 } from "./actors/bully/model.inc"

import { burn_smoke_seg4_texture_04021800 } from "./actors/burn_smoke/model.inc"

import { butterfly_seg3_texture_030043A8 } from "./actors/butterfly/model.inc"

import { cannon_barrel_seg8_texture_080058A8 } from "./actors/cannon_barrel/model.inc"

import { cannon_base_seg8_texture_080049B8 } from "./actors/cannon_base/model.inc"

import { cannon_lid_seg8_texture_08004058 } from "./actors/cannon_lid/model.inc"

import { capswitch_seg5_texture_05001C48,
         capswitch_seg5_texture_05002C48 } from "./actors/capswitch/model.inc"

import { chain_ball_seg6_texture_06020AE8 } from "./actors/chain_ball/model.inc"

import { chain_chomp_seg6_texture_060213D0,
         chain_chomp_seg6_texture_06021BD0,
         chain_chomp_seg6_texture_060223D0,
         chain_chomp_seg6_texture_06022BD0,
         chain_chomp_seg6_texture_060233D0 } from "./actors/chain_chomp/model.inc"

import { chair_seg5_texture_05003060,
         chair_seg5_texture_05003860,
         chair_seg5_texture_05004060,
         chair_seg5_texture_05004460 } from "./actors/chair/model.inc"

import { checkerboard_platform_seg8_texture_0800C840,
         checkerboard_platform_seg8_texture_0800CC40 } from "./actors/checkerboard_platform/model.inc"

import { chilly_chief_seg6_texture_06000060,
         chilly_chief_seg6_texture_06001060,
         chilly_chief_seg6_texture_06002060 } from "./actors/chillychief/model.inc"

import { chuckya_seg8_texture_08006778,
         chuckya_seg8_texture_08007778,
         chuckya_seg8_texture_08007F78,
         chuckya_seg8_texture_08008F78 } from "./actors/chuckya/model.inc"

import { clam_shell_seg5_texture_05000030,
         clam_shell_seg5_texture_05000830 } from "./actors/clam_shell/model.inc"

import { coin_seg3_texture_03005780,
         coin_seg3_texture_03005F80,
         coin_seg3_texture_03006780,
         coin_seg3_texture_03006F80 } from "./actors/coin/model.inc"

import { cyan_fish_seg6_texture_0600D468 } from "./actors/cyan_fish/model.inc"

import { dirt_seg3_texture_0302BDF8 } from "./actors/dirt/model.inc"

import { door_seg3_texture_03009D10,
         door_seg3_texture_0300AD10,
         door_seg3_texture_0300BD10,
         door_seg3_texture_0300CD10,
         door_seg3_texture_0300D510,
         door_seg3_texture_0300E510,
         door_seg3_texture_0300ED10,
         door_seg3_texture_0300FD10,
         door_seg3_texture_03010510,
         door_seg3_texture_03011510,
         door_seg3_texture_03011D10,
         door_seg3_texture_03012510,
         door_seg3_texture_03012D10,
         door_seg3_texture_03013510 } from "./actors/door/model.inc"

import { dorrie_seg6_texture_06009BA0,
         dorrie_seg6_texture_06009DA0,
         dorrie_seg6_texture_0600ADA0 } from "./actors/dorrie/model.inc"

import { exclamation_box_seg8_texture_08012E28,
         exclamation_box_seg8_texture_08013628,
         exclamation_box_seg8_texture_08014628,
         exclamation_box_seg8_texture_08014E28,
         exclamation_box_seg8_texture_08015E28,
         exclamation_box_seg8_texture_08016628,
         exclamation_box_seg8_texture_08017628,
         exclamation_box_seg8_texture_08017E28 } from "./actors/exclamation_box/model.inc"

import { exclamation_box_outline_seg8_texture_08025168,
         exclamation_box_outline_seg8_texture_08025A80 } from "./actors/exclamation_box_outline/model.inc"

import { explosion_seg3_texture_03000A08,
         explosion_seg3_texture_03001208,
         explosion_seg3_texture_03001A08,
         explosion_seg3_texture_03002208,
         explosion_seg3_texture_03002A08,
         explosion_seg3_texture_03003208,
         explosion_seg3_texture_03003A08 } from "./actors/explosion/model.inc"

import { eyerok_seg5_texture_05008D40,
         eyerok_seg5_texture_05009540,
         eyerok_seg5_texture_05009D40,
         eyerok_seg5_texture_0500A540,
         eyerok_seg5_texture_0500AD40 } from "./actors/eyerok/model.inc"

import { flame_seg3_texture_03017320,
         flame_seg3_texture_03017B20,
         flame_seg3_texture_03018320,
         flame_seg3_texture_03018B20,
         flame_seg3_texture_03019320,
         flame_seg3_texture_03019B20,
         flame_seg3_texture_0301A320,
         flame_seg3_texture_0301AB20 } from "./actors/flame/model.inc"

import { flyguy_seg8_texture_0800E088,
         flyguy_seg8_texture_0800F088,
         flyguy_seg8_texture_0800F888 } from "./actors/flyguy/model.inc"

import { fwoosh_seg5_texture_05015808 } from "./actors/fwoosh/model.inc"

import { goomba_seg8_texture_08019530,
         goomba_seg8_texture_08019D30,
         goomba_seg8_texture_0801A530 } from "./actors/goomba/model.inc"

import { haunted_cage_seg5_texture_0500C288,
         haunted_cage_seg5_texture_0500CA88,
         haunted_cage_seg5_texture_0500D288,
         haunted_cage_seg5_texture_0500D688,
         haunted_cage_seg5_texture_0500DA88,
         haunted_cage_seg5_texture_0500E288 } from "./actors/haunted_cage/model.inc"

import { heart_seg8_texture_0800D7E0 } from "./actors/heart/model.inc"

import { heave_ho_seg5_texture_0500E9C8,
         heave_ho_seg5_texture_0500F1C8,
         heave_ho_seg5_texture_0500F9C8,
         heave_ho_seg5_texture_050109C8,
         heave_ho_seg5_texture_050111C8,
         heave_ho_seg5_texture_050113C8 } from "./actors/heave_ho/model.inc"

import { hoot_seg5_texture_05000A20,
         hoot_seg5_texture_05001E50,
         hoot_seg5_texture_05002650 } from "./actors/hoot/model.inc"

import { impact_ring_seg6_texture_0601CA50,
         impact_ring_seg6_texture_0601DA50 } from "./actors/impact_ring/model.inc"

import { king_bobomb_seg5_texture_05000078,
         king_bobomb_seg5_texture_05001078,
         king_bobomb_seg5_texture_05002078,
         king_bobomb_seg5_texture_05002878,
         king_bobomb_seg5_texture_05004878,
         king_bobomb_seg5_texture_05005878,
         king_bobomb_seg5_texture_05006078,
         king_bobomb_seg5_texture_05006478,
         king_bobomb_seg5_texture_05008478,
         king_bobomb_seg5_texture_05009478 } from "./actors/king_bobomb/model.inc"

import { klepto_seg5_texture_05000008,
         klepto_seg5_texture_05000808,
         klepto_seg5_texture_05001008,
         klepto_seg5_texture_05002008,
         klepto_seg5_texture_05003008 } from "./actors/klepto/model.inc"

import { koopa_seg6_texture_06002648,
         koopa_seg6_texture_06002E48,
         koopa_seg6_texture_06003648,
         koopa_seg6_texture_06003E48,
         koopa_seg6_texture_06004648,
         koopa_seg6_texture_06004E48,
         koopa_seg6_texture_06005648,
         koopa_seg6_texture_06005E48 } from "./actors/koopa/model.inc"

import { koopa_flag_seg6_texture_06000048 } from "./actors/koopa_flag/model.inc"

import { koopa_shell_seg8_texture_080274A0,
         koopa_shell_seg8_texture_08027CA0 } from "./actors/koopa_shell/model.inc"

import { lakitu_seg6_texture_06000000,
         lakitu_seg6_texture_06000800,
         lakitu_seg6_texture_06001800,
         lakitu_seg6_texture_06002800,
         lakitu_seg6_texture_06003000,
         lakitu_seg6_texture_06003800 } from "./actors/lakitu_cameraman/model.inc"

import { lakitu_enemy_seg5_texture_0500ECE0,
         lakitu_enemy_seg5_texture_0500F4E0,
         lakitu_enemy_seg5_texture_050104E0,
         lakitu_enemy_seg5_texture_050114E0,
         lakitu_enemy_seg5_texture_05011CE0 } from "./actors/lakitu_enemy/model.inc"

import { leaves_seg3_texture_0301CBE0 } from "./actors/leaves/model.inc"

import { mad_piano_seg5_texture_05006AF0,
         mad_piano_seg5_texture_050072F0,
         mad_piano_seg5_texture_050076F0,
         mad_piano_seg5_texture_05007AF0,
         mad_piano_seg5_texture_05007EF0,
         mad_piano_seg5_texture_050082F0 } from "./actors/mad_piano/model.inc"

import { manta_seg5_texture_050017A0,
         manta_seg5_texture_05001FA0,
         manta_seg5_texture_05002FA0,
         manta_seg5_texture_050037A0 } from "./actors/manta/model.inc"

import { mario_texture_metal,
         mario_texture_yellow_button,
         mario_texture_m_logo,
         mario_texture_hair_sideburn,
         mario_texture_mustache,
         mario_texture_eyes_front,
         mario_texture_eyes_half_closed,
         mario_texture_eyes_closed,
         mario_texture_eyes_closed_unused1,
         mario_texture_eyes_closed_unused2,
         mario_texture_eyes_right,
         mario_texture_eyes_left,
         mario_texture_eyes_up,
         mario_texture_eyes_down,
         mario_texture_eyes_dead,
         mario_texture_wings_half_1,
         mario_texture_wings_half_2,
         mario_texture_metal_wings_half_1,
         mario_texture_metal_wings_half_2 } from "./actors/mario/model.inc"

import { mario_cap_seg3_texture_0301CF50,
         mario_cap_seg3_texture_0301DF50,
         mario_cap_seg3_texture_0301E750,
         mario_cap_seg3_texture_0301F750,
         mario_cap_seg3_texture_03020750,
         mario_cap_seg3_texture_03021750 } from "./actors/mario_cap/model.inc"

import { metal_box_seg8_texture_08023998 } from "./actors/metal_box/model.inc"

import { mips_seg6_texture_0600FB80 } from "./actors/mips/model.inc"

import { mist_seg3_texture_03000080 } from "./actors/mist/model.inc"

import { moneybag_seg6_texture_060039B0,
         moneybag_seg6_texture_060049B0 } from "./actors/moneybag/model.inc"

import { monty_mole_seg5_texture_05000970,
         monty_mole_seg5_texture_05001170,
         monty_mole_seg5_texture_05001970,
         monty_mole_seg5_texture_05002170,
         monty_mole_seg5_texture_05002970 } from "./actors/monty_mole/model.inc"

import { monty_mole_hole_seg5_texture_05000040 } from "./actors/monty_mole_hole/model.inc"

import { mr_i_eyeball_seg6_texture_06000080,
         mr_i_eyeball_seg6_texture_06001080 } from "./actors/mr_i_eyeball/model.inc"

import { mr_i_iris_seg6_texture_06002170,
         mr_i_iris_seg6_texture_06002970,
         mr_i_iris_seg6_texture_06003170,
         mr_i_iris_seg6_texture_06003970 } from "./actors/mr_i_iris/model.inc"

import { mushroom_1up_seg3_texture_03029628 } from "./actors/mushroom_1up/model.inc"

import { peach_seg5_texture_05000A28,
         peach_seg5_texture_05001228,
         peach_seg5_texture_05001A28,
         peach_seg5_texture_05002228,
         peach_seg5_texture_05002A28,
         peach_seg5_texture_05002C28,
         peach_seg5_texture_05002E28,
         peach_seg5_texture_05003628,
         peach_seg5_texture_05003E28,
         peach_seg5_texture_05004028 } from "./actors/peach/model.inc"

import { pebble_seg3_texture_0301C300 } from "./actors/pebble/model.inc"

import { penguin_seg5_texture_05002DE0,
         penguin_seg5_texture_050035E0,
         penguin_seg5_texture_05003DE0,
         penguin_seg5_texture_050045E0,
         penguin_seg5_texture_05004DE0,
         penguin_seg5_texture_050055E0 } from "./actors/penguin/model.inc"

import { piranha_plant_seg6_texture_060113F8,
         piranha_plant_seg6_texture_060123F8,
         piranha_plant_seg6_texture_06012BF8,
         piranha_plant_seg6_texture_060133F8,
         piranha_plant_seg6_texture_06013BF8,
         piranha_plant_seg6_texture_060143F8 } from "./actors/piranha_plant/model.inc"

import { pokey_seg5_texture_05011750,
         pokey_seg5_texture_05011F50,
         pokey_seg5_texture_05012878 } from "./actors/pokey/model.inc"

import { poundable_pole_seg6_texture_06001050,
         poundable_pole_seg6_texture_06001850 } from "./actors/poundable_pole/model.inc"

import { texture_power_meter_left_side,
         texture_power_meter_right_side,
         texture_power_meter_full,
         texture_power_meter_seven_segments,
         texture_power_meter_six_segments,
         texture_power_meter_five_segments,
         texture_power_meter_four_segments,
         texture_power_meter_three_segments,
         texture_power_meter_two_segments,
         texture_power_meter_one_segments } from "./actors/power_meter/model.inc"

import { purple_switch_seg8_texture_0800C0A8,
         purple_switch_seg8_texture_0800C128 } from "./actors/purple_switch/model.inc"

import { sand_seg3_texture_0302BAD0 } from "./actors/sand/model.inc"

import { scuttlebug_seg6_texture_06010108,
         scuttlebug_seg6_texture_06010908,
         scuttlebug_seg6_texture_06011908,
         scuttlebug_seg6_texture_06012908,
         scuttlebug_seg6_texture_06013108 } from "./actors/scuttlebug/model.inc"

import { seaweed_seg6_texture_06007E10,
         seaweed_seg6_texture_06008610,
         seaweed_seg6_texture_06008E10,
         seaweed_seg6_texture_06009610 } from "./actors/seaweed/model.inc"

import { skeeter_seg6_texture_06000090,
         skeeter_seg6_texture_06000890 } from "./actors/skeeter/model.inc"

import { smoke_seg5_texture_050072C0 } from "./actors/smoke/model.inc"

import { snowman_seg5_texture_05008C70,
         snowman_seg5_texture_05009470,
         snowman_seg5_texture_0500A470,
         snowman_seg5_texture_0500B470,
         snowman_seg5_texture_0500BC70 } from "./actors/snowman/model.inc"

import { snufit_seg6_texture_060070E0,
         snufit_seg6_texture_060078E0,
         snufit_seg6_texture_060080E0,
         snufit_seg6_texture_060084E0 } from "./actors/snufit/model.inc"

import { sparkles_seg4_texture_04027490,
         sparkles_seg4_texture_04027C90,
         sparkles_seg4_texture_04028490,
         sparkles_seg4_texture_04028C90,
         sparkles_seg4_texture_04029490,
         sparkles_seg4_texture_04029C90 } from "./actors/sparkle/model.inc"

import { sparkles_animation_seg4_texture_04032A88,
         sparkles_animation_seg4_texture_04033288,
         sparkles_animation_seg4_texture_04033A88,
         sparkles_animation_seg4_texture_04034288,
         sparkles_animation_seg4_texture_04034A88 } from "./actors/sparkle_animation/model.inc"

import { spindrift_seg5_texture_050006D0,
         spindrift_seg5_texture_05000ED0,
         spindrift_seg5_texture_050016D0,
         spindrift_seg5_texture_05001ED0 } from "./actors/spindrift/anims/anim_050006AC.inc"

import { springboard_seg5_texture_05000018,
         springboard_seg5_texture_05000818 } from "./actors/springboard/model.inc"

import { star_seg3_texture_0302A6F0,
         star_seg3_texture_0302AEF0 } from "./actors/star/model.inc"

import { stomp_smoke_seg4_texture_04022148,
         stomp_smoke_seg4_texture_04022948,
         stomp_smoke_seg4_texture_04023148,
         stomp_smoke_seg4_texture_04023948,
         stomp_smoke_seg4_texture_04024148,
         stomp_smoke_seg4_texture_04024948 } from "./actors/stomp_smoke/model.inc"

import { sushi_seg5_texture_05008ED0,
         sushi_seg5_texture_050096D0,
         sushi_seg5_texture_05009AD0 } from "./actors/sushi/model.inc"

import { swoop_seg6_texture_06004270,
         swoop_seg6_texture_06004A70,
         swoop_seg6_texture_06005270,
         swoop_seg6_texture_06005A70 } from "./actors/swoop/model.inc"

import { thwomp_seg5_texture_05009900,
         thwomp_seg5_texture_0500A900 } from "./actors/thwomp/model.inc"

import { toad_seg6_texture_06005920,
         toad_seg6_texture_06006120 } from "./actors/toad/model.inc"

import { tornado_seg5_texture_05013128 } from "./actors/tornado/model.inc"

import { treasure_chest_seg6_texture_06013FA8,
         treasure_chest_seg6_texture_060147A8,
         treasure_chest_seg6_texture_06014FA8,
         treasure_chest_seg6_texture_060157A8 } from "./actors/treasure_chest/model.inc"

import { tree_seg3_texture_0302DE28,
         tree_seg3_texture_0302EE28,
         tree_seg3_texture_0302FF60,
         tree_seg3_texture_03031048,
         tree_seg3_texture_03032218 } from "./actors/tree/model.inc"

import { ukiki_seg5_texture_05007BC0,
         ukiki_seg5_texture_05008BC0,
         ukiki_seg5_texture_05009BC0,
         ukiki_seg5_texture_0500A3C0 } from "./actors/ukiki/model.inc"

import { unagi_seg5_texture_0500AF20,
         unagi_seg5_texture_0500B720,
         unagi_seg5_texture_0500B920,
         unagi_seg5_texture_0500C120,
         unagi_seg5_texture_0500C320,
         unagi_seg5_texture_0500C3A0 } from "./actors/unagi/model.inc"

import { smoke_seg4_texture_0401DEA0,
         smoke_seg4_texture_0401E6A0,
         smoke_seg4_texture_0401EEA0,
         smoke_seg4_texture_0401F6A0,
         smoke_seg4_texture_0401FEA0,
         smoke_seg4_texture_040206A0,
         smoke_seg4_texture_04020EA0 } from "./actors/walk_smoke/model.inc"

import { warp_pipe_seg3_texture_03007E40,
         warp_pipe_seg3_texture_03009168 } from "./actors/warp_pipe/model.inc"

import { water_bubble_seg5_texture_0500FE80 } from "./actors/water_bubble/model.inc"

import { water_mine_seg6_texture_0600A4F8,
         water_mine_seg6_texture_0600B4F8,
         water_mine_seg6_texture_0600C4F8 } from "./actors/water_mine/model.inc"

import { water_ring_seg6_texture_06012380 } from "./actors/water_ring/model.inc"

import { water_splash_seg4_texture_0402A5C8,
         water_splash_seg4_texture_0402B5C8,
         water_splash_seg4_texture_0402C5C8,
         water_splash_seg4_texture_0402D5C8,
         water_splash_seg4_texture_0402E5C8,
         water_splash_seg4_texture_0402F5C8,
         water_splash_seg4_texture_040305C8,
         water_splash_seg4_texture_040315C8 } from "./actors/water_splash/model.inc"

import { water_wave_seg4_texture_04025358,
         water_wave_seg4_texture_04025B58,
         water_wave_seg4_texture_04026358,
         water_wave_seg4_texture_04026B58 } from "./actors/water_wave/model.inc"

import { whirlpool_seg5_texture_05012848 } from "./actors/whirlpool/model.inc"

import { white_particle_texture } from "./actors/white_particle/model.inc"

import { white_particle_small_texture } from "./actors/white_particle_small/model.inc"

import { whomp_seg6_texture_0601C360,
         whomp_seg6_texture_0601D360,
         whomp_seg6_texture_0601E360,
         whomp_seg6_texture_0601EB60 } from "./actors/whomp/model.inc"

import { wiggler_seg5_texture_05005A30,
         wiggler_seg5_texture_05006A30,
         wiggler_seg5_texture_05007A30,
         wiggler_seg5_texture_05008230,
         wiggler_seg5_texture_05008A30,
         wiggler_seg5_texture_05009230,
         wiggler_seg5_texture_0500A230 } from "./actors/wiggler_body/model.inc"

import { wooden_signpost_seg3_texture_0302C9C8,
         wooden_signpost_seg3_texture_0302D1C8 } from "./actors/wooden_signpost/model.inc"

import { yellow_sphere_seg6_texture_0601EB88 } from "./actors/yellow_sphere/model.inc"

import { yellow_sphere_seg5_texture_05000040 } from "./actors/yellow_sphere_small/model.inc"

import { yoshi_seg5_texture_0501C4A0,
         yoshi_seg5_texture_0501C6A0,
         yoshi_seg5_texture_0501C8A0 } from "./actors/yoshi/model.inc"

import { yoshi_egg_seg5_texture_050057B8,
         yoshi_egg_seg5_texture_05005FB8,
         yoshi_egg_seg5_texture_050067B8,
         yoshi_egg_seg5_texture_05006FB8,
         yoshi_egg_seg5_texture_050077B8,
         yoshi_egg_seg5_texture_05007FB8,
         yoshi_egg_seg5_texture_050087B8,
         yoshi_egg_seg5_texture_05008FB8 } from "./actors/yoshi_egg/model.inc"

import { effect_0B000008,
         effect_0B000808,
         effect_0B001008,
         effect_0B001808,
         effect_0B002020,
         effect_0B002820,
         effect_0B003020,
         effect_0B003820,
         effect_0B004020,
         effect_0B004820,
         effect_0B005020,
         effect_0B005820,
         effect_0B006048,
         effect_0B006AD8 } from "./bin/effect"

import { texture_hud_char_0,
         texture_hud_char_1,
         texture_hud_char_2,
         texture_hud_char_3,
         texture_hud_char_4,
         texture_hud_char_5,
         texture_hud_char_6,
         texture_hud_char_7,
         texture_hud_char_8,
         texture_hud_char_9,
         texture_hud_char_A,
         texture_hud_char_B,
         texture_hud_char_C,
         texture_hud_char_D,
         texture_hud_char_E,
         texture_hud_char_F,
         texture_hud_char_G,
         texture_hud_char_H,
         texture_hud_char_I,
         texture_hud_char_J,
         texture_hud_char_K,
         texture_hud_char_L,
         texture_hud_char_M,
         texture_hud_char_N,
         texture_hud_char_O,
         texture_hud_char_P,
         texture_hud_char_Q,
         texture_hud_char_R,
         texture_hud_char_S,
         texture_hud_char_T,
         texture_hud_char_U,
         texture_hud_char_V,
         texture_hud_char_W,
         texture_hud_char_X,
         texture_hud_char_Y,
         texture_hud_char_Z,
         texture_hud_char_apostrophe,
         texture_hud_char_double_quote,
         texture_hud_char_multiply,
         texture_hud_char_coin,
         texture_hud_char_mario_head,
         texture_hud_char_star,
         texture_hud_char_decimal_point,
         texture_hud_char_beta_key,
         texture_credits_char_3,
         texture_credits_char_4,
         texture_credits_char_6,
         texture_credits_char_A,
         texture_credits_char_B,
         texture_credits_char_C,
         texture_credits_char_D,
         texture_credits_char_E,
         texture_credits_char_F,
         texture_credits_char_G,
         texture_credits_char_H,
         texture_credits_char_I,
         texture_credits_char_J,
         texture_credits_char_K,
         texture_credits_char_L,
         texture_credits_char_M,
         texture_credits_char_N,
         texture_credits_char_O,
         texture_credits_char_P,
         texture_credits_char_Q,
         texture_credits_char_R,
         texture_credits_char_S,
         texture_credits_char_T,
         texture_credits_char_U,
         texture_credits_char_V,
         texture_credits_char_W,
         texture_credits_char_X,
         texture_credits_char_Y,
         texture_credits_char_Z,
         texture_credits_char_period,
         texture_font_char_us_0,
         texture_font_char_us_1,
         texture_font_char_us_2,
         texture_font_char_us_3,
         texture_font_char_us_4,
         texture_font_char_us_5,
         texture_font_char_us_6,
         texture_font_char_us_7,
         texture_font_char_us_8,
         texture_font_char_us_9,
         texture_font_char_us_A,
         texture_font_char_us_B,
         texture_font_char_us_C,
         texture_font_char_us_D,
         texture_font_char_us_E,
         texture_font_char_us_F,
         texture_font_char_us_G,
         texture_font_char_us_H,
         texture_font_char_us_I,
         texture_font_char_us_J,
         texture_font_char_us_K,
         texture_font_char_us_L,
         texture_font_char_us_M,
         texture_font_char_us_N,
         texture_font_char_us_O,
         texture_font_char_us_P,
         texture_font_char_us_Q,
         texture_font_char_us_R,
         texture_font_char_us_S,
         texture_font_char_us_T,
         texture_font_char_us_U,
         texture_font_char_us_V,
         texture_font_char_us_W,
         texture_font_char_us_X,
         texture_font_char_us_Y,
         texture_font_char_us_Z,
         texture_font_char_us_a,
         texture_font_char_us_b,
         texture_font_char_us_c,
         texture_font_char_us_d,
         texture_font_char_us_e,
         texture_font_char_us_f,
         texture_font_char_us_g,
         texture_font_char_us_h,
         texture_font_char_us_i,
         texture_font_char_us_j,
         texture_font_char_us_k,
         texture_font_char_us_l,
         texture_font_char_us_m,
         texture_font_char_us_n,
         texture_font_char_us_o,
         texture_font_char_us_p,
         texture_font_char_us_q,
         texture_font_char_us_r,
         texture_font_char_us_s,
         texture_font_char_us_t,
         texture_font_char_us_u,
         texture_font_char_us_v,
         texture_font_char_us_w,
         texture_font_char_us_x,
         texture_font_char_us_y,
         texture_font_char_us_z,
         texture_font_char_us_left_right_arrow,
         texture_font_char_us_exclamation,
         texture_font_char_us_coin,
         texture_font_char_us_multiply,
         texture_font_char_us_open_parentheses,
         texture_font_char_us_close_open_parentheses,
         texture_font_char_us_close_parentheses,
         texture_font_char_us_tilde,
         texture_font_char_us_period,
         texture_font_char_us_percent,
         texture_font_char_us_interpunct,
         texture_font_char_us_comma,
         texture_font_char_us_apostrophe,
         texture_font_char_us_question,
         texture_font_char_us_star_filled,
         texture_font_char_us_star_hollow,
         texture_font_char_us_double_quote_open,
         texture_font_char_us_double_quote_close,
         texture_font_char_us_ellipsis,
         texture_font_char_us_slash,
         texture_font_char_us_ampersand,
         texture_font_char_us_button_A,
         texture_font_char_us_button_B,
         texture_font_char_us_button_C,
         texture_font_char_us_button_Z,
         texture_font_char_us_button_R,
         texture_font_char_us_button_C_up,
         texture_font_char_us_button_C_down,
         texture_font_char_us_button_C_left,
         texture_font_char_us_button_C_right,
         texture_hud_char_camera,
         texture_hud_char_lakitu,
         texture_hud_char_no_camera,
         texture_hud_char_arrow_up,
         texture_hud_char_arrow_down,
         texture_ia8_up_arrow,

         texture_shadow_quarter_circle,
         texture_shadow_quarter_square,
         texture_transition_bowser_half,
         texture_transition_circle_half,
         texture_transition_mario,
         texture_transition_star_half,
         texture_waterbox_jrb_water,
         texture_waterbox_lava,
         texture_waterbox_mist,
         texture_waterbox_unknown_water,
         texture_waterbox_water,




          } from "./bin/segment2"

import { title_texture_0A0001C0,
         title_texture_0A000E40,
         title_texture_0A001AC0,
         title_texture_0A002740,
         title_texture_0A0033C0,
         title_texture_0A004040,
         title_texture_0A004CC0,
         title_texture_0A005940 } from "./levels/intro/title_screen_bg"

import { gd_texture_mario_face_shine,
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

import { bbh_seg7_texture_07000000,
         bbh_seg7_texture_07001000,
         bbh_seg7_texture_07001800,
         bbh_seg7_texture_07002000,
         bbh_seg7_texture_07003000,
         bbh_seg7_texture_07003400,
         bbh_seg7_texture_07004400 } from "./levels/bbh/texture.inc"

import { bitdw_seg7_texture_07000000,
         bitdw_seg7_texture_07000800,
         bitdw_seg7_texture_07001000,
         bitdw_seg7_texture_07001800 } from "./levels/bitdw/texture.inc"

import { bitfs_seg7_texture_07000000,
         bitfs_seg7_texture_07001000,
         bitfs_seg7_texture_07001800 } from "./levels/bitfs/texture.inc"

import { bits_seg7_texture_07000000,
         bits_seg7_texture_07001000,
         bits_seg7_texture_07002000 } from "./levels/bits/texture.inc"

import { bob_seg7_texture_07000000,
         bob_seg7_texture_07000800,
         bob_seg7_texture_07001000,
         bob_seg7_texture_07001800,
         bob_seg7_texture_07002000 } from "./levels/bob/texture.inc"

import { bowser_1_seg7_texture_07000000,
         bowser_1_seg7_texture_07001000,
         bowser_1_seg7_texture_07001800 } from "./levels/bowser_1/texture.inc"

import { bowser_2_seg7_texture_07000000 } from "./levels/bowser_2/texture.inc"

import { bowser_3_seg7_texture_07000000,
         bowser_3_seg7_texture_07000800,
         bowser_3_seg7_texture_07001000 } from "./levels/bowser_3/texture.inc"

import { castle_grounds_seg7_texture_07000000,
         castle_grounds_seg7_texture_07001000,
         castle_grounds_seg7_texture_07002000 } from "./levels/castle_grounds/texture.inc"

import { castle_grounds_seg7_texture_0700C9E8,
         castle_grounds_seg7_texture_0700D9E8 } from "./levels/castle_grounds/areas/1/12/model.inc"

import { castle_grounds_seg7_us_texture_0700EAE8 } from "./levels/castle_grounds/areas/1/13/model.inc"

import { texture_castle_light,
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
         inside_castle_seg7_texture_07010800,
         inside_castle_seg7_texture_07011800,
         inside_castle_seg7_texture_07012800,
         inside_castle_seg7_texture_07013800,
         inside_castle_seg7_texture_07014800,
         inside_castle_seg7_texture_07015800,
         inside_castle_seg7_texture_07016800,
         inside_castle_seg7_texture_07017000,
         inside_castle_seg7_texture_07017800,
         inside_castle_seg7_texture_07018800,
         inside_castle_seg7_texture_07019800,
         inside_castle_seg7_texture_0701A800,
         inside_castle_seg7_texture_0701B800,
         inside_castle_seg7_texture_0701C800,
         inside_castle_seg7_texture_0701D800,
         inside_castle_seg7_texture_0701E800,
         inside_castle_seg7_texture_0701F800,
         inside_castle_seg7_texture_07020800 } from "./levels/castle_inside/texture.inc"

import { ccm_seg7_texture_07000000,
         ccm_seg7_texture_07000800,
         ccm_seg7_texture_07000900,
         ccm_seg7_texture_07001100,
         ccm_seg7_texture_07001900,
         ccm_seg7_texture_07002100,
         ccm_seg7_texture_07002900,
         ccm_seg7_texture_07003100,
         ccm_seg7_texture_07003900,
         ccm_seg7_texture_07003B00,
         ccm_seg7_texture_07004300,
         ccm_seg7_texture_07004B00 } from "./levels/ccm/texture.inc"

import { ccm_seg7_texture_07011958 } from "./levels/ccm/snowman_base/model.inc"

import { cotmc_seg7_texture_07000000,
         cotmc_seg7_texture_07001000,
         cotmc_seg7_texture_07001800,
         cotmc_seg7_texture_07002000,
         cotmc_seg7_texture_07002800 } from "./levels/cotmc/texture.inc"

import { ddd_seg7_texture_07000000,
         ddd_seg7_texture_07001000,
         ddd_seg7_texture_07001800,
         ddd_seg7_texture_07002000,
         ddd_seg7_texture_07003000 } from "./levels/ddd/texture.inc"

import { hmc_seg7_texture_07000000,
         hmc_seg7_texture_07001000,
         hmc_seg7_texture_07002000,
         hmc_seg7_texture_07003000,
         hmc_seg7_texture_07003800,
         hmc_seg7_texture_07004000,
         hmc_seg7_texture_07004800 } from "./levels/hmc/texture.inc"

import { hmc_seg7_texture_07024CE0 } from "./levels/hmc/areas/1/painting.inc"

import { intro_seg7_texture_07007EA0,
         intro_seg7_texture_070086A0,
         intro_seg7_texture_0700B4A0,
         intro_seg7_texture_0700C4A0 } from "./levels/intro/leveldata"

import { jrb_seg7_texture_07000000,
         jrb_seg7_texture_07000800,
         jrb_seg7_texture_07001800,
         jrb_seg7_texture_07002000 } from "./levels/jrb/texture.inc"

import { lll_seg7_texture_07000000,
         lll_seg7_texture_07000800,
         lll_seg7_texture_07001000,
         lll_seg7_texture_07001800,
         lll_seg7_texture_07002000,
         lll_seg7_texture_07002800,
         lll_seg7_texture_07003000,
         lll_seg7_texture_07003800,
         lll_seg7_texture_07004000,
         lll_seg7_texture_07004800,
         lll_seg7_texture_07005000,
         lll_seg7_texture_07005800,
         lll_seg7_texture_07006000,
         lll_seg7_texture_07006800,
         lll_seg7_texture_07007000,
         lll_seg7_texture_07007800,
         lll_seg7_texture_07008000,
         lll_seg7_texture_07008800,
         lll_seg7_texture_07009000,
         lll_seg7_texture_07009800,
         lll_seg7_texture_0700A000,
         lll_seg7_texture_0700A800,
         lll_seg7_texture_0700B000,
         lll_seg7_texture_0700B800,
         lll_seg7_texture_0700C000,
         lll_seg7_texture_0700C800,
         lll_seg7_texture_0700D000,
         lll_seg7_texture_0700D200,
         lll_seg7_texture_0700D400,
         lll_seg7_texture_0700DC00,
         lll_seg7_texture_0700E400,
         lll_seg7_texture_0700EC00,
         lll_seg7_texture_0700F400 } from "./levels/lll/texture.inc"

import { texture_menu_stone,
         texture_menu_dark_stone,
         texture_menu_mario_save,
         texture_menu_mario_new,
         texture_menu_erase,
         texture_menu_copy,
         texture_menu_file,
         texture_menu_score,
         texture_menu_sound,
         texture_menu_idle_hand,
         texture_menu_grabbing_hand,
         texture_menu_font_char_0,
         texture_menu_font_char_1,
         texture_menu_font_char_2,
         texture_menu_font_char_3,
         texture_menu_font_char_4,
         texture_menu_font_char_5,
         texture_menu_font_char_6,
         texture_menu_font_char_7,
         texture_menu_font_char_8,
         texture_menu_font_char_9,
         texture_menu_font_char_A,
         texture_menu_font_char_B,
         texture_menu_font_char_C,
         texture_menu_font_char_D,
         texture_menu_font_char_E,
         texture_menu_font_char_F,
         texture_menu_font_char_G,
         texture_menu_font_char_H,
         texture_menu_font_char_I,
         texture_menu_font_char_J,
         texture_menu_font_char_K,
         texture_menu_font_char_L,
         texture_menu_font_char_M,
         texture_menu_font_char_N,
         texture_menu_font_char_O,
         texture_menu_font_char_P,
         texture_menu_font_char_Q,
         texture_menu_font_char_R,
         texture_menu_font_char_S,
         texture_menu_font_char_T,
         texture_menu_font_char_U,
         texture_menu_font_char_V,
         texture_menu_font_char_W,
         texture_menu_font_char_X,
         texture_menu_font_char_Y,
         texture_menu_font_char_Z,
         texture_menu_font_char_coin,
         texture_menu_font_char_multiply,
         texture_menu_font_char_star_filled,
         texture_menu_font_char_dash,
         texture_menu_font_char_comma,
         texture_menu_font_char_apostrophe,
         texture_menu_font_char_exclamation,
         texture_menu_font_char_question,
         texture_menu_font_char_mface1,
         texture_menu_font_char_mface2,
         texture_menu_font_char_period,
         texture_menu_font_char_ampersand,
         texture_menu_font_char_umlaut,
         texture_menu_font_char_cedilla_mayus,
         texture_menu_font_char_colon,
         texture_menu_course_upper,
         texture_menu_niveau_upper,
         texture_menu_kurs_upper,
         texture_menu_course_lower } from "./levels/menu/leveldata"

import { pss_seg7_texture_07000000,
         pss_seg7_texture_07000800,
         pss_seg7_texture_07001000 } from "./levels/pss/texture.inc"

import { texture_quarter_flying_carpet,
         rr_seg7_texture_07000800,
         rr_seg7_texture_07001800 } from "./levels/rr/texture.inc"

import { sl_seg7_texture_07000000,
         sl_seg7_texture_07000800,
         sl_seg7_texture_07001000,
         sl_seg7_texture_07001800,
         sl_seg7_texture_07002000 } from "./levels/sl/texture.inc"

import { ssl_seg7_texture_07000000,
         ssl_seg7_texture_07000800,
         ssl_seg7_texture_07001800,
         ssl_seg7_texture_07002000,
         ssl_seg7_texture_07002800,
         ssl_seg7_texture_07003800,
         ssl_pyramid_sand } from "./levels/ssl/texture.inc"

import { ssl_seg7_texture_0700BFA8,
         ssl_seg7_texture_0700C7A8,
         ssl_seg7_texture_0700D7A8,
         ssl_seg7_texture_0700E7A8 } from "./levels/ssl/tox_box/model.inc"

import { thi_seg7_texture_07000000,
         thi_seg7_texture_07000800 } from "./levels/thi/texture.inc"

import { totwc_seg7_texture_07000000,
         totwc_seg7_texture_07001000,
         totwc_seg7_texture_07001800,
         totwc_seg7_texture_07002000 } from "./levels/totwc/texture.inc"

import { ttc_seg7_texture_07000000,
         ttc_seg7_texture_07000800 } from "./levels/ttc/texture.inc"

import { ttm_seg7_texture_07000000,
         ttm_seg7_texture_07000800,
         ttm_seg7_texture_07001000,
         ttm_seg7_texture_07001800,
         ttm_seg7_texture_07002000,
         ttm_seg7_texture_07002800,
         ttm_seg7_texture_07003000,
         ttm_seg7_texture_07004000 } from "./levels/ttm/texture.inc"

import { ttm_seg7_texture_0702AD30 } from "./levels/ttm/slide_exit_podium/model.inc"

import { vcutm_seg7_texture_07000000,
         vcutm_seg7_texture_07000800,
         vcutm_seg7_texture_07001800,
         vcutm_seg7_texture_07002800 } from "./levels/vcutm/texture.inc"

import { wdw_seg7_texture_07000000,
         wdw_seg7_texture_07000800,
         wdw_seg7_texture_07001000,
         wdw_seg7_texture_07001800,
         wdw_seg7_texture_07002000 } from "./levels/wdw/texture.inc"

import { wf_seg7_texture_07000000,
         wf_seg7_texture_07000800,
         wf_seg7_texture_07001000,
         wf_seg7_texture_07001800,
         wf_seg7_texture_07002000,
         wf_seg7_texture_07002800 } from "./levels/wf/texture.inc"

import { cave_09000000,
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
         cave_0900C000 } from "./textures/cave"

import { fire_09000000,
         fire_09000800,
         fire_09001000,
         fire_09001800,
         fire_09002000,
         fire_09002800,
         fire_09003000,
         fire_09003800,
         fire_09004000,
         fire_09004800,
         fire_09005000,
         fire_09005800,
         fire_09006000,
         fire_09006800,
         fire_09007000,
         fire_09007800,
         fire_09008000,
         fire_09008800,
         fire_09009000,
         fire_09009800,
         fire_0900A000,
         fire_0900A800,
         fire_0900B000,
         fire_0900B800 } from "./textures/fire"

import { generic_09000000,
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
         generic_0900B000 } from "./textures/generic"

import { grass_09000000,
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
         grass_0900B800 } from "./textures/grass"

import { inside_09000000,
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
         inside_0900B800 } from "./textures/inside"

import { machine_09000000,
         machine_09000800,
         machine_09001000,
         machine_09001800,
         machine_09002000,
         machine_09002800,
         machine_09003000,
         machine_09003800,
         machine_09004000,
         machine_09005000,
         machine_09005800,
         machine_09006000,
         machine_09006800,
         machine_09007000,
         machine_09007800,
         machine_09008000,
         machine_09008400 } from "./textures/machine"

import { mountain_09000000,
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
         mountain_0900C000 } from "./textures/mountain"

import { outside_09000000,
         outside_09001000,
         outside_09002000,
         outside_09003000,
         outside_09003800, 
         outside_09004000, 
         outside_09004800, 
         outside_09005800,
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
         outside_09008800 } from "./textures/outside"

import { bbh_skybox_texture,
         bidw_skybox_texture,
         bitfs_skybox_texture,
         bits_skybox_texture,
         ccm_skybox_texture,
         cloud_floor_skybox_texture,
         clouds_skybox_texture,
         ssl_skybox_texture,
         wdw_skybox_texture,
         water_skybox_texture } from "./textures/skyboxes"

import { sky_09000000,
         sky_09000800,
         sky_09001000,
         sky_09001800,
         sky_09002000,
         sky_09003000,
         sky_09003800,
         sky_09004800,
         sky_09005000,
         sky_09005800,
         sky_09006000,
         sky_09007000,
         sky_09007800,
         sky_09008000,
         texture_metal_hole } from "./textures/sky"

import { snow_09000000,
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
         snow_09009800 } from "./textures/snow"

import { spooky_09000000,
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
         spooky_0900B800 } from "./textures/spooky"

import { water_09000000,
         water_09000800,
         water_09001800,
         water_09002800,
         water_09003800,
         water_09004800,
         water_09005800,
         water_09006000,
         water_09006800,
         water_09007800,
         water_09008800,
         water_09009000,
         water_0900A000,
         water_0900A800,
         water_0900B800 } from "./textures/water"


const loadDataIntoGame = (data) => {

    amp_seg8_texture_08000F18.push(...data["actors/amp/amp_electricity.rgba16.png"])
    amp_seg8_texture_08001318.push(...data["actors/amp/amp_eyes.rgba16.png"])
    amp_seg8_texture_08001B18.push(...data["actors/amp/amp_body.rgba16.png"])
    amp_seg8_texture_08002318.push(...data["actors/amp/amp_mouth.rgba16.png"])

    blue_coin_switch_seg8_texture_08000018.push(...data["actors/blue_coin_switch/blue_coin_switch_side.rgba16.png"])
    blue_coin_switch_seg8_texture_08000418.push(...data["actors/blue_coin_switch/blue_coin_switch_top.rgba16.png"])

    blue_fish_seg3_texture_0301B5E0.push(...data["actors/blue_fish/blue_fish.rgba16.png"])

    bobomb_seg8_texture_0801DA60.push(...data["actors/bobomb/bob-omb_left_side.rgba16.png"])
    bobomb_seg8_texture_0801EA60.push(...data["actors/bobomb/bob-omb_right_side.rgba16.png"])
    bobomb_seg8_texture_0801FA60.push(...data["actors/bobomb/bob-omb_buddy_left_side.rgba16.png"])
    bobomb_seg8_texture_08020A60.push(...data["actors/bobomb/bob-omb_buddy_right_side.rgba16.png"])
    bobomb_seg8_texture_08021A60.push(...data["actors/bobomb/bob-omb_eyes.rgba16.png"])
    bobomb_seg8_texture_08022260.push(...data["actors/bobomb/bob-omb_eyes_blink.rgba16.png"])

    bomb_seg6_texture_06057AC0.push(...data["actors/bomb/bomb_left_side.rgba16.png"])
    bomb_seg6_texture_06058AC0.push(...data["actors/bomb/bomb_right_side.rgba16.png"])
    bomb_seg6_texture_06059AC0.push(...data["actors/bomb/bomb_spike.rgba16.png"])

    boo_seg5_texture_05009B40.push(...data["actors/boo/boo_eyes.rgba16.png"])
    boo_seg5_texture_0500AB40.push(...data["actors/boo/boo_mouth.rgba16.png"])

    boo_castle_seg6_texture_06015670.push(...data["actors/boo_castle/bbh_boo_eyes.rgba16.png"])
    boo_castle_seg6_texture_06016670.push(...data["actors/boo_castle/bbh_boo_mouth.rgba16.png"])

    book_seg5_texture_05002570.push(...data["actors/book/book_cover.rgba16.png"])

    bookend_seg5_texture_05000060.push(...data["actors/bookend/bookend_spine.rgba16.png"])
    bookend_seg5_texture_05000460.push(...data["actors/bookend/bookend_tooth.rgba16.png"])
    bookend_seg5_texture_05000860.push(...data["actors/bookend/bookend_mouth.rgba16.png"])
    bookend_seg5_texture_05000C60.push(...data["actors/bookend/bookend_pages.rgba16.png"])
    bookend_seg5_texture_05001060.push(...data["actors/bookend/bookend_cover.rgba16.png"])

    bowser_seg6_texture_0601F438.push(...data["actors/bowser/bowser_shell.rgba16.png"])
    bowser_seg6_texture_0601FC38.push(...data["actors/bowser/bowser_eyebrow.rgba16.png"])
    bowser_seg6_texture_06020C38.push(...data["actors/bowser/bowser_muzzle.rgba16.png"])
    bowser_seg6_texture_06021438.push(...data["actors/bowser/bowser_nostrils.rgba16.png"])
    bowser_seg6_texture_06022438.push(...data["actors/bowser/bowser_body.rgba16.png"])
    bowser_seg6_texture_06022C38.push(...data["actors/bowser/bowser_armband_spike.rgba16.png"])
    bowser_seg6_texture_06023C38.push(...data["actors/bowser/bowser_armband.rgba16.png"])
    bowser_seg6_texture_06024438.push(...data["actors/bowser/bowser_tongue.rgba16.png"])
    bowser_seg6_texture_06025438.push(...data["actors/bowser/bowser_chest.rgba16.png"])
    bowser_seg6_texture_06025C38.push(...data["actors/bowser/bowser_shell_edge.rgba16.png"])
    bowser_seg6_texture_06026438.push(...data["actors/bowser/bowser_blue_eye_unused.rgba16.png"])
    bowser_seg6_texture_06027438.push(...data["actors/bowser/bowser_mouth_unused.rgba16.png"])
    bowser_seg6_texture_06028438.push(...data["actors/bowser/bowser_upper_face.rgba16.png"])
    bowser_seg6_texture_06028C38.push(...data["actors/bowser/bowser_hair.rgba16.png"])
    bowser_seg6_texture_06029C38.push(...data["actors/bowser/bowser_claw_edge.rgba16.png"])
    bowser_seg6_texture_0602AC38.push(...data["actors/bowser/bowser_claw_horn_tooth.rgba16.png"])
    bowser_seg6_texture_0602BC38.push(...data["actors/bowser/bowser_claw_horn_angle.rgba16.png"])
    bowser_seg6_texture_0602CC38.push(...data["actors/bowser/bowser_eye_left_0.rgba16.png"])
    bowser_seg6_texture_0602DC38.push(...data["actors/bowser/bowser_eye_half_closed_0.rgba16.png"])
    bowser_seg6_texture_0602EC38.push(...data["actors/bowser/bowser_eye_closed_0.rgba16.png"])
    bowser_seg6_texture_0602FC38.push(...data["actors/bowser/bowser_eye_center_0.rgba16.png"])
    bowser_seg6_texture_06030C38.push(...data["actors/bowser/bowser_eye_right_0.rgba16.png"])
    bowser_seg6_texture_06031C38.push(...data["actors/bowser/bowser_eye_far_left_0.rgba16.png"])
    bowser_seg6_texture_06032C38.push(...data["actors/bowser/bowser_eye_left_1.rgba16.png"])
    bowser_seg6_texture_06033C38.push(...data["actors/bowser/bowser_eye_half_closed_1.rgba16.png"])
    bowser_seg6_texture_06034C38.push(...data["actors/bowser/bowser_eye_closed_1.rgba16.png"])
    bowser_seg6_texture_06035C38.push(...data["actors/bowser/bowser_eye_center_1.rgba16.png"])
    bowser_seg6_texture_06036C38.push(...data["actors/bowser/bowser_eye_right_1.rgba16.png"])
    bowser_seg6_texture_06037C38.push(...data["actors/bowser/bowser_eye_far_left_1.rgba16.png"])

    flame_seg6_texture_06000000.push(...data["actors/bowser_flame/bowser_flame_0.rgba16.png"])
    flame_seg6_texture_06002000.push(...data["actors/bowser_flame/bowser_flame_1.rgba16.png"])
    flame_seg6_texture_06004000.push(...data["actors/bowser_flame/bowser_flame_2.rgba16.png"])
    flame_seg6_texture_06006000.push(...data["actors/bowser_flame/bowser_flame_3.rgba16.png"])
    flame_seg6_texture_06008000.push(...data["actors/bowser_flame/bowser_flame_4.rgba16.png"])
    flame_seg6_texture_0600A000.push(...data["actors/bowser_flame/bowser_flame_5.rgba16.png"])
    flame_seg6_texture_0600C000.push(...data["actors/bowser_flame/bowser_flame_6.rgba16.png"])
    flame_seg6_texture_0600E000.push(...data["actors/bowser_flame/bowser_flame_7.rgba16.png"])
    flame_seg6_texture_06010000.push(...data["actors/bowser_flame/bowser_flame_8.rgba16.png"])
    flame_seg6_texture_06012000.push(...data["actors/bowser_flame/bowser_flame_9.rgba16.png"])
    flame_seg6_texture_06014000.push(...data["actors/bowser_flame/bowser_flame_10.rgba16.png"])
    flame_seg6_texture_06016000.push(...data["actors/bowser_flame/bowser_flame_11.rgba16.png"])
    flame_seg6_texture_06018000.push(...data["actors/bowser_flame/bowser_flame_12.rgba16.png"])
    flame_seg6_texture_0601A000.push(...data["actors/bowser_flame/bowser_flame_13.rgba16.png"])

    breakable_box_seg8_texture_08011A90.push(...data["actors/breakable_box/crazy_box_surface.rgba16.png"])
    breakable_box_seg8_texture_08012290.push(...data["actors/breakable_box/cork_box_surface.rgba16.png"])

    bub_seg6_texture_0600E2A8.push(...data["actors/bub/bub_eye_border.rgba16.png"])
    bub_seg6_texture_0600EAA8.push(...data["actors/bub/bub_fins.rgba16.png"])
    bub_seg6_texture_0600F2A8.push(...data["actors/bub/bub_eyes.rgba16.png"])
    bub_seg6_texture_060102A8.push(...data["actors/bub/bub_scales.rgba16.png"])

    bubba_seg5_texture_05000008.push(...data["actors/bubba/bubba_sunglasses.rgba16.png"])
    bubba_seg5_texture_05000408.push(...data["actors/bubba/bubba_eyes_unused.rgba16.png"])
    bubba_seg5_texture_05001408.push(...data["actors/bubba/bubba_eye_border.rgba16.png"])
    bubba_seg5_texture_05001C08.push(...data["actors/bubba/bubba_fins.rgba16.png"])
    bubba_seg5_texture_05002408.push(...data["actors/bubba/bubba_scales.rgba16.png"])

    bubble_seg4_texture_0401CD60.push(...data["actors/bubble/bubble.rgba16.png"])
    bubble_seg4_texture_0401D560.push(...data["actors/bubble/mr_i_bubble.rgba16.png"])

    bullet_bill_seg5_texture_0500BAA8.push(...data["actors/bullet_bill/bullet_bill_eye.rgba16.png"])
    bullet_bill_seg5_texture_0500CAA8.push(...data["actors/bullet_bill/bullet_bill_mouth.rgba16.png"])

    bully_seg5_texture_050000E0.push(...data["actors/bully/bully_horn.rgba16.png"])
    bully_seg5_texture_05000468.push(...data["actors/bully/bully_left_side.rgba16.png"])
    bully_seg5_texture_05001468.push(...data["actors/bully/bully_right_side.rgba16.png"])
    bully_seg5_texture_05002468.push(...data["actors/bully/bully_eye.rgba16.png"])

    burn_smoke_seg4_texture_04021800.push(...data["actors/burn_smoke/burn_smoke.ia16.png"])

    butterfly_seg3_texture_030043A8.push(...data["actors/butterfly/butterfly_wing.rgba16.png"])

    cannon_barrel_seg8_texture_080058A8.push(...data["actors/cannon_barrel/cannon_barrel.rgba16.png"])

    cannon_base_seg8_texture_080049B8.push(...data["actors/cannon_base/cannon_base.rgba16.png"])

    cannon_lid_seg8_texture_08004058.push(...data["actors/cannon_lid/cannon_lid.rgba16.png"])

    capswitch_seg5_texture_05001C48.push(...data["actors/capswitch/cap_switch_head.ia16.png"])
    capswitch_seg5_texture_05002C48.push(...data["actors/capswitch/cap_switch_base.rgba16.png"])

    chain_ball_seg6_texture_06020AE8.push(...data["actors/chain_ball/chain_ball.rgba16.png"])

    chain_chomp_seg6_texture_060213D0.push(...data["actors/chain_chomp/chain_chomp_bright_shine.rgba16.png"])
    chain_chomp_seg6_texture_06021BD0.push(...data["actors/chain_chomp/chain_chomp_dull_shine.rgba16.png"])
    chain_chomp_seg6_texture_060223D0.push(...data["actors/chain_chomp/chain_chomp_tongue.rgba16.png"])
    chain_chomp_seg6_texture_06022BD0.push(...data["actors/chain_chomp/chain_chomp_tooth.rgba16.png"])
    chain_chomp_seg6_texture_060233D0.push(...data["actors/chain_chomp/chain_chomp_eye.rgba16.png"])

    chair_seg5_texture_05003060.push(...data["actors/chair/chair_front.rgba16.png"])
    chair_seg5_texture_05003860.push(...data["actors/chair/chair_leg.rgba16.png"])
    chair_seg5_texture_05004060.push(...data["actors/chair/chair_bottom.rgba16.png"])
    chair_seg5_texture_05004460.push(...data["actors/chair/chair_surface_unused.rgba16.png"])

    checkerboard_platform_seg8_texture_0800C840.push(...data["actors/checkerboard_platform/checkerboard_platform_side.rgba16.png"])
    checkerboard_platform_seg8_texture_0800CC40.push(...data["actors/checkerboard_platform/checkerboard_platform.rgba16.png"])

    chilly_chief_seg6_texture_06000060.push(...data["actors/chillychief/chill_bully_left_side.rgba16.png"])
    chilly_chief_seg6_texture_06001060.push(...data["actors/chillychief/chill_bully_right_side.rgba16.png"])
    chilly_chief_seg6_texture_06002060.push(...data["actors/chillychief/chill_bully_eye.rgba16.png"])

    chuckya_seg8_texture_08006778.push(...data["actors/chuckya/chuckya_eyes.rgba16.png"])
    chuckya_seg8_texture_08007778.push(...data["actors/chuckya/chuckya_hand_antenna.rgba16.png"])
    chuckya_seg8_texture_08007F78.push(...data["actors/chuckya/chuckya_body_arm_left_side.rgba16.png"])
    chuckya_seg8_texture_08008F78.push(...data["actors/chuckya/chuckya_body_arm_right_side.rgba16.png"])

    clam_shell_seg5_texture_05000030.push(...data["actors/clam_shell/clam_shell.rgba16.png"])
    clam_shell_seg5_texture_05000830.push(...data["actors/clam_shell/clam_shell_mouth.rgba16.png"])

    coin_seg3_texture_03005780.push(...data["actors/coin/coin_front.ia16.png"])
    coin_seg3_texture_03005F80.push(...data["actors/coin/coin_tilt_right.ia16.png"])
    coin_seg3_texture_03006780.push(...data["actors/coin/coin_side.ia16.png"])
    coin_seg3_texture_03006F80.push(...data["actors/coin/coin_tilt_left.ia16.png"])

    cyan_fish_seg6_texture_0600D468.push(...data["actors/cyan_fish/cyan_fish.rgba16.png"])

    dirt_seg3_texture_0302BDF8.push(...data["actors/dirt/dirt_particle.rgba16.png"])

    door_seg3_texture_03009D10.push(...data["actors/door/polished_wooden_door.rgba16.png"])
    door_seg3_texture_0300AD10.push(...data["actors/door/polished_wooden_door_overlay.rgba16.png"])
    door_seg3_texture_0300BD10.push(...data["actors/door/rough_wooden_door.rgba16.png"])
    door_seg3_texture_0300CD10.push(...data["actors/door/rough_wooden_door_overlay.rgba16.png"])
    door_seg3_texture_0300D510.push(...data["actors/door/metal_door.rgba16.png"])
    door_seg3_texture_0300E510.push(...data["actors/door/metal_door_overlay.rgba16.png"])
    door_seg3_texture_0300ED10.push(...data["actors/door/hmc_mural_door.rgba16.png"])
    door_seg3_texture_0300FD10.push(...data["actors/door/hmc_mural_door_overlay.rgba16.png"])
    door_seg3_texture_03010510.push(...data["actors/door/bbh_door.rgba16.png"])
    door_seg3_texture_03011510.push(...data["actors/door/bbh_door_overlay.rgba16.png"])
    door_seg3_texture_03011D10.push(...data["actors/door/zero_star_door_sign.rgba16.png"])
    door_seg3_texture_03012510.push(...data["actors/door/one_star_door_sign.rgba16.png"])
    door_seg3_texture_03012D10.push(...data["actors/door/three_star_door_sign.rgba16.png"])
    door_seg3_texture_03013510.push(...data["actors/door/door_lock.rgba16.png"])

    dorrie_seg6_texture_06009BA0.push(...data["actors/dorrie/dorrie_eye.rgba16.png"])
    dorrie_seg6_texture_06009DA0.push(...data["actors/dorrie/dorrie_skin.rgba16.png"])
    dorrie_seg6_texture_0600ADA0.push(...data["actors/dorrie/dorrie_tongue.rgba16.png"])

    exclamation_box_seg8_texture_08012E28.push(...data["actors/exclamation_box/vanish_cap_box_front.rgba16.png"])
    exclamation_box_seg8_texture_08013628.push(...data["actors/exclamation_box/vanish_cap_box_side.rgba16.png"])
    exclamation_box_seg8_texture_08014628.push(...data["actors/exclamation_box/metal_cap_box_front.rgba16.png"])
    exclamation_box_seg8_texture_08014E28.push(...data["actors/exclamation_box/metal_cap_box_side.rgba16.png"])
    exclamation_box_seg8_texture_08015E28.push(...data["actors/exclamation_box/wing_cap_box_front.rgba16.png"])
    exclamation_box_seg8_texture_08016628.push(...data["actors/exclamation_box/wing_cap_box_side.rgba16.png"])
    exclamation_box_seg8_texture_08017628.push(...data["actors/exclamation_box/exclamation_box_front.rgba16.png"])
    exclamation_box_seg8_texture_08017E28.push(...data["actors/exclamation_box/exclamation_box_side.rgba16.png"])

    exclamation_box_outline_seg8_texture_08025168.push(...data["actors/exclamation_box_outline/exclamation_box_outline.rgba16.png"])
    exclamation_box_outline_seg8_texture_08025A80.push(...data["actors/exclamation_box_outline/exclamation_point.rgba16.png"])

    explosion_seg3_texture_03000A08.push(...data["actors/explosion/explosion_0.rgba16.png"])
    explosion_seg3_texture_03001208.push(...data["actors/explosion/explosion_1.rgba16.png"])
    explosion_seg3_texture_03001A08.push(...data["actors/explosion/explosion_2.rgba16.png"])
    explosion_seg3_texture_03002208.push(...data["actors/explosion/explosion_3.rgba16.png"])
    explosion_seg3_texture_03002A08.push(...data["actors/explosion/explosion_4.rgba16.png"])
    explosion_seg3_texture_03003208.push(...data["actors/explosion/explosion_5.rgba16.png"])
    explosion_seg3_texture_03003A08.push(...data["actors/explosion/explosion_6.rgba16.png"])

    eyerok_seg5_texture_05008D40.push(...data["actors/eyerok/eyerok_bricks.rgba16.png"])
    eyerok_seg5_texture_05009540.push(...data["actors/eyerok/eyerok_eye_open.rgba16.png"])
    eyerok_seg5_texture_05009D40.push(...data["actors/eyerok/eyerok_eye_mostly_open.rgba16.png"])
    eyerok_seg5_texture_0500A540.push(...data["actors/eyerok/eyerok_eye_mostly_closed.rgba16.png"])
    eyerok_seg5_texture_0500AD40.push(...data["actors/eyerok/eyerok_eye_closed.rgba16.png"])

    flame_seg3_texture_03017320.push(...data["actors/flame/flame_0.ia16.png"])
    flame_seg3_texture_03017B20.push(...data["actors/flame/flame_1.ia16.png"])
    flame_seg3_texture_03018320.push(...data["actors/flame/flame_2.ia16.png"])
    flame_seg3_texture_03018B20.push(...data["actors/flame/flame_3.ia16.png"])
    flame_seg3_texture_03019320.push(...data["actors/flame/flame_4.ia16.png"])
    flame_seg3_texture_03019B20.push(...data["actors/flame/flame_5.ia16.png"])
    flame_seg3_texture_0301A320.push(...data["actors/flame/flame_6.ia16.png"])
    flame_seg3_texture_0301AB20.push(...data["actors/flame/flame_7.ia16.png"])

    flyguy_seg8_texture_0800E088.push(...data["actors/flyguy/flyguy_cloth_wrinkle.rgba16.png"])
    flyguy_seg8_texture_0800F088.push(...data["actors/flyguy/flyguy_face.rgba16.png"])
    flyguy_seg8_texture_0800F888.push(...data["actors/flyguy/flyguy_propeller.ia16.png"])

    fwoosh_seg5_texture_05015808.push(...data["actors/fwoosh/fwoosh_face.ia16.png"])

    goomba_seg8_texture_08019530.push(...data["actors/goomba/goomba_body.rgba16.png"])
    goomba_seg8_texture_08019D30.push(...data["actors/goomba/goomba_face.rgba16.png"])
    goomba_seg8_texture_0801A530.push(...data["actors/goomba/goomba_face_blink.rgba16.png"])

    haunted_cage_seg5_texture_0500C288.push(...data["actors/haunted_cage/bbh_cage_floor.rgba16.png"])
    haunted_cage_seg5_texture_0500CA88.push(...data["actors/haunted_cage/bbh_cage_double_ornament.rgba16.png"])
    haunted_cage_seg5_texture_0500D288.push(...data["actors/haunted_cage/bbh_cage_ornament.rgba16.png"])
    haunted_cage_seg5_texture_0500D688.push(...data["actors/haunted_cage/bbh_cage_wooden_base.rgba16.png"])
    haunted_cage_seg5_texture_0500DA88.push(...data["actors/haunted_cage/bbh_cage_bars.rgba16.png"])
    haunted_cage_seg5_texture_0500E288.push(...data["actors/haunted_cage/bbh_cage_garbage.rgba16.png"])

    heart_seg8_texture_0800D7E0.push(...data["actors/heart/spinning_heart.rgba16.png"])

    heave_ho_seg5_texture_0500E9C8.push(...data["actors/heave_ho/heave-ho_face.rgba16.png"])
    heave_ho_seg5_texture_0500F1C8.push(...data["actors/heave_ho/heave-ho_platform.rgba16.png"])
    heave_ho_seg5_texture_0500F9C8.push(...data["actors/heave_ho/heave-ho_logo.rgba16.png"])
    heave_ho_seg5_texture_050109C8.push(...data["actors/heave_ho/heave-ho_arm_ornament.rgba16.png"])
    heave_ho_seg5_texture_050111C8.push(...data["actors/heave_ho/heave-ho_roller.rgba16.png"])
    heave_ho_seg5_texture_050113C8.push(...data["actors/heave_ho/heave-ho_turnkey.rgba16.png"])

    hoot_seg5_texture_05000A20.push(...data["actors/hoot/hoot_eyes.rgba16.png"])
    hoot_seg5_texture_05001E50.push(...data["actors/hoot/hoot_wing.rgba16.png"])
    hoot_seg5_texture_05002650.push(...data["actors/hoot/hoot_wing_tip.rgba16.png"])

    impact_ring_seg6_texture_0601CA50.push(...data["actors/impact_ring/impact_ring_left_side.ia16.png"])
    impact_ring_seg6_texture_0601DA50.push(...data["actors/impact_ring/impact_ring_right_side.ia16.png"])

    king_bobomb_seg5_texture_05000078.push(...data["actors/king_bobomb/bob-omb_buddy_left_side_unused.rgba16.png"])
    king_bobomb_seg5_texture_05001078.push(...data["actors/king_bobomb/bob-omb_buddy_right_side_unused.rgba16.png"])
    king_bobomb_seg5_texture_05002078.push(...data["actors/king_bobomb/king_bob-omb_arm.rgba16.png"])
    king_bobomb_seg5_texture_05002878.push(...data["actors/king_bobomb/king_bob-omb_body_unused.rgba16.png"])
    king_bobomb_seg5_texture_05004878.push(...data["actors/king_bobomb/king_bob-omb_eyes.rgba16.png"])
    king_bobomb_seg5_texture_05005878.push(...data["actors/king_bobomb/king_bob-omb_hand.rgba16.png"])
    king_bobomb_seg5_texture_05006078.push(...data["actors/king_bobomb/king_bob-omb_crown_rim.rgba16.png"])
    king_bobomb_seg5_texture_05006478.push(...data["actors/king_bobomb/bob-omb_buddy_body_unused.rgba16.png"])
    king_bobomb_seg5_texture_05008478.push(...data["actors/king_bobomb/king_bob-omb_left_side.rgba16.png"])
    king_bobomb_seg5_texture_05009478.push(...data["actors/king_bobomb/king_bob-omb_right_side.rgba16.png"])

    klepto_seg5_texture_05000008.push(...data["actors/klepto/klepto_chest_tuft.rgba16.png"])
    klepto_seg5_texture_05000808.push(...data["actors/klepto/klepto_eye.rgba16.png"])
    klepto_seg5_texture_05001008.push(...data["actors/klepto/klepto_beak.rgba16.png"])
    klepto_seg5_texture_05002008.push(...data["actors/klepto/klepto_wing.rgba16.png"])
    klepto_seg5_texture_05003008.push(...data["actors/klepto/klepto_wing_flap.rgba16.png"])

    koopa_seg6_texture_06002648.push(...data["actors/koopa/koopa_shell_front.rgba16.png"])
    koopa_seg6_texture_06002E48.push(...data["actors/koopa/koopa_shell_back.rgba16.png"])
    koopa_seg6_texture_06003648.push(...data["actors/koopa/koopa_shoe.rgba16.png"])
    koopa_seg6_texture_06003E48.push(...data["actors/koopa/koopa_shell_front_top.rgba16.png"])
    koopa_seg6_texture_06004648.push(...data["actors/koopa/koopa_eyes_open.rgba16.png"])
    koopa_seg6_texture_06004E48.push(...data["actors/koopa/koopa_eyes_closed.rgba16.png"])
    koopa_seg6_texture_06005648.push(...data["actors/koopa/koopa_eye_border.rgba16.png"])
    koopa_seg6_texture_06005E48.push(...data["actors/koopa/koopa_nostrils.rgba16.png"])

    koopa_flag_seg6_texture_06000048.push(...data["actors/koopa_flag/koopa_flag_banner.rgba16.png"])

    koopa_shell_seg8_texture_080274A0.push(...data["actors/koopa_shell/koopa_shell_front.rgba16.png"])
    koopa_shell_seg8_texture_08027CA0.push(...data["actors/koopa_shell/koopa_shell_back.rgba16.png"])

    lakitu_seg6_texture_06000000.push(...data["actors/lakitu_cameraman/lakitu_cameraman_cloud_face_unused.rgba16.png"])
    lakitu_seg6_texture_06000800.push(...data["actors/lakitu_cameraman/lakitu_cameraman_eyes_open.rgba16.png"])
    lakitu_seg6_texture_06001800.push(...data["actors/lakitu_cameraman/lakitu_cameraman_eyes_closed.rgba16.png"])
    lakitu_seg6_texture_06002800.push(...data["actors/lakitu_cameraman/lakitu_cameraman_shell.rgba16.png"])
    lakitu_seg6_texture_06003000.push(...data["actors/lakitu_cameraman/lakitu_cameraman_frown.rgba16.png"])
    lakitu_seg6_texture_06003800.push(...data["actors/lakitu_cameraman/lakitu_camera_lens.rgba16.png"])

    lakitu_enemy_seg5_texture_0500ECE0.push(...data["actors/lakitu_enemy/lakitu_enemy_cloud_face_unused.rgba16.png"])
    lakitu_enemy_seg5_texture_0500F4E0.push(...data["actors/lakitu_enemy/lakitu_enemy_eyes_open.rgba16.png"])
    lakitu_enemy_seg5_texture_050104E0.push(...data["actors/lakitu_enemy/lakitu_enemy_eyes_closed.rgba16.png"])
    lakitu_enemy_seg5_texture_050114E0.push(...data["actors/lakitu_enemy/lakitu_enemy_shell.rgba16.png"])
    lakitu_enemy_seg5_texture_05011CE0.push(...data["actors/lakitu_enemy/lakitu_enemy_frown.rgba16.png"])

    leaves_seg3_texture_0301CBE0.push(...data["actors/leaves/leaf.rgba16.png"])

    mad_piano_seg5_texture_05006AF0.push(...data["actors/mad_piano/mad_piano_tooth.rgba16.png"])
    mad_piano_seg5_texture_050072F0.push(...data["actors/mad_piano/mad_piano_body.rgba16.png"])
    mad_piano_seg5_texture_050076F0.push(...data["actors/mad_piano/mad_piano_keys_corner.rgba16.png"])
    mad_piano_seg5_texture_05007AF0.push(...data["actors/mad_piano/mad_piano_mouth.rgba16.png"])
    mad_piano_seg5_texture_05007EF0.push(...data["actors/mad_piano/mad_piano_keys.rgba16.png"])
    mad_piano_seg5_texture_050082F0.push(...data["actors/mad_piano/mad_piano_keys_edge.rgba16.png"])

    manta_seg5_texture_050017A0.push(...data["actors/manta/manta_fin_corner.rgba16.png"])
    manta_seg5_texture_05001FA0.push(...data["actors/manta/manta_gills.rgba16.png"])
    manta_seg5_texture_05002FA0.push(...data["actors/manta/manta_eye.rgba16.png"])
    manta_seg5_texture_050037A0.push(...data["actors/manta/manta_fin_edge.rgba16.png"])

    mario_texture_metal.push(...data["actors/mario/mario_metal.rgba16.png"])
    mario_texture_yellow_button.push(...data["actors/mario/mario_overalls_button.rgba16.png"])
    mario_texture_m_logo.push(...data["actors/mario/mario_logo.rgba16.png"])
    mario_texture_hair_sideburn.push(...data["actors/mario/mario_sideburn.rgba16.png"])
    mario_texture_mustache.push(...data["actors/mario/mario_mustache.rgba16.png"])
    mario_texture_eyes_front.push(...data["actors/mario/mario_eyes_center.rgba16.png"])
    mario_texture_eyes_half_closed.push(...data["actors/mario/mario_eyes_half_closed.rgba16.png"])
    mario_texture_eyes_closed.push(...data["actors/mario/mario_eyes_closed.rgba16.png"])
    mario_texture_eyes_closed_unused1.push(...data["actors/mario/mario_eyes_closed_unused_0.rgba16.png"])
    mario_texture_eyes_closed_unused2.push(...data["actors/mario/mario_eyes_closed_unused_1.rgba16.png"])
    mario_texture_eyes_right.push(...data["actors/mario/mario_eyes_left_unused.rgba16.png"])
    mario_texture_eyes_left.push(...data["actors/mario/mario_eyes_right_unused.rgba16.png"])
    mario_texture_eyes_up.push(...data["actors/mario/mario_eyes_up_unused.rgba16.png"])
    mario_texture_eyes_down.push(...data["actors/mario/mario_eyes_down_unused.rgba16.png"])
    mario_texture_eyes_dead.push(...data["actors/mario/mario_eyes_dead.rgba16.png"])
    mario_texture_wings_half_1.push(...data["actors/mario/mario_wing.rgba16.png"])
    mario_texture_wings_half_2.push(...data["actors/mario/mario_wing_tip.rgba16.png"])
    mario_texture_metal_wings_half_1.push(...data["actors/mario/mario_metal_wing_unused.rgba16.png"])
    mario_texture_metal_wings_half_2.push(...data["actors/mario/mario_metal_wing_tip_unused.rgba16.png"])

    mario_cap_seg3_texture_0301CF50.push(...data["actors/mario_cap/mario_cap_metal.rgba16.png"])
    mario_cap_seg3_texture_0301DF50.push(...data["actors/mario_cap/mario_cap_logo.rgba16.png"])
    mario_cap_seg3_texture_0301E750.push(...data["actors/mario_cap/mario_cap_wing.rgba16.png"])
    mario_cap_seg3_texture_0301F750.push(...data["actors/mario_cap/mario_cap_wing_tip.rgba16.png"])
    mario_cap_seg3_texture_03020750.push(...data["actors/mario_cap/mario_cap_metal_wing_unused.rgba16.png"])
    mario_cap_seg3_texture_03021750.push(...data["actors/mario_cap/mario_cap_metal_wing_tip_unused.rgba16.png"])

    metal_box_seg8_texture_08023998.push(...data["actors/metal_box/metal_box_side.rgba16.png"])

    mips_seg6_texture_0600FB80.push(...data["actors/mips/mips_eyes.rgba16.png"])

    mist_seg3_texture_03000080.push(...data["actors/mist/mist.ia16.png"])

    moneybag_seg6_texture_060039B0.push(...data["actors/moneybag/moneybag_mouth.rgba16.png"])
    moneybag_seg6_texture_060049B0.push(...data["actors/moneybag/moneybag_eyes.rgba16.png"])

    monty_mole_seg5_texture_05000970.push(...data["actors/monty_mole/monty_mole_cheek.rgba16.png"])
    monty_mole_seg5_texture_05001170.push(...data["actors/monty_mole/monty_mole_eye.rgba16.png"])
    monty_mole_seg5_texture_05001970.push(...data["actors/monty_mole/monty_mole_nose.rgba16.png"])
    monty_mole_seg5_texture_05002170.push(...data["actors/monty_mole/monty_mole_tooth.rgba16.png"])
    monty_mole_seg5_texture_05002970.push(...data["actors/monty_mole/monty_mole_claw.rgba16.png"])

    monty_mole_hole_seg5_texture_05000040.push(...data["actors/monty_mole_hole/monty_mole_hole.ia16.png"])

    mr_i_eyeball_seg6_texture_06000080.push(...data["actors/mr_i_eyeball/mr_i_eyeball_left_side.rgba16.png"])
    mr_i_eyeball_seg6_texture_06001080.push(...data["actors/mr_i_eyeball/mr_i_eyeball_right_side.rgba16.png"])

    mr_i_iris_seg6_texture_06002170.push(...data["actors/mr_i_iris/mr_i_iris_open.rgba16.png"])
    mr_i_iris_seg6_texture_06002970.push(...data["actors/mr_i_iris/mr_i_iris_mostly_open.rgba16.png"])
    mr_i_iris_seg6_texture_06003170.push(...data["actors/mr_i_iris/mr_i_iris_mostly_closed.rgba16.png"])
    mr_i_iris_seg6_texture_06003970.push(...data["actors/mr_i_iris/mr_i_iris_closed.rgba16.png"])

    mushroom_1up_seg3_texture_03029628.push(...data["actors/mushroom_1up/1-up_mushroom.rgba16.png"])

    peach_seg5_texture_05000A28.push(...data["actors/peach/peach_eye_open.rgba16.png"])
    peach_seg5_texture_05001228.push(...data["actors/peach/peach_eye_mostly_open.rgba16.png"])
    peach_seg5_texture_05001A28.push(...data["actors/peach/peach_eye_mostly_closed.rgba16.png"])
    peach_seg5_texture_05002228.push(...data["actors/peach/peach_eye_closed.rgba16.png"])
    peach_seg5_texture_05002A28.push(...data["actors/peach/peach_crown_jewel.rgba16.png"])
    peach_seg5_texture_05002C28.push(...data["actors/peach/peach_chest_jewel.rgba16.png"])
    peach_seg5_texture_05002E28.push(...data["actors/peach/peach_lips_scrunched.rgba16.png"])
    peach_seg5_texture_05003628.push(...data["actors/peach/peach_lips.rgba16.png"])
    peach_seg5_texture_05003E28.push(...data["actors/peach/peach_nostril.rgba16.png"])
    peach_seg5_texture_05004028.push(...data["actors/peach/peach_dress.rgba16.png"])

    pebble_seg3_texture_0301C300.push(...data["actors/pebble/pebble.rgba16.png"])

    penguin_seg5_texture_05002DE0.push(...data["actors/penguin/penguin_eye_open.rgba16.png"])
    penguin_seg5_texture_050035E0.push(...data["actors/penguin/penguin_eye_half_closed.rgba16.png"])
    penguin_seg5_texture_05003DE0.push(...data["actors/penguin/penguin_eye_closed.rgba16.png"])
    penguin_seg5_texture_050045E0.push(...data["actors/penguin/penguin_eye_angry.rgba16.png"])
    penguin_seg5_texture_05004DE0.push(...data["actors/penguin/penguin_eye_angry_unused.rgba16.png"])
    penguin_seg5_texture_050055E0.push(...data["actors/penguin/penguin_beak.rgba16.png"])

    piranha_plant_seg6_texture_060113F8.push(...data["actors/piranha_plant/piranha_plant_tongue.rgba16.png"])
    piranha_plant_seg6_texture_060123F8.push(...data["actors/piranha_plant/piranha_plant_skin.rgba16.png"])
    piranha_plant_seg6_texture_06012BF8.push(...data["actors/piranha_plant/piranha_plant_stem.rgba16.png"])
    piranha_plant_seg6_texture_060133F8.push(...data["actors/piranha_plant/piranha_plant_bottom_lip.rgba16.png"])
    piranha_plant_seg6_texture_06013BF8.push(...data["actors/piranha_plant/piranha_plant_tooth.rgba16.png"])
    piranha_plant_seg6_texture_060143F8.push(...data["actors/piranha_plant/piranha_plant_leaf.rgba16.png"])

    pokey_seg5_texture_05011750.push(...data["actors/pokey/pokey_face.rgba16.png"])
    pokey_seg5_texture_05011F50.push(...data["actors/pokey/pokey_face_blink.rgba16.png"])
    pokey_seg5_texture_05012878.push(...data["actors/pokey/pokey_body.rgba16.png"])

    poundable_pole_seg6_texture_06001050.push(...data["actors/poundable_pole/poundable_pole_top.rgba16.png"])
    poundable_pole_seg6_texture_06001850.push(...data["actors/poundable_pole/poundable_pole_side.rgba16.png"])

    texture_power_meter_left_side.push(...data["actors/power_meter/power_meter_left_side.rgba16.png"])
    texture_power_meter_right_side.push(...data["actors/power_meter/power_meter_right_side.rgba16.png"])
    texture_power_meter_full.push(...data["actors/power_meter/power_meter_full.rgba16.png"])
    texture_power_meter_seven_segments.push(...data["actors/power_meter/power_meter_seven_segments.rgba16.png"])
    texture_power_meter_six_segments.push(...data["actors/power_meter/power_meter_six_segments.rgba16.png"])
    texture_power_meter_five_segments.push(...data["actors/power_meter/power_meter_five_segments.rgba16.png"])
    texture_power_meter_four_segments.push(...data["actors/power_meter/power_meter_four_segments.rgba16.png"])
    texture_power_meter_three_segments.push(...data["actors/power_meter/power_meter_three_segments.rgba16.png"])
    texture_power_meter_two_segments.push(...data["actors/power_meter/power_meter_two_segments.rgba16.png"])
    texture_power_meter_one_segments.push(...data["actors/power_meter/power_meter_one_segment.rgba16.png"])

    purple_switch_seg8_texture_0800C0A8.push(...data["actors/purple_switch/purple_switch_base.rgba16.png"])
    purple_switch_seg8_texture_0800C128.push(...data["actors/purple_switch/purple_switch_exclamation_point.rgba16.png"])

    sand_seg3_texture_0302BAD0.push(...data["actors/sand/sand_particle.rgba16.png"])

    scuttlebug_seg6_texture_06010108.push(...data["actors/scuttlebug/scuttlebug_eye.rgba16.png"])
    scuttlebug_seg6_texture_06010908.push(...data["actors/scuttlebug/scuttlebug_left_side.rgba16.png"])
    scuttlebug_seg6_texture_06011908.push(...data["actors/scuttlebug/scuttlebug_right_side.rgba16.png"])
    scuttlebug_seg6_texture_06012908.push(...data["actors/scuttlebug/scuttlebug_iris.rgba16.png"])
    scuttlebug_seg6_texture_06013108.push(...data["actors/scuttlebug/scuttlebug_leg.rgba16.png"])

    seaweed_seg6_texture_06007E10.push(...data["actors/seaweed/seaweed_tip.rgba16.png"])
    seaweed_seg6_texture_06008610.push(...data["actors/seaweed/seaweed_upper_center.rgba16.png"])
    seaweed_seg6_texture_06008E10.push(...data["actors/seaweed/seaweed_lower_center.rgba16.png"])
    seaweed_seg6_texture_06009610.push(...data["actors/seaweed/seaweed_base.rgba16.png"])

    skeeter_seg6_texture_06000090.push(...data["actors/skeeter/skeeter_eye.rgba16.png"])
    skeeter_seg6_texture_06000890.push(...data["actors/skeeter/skeeter_iris.rgba16.png"])

    smoke_seg5_texture_050072C0.push(...data["actors/smoke/smoke.ia16.png"])

    snowman_seg5_texture_05008C70.push(...data["actors/snowman/mr_blizzard_mitten.rgba16.png"])
    snowman_seg5_texture_05009470.push(...data["actors/snowman/mr_blizzard_left_side.rgba16.png"])
    snowman_seg5_texture_0500A470.push(...data["actors/snowman/mr_blizzard_right_side.rgba16.png"])
    snowman_seg5_texture_0500B470.push(...data["actors/snowman/mr_blizzard_eye.rgba16.png"])
    snowman_seg5_texture_0500BC70.push(...data["actors/snowman/mr_blizzard_mouth.rgba16.png"])

    snufit_seg6_texture_060070E0.push(...data["actors/snufit/snufit_body.rgba16.png"])
    snufit_seg6_texture_060078E0.push(...data["actors/snufit/snufit_eye.rgba16.png"])
    snufit_seg6_texture_060080E0.push(...data["actors/snufit/snufit_mask_strap.rgba16.png"])
    snufit_seg6_texture_060084E0.push(...data["actors/snufit/snufit_mouth.rgba16.png"])

    sparkles_seg4_texture_04027490.push(...data["actors/sparkle/sparkle_0.rgba16.png"])
    sparkles_seg4_texture_04027C90.push(...data["actors/sparkle/sparkle_1.rgba16.png"])
    sparkles_seg4_texture_04028490.push(...data["actors/sparkle/sparkle_2.rgba16.png"])
    sparkles_seg4_texture_04028C90.push(...data["actors/sparkle/sparkle_3.rgba16.png"])
    sparkles_seg4_texture_04029490.push(...data["actors/sparkle/sparkle_4.rgba16.png"])
    sparkles_seg4_texture_04029C90.push(...data["actors/sparkle/sparkle_5.rgba16.png"])

    sparkles_animation_seg4_texture_04032A88.push(...data["actors/sparkle_animation/sparkle_animation_0.ia16.png"])
    sparkles_animation_seg4_texture_04033288.push(...data["actors/sparkle_animation/sparkle_animation_1.ia16.png"])
    sparkles_animation_seg4_texture_04033A88.push(...data["actors/sparkle_animation/sparkle_animation_2.ia16.png"])
    sparkles_animation_seg4_texture_04034288.push(...data["actors/sparkle_animation/sparkle_animation_3.ia16.png"])
    sparkles_animation_seg4_texture_04034A88.push(...data["actors/sparkle_animation/sparkle_animation_4.ia16.png"])

    spindrift_seg5_texture_050006D0.push(...data["actors/spindrift/spindrift_face.rgba16.png"])
    spindrift_seg5_texture_05000ED0.push(...data["actors/spindrift/spindrift_petal.rgba16.png"])
    spindrift_seg5_texture_050016D0.push(...data["actors/spindrift/spindrift_leaf.rgba16.png"])
    spindrift_seg5_texture_05001ED0.push(...data["actors/spindrift/spindrift_head.rgba16.png"])

    springboard_seg5_texture_05000018.push(...data["actors/springboard/springboard_top_unused.rgba16.png"])
    springboard_seg5_texture_05000818.push(...data["actors/springboard/springboard_base_unused.rgba16.png"])

    star_seg3_texture_0302A6F0.push(...data["actors/star/star_surface.rgba16.png"])
    star_seg3_texture_0302AEF0.push(...data["actors/star/star_eye.rgba16.png"])

    stomp_smoke_seg4_texture_04022148.push(...data["actors/stomp_smoke/stomp_smoke_0.ia16.png"])
    stomp_smoke_seg4_texture_04022948.push(...data["actors/stomp_smoke/stomp_smoke_1.ia16.png"])
    stomp_smoke_seg4_texture_04023148.push(...data["actors/stomp_smoke/stomp_smoke_2.ia16.png"])
    stomp_smoke_seg4_texture_04023948.push(...data["actors/stomp_smoke/stomp_smoke_3.ia16.png"])
    stomp_smoke_seg4_texture_04024148.push(...data["actors/stomp_smoke/stomp_smoke_4.ia16.png"])
    stomp_smoke_seg4_texture_04024948.push(...data["actors/stomp_smoke/stomp_smoke_5.ia16.png"])

    sushi_seg5_texture_05008ED0.push(...data["actors/sushi/sushi_snout.rgba16.png"])
    sushi_seg5_texture_050096D0.push(...data["actors/sushi/sushi_eye.rgba16.png"])
    sushi_seg5_texture_05009AD0.push(...data["actors/sushi/sushi_tooth.rgba16.png"])

    swoop_seg6_texture_06004270.push(...data["actors/swoop/swoop_body.rgba16.png"])
    swoop_seg6_texture_06004A70.push(...data["actors/swoop/swoop_eye.rgba16.png"])
    swoop_seg6_texture_06005270.push(...data["actors/swoop/swoop_nose.rgba16.png"])
    swoop_seg6_texture_06005A70.push(...data["actors/swoop/swoop_wing.rgba16.png"])

    thwomp_seg5_texture_05009900.push(...data["actors/thwomp/thwomp_face.rgba16.png"])
    thwomp_seg5_texture_0500A900.push(...data["actors/thwomp/thwomp_surface.rgba16.png"])

    toad_seg6_texture_06005920.push(...data["actors/toad/toad_face.rgba16.png"])
    toad_seg6_texture_06006120.push(...data["actors/toad/toad_head.rgba16.png"])

    tornado_seg5_texture_05013128.push(...data["actors/tornado/tornado.ia16.png"])

    treasure_chest_seg6_texture_06013FA8.push(...data["actors/treasure_chest/treasure_chest_lock.rgba16.png"])
    treasure_chest_seg6_texture_060147A8.push(...data["actors/treasure_chest/treasure_chest_side.rgba16.png"])
    treasure_chest_seg6_texture_06014FA8.push(...data["actors/treasure_chest/treasure_chest_lock_top.rgba16.png"])
    treasure_chest_seg6_texture_060157A8.push(...data["actors/treasure_chest/treasure_chest_front.rgba16.png"])

    tree_seg3_texture_0302DE28.push(...data["actors/tree/tree_left_side.rgba16.png"])
    tree_seg3_texture_0302EE28.push(...data["actors/tree/tree_right_side.rgba16.png"])
    tree_seg3_texture_0302FF60.push(...data["actors/tree/pine_tree.rgba16.png"])
    tree_seg3_texture_03031048.push(...data["actors/tree/snowy_pine_tree.rgba16.png"])
    tree_seg3_texture_03032218.push(...data["actors/tree/palm_tree.rgba16.png"])

    ukiki_seg5_texture_05007BC0.push(...data["actors/ukiki/ukiki_face.rgba16.png"])
    ukiki_seg5_texture_05008BC0.push(...data["actors/ukiki/ukiki_face_blink.rgba16.png"])
    ukiki_seg5_texture_05009BC0.push(...data["actors/ukiki/ukiki_butt.rgba16.png"])
    ukiki_seg5_texture_0500A3C0.push(...data["actors/ukiki/ukiki_fur.rgba16.png"])

    unagi_seg5_texture_0500AF20.push(...data["actors/unagi/unagi_body.rgba16.png"])
    unagi_seg5_texture_0500B720.push(...data["actors/unagi/unagi_eye.rgba16.png"])
    unagi_seg5_texture_0500B920.push(...data["actors/unagi/unagi_head_base.rgba16.png"])
    unagi_seg5_texture_0500C120.push(...data["actors/unagi/unagi_tooth.rgba16.png"])
    unagi_seg5_texture_0500C320.push(...data["actors/unagi/unagi_mouth.rgba16.png"])
    unagi_seg5_texture_0500C3A0.push(...data["actors/unagi/unagi_tail.rgba16.png"])

    smoke_seg4_texture_0401DEA0.push(...data["actors/walk_smoke/walk_smoke_0.ia16.png"])
    smoke_seg4_texture_0401E6A0.push(...data["actors/walk_smoke/walk_smoke_1.ia16.png"])
    smoke_seg4_texture_0401EEA0.push(...data["actors/walk_smoke/walk_smoke_2.ia16.png"])
    smoke_seg4_texture_0401F6A0.push(...data["actors/walk_smoke/walk_smoke_3.ia16.png"])
    smoke_seg4_texture_0401FEA0.push(...data["actors/walk_smoke/walk_smoke_4.ia16.png"])
    smoke_seg4_texture_040206A0.push(...data["actors/walk_smoke/walk_smoke_5.ia16.png"])
    smoke_seg4_texture_04020EA0.push(...data["actors/walk_smoke/walk_smoke_6.ia16.png"])

    warp_pipe_seg3_texture_03007E40.push(...data["actors/warp_pipe/warp_pipe_side.rgba16.png"])
    warp_pipe_seg3_texture_03009168.push(...data["actors/warp_pipe/warp_pipe_top.rgba16.png"])

    water_bubble_seg5_texture_0500FE80.push(...data["actors/water_bubble/water_bubble.rgba16.png"])

    water_mine_seg6_texture_0600A4F8.push(...data["actors/water_mine/water_mine_left_side_unused.rgba16.png"])
    water_mine_seg6_texture_0600B4F8.push(...data["actors/water_mine/water_mine_right_side_unused.rgba16.png"])
    water_mine_seg6_texture_0600C4F8.push(...data["actors/water_mine/water_mine_spike_unused.rgba16.png"])

    water_ring_seg6_texture_06012380.push(...data["actors/water_ring/water_ring.rgba16.png"])

    water_splash_seg4_texture_0402A5C8.push(...data["actors/water_splash/water_splash_0.rgba16.png"])
    water_splash_seg4_texture_0402B5C8.push(...data["actors/water_splash/water_splash_1.rgba16.png"])
    water_splash_seg4_texture_0402C5C8.push(...data["actors/water_splash/water_splash_2.rgba16.png"])
    water_splash_seg4_texture_0402D5C8.push(...data["actors/water_splash/water_splash_3.rgba16.png"])
    water_splash_seg4_texture_0402E5C8.push(...data["actors/water_splash/water_splash_4.rgba16.png"])
    water_splash_seg4_texture_0402F5C8.push(...data["actors/water_splash/water_splash_5.rgba16.png"])
    water_splash_seg4_texture_040305C8.push(...data["actors/water_splash/water_splash_6.rgba16.png"])
    water_splash_seg4_texture_040315C8.push(...data["actors/water_splash/water_splash_7.rgba16.png"])

    water_wave_seg4_texture_04025358.push(...data["actors/water_wave/water_wave_0.ia16.png"])
    water_wave_seg4_texture_04025B58.push(...data["actors/water_wave/water_wave_1.ia16.png"])
    water_wave_seg4_texture_04026358.push(...data["actors/water_wave/water_wave_2.ia16.png"])
    water_wave_seg4_texture_04026B58.push(...data["actors/water_wave/water_wave_3.ia16.png"])

    whirlpool_seg5_texture_05012848.push(...data["actors/whirlpool/whirlpool.ia16.png"])

    white_particle_texture.push(...data["actors/white_particle/snow_particle.rgba16.png"])

    white_particle_small_texture.push(...data["actors/white_particle_small/small_snow_particle.rgba16.png"])

    whomp_seg6_texture_0601C360.push(...data["actors/whomp/whomp_back.rgba16.png"])
    whomp_seg6_texture_0601D360.push(...data["actors/whomp/whomp_face.rgba16.png"])
    whomp_seg6_texture_0601E360.push(...data["actors/whomp/whomp_hand.rgba16.png"])
    whomp_seg6_texture_0601EB60.push(...data["actors/whomp/whomp_surface.rgba16.png"])

    wiggler_seg5_texture_05005A30.push(...data["actors/wiggler/wiggler_segment_left_side.rgba16.png"])
    wiggler_seg5_texture_05006A30.push(...data["actors/wiggler/wiggler_segment_right_side.rgba16.png"])
    wiggler_seg5_texture_05007A30.push(...data["actors/wiggler/wiggler_eye.rgba16.png"])
    wiggler_seg5_texture_05008230.push(...data["actors/wiggler/wiggler_flower.rgba16.png"])
    wiggler_seg5_texture_05008A30.push(...data["actors/wiggler/wiggler_frown.rgba16.png"])
    wiggler_seg5_texture_05009230.push(...data["actors/wiggler/wiggler_nose_left_side.rgba16.png"])
    wiggler_seg5_texture_0500A230.push(...data["actors/wiggler/wiggler_nose_right_side.rgba16.png"])

    wooden_signpost_seg3_texture_0302C9C8.push(...data["actors/wooden_signpost/wooden_signpost_back.rgba16.png"])
    wooden_signpost_seg3_texture_0302D1C8.push(...data["actors/wooden_signpost/wooden_signpost_front.rgba16.png"])

    yellow_sphere_seg6_texture_0601EB88.push(...data["actors/yellow_sphere/yellow_sphere.rgba16.png"])

    yellow_sphere_seg5_texture_05000040.push(...data["actors/yellow_sphere_small/small_yellow_sphere.rgba16.png"])

    yoshi_seg5_texture_0501C4A0.push(...data["actors/yoshi/yoshi_eye.rgba16.png"])
    yoshi_seg5_texture_0501C6A0.push(...data["actors/yoshi/yoshi_eye_blink.rgba16.png"])
    yoshi_seg5_texture_0501C8A0.push(...data["actors/yoshi/yoshi_nostril.rgba16.png"])

    yoshi_egg_seg5_texture_050057B8.push(...data["actors/yoshi_egg/yoshi_egg_0_unused.rgba16.png"])
    yoshi_egg_seg5_texture_05005FB8.push(...data["actors/yoshi_egg/yoshi_egg_1_unused.rgba16.png"])
    yoshi_egg_seg5_texture_050067B8.push(...data["actors/yoshi_egg/yoshi_egg_2_unused.rgba16.png"])
    yoshi_egg_seg5_texture_05006FB8.push(...data["actors/yoshi_egg/yoshi_egg_3_unused.rgba16.png"])
    yoshi_egg_seg5_texture_050077B8.push(...data["actors/yoshi_egg/yoshi_egg_4_unused.rgba16.png"])
    yoshi_egg_seg5_texture_05007FB8.push(...data["actors/yoshi_egg/yoshi_egg_5_unused.rgba16.png"])
    yoshi_egg_seg5_texture_050087B8.push(...data["actors/yoshi_egg/yoshi_egg_6_unused.rgba16.png"])
    yoshi_egg_seg5_texture_05008FB8.push(...data["actors/yoshi_egg/yoshi_egg_7_unused.rgba16.png"])

    effect_0B000008.push(...data["textures/effect/flower.00008.rgba16.png"])
    effect_0B000808.push(...data["textures/effect/flower.00808.rgba16.png"])
    effect_0B001008.push(...data["textures/effect/flower.01008.rgba16.png"])
    effect_0B001808.push(...data["textures/effect/flower.01808.rgba16.png"])
    effect_0B002020.push(...data["textures/effect/lava_bubble.02020.rgba16.png"])
    effect_0B002820.push(...data["textures/effect/lava_bubble.02820.rgba16.png"])
    effect_0B003020.push(...data["textures/effect/lava_bubble.03020.rgba16.png"])
    effect_0B003820.push(...data["textures/effect/lava_bubble.03820.rgba16.png"])
    effect_0B004020.push(...data["textures/effect/lava_bubble.04020.rgba16.png"])
    effect_0B004820.push(...data["textures/effect/lava_bubble.04820.rgba16.png"])
    effect_0B005020.push(...data["textures/effect/lava_bubble.05020.rgba16.png"])
    effect_0B005820.push(...data["textures/effect/lava_bubble.05820.rgba16.png"])
    effect_0B006048.push(...data["textures/effect/bubble.06048.rgba16.png"])
    effect_0B006AD8.push(...data["textures/effect/tiny_bubble.06AD8.rgba16.png"])

    texture_hud_char_0.push(...data["textures/segment2/segment2.00000.rgba16.png"])
    texture_hud_char_1.push(...data["textures/segment2/segment2.00200.rgba16.png"])
    texture_hud_char_2.push(...data["textures/segment2/segment2.00400.rgba16.png"])
    texture_hud_char_3.push(...data["textures/segment2/segment2.00600.rgba16.png"])
    texture_hud_char_4.push(...data["textures/segment2/segment2.00800.rgba16.png"])
    texture_hud_char_5.push(...data["textures/segment2/segment2.00A00.rgba16.png"])
    texture_hud_char_6.push(...data["textures/segment2/segment2.00C00.rgba16.png"])
    texture_hud_char_7.push(...data["textures/segment2/segment2.00E00.rgba16.png"])
    texture_hud_char_8.push(...data["textures/segment2/segment2.01000.rgba16.png"])
    texture_hud_char_9.push(...data["textures/segment2/segment2.01200.rgba16.png"])
    texture_hud_char_A.push(...data["textures/segment2/segment2.01400.rgba16.png"])
    texture_hud_char_B.push(...data["textures/segment2/segment2.01600.rgba16.png"])
    texture_hud_char_C.push(...data["textures/segment2/segment2.01800.rgba16.png"])
    texture_hud_char_D.push(...data["textures/segment2/segment2.01A00.rgba16.png"])
    texture_hud_char_E.push(...data["textures/segment2/segment2.01C00.rgba16.png"])
    texture_hud_char_F.push(...data["textures/segment2/segment2.01E00.rgba16.png"])
    texture_hud_char_G.push(...data["textures/segment2/segment2.02000.rgba16.png"])
    texture_hud_char_H.push(...data["textures/segment2/segment2.02200.rgba16.png"])
    texture_hud_char_I.push(...data["textures/segment2/segment2.02400.rgba16.png"])
    // texture_hud_char_J.push(...data["textures/segment2/segment2.02600.rgba16.png"])
    texture_hud_char_K.push(...data["textures/segment2/segment2.02800.rgba16.png"])
    texture_hud_char_L.push(...data["textures/segment2/segment2.02A00.rgba16.png"])
    texture_hud_char_M.push(...data["textures/segment2/segment2.02C00.rgba16.png"])
    texture_hud_char_N.push(...data["textures/segment2/segment2.02E00.rgba16.png"])
    texture_hud_char_O.push(...data["textures/segment2/segment2.03000.rgba16.png"])
    texture_hud_char_P.push(...data["textures/segment2/segment2.03200.rgba16.png"])
    // texture_hud_char_Q.push(...data["textures/segment2/segment2.03400.rgba16.png"])
    texture_hud_char_R.push(...data["textures/segment2/segment2.03600.rgba16.png"])
    texture_hud_char_S.push(...data["textures/segment2/segment2.03800.rgba16.png"])
    texture_hud_char_T.push(...data["textures/segment2/segment2.03A00.rgba16.png"])
    texture_hud_char_U.push(...data["textures/segment2/segment2.03C00.rgba16.png"])
    // texture_hud_char_V.push(...data["textures/segment2/segment2.03E00.rgba16.png"])
    texture_hud_char_W.push(...data["textures/segment2/segment2.04000.rgba16.png"])
    // texture_hud_char_X.push(...data["textures/segment2/segment2.04200.rgba16.png"])
    texture_hud_char_Y.push(...data["textures/segment2/segment2.04400.rgba16.png"])
    // texture_hud_char_Z.push(...data["textures/segment2/segment2.04600.rgba16.png"])
    texture_hud_char_apostrophe.push(...data["textures/segment2/segment2.04800.rgba16.png"])
    texture_hud_char_double_quote.push(...data["textures/segment2/segment2.04A00.rgba16.png"])
    texture_hud_char_multiply.push(...data["textures/segment2/segment2.05600.rgba16.png"])
    texture_hud_char_coin.push(...data["textures/segment2/segment2.05800.rgba16.png"])
    texture_hud_char_mario_head.push(...data["textures/segment2/segment2.05A00.rgba16.png"])
    texture_hud_char_star.push(...data["textures/segment2/segment2.05C00.rgba16.png"])
    // texture_hud_char_decimal_point.push(...data["textures/segment2/segment2.05E00.rgba16.png"])
    // texture_hud_char_beta_key.push(...data["textures/segment2/segment2.06000.rgba16.png"])
    texture_credits_char_3.push(...data["textures/segment2/segment2.06200.rgba16.png"])
    texture_credits_char_4.push(...data["textures/segment2/segment2.06280.rgba16.png"])
    texture_credits_char_6.push(...data["textures/segment2/segment2.06300.rgba16.png"])
    texture_credits_char_A.push(...data["textures/segment2/segment2.06380.rgba16.png"])
    texture_credits_char_B.push(...data["textures/segment2/segment2.06400.rgba16.png"])
    texture_credits_char_C.push(...data["textures/segment2/segment2.06480.rgba16.png"])
    texture_credits_char_D.push(...data["textures/segment2/segment2.06500.rgba16.png"])
    texture_credits_char_E.push(...data["textures/segment2/segment2.06580.rgba16.png"])
    texture_credits_char_F.push(...data["textures/segment2/segment2.06600.rgba16.png"])
    texture_credits_char_G.push(...data["textures/segment2/segment2.06680.rgba16.png"])
    texture_credits_char_H.push(...data["textures/segment2/segment2.06700.rgba16.png"])
    texture_credits_char_I.push(...data["textures/segment2/segment2.06780.rgba16.png"])
    texture_credits_char_J.push(...data["textures/segment2/segment2.06800.rgba16.png"])
    texture_credits_char_K.push(...data["textures/segment2/segment2.06880.rgba16.png"])
    texture_credits_char_L.push(...data["textures/segment2/segment2.06900.rgba16.png"])
    texture_credits_char_M.push(...data["textures/segment2/segment2.06980.rgba16.png"])
    texture_credits_char_N.push(...data["textures/segment2/segment2.06A00.rgba16.png"])
    texture_credits_char_O.push(...data["textures/segment2/segment2.06A80.rgba16.png"])
    texture_credits_char_P.push(...data["textures/segment2/segment2.06B00.rgba16.png"])
    texture_credits_char_Q.push(...data["textures/segment2/segment2.06B80.rgba16.png"])
    texture_credits_char_R.push(...data["textures/segment2/segment2.06C00.rgba16.png"])
    texture_credits_char_S.push(...data["textures/segment2/segment2.06C80.rgba16.png"])
    texture_credits_char_T.push(...data["textures/segment2/segment2.06D00.rgba16.png"])
    texture_credits_char_U.push(...data["textures/segment2/segment2.06D80.rgba16.png"])
    texture_credits_char_V.push(...data["textures/segment2/segment2.06E00.rgba16.png"])
    texture_credits_char_W.push(...data["textures/segment2/segment2.06E80.rgba16.png"])
    texture_credits_char_X.push(...data["textures/segment2/segment2.06F00.rgba16.png"])
    texture_credits_char_Y.push(...data["textures/segment2/segment2.06F80.rgba16.png"])
    texture_credits_char_Z.push(...data["textures/segment2/segment2.07000.rgba16.png"])
    texture_credits_char_period.push(...data["textures/segment2/segment2.07080.rgba16.png"])
    texture_font_char_us_0.push(...data["textures/segment2/font_graphics.05900.ia4.png"])
    texture_font_char_us_1.push(...data["textures/segment2/font_graphics.05940.ia4.png"])
    texture_font_char_us_2.push(...data["textures/segment2/font_graphics.05980.ia4.png"])
    texture_font_char_us_3.push(...data["textures/segment2/font_graphics.059C0.ia4.png"])
    texture_font_char_us_4.push(...data["textures/segment2/font_graphics.05A00.ia4.png"])
    texture_font_char_us_5.push(...data["textures/segment2/font_graphics.05A40.ia4.png"])
    texture_font_char_us_6.push(...data["textures/segment2/font_graphics.05A80.ia4.png"])
    texture_font_char_us_7.push(...data["textures/segment2/font_graphics.05AC0.ia4.png"])
    texture_font_char_us_8.push(...data["textures/segment2/font_graphics.05B00.ia4.png"])
    texture_font_char_us_9.push(...data["textures/segment2/font_graphics.05B40.ia4.png"])
    texture_font_char_us_A.push(...data["textures/segment2/font_graphics.05B80.ia4.png"])
    texture_font_char_us_B.push(...data["textures/segment2/font_graphics.05BC0.ia4.png"])
    texture_font_char_us_C.push(...data["textures/segment2/font_graphics.05C00.ia4.png"])
    texture_font_char_us_D.push(...data["textures/segment2/font_graphics.05C40.ia4.png"])
    texture_font_char_us_E.push(...data["textures/segment2/font_graphics.05C80.ia4.png"])
    texture_font_char_us_F.push(...data["textures/segment2/font_graphics.05CC0.ia4.png"])
    texture_font_char_us_G.push(...data["textures/segment2/font_graphics.05D00.ia4.png"])
    texture_font_char_us_H.push(...data["textures/segment2/font_graphics.05D40.ia4.png"])
    texture_font_char_us_I.push(...data["textures/segment2/font_graphics.05D80.ia4.png"])
    texture_font_char_us_J.push(...data["textures/segment2/font_graphics.05DC0.ia4.png"])
    texture_font_char_us_K.push(...data["textures/segment2/font_graphics.05E00.ia4.png"])
    texture_font_char_us_L.push(...data["textures/segment2/font_graphics.05E40.ia4.png"])
    texture_font_char_us_M.push(...data["textures/segment2/font_graphics.05E80.ia4.png"])
    texture_font_char_us_N.push(...data["textures/segment2/font_graphics.05EC0.ia4.png"])
    texture_font_char_us_O.push(...data["textures/segment2/font_graphics.05F00.ia4.png"])
    texture_font_char_us_P.push(...data["textures/segment2/font_graphics.05F40.ia4.png"])
    texture_font_char_us_Q.push(...data["textures/segment2/font_graphics.05F80.ia4.png"])
    texture_font_char_us_R.push(...data["textures/segment2/font_graphics.05FC0.ia4.png"])
    texture_font_char_us_S.push(...data["textures/segment2/font_graphics.06000.ia4.png"])
    texture_font_char_us_T.push(...data["textures/segment2/font_graphics.06040.ia4.png"])
    texture_font_char_us_U.push(...data["textures/segment2/font_graphics.06080.ia4.png"])
    texture_font_char_us_V.push(...data["textures/segment2/font_graphics.060C0.ia4.png"])
    texture_font_char_us_W.push(...data["textures/segment2/font_graphics.06100.ia4.png"])
    texture_font_char_us_X.push(...data["textures/segment2/font_graphics.06140.ia4.png"])
    texture_font_char_us_Y.push(...data["textures/segment2/font_graphics.06180.ia4.png"])
    texture_font_char_us_Z.push(...data["textures/segment2/font_graphics.061C0.ia4.png"])
    texture_font_char_us_a.push(...data["textures/segment2/font_graphics.06200.ia4.png"])
    texture_font_char_us_b.push(...data["textures/segment2/font_graphics.06240.ia4.png"])
    texture_font_char_us_c.push(...data["textures/segment2/font_graphics.06280.ia4.png"])
    texture_font_char_us_d.push(...data["textures/segment2/font_graphics.062C0.ia4.png"])
    texture_font_char_us_e.push(...data["textures/segment2/font_graphics.06300.ia4.png"])
    texture_font_char_us_f.push(...data["textures/segment2/font_graphics.06340.ia4.png"])
    texture_font_char_us_g.push(...data["textures/segment2/font_graphics.06380.ia4.png"])
    texture_font_char_us_h.push(...data["textures/segment2/font_graphics.063C0.ia4.png"])
    texture_font_char_us_i.push(...data["textures/segment2/font_graphics.06400.ia4.png"])
    texture_font_char_us_j.push(...data["textures/segment2/font_graphics.06440.ia4.png"])
    texture_font_char_us_k.push(...data["textures/segment2/font_graphics.06480.ia4.png"])
    texture_font_char_us_l.push(...data["textures/segment2/font_graphics.064C0.ia4.png"])
    texture_font_char_us_m.push(...data["textures/segment2/font_graphics.06500.ia4.png"])
    texture_font_char_us_n.push(...data["textures/segment2/font_graphics.06540.ia4.png"])
    texture_font_char_us_o.push(...data["textures/segment2/font_graphics.06580.ia4.png"])
    texture_font_char_us_p.push(...data["textures/segment2/font_graphics.065C0.ia4.png"])
    texture_font_char_us_q.push(...data["textures/segment2/font_graphics.06600.ia4.png"])
    texture_font_char_us_r.push(...data["textures/segment2/font_graphics.06640.ia4.png"])
    texture_font_char_us_s.push(...data["textures/segment2/font_graphics.06680.ia4.png"])
    texture_font_char_us_t.push(...data["textures/segment2/font_graphics.066C0.ia4.png"])
    texture_font_char_us_u.push(...data["textures/segment2/font_graphics.06700.ia4.png"])
    texture_font_char_us_v.push(...data["textures/segment2/font_graphics.06740.ia4.png"])
    texture_font_char_us_w.push(...data["textures/segment2/font_graphics.06780.ia4.png"])
    texture_font_char_us_x.push(...data["textures/segment2/font_graphics.067C0.ia4.png"])
    texture_font_char_us_y.push(...data["textures/segment2/font_graphics.06800.ia4.png"])
    texture_font_char_us_z.push(...data["textures/segment2/font_graphics.06840.ia4.png"])
    texture_font_char_us_left_right_arrow.push(...data["textures/segment2/font_graphics.06880.ia4.png"])
    texture_font_char_us_exclamation.push(...data["textures/segment2/font_graphics.068C0.ia4.png"])
    texture_font_char_us_coin.push(...data["textures/segment2/font_graphics.06900.ia4.png"])
    texture_font_char_us_multiply.push(...data["textures/segment2/font_graphics.06940.ia4.png"])
    texture_font_char_us_open_parentheses.push(...data["textures/segment2/font_graphics.06980.ia4.png"])
    texture_font_char_us_close_open_parentheses.push(...data["textures/segment2/font_graphics.069C0.ia4.png"])
    texture_font_char_us_close_parentheses.push(...data["textures/segment2/font_graphics.06A00.ia4.png"])
    texture_font_char_us_tilde.push(...data["textures/segment2/font_graphics.06A40.ia4.png"])
    texture_font_char_us_period.push(...data["textures/segment2/font_graphics.06A80.ia4.png"])
    texture_font_char_us_percent.push(...data["textures/segment2/font_graphics.06AC0.ia4.png"])
    texture_font_char_us_interpunct.push(...data["textures/segment2/font_graphics.06B00.ia4.png"])
    texture_font_char_us_comma.push(...data["textures/segment2/font_graphics.06B40.ia4.png"])
    texture_font_char_us_apostrophe.push(...data["textures/segment2/font_graphics.06B80.ia4.png"])
    texture_font_char_us_question.push(...data["textures/segment2/font_graphics.06BC0.ia4.png"])
    texture_font_char_us_star_filled.push(...data["textures/segment2/font_graphics.06C00.ia4.png"])
    texture_font_char_us_star_hollow.push(...data["textures/segment2/font_graphics.06C40.ia4.png"])
    texture_font_char_us_double_quote_open.push(...data["textures/segment2/font_graphics.06C80.ia4.png"])
    texture_font_char_us_double_quote_close.push(...data["textures/segment2/font_graphics.06CC0.ia4.png"])
    texture_font_char_us_ellipsis.push(...data["textures/segment2/font_graphics.06D00.ia4.png"])
    texture_font_char_us_slash.push(...data["textures/segment2/font_graphics.06D40.ia4.png"])
    texture_font_char_us_ampersand.push(...data["textures/segment2/font_graphics.06D80.ia4.png"])
    texture_font_char_us_button_A.push(...data["textures/segment2/font_graphics.06DC0.ia4.png"])
    texture_font_char_us_button_B.push(...data["textures/segment2/font_graphics.06E00.ia4.png"])
    texture_font_char_us_button_C.push(...data["textures/segment2/font_graphics.06E40.ia4.png"])
    texture_font_char_us_button_Z.push(...data["textures/segment2/font_graphics.06E80.ia4.png"])
    texture_font_char_us_button_R.push(...data["textures/segment2/font_graphics.06EC0.ia4.png"])
    texture_font_char_us_button_C_up.push(...data["textures/segment2/font_graphics.06F00.ia4.png"])
    texture_font_char_us_button_C_down.push(...data["textures/segment2/font_graphics.06F40.ia4.png"])
    texture_font_char_us_button_C_left.push(...data["textures/segment2/font_graphics.06F80.ia4.png"])
    texture_font_char_us_button_C_right.push(...data["textures/segment2/font_graphics.06FC0.ia4.png"])
    texture_hud_char_camera.push(...data["textures/segment2/segment2.07B50.rgba16.png"])
    texture_hud_char_lakitu.push(...data["textures/segment2/segment2.07D50.rgba16.png"])
    texture_hud_char_no_camera.push(...data["textures/segment2/segment2.07F50.rgba16.png"])
    texture_hud_char_arrow_up.push(...data["textures/segment2/segment2.08150.rgba16.png"])
    texture_hud_char_arrow_down.push(...data["textures/segment2/segment2.081D0.rgba16.png"])
    texture_ia8_up_arrow.push(...data["textures/segment2/segment2.14838.ia8.png"])
    texture_shadow_quarter_circle.push(...data["textures/segment2/shadow_quarter_circle.ia8.png"])
    texture_shadow_quarter_square.push(...data["textures/segment2/shadow_quarter_square.ia8.png"])
    texture_transition_star_half.push(...data["textures/segment2/segment2.0F458.ia8.png"])
    texture_transition_circle_half.push(...data["textures/segment2/segment2.0FC58.ia8.png"])
    texture_transition_mario.push(...data["textures/segment2/segment2.10458.ia8.png"])
    texture_transition_bowser_half.push(...data["textures/segment2/segment2.11458.ia8.png"])
    texture_waterbox_water.push(...data["textures/segment2/segment2.11C58.rgba16.png"])
    texture_waterbox_jrb_water.push(...data["textures/segment2/segment2.12458.rgba16.png"])
    texture_waterbox_unknown_water.push(...data["textures/segment2/segment2.12C58.rgba16.png"])
    texture_waterbox_mist.push(...data["textures/segment2/segment2.13458.ia16.png"])
    texture_waterbox_lava.push(...data["textures/segment2/segment2.13C58.rgba16.png"])

    title_texture_0A0001C0.push(...data["textures/title_screen_bg/title_screen_bg.001C0.rgba16.png"])
    title_texture_0A000E40.push(...data["textures/title_screen_bg/title_screen_bg.00E40.rgba16.png"])
    title_texture_0A001AC0.push(...data["textures/title_screen_bg/title_screen_bg.01AC0.rgba16.png"])
    title_texture_0A002740.push(...data["textures/title_screen_bg/title_screen_bg.02740.rgba16.png"])
    title_texture_0A0033C0.push(...data["textures/title_screen_bg/title_screen_bg.033C0.rgba16.png"])
    title_texture_0A004040.push(...data["textures/title_screen_bg/title_screen_bg.04040.rgba16.png"])
    title_texture_0A004CC0.push(...data["textures/title_screen_bg/title_screen_bg.04CC0.rgba16.png"])
    title_texture_0A005940.push(...data["textures/title_screen_bg/title_screen_bg.05940.rgba16.png"])

    bbh_seg7_texture_07000000.push(...data["levels/bbh/0.rgba16.png"])
    bbh_seg7_texture_07001000.push(...data["levels/bbh/1.rgba16.png"])
    bbh_seg7_texture_07001800.push(...data["levels/bbh/2.rgba16.png"])
    bbh_seg7_texture_07002000.push(...data["levels/bbh/3.rgba16.png"])
    bbh_seg7_texture_07003000.push(...data["levels/bbh/4.rgba16.png"])
    bbh_seg7_texture_07003400.push(...data["levels/bbh/5.rgba16.png"])
    bbh_seg7_texture_07004400.push(...data["levels/bbh/6.rgba16.png"])

    bitdw_seg7_texture_07000000.push(...data["levels/bitdw/0.rgba16.png"])
    bitdw_seg7_texture_07000800.push(...data["levels/bitdw/1.rgba16.png"])
    bitdw_seg7_texture_07001000.push(...data["levels/bitdw/2.rgba16.png"])
    bitdw_seg7_texture_07001800.push(...data["levels/bitdw/3.rgba16.png"])

    bitfs_seg7_texture_07000000.push(...data["levels/bitfs/0.rgba16.png"])
    bitfs_seg7_texture_07001000.push(...data["levels/bitfs/1.rgba16.png"])
    bitfs_seg7_texture_07001800.push(...data["levels/bitfs/2.rgba16.png"])

    bits_seg7_texture_07000000.push(...data["levels/bits/0.rgba16.png"])
    bits_seg7_texture_07001000.push(...data["levels/bits/1.rgba16.png"])
    bits_seg7_texture_07002000.push(...data["levels/bits/2.rgba16.png"])

    bob_seg7_texture_07000000.push(...data["levels/bob/0.rgba16.png"])
    bob_seg7_texture_07000800.push(...data["levels/bob/1.rgba16.png"])
    bob_seg7_texture_07001000.push(...data["levels/bob/2.rgba16.png"])
    bob_seg7_texture_07001800.push(...data["levels/bob/3.rgba16.png"])
    bob_seg7_texture_07002000.push(...data["levels/bob/4.rgba16.png"])

    bowser_1_seg7_texture_07000000.push(...data["levels/bowser_1/0.rgba16.png"])
    bowser_1_seg7_texture_07001000.push(...data["levels/bowser_1/1.rgba16.png"])
    bowser_1_seg7_texture_07001800.push(...data["levels/bowser_1/2.rgba16.png"])

    bowser_2_seg7_texture_07000000.push(...data["levels/bowser_2/0.rgba16.png"])

    bowser_3_seg7_texture_07000000.push(...data["levels/bowser_3/0.rgba16.png"])
    bowser_3_seg7_texture_07000800.push(...data["levels/bowser_3/1.rgba16.png"])
    bowser_3_seg7_texture_07001000.push(...data["levels/bowser_3/2.rgba16.png"])

    castle_grounds_seg7_texture_07000000.push(...data["levels/castle_grounds/0.rgba16.png"])
    castle_grounds_seg7_texture_07001000.push(...data["levels/castle_grounds/1.rgba16.png"])
    castle_grounds_seg7_texture_07002000.push(...data["levels/castle_grounds/2.rgba16.png"])

    castle_grounds_seg7_texture_0700C9E8.push(...data["levels/castle_grounds/3.rgba16.png"])
    castle_grounds_seg7_texture_0700D9E8.push(...data["levels/castle_grounds/4.rgba16.png"])

    castle_grounds_seg7_us_texture_0700EAE8.push(...data["levels/castle_grounds/5.ia8.png"])

    texture_castle_light.push(...data["levels/castle_inside/castle_light.ia16.png"])
    inside_castle_seg7_texture_07000800.push(...data["levels/castle_inside/1.rgba16.png"])
    inside_castle_seg7_texture_07001000.push(...data["levels/castle_inside/2.ia16.png"])
    inside_castle_seg7_texture_07002000.push(...data["levels/castle_inside/3.rgba16.png"])
    inside_castle_seg7_texture_07003000.push(...data["levels/castle_inside/4.rgba16.png"])
    inside_castle_seg7_texture_07003800.push(...data["levels/castle_inside/5.rgba16.png"])
    inside_castle_seg7_texture_07004800.push(...data["levels/castle_inside/6.rgba16.png"])
    inside_castle_seg7_texture_07005800.push(...data["levels/castle_inside/7.rgba16.png"])
    inside_castle_seg7_texture_07006000.push(...data["levels/castle_inside/8.rgba16.png"])
    inside_castle_seg7_texture_07006800.push(...data["levels/castle_inside/9.rgba16.png"])
    inside_castle_seg7_texture_07007000.push(...data["levels/castle_inside/10.rgba16.png"])
    inside_castle_seg7_texture_07007800.push(...data["levels/castle_inside/11.rgba16.png"])
    inside_castle_seg7_texture_07008000.push(...data["levels/castle_inside/12.rgba16.png"])
    inside_castle_seg7_texture_07008800.push(...data["levels/castle_inside/13.rgba16.png"])
    inside_castle_seg7_texture_07009000.push(...data["levels/castle_inside/14.rgba16.png"])
    inside_castle_seg7_texture_07009800.push(...data["levels/castle_inside/15.rgba16.png"])
    inside_castle_seg7_texture_0700A000.push(...data["levels/castle_inside/16.ia16.png"])
    inside_castle_seg7_texture_0700A800.push(...data["levels/castle_inside/17.rgba16.png"])
    inside_castle_seg7_texture_0700B800.push(...data["levels/castle_inside/18.rgba16.png"])
    inside_castle_seg7_texture_0700C800.push(...data["levels/castle_inside/19.rgba16.png"])
    inside_castle_seg7_texture_0700D800.push(...data["levels/castle_inside/20.rgba16.png"])
    inside_castle_seg7_texture_0700E800.push(...data["levels/castle_inside/21.rgba16.png"])
    inside_castle_seg7_texture_0700F800.push(...data["levels/castle_inside/22.rgba16.png"])
    inside_castle_seg7_texture_07010800.push(...data["levels/castle_inside/23_us.rgba16.png"])
    inside_castle_seg7_texture_07011800.push(...data["levels/castle_inside/24_us.rgba16.png"])
    inside_castle_seg7_texture_07012800.push(...data["levels/castle_inside/25.rgba16.png"])
    inside_castle_seg7_texture_07013800.push(...data["levels/castle_inside/26.rgba16.png"])
    inside_castle_seg7_texture_07014800.push(...data["levels/castle_inside/27.rgba16.png"])
    inside_castle_seg7_texture_07015800.push(...data["levels/castle_inside/28.rgba16.png"])
    inside_castle_seg7_texture_07016800.push(...data["levels/castle_inside/29.rgba16.png"])
    inside_castle_seg7_texture_07017000.push(...data["levels/castle_inside/30.rgba16.png"])
    inside_castle_seg7_texture_07017800.push(...data["levels/castle_inside/31.rgba16.png"])
    inside_castle_seg7_texture_07018800.push(...data["levels/castle_inside/32.rgba16.png"])
    inside_castle_seg7_texture_07019800.push(...data["levels/castle_inside/33.rgba16.png"])
    inside_castle_seg7_texture_0701A800.push(...data["levels/castle_inside/34.rgba16.png"])
    inside_castle_seg7_texture_0701B800.push(...data["levels/castle_inside/35.rgba16.png"])
    inside_castle_seg7_texture_0701C800.push(...data["levels/castle_inside/36.rgba16.png"])
    inside_castle_seg7_texture_0701D800.push(...data["levels/castle_inside/37.rgba16.png"])
    inside_castle_seg7_texture_0701E800.push(...data["levels/castle_inside/38.rgba16.png"])
    inside_castle_seg7_texture_0701F800.push(...data["levels/castle_inside/39.rgba16.png"])
    inside_castle_seg7_texture_07020800.push(...data["levels/castle_inside/40.rgba16.png"])

    ccm_seg7_texture_07000000.push(...data["levels/ccm/0.rgba16.png"])
    ccm_seg7_texture_07000800.push(...data["levels/ccm/1.rgba16.png"])
    ccm_seg7_texture_07000900.push(...data["levels/ccm/2.rgba16.png"])
    ccm_seg7_texture_07001100.push(...data["levels/ccm/3.rgba16.png"])
    ccm_seg7_texture_07001900.push(...data["levels/ccm/4.rgba16.png"])
    ccm_seg7_texture_07002100.push(...data["levels/ccm/5.rgba16.png"])
    ccm_seg7_texture_07002900.push(...data["levels/ccm/6.rgba16.png"])
    ccm_seg7_texture_07003100.push(...data["levels/ccm/7.rgba16.png"])
    ccm_seg7_texture_07003900.push(...data["levels/ccm/8.ia16.png"])
    ccm_seg7_texture_07003B00.push(...data["levels/ccm/9.ia16.png"])
    ccm_seg7_texture_07004300.push(...data["levels/ccm/10.rgba16.png"])
    ccm_seg7_texture_07004B00.push(...data["levels/ccm/11.rgba16.png"])

    ccm_seg7_texture_07011958.push(...data["levels/ccm/12.rgba16.png"])

    cotmc_seg7_texture_07000000.push(...data["levels/cotmc/0.rgba16.png"])
    cotmc_seg7_texture_07001000.push(...data["levels/cotmc/1.rgba16.png"])
    cotmc_seg7_texture_07001800.push(...data["levels/cotmc/2.rgba16.png"])
    cotmc_seg7_texture_07002000.push(...data["levels/cotmc/3.rgba16.png"])
    cotmc_seg7_texture_07002800.push(...data["levels/cotmc/4.rgba16.png"])

    ddd_seg7_texture_07000000.push(...data["levels/ddd/0.rgba16.png"])
    ddd_seg7_texture_07001000.push(...data["levels/ddd/1.rgba16.png"])
    ddd_seg7_texture_07001800.push(...data["levels/ddd/2.rgba16.png"])
    ddd_seg7_texture_07002000.push(...data["levels/ddd/3.rgba16.png"])
    ddd_seg7_texture_07003000.push(...data["levels/ddd/4.rgba16.png"])

    hmc_seg7_texture_07000000.push(...data["levels/hmc/0.rgba16.png"])
    hmc_seg7_texture_07001000.push(...data["levels/hmc/1.rgba16.png"])
    hmc_seg7_texture_07002000.push(...data["levels/hmc/2.rgba16.png"])
    hmc_seg7_texture_07003000.push(...data["levels/hmc/3.rgba16.png"])
    hmc_seg7_texture_07003800.push(...data["levels/hmc/4.rgba16.png"])
    hmc_seg7_texture_07004000.push(...data["levels/hmc/5.rgba16.png"])
    hmc_seg7_texture_07004800.push(...data["levels/hmc/6.rgba16.png"])

    hmc_seg7_texture_07024CE0.push(...data["levels/hmc/7.rgba16.png"])

    intro_seg7_texture_07007EA0.push(...data["levels/intro/0.rgba16.png"])
    intro_seg7_texture_070086A0.push(...data["levels/intro/1.rgba16.png"])
    intro_seg7_texture_0700B4A0.push(...data["levels/intro/2_copyright.rgba16.png"])
    intro_seg7_texture_0700C4A0.push(...data["levels/intro/3_tm.rgba16.png"])

    jrb_seg7_texture_07000000.push(...data["levels/jrb/0.rgba16.png"])
    jrb_seg7_texture_07000800.push(...data["levels/jrb/1.rgba16.png"])
    jrb_seg7_texture_07001800.push(...data["levels/jrb/2.rgba16.png"])
    jrb_seg7_texture_07002000.push(...data["levels/jrb/3.rgba16.png"])

    lll_seg7_texture_07000000.push(...data["levels/lll/0.rgba16.png"])
    lll_seg7_texture_07000800.push(...data["levels/lll/1.rgba16.png"])
    lll_seg7_texture_07001000.push(...data["levels/lll/2.rgba16.png"])
    lll_seg7_texture_07001800.push(...data["levels/lll/3.rgba16.png"])
    lll_seg7_texture_07002000.push(...data["levels/lll/4.rgba16.png"])
    lll_seg7_texture_07002800.push(...data["levels/lll/5.rgba16.png"])
    lll_seg7_texture_07003000.push(...data["levels/lll/6.rgba16.png"])
    lll_seg7_texture_07003800.push(...data["levels/lll/7.rgba16.png"])
    lll_seg7_texture_07004000.push(...data["levels/lll/8.rgba16.png"])
    lll_seg7_texture_07004800.push(...data["levels/lll/9.rgba16.png"])
    lll_seg7_texture_07005000.push(...data["levels/lll/10.rgba16.png"])
    lll_seg7_texture_07005800.push(...data["levels/lll/11.rgba16.png"])
    lll_seg7_texture_07006000.push(...data["levels/lll/12.rgba16.png"])
    lll_seg7_texture_07006800.push(...data["levels/lll/13.rgba16.png"])
    lll_seg7_texture_07007000.push(...data["levels/lll/14.rgba16.png"])
    lll_seg7_texture_07007800.push(...data["levels/lll/15.rgba16.png"])
    lll_seg7_texture_07008000.push(...data["levels/lll/16.rgba16.png"])
    lll_seg7_texture_07008800.push(...data["levels/lll/17.rgba16.png"])
    lll_seg7_texture_07009000.push(...data["levels/lll/18.rgba16.png"])
    lll_seg7_texture_07009800.push(...data["levels/lll/19.rgba16.png"])
    lll_seg7_texture_0700A000.push(...data["levels/lll/20.rgba16.png"])
    lll_seg7_texture_0700A800.push(...data["levels/lll/21.rgba16.png"])
    lll_seg7_texture_0700B000.push(...data["levels/lll/22.rgba16.png"])
    lll_seg7_texture_0700B800.push(...data["levels/lll/23.rgba16.png"])
    lll_seg7_texture_0700C000.push(...data["levels/lll/24.rgba16.png"])
    lll_seg7_texture_0700C800.push(...data["levels/lll/25.rgba16.png"])
    lll_seg7_texture_0700D000.push(...data["levels/lll/26.rgba16.png"])
    lll_seg7_texture_0700D200.push(...data["levels/lll/27.ia16.png"])
    lll_seg7_texture_0700D400.push(...data["levels/lll/28.rgba16.png"])
    lll_seg7_texture_0700DC00.push(...data["levels/lll/29.rgba16.png"])
    lll_seg7_texture_0700E400.push(...data["levels/lll/30.rgba16.png"])
    lll_seg7_texture_0700EC00.push(...data["levels/lll/31.rgba16.png"])
    lll_seg7_texture_0700F400.push(...data["levels/lll/32.rgba16.png"])

    texture_menu_stone.push(...data["levels/menu/main_menu_seg7.00018.rgba16.png"])
    texture_menu_dark_stone.push(...data["levels/menu/main_menu_seg7.00818.rgba16.png"])
    texture_menu_mario_save.push(...data["levels/menu/main_menu_seg7.01018.rgba16.png"])
    texture_menu_mario_new.push(...data["levels/menu/main_menu_seg7.02018.rgba16.png"])
    texture_menu_erase.push(...data["levels/menu/main_menu_seg7.03468.rgba16.png"])
    texture_menu_copy.push(...data["levels/menu/main_menu_seg7.03C68.rgba16.png"])
    texture_menu_file.push(...data["levels/menu/main_menu_seg7.04468.rgba16.png"])
    texture_menu_score.push(...data["levels/menu/main_menu_seg7.04C68.rgba16.png"])
    texture_menu_sound.push(...data["levels/menu/main_menu_seg7.05468.rgba16.png"])
    texture_menu_idle_hand.push(...data["levels/menu/main_menu_seg7.06328.rgba16.png"])
    texture_menu_grabbing_hand.push(...data["levels/menu/main_menu_seg7.06B28.rgba16.png"])
    texture_menu_font_char_0.push(...data["levels/menu/main_menu_seg7_us.0AC40.ia8.png"])
    texture_menu_font_char_1.push(...data["levels/menu/main_menu_seg7_us.0AC80.ia8.png"])
    texture_menu_font_char_2.push(...data["levels/menu/main_menu_seg7_us.0ACC0.ia8.png"])
    texture_menu_font_char_3.push(...data["levels/menu/main_menu_seg7_us.0AD00.ia8.png"])
    texture_menu_font_char_4.push(...data["levels/menu/main_menu_seg7_us.0AD40.ia8.png"])
    texture_menu_font_char_5.push(...data["levels/menu/main_menu_seg7_us.0AD80.ia8.png"])
    texture_menu_font_char_6.push(...data["levels/menu/main_menu_seg7_us.0ADC0.ia8.png"])
    texture_menu_font_char_7.push(...data["levels/menu/main_menu_seg7_us.0AE00.ia8.png"])
    texture_menu_font_char_8.push(...data["levels/menu/main_menu_seg7_us.0AE40.ia8.png"])
    texture_menu_font_char_9.push(...data["levels/menu/main_menu_seg7_us.0AE80.ia8.png"])
    texture_menu_font_char_A.push(...data["levels/menu/main_menu_seg7_us.0AEC0.ia8.png"])
    texture_menu_font_char_B.push(...data["levels/menu/main_menu_seg7_us.0AF00.ia8.png"])
    texture_menu_font_char_C.push(...data["levels/menu/main_menu_seg7_us.0AF40.ia8.png"])
    texture_menu_font_char_D.push(...data["levels/menu/main_menu_seg7_us.0AF80.ia8.png"])
    texture_menu_font_char_E.push(...data["levels/menu/main_menu_seg7_us.0AFC0.ia8.png"])
    texture_menu_font_char_F.push(...data["levels/menu/main_menu_seg7_us.0B000.ia8.png"])
    texture_menu_font_char_G.push(...data["levels/menu/main_menu_seg7_us.0B040.ia8.png"])
    texture_menu_font_char_H.push(...data["levels/menu/main_menu_seg7_us.0B080.ia8.png"])
    texture_menu_font_char_I.push(...data["levels/menu/main_menu_seg7_us.0B0C0.ia8.png"])
    texture_menu_font_char_J.push(...data["levels/menu/main_menu_seg7_us.0B100.ia8.png"])
    texture_menu_font_char_K.push(...data["levels/menu/main_menu_seg7_us.0B140.ia8.png"])
    texture_menu_font_char_L.push(...data["levels/menu/main_menu_seg7_us.0B180.ia8.png"])
    texture_menu_font_char_M.push(...data["levels/menu/main_menu_seg7_us.0B1C0.ia8.png"])
    texture_menu_font_char_N.push(...data["levels/menu/main_menu_seg7_us.0B200.ia8.png"])
    texture_menu_font_char_O.push(...data["levels/menu/main_menu_seg7_us.0B240.ia8.png"])
    texture_menu_font_char_P.push(...data["levels/menu/main_menu_seg7_us.0B280.ia8.png"])
    texture_menu_font_char_Q.push(...data["levels/menu/main_menu_seg7_us.0B2C0.ia8.png"])
    texture_menu_font_char_R.push(...data["levels/menu/main_menu_seg7_us.0B300.ia8.png"])
    texture_menu_font_char_S.push(...data["levels/menu/main_menu_seg7_us.0B340.ia8.png"])
    texture_menu_font_char_T.push(...data["levels/menu/main_menu_seg7_us.0B380.ia8.png"])
    texture_menu_font_char_U.push(...data["levels/menu/main_menu_seg7_us.0B3C0.ia8.png"])
    texture_menu_font_char_V.push(...data["levels/menu/main_menu_seg7_us.0B400.ia8.png"])
    texture_menu_font_char_W.push(...data["levels/menu/main_menu_seg7_us.0B440.ia8.png"])
    texture_menu_font_char_X.push(...data["levels/menu/main_menu_seg7_us.0B480.ia8.png"])
    texture_menu_font_char_Y.push(...data["levels/menu/main_menu_seg7_us.0B4C0.ia8.png"])
    texture_menu_font_char_Z.push(...data["levels/menu/main_menu_seg7_us.0B500.ia8.png"])
    texture_menu_font_char_coin.push(...data["levels/menu/main_menu_seg7_us.0B540.ia8.png"])
    texture_menu_font_char_multiply.push(...data["levels/menu/main_menu_seg7_us.0B580.ia8.png"])
    texture_menu_font_char_star_filled.push(...data["levels/menu/main_menu_seg7_us.0B5C0.ia8.png"])
    texture_menu_font_char_dash.push(...data["levels/menu/main_menu_seg7_us.0B600.ia8.png"])
    texture_menu_font_char_comma.push(...data["levels/menu/main_menu_seg7_us.0B640.ia8.png"])
    texture_menu_font_char_apostrophe.push(...data["levels/menu/main_menu_seg7_us.0B680.ia8.png"])
    texture_menu_font_char_exclamation.push(...data["levels/menu/main_menu_seg7_us.0B6C0.ia8.png"])
    texture_menu_font_char_question.push(...data["levels/menu/main_menu_seg7_us.0B700.ia8.png"])
    texture_menu_font_char_mface1.push(...data["levels/menu/main_menu_seg7_us.0B740.ia8.png"])
    texture_menu_font_char_mface2.push(...data["levels/menu/main_menu_seg7_us.0B780.ia8.png"])
    texture_menu_font_char_period.push(...data["levels/menu/main_menu_seg7_us.0B7C0.ia8.png"])
    texture_menu_font_char_ampersand.push(...data["levels/menu/main_menu_seg7_us.0B800.ia8.png"])
    texture_menu_course_upper.push(...data["levels/menu/main_menu_seg7.0D1A8.rgba16.png"])
    texture_menu_course_lower.push(...data["levels/menu/main_menu_seg7.0E1A8.rgba16.png"])

    pss_seg7_texture_07000000.push(...data["levels/pss/0.rgba16.png"])
    pss_seg7_texture_07000800.push(...data["levels/pss/1.ia16.png"])
    pss_seg7_texture_07001000.push(...data["levels/pss/2.rgba16.png"])

    texture_quarter_flying_carpet.push(...data["levels/rr/quarter_flying_carpet.rgba16.png"])
    rr_seg7_texture_07000800.push(...data["levels/rr/1.rgba16.png"])
    rr_seg7_texture_07001800.push(...data["levels/rr/2.rgba16.png"])

    sl_seg7_texture_07000000.push(...data["levels/sl/0.rgba16.png"])
    sl_seg7_texture_07000800.push(...data["levels/sl/1.rgba16.png"])
    sl_seg7_texture_07001000.push(...data["levels/sl/2.rgba16.png"])
    sl_seg7_texture_07001800.push(...data["levels/sl/3.rgba16.png"])
    sl_seg7_texture_07002000.push(...data["levels/sl/4.rgba16.png"])

    ssl_seg7_texture_07000000.push(...data["levels/ssl/0.rgba16.png"])
    ssl_seg7_texture_07000800.push(...data["levels/ssl/1.ia16.png"])
    ssl_seg7_texture_07001800.push(...data["levels/ssl/3.rgba16.png"])
    ssl_seg7_texture_07002000.push(...data["levels/ssl/4.rgba16.png"])
    ssl_seg7_texture_07002800.push(...data["levels/ssl/5.rgba16.png"])
    ssl_seg7_texture_07003800.push(...data["levels/ssl/6.rgba16.png"])
    ssl_pyramid_sand.push(...data["levels/ssl/7.rgba16.png"])
    ssl_seg7_texture_0700BFA8.push(...data["levels/ssl/8.rgba16.png"])
    ssl_seg7_texture_0700C7A8.push(...data["levels/ssl/9.rgba16.png"])
    ssl_seg7_texture_0700D7A8.push(...data["levels/ssl/10.rgba16.png"])
    ssl_seg7_texture_0700E7A8.push(...data["levels/ssl/11.rgba16.png"])

    thi_seg7_texture_07000000.push(...data["levels/thi/0.rgba16.png"])
    thi_seg7_texture_07000800.push(...data["levels/thi/1.rgba16.png"])

    totwc_seg7_texture_07000000.push(...data["levels/totwc/0.rgba16.png"])
    totwc_seg7_texture_07001000.push(...data["levels/totwc/1.rgba16.png"])
    totwc_seg7_texture_07001800.push(...data["levels/totwc/2.rgba16.png"])
    totwc_seg7_texture_07002000.push(...data["levels/totwc/3.ia16.png"])

    ttc_seg7_texture_07000000.push(...data["levels/ttc/0.rgba16.png"])
    ttc_seg7_texture_07000800.push(...data["levels/ttc/1.rgba16.png"])

    ttm_seg7_texture_07000000.push(...data["levels/ttm/0.ia16.png"])
    ttm_seg7_texture_07000800.push(...data["levels/ttm/1.rgba16.png"])
    ttm_seg7_texture_07001000.push(...data["levels/ttm/2.rgba16.png"])
    ttm_seg7_texture_07001800.push(...data["levels/ttm/3.rgba16.png"])
    ttm_seg7_texture_07002000.push(...data["levels/ttm/4.rgba16.png"])
    ttm_seg7_texture_07002800.push(...data["levels/ttm/5.rgba16.png"])
    ttm_seg7_texture_07003000.push(...data["levels/ttm/6.rgba16.png"])
    ttm_seg7_texture_07004000.push(...data["levels/ttm/7.rgba16.png"])

    ttm_seg7_texture_0702AD30.push(...data["levels/ttm/8.rgba16.png"])

    vcutm_seg7_texture_07000000.push(...data["levels/vcutm/0.rgba16.png"])
    vcutm_seg7_texture_07000800.push(...data["levels/vcutm/1.rgba16.png"])
    vcutm_seg7_texture_07001800.push(...data["levels/vcutm/2.rgba16.png"])
    vcutm_seg7_texture_07002800.push(...data["levels/vcutm/3.rgba16.png"])

    wdw_seg7_texture_07000000.push(...data["levels/wdw/0.rgba16.png"])
    wdw_seg7_texture_07000800.push(...data["levels/wdw/1.rgba16.png"])
    wdw_seg7_texture_07001000.push(...data["levels/wdw/2.rgba16.png"])
    wdw_seg7_texture_07001800.push(...data["levels/wdw/3.rgba16.png"])
    wdw_seg7_texture_07002000.push(...data["levels/wdw/4.rgba16.png"])

    wf_seg7_texture_07000000.push(...data["levels/wf/0.rgba16.png"])
    wf_seg7_texture_07000800.push(...data["levels/wf/1.rgba16.png"])
    wf_seg7_texture_07001000.push(...data["levels/wf/2.rgba16.png"])
    wf_seg7_texture_07001800.push(...data["levels/wf/3.rgba16.png"])
    wf_seg7_texture_07002000.push(...data["levels/wf/4.rgba16.png"])
    wf_seg7_texture_07002800.push(...data["levels/wf/5.ia8.png"])

    cave_09000000.push(...data["textures/cave/hmc_textures.00000.rgba16.png"])
    cave_09001000.push(...data["textures/cave/hmc_textures.01000.rgba16.png"])
    cave_09001800.push(...data["textures/cave/hmc_textures.01800.rgba16.png"])
    cave_09002800.push(...data["textures/cave/hmc_textures.02800.rgba16.png"])
    cave_09003000.push(...data["textures/cave/hmc_textures.03000.rgba16.png"])
    cave_09003800.push(...data["textures/cave/hmc_textures.03800.rgba16.png"])
    cave_09004800.push(...data["textures/cave/hmc_textures.04800.rgba16.png"])
    cave_09005800.push(...data["textures/cave/hmc_textures.05800.rgba16.png"])
    cave_09006800.push(...data["textures/cave/hmc_textures.06800.rgba16.png"])
    cave_09007000.push(...data["textures/cave/hmc_textures.07000.rgba16.png"])
    cave_09007800.push(...data["textures/cave/hmc_textures.07800.rgba16.png"])
    cave_09008800.push(...data["textures/cave/hmc_textures.08800.rgba16.png"])
    cave_09009800.push(...data["textures/cave/hmc_textures.09800.rgba16.png"])
    cave_0900A000.push(...data["textures/cave/hmc_textures.0A000.rgba16.png"])
    cave_0900A800.push(...data["textures/cave/hmc_textures.0A800.rgba16.png"])
    cave_0900B800.push(...data["textures/cave/hmc_textures.0B800.ia16.png"])
    cave_0900C000.push(...data["textures/cave/hmc_textures.0C000.ia16.png"])

    fire_09000000.push(...data["textures/fire/lll_textures.00000.rgba16.png"])
    fire_09000800.push(...data["textures/fire/lll_textures.00800.rgba16.png"])
    fire_09001000.push(...data["textures/fire/lll_textures.01000.rgba16.png"])
    fire_09001800.push(...data["textures/fire/lll_textures.01800.rgba16.png"])
    fire_09002000.push(...data["textures/fire/lll_textures.02000.rgba16.png"])
    fire_09002800.push(...data["textures/fire/lll_textures.02800.rgba16.png"])
    fire_09003000.push(...data["textures/fire/lll_textures.03000.rgba16.png"])
    fire_09003800.push(...data["textures/fire/lll_textures.03800.rgba16.png"])
    fire_09004000.push(...data["textures/fire/lll_textures.04000.rgba16.png"])
    fire_09004800.push(...data["textures/fire/lll_textures.04800.rgba16.png"])
    fire_09005000.push(...data["textures/fire/lll_textures.05000.rgba16.png"])
    fire_09005800.push(...data["textures/fire/lll_textures.05800.rgba16.png"])
    fire_09006000.push(...data["textures/fire/lll_textures.06000.rgba16.png"])
    fire_09006800.push(...data["textures/fire/lll_textures.06800.rgba16.png"])
    fire_09007000.push(...data["textures/fire/lll_textures.07000.rgba16.png"])
    fire_09007800.push(...data["textures/fire/lll_textures.07800.rgba16.png"])
    fire_09008000.push(...data["textures/fire/lll_textures.08000.rgba16.png"])
    fire_09008800.push(...data["textures/fire/lll_textures.08800.rgba16.png"])
    fire_09009000.push(...data["textures/fire/lll_textures.09000.rgba16.png"])
    fire_09009800.push(...data["textures/fire/lll_textures.09800.rgba16.png"])
    fire_0900A000.push(...data["textures/fire/lll_textures.0A000.rgba16.png"])
    fire_0900A800.push(...data["textures/fire/lll_textures.0A800.rgba16.png"])
    fire_0900B000.push(...data["textures/fire/lll_textures.0B000.rgba16.png"])
    fire_0900B800.push(...data["textures/fire/lll_textures.0B800.rgba16.png"])

    generic_09000000.push(...data["textures/generic/bob_textures.00000.rgba16.png"])
    generic_09000800.push(...data["textures/generic/bob_textures.00800.rgba16.png"])
    generic_09001000.push(...data["textures/generic/bob_textures.01000.rgba16.png"])
    generic_09001800.push(...data["textures/generic/bob_textures.01800.rgba16.png"])
    generic_09002000.push(...data["textures/generic/bob_textures.02000.rgba16.png"])
    generic_09002800.push(...data["textures/generic/bob_textures.02800.rgba16.png"])
    generic_09003000.push(...data["textures/generic/bob_textures.03000.rgba16.png"])
    generic_09003800.push(...data["textures/generic/bob_textures.03800.rgba16.png"])
    generic_09004000.push(...data["textures/generic/bob_textures.04000.rgba16.png"])
    generic_09004800.push(...data["textures/generic/bob_textures.04800.rgba16.png"])
    generic_09005000.push(...data["textures/generic/bob_textures.05000.rgba16.png"])
    generic_09005800.push(...data["textures/generic/bob_textures.05800.rgba16.png"])
    generic_09006000.push(...data["textures/generic/bob_textures.06000.rgba16.png"])
    generic_09007000.push(...data["textures/generic/bob_textures.07000.rgba16.png"])
    generic_09007800.push(...data["textures/generic/bob_textures.07800.rgba16.png"])
    generic_09008000.push(...data["textures/generic/bob_textures.08000.rgba16.png"])
    generic_09008800.push(...data["textures/generic/bob_textures.08800.rgba16.png"])
    generic_09009000.push(...data["textures/generic/bob_textures.09000.rgba16.png"])
    generic_09009800.push(...data["textures/generic/bob_textures.09800.rgba16.png"])
    generic_0900A000.push(...data["textures/generic/bob_textures.0A000.rgba16.png"])
    generic_0900A800.push(...data["textures/generic/bob_textures.0A800.rgba16.png"])
    generic_0900B000.push(...data["textures/generic/bob_textures.0B000.ia16.png"])

    grass_09000000.push(...data["textures/grass/wf_textures.00000.rgba16.png"])
    grass_09000800.push(...data["textures/grass/wf_textures.00800.rgba16.png"])
    grass_09001000.push(...data["textures/grass/wf_textures.01000.rgba16.png"])
    grass_09001800.push(...data["textures/grass/wf_textures.01800.rgba16.png"])
    grass_09002000.push(...data["textures/grass/wf_textures.02000.rgba16.png"])
    grass_09002800.push(...data["textures/grass/wf_textures.02800.rgba16.png"])
    grass_09003000.push(...data["textures/grass/wf_textures.03000.rgba16.png"])
    grass_09003800.push(...data["textures/grass/wf_textures.03800.rgba16.png"])
    grass_09004000.push(...data["textures/grass/wf_textures.04000.rgba16.png"])
    grass_09004800.push(...data["textures/grass/wf_textures.04800.rgba16.png"])
    grass_09005000.push(...data["textures/grass/wf_textures.05000.rgba16.png"])
    grass_09005800.push(...data["textures/grass/wf_textures.05800.rgba16.png"])
    grass_09006000.push(...data["textures/grass/wf_textures.06000.rgba16.png"])
    grass_09006800.push(...data["textures/grass/wf_textures.06800.rgba16.png"])
    grass_09007000.push(...data["textures/grass/wf_textures.07000.rgba16.png"])
    grass_09007800.push(...data["textures/grass/wf_textures.07800.rgba16.png"])
    grass_09008000.push(...data["textures/grass/wf_textures.08000.rgba16.png"])
    grass_09008800.push(...data["textures/grass/wf_textures.08800.rgba16.png"])
    grass_09009000.push(...data["textures/grass/wf_textures.09000.rgba16.png"])
    grass_09009800.push(...data["textures/grass/wf_textures.09800.rgba16.png"])
    grass_0900A000.push(...data["textures/grass/wf_textures.0A000.rgba16.png"])
    grass_0900A800.push(...data["textures/grass/wf_textures.0A800.rgba16.png"])
    grass_0900B000.push(...data["textures/grass/wf_textures.0B000.ia16.png"])
    grass_0900B800.push(...data["textures/grass/wf_textures.0B800.ia16.png"])

    inside_09000000.push(...data["textures/inside/inside_castle_textures.00000.rgba16.png"])
    inside_09001000.push(...data["textures/inside/inside_castle_textures.01000.rgba16.png"])
    inside_09002000.push(...data["textures/inside/inside_castle_textures.02000.rgba16.png"])
    inside_09003000.push(...data["textures/inside/inside_castle_textures.03000.rgba16.png"])
    inside_09003800.push(...data["textures/inside/inside_castle_textures.03800.rgba16.png"])
    inside_09004000.push(...data["textures/inside/inside_castle_textures.04000.rgba16.png"])
    inside_09004800.push(...data["textures/inside/inside_castle_textures.04800.rgba16.png"])
    inside_09005000.push(...data["textures/inside/inside_castle_textures.05000.rgba16.png"])
    inside_09005800.push(...data["textures/inside/inside_castle_textures.05800.rgba16.png"])
    inside_09006000.push(...data["textures/inside/inside_castle_textures.06000.rgba16.png"])
    inside_09007000.push(...data["textures/inside/inside_castle_textures.07000.rgba16.png"])
    inside_09008000.push(...data["textures/inside/inside_castle_textures.08000.rgba16.png"])
    inside_09008800.push(...data["textures/inside/inside_castle_textures.08800.rgba16.png"])
    inside_09009000.push(...data["textures/inside/inside_castle_textures.09000.rgba16.png"])
    inside_0900A000.push(...data["textures/inside/inside_castle_textures.0A000.rgba16.png"])
    inside_0900B000.push(...data["textures/inside/inside_castle_textures.0B000.rgba16.png"])
    inside_0900B800.push(...data["textures/inside/inside_castle_textures.0B800.rgba16.png"])

    gd_texture_mario_face_shine.push(...data['textures/intro_raw/mario_face_shine.ia8.png'])
    gd_texture_red_star_0.push(...data['textures/intro_raw/red_star_0.rgba16.png'])
    gd_texture_red_star_1.push(...data['textures/intro_raw/red_star_1.rgba16.png'])
    gd_texture_red_star_2.push(...data['textures/intro_raw/red_star_2.rgba16.png'])
    gd_texture_red_star_3.push(...data['textures/intro_raw/red_star_3.rgba16.png'])
    gd_texture_red_star_4.push(...data['textures/intro_raw/red_star_4.rgba16.png'])
    gd_texture_red_star_5.push(...data['textures/intro_raw/red_star_5.rgba16.png'])
    gd_texture_red_star_6.push(...data['textures/intro_raw/red_star_6.rgba16.png'])
    gd_texture_red_star_7.push(...data['textures/intro_raw/red_star_7.rgba16.png'])
    gd_texture_white_star_0.push(...data['textures/intro_raw/white_star_0.rgba16.png'])
    gd_texture_white_star_1.push(...data['textures/intro_raw/white_star_1.rgba16.png'])
    gd_texture_white_star_2.push(...data['textures/intro_raw/white_star_2.rgba16.png'])
    gd_texture_white_star_3.push(...data['textures/intro_raw/white_star_3.rgba16.png'])
    gd_texture_white_star_4.push(...data['textures/intro_raw/white_star_4.rgba16.png'])
    gd_texture_white_star_5.push(...data['textures/intro_raw/white_star_5.rgba16.png'])
    gd_texture_white_star_6.push(...data['textures/intro_raw/white_star_6.rgba16.png'])
    gd_texture_white_star_7.push(...data['textures/intro_raw/white_star_7.rgba16.png'])
    gd_texture_sparkle_0.push(...data['textures/intro_raw/sparkle_0.rgba16.png'])
    gd_texture_sparkle_1.push(...data['textures/intro_raw/sparkle_1.rgba16.png'])
    gd_texture_sparkle_2.push(...data['textures/intro_raw/sparkle_2.rgba16.png'])
    gd_texture_sparkle_3.push(...data['textures/intro_raw/sparkle_3.rgba16.png'])
    gd_texture_sparkle_4.push(...data['textures/intro_raw/sparkle_4.rgba16.png'])

    machine_09000000.push(...data["textures/machine/ttc_textures.00000.rgba16.png"])
    machine_09000800.push(...data["textures/machine/ttc_textures.00800.rgba16.png"])
    machine_09001000.push(...data["textures/machine/ttc_textures.01000.rgba16.png"])
    machine_09001800.push(...data["textures/machine/ttc_textures.01800.rgba16.png"])
    machine_09002000.push(...data["textures/machine/ttc_textures.02000.rgba16.png"])
    machine_09002800.push(...data["textures/machine/ttc_textures.02800.rgba16.png"])
    machine_09003000.push(...data["textures/machine/ttc_textures.03000.rgba16.png"])
    machine_09003800.push(...data["textures/machine/ttc_textures.03800.rgba16.png"])
    machine_09004000.push(...data["textures/machine/ttc_textures.04000.rgba16.png"])
    machine_09005000.push(...data["textures/machine/ttc_textures.05000.rgba16.png"])
    machine_09005800.push(...data["textures/machine/ttc_textures.05800.rgba16.png"])
    machine_09006000.push(...data["textures/machine/ttc_textures.06000.rgba16.png"])
    machine_09006800.push(...data["textures/machine/ttc_textures.06800.rgba16.png"])
    machine_09007000.push(...data["textures/machine/ttc_textures.07000.rgba16.png"])
    machine_09007800.push(...data["textures/machine/ttc_textures.07800.rgba16.png"])
    machine_09008000.push(...data["textures/machine/ttc_textures.08000.rgba16.png"])
    machine_09008400.push(...data["textures/machine/ttc_textures.08400.rgba16.png"])

    mountain_09000000.push(...data["textures/mountain/ttm_textures.00000.rgba16.png"])
    mountain_09000800.push(...data["textures/mountain/ttm_textures.00800.rgba16.png"])
    mountain_09001800.push(...data["textures/mountain/ttm_textures.01800.rgba16.png"])
    mountain_09002800.push(...data["textures/mountain/ttm_textures.02800.rgba16.png"])
    mountain_09003000.push(...data["textures/mountain/ttm_textures.03000.rgba16.png"])
    mountain_09003800.push(...data["textures/mountain/ttm_textures.03800.rgba16.png"])
    mountain_09004000.push(...data["textures/mountain/ttm_textures.04000.rgba16.png"])
    mountain_09004800.push(...data["textures/mountain/ttm_textures.04800.rgba16.png"])
    mountain_09005000.push(...data["textures/mountain/ttm_textures.05000.rgba16.png"])
    mountain_09005800.push(...data["textures/mountain/ttm_textures.05800.rgba16.png"])
    mountain_09006800.push(...data["textures/mountain/ttm_textures.06800.rgba16.png"])
    mountain_09007000.push(...data["textures/mountain/ttm_textures.07000.rgba16.png"])
    mountain_09007800.push(...data["textures/mountain/ttm_textures.07800.rgba16.png"])
    mountain_09008000.push(...data["textures/mountain/ttm_textures.08000.rgba16.png"])
    mountain_09008800.push(...data["textures/mountain/ttm_textures.08800.rgba16.png"])
    mountain_09009800.push(...data["textures/mountain/ttm_textures.09800.rgba16.png"])
    mountain_0900A000.push(...data["textures/mountain/ttm_textures.0A000.rgba16.png"])
    mountain_0900A800.push(...data["textures/mountain/ttm_textures.0A800.rgba16.png"])
    mountain_0900B000.push(...data["textures/mountain/ttm_textures.0B000.rgba16.png"])
    mountain_0900B800.push(...data["textures/mountain/ttm_textures.0B800.rgba16.png"])
    mountain_0900C000.push(...data["textures/mountain/ttm_textures.0C000.rgba16.png"])

    outside_09000000.push(...data["textures/outside/castle_grounds_textures.00000.rgba16.png"])
    outside_09001000.push(...data["textures/outside/castle_grounds_textures.01000.rgba16.png"])
    outside_09002000.push(...data["textures/outside/castle_grounds_textures.02000.rgba16.png"])
    outside_09003000.push(...data["textures/outside/castle_grounds_textures.03000.rgba16.png"])
    outside_09003800.push(...data["textures/outside/castle_grounds_textures.03800.rgba16.png"])
    outside_09004000.push(...data["textures/outside/castle_grounds_textures.04000.rgba16.png"])
    outside_09004800.push(...data["textures/outside/castle_grounds_textures.04800.rgba16.png"])
    outside_09005800.push(...data["textures/outside/castle_grounds_textures.05800.rgba16.png"])
    outside_09006000.push(...data["textures/outside/castle_grounds_textures.06000.rgba16.png"])
    outside_09006800.push(...data["textures/outside/castle_grounds_textures.06800.rgba16.png"])
    outside_09007800.push(...data["textures/outside/castle_grounds_textures.07800.rgba16.png"])
    outside_09008000.push(...data["textures/outside/castle_grounds_textures.08000.rgba16.png"])
    outside_09009000.push(...data["textures/outside/castle_grounds_textures.09000.rgba16.png"])
    outside_09009800.push(...data["textures/outside/castle_grounds_textures.09800.rgba16.png"])
    outside_0900A000.push(...data["textures/outside/castle_grounds_textures.0A000.rgba16.png"])
    outside_0900B000.push(...data["textures/outside/castle_grounds_textures.0B000.rgba16.png"])
    outside_0900B400.push(...data["textures/outside/castle_grounds_textures.0B400.rgba16.png"])
    outside_0900A800.push(...data["textures/outside/castle_grounds_textures.0A800.rgba16.png"])
    outside_09000800.push(...data["textures/outside/castle_grounds_textures.00800.rgba16.png"])
    outside_09008800.push(...data["textures/outside/castle_grounds_textures.08800.rgba16.png"])
    outside_0900BC00.push(...data["textures/outside/castle_grounds_textures.0BC00.ia16.png"])

    sky_09000000.push(...data["textures/sky/rr_textures.00000.rgba16.png"])
    sky_09000800.push(...data["textures/sky/rr_textures.00800.rgba16.png"])
    sky_09001000.push(...data["textures/sky/rr_textures.01000.rgba16.png"])
    sky_09001800.push(...data["textures/sky/rr_textures.01800.rgba16.png"])
    sky_09002000.push(...data["textures/sky/rr_textures.02000.rgba16.png"])
    sky_09003000.push(...data["textures/sky/rr_textures.03000.rgba16.png"])
    sky_09003800.push(...data["textures/sky/rr_textures.03800.rgba16.png"])
    sky_09004800.push(...data["textures/sky/rr_textures.04800.rgba16.png"])
    sky_09005000.push(...data["textures/sky/rr_textures.05000.rgba16.png"])
    sky_09005800.push(...data["textures/sky/rr_textures.05800.rgba16.png"])
    sky_09006000.push(...data["textures/sky/rr_textures.06000.rgba16.png"])
    sky_09007000.push(...data["textures/sky/rr_textures.07000.rgba16.png"])
    sky_09007800.push(...data["textures/sky/rr_textures.07800.rgba16.png"])
    sky_09008000.push(...data["textures/sky/rr_textures.08000.rgba16.png"])
    texture_metal_hole.push(...data["textures/sky/metal_hole.rgba16.png"])

    snow_09000000.push(...data["textures/snow/ccm_textures.00000.rgba16.png"])
    snow_09000800.push(...data["textures/snow/ccm_textures.00800.rgba16.png"])
    snow_09001000.push(...data["textures/snow/ccm_textures.01000.rgba16.png"])
    snow_09002000.push(...data["textures/snow/ccm_textures.02000.rgba16.png"])
    snow_09002800.push(...data["textures/snow/ccm_textures.02800.rgba16.png"])
    snow_09003000.push(...data["textures/snow/ccm_textures.03000.rgba16.png"])
    snow_09003800.push(...data["textures/snow/ccm_textures.03800.rgba16.png"])
    snow_09004000.push(...data["textures/snow/ccm_textures.04000.rgba16.png"])
    snow_09004800.push(...data["textures/snow/ccm_textures.04800.rgba16.png"])
    snow_09005000.push(...data["textures/snow/ccm_textures.05000.rgba16.png"])
    snow_09005800.push(...data["textures/snow/ccm_textures.05800.rgba16.png"])
    snow_09006000.push(...data["textures/snow/ccm_textures.06000.rgba16.png"])
    snow_09006800.push(...data["textures/snow/ccm_textures.06800.rgba16.png"])
    snow_09007000.push(...data["textures/snow/ccm_textures.07000.rgba16.png"])
    snow_09008000.push(...data["textures/snow/ccm_textures.08000.rgba16.png"])
    snow_09008800.push(...data["textures/snow/ccm_textures.08800.rgba16.png"])
    snow_09009000.push(...data["textures/snow/ccm_textures.09000.ia16.png"])
    snow_09009800.push(...data["textures/snow/ccm_textures.09800.ia16.png"])

    spooky_09000000.push(...data["textures/spooky/bbh_textures.00000.rgba16.png"])
    spooky_09000800.push(...data["textures/spooky/bbh_textures.00800.rgba16.png"])
    spooky_09001800.push(...data["textures/spooky/bbh_textures.01800.rgba16.png"])
    spooky_09002800.push(...data["textures/spooky/bbh_textures.02800.rgba16.png"])
    spooky_09003800.push(...data["textures/spooky/bbh_textures.03800.rgba16.png"])
    spooky_09004800.push(...data["textures/spooky/bbh_textures.04800.rgba16.png"])
    spooky_09005000.push(...data["textures/spooky/bbh_textures.05000.rgba16.png"])
    spooky_09006000.push(...data["textures/spooky/bbh_textures.06000.rgba16.png"])
    spooky_09006800.push(...data["textures/spooky/bbh_textures.06800.rgba16.png"])
    spooky_09007000.push(...data["textures/spooky/bbh_textures.07000.rgba16.png"])
    spooky_09008000.push(...data["textures/spooky/bbh_textures.08000.rgba16.png"])
    spooky_09008800.push(...data["textures/spooky/bbh_textures.08800.rgba16.png"])
    spooky_09009000.push(...data["textures/spooky/bbh_textures.09000.rgba16.png"])
    spooky_0900A000.push(...data["textures/spooky/bbh_textures.0A000.rgba16.png"])
    spooky_0900A800.push(...data["textures/spooky/bbh_textures.0A800.ia16.png"])
    spooky_0900B000.push(...data["textures/spooky/bbh_textures.0B000.ia16.png"])
    spooky_0900B800.push(...data["textures/spooky/bbh_textures.0B800.ia16.png"])

    water_09000000.push(...data["textures/water/jrb_textures.00000.rgba16.png"])
    water_09000800.push(...data["textures/water/jrb_textures.00800.rgba16.png"])
    water_09001800.push(...data["textures/water/jrb_textures.01800.rgba16.png"])
    water_09002800.push(...data["textures/water/jrb_textures.02800.rgba16.png"])
    water_09003800.push(...data["textures/water/jrb_textures.03800.rgba16.png"])
    water_09004800.push(...data["textures/water/jrb_textures.04800.rgba16.png"])
    water_09005800.push(...data["textures/water/jrb_textures.05800.rgba16.png"])
    water_09006000.push(...data["textures/water/jrb_textures.06000.rgba16.png"])
    water_09006800.push(...data["textures/water/jrb_textures.06800.rgba16.png"])
    water_09007800.push(...data["textures/water/jrb_textures.07800.rgba16.png"])
    water_09008800.push(...data["textures/water/jrb_textures.08800.rgba16.png"])
    water_09009000.push(...data["textures/water/jrb_textures.09000.rgba16.png"])
    water_0900A000.push(...data["textures/water/jrb_textures.0A000.rgba16.png"])
    water_0900A800.push(...data["textures/water/jrb_textures.0A800.rgba16.png"])
    water_0900B800.push(...data["textures/water/jrb_textures.0B800.rgba16.png"])

    const skyboxes = [
        [bbh_skybox_texture,         "bbh_skybox_texture"],
        [bidw_skybox_texture,        "bidw_skybox_texture"],
        [bitfs_skybox_texture,       "bitfs_skybox_texture"],
        [bits_skybox_texture,        "bits_skybox_texture"],
        [ccm_skybox_texture,         "ccm_skybox_texture"],
        [cloud_floor_skybox_texture, "cloud_floor_skybox_texture"],
        [clouds_skybox_texture,      "clouds_skybox_texture"],
        [ssl_skybox_texture,         "ssl_skybox_texture"],
        [water_skybox_texture,       "water_skybox_texture"],
        [wdw_skybox_texture,         "wdw_skybox_texture"],
    ]

    for (let s = 0; s < skyboxes.length; s++) {
        let sd = skyboxes[s][0], sn = skyboxes[s][1]
        for (let i = 0; i < 64; ++i) {
            let d = data[sn + "_" + ("00000" + i.toString(16).toUpperCase()).substr(-5)]
            if (d == null)
                break
            sd[i].push(...d)
        }
    }


    document.getElementById('romSelect').hidden = true
    msgElement.hidden = true
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
        IDB.set('assets', msgpack.encode(data))
        loadDataIntoGame(data)
    }
}

export const checkForRom = () => {   /// happens one time when the page is loaded
    return IDB.get('assets').then((msgdata) => {
        if (msgdata) {
            let data = msgpack.decode(msgdata)
            if (data.textureVersion == textureVersion) {
               loadDataIntoGame(data)
            } else {
               msgdata = null
            }
        }
        return !!msgdata
    })
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
    const assetsMio0 = {}
    const assetsBasic = []
    
    Object.entries(assets).forEach(([key, value]) => { 
        if (key == '@comment' ||
                key.startsWith('@sound') ||
                key.startsWith('sound/')) {  /// skip these
            return
        }

        if (value[3] == undefined) {
            if (value[1]['us'] == undefined) { /// non-US asset
                return
            }

            if (key.startsWith('textures/skyboxes/')) {
                const mio0 = value[1]['us'][0]
                if (assetsMio0[mio0] == undefined) {
                    assetsMio0[mio0] = []
                }
                assetsMio0[mio0].push({  /// needs Mio decode
                    name: key,
                    size: value[0],
                    offset: value[1]['us'][1],
                    skybox: true
                })
            }
        } else {
            if (value[3]['us'] == undefined) { /// non-US asset
                return
            }
            if (value[3]['us'].length == 2) {
                const mio0 = value[3]['us'][0]
                if (assetsMio0[mio0] == undefined) {
                    assetsMio0[mio0] = []
                }
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
        }
    })


    ////// process basic assets
    assetsBasic.forEach(asset => {
        extractedData[asset.name] = Buffer.from(romBufferData.slice(asset.offset, asset.offset + asset.size))
    })

    /////// process Mio0 assets
    Object.entries(assetsMio0).forEach(([mio0, assetSublist]) => {
        const decoded_bytes = mio0_decode(romBufferData.slice(mio0))
        assetSublist.forEach(asset => {
            if (asset.skybox) {
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

document.getElementById('romSelect').addEventListener('submit', (e) => {
    e.preventDefault()
    if (loadedGameAssets) return
    const romFile = document.getElementById('romFile').files[0]
    const reader = new FileReader()
    reader.readAsArrayBuffer(romFile)
    reader.onload = (evt) => { extractAssetsFromRom(evt.target.result) }
})

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
