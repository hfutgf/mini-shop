import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      containers: "/src/containers",
      layouts: "/src/layouts",
      pages: "/src/pages",
      types: "/src/types",
      services: "/src/services",
      store: "/src/store",
    },
  },
});
