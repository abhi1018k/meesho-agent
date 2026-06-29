import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          500: "#7C3AED",
          600: "#6D28D9",
          700: "#5B21B6",
        },
        ink: "#111827",
        muted: "#6B7280",
        canvas: "#F8FAFC",
        success: "#16A34A",
        warning: "#F59E0B",
      },
      fontFamily: {
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "18px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 24, 39, 0.09)",
        lift: "0 22px 70px rgba(124, 58, 237, 0.16)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(17,24,39,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
