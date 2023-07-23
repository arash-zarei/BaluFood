module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53c60b",
        footerBg: "#234a0b",
      },
      screens: {
        sm: "576px",

        md: "639px",

        lg: "767px",

        xl: "1023px",

        "2xl": "1279px",
      },
    },
  },
  plugins: [],
};
