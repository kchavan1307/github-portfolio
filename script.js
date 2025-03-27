// Animate project cards, timeline items, contact info, and education on scroll
const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .contact-info, .about-text, .about-skills, .timeline-content');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, { threshold: 0.3 });

animatedElements.forEach(element => observer.observe(element));

// Add animate class styles in CSS
document.styleSheets[0].insertRule(`
    .project-card.animate, .timeline-item.animate, .contact-info.animate, .about-text.animate, .about-skills.animate, .timeline-content.animate {
        animation: slideUp 0.5s ease-out forwards;
    }
`, 0);

document.styleSheets[0].insertRule(`
    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`, 0);

// Modal functionality (unchanged)
const items = document.querySelectorAll('.project-card, .timeline-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

items.forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        } else {
            console.warn(`Modal with ID ${modalId} not found`);
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Dynamic footer year
document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Krishna Chavan`;