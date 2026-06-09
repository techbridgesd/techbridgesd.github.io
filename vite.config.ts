import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// After building, copy index.html to 404.html. GitHub Pages serves 404.html for
// any unknown path, which lets this single-page app handle routes like /about
// and /contact when someone visits or refreshes them directly.
function spaFallback(): Plugin {
  return {
    name: "spa-404-fallback",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const index = path.join(dist, "index.html");
      const notFound = path.join(dist, "404.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  // Served from the root of techbridgesd.github.io, so the base path is "/".
  base: "/",
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
