const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        "custom_gray": "#171923",
        "custom_gray_medium": "#1c1e28",
        "custom_gray_light": "#212530",
        "custom_gray_lighter": "#292b34",
        gray: colors.gray
      },
    },      
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('tailwindcss-container-sizes')(),
  ],
};
