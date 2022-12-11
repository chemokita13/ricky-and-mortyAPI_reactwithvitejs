import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://chemokita13.github.io/ricky-and-mortyAPI_reactwithvitejs",
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
