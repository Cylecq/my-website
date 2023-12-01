import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Reem Kufi Fun", "sans-serif"],
        body: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#D33F49", // red
        // primary: "#8F95D3", // blue
        // primary: "#619B8A", // green
        black: "#0f0f0f",
      },
    },
  },
  plugins: [],
};
export default config;
