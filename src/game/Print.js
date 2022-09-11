import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../include/config"
import * as Gbi from "../include/gbi"
import { guOrtho } from "../engine/math_util"
import { GameInstance as Game } from "./Game"
import { dl_hud_img_load_tex_block, dl_hud_img_begin, dl_hud_img_end, main_hud_lut, } from "../bin/segment2"

class TextLabel {
    constructor(x, y, length, buffer) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.buffer = buffer;
    }
};

class Print {
    constructor() {
        this.GLYPH_SPACE = -1;
        this.GLYPH_U = 30;
        this.GLYPH_EXCLAMATION_PNT = 36;
        this.GLYPH_TWO_EXCLAMATION = 37;
        this.GLYPH_QUESTION_MARK = 38;
        this.GLYPH_AMPERSAND = 39;
        this.GLYPH_PERCENT = 40;
        this.GLYPH_MULTIPLY = 50;
        this.GLYPH_COIN = 51;
        this.GLYPH_MARIO_HEAD = 52;
        this.GLYPH_STAR = 53;
        this.GLYPH_PERIOD = 54;
        this.GLYPH_BETA_KEY = 55;
        this.GLYPH_APOSTROPHE = 56;
        this.GLYPH_DOUBLE_QUOTE = 57;
        this.GLYPH_UMLAUT = 58;

        this.sTextLabels = [];
        for (var i = 0; i < 52; i++) {
            var buffer = [];
            for (var j = 0; j < 50; j++) {
                buffer[j] = "\0";
            }
            this.sTextLabels[i] = new TextLabel(0, 0, 0, buffer);
        }
        this.sTextLabelsCount = 0;
    }

    print_text(x, y, str) {
        str += "\0"; // Oh jeez, we have to do logic on C strings (terminated with a null character) and Javascript strings (that just stores characters in an array? who even knows)
                     // Consider this function incorrect
        var c = "\0";
        var length = 0;
        var srcIndex = 0;

        // // Don't continue if there is no memory to do so.
        // if ((sTextLabels[sTextLabelsCount] = mem_pool_alloc(gEffectsMemoryPool,
        //                                                     sizeof(struct TextLabel))) == NULL) {
        //     return;
        // }

        this.sTextLabels[this.sTextLabelsCount].x = x;
        this.sTextLabels[this.sTextLabelsCount].y = y;

        c = str[srcIndex];

        // Set the array with the text to print while finding length.
        while (c != "\0") {
            this.sTextLabels[this.sTextLabelsCount].buffer[length] = c;
            length++;
            srcIndex++;
            c = str[srcIndex];
        }

        this.sTextLabels[this.sTextLabelsCount].length = length;
        this.sTextLabelsCount++;
    }

    print_text_centered(x, y, str) {
        str += "\0";
        var c = "\0";
        var length = 0;
        var srcIndex = 0;
    
        c = str[srcIndex];
    
        // Set the array with the text to print while finding length.
        while (c != "\0") {
            this.sTextLabels[this.sTextLabelsCount].buffer[length] = c;
            length++;
            srcIndex++;
            c = str[srcIndex];
        }
    
        this.sTextLabels[this.sTextLabelsCount].length = length;
        this.sTextLabels[this.sTextLabelsCount].x = x - length * 12 / 2;
        this.sTextLabels[this.sTextLabelsCount].y = y;
        this.sTextLabelsCount++;
    }
    

    print_text_fmt_int(x, y, str, n) {
        str = str.replace("%x", n.toString(16));
        str = str.replace("%d", n);
        this.print_text(x, y, str);
        return;

        // Same as print_text, I'm unsure what to do here

        str += "\0";

        var c = 0;
        var zeroPad = false;
        var width = 0;
        var base = 0;
        var len = 0;
        var srcIndex = 0;

        // // Don't continue if there is no memory to do so.
        // if ((sTextLabels[sTextLabelsCount] = mem_pool_alloc(gEffectsMemoryPool,
        //                                                     sizeof(struct TextLabel))) == NULL) {
        //     return;
        // }

        this.sTextLabels[this.sTextLabelsCount].x = x;
        this.sTextLabels[this.sTextLabelsCount].y = y;

        c = str[srcIndex];

        while (c != "\0") {
            if (c == '%') {
                srcIndex++;

                this.parse_width_field(str, srcIndex, width, zeroPad);

                if (str[srcIndex] != 'd' && str[srcIndex] != 'x') {
                    break;
                }
                if (str[srcIndex] == 'd') {
                    base = 10;
                }
                if (str[srcIndex] == 'x') {
                    base = 16;
                }

                srcIndex++;

                this.format_integer(n, base, this.sTextLabels[this.sTextLabelsCount].buffer + len, len, width, zeroPad);
            } else // straight copy
            {
                this.sTextLabels[this.sTextLabelsCount].buffer[len] = c;
                len++;
                srcIndex++;
            }
            c = str[srcIndex];
        }

        this.sTextLabels[this.sTextLabelsCount].length = len;
        this.sTextLabelsCount++;
    }

    render_text_labels() {
        var i;
        var j;
        var glyphIndex;
        var mtx = new Array(4).fill(0).map(() => new Array(4).fill(0));

        if (this.sTextLabelsCount == 0) {
            return;
        }

        // mtx = alloc_display_list(sizeof(*mtx));

        // if (mtx == NULL) {
        //     sTextLabelsCount = 0;
        //     return;
        // }

        guOrtho(mtx, 0.0, SCREEN_WIDTH, 0.0, SCREEN_HEIGHT, -10.0, 10.0, 1.0);
        // Gbi.gSPPerspNormalize(Game.gDisplayList, 0xFFFF);
        Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_begin);

        for (i = 0; i < this.sTextLabelsCount; i++) {
            for (j = 0; j < this.sTextLabels[i].length; j++) {
                glyphIndex = this.char_to_glyph_index(this.sTextLabels[i].buffer[j]);

                if (glyphIndex != this.GLYPH_SPACE) {
                    this.add_glyph_texture(glyphIndex);
                    this.render_textrect(this.sTextLabels[i].x, this.sTextLabels[i].y, j);
                }
            }

            // mem_pool_free(gEffectsMemoryPool, sTextLabels[i]);
        }


        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_end);

        this.sTextLabelsCount = 0;
    }

    char_to_glyph_index(c) {
        var cCharCode = c.charCodeAt(0);

        if (cCharCode >= 'A'.charCodeAt(0) && cCharCode <= 'Z'.charCodeAt(0)) {
            return cCharCode - 55;
        }

        if (cCharCode >= 'a'.charCodeAt(0) && cCharCode <= 'z'.charCodeAt(0)) {
            return cCharCode - 87;
        }

        if (cCharCode >= '0'.charCodeAt(0) && cCharCode <= '9'.charCodeAt(0)) {
            return cCharCode - 48;
        }

        if (c == ' ') {
            return this.GLYPH_SPACE;
        }

        if (c == '!') {
            return this.GLYPH_EXCLAMATION_PNT; // !, JP only
        }

        if (c == '#') {
            return this.GLYPH_TWO_EXCLAMATION; // !!, JP only
        }

        if (c == '?') {
            return this.GLYPH_QUESTION_MARK; // ?, JP only
        }

        if (c == '&') {
            return this.GLYPH_AMPERSAND; // &, JP only
        }

        if (c == '%') {
            return this.GLYPH_PERCENT; // %, JP only
        }

        if (c == '*') {
            return this.GLYPH_MULTIPLY; // x
        }

        if (c == '+') {
            return this.GLYPH_COIN; // coin
        }

        if (c == ',') {
            return this.GLYPH_MARIO_HEAD; // Imagine I drew Mario's head
        }

        if (c == '-') {
            return this.GLYPH_STAR; // star
        }

        if (c == '.') {
            return this.GLYPH_PERIOD; // large shaded dot, JP only
        }

        if (c == '/') {
            return this.GLYPH_BETA_KEY; // beta key, JP only. Reused for Ü in EU.
        }

        return this.GLYPH_SPACE;
    }

    add_glyph_texture(glyphIndex) {
        var glyphs = main_hud_lut;

        // Gbi.gDPPipeSync(Game.gDisplayList);
        Gbi.gDPSetTextureImage(Game.gDisplayList, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, glyphs[glyphIndex]);
        Gbi.gSPDisplayList(Game.gDisplayList, dl_hud_img_load_tex_block);
    }


    render_textrect(x, y, pos) {
        var rectBaseX = x + pos * 12;
        var rectBaseY = 224 - y;
        var rectX;
        var rectY;

        var WIDESCREEN = false;
        if (WIDESCREEN) {
            // clip_to_bounds(&rectBaseX, &rectBaseY);
        }

        rectX = parseInt(rectBaseX / 2)
        rectY = parseInt(rectBaseY / 2)
        Gbi.gSPTextureRectangle(Game.gDisplayList, rectX << 2, rectY << 2, (rectX + 15.0 / 2.0) << 2, (rectY + 15.0 / 2.0) << 2, Gbi.G_TX_RENDERTILE, 0, 0, 8 << 10, 2 << 10);
    }


    parse_width_field(str, srcIndex, width, zeroPad) {
        var digits = [];
        for (var i = 0; i < 12; i++) {
            digits.push(0);
        }
        
        var digitsLen = 0;
    
        // If first character is 0, then the string should be zero padded.
        if (str[srcIndex] == '0') {
            zeroPad = true;
        }
    
        // Read width digits up until the 'd' or 'x' format specifier.
        while (str[srcIndex] != 'd' && str[srcIndex] != 'x') {
            digits[digitsLen] = str[srcIndex] - '0'.charCodeAt(0);
    
            if (digits[digitsLen] < 0 || digits[digitsLen] >= 10) // not a valid digit
            {
                width = 0;
                return;
            }
    
            digitsLen++;
            srcIndex++;
        }
    
        // No digits
        if (digitsLen == 0) {
            return;
        }
    
        // Sum the digits to calculate the total width.
        for (var i = 0; i < digitsLen - 1; i++) {
            width = width + digits[i] * ((digitsLen - i - 1) * 10);
        }
    
        width = width + digits[digitsLen - 1];
    }

    format_integer(n, base, dest, totalLength, width, zeroPad) {
        var powBase;
        var numDigits = 0;
        var digit;
        var negative = false;
        var pad;
    
        if (zeroPad == true) {
            pad = '0'.charCodeAt(0);
        } else {
            pad = -1;
        }
    
        if (n != 0) {
            // Formats a negative number for negative prefix.
            if (n < 0) {
                n = -n;
                negative = true;
            }
    
            // Increments the number of digits until length is long enough.
            while (true) {
                powBase = this.int_pow(base, numDigits);
    
                if (powBase > n) {
                    break;
                }
    
                numDigits++;
            }
    
            // Add leading pad to fit width.
            if (width > numDigits) {
                for (var len = 0; len < width - numDigits; len++)
                    dest[len] = pad;
    
                // Needs 1 length to print negative prefix.
                if (negative) {
                    len--;
                }
            }
    
            // Use 'M' prefix to indicate negative numbers.
            if (negative) {
                dest[len] = 'M';
                len++;
            }
    
            // Transfer the digits into the proper base.
            for (var i = numDigits - 1; i >= 0; i--) {
                powBase = this.int_pow(base, i);
                digit = n / powBase;
    
                console.log(digit, dest);

                var replaceAt = function(str, index, replacement) {
                    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
                }

                // FIXME: Why doesn't [] match?
                if (digit < 10) {
                    dest = replaceAt(dest, len + numDigits - 1 - i, digit);
                } else {
                    dest[len + numDigits - 1 - i] = digit + '7'.charCodeAt(0);
                }
                console.log(digit, dest);
    
                n -= digit * powBase;
            }
        } else // n is zero.
        {
            numDigits = 1;
            if (width > numDigits) {
                for (len = 0; len < width - numDigits; len++)
                    dest[len] = pad;
            }
            dest[len] = '0';
        }
    
        totalLength += numDigits + len;
    }

    int_pow(n, exponent) {
        var result = 1;
    
        for (var i = 0; i < exponent; i++) {
            result = n * result;
        }
    
        return result;
    }
}

export const PrintInstance = new Print();