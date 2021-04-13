#!/usr/bin/env ruby

require('pathname')
require('fileutils')

class Convert
    def initialize(c_root, js_root, entity_is, entity)
        @c_root = c_root
        @js_root = js_root
        @entity = entity
        @entity_is = entity_is
        @title = "// " + @entity.split('_').collect(&:capitalize).join(' ')
        @dirstack = []
        @ts = "\n// #{File.mtime(__FILE__).to_i} - #{Time.now}"
    end

    def convert
        if @entity_is == :actor
            @c_dir  = "#{@c_root}/actors/#{@entity}"
            @js_dir = "#{@js_root}/src/actors/#{@entity}"

        elsif @entity_is == :level
            @c_dir  = "#{@c_root}/levels/#{@entity}"
            @js_dir = "#{@js_root}/src/levels/#{@entity}"
        end

        @entity_dir = @js_dir
        @depth = 2
        convert_dir
    end

    def convert_dir(f = nil)
        @dirstack.push([@c_dir, @js_dir])

        if f
            @c_dir  += "/#{f}"
            @js_dir += "/#{f}"
        end

        Dir.glob(@c_dir + "/*") do |f1|
            bn = File.basename(f1)
            if File.directory?(f1)
                convert_dir(bn)
            else
                FileUtils.mkdir_p(@js_dir)
                case bn
                # when "collision.inc.c"  then convert_collision
                when "geo.inc.c"        then convert_geo
                # when "macro.inc.c"      then convert_macro
                when "model.inc.c"      then convert_model
                # when "movtext.inc.c"    then convert_movtext
                # when "texture.inc.c"    then convert_texture
                end
            end
        end

        @c_dir, @js_dir = @dirstack.pop
    end


    # -----------------------------
    def convert_collision
    end


    # -----------------------------
    def convert_macro
    end


    # -----------------------------
    def convert_movtext
    end


    # -----------------------------
    def convert_texture
    end


    # -----------------------------
    def convert_anim
        header = []
        imports = []
        @cons = []
        @anim = []
        @anims = {}

        @lines = File.read(@c_dir + "/anim.inc.c").lines.to_a
        @n = 0
        while (@n < @lines.length)
            if @lines[@n] =~ / static const s16 /
                cv_animvalue
            elsif @lines[@n] =~ / static const u16 /
                cv_animindex
            elsif @lines[@n] =~ / static const struct Animation /
                cv_anim
            elsif @lines[@n] =~ / const struct Animation *const /
                cv_anims
            else
                @anim.push(@lines[@n].chomp)
            end
            @n += 1
        end

        header.push(@title)
        header.push("")

        @cons.push("ANIMINDEX_NUMPARTS")
        imports_wrap(imports, "game/Mario", @cons)

        out = [header, "", imports, @anim, @ts].join("\n")
        File.open(@js_dir + "/anim.inc.js", "w") {|f| f.puts(out)}
    end

    def cv_animvalue
        while true
            line = @lines[@n]
            if line =~ /static const s16 (\w+)/    # static const s16 castle_grounds_seg7_animvalue_flags[] = {
                @anim.push("const #{$1} = [")

            elsif line =~ /^\};/                # };
                @model.push("]")
                break

            else
                @anim.push(line.chomp)
            end
            @n += 1
        end
    end

    def cv_animindex
        while true
            line = @lines[@n]
            if line =~ /static const u16 (\w+)/    # static const u16 castle_grounds_seg7_animindex_flags[] = {
                @anim.push("const #{$1} = [")

            elsif line =~ /^\};/                # };
                @model.push("]")
                break

            else
                @anim.push(line.chomp)
            end
            @n += 1
        end
    end

    def cv_anim
        a = []
        while true
            line = @lines[@n]
            if line =~ /static const u16 (\w+)/    # static const u16 castle_grounds_seg7_animindex_flags[] = {
                name = $1

            elsif line =~ /^\};/                # };
                @anims[name] = a
                break

            else
                a.push(line.strip.delete_suffix(','))
            end
            @n += 1
        end
    end

    def cv_anims
        while true
            line = @lines[@n]
            if line =~ /const struct Animation *const (\w+)/    # const struct Animation *const castle_grounds_seg7_anims_flags[] = {
                @anim.push("export const #{$1} = [")

            elsif line =~ /&(\w),/
                a = @anims[$1]
                @anim.push("    {")
                @anim.push("        flags: #{a[0]}, unk02: #{a[1]}, unk04: #{a[2]}, unk06: #{a[3]}, unk08: #{a[4]},")
                @anim.push("        unk0A: ANIMINDEX_NUMPARTS(#{a[7]}),")
                @anim.push("        values: #{a[6]},")
                @anim.push("        indices: #{a[7]}")
                @anim.push("    }")

            elsif line =~ /^\};/                # };
                @anim[-1].delete_suffix!(',')
                @anim.push("]")
                break

            else
                @anim.push(line.chomp)
            end
            @n += 1
        end
    end


    # ------------------------------
    def convert_model
        header = []
        imports = []
        @model = []
        @trefs = []
        @texs = []
        @cmds = []
        @cons = []

        @lines = File.read(@c_dir + "/model.inc.c").lines.to_a
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
            elsif @lines[@n] =~ /UNUSED/
                cv_UNUSED
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

        imports_wrap(imports, "include/gbi", [@cmds.uniq, @cons.uniq])

        # resolve texture references
        # they may be either be in "src/textures" or @entity_dir/texture.inc
        if !@trefs.empty?
            @trefs = @trefs.group_by {|t| t[/(.+)_\w+$/, 1]}    # outside_09006800, castle_grounds_seg7_texture_07001000
            @trefs.each do |file, textures|
                if file.start_with?(@entity)                    # castle_grounds_seg7_texture_07001000
                    imports_wrap(imports, "#{@entity_dir}/texture.inc", textures.uniq.sort)
                else
                    imports_wrap(imports, "textures/#{file}", textures.uniq.sort)
                end
                imports.push("")
            end
        end
        
        out = [header, "", imports, @model, @ts].join("\n")
        File.open(@js_dir + "/model.inc.js", "w") {|f| f.puts(out)}
    end

    def cv_UNUSED
        # ignore
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
                @texs.push(name)

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

    def cv_Gfx
        while true
            line = @lines[@n]
            if line =~ /(static )*const Gfx (\w+)/   # const Gfx cannon_barrel_seg8_dl_08006408[] = {
                export = $1 ? "" : "export "
                @model.push("#{export}const #{$2} = [")

            elsif line =~ /(\w+)\((.*)\),/
                cmd, args = $1, $2

                @cmds.push(cmd)

                case cmd
                when "gsDPLoadBlock"                    # gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
                    @cons.push("CALC_DXT")
                when "gsDPSetTextureImage"              # gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, outside_09000000),
                    t = args.split(",").last.strip      # outside_09000000
                    if !@texs.include?(t)
                        @trefs.push(t)  # needs to be imported
                    end
                when "gsSPLight"                        # gsSPLight(&birds_seg5_lights_05000000.l, 1),
                    # remove &
                    args.gsub!(/&/, "")
                end

                # collect G_ constants
                @cons += args.scan(/(^|[^A-Z])(G_\w+)/).collect {|m| m[1]}

                @model.push("    #{cmd}(#{args}),")

            elsif line =~ /^\};/                # };
                @model.push("].filter((obj) => obj).flat()")
                break
            end
            @n += 1
        end
    end


    # -------------
    def convert_geo
        header = []
        imports = []

        @geo = []
        @mods = []
        @cmds = []
        @cons = []
        cons2 = []

        @lines = File.read(@c_dir + "/geo.inc.c").lines.to_a
        @n = 0
        while (@n < @lines.length)
            if @lines[@n] =~ / GeoLayout /
                cv_GeoLayout
            else
                @geo.push(@lines[@n].chomp)
            end
            @n += 1
        end

        a = @entity.split('_').collect(&:capitalize).join(' ')
        header.push("// #{a}")

        geolayout_path = "engine/GeoLayout"
        shadow_path    = "game/Shadow"
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
        imports_wrap(imports, @js_dir + "/model.inc", @mods.uniq)

        out = [header, "", imports, "", @geo, @ts].join("\n")
        File.open(@js_dir + "/geo.inc.js", "w") {|f| f.puts(out)}
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
                        if arg =~ /^(#{@entity}\w+)/             # dorrie_seg6_dl_0600CFD0
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

    def relative_path(from, to)
        from_elements = from.split('/')
        to_elements   = to.split('/')
        common_root   = from_elements & to_elements
        up_count      = from_elements.length - common_root.length
        down_elements = to_elements - common_root
        return '../' * up_count + down_elements.join('/')
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
        rel = relative_path(@js_dir, @js_root + "/src/" + from)
        rel = "./" + rel if !rel.start_with?(".")  # import needs this
        imports.push("} from \"#{rel}\"")
    end

end


begin
    if ARGV.delete("-a")
        entity_is = :actor
    elsif ARGV.delete("-l")
        entity_is = :level
    else
        raise "help"
    end

    c_root = ARGV[0]
    js_root = ARGV[1]
    entity = ARGV[2]

    raise "help" if !entity

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

    raise "help" if entity_is == :actor && !Dir.exist?(c_root + "/actors/#{entity}")
    raise "help" if entity_is == :level && !Dir.exist?(c_root + "/levels/#{entity}")

    Convert.new(c_root, js_root, entity_is, entity).convert

rescue
    if $!.message == "help"
        puts "usage: Convert.rb <sm64-C-root> <sm64js-root> -a <actor>"
        puts "usage: Convert.rb <sm64-C-root> <sm64js-root> -l <level>"
    else
        puts "error: #{$!.inspect}"
        puts $!.backtrace
    end
    exit(1)
end
