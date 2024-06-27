import { url } from "inspector";
import type { Config } from "tailwindcss";
import bali from "./public/img/bali.jpg";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",   
          "bali": "url('/img/sanFrancisco.jpg')",  
          "chicago": "url('/img/chicago.jpg')",
          "europe": "url('/img/europe.jpg')",
          "iceland": "url('/img/iceland.jpg')",
          "la": "url('/img/la.jpg')",
          "miami": "url('/img/miami.jpg')",
          "newYork": "url('/img/new_york.jpg')",
          "norway": "url('/img/norway.jpg')",
          "sanFrancisco": "url('/img/sanFrancisco.jpg')",
          "switzerland": "url('/img/switzerland.jpg')",
          "sydney": "url('/img/sydney.jpg')",
          "yosemite": "url('/img/yosemite.jpg')",
          "seatle": "url('/img/seatle.jpg')",
          "sanfranciscodesktop": "url('/img/sanFranciscoDesktop.jpg')",  
      },
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      textColor: () => ({
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      }),
      background: { 
        sanFrancisco: "url('/img/sanFrancisco.jpg')",        
      },
    }    
  },
  plugins: [],
  variants: {
    extend: {
      boxShadow: ["active"],
      backgroundColor: ["active"],
      textColor: ["active"],
      width: ["focus", "hover", "responsive"],
    },
  },
};
export default config;
