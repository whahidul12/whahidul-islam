/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF7A50",
        secondary: "#101018",
        "secondary-light": "#1B1B25",
        "background-light": "#ffffff",
        "background-dark": "#050508",
        "text-light": "#6b7280",
        "text-dark": "#9CA3AF",
      },
      fontFamily: {
        display: ['Jost', 'sans-serif'],
        body: ['Jost', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'gradient': 'gradient 4s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        }
      },
      backgroundSize: {
        '300%': '300%',
      }
    },
  },
  plugins: [],
}