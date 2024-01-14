import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

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
      },
    },
    screens: {
      'xxs': { 'max': '320px', 'min': '0px' },
      'xs': { 'max': '480px', 'min': '320px' },
      'sm': { 'max': '640px', 'min': '480px' },
      'md': { 'max': '768px', 'min': '640px' },
      'lg': { 'max': '1024px', 'min': '768px' },
      'xl': { 'min': '1024px' },
    },
  },
  plugins: [],
}
export default config
