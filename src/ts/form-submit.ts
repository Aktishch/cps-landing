import fancybox from './fancybox'
import formValidate from './functions/form-validate'

const formSubmit = (event: Event): void => {
  const form = event.target as HTMLFormElement

  if (form.dataset.form == 'submit') {
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

        fancybox.open('./dialogs/dialog-submit.html')

        form.reset()

        submitBtn.removeAttribute('disabled')
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
