document.addEventListener('DOMContentLoaded', function () {
    disableScroll(); // Disable scrolling initially
});

function revealContent() {
    enableScroll(); // Enable scrolling when the button is pressed
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}
const doctorSlider = document.querySelector('.doctor-slider');
        const doctorSlides = document.querySelector('.doctor-slides');
        const slideWidth = document.querySelector('.doctor-slide').offsetWidth;

        function nextSlide() {
            doctorSlides.style.transform = `translateX(-${slideWidth}px)`;
        }

        function prevSlide() {
            doctorSlides.style.transform = 'translateX(0)';
        }
