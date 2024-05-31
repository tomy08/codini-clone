/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#031CFF',
        'gray-secondary': '#242E3A',
        'orange-section': '#F05927',
        'pink-section': '#F75E8D',
        'yellow-section': '#FFD000',
        'blue-section': '#25AEBC',
        'green-section': '#05D785 ',
      },
    },
  },
  plugins: [],
}
