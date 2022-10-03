module.exports = {
  purge: [
    "./src/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Calibre", "sans-serif"],
      serif: ["Reckless Neue", "serif"]
    },
    extend: {
      colors: {
        "nl-green": "#507453",
        "nl-blue": "#AACDEC",
        "nl-orange": "#E88324",
        "nl-pink": "#F6A0A7", 
        "nl-cream": "#ede6db" 
      },
      spacing: {
        "4/11": "36.3636363636%",
        "7/11": "63.6363636364%",
        "1/12": "8.3333333333%",        
        "4/22": "18.1818181818%",
        "7/22": "31.8181818182%",
        "1/24": "4.1666666667%",
        "4/24": "16.6666666667%",
        "5/24": "20.8333333333%",
        "7/24": "29.1666666667%",
        "11/24": "45.8333333333%",
        "13/24": "54.1666666667%",
        "17/24": "70.8333333333%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
