import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#A81E33",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
