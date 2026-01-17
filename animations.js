// Animation au scroll - Fade in des éléments
document.addEventListener('DOMContentLoaded', function() {
    // Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les sections
    const sections = document.querySelectorAll('section, .c1, .c2, .zellij, form, .commentaire');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Observer les images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s`;
        observer.observe(img);
    });

    // Smooth scroll pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation du bouton au hover
    const buttons = document.querySelectorAll('button, .btn1, .bouton-demande');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Parallax effect léger au scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.c1, .c2');
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.05}px)`;
        });
    });

    // Animation des images au hover
    const galleryItems = document.querySelectorAll('#catalogue img');
    galleryItems.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) translateY(-5px)';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    console.log('Animations chargées avec succès!');
});
