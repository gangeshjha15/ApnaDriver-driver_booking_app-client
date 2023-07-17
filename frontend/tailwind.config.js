/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      // you can configure the container to be centered
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        xsm: "240px",

        sm: "340px",
        // => @media (min-width: 640px) { ... }
  
        md: "440px",
        // => @media (min-width: 768px) { ... }
  
        lg: "640px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "840px",
        // => @media (min-width: 1280px) { ... }
  
        "2xl": "1040px",
      },
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   lg: '4rem',
      //   xl: '5rem',
      //   '2xl': '6rem',
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
