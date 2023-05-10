/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        contact_secondary: "#A9A9A9",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
      },
      fontSize: {
        "20px": "1.25rem",
        "24px": "1.5rem",
        "26px": "1.625rem",
        "30px": "1.875rem",
        "32px": "2rem",
        "36px": "2.25rem",
      },
      height: {
        //px to rem
        "387px": "24.1875rem",
      },
      width: {
        "708px": "44.25rem",
      },
    },
  },
  plugins: [],
};
