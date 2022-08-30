/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'SlowFadeIn': 'SlowFadeIn 0.3s',
        'SlowFadeOut': 'SlowFadeOut 0.3s',
      },
      keyframes: {
        SlowFadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
        SlowFadeOut: {
          '0%': {opacity: 1},
          '100%': {opacity: 0},
        }
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ["group-hover"],
    },
  },
}
