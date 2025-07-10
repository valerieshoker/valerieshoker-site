/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        redGlow: {
          '0%, 100%': {
            boxShadow: '0 0 12px 4px rgba(239, 68, 68, 0.8)', // bright red
          },
          '50%': {
            boxShadow: '0 0 18px 8px rgba(239, 68, 68, 1)',
          },
        },
      },
      animation: {
        redGlow: 'redGlow 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
