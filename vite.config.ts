import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@assets": path.resolve(__dirname, "src/shared/assets"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/styles/variables.scss" as *; @use "@assets/styles/mixins.scss" as *;`,
      },
    },
  },
});
