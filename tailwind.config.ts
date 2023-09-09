const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        delivereat: {
          primary: "#01A7C2",
          secondary: "#006989",
        }
      }
    },
  },
  plugins: [],
});
