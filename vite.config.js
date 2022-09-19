import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env": {},
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: "index.html",
        ru: "ru/index.html",
        fr: "fr/index.html",
        "pt-br": "pt-br/index.html",
        "zh-cn": "zh-cn/index.html",
      },
    },
  },
});
