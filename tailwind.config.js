// this file is here for additional Tailwind configuration + for Tailwind CSS IntelliSense to work

module.exports = {
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {}
  },
  plugins: [
  ]
}
