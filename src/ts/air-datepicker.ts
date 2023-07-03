import AirDatepicker from 'air-datepicker'
import localeRu from 'air-datepicker/locale/ru'
import touchDevice from './functions/touch-device'

const init = (): void => {
  const calendars = document.querySelectorAll('*[data-input="calendar"]') as NodeListOf<Element>

  calendars.forEach((element: Element) => {
    const calendar = element as HTMLElement

    new AirDatepicker(calendar, {
      onSelect: (): void => {
        const quiz = document.querySelector('*[data-quiz]') as HTMLElement

        quiz.dataset.quiz = 'auto'
      },

      locale: localeRu,
      isMobile: touchDevice.init(),
      autoClose: true,
      minDate: new Date(),
      position: 'bottom left',
    })
  })
}

export default { init }
