import Clamp from "./src/components/Clamp.js";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    spacing: {
      "responsive-padding": Clamp(1, 15),
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      ".padding-x": {
        "padding-left": Clamp(0.5, 15),
        "padding-right": Clamp(0.5, 15),
      },
      ".margin-x": {
        "margin-left": Clamp(0.5, 15),
        "margin-right": Clamp(0.5, 15),
      },
    });
  },
];
