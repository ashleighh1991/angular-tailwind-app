/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        light: {
          primary: '#3498db',
          secondary: '#2ecc71',
        },

        // Dark Mode Colors
        dark: {
          primary: '#2c3e50',
          secondary: '#e74c3c',
        },
      },
    },
  },
  plugins: [],
}