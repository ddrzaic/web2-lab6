import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
    },
    about: {
      entry: "src/about.js",
      template: "public/about.html",
    },
  },
});
