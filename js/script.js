document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== "#") {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.feature-card, .package-card, .preview-card').forEach((el) => observer.observe(el));

window.addEventListener('scroll', function() {
    const header = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(37, 99, 235, 0.9)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        if (!this.classList.contains('popular')) {
            this.style.transform = 'translateY(-10px)';
        }
    });

    card.addEventListener('mouseout', function() {
        if (!this.classList.contains('popular')) {
            this.style.transform = 'translateY(0)';
        }
    });
});