import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cv: resolve(__dirname, "cv/index.html"),
        pay: resolve(__dirname, "pay/index.html"),
      },
    },
  },
});
