        const carousel = document.querySelector('.carousel-content');
        const totalItems = document.querySelectorAll('.carousel-item').length;
        let currentIndex = 0;

        function showSlide(index) {
            if (index < 0) {
                index = totalItems - 1;
            } else if (index >= totalItems) {
                index = 0;
            }
            const offset = -index * 100;
            carousel.style.transform = 'translateX(' + offset + '%)';
            currentIndex = index;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        setInterval(nextSlide, 6000);