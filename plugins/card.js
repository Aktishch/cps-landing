const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, theme }) => {
  const shadow = parseColor(theme('colors.black.DEFAULT')).color

  addComponents({
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundColor: theme('colors.white.DEFAULT'),
      boxShadow: `0px 2px 4px 0px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.2 })}`,
      borderRadius: '12px',
      border: `1px solid ${theme('colors.grey.DEFAULT')}`,
      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      overflow: 'hidden',

      '&--active': {
        '&:active': {
          transform: 'translateY(4px)',
        },

        '@media (hover)': {
          '&:hover': {
            boxShadow: `0px 2px 4px 0px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.4 })}`,
          },
        },
      },

      '&-content': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
    },
  })
})
