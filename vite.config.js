import { defineConfig } from 'vite'

export default defineConfig({
  // 設定 CSS 預處理器選項
  css: {
    preprocessorOptions: {
      scss: {
        // 關鍵設定：讓 Sass 編譯器能到 node_modules 尋找 Bootstrap 檔案
        includePaths: ['node_modules'],
      },
    },
  },
})