// @ts-nocheck
import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      // Image optimizer
      ViteImageOptimizer({
        // Process files in `public/` as well as assets found in imports.
        includePublic: true,

        // File matcher (adjust if you also want other extensions)
        test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,

        // Report stats during build so you can see savings
        logStats: true,

        // Raster image options (passed to sharp)
        // tweak these quality numbers to taste
        jpeg: { quality: 78 },
        include: ["public/images/**"],
        cache: true,
      }),
    ],
  },
});
