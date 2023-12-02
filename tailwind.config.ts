import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      boxShadow: {
        "burger-item": "0px 1px 4.5px 0px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "daisy-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    rtl: false, // RTL direction support
    // themes: ["dark", "light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    themes: [
      {
        // light: {
        //   primary: "#9BABCA",
        //   "primary-content": "#262626",
        //   secondary: "#6D5D46",
        //   "secondary-content": "#CCCCCC",
        //   tertiary: "#DAC09A",
        //   "tertiary-content": "#2D2D2D",
        //   info: "#A6A6A6",
        //   "info-content": "#262626",
        //   success: "#95b795",
        //   "success-content": "#262626",
        //   warning: "#c19757",
        //   "warning-content": "#262626",
        //   error: "#db8a8a",
        //   "error-content": "#262626",
        //   "base-100": "#262626",
        //   "base-200": "#666666",
        //   "base-300": "#B9B9B9",
        //   "base-content": "#CCCCCC",
        // },
        dark: {
          primary: "#201836",
          "primary-content": "#F4F2F2",
          secondary: "#7261FF",
          "secondary-content": "#F3C5FF",
          tertiary: "#5649C3",
          "tertiary-content": "#F4F2F2",
          info: "#E0C5FF",
          "info-content": "#4F4F4F",
          success: "#6E9B6D",
          "success-content": "#F0F0F0",
          warning: "#DAC09A",
          "warning-content": "#2D2D2D",
          error: "#CE5E5E",
          "error-content": "#F0F0F0",
          "base-100": "#201836",
          "base-200": "#7261FF",
          "base-300": "#6110DB",
          "base-content": "#F4F2F2",
        },
      },
    ],
  },
};
export default config;
