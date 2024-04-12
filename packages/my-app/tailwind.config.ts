import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      "12p": [
        "12px",
        { lineHeight: "18px", letterSpacing: "4%", fontWeight: 400 },
      ],
      "14p": [
        "14px",
        { lineHeight: "20px", letterSpacing: "2%", fontWeight: 400 },
      ],
      "18p": [
        "18px",
        { lineHeight: "26px", letterSpacing: "2%", fontWeight: 700 },
      ],
      "24p": [
        "24px",
        { lineHeight: "34px", letterSpacing: "2%", fontWeight: 400 },
      ],
    },
  },
  plugins: [],
};
export default config;
