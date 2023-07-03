import fancybox from './fancybox'
import formValidate from './functions/form-validate'

const formSubmit = (event: Event): void => {
  const form = event.target as HTMLFormElement

  if (form.dataset.form == 'submit' || form.dataset.form == 'quiz') {
    event.preventDefault()

    if (!formValidate.init(form)) return

    const formData: FormData = new FormData(form)
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const requestUrl = './ajax/submit-handler.php'

    submitBtn.setAttribute('disabled', 'disabled')

    fancybox.preloader()

    fetch(requestUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response: Response): any => {
        return response.text()
      })
      .then((response: any): void => {
        fancybox.close()

        if (form.dataset.form == 'submit') {
          fancybox.open('./dialogs/dialog-submit.php')

          form.reset()

          submitBtn.removeAttribute('disabled')
        }

        if (form.dataset.form == 'quiz') {
          const submit = form.querySelector('*[data-form-submit]') as HTMLElement
          const quiz = form.querySelector('*[data-form-quiz]') as HTMLElement
          const image = form.querySelector('*[data-form-image]') as HTMLElement
          const success = form.querySelector('*[data-form-success]') as HTMLElement

          submit.classList.remove('hidden')
          submit.classList.add('flex')

          quiz.remove()
          image.remove()

          success.classList.remove('hidden')
          success.classList.add('flex')
        }
      })
      .catch((error: string): void => console.log('The form has not been sent', error))
  } else if (form.dataset.form == 'action') {
    if (!formValidate.init(form)) event.preventDefault()
  }
}

const init = (): void => {
  document.addEventListener('submit', ((event: Event): void => {
    if ((event.target as HTMLFormElement).hasAttribute('data-form')) formSubmit(event)
  }) as EventListener)
}

export default { init }
