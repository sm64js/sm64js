const input = ``

const lines = input.split("\n")

lines.forEach(line => {

    const items = line.split(',').map(item => parseInt(item.replace(/[{}\s]/g, '')))

    console.log(`{ pos: [ ${items[0]}, ${items[1]}, ${items[2]} ], flag: ${items[3]}, tc: [ ${items[4]}, ${items[5]} ], color: [ ${items[6]}, ${items[7]}, ${items[8]}, ${items[9]} ] },`)

})