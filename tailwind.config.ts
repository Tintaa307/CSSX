const svgToDataUri = require("mini-svg-data-uri")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")
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
        "gradient-radial-middle":
          "radial-gradient(circle 600px at 50% 60%,hsla(0,0%,100%,.12),hsla(0,0%,100%,0));",
        "text-gradient":
          "linear-gradient(to right bottom,#fff 30%,hsla(0,0%,100%,.5));",
        "box-gradient": "linear-gradient(to right bottom,#040404 40%,#111111);",
        "footer-gradient": "linear-gradient(to bottom,#020202,#000 25%);",
        "gradient-radial-light":
          "radial-gradient(circle 50px at 50% 50%,hsla(0,0%,100%,.3), hsla(0,0%,100%,0));",
        "linear-gradient-top-left-short":
          "linear-gradient(to bottom right, #111111, #070707 30%)",
        "linear-gradient-top-left-long":
          "linear-gradient(to bottom right, #111111, #070707 50%)",
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
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
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
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      )
    },
  ],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}
export default config
