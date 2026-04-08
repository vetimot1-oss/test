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
        background: "hsl(0 100% 3%)",
        foreground: "hsl(0 0% 98%)",
        card: "rgba(139, 69, 69, 0.15)",
        "card-foreground": "hsl(0 0% 98%)",
        border: "rgba(220, 38, 38, 0.3)",
        primary: "hsl(0 84% 60%)",
        "primary-foreground": "hsl(0 0% 100%)",
        accent: "hsl(0 72% 51%)",
        "accent-foreground": "hsl(0 0% 100%)",
        muted: "rgba(127, 29, 29, 0.3)",
        "muted-foreground": "hsl(0 20% 70%)",
      },
      fontFamily: {
        sans: ["var(--font-gilroy)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
        glass: "6px",
        heavy: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
