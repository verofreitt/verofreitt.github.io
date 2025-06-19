
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });

        // Close menu when window is resized to desktop size
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // md breakpoint
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Typing animation for terminal
    const terminalContent = document.querySelector('.typing');
    if (terminalContent) {
        const text = terminalContent.textContent;
        terminalContent.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                terminalContent.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 1000);
    }

    // Set active menu item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Add parallax effect to stars
    window.addEventListener('scroll', () => {
        const stars = document.querySelectorAll('.stars, .stars2, .stars3');
        const scrolled = window.pageYOffset;
        
        stars.forEach((star, index) => {
            const speed = (index + 1) * 0.5;
            star.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Intersection Observer for fade-in animation
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        observer.observe(card);
    });
});
