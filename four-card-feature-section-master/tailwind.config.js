/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
       fontSize: {
        body: "15px",
      },
      borderColor:{
        cyan:"hsl(180,62%,55%)",
        red : "hsl(0, 78%, 62%)",
        orange:"hsl(34,97%,64%)",
        blue:"hsl(212,86%,64%)",
      }
    },
  plugins: [],
  }
}

