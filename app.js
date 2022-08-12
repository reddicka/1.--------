const slides = document.querySelectorAll('.slide');

function slidesPlugin(activeSlide = 0) {
    slides[activeSlide].classList.add('active');

    // Можем перечислить цикл так:
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();

            slide.classList.add('active');
        });
    }

    // А можем так:
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

slidesPlugin(2);
