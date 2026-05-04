document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });

    // Hero Carousel Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;
    const intervalTime = 4000;

    const goToSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (index + totalSlides) % totalSlides;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        goToSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        goToSlide(currentSlide - 1);
    };

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval(); 
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
    });

    const startInterval = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    const resetInterval = () => {
        clearInterval(slideInterval);
        startInterval();
    };

    startInterval();
});