document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    const images = [
        "https://storage.googleapis.com/objects.ucausa.org/convention/convention2016.png",
        "https://storage.googleapis.com/objects.ucausa.org/convention/convention2018.png",
        "https://storage.googleapis.com/objects.ucausa.org/convention/convention2022.png",
        "https://storage.googleapis.com/objects.ucausa.org/convention/convention2024.png"
    ];

    // Create slides
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = index === 0 ? 'slide active' : 'slide';
        slide.style.backgroundImage = `url('${src}')`;
        sliderContainer.appendChild(slide);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
});