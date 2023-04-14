/// <reference types="vitest" />
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
  ],
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          antd: ['ant-design-vue', '@ant-design/icons-vue'],
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse'],
    },
  },
})
