/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1536px'},

      'xl': {'max': '1280px'},

      'lg': {'max': '1024px'},

      'md': {'max': '768px'},

      'sm': {'max': '64rem'},
    },
    extend: {
      gridRow: {
        'imgDefaultRow': '1/4',
        'rowImg': '1',
      },
      gridColumn: {
        'span-16': 'span 2 / span 4',
      },
      gridTemplateColumns: {
        'my-columns': '1fr 1fr',
        'accountGrid': '1fr auto',
        'photoViewGrid': '36rem 20rem',
        'total': '1 /3'
      },
      gridTemplateRows: {
        'commentsRow': 'auto 1fr auto',
        'imgRow': '1/4'
      },
      fontFamily: {
        main: ["Spectral", "georgia"],
      },
      colors:{
        'custom-black': '#333333',
      },
      boxSizing: ['responsive', 'hover', 'focus'],
      boxShadow: {
        'button': '0 0 0 3px #fea, 0 0 0 4px #fb1',
        'inputSd': '0 0 0 3px #fea',
        'account': '0 0 0 3px #eee',
        'mobile': '0 6px currentColor, 0 -6px currentColor',
        'graph': '0 10px 20px rgba(0,0,0,.1)',
      },
      animation: {
        'left': 'animaLeft .3s forwards',
        'scaleup': 'scaleUp .3s forwards',
        'blink': 'latir .6s infinite',
        'skeleton': 'skeleton 1.5s infinite linear',
      },
      keyframes: {
        animaLeft: {
          'from': {
            transform: 'translateX(-20px)',
            opacity: '0'
          },
          'to': {
            transform: 'initial',
            opacity: '1'
          }
        },
        scaleUp: {
          'from': {
            transform: 'scale(.8)',
            opacity: '0'
          },
          'to': {
            transform: 'initial',
            opacity: 'initial'
          }
        },
        latir: {
          'from': {
            opacity: '0'
          },
          'to': {
            opacity: '1'
          }
        },
        skeleton: {
          'from': {
            backgroundPosition: '0px'
          },
          'to': {
            backgroundPosition: '-200%'
          }
        },
      }
    },
  },
  plugins: [],
}