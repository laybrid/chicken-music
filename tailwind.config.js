/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'color-background': '#222',
        'color-background-d': 'rgba(0, 0, 0, 0.3)',
        'color-highlight-background': '#333',
        'color-dialog-background': '#666',
        'color-theme': '#ffcd32',
        'color-theme-d': 'rgba(255, 205, 49, 0.5)',
        'color-sub-theme': '#d93f30',
        'color-text': '#fff',
        'color-text-d': 'rgba(255, 255, 255, 0.3)',
        'color-text-l': 'rgba(255, 255, 255, 0.5)',
        'color-text-ll': 'rgba(255, 255, 255, 0.8)',
      },
      fontSize: {
        "sms": '10px',
        'sm': '12px',
        'md': '14px',
        'mdx': '16px',
        'lg': '18px',
        'lgx': '22px'
      }
    },
  },
  plugins: [],
}

