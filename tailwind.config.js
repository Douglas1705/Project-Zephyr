/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {

      backgroundImage: {
        'living-room': "url('https://i.ibb.co/QjDpnS8B/cape2.webp')",
        
        'capePages' : "url('https://i.ibb.co/7xMc8d6c/Rectangle-1.webp')",

        'modalCongratulations' : "url('https://i.ytimg.com/vi/UoJ2egwV84Y/maxresdefault.jpg')",

      },            

      colors: { 
        'warm-cream': '#FFF3E3',
        'Goldenrod' : '#B88E2F',
        'WhisperWhite' : '#FCF8F3',
        'deep-space-blue': '#19324F',
    },

    boxShadow: { 
      'ShadowComplete': '0 -4px 12px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.08)', 
    },
  },
  plugins: [],
}
}