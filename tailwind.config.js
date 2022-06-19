module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "signin-image":
          "url('https://source.unsplash.com/ECXB0YAZ_zU/1600x2000')",
      }),
      colors: {
        primary: "#E16428",
        primaryDark: "#A35709",
        secondary: "#e05c1f",
        secondaryDark: "#FFD124",
        cyan: "#22EACA",
      },
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
