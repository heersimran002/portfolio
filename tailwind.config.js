
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "montserrat": ["Montserrat"],
      "mulish": ["Mulish"]
    },
    extend: {
      colors: {
        'perfume': {
          '50': '#fbf5fe',
          '100': '#f5e9fe',
          '200': '#ecd2fc',
          '300': '#dba6f7',
          '400': '#cc80f2',
          '500': '#b54fe6',
          '600': '#9a2fca',
          '700': '#8224a7',
          '800': '#6c1f89',
          '900': '#5c1f70',
        },
      },
    },
  },
  plugins: [],
}