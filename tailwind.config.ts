// tailwind.config.ts
import typography from "@tailwindcss/typography"; // 1. Importe-le ici
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Tes couleurs et autres extensions...
    },
  },
  plugins: [
    typography, // 2. Utilise la variable importée au lieu du require()
  ],
};

export default config;
