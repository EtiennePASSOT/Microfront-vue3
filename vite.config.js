import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    minify: false,
    rollupOptions: {
      input: "src/main.js",
    },
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: "my-micro-app/dist/*",
          dest: "my-micro-app",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
