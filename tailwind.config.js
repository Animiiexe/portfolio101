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
          '50%': { color: '#FFD700' }, // yellow
        },},
        boxShadow: {
          'neon-purple': '0 0 1px 1px rgba(155, 0, 255, 1), 0 0 2px 2px rgba(155, 0, 255, 0.8)',
          'neon-blue': '0 0 1px 1px rgba(52, 140, 252, 1), 0 0 2px 2px rgba(52, 140, 252, 0.8)',
        },
    },
  },
  plugins: [],
}
