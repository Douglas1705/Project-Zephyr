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
        
        'capePages' : "url('https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/static/image-static-cape.webp')"       
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