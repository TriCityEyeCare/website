/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  '#f6f7f8',
          100: '#eceef1',
          200: '#d4d8de',
          300: '#aab1bc',
          400: '#7a8392',
          500: '#525c6c',
          600: '#3b4554',
          700: '#2a3240',
          800: '#1c2230',
          900: '#11151e',
        },
        brand: {
          50:  '#eef7f6',
          100: '#d6ecea',
          200: '#aedad6',
          300: '#7ec1bc',
          400: '#4ea59f',
          500: '#308982',
          600: '#236d68',
          700: '#1c5651',
          800: '#163f3c',
          900: '#0e2826',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
