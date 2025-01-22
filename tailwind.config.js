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
      animation: {
        'text-pulse': 'textPulse 2s ease-in-out infinite',
      },
      keyframes: {
        textPulse: {
          '0%, 100%': { color: '#3b82f6' }, // Blue
          '50%': { color: '#8b5cf6' }, // Purple
        },}
    },
  },
  plugins: [],
}
