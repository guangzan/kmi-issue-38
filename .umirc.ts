import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  mfsu: false,
  presets: ['@kmijs/preset-bundler'],
  rspack: {}
});
