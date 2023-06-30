import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, EffectFlip } from 'swiper'
import media from './functions/media'
// import quiz from './quiz'

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
  // new window.Swiper('.gallery-slider .swiper', {
  //   pagination: {
  //     el: '.gallery-slider .swiper-pagination',
  //     clickable: true,
  //   },

  //   navigation: {
  //     prevEl: '.gallery-slider .swiper-button-prev',
  //     nextEl: '.gallery-slider .swiper-button-next',
  //   },

  //   effect: 'coverflow',
  //   slidesPerView: 1.3,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   loop: true,
  //   freeMode: true,

  //   breakpoints: {
  //     [media.sm]: {
  //       slidesPerView: 2,
  //     },

  //     [media.lg]: {
  //       slidesPerView: 3,
  //     },
  //   },

  //   autoplay: {
  //     delay: 3000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: false,
  //   },
  // }) as Swiper

  // new window.Swiper('.products-slider .swiper', {
  //   pagination: {
  //     el: '.products-slider .swiper-pagination',
  //     clickable: true,
  //   },

  //   navigation: {
  //     prevEl: '.products-slider .swiper-button-prev',
  //     nextEl: '.products-slider .swiper-button-next',
  //   },

  //   slidesPerView: 1.3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   watchSlidesProgress: true,

  //   breakpoints: {
  //     [media.sm]: {
  //       slidesPerView: 2,
  //     },

  //     [media.lg]: {
  //       slidesPerView: 3,
  //     },

  //     [media.xl]: {
  //       slidesPerView: 4,
  //     },
  //   },
  // }) as Swiper

  // const quizImages = new window.Swiper('.quiz-images .swiper', {
  //   effect: 'cube',
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   allowTouchMove: false,
  // }) as Swiper

  // new window.Swiper('.quiz-slider .swiper', {
  //   navigation: {
  //     prevEl: '.quiz-slider .swiper-button-prev',
  //     nextEl: '.quiz-slider .swiper-button-next',
  //   },

  //   pagination: {
  //     el: '.quiz-slider .swiper-pagination',
  //     type: 'custom',

  //     renderCustom: (swiper: Swiper, current: number, total: number): number => {
  //       return total - current
  //     },
  //   },

  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   allowTouchMove: false,
  //   watchSlidesProgress: true,

  //   on: {
  //     slideChange: (swiper: Swiper): void => {
  //       quizImages.slideTo(swiper.activeIndex)

  //       quiz.checkQuizSlide(swiper.visibleSlides[0])

  //       if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {
  //         swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')
  //       } else {
  //         swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')
  //       }
  //     },
  //   },
  // }) as Swiper

  // const descriptionBg = new window.Swiper('.description-bg .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false,
  // }) as Swiper

  // const descriptionBullets = new window.Swiper('.description-bullets .swiper', {
  //   slidesPerView: 3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   speed: 1000,
  //   grabCursor: true,

  //   breakpoints: {
  //     [media.md]: {
  //       slidesPerView: 4,
  //     },
  //   },
  // }) as Swiper

  // const descriptionInfo = new window.Swiper('.description-info .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false,
  // }) as Swiper

  // new window.Swiper('.description-slider .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   grabCursor: true,

  //   thumbs: {
  //     swiper: descriptionBullets,
  //   },

  //   on: {
  //     slideChange: (swiper: Swiper): void => {
  //       descriptionBg.slideTo(swiper.activeIndex)
  //       descriptionInfo.slideTo(swiper.activeIndex)
  //     },
  //   },
  // }) as Swiper
}

export default { init }
