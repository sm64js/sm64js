// JavaScript source code

import { printAbc } from "./module1"

console.log("meow")
printAbc()

const canvas = document.querySelector("#gameCanvas");
// Initialize the GL context
const gl = canvas.getContext("webgl");

// Only continue if WebGL is available and working
if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
}

// Set clear color to black, fully opaque
gl.clearColor(1.0, 0.0, 0.0, 1.0);
// Clear the color buffer with specified clear color
gl.clear(gl.COLOR_BUFFER_BIT);

