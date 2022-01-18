module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.7)",
        secondary: "#5454D4",
        secondaryDark: "#3e3eb8",
        secondaryRed: "#f04037",
        secondaryYellow: "#fedc5a",
        "secondary-light": "#5454d42b",
        "secondaryYellow-light": "#fedd5a22",
        "secondaryRed-light": "#f040372c",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
