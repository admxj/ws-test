import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import copyPlugin from 'rollup-plugin-copy'


// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vueDevTools(),
        copyPlugin({
            targets: [
                { src: 'static/js/*', dest: 'dist/static/js' },
            ],
            hook: 'writeBundle',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
