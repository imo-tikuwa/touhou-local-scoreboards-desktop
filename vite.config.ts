import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const production = mode === 'production'

  return {
    server: {
      host: true,
      port: 5173,
      watch: {
        usePolling: true,
      },
      hmr: {
        port: 5173,
      },
    },
    build: {
      cssCodeSplit: true,
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        input: {
          main: '/index.html',
        },
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    plugins: [
      VueRouter({
        dts: 'src/shared/types/typed-router.d.ts',
        routesFolder: 'src/shared/pages',
      }),

      vue(),

      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          'vue-i18n',
          {
            'file-saver': [['saveAs', 'saveAs']],
          },
        ],
        dts: 'src/shared/types/auto-imports.d.ts',
        dirs: ['src/shared/composables/', 'src/shared/stores/', 'src/shared/utils/'],
        vueTemplate: true,
      }),

      Components({
        dts: 'src/shared/types/components.d.ts',
        dirs: 'src/shared/components',
        resolvers: [PrimeVueResolver()],
      }),

      nodePolyfills(),

      electron({
        entry: 'src/electron/main.ts',
      }),
    ],
  }
})
