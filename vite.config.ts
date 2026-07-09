import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on GitHub Pages project sites
// (https://<user>.github.io/<repo>/) without any extra configuration.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {
        manualChunks: {
          typescript: ["typescript"],
          monaco: ["@monaco-editor/react"],
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
