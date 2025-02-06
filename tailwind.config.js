module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Add paths to all your template files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // Add the tailwindcss-animate plugin
  ],
};