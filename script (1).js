// =========================================================
// NovaStream — script.js
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------------------
  // Carrossel de catálogo (Swiper.js)
  // ---------------------------------------------------------
  if (typeof Swiper !== 'undefined') {
    new Swiper('.catalog__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2800,
        disableOnInteraction: true,
      },
      breakpoints: {
        0:   { spaceBetween: 12 },
        768: { spaceBetween: 16 },
      },
    });
  }

  // ---------------------------------------------------------
  // FAQ em acordeão
  // ---------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Fecha os outros itens abertos
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-item__answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

});
