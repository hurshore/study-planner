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
          700: '#313A49',
          900: '#151A20',
        },
        primary: {
          50: '#F2ECF9',
          100: '#C6ADE6',
          200: '#AC87DA',
          300: '#9363CF',
          400: '#7B41C5',
          500: '#6937A7',
          700: '#462570',
        },
        secondary: {
          400: '#41C57B',
        },
        error: {
          300: '#FFECEB',
          400: '#E03137',
        },
        success: {
          300: '#E0FFF0',
          400: '#0CAF60',
        },
        text: {
          2: '#1D242D',
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
