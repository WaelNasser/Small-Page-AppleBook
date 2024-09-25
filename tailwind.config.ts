/** @format */

import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
import { transform } from "next/dist/build/swc";

const config: Config = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "10px" },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        swipper: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        swipe: "swipper 20s linear infinite",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
