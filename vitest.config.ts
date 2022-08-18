

/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { resolve } from "path";
// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// 设置别名
const alias: Record<string, string> = {
  "/@": pathResolve("src")
};
export default defineConfig({
  resolve: {
    alias
  },
  plugins: [
    Vue(),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})