// vite.config.js
import { defineConfig } from "vite";
import string from "vite-plugin-string";
import path from "path";
import viteSvgLoader from "vite-svg-loader";

export default defineConfig({
  root: ".", // root is project directory
  plugins: [
    string({
      include: ["**/*.html"], // allow importing .html as string
    }),
    viteSvgLoader(),
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
