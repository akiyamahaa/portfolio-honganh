import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          600: "#FF6F61",
          50: "#FFF2F1",
        },
      },
      fontFamily: {
        hatton: ["Hatton", "sans-serif"],
      },
      zIndex: {
        max: "999",
      },
      clipPath: {
        "hide-right": "inset(0 8px 0 0)", // Hides overflow on the right
        "hide-left": "inset(0 0 0 8px)", // Hides overflow on the left
      },
      maskImage: {
        "hide-left": "linear-gradient(to right, transparent, black 8px, black)", // Hides overflow on the left
        "hide-right": "linear-gradient(to left, transparent, black 8px, black)", // Hides overflow on the right
      },
    },
  },
  plugins: [],
};
export default config;
