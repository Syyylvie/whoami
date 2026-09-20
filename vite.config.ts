import { defineConfig } from "vite";

export default defineConfig({
  base: "/whoami/",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});