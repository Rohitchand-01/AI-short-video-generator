/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#E6E6FA', // Lavender base
            dark: '#d8bfe5',    // A deeper lavender
            light: '#f5f5ff',   // A lighter lavender
          },
        },
      },
    },
    plugins: [],
  }
  