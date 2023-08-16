/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    theme: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      colors: {
        biege: "#F5F5DC",
        ivory: "#FFFFF0",
        offwhite: "#FAF9F6",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "PT-sans"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
