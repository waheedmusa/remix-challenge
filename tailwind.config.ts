import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      grey: "#1E1E1E",
      darkGrey: "#191818",
      lightGrey: "#9E9E9E",
      vLightGrey: "#828282",
      white: "#FFFFFF",
      darkWhite: "#EBEBEB",
      black: "#010101",
      maroon: "#701129",
      gold: "#E7B725",
      darkGold: "#3E2F02",
      lightGold: "#8a6c16",
      orange: "#D35A27",
      grey1: "#262626",
      grey2: "#1C1B1B",
      grey3: "#858991",
    },
  },
  plugins: [],
} satisfies Config;
