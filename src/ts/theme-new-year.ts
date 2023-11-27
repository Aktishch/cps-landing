const init = (): void => {
  const html = document.documentElement as HTMLElement
  const currentYear: number = new Date().getFullYear()
  const startTime: number = new Date(`December 01 ${currentYear} 00:00:00`).getTime()
  const endTime: number = new Date(`January 15 ${currentYear + 1} 00:00:00`).getTime()
  const currentTime: number = new Date().getTime()

  switch (currentTime >= startTime && currentTime <= endTime) {
  case true: {
    html.classList.add('theme-new-year')
    break
  }

  case false: {
    html.classList.remove('theme-new-year')
    break
  }
  }
}

export default { init }
