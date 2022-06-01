import { level_script_entry } from "../levels/main_entry/entry"
import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { SurfaceLoadInstance as SurfaceLoad } from "./SurfaceLoad"
import { ObjectListProcessorInstance as ObjectListProcessor } from "./ObjectListProcessor" 
import { level_main_scripts_entry } from "../levels/scripts"
import * as Mario from "./Mario"
import { networkData, submitPlayerName } from "../mmo/socket"
import { loadSocket } from "../index"
import * as Gbi from "../include/gbi"
import { AreaInstance as Area, WARP_TRANSITION_FADE_INTO_COLOR } from "./Area"
import { flagObjects } from "./behaviors/bhv_castle_flag_init.inc"
import { LEVEL_CCM, LEVEL_SL } from "../levels/level_defines_constants"

class Game {
    constructor() {
        this.main_loop_init() /// thread5_game_loop_init
		this.pvpEnabled = true;
    }
	
    load_pvp() { // Used for PvP toggle.
        this.pvpEnabled = window.pvp
    }

    attachInterfaceToGfxProcessor(func) {
        this.send_display_list = func
    }

    main_loop_init() {

        //setup_game_memory();

        //init_controllers();

        //save_file_load_all();

        //set_vblank_handler(2, &gGameVblankHandler, &gGameVblankQueue, (OSMesg) 1);

        // point levelCommandAddr to the entry point into the level script data.
        LevelCommands.start_new_script(level_script_entry)

        //play_music(SEQ_PLAYER_SFX, SEQUENCE_ARGS(0, SEQ_SOUND_PLAYER), 0);
        //set_sound_mode(save_file_get_sound_mode());

    }

    main_loop_one_iteration() {

        ///Read Data from Controllers

        // Audio game loop Tick

        this.config_gfx_pool()

        // process controller inputs

        LevelCommands.level_script_execute()

        this.display_and_vsync()

    }

    create_task_structure() {
        ////Seems may not be necessary for JS, not creating a task, just sending DisplayList
    }

    end_master_display_list() {
        Gbi.gSPEndDisplayList(this.gDisplayList)
        this.create_task_structure()
    }

    config_gfx_pool() {
        /// some stuff with gfx pools tasks, display lists, probably not necessary for JS
        this.gDisplayList = []
    }

    rsp_init() {
        Gbi.gSPClearGeometryMode(this.gDisplayList, Gbi.G_SHADE | Gbi.G_SHADING_SMOOTH | Gbi.G_CULL_BOTH | Gbi.G_FOG | Gbi.G_LIGHTING | Gbi.G_TEXTURE_GEN | Gbi.G_TEXTURE_GEN_LINEAR | Gbi.G_LOD)
        Gbi.gSPSetGeometryMode(this.gDisplayList, Gbi.G_SHADE | Gbi.G_SHADING_SMOOTH | Gbi.G_CULL_BACK | Gbi.G_LIGHTING)
        Gbi.gSPNumLights(this.gDisplayList, 1)
        Gbi.gSPTexture(this.gDisplayList, 0, 0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF)
    }

    rdp_init() {
        Gbi.gDPSetCombineMode(this.gDisplayList, Gbi.G_CC_SHADE)
        Gbi.gDPSetTextureFilter(this.gDisplayList, window.sm64js.filter)
        Gbi.gDPSetRenderMode(this.gDisplayList, Gbi.G_RM_OPA_SURF_SURF2);
        Gbi.gDPSetCycleType(this.gDisplayList, Gbi.G_CYC_FILL)
    }

    init_render_image() {
        this.rsp_init()
        this.rdp_init()
    }

    display_and_vsync() {
        this.send_display_list(this.gDisplayList)
        if (this.D_8032C6A0_vsyncFunc) {
            this.D_8032C6A0_vsyncFunc.call(this.D_8032C6A0_classObject)
            this.D_8032C6A0_vsyncFunc = null
        }
        window.sm64js.gGlobalTimer++
    }
}

let warping = false
export { warping }
window.warp_to = (id) => {
    if (!window.playerNameAccepted || !LevelUpdate.gLevelLoaded) return

    Area.play_transition(WARP_TRANSITION_FADE_INTO_COLOR, 30, 255, 255, 255)
    setTimeout(() => {
        LevelCommands.reset_call_loop()
        LevelCommands.unload_area(1)
        LevelCommands.set_register(id)
        ObjectListProcessor.clear_objects()
        SurfaceLoad.gSurfacesAllocated = 0
        SurfaceLoad.gSurfaceNodesAllocated = 0
        SurfaceLoad.gNumStaticSurfaceNodes = 0
        SurfaceLoad.gNumStaticSurfaces = 0
        SurfaceLoad.gStaticSurfacePartition = new Array(16).fill(0).map(() => new Array(16).fill(0).map(() => new Array(3).fill(0).map(() => new Object())))
        SurfaceLoad.gDynamicSurfacePartition = new Array(32).fill(0).map(() => new Array(32).fill(0).map(() => new Array(3).fill(0).map(() => new Object())))
        flagObjects.shift() // this probably isn't a good idea
        flagObjects.shift()
        flagObjects.shift()
        flagObjects.shift()
        Area.clear_areas()
	ObjectListProcessor.gEnvironmentRegions = null
        LevelCommands.execute(level_main_scripts_entry)
        ObjectListProcessor.totalMarios = 0
        networkData.requestedInitData = false
        Mario.set_mario_action(LevelUpdate.gMarioState, Mario.ACT_IDLE, 0)
        loadSocket()
        warping = true
        setTimeout(() => {
            submitPlayerName()
            warping = false
        }, window.sm64js.latency * 50)
	if (id != LEVEL_CCM || id != LEVEL_SL) { window.sm64js.snow = false }
        // window.selectedMap = id
    }, 1000)
}

export const GameInstance = new Game()
