#!/usr/bin/env ruby

require('pathname')
require('fileutils')

MANUALLY_MODIFIED = %w[amp bowling_ball bowser_key chuckya number sparkle_animation bob]

class Convert
    def initialize(c_root, js_root, entity_is, entity, entity_type)
        @c_root = c_root
        @js_root = js_root
        @entity = entity
        @entity_is = entity_is
        @entity_type = entity_type && entity_type.to_sym
        @dirstack = []
        @ts = "\n// #{Time.now} (Convert.rb #{File.mtime(__FILE__)})"
    end

    def convert
        if @entity_is == :file || @entity_is == :dir
            if @entity_is == :file
                dir = File.dirname(@entity)
                @c_dir  = "#{@c_root}/#{dir}"
                @js_dir = "#{@js_root}/#{dir}"
                fn = File.basename(@entity)
            else
                @c_dir  = "#{@c_root}/#{@entity}"
                @js_dir = "#{@js_root}/#{@entity}"
            end

            if @entity =~ %r[actors/(.+?)(/|$)]
                @entity = $1
                @entity_is = :actor
                @entity_dir = "#{@js_root}/actors/#{@entity}"

            elsif @entity =~ %r[levels/(.+?)(/|$)]
                @entity = $1
                @entity_is = :level
                @entity_dir = "#{@js_root}/levels/#{@entity}"

            elsif @entity_is == :dir && @entity == "assets"  # mario's anims
                @entity = "mario"
                @entity_dir = "#{@js_root}/actors/mario"                
                @js_dir = @entity_dir

            else
                @entity_dir = nil
            end

            @depth = @entity.split("/").length - 1
            set_title
            if @entity_is == :dir
                convert_dir
            else
                convert_file(fn)
            end

        else
            @entity_type = nil
            if @entity_is == :actor
                @c_dir  = "#{@c_root}/actors/#{@entity}"
                @js_dir = "#{@js_root}/actors/#{@entity}"

            elsif @entity_is == :level
                @c_dir  = "#{@c_root}/levels/#{@entity}"
                @js_dir = "#{@js_root}/levels/#{@entity}"
            end

            @entity_dir = @js_dir
            @depth = 2
            set_title
            convert_dir
        end
    end

    def set_title
        @title = "// " + @entity.split('_').collect(&:capitalize).join(' ')
    end

    def convert_dir(dir = nil)
        @dirstack.push([@c_dir, @js_dir])

        if dir
            @c_dir  += "/#{dir}"
            @js_dir += "/#{dir}"
        end

# puts "convert #{@c_dir} -> #{@js_dir}"

        Dir.glob(@c_dir + "/*") do |f|
            fn = File.basename(f)
            if File.directory?(f)
                convert_dir(fn)
                if fn == "anims"
                    post_process_anims_dir2
                end
            else
                FileUtils.mkdir_p(@js_dir)
                convert_file(fn)
            end
        end

        if dir == "anims"
            post_process_anims_dir1
        end

        @c_dir, @js_dir = @dirstack.pop
    end

    def convert_file(fn)
        if @entity_type
            file_type = @entity_type
        else
            file_type = case fn
                when /^anim_.+\.inc\.c/ then :anim
                when "anim.inc.c"       then :anim
                when "collision.inc.c"  then :collision
                when "geo.inc.c"        then :geo
                when "geo.c"            then :geo
                when "macro.inc.c"      then :macro
                when "model.inc.c"      then :model
                when "leveldata.c"      then :model
                when "1.inc.c"          then :model
                when "2.inc.c"          then :model
                when "3.inc.c"          then :model
                when "movtext.inc.c"    then :movtext
                when "script.c"         then :script
                when "table.inc.c"      then :table
                when "texture.inc.c"    then :texture
                when "trajectory.inc.c" then :trajectory
                else
                    :unk
            end
        end

        case file_type
            when :anim then convert_anim(fn)
            when :collision then convert_collision(fn)
            when :geo then convert_geo(fn)
            when :macro then convert_macro(fn)
            when :model then convert_model(fn)
            when :movtext then convert_movtext(fn)
            when :script then convert_script(fn)
            when :table then convert_table(fn)
            when :texture then convert_texture(fn)
            when :trajectory then convert_trajectory(fn)
            when :unk
            else
                raise "help"
        end
    end


    # ---------------------------------------------------------------------------------------------------------

    def post_process_anims_dir1
        @text = []

        Dir.glob(@js_dir + "/anim*") do |f1|
            lines = File.read(f1)
            lines.gsub!(@title + "\n\n", '')
            lines.gsub!(/import.+types"\n\n/m, '')
            lines.gsub!(@ts, '')
            @text.push(lines)
        end

        lines = File.read(@js_dir + "/table.inc.js") rescue nil
        @text.push(lines) if lines

        out = @text.join
        File.open(@js_dir + "/anims.inc.js", "w") {|f| f.puts(out)}
    end

    def post_process_anims_dir2
        header = []
        imports = []

        @text = File.read(@js_dir + "/anims/anims.inc.js")

        header.push(@title)
        imports_wrap(imports, "include/types", ["ANIMINDEX_NUMPARTS"])

        out = [header, "", imports, "", @text, @ts].join("\n")
        File.open(@js_dir + "/anims.inc.js", "w") {|f| f.puts(out)}
        FileUtils.rm_r(@js_dir + "/anims")
    end

    def find_all_exports(paths, fnmatch, imps)
        [paths].flatten.compact.each do |p|
            find_all_exports_in_path(p, fnmatch).each do |exp, file|
                imps.push([/^(#{exp})/, file.delete_suffix(".js")])
            end
        end
    end

    def find_all_exports_in_path(path, fnmatch, list = nil)
        list ||= []
        if File.directory?(path)
            Dir.glob(path + "/*") do |f|
                find_all_exports_in_path(f, fnmatch, list)
            end
        elsif File.basename(path) =~ fnmatch
            if File.exist?(path)  # because it was an explicit path
                File.read(path).lines.each do |l|
                    if l =~ /export const (\w+)/
                        list.push([$1, path])
                    end
                end
            end
        end
        return list
    end

    # ---------------------------------------------------------------------------------------------------------

    def convert_anim(fn)
        header = []
        imports = []
        @anim_cons = []
        @text = []

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ / const s16 .*value/               then cv_animvalue
            elsif @lines[@n] =~ / const u16 .*ind/              then cv_animindex
            elsif @lines[@n] =~ / struct Animation .*anim_/     then cv_anim
            elsif @lines[@n] =~ / Animation \*const .+anims/    then cv_anims
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)

        @anim_cons.push("ANIMINDEX_NUMPARTS")
        imports_wrap(imports, "include/types", @anim_cons)

        out = [header, "", imports, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    def cv_animvalue
        while true
            line = @lines[@n]

            # static const s16 castle_grounds_seg7_animvalue_flags[] = {
            if line =~ /static const s16 (\w+)/
                @text.push("const #{$1} = [")

            # };
            elsif line =~ /^\};/
                @text.push("];")
                break

            #     -5723, -5177, -4309, -2785,  -812,  1339,  3401,  5102,  6174,  6692,  6939,  6952,  6769,  6428,  5967,  5423,
            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end

    def cv_animindex
        while true
            line = @lines[@n]

            # static const u16 castle_grounds_seg7_animindex_flags[] = {
            if line =~ /static const u16 (\w+)/
                @text.push("const #{$1} = [")

            # };
            elsif line =~ /^\};/
                @text.push("];")
                break

            #     0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0077,
            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end

    def cv_anim
        @anim_fields ||= %w[flags unk02 unk04 unk06 unk08 unk0A values indices ignore]
        while true
            line = @lines[@n]

            # static const struct Animation castle_grounds_seg7_anim_flags = {
            if line =~ /static const struct Animation (\w+)/
                @text.push("const #{$1} = {")
                f = 0

            # };
            elsif line =~ /^\};/
                @text.push("};")
                break

            # ANIMINDEX_NUMPARTS(castle_grounds_seg7_animindex_flags),
            else
                field = @anim_fields[f]
                value = line.strip.delete_suffix(",")
                @text.push("    #{field}: #{value},")
                f += 1
            end

            @n += 1
        end
    end

    def cv_anims
        while true
            line = @lines[@n]

            # const struct Animation *const castle_grounds_seg7_anims_flags[] = {
            if line =~ /const struct Animation \*const (\w+)/
                @text.push("export const #{$1} = [")

            #    &castle_grounds_seg7_anim_flags, // 0x0700C944
            elsif line =~ /\&(\w+),(.*)/                            
                @text.push("    #{$1},#{$2}")

            elsif line =~ /NULL,/
                # skip

            # };
            elsif line =~ /^\};/
                @text.push("];")
                break

            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end


    # ---------------------------------------------------------------------------------------------------------

    def convert_collision(fn)
        header = []
        imports = []
        @cmds = []
        @coll_cons = []
        @spcs = []
        @text = []

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ / Collision / then cv_collision
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)
        imports_wrap(imports, "include/surface_terrains", [@cmds.uniq, @coll_cons.uniq, @spcs.uniq])

        out = [header, "", imports, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    def cv_collision
        while true
            line = @lines[@n]

            # const Collision castle_grounds_seg7_collision_moat_grills[] = {
            if line =~ / Collision (\w+)/
                @text.push("export const #{$1} = [")

            # COL_TRI_INIT(SURFACE_FLOWING_WATER, 4),
            elsif line =~ /(\w+)\((.*)\),/
                cmd, args = $1, $2

                @cmds.push(cmd)
                @spcs += args.scan(/(special_\w+)/).collect {|m| m[0]}
                @coll_cons += args.scan(/(^| )([A-Z]\w+)/).collect {|m| m[1]}
                @text.push("    #{cmd}(#{args}),")

            # };
            elsif line =~ /^\};/
                @text.push("].flat();")
                break

            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end


   # ---------------------------------------------------------------------------------------------------------

    def find_all_models(list, path)
        list ||= []
        Dir.glob(path + "/*") do |f|
            if File.directory?(f)
                find_all_models(list, f)
            elsif File.basename(f) == "model.inc.js"
                File.read(f).lines.each do |l|
                    if l =~ /export const (\w+)/
                        list.push([$1, f])
                    end
                end
            end
        end
        return list
    end

    def convert_geo(fn)
        header = []
        imports = []

        @geo_cmds = []
        @geo_cons = {}
        @text = []

        @imps = [
            [/^(geo_skybox_\w+)/, "game/LevelGeo"],         # geo_skybox_main
            [/^(geo_envfx_\w+)/, "game/LevelGeo"],          # geo_envfx_main
            [/^(geo_camera_\w+)/, "game/Camera"],           # geo_camera_fov
            [/^(geo_movtex_\w+)/, "game/MovingTexture"],    # geo_movtex_draw_nocolor
            [/^(geo_\w+)/, "game/ObjectHelpers"],           # geo_switch_anim_state
            [/^(SHADOW_\w+)/, "game/Shadow"],               # SHADOW_CIRCLE_4_VERTS
            [/^(SCREEN_\w+)/, "game/Skybox"],               # SCREEN_WIDTH
            [/^([A-Z][A-Z_0-9]+)/, "engine/GeoLayout"],     # LAYER_OPAQUE
        ]

        if @entity_is == :actor
            @imps.push([/^(#{@entity}_\w+)/, @js_dir + "/model.inc"])  # dorrie_seg6_dl_0600CFD0

        else
            if @entity_dir
                find_all_models(nil, @entity_dir).each do |model, file|
                    @imps.push([/^(#{model})/, file.delete_suffix(".js")])
                end
            end
        end

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ / GeoLayout / then cv_GeoLayout
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)
        @geo_cons.each do |file, cons|
            if file == "engine/GeoLayout"
                imports_wrap(imports, file, [@geo_cmds.uniq, cons.uniq])
            else
                imports_wrap(imports, file, cons.uniq)
            end
            imports.push("")
        end

        out = [header, "", imports, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    def cv_GeoLayout
        while true
            line = @lines[@n]

            # const GeoLayout mad_piano_geo[] = {
            if line =~ /const GeoLayout (\w+)/
                @text.push("export const #{$1} = () => {return [")

            # GEO_SCALE(0x00, 16384),
            elsif line =~ /^(\s*)(\w+)\((.*)\),(.*)$/
                cmd, args, xtra = $~[2..4]
                tabs = "    " * ($1.length / 3)

                @geo_cmds.push(cmd)

                if args.length > 0
                    args = args.split(",").collect do |arg|
                        arg.strip!

                        if arg == "NULL"
                            arg = "null"
                        elsif (imp = @imps.find {|i| arg =~ i[0]})
                            arr = @geo_cons[imp[1]] ||= []
                            arr.push($1)
                        end

                        arg  # result
                    end.join(", ")
                end
                @text.push("#{tabs}#{cmd}(#{args}),#{xtra}")

            # };
            elsif line =~ /^\};/
                @text.push("]};")
                break
            end

            @n += 1
        end
    end

    # ---------------------------------------------------------------------------------------------------------

    def convert_script(fn)
        header = []
        imports = []

        @level_cmds = []
        @glinks = []
        @level_cons = {}
        @text = []

        @imps = [
            [/^(MODEL_\w+)/, "include/model_ids"],         # MODEL_BITDW_SQUARE_PLATFORM
            [/^(LEVEL_\w+)/, "levels/level_defines_constants"],         # LEVEL_BITDW
            [/^(WARP_\w+)/, "engine/LevelCommands"],         # WARP_NO_CHECKPOINT
            [/^(DIALOG_\d+)/, "text/us/dialogs"],          # DIALOG_090
            [/^(TERRAIN_\w+)/, "include/surface_terrains"],          # DIALOG_090
            [/^(SEQ_\w+)/, "include/seq_ids"],          # SEQ_LEVEL_KOOPA_ROAD
            [/^(script_func_global_\d+)/, "levels/global_scripts"],          # script_func_global_12
        ]
        find_all_exports(@entity_dir, /geo|collision|macro/, @imps)

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ /^#include /
                  # ignore
            elsif @lines[@n] =~ / LevelScript / then cv_LevelScript
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)

        imports_wrap(imports, "engine/LevelCommands", @level_cmds.uniq)
            imports.push("")
        @level_cons.each do |file, cons|
            imports_wrap(imports, file, cons.uniq)
            imports.push("")
        end

        if @glinks.length > 0
            @text.push("")
            @text.push("")
            @glinks.each do |g|
                @text.push("gLinker.level_scripts.#{g} = #{g}")
            end
        end

        out = [header, "", imports, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    IGNORE_LEVEL_COMMANDS = ["LOAD_MIO0", "LOAD_MIO0_TEXTURE", "LOAD_RAW", "ALLOC_LEVEL_POOL", "FREE_LEVEL_POOL"]

    def cv_LevelScript
        while true
            line = @lines[@n]

            if line =~ /(static )*const LevelScript (\w+)/
                if $1
                    export = ""
                else
                    export = "export "
                    @glinks.push($2)
                end
                @text.push("#{export}const #{$2} = [")

            # LOAD_MODEL_FROM_GEO(MODEL_LEVEL_GEOMETRY_03,       geo_bitdw_0003C0),
            elsif line =~ /^(\s*)(\w+)\((.*)\),(.*)$/
                cmd, args, xtra = $~[2..4]
                tabs = "    " * ($1.length / 3)

                if !IGNORE_LEVEL_COMMANDS.include?(cmd)
                    @level_cmds.push(cmd)

                    args = args.split(",").collect do |arg|
                        if arg =~ /(\s*\/\*.+\*\/\s*)/ || arg =~ /^(\s+)/
                            comment = $1
                            arg.gsub!(comment, '')
                        else
                            comment = ""
                        end
                        arg.strip!

                        if arg =~ /NULL/
                            arg.gsub!(/NULL/, "null")

                        # bhvMario -> 'bhvMario'
                        elsif arg =~ /bhv\w+/
                            arg.gsub!(/(bhv\w+)/, "'\\1'")

                        # any kind of import
                        elsif (imp = @imps.find {|i| arg =~ i[0]})
                            arr = @level_cons[imp[1]] ||= []
                            arr.push($1)
                        end

                        [comment, arg]  # result
                    end

                    case cmd
                    when "CALL", "CALL_LOOP"
                        a = args[1][1]
                        if a.start_with?('lvl')
                            a = "LevelUpdate.#{a}"
                        end
                        args[1][1] = "'#{a}'"
                    end

                    args = args.collect {|a| a[0] + a[1]}.join(", ")

                    @text.push("#{tabs}#{cmd}(#{args}),#{xtra}")
                end

            # };
            elsif line =~ /^\};/
                @text.push("];")
                break

            else
                @text.push(line.chomp)

            end

            @n += 1
        end
    end

    # ---------------------------------------------------------------------------------------------------------

    def convert_macro(fn)
        header = []
        imports = []
        @macr_cons = {}
        @macr_cmds = []
        @text = []

        @imps = [
            [/(DIALOG_\d+)/, "text/us/dialogs"],          # DIALOG_090
        ]

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ / MacroObject / then cv_MacroObject
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)
        imports_wrap(imports, "game/MacroSpecialObjects", @macr_cmds.uniq)

        @macr_cons.each do |file, cons|
            imports_wrap(imports, file, cons.uniq)
            imports.push("")
        end

        out = [header, "", imports, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    def cv_MacroObject
        while true
            line = @lines[@n]

            # const MacroObject castle_grounds_seg7_macro_objs[] = {
            if line =~ / MacroObject (\w+)/
                @text.push("export const #{$1} = [")

            # MACRO_OBJECT(/*preset*/ macro_hidden_1up_in_pole,  /*yaw*/   0, /*pos*/ -6270,   975, -2145),
            elsif line =~ /(\w+)\((.*)\),/
                cmd, args = $1, $2

                @macr_cmds.push(cmd)
                args = args.split(",")

                if args[0]
                    args[0].gsub!(/(macro_\w+)/, "'\\1'")  # macro_wooden_signpost -> 'macro_wooden_signpost'
                end

                if cmd == "MACRO_OBJECT_WITH_BEH_PARAM"
                    # any kind of import in beh
                    if (imp = @imps.find {|i| args[-1] =~ i[0]})
                        arr = @macr_cons[imp[1]] ||= []
                        arr.push($1)
                    end
                end

                args = args.join(",")
                @text.push("    #{cmd}(#{args}),")

            # };
            elsif line =~ /^\};/
                @text.push("];")
                break

            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end


    # ---------------------------------------------------------------------------------------------------------

    def convert_model(fn)
        header = []
        imports = []
        @trefs = []
        @texs = []
        @gbi_cmds = []
        @gbi_cons = []
        @text = []

        if !@model_texture_imps
            @model_texture_imps = []
            find_all_exports([
                @js_root + "/bin",
                @js_root + "/textures",
                @entity_dir + "/texture.inc.js"
            ], //, @model_texture_imps)
        end

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)
            if @lines[@n] =~ / Lights1 /    then cv_Lights1
            elsif @lines[@n] =~ / Texture / then cv_Texture
            elsif @lines[@n] =~ / Vtx /     then cv_Vtx
            elsif @lines[@n] =~ / Gfx /     then cv_Gfx
            elsif @lines[@n] =~ /UNUSED/    then cv_UNUSED
            else
                l = @lines[@n].chomp
                if l != "" && header.empty?
                    header.push(l)
                else
                    @text.push(l)
                end
            end
            @n += 1
        end

        # resolve texture references
        texture_imps = {}
        @trefs.each do |tref|
            if (imp = @model_texture_imps.find {|i| tref =~ i[0]})
                arr = texture_imps[imp[1]] ||= []
                arr.push($1)
            end
        end

        imports_wrap(imports, "include/gbi", [@gbi_cmds.uniq, @gbi_cons.uniq])

        texture_imps.each do |file, texs|
            imports_wrap(imports, file, texs.uniq)
            imports.push("")
        end

        # # they may be either be in "src/textures" or @entity_dir/texture.inc
        # if !@trefs.empty?
        #     @trefs = @trefs.group_by {|t| t[/(.+)_\w+$/, 1]}    # outside_09006800, castle_grounds_seg7_texture_07001000
        #     @trefs.each do |file, textures|
        #         if file.start_with?(@entity)                    # castle_grounds_seg7_texture_07001000
        #             imports_wrap(imports, "#{@entity_dir}/texture.inc", textures.uniq.sort)
        #         else
        #             imports_wrap(imports, "textures/#{file}", textures.uniq.sort)
        #         end
        #         imports.push("")
        #     end
        # end
        
        out = [header, "", imports, @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    def cv_UNUSED
        # ignore
    end

    def cv_Lights1
        @gbi_cmds.push("gdSPDefLights1")

        while true
            line = @lines[@n]

            # static const Lights1 cannon_barrel_seg8_lights_08005878 = gdSPDefLights1(
            if line =~ /(static )*const Lights1 (\w+)/
                export = $1 ? "" : "export "
                @text.push("#{export}const #{$2} = gdSPDefLights1(")

            # };
            elsif line =~ /^\);/
                @text.push(");")
                break

            # 0x4c, 0x4c, 0x4c,
            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end

    def cv_Texture
        while true
            line = @lines[@n]

            # ALIGNED8 static const Texture cannon_barrel_seg8_texture_080058A8[] = {
            if line =~ /const Texture (\w+)/
                @text.push("export const #{$1} = []")
                @texs.push($1) if @texs

            # #include "actors/cannon_barrel/cannon_barrel.rgba16.inc.c"
            elsif line =~ /#include "(.+)\.inc\.c"/
                @text.push("// #{$1}.png")

            # };
            elsif line =~ /^\};/
                break
            end

            @n += 1
        end
    end

    def cv_Vtx
        while true
            line = @lines[@n]

            # static const Vtx cannon_barrel_seg8_vertex_080060A8[] = {
            if line =~ /(static )*const Vtx (\w+)/
                export = $1 ? "" : "export "
                @text.push("#{export}const #{$2} = [")

            #     {{{   -40,    236,     41}, 0, {   176,    748}, {0x45, 0x5d, 0xcd, 0xff}}},
            elsif line =~ /{{{(.+?)}, (.+?), {(.+?)}, {(.+?)}/
                @text.push("    [[#{$1}], #{$2}, [#{$3}], [#{$4}]],")

            # };
            elsif line =~ /^\};/
                @text.push("];")
                break
            end

            @n += 1
        end
    end

    def cv_Gfx
        while true
            line = @lines[@n]

            # const Gfx cannon_barrel_seg8_dl_08006408[] = {
            if line =~ /(static )*const Gfx (\w+)/ 
                export = $1 ? "" : "export "
                @text.push("#{export}const #{$2} = [")

            # gsSPLight(&birds_seg5_lights_05000000.l, 1),
            elsif line =~ /(\w+)\((.*)\),/
                cmd, args = $1, $2

                @gbi_cmds.push(cmd)

                case cmd
                # gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
                when "gsDPLoadBlock"
                    @gbi_cons.push("CALC_DXT")

                # gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, outside_09000000),
                when "gsDPSetTextureImage"
                    t = args.split(",").last.strip  # outside_09000000
                    if !@texs.include?(t)
                        @trefs.push(t)  # needs to be imported
                    end

                # gsSPNumLights(NUMLIGHTS_1),
                when "gsSPNumLights"
                    @gbi_cons.push(args)

                # gsSPLight(&birds_seg5_lights_05000000.l, 1),
                when "gsSPLight"
                    args.gsub!(/&/, "")
                end

                # collect G_ constants
                @gbi_cons += args.scan(/(^|[^A-Z])(G_\w+)/).collect {|m| m[1]}

                @text.push("    #{cmd}(#{args}),")

            elsif line =~ /^\};/                # };
                @text.push("].flat();")
                break
            end

            @n += 1
        end
    end


    # ---------------------------------------------------------------------------------------------------------

    def convert_movtext(fn)
        header = []
        imports = []
        @mov_cmds = []
        @mov_cons = []
        @gbi_cmds = []
        @gbi_cons = []
        @text = []

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ /(^| )Movtex /              then cv_Movtex
            elsif @lines[@n] =~ / MovtexQuadCollection / then cv_MovtexQuadCollection
            elsif @lines[@n] =~ / Gfx /                  then cv_Gfx
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)
        imports_wrap(imports, "include/gbi", [@gbi_cmds.uniq, @gbi_cons.uniq])
        imports.push("")
        imports_wrap(imports, "include/moving_texture_macros", [@mov_cmds.uniq, @mov_cons.uniq])

        out = [header, "", imports, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    def cv_Movtex
        while true
            line = @lines[@n]

            # static Movtex castle_grounds_movtex_moat_water_data[] = {
            if line =~ /static Movtex (\w+)/
                @text.push("const #{$1} = [")

            # Movtex castle_grounds_movtex_tris_waterfall[] = {
            elsif line =~ /^Movtex (\w+)/
                @text.push("export const #{$1} = [")

            # MOV_TEX_4_BOX_TRIS(-7129, -7222),
            elsif line =~ /(\w+)\((.*)\),/
                cmd, args = $1, $2

                @mov_cmds.push(cmd)
                @mov_cons += args.scan(/(^| )([A-Z]\w+)/).collect {|m| m[1]}
                @text.push("    #{cmd}(#{args}),")

            # };
            elsif line =~ /^\};/
                @text.push("].flat();")
                break

            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end

    def cv_MovtexQuadCollection
        while true
            line = @lines[@n]

            # const struct MovtexQuadCollection castle_grounds_movtex_water[] = {
            if line =~ /struct MovtexQuadCollection (\w+)/
                @text.push("export const #{$1} = [")

            # {0, castle_grounds_movtex_moat_water_data},
            elsif line =~ /\{(.+), (.+)\}/
                id, movtex = $1, $2
                movtex.gsub!("NULL", "null")
                @text.push("    {id: #{id}, movtex: #{movtex}},")

            # };
            elsif line =~ /^\};/
                @text.push("];")
                break

            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end


    # ---------------------------------------------------------------------------------------------------------

    def convert_table(fn)
        @text = []

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ / Animation \*const .+_anims_/  then cv_anims
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(@text)}
    end


 # ---------------------------------------------------------------------------------------------------------

    def convert_texture(fn)
        header = []
        @text = []

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ / Texture / then cv_Texture
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)

        out = [header, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end


    # ---------------------------------------------------------------------------------------------------------

    def convert_trajectory(fn)
        header = []
        imports = []
        @cmds = []
        @text = []

        @lines = File.read(@c_dir + "/" + fn).lines.to_a
        @n = 0
        while (@n < @lines.length)

            if @lines[@n] =~ / Trajectory / then cv_Trajectory
            else
                @text.push(@lines[@n].chomp)
            end

            @n += 1
        end

        header.push(@title)
        imports_wrap(imports, "include/surface_terrains", @cmds.uniq)

        out = [header, "", imports, "", @text, @ts].join("\n")
        jsfn = fn.delete_suffix(".c") + ".js"
        File.open(@js_dir + "/" + jsfn, "w") {|f| f.puts(out)}
    end

    def cv_Trajectory
        while true
            line = @lines[@n]

            # const Trajectory bitfs_seg7_trajectory_070159AC[] = {
            if line =~ / Trajectory (\w+)/
                @text.push("export const #{$1} = [")

            # TRAJECTORY_POS(0, /*pos*/ -5744, -3072,     0),
            elsif line =~ /(\w+)\((.*)\),/
                cmd, args = $1, $2

                @cmds.push(cmd)
                @text.push("    #{cmd}(#{args}),")

            # };
            elsif line =~ /^\};/
                @text.push("]")
                break

            else
                @text.push(line.chomp)
            end

            @n += 1
        end
    end


    # ---------------------------------------------------------------------------------------------------------

    def relative_path(from, to)
        from_elements = from.split('/')
        to_elements   = to.split('/')
        while from_elements.first == to_elements.first
            from_elements.shift
            to_elements.shift
        end
        return "../" * from_elements.length + to_elements.join("/")
    end

    def relative_import(to)
        if !to.start_with?("/")
            to = @js_root + "/" + to
        end
        rel = relative_path(@js_dir, to)
        rel = "./" + rel if !rel.start_with?(".")  # import needs this
        return '"' + rel + '"'
    end

    def imports_wrap(imports, from, items_list)
        if !items_list[0].is_a?(Array)  # [[list], ...]
            items_list = [items_list]
        end
        if items_list.length == 1 && items_list[0].length == 1
            imports.push("import { #{items_list[0][0]} } from #{relative_import(from)}")
        else
            imports.push("import {")
            items_list.each do |items|
                next if !items  # may be nil
                t = nil
                while !items.empty?
                    if !t
                        t = "    #{items.shift}"
                    elsif t.length + items.first.length <= 95
                        t += ", #{items.shift}"
                    else
                        imports.push(t + ",")
                        t = nil
                    end
                end
                imports.push(t + ",") if t
            end
            imports[-1].delete_suffix!(",")
            imports.push("} from #{relative_import(from)}")
        end
    end

end


begin
    if ARGV.delete("-a")
        entity_is = :actor
    elsif ARGV.delete("-l")
        entity_is = :level
    else
        entity_is = :path
        if (i = ARGV.index("-t"))
            ARGV.delete("-t")
            entity_type = ARGV.delete_at(i)
        end
    end

    c_root = ARGV[0]
    js_root = ARGV[1]
    entity = ARGV[2]

    raise "help" if !entity


    c_root = Pathname.new(c_root).realpath
    js_root = Pathname.new(js_root).realpath

    while !c_root.to_s.end_with?("/sm64-master")
        raise "help" if c_root.to_s == "/"
        c_root = c_root.parent.realpath
    end

    while !js_root.to_s.end_with?("/sm64js/src")
        raise "help" if js_root.to_s == "/"
        js_root = js_root.parent.realpath
    end

    c_root = c_root.to_s
    js_root = js_root.to_s

    if entity_is == :path
        entity = Pathname.new(entity).realpath.to_s
        raise "help" if !File.exist?(entity)

        entity_is = File.directory?(entity) ? :dir : :file
        if entity.start_with?(c_root)
            entity = entity.delete_prefix(c_root + "/")
        elsif entity.start_with?(js_root)
            entity = entity.delete_prefix(js_root + "/")
        else
            raise "help"
        end
    else
        raise "help" if entity_is == :actor && !Dir.exist?(c_root + "/actors/#{entity}")
        raise "help" if entity_is == :level && !Dir.exist?(c_root + "/levels/#{entity}")
    end

    if MANUALLY_MODIFIED.include?(entity)
        if !ARGV.delete("-f")
            puts "This entity contains manual modifications! Use -f to convert."
            raise "exit"
        end
    end

    Convert.new(c_root, js_root, entity_is, entity, entity_type).convert

rescue
    if $!.message == "help"
        puts "usage: Convert.rb <sm64-root> <sm64js-root> [-a <actor> | -l <level> | -t <type> <file>]"
        puts "<actor> and <level> are directory names like <chain_chomp> and <rr>"
        puts "<type> is anim, collision, geo, macro, model, movtext, table, texture, or trajectory"
        puts $!.backtrace

    elsif $!.message == "exit"
    else
        puts "error: #{$!.inspect}"
        puts $!.backtrace
    end
    exit(1)
end
