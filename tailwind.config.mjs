/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#735290",
        "dark-mode": "#282828",
        "light-mode": "#EEEEEE",
        "dark-component": "#3A3A3A",
        "light-component": "#E6E6E6",
        "disable-text-dark": "#CDCDCD",
        "disable-text-light": "#565656",
        "text-light": "#F5F5F5",
        "text-dark": "#3A3A3A",
      },
    },
  },
  plugins: [],
};
