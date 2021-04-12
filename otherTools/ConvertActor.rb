#!/usr/bin/env ruby

# ruby ConvertActor.rb <sm64 actor dir> <sm64js dir>

require('pathname')
require('fileutils')

class ConvertActor
    def initialize(c_root, js_root, actor)
        @c_root = c_root
        @js_root = js_root
        @actor = actor
        @ts = "\n// #{File.mtime(__FILE__).to_i} - #{Time.now}"
        FileUtils.mkdir_p(@js_root + "/actors/#{@actor}")
    end

    def convert
        convert_model
        convert_geo
    end

    def imports_wrap(imports, from, items_list)
        imports.push("import {")
        if !items_list[0].is_a?(Array)  # [[list], ...]
            items_list = [items_list]
        end
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
            imports.push(t + ",")
        end
        imports[-1].delete_suffix!(",")
        imports.push("} from '#{from}'")
    end

    def convert_model
        header = []
        imports = []
        @model = []
        @cmds = []
        @cons = []

        @lines = File.read(@c_root + "/actors/#{@actor}/model.inc.c").lines.to_a
        @n = 0
        while (@n < @lines.length)
            if @lines[@n] =~ / Lights1 /
                cv_Lights1
            elsif @lines[@n] =~ / Texture /
                cv_Texture
            elsif @lines[@n] =~ / Vtx /
                cv_Vtx
            elsif @lines[@n] =~ / Gfx /
                cv_Gfx
            else
                l = @lines[@n].chomp
                if l != "" && header.empty?
                    header.push(l)
                else
                    @model.push(l)
                end
            end
            @n += 1
        end

        imports_wrap(imports, "../../include/gbi", [@cmds.uniq, @cons.uniq])

        out = [header, "", imports, @model, @ts].join("\n")
        File.open(@js_root + "/src/actors/#{@actor}/model.inc.js", "w") {|f| f.puts(out)}
    end

    def cv_Lights1
        @cmds.push("gdSPDefLights1")

        while true
            line = @lines[@n]
            if line =~ /(static )*const Lights1 (\w+)/   # static const Lights1 cannon_barrel_seg8_lights_08005878 = gdSPDefLights1(
                export = $1 ? "" : "export "
                @model.push("#{export}const #{$2} = gdSPDefLights1(")

            elsif line =~ /^\);/                            # };
                @model.push(")")
                break

            else
                @model.push(line.chomp)                     # 0x4c, 0x4c, 0x4c,
            end
            @n += 1
        end
    end

    def cv_Texture
        while true
            line = @lines[@n]
            if line =~ /const Texture (\w+)/    # ALIGNED8 static const Texture cannon_barrel_seg8_texture_080058A8[] = {
                name = $1

            elsif line =~ /#include (.+)/       # #include "actors/cannon_barrel/cannon_barrel.rgba16.inc.c"
                inc = $1

            elsif line =~ /^\};/                # };
                @model.push("export const #{name} = []  // #{inc}")
                break
            end
            @n += 1
        end
    end

    # {{{   -22,   1201,   -234}, 0, {   672,    994}, {0xc5, 0x6a, 0xdd, 0xff}}},

    def cv_Vtx
        while true
            line = @lines[@n]
            if line =~ /(static )*const Vtx (\w+)/  # static const Vtx cannon_barrel_seg8_vertex_080060A8[] = {
                export = $1 ? "" : "export "
                @model.push("#{export}const #{$2} = [")

            elsif line =~ /{{{(.+?)}, (.+?), {(.+?)}, {(.+?)}/     #     {{{   -40,    236,     41}, 0, {   176,    748}, {0x45, 0x5d, 0xcd, 0xff}}},
                @model.push("    [[#{$1}], #{$2}, [#{$3}], [#{$4}]],")
                # @model.push("    {pos: [#{$1}], flag: #{$2}, tc: [#{$3}], color: [#{$4}]},")

            elsif line =~ /^\};/                    # };
                @model.push("]")
                break
            end
            @n += 1
        end
    end

    # @@skipCommands = [
    #     'gsDPPipeSync',
    #     'gsDPLoadSync',
    #     'gsDPTileSync',
    #     'gsDPSetAlpha',
    #     "gsSPPerspNormalize",
    #     'gDPPipeSync',
    #     'gDPLoadSync',
    #     'gDPTileSync',
    #     'gDPSetAlpha',
    #     'gSPPerspNormalize',
    #     'gsDPSetDepthSource'
    # ]

    # @@renderModes = {
    #     "G_RM_OPA_SURF,G_RM_OPA_SURF2" => "G_RM_OPA_SURF_SURF2",
    #     "G_RM_AA_OPA_SURF,G_RM_AA_OPA_SURF2" => "G_RM_AA_OPA_SURF_SURF2",
    #     "G_RM_AA_XLU_SURF,G_RM_AA_XLU_SURF2" => "G_RM_AA_XLU_SURF_SURF2",
    #     "G_RM_ZB_OPA_SURF,G_RM_ZB_OPA_SURF2" => "G_RM_ZB_OPA_SURF_SURF2",
    #     "G_RM_AA_ZB_TEX_EDGE,G_RM_NOOP2" => "G_RM_AA_ZB_TEX_EDGE_NOOP2",
    #     "G_RM_AA_ZB_OPA_INTER,G_RM_NOOP2" => "G_RM_AA_ZB_OPA_INTER_NOOP2",
    #     "G_RM_AA_ZB_XLU_DECAL,G_RM_AA_ZB_XLU_DECAL2" => "G_RM_AA_ZB_XLU_DECAL_DECAL2",
    #     "G_RM_AA_ZB_XLU_SURF,G_RM_AA_ZB_XLU_SURF2" => "G_RM_AA_ZB_XLU_SURF_SURF2",
    #     "G_RM_AA_ZB_XLU_SURF,G_RM_NOOP2" => "G_RM_AA_ZB_XLU_SURF_NOOP2",
    #     "G_RM_AA_ZB_OPA_SURF,G_RM_AA_ZB_OPA_SURF2" => "G_RM_AA_ZB_OPA_SURF_SURF2",
    #     "G_RM_AA_ZB_OPA_DECAL,G_RM_AA_ZB_OPA_DECAL2" => "G_RM_AA_ZB_OPA_DECAL_DECAL2",
    #     "G_RM_AA_ZB_XLU_INTER,G_RM_AA_ZB_XLU_INTER2" => "G_RM_AA_ZB_XLU_INTER_INTER2",
    #     "G_RM_FOG_SHADE_A,G_RM_AA_ZB_OPA_SURF2" => "G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2",
    #     "G_RM_FOG_SHADE_A,G_RM_AA_ZB_TEX_EDGE2" => "G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2",
    #     "G_RM_FOG_SHADE_A,G_RM_AA_ZB_OPA_DECAL2" => "G_RM_FOG_SHADE_A_AA_ZB_OPA_DECAL2",
    #     "G_RM_FOG_SHADE_A,G_RM_AA_ZB_XLU_SURF2" => "G_RM_FOG_SHADE_A_AA_ZB_XLU_SURF2",
    #     "G_RM_AA_ZB_OPA_SURF,G_RM_NOOP2" => "G_RM_AA_ZB_OPA_SURF_NOOP2",
    #     "G_RM_AA_ZB_OPA_DECAL,G_RM_NOOP2" => "G_RM_AA_ZB_OPA_DECAL_NOOP2",
    # }

    def cv_Gfx
        while true
            line = @lines[@n]
            if line =~ /(static )*const Gfx (\w+)/   # const Gfx cannon_barrel_seg8_dl_08006408[] = {
                export = $1 ? "" : "export "
                @model.push("#{export}const #{$2} = [")

            elsif line =~ /(\w+)\((.*)\),/
                cmd, args = $1, $2
                # if @@skipCommands.include?(cmd)
                #     @n += 1
                #     next
                # end

                @cmds.push(cmd)

                case cmd
                # when "gsSPLight"
                #     args.gsub!(/\.l/, ".l[0]")
                # when "gsDPSetRenderMode"    # gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
                #     args = @@renderModes[args.gsub(/ /, "")]
                # when "gsSP2Triangles", "gsDPLoadTexture"
                #     cmd = "...#{cmd}"
                when "gsDPLoadBlock"        # gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
                    @cons.push("CALC_DXT")
                end

                @cons += args.scan(/(^|[^A-Z])(G_\w+)/).collect {|m| m[1]}
                args.gsub!(/&/, "")

                @model.push("    #{cmd}(#{args}),")

            elsif line =~ /^\};/                # };
                @model.push("].filter((obj) => obj).flat()")
                break
            end
            @n += 1
        end
    end


    def convert_geo
        header = []
        imports = []

        @geo = []
        @mods = []
        @cmds = []
        @cons = []
        cons2 = []

        @lines = File.read(@c_root + "/actors/#{@actor}/geo.inc.c").lines.to_a
        @n = 0
        while (@n < @lines.length)
            if @lines[@n] =~ / GeoLayout /
                cv_GeoLayout
            else
                @geo.push(@lines[@n].chomp)
            end
            @n += 1
        end

        a = @actor.split('_').collect(&:capitalize).join(' ')
        header.push("// #{a}")

        geolayout_path = "../../engine/GeoLayout"
        shadow_path = "../../game/Shadow"

        overrides = {
            shadow_path => ["SHADOW_CIRCLE_4_VERTS"]
        }

        @cons = @cons.uniq.group_by do |con|
            o = overrides.find {|p, f| f.include?(con)}
            o ? o[0] : geolayout_path
        end

        imports_wrap(imports, geolayout_path, [@cmds.uniq, @cons[geolayout_path]])
        imports.push("")
        if @cons[shadow_path]
            imports_wrap(imports, shadow_path, @cons[shadow_path])
            imports.push("")
        end
        imports_wrap(imports, "./model.inc", @mods.uniq)

        out = [header, "", imports, "", @geo, @ts].join("\n")
        File.open(@js_root + "/src/actors/#{@actor}/geo.inc.js", "w") {|f| f.puts(out)}
    end

    def cv_GeoLayout
        while true
            line = @lines[@n]
            if line =~ /const GeoLayout (\w+)/        # const GeoLayout mad_piano_geo[] = {
                @geo.push("export const #{$1} = [")
            elsif line =~ /^(\s*)(\w+)\((.*)\),(.*)$/           #    GEO_SCALE(0x00, 16384),
                cmd, args, xtra = $~[2..4]
                tabs = "    " * ($1.length / 3)
                @cmds.push(cmd)
                if args.length > 0
                    args = args.split(",").collect do |arg|
                        arg.strip!
                        arg.gsub!("NULL", "null")               # NULL
                        if arg =~ /^(#{@actor}\w+)/             # dorrie_seg6_dl_0600CFD0
                            @mods.push($1)
                        end
                        if arg =~ /^([A-Z][A-Z_0-9]+)/          # LAYER_OPAQUE
                            @cons.push($1)
                        end
                        arg  # result
                    end.join(", ")
                end
                @geo.push("#{tabs}#{cmd}(#{args}),#{xtra}")
            elsif line =~ /^\};/                                # };
                @geo.push("]")
                break
            end
            @n += 1
        end
    end

end


begin
    c_root = ARGV[0]
    js_root = ARGV[1]
    actor = ARGV[2]

    raise "help" if !actor

    c_root = Pathname.new(c_root).realpath
    js_root = Pathname.new(js_root).realpath

    while !c_root.basename.to_s.start_with?("sm64")
        raise "help" if c_root.to_s == "/"
        c_root = c_root.parent
    end

    while !js_root.basename.to_s.start_with?("sm64")
        raise "help" if js_root.to_s == "/"
        js_root = js_root.parent
    end

    c_root = c_root.realpath.to_s
    js_root = js_root.realpath.to_s

    raise "help" if !Dir.exist?(c_root + "/actors/#{actor}")

    ConvertActor.new(c_root, js_root, actor).convert

rescue
    if $!.message == "help"
        puts "usage: ConvertActor.rb <sm64-C-root> <sm64js-root> <actor>"
    else
        puts "error: #{$!.inspect}"
        puts $!.backtrace
    end
    exit(1)
end
