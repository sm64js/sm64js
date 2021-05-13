#!/usr/bin/env ruby

begin
    while true
        lines = []
        ARGF.each_line do |l|
            l.chomp!
            if l == "."
                break
            else
                lines.push(l)
            end
        end

        lines.each do |l|
            comment = nil

            if l =~ %r{^//}
                n = l

            elsif l =~ %r{(.+)//(.+)}
                l = $1
                comment = $2
            end

# static void seq_player_play_sequence(u8 player,let /*u8*/seqId,let /*u16*/arg2) {

            if l =~ /^(.+) \**(\w+)\((.+)\) \{$/
                ret, name, args = $1, $2, $3
                if ret.include?("static")
                    qual = "const"
                else
                    qual = "export const"
                end

                if args == "void"
                    args = ""
                end

                if args.length > 0
                    # struct MarioState *m, UNUSED u32 interactType, struct Object *o
                    args = args.split(",").collect do |arg|
                        arg.strip!
                        arg.split(/[^\w]/).last
                    end.join(", ")
                end

                n = "#{qual} #{name} = (#{args}) => {"
            
            else
                n = l.chomp.delete_suffix(";")
                n.gsub!(/ (u8|s16|u16|s32|u32|f32) /, " let /*\\1*/ ")
                n.gsub!(/->(o\w+)/, ".rawData[\\1]")
                n.gsub!(/->/, ".")
                n.gsub!(/NULL/, "null")
                n.gsub!(/TRUE/, "1")
                n.gsub!(/FALSE/, "0")
                n.gsub!(/(\d\.\d+?)f/, "\\1")  # 1.0f
            end

            if comment
                puts n + "  //" + comment
            else
                puts n
            end
        end
    end

rescue
    if $!.message == "help"
        puts "usage: "

    elsif $!.message == "exit"
    else
        puts "error: #{$!.inspect}"
        puts $!.backtrace
    end
    exit(1)
end

=begin
u32 interact_cap(struct MarioState *m, UNUSED u32 interactType, struct Object *o) {
    u32 capFlag = get_mario_cap_flag(o);
    u16 capMusic = 0;
    u16 capTime = 0;

    if (m->action != ACT_GETTING_BLOWN && capFlag != 0) {
        m->interactObj = o;
        o->oInteractStatus = INT_STATUS_INTERACTED;

        m->flags &= ~MARIO_CAP_ON_HEAD & ~MARIO_CAP_IN_HAND;
        m->flags |= capFlag;

        switch (capFlag) {
            case MARIO_VANISH_CAP:
                capTime = 600;
                capMusic = SEQUENCE_ARGS(4, SEQ_EVENT_POWERUP);
                break;

            case MARIO_METAL_CAP:
                capTime = 600;
                capMusic = SEQUENCE_ARGS(4, SEQ_EVENT_METAL_CAP);
                break;

            case MARIO_WING_CAP:
                capTime = 1800;
                capMusic = SEQUENCE_ARGS(4, SEQ_EVENT_POWERUP);
                break;
        }

        if (capTime > m->capTimer) {
            m->capTimer = capTime;
        }

        if ((m->action & ACT_FLAG_IDLE) || m->action == ACT_WALKING) {
            m->flags |= MARIO_CAP_IN_HAND;
            set_mario_action(m, ACT_PUTTING_ON_CAP, 0);
        } else {
            m->flags |= MARIO_CAP_ON_HEAD;
        }

        play_sound(SOUND_MENU_STAR_SOUND, m->marioObj->header.gfx.cameraToObject);
        play_sound(SOUND_MARIO_HERE_WE_GO, m->marioObj->header.gfx.cameraToObject);

        if (capMusic != 0) {
            play_cap_music(capMusic);
        }

        return TRUE;
    }

    return FALSE;
}

=end
