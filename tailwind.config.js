/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile-landscape": {
          raw: "(max-width:768px) and (orientation:landscape)",
        },
      },
    },
  },
  plugins: [],
};
