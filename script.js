// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.3 });

projectCards.forEach(card => observer.observe(card));

// Add animate class styles in CSS
document.styleSheets[0].insertRule(`
    .project-card.animate {
        animation: slideUp 0.5s ease-out forwards;
    }
`, 0);

document.styleSheets[0].insertRule(`
    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`, 0);