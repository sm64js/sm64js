import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-node-polyfills'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'iife'
    },
    plugins: [
        babel({ babelHelpers: "bundled" }),
        commonjs({
            exclude: ['node_modules/ws/**']
        }),
        nodePolyfills(),
        nodeResolve({
           // moduleDirectories: ['node_modules']
        })
    ]
}