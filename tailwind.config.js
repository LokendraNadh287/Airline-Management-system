module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#87CEEB',
          light: '#B0E0E6',
          dark: '#4682B4',
        },
        blue: {
          DEFAULT: '#1E90FF',
        },
        white: '#FFFFFF',
      },
      backgroundImage: theme => ({
        'airplane-pattern': "url('/path/to/your/airplane-image.png')",
      }),
    },
  },
  plugins: [],
}