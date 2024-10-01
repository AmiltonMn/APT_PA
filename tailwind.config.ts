import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "26": "26px",
      },
      colors: {
        branco: "var(--white)",
        preto: "var(--black)",
      },
      fontSize: {
        large: "36px",
        medium: "24px",
        small: "16px"
      },
      fontFamily: {
        robFont: "var(--roboto)"
      },
      screens: {
        "2lg:": "1920px"
      },
    },
  },
  plugins: [],
};
export default config;
