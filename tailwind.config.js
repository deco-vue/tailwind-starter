/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        "pr-title": "22px",
      },
      spacing: {
        4.5: "18px",
      },
      padding: {
        4.5: "18px",
      },
      gap: {
        4.5: "18px",
      },
      boxShadow: {
        custom: '0px 0px 24px 0px #DAE5F5',
      },
      colors: {
        "main-color": "#3675D4",
      },
    },
  },
  plugins: [],
};
