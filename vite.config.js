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
        "pt-br": "pt-br/index.html",
      },
    },
  },
});
