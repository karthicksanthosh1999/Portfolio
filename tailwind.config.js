/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    color : {
      txtPrimary: "#fff",
      txtYellow: "#131313"
    },
    backgroundColor : {
      bgPrimary : "#131313",
      bgYellow : "#c9f31d",
      bgBrown : "#1f1f1f"
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

