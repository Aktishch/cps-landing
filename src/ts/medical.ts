const init = (): void => {
  document.addEventListener('click', ((event: Event): void => {
    if ((event.target as HTMLButtonElement).hasAttribute('data-medical-button')) {
      const medical = (event.target as HTMLButtonElement).closest('[data-medical]') as HTMLElement

      if (!medical) return

      const content = medical.querySelector('*[data-medical-content]') as HTMLElement
      const image = medical.querySelector('*[data-medical-image]') as HTMLImageElement

      content.remove()
      image.classList.remove('blur-2xl')
    }
  }) as EventListener)
}

export default { init }
