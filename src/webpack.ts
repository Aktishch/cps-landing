// Scripts
import fancybox from './ts/fancybox'
import sliderSwiper from './ts/slider-swiper'
import yandexMap from './ts/yandex-map'
import airDatepicker from './ts/air-datepicker'
import themeNewYear from './ts/theme-new-year'
import currentTab from './ts/current-tab'
import scrollHeader from './ts/scroll-header'
import sidebar from './ts/sidebar'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import formSubmit from './ts/form-submit'
import filter from './ts/filter'
import inputs from './ts/inputs'
import maskTel from './ts/mask-tel'
import quiz from './ts/quiz'
import medical from './ts/medical'
import preloader from './ts/preloader'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', ((): void => {
  fancybox.init()
  sliderSwiper.init()
  yandexMap.init()
  airDatepicker.init()
  themeNewYear.init()
  currentTab.init()
  scrollHeader.init()
  sidebar.init()
  scrollTo.init()
  animation.init()
  waved.init()
  formSubmit.init()
  filter.init()
  inputs.init()
  maskTel.init()
  quiz.init()
  medical.init()
  preloader.init()
}) as EventListener)
