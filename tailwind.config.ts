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
        primary: "#e76f51",
      },
    },
  },
  plugins: [],
};
export default config;
