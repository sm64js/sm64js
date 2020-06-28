function hexdumpDirectory() {
    shopt -s nullglob
    for file in $1/*.ia8 $1/*.rgba16
    do
      hexdump -v -e '1/1 "0x%X,"' $file > $file.js
    done
    shopt -u nullglob
}

export -f hexdumpDirectory

find textures levels -type d -exec bash -c 'hexdumpDirectory "$0"' {} \;