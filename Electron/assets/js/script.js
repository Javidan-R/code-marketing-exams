const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;

// Add event listeners to navigation buttons
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Create dots for each slide
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

// Display the current slide and activate the corresponding dot
function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === slideIndex);
  });

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });

  currentSlide = slideIndex;
}

// Display the previous slide
function showPreviousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Display the next slide
function showNextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Automatically show the next slide every 5 seconds
setInterval(showNextSlide, 2000);

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });