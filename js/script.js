// ==================== NAVIGATION ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== TYPING ANIMATION ====================
const typingText = document.querySelector('.typing-text');
const texts = [
    'Computer Science Student',
    'Problem Solver',
    'Competitive Programmer',
    'Financial Enthusiast',
    'Web Developer',
    'Tech Innovator'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500; // Pause before typing next
    }

    setTimeout(typeText, typingDelay);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.skill-category, .project-card, .achievement-card, .timeline-item, .interest-card, .about-text, .contact-card'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== SKILL BARS ANIMATION ====================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ==================== SKILLS CHART ====================
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'C/C++',
                    'Python',
                    'DSA',
                    'Web Dev',
                    'Git/GitHub',
                    'MySQL',
                    'Problem Solving',
                    'Financial Awareness'
                ],
                datasets: [{
                    label: 'Skill Proficiency',
                    data: [90, 75, 85, 77, 80, 70, 88, 75],
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(139, 92, 246, 1)',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        titleColor: '#f1f5f9',
                        bodyColor: '#94a3b8',
                        borderColor: 'rgba(99, 102, 241, 0.5)',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.r + '% proficiency';
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            color: '#94a3b8',
                            backdropColor: 'transparent',
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(99, 102, 241, 0.2)'
                        },
                        pointLabels: {
                            color: '#f1f5f9',
                            font: {
                                size: 12,
                                weight: '500'
                            }
                        }
                    }
                }
            }
        });
    }
});

// ==================== STATS COUNTER ANIMATION ====================
const stats = document.querySelectorAll('.stat-item h4');

const countUp = (element) => {
    const target = parseFloat(element.textContent);
    const increment = target / 100;
    let current = 0;

    const updateCount = () => {
        if (current < target) {
            current += increment;
            // Check if it's a decimal number
            if (target % 1 !== 0) {
                element.textContent = current.toFixed(2);
            } else {
                element.textContent = Math.ceil(current);
            }
            setTimeout(updateCount, 20);
        } else {
            if (target % 1 !== 0) {
                element.textContent = target.toFixed(2);
            } else {
                element.textContent = target;
            }
        }
    };

    updateCount();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countUp(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    statsObserver.observe(stat);
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && subject && message) {
        // Create mailto link
        const mailtoLink = `mailto:majumdersouvik2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        formMessage.textContent = 'Opening your email client...';
        formMessage.className = 'form-message success';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            formMessage.style.display = 'none';
        }, 3000);
    } else {
        // Show error message
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.className = 'form-message error';
    }
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.hero-particles');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== PROJECT LINKS TRACKING ====================
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Add click animation
        e.currentTarget.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.currentTarget.style.transform = 'scale(1)';
        }, 150);
    });
});

// ==================== ACHIEVEMENT CARDS HOVER EFFECT ====================
const achievementCards = document.querySelectorAll('.achievement-card');

achievementCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.achievement-icon').style.transform = 'rotate(360deg) scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.achievement-icon').style.transform = 'rotate(0deg) scale(1)';
    });
});

// Add transition to achievement icons
document.addEventListener('DOMContentLoaded', () => {
    const achievementIcons = document.querySelectorAll('.achievement-icon');
    achievementIcons.forEach(icon => {
        icon.style.transition = 'transform 0.5s ease';
    });
});

// ==================== CURSOR TRAIL EFFECT (Optional) ====================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== TIMELINE ANIMATION ====================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.timeline-card').style.opacity = '1';
            entry.target.querySelector('.timeline-card').style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    const card = item.querySelector('.timeline-card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    }
});

// ==================== INTEREST CARDS INTERACTION ====================
const interestCards = document.querySelectorAll('.interest-card');

interestCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add transition to interest icons
document.addEventListener('DOMContentLoaded', () => {
    const interestIcons = document.querySelectorAll('.interest-card i');
    interestIcons.forEach(icon => {
        icon.style.transition = 'transform 0.3s ease';
    });
});

// ==================== DARK MODE TOGGLE (Future Enhancement) ====================
// This can be implemented later if needed

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to Souvik Majumder\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #8b5cf6; font-size: 14px;');
console.log('%cDeveloped with ❤️ using HTML, CSS, and JavaScript', 'color: #ec4899; font-size: 12px;');

// ==================== PERFORMANCE OPTIMIZATION ====================
// Lazy load images when they come into viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== SERVICE WORKER (PWA Support) ====================
// Register service worker for offline capability (optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA features
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered', reg))
    //     .catch(err => console.log('Service Worker registration failed', err));
}

// ==================== ACCESSIBILITY ENHANCEMENTS ====================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Press 'Home' to scroll to top
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'End' to scroll to bottom
    if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// ==================== EASTER EGG ====================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = 'none';
        }, 5000);
    }
});

// ==================== ANALYTICS TRACKING (Placeholder) ====================
// Add your analytics code here
function trackEvent(category, action, label) {
    // Example: Google Analytics event tracking
    // gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    // });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track important interactions
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Navigation', 'Click', link.textContent);
    });
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent);
    });
});