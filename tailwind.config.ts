import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#F8F8F8',
          300: '#E9EAEC',
          400: '#CBD5E0',
          500: '#A0AEC0',
          600: '#687588',
          900: '#151A20',
        },
        primary: {
          100: '#C6ADE6',
          200: '#AC87DA',
          300: '#9363CF',
          400: '#7B41C5',
          500: '#6937A7',
        },
      },
      fontFamily: {
        manrope: ['Manrope'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};
export default config;
