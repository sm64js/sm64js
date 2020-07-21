const input = `    {{{    31,    -85,    -86}, 0, {     0,      0}, {0xdb, 0xfd, 0x87, 0xff}}},
    {{{    35,   -120,    -67}, 0, {     0,      0}, {0xda, 0x94, 0xcb, 0xff}}},
    {{{     9,    -88,    -58}, 0, {     0,      0}, {0x87, 0xdf, 0xf5, 0xff}}},
    {{{    17,    -52,    -46}, 0, {     0,      0}, {0x89, 0xf8, 0xd7, 0xff}}},
    {{{    56,    -45,    -76}, 0, {     0,      0}, {0xe3, 0xca, 0x92, 0xff}}},
    {{{    91,    -54,    -85}, 0, {     0,      0}, {0xd9, 0xb0, 0xa7, 0xff}}},
    {{{    64,   -103,    -51}, 0, {     0,      0}, {0xde, 0x94, 0xc7, 0xff}}},
    {{{    31,    -84,      0}, 0, {     0,      0}, {0xa0, 0xae, 0x00, 0xff}}},
    {{{    36,   -116,     36}, 0, {     0,      0}, {0xfb, 0x8e, 0xc9, 0xff}}},
    {{{     9,    -88,     59}, 0, {     0,      0}, {0x87, 0xdf, 0x0b, 0xff}}},
    {{{    17,    -52,     47}, 0, {     0,      0}, {0x89, 0xf8, 0x29, 0xff}}},
    {{{    36,   -116,    -35}, 0, {     0,      0}, {0xfb, 0x8e, 0x37, 0xff}}},
    {{{    35,   -120,     68}, 0, {     0,      0}, {0xda, 0x94, 0x35, 0xff}}},
    {{{    31,    -85,     87}, 0, {     0,      0}, {0xdb, 0xfd, 0x79, 0xff}}},`

const lines = input.split("\n")

lines.forEach(line => {

    const items = line.split(',').map(item => parseInt(item.replace(/[{}\s]/g, '')))

    console.log(`{ pos: [ ${items[0]}, ${items[1]}, ${items[2]} ], flag: ${items[3]}, tc: [ ${items[4]}, ${items[5]} ], color: [ ${items[6]}, ${items[7]}, ${items[8]}, ${items[9]} ] },`)

})