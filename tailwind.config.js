/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))", // Use with custom CSS variables
        customBlue: "#348cfc", // Removed extra semicolon
      },
    },
  },
  plugins: [],
}
