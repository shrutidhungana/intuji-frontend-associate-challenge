// vite.config.js
import { defineConfig } from "vite";
import string from "vite-plugin-string";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  root: ".", // root is project directory
  plugins: [
    string({
      include: ["**/*.html"], // allow importing .html as string
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // optional: allows using @/components/...
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
