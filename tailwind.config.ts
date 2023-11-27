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
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    themes: ["dark", "light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // themes: [
    //   {
    //     dark: {
    //       ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
    //       primary: "#9BABCA",
    //       "primary-content": "#262626",
    //       secondary: "#6D5D46",
    //       "secondary-content": "#CCCCCC",
    //       accent: "#DAC09A",
    //       "accent-content": "#2D2D2D",
    //       info: "#A6A6A6",
    //       "info-content": "#262626",
    //       success: "#95b795",
    //       "success-content": "#262626",
    //       warning: "#c19757",
    //       "warning-content": "#262626",
    //       error: "#db8a8a",
    //       "error-content": "#262626",
    //       "base-100": "#262626",
    //       "base-200": "#666666",
    //       "base-300": "#B9B9B9",
    //       "base-content": "#CCCCCC",
    //     },
    //     light: {
    //       ...require("daisyui/src/colors/themes")["[data-theme=light]"],
    //       primary: "#7188B4",
    //       "primary-content": "#F0F0F0",
    //       secondary: "#CEC3B3",
    //       "secondary-content": "#4F4F4F",
    //       accent: "#DAC09A",
    //       "accent-content": "#4F4F4F",
    //       info: "#E0E0E0",
    //       "info-content": "#4F4F4F",
    //       success: "#6E9B6D",
    //       "success-content": "#F0F0F0",
    //       warning: "#DAC09A",
    //       "warning-content": "#2D2D2D",
    //       error: "#CE5E5E",
    //       "error-content": "#F0F0F0",
    //       "base-100": "#F0F0F0",
    //       "base-200": "#E0E0E0",
    //       "base-300": "#B9B9B9",
    //       "base-content": "#2D2D2D",
    //     },
    //   },
    // ],
  },
};
export default config;
