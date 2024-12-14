import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/index.js',  // Entry point
    output: [
        {
            file: 'dist/calculation-library.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/calculation-library.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/calculation-library.min.js',
            format: 'iife',
            name: 'MyJsLibrary',
            plugins: [terser()],
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
    ],
};
