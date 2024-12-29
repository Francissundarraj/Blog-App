/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {

      boxShadow: {
        'custom': '0px 0px 20px rgba(0, 255, 255, 0.7)', // Custom box shadow
      },
    },
  },
  plugins: [],
}

