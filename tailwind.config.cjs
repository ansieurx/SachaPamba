module.exports = {
  content: ['./*.html', './app.js'],
  ...{
      theme: {
        /* Escalamos la tipografía base para accesibilidad, con proporciones equilibradas */
        fontSize: {
          'xs': ['1.05rem', { lineHeight: '1.5rem' }],     /* ~16.8px */
          'sm': ['1.15rem', { lineHeight: '1.7rem' }],     /* ~18.4px */
          'base': ['1.25rem', { lineHeight: '1.85rem' }],  /* ~20px */
          'lg': ['1.35rem', { lineHeight: '1.9rem' }],     /* ~21.6px */
          'xl': ['1.6rem', { lineHeight: '2.1rem' }],      /* ~25.6px */
          '2xl': ['2rem', { lineHeight: '2.4rem' }],       /* ~32px */
          '3xl': ['2.25rem', { lineHeight: '2.75rem' }],   /* ~36px */
          '4xl': ['2.5rem', { lineHeight: '3rem' }],       /* ~40px */
          '5xl': ['3rem', { lineHeight: '1' }],            /* ~48px */
          '6xl': ['3.75rem', { lineHeight: '1' }],         /* ~60px */
        },
        extend: {
          colors: {
            brand: {
              cream: '#FEFAE0',     // Fondo general cálido
              forest: '#283618',    // Identidad, barra nav y footer
              olive: '#CCD5AE',     // Fondo tarjetas y bordes
              sunflower: '#E9C46A', // Botón de acción principal (CTA)
              leaf: '#131A0B',      // Textos legibles y bordes oscuros
              moss: '#606C38'       // Acentos vegetales
            }
          },
          fontFamily: {
            sans: ['"Outfit"', 'sans-serif'],
            botanic: ['"Fraunces"', 'serif'],
            hand: ['"Caveat"', 'cursive']
          }
        }
      }
    }
};
