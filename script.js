// Animate project cards, timeline items, and contact info on scroll
const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .contact-info');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.3 });

animatedElements.forEach(element => observer.observe(element));

// Add animate class styles in CSS
document.styleSheets[0].insertRule(`
    .project-card.animate, .timeline-item.animate, .contact-info.animate {
        animation: slideUp 0.5s ease-out forwards;
    }
`, 0);

document.styleSheets[0].insertRule(`
    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`, 0);