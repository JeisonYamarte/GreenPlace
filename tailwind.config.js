/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#97A87A',
          'green-light': '#B5C99A',
          'green-dark': '#7a8c62',
          yellow: '#F2D57E',
          cream: '#FCF9EA',
          'cream-dark': '#e8f0dc',
          coral: '#FF6F61',
        },
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(calc(-100% - var(--gap)))" },
          to: { transform: "translateX(0)" },
        },

        // 🔽 VERTICALES
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical-reverse": {
          from: { transform: "translateY(calc(-100% - var(--gap)))" },
          to: { transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-reverse":
          "marquee-reverse var(--duration, 40s) linear infinite",

        // 🔽 VERTICALES
        "marquee-vertical":
          "marquee-vertical var(--duration, 40s) linear infinite",
        "marquee-vertical-reverse":
          "marquee-vertical-reverse var(--duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
}
