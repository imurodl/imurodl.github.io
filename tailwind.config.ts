import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class", // Enable class-based dark mode

  theme: {
    extend: {},
  },

  plugins: [typography],
} as Config;
