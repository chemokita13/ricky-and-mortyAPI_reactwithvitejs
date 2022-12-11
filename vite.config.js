import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://github.io/chemokita13/ricky-and-mortyAPI_reactwithvitejs",
    plugins: [
        react({
            include: "./src/**/*.{js,ts,jsx,tsx}",
        }),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        hmr: false, // hmr not working with tailwindcss, i dont know why :c
    },
});
