import { Fancybox } from '@fancyapps/ui'
import waved from './waved'

declare global {
  interface Window {
    Fancybox: typeof Fancybox
  }
}

window.Fancybox = Fancybox

const init = (): void => {
  window.Fancybox.defaults.mainClass = 'fancybox-custom'
  window.Fancybox.defaults.trapFocus = false
  window.Fancybox.defaults.autoFocus = false
  window.Fancybox.defaults.placeFocusBack = false

  window.Fancybox.bind('[data-fancybox]')

  window.Fancybox.bind('[data-fancybox-dialog]', {
    dragToClose: false,

    on: {
      done: (): void => {
        waved.init()
      },
    },
  })
}

const open = (requestUrl: string): void => {
  window.Fancybox.show(
    [
      {
        src: requestUrl,
        type: 'ajax',
      },
    ],

    {
      dragToClose: false,

      on: {
        done: (): void => {
          waved.init()
        },
      },
    }
  )
}

const close = (): void => {
  window.Fancybox.close()
}

const preloader = (): void => {
  window.Fancybox.show(
    [
      {
        src: './dialogs/dialog-preloader.php',
        type: 'ajax',
      },
    ],

    {
      dragToClose: false,
      closeButton: false,
      backdropClick: true,
    }
  )
}

export default { init, open, close, preloader }
