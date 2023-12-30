import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        walk: 'url("/landing-01/assets/weird.png")',
        landin02Hero: 'url("/landing-02/assets/bg-hero.jpg")'
      },
      colors: {
        'primary-blue': '#106eb0',
        'primary-orange': '#ec7000',
        'primary-gray': '#33303e',
        'second-gray': '#4e4b59',
        'gray-phone': '#f4f4f4',
        'text-gray': '#7a77e6',
        'opacity-gray': 'rgba(100, 80, 57, 0.1)'
      }
    },
  }
}
export default config
