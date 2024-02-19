import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle 450px at 0% 0%,hsla(0,0%,100%,.12),hsla(0,0%,100%,0));",
        "gradient-radial-top":
          "radial-gradient(circle 190px at 50% 0%,hsla(0,0%,100%,.12),hsla(0,0%,100%,0));",
        "gradient-radial-left":
          "radial-gradient(circle 250px at 50% 100%,hsla(0,0%,100%,.12),hsla(0,0%,100%,0));",
        "gradient-radial-middle":
          "radial-gradient(circle 600px at 50% 60%,hsla(0,0%,100%,.12),hsla(0,0%,100%,0));",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-gradient":
          "linear-gradient(to right bottom,#fff 30%,hsla(0,0%,100%,.5));",
        "box-gradient": "linear-gradient(to right bottom,#040404 40%,#111111);",
        "footer-gradient": "linear-gradient(to bottom,#020202,#000 25%);",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        shine: {
          "0%": { backgroundPosition: "left" },
          "100%": { backgroundPosition: "right" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeRightIn: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        wave: {
          "0%": {
            height: "18px",
          },
          "50%": {
            height: "25px",
          },
          "100%": {
            height: "18px",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
        shine: "shine 0.5s ease-in-out",
        wave: "wave 0.6s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        fadeRightIn: "fadeRightIn 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
export default config
