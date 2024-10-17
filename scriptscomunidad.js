window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.animated-section');
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
});

function irA(noticia) {
    document.getElementById(noticia).scrollIntoView({ behavior: 'smooth' });
}


