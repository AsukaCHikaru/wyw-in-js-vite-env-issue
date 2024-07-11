import { defineConfig } from "npm:vite";
import react from "npm:@vitejs/plugin-react";

// @deno-types="npm:@types/react@18.2.66"
import "npm:react@18.2.0";
// @deno-types="npm:@types/react-dom@18.2.22"
import "npm:react-dom@18.2.0";

export default defineConfig({
  plugins: [react()],
});
