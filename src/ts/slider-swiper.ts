import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, EffectFlip } from 'swiper'
import media from './functions/media'
import quiz from './quiz'

declare global {
  interface Window {
    Swiper: typeof Swiper
  }
}

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, EffectFlip])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

const init = (): void => {
  const mainImages = new window.Swiper('.main-images .swiper', {
    effect: 'fade',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    speed: 500,
    allowTouchMove: false,
    loop: true,
  }) as Swiper

  new window.Swiper('.main-slider .swiper', {
    pagination: {
      el: '.main-slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.main-slider .swiper-button-prev',
      nextEl: '.main-slider .swiper-button-next',
    },

    effect: 'flip',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    speed: 500,
    grabCursor: true,
    loop: true,

    on: {
      slideChange: (swiper: Swiper): void => {
        mainImages.slideTo(swiper.activeIndex)
      },
    },

    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  }) as Swiper

  new window.Swiper('.quiz-slider .swiper', {
    navigation: {
      prevEl: '.quiz-slider .swiper-button-prev',
      nextEl: '.quiz-slider .swiper-button-next',
    },

    pagination: {
      el: '.quiz-slider .swiper-pagination',
      type: 'custom',

      renderCustom: (swiper: Swiper, current: number, total: number): number => {
        return total - current
      },
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    watchSlidesProgress: true,

    on: {
      slideChange: (swiper: Swiper): void => {
        quiz.checkQuizSlide(swiper.visibleSlides[0])

        if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {
          swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')
        } else {
          swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')
        }
      },
    },
  }) as Swiper

  new window.Swiper('.result-slider .swiper', {
    pagination: {
      el: '.result-slider .swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.result-slider .swiper-button-prev',
      nextEl: '.result-slider .swiper-button-next',
    },

    slidesPerView: 1.1,
    spaceBetween: 12,
    speed: 500,
    grabCursor: true,
    freeMode: true,

    breakpoints: {
      [media.sm]: {
        slidesPerView: 1,
      },
    },
  }) as Swiper
}

export default { init }
