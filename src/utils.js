export const int16 = (num) => {
    num = num > 32767 ? num - 65536 : num;
    num = num < -32768 ? num + 65536 : num;
    return num;
}

export const sins = (num) => {
    return Math.sin(num / 0x8000 * Math.PI);
}

export const coss = (num) => {
    return Math.cos(num / 0x8000 * Math.PI);
}
