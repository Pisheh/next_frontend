/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2b5adc',
          200: '#1940AC'
        },
        success: {
          100: '#0BA549',
          200: '#0B863C'
        },
        muted: '#737373'
      }
    }
  },
  plugins: []
}
