document.addEventListener('DOMContentLoaded', () => {
    // Founding Member List Slider Logic
    const track = document.querySelector('.slider-track');
    
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const dots = document.querySelectorAll('.dot');
        
        let currentIndex = 0;

        const updateSlidePosition = () => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        };

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });

        // Dot click events
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlidePosition();
            });
        });

        // Recalculate position on window resize to ensure alignment
        window.addEventListener('resize', updateSlidePosition);
    }
});