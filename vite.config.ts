import { defineConfig } from "vite";

export default defineConfig({
  base: "/personal-website/", // 改成你的仓库名
  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});