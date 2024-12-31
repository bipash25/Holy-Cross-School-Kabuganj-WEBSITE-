import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const conditionalPlugins = [];
<<<<<<< HEAD
if (process.env.TEMPO) {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
=======

if (process.env.TEMPO) {
  conditionalPlugins.push(['tempo-devtools/swc', {}]);
>>>>>>> 8f7ab9677904b69c65fffc3f502542703c24b379
}

export default defineConfig({
  plugins: [
    react({
<<<<<<< HEAD
      plugins: [...conditionalPlugins],
    }),
=======
      plugins: [...conditionalPlugins]
    })
>>>>>>> 8f7ab9677904b69c65fffc3f502542703c24b379
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
