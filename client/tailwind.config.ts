import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
        "gradient-glow":
          "linear-gradient(90deg, rgba(36,35,36,1) 0%, rgba(29,28,26,1) 50%, rgba(35,31,36,1) 100%)",
      },

      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
