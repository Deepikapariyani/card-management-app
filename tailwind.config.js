// tailwind.config.js
module.exports = {
  // prefix: 'tw-', // Ensure you set the prefix if using 'tw-' classes
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#1A202C', // Sidebar background color
        'brand-blue': '#007ace', // Example: Define brand colors
      },
      spacing: {
        '64': '16rem',
      },
    },
  },
  plugins: [],
};
