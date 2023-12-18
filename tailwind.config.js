/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '600px',
      // 'sm': '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '900px',
      // 'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      dxl: '1680px',

      txl: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
        cormorant: "'Cormorant Garamond', serif",
      },
      fontSize: {
        small: '2rem',
        'display-1': [
          '0.75rem',
          {
            fontWeight: '400',
            lineHeight: '1.625rem',
            letterSpacing: '0.016rem',
          },
        ],
        'display-3': [
          '0.875rem',
          {
            fontWeight: '300',
            lineHeight: '1.625rem',
            letterSpacing: '0.016rem',
          },
        ],
        'display-4': [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '2.125rem',
            letterSpacing: '0.025rem',
          },
        ],
        'display-5': [
          '0.875rem',
          {
            fontWeight: '600',
            lineHeight: '3.125rem',
            letterSpacing: '0.025rem',
          },
        ],
        'display-6': [
          '1.063rem',
          {
            fontWeight: '100',
            lineHeight: '2.125rem',
            letterSpacing: '0.016rem',
          },
        ],
        'display-8': [
          '1.125rem',
          {
            fontWeight: '600',
            lineHeight: '3.125rem',
            letterSpacing: '0.025rem',
          },
        ],
        'display-9': [
          '1.25rem',
          {
            fontWeight: '500',
            lineHeight: '2.75rem',
            letterSpacing: '0rem',
          },
        ],
        'display-11': [
          '1.563rem',
          {
            fontWeight: '400',
            lineHeight: '2.188rem',
            letterSpacing: '0rem',
          },
        ],
        'display-12': [
          '1.875rem',
          {
            fontWeight: '400',
            lineHeight: '2.5rem',
            letterSpacing: '0rem',
          },
        ],
        'display-13': [
          '2.188rem',
          {
            fontWeight: '400',
            lineHeight: '2.75rem',
            letterSpacing: '0rem',
          },
        ],
        'display-14': [
          '2.813rem',
          {
            fontWeight: '400',
            lineHeight: '3.438rem',
            letterSpacing: '0rem',
          },
        ],
        'display-15': [
          '3.438rem',
          {
            fontWeight: '400',
            lineHeight: '4rem',
            letterSpacing: '0rem',
          },
        ],
        'display-16': [
          '1.063rem',
          {
            fontWeight: '600',
            lineHeight: '2.125rem',
            letterSpacing: '0.016rem',
          },
        ],
        'display-17': [
          '1.125rem',
          {
            fontWeight: '400',
            lineHeight: '2.125rem',
            letterSpacing: '0rem',
          },
        ],
        'display-18': [
          '1.625rem',
          {
            fontWeight: '500',
            lineHeight: '2.813rem',
            letterSpacing: '0rem',
          },
        ],
        'display-extra': [
          '0.75rem',
          {
            fontWeight: '600',
            lineHeight: '2.75rem',
            letterSpacing: '0rem',
          },
        ],
      },
      colors: {
        search: '#EDE9E5',
        footerBg: '#242B21',
        textPrimary: '#FFFFFF',
        textSecondary: '#242B21',
        copyRightBorder: '#44513E',
        uspBlockBackground: '#CDAA72',
        filterBorder: '#EDE9E5',
      },
    },
  },
  plugins: [],
}
