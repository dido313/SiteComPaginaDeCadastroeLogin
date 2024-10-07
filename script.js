        const slides = document.querySelectorAll('.slide');
        const slidesContainer = document.querySelector('.slides');
        let current = 0;
        const totalSlides = slides.length;
        const slideIntervalTime = 3000; // 3 segundos
        let slideInterval;

        function showSlide(index) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            current = (current + 1) % totalSlides;
            showSlide(current);
        }

        // Inicializar o carrossel
        function startCarousel() {
            slideInterval = setInterval(nextSlide, slideIntervalTime);
        }

        // Parar o carrossel quando o mouse estiver sobre ele
        document.querySelector('.carousel').addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Reiniciar o carrossel quando o mouse sair
        document.querySelector('.carousel').addEventListener('mouseleave', startCarousel);

        // Iniciar o carrossel
        startCarousel();
   