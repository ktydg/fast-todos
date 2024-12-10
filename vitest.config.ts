/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig, type ViteUserConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()] as ViteUserConfig["plugins"],
  test: {
    globals: true,
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
  },
});
