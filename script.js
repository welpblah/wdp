document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const sections = [
        container.querySelector('header'),
        ...Array.from(container.querySelectorAll('.project')),
        container.querySelector('footer')
    ];
    let currentIndex = 0;

    function scrollToSection(index) {
        const targetSection = sections[index];
        container.style.transition = 'none';
        container.scrollLeft = targetSection.offsetLeft;
        container.offsetHeight; // Force reflow
        container.style.transition = 'transform 0.3s ease';
    }

    function moveCarousel(direction) {
        currentIndex = (currentIndex + direction + sections.length) % sections.length;
        scrollToSection(currentIndex);
    }

    document.querySelector('.cursor-left').addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            moveCarousel(-1);
        }
    });

    document.querySelector('.cursor-right').addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            moveCarousel(1);
        }
    });

    // Arrow key navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            moveCarousel(-1);
        } else if (e.key === 'ArrowRight') {
            moveCarousel(1);
        }
    });

    // Ensure we start at the header
    scrollToSection(0);
});