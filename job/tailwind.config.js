export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-01": "var(--lr-colors-text-01)", // Custom text color
      },
      fontFamily: {
        grotesque: ["'Basis Grotesque Pro'", "sans-serif"], // Custom font family
      },
      letterSpacing: {
        tighter: "-0.02em", // Custom letter spacing
      },
    },
  },
  plugins: [],
};
