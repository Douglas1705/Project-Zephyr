/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {

      backgroundImage: {
        'living-room': "url('https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/images/section-Cape/scandinavian-interior-mockup-wall-decal-background-1_1_.webp')"
      },      
      
      colors: { 
        'warm-cream': '#FFF3E3',
        'Goldenrod' : '#B88E2F'
    },
  },
  plugins: [],
}
}