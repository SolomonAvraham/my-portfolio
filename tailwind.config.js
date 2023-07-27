/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "me-one": "url('/me/me-1-bg.jpg')",
        "me-one-left": "url('/me/me-1-bg-left.jpg')",
        "me-two": "url('/me/me-3.jpg')",
      },
      screens: {
        sm: "0px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        one: "'Caveat', cursive",
        two: "'Itim', cursive",
        three: "'Big Shoulders Display', cursive",
        four: "'Shantell Sans', cursive",
      },
      keyframes: {
        a: {
          "0%": { filter: "blur(-10px)" },
          "50%": { filter: "blur(50px)" },
          "100%": { filter: "blur(100px)" },
        },
      },
      animation: {
        a: "bg-me-one blur 1s linear infinite",
      },
    },
  },
  plugins: [],
};
