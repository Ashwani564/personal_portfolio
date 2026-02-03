/**
 * Modern Portfolio JavaScript
 * Clean, minimal animations and interactions
 * Sawad Framer Template Inspired
 */

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
    initParallaxCard();
});

/**
 * Scroll-triggered entrance animations
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const animatedElements = document.querySelectorAll(
        '.hero-section, .stats-section, .projects-section, .experience-section, ' +
        '.tools-section, .education-section, .contact-section, ' +
        '.project-card, .experience-card, .tool-card, .education-card, .section-title, ' +
        '.stat-tags, .contact-item'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.03}s, transform 0.6s ease ${index * 0.03}s`;
        observer.observe(el);
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
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
}

/**
 * Contact form handling
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const btnSpan = submitBtn.querySelector('span');
        const originalText = btnSpan ? btnSpan.textContent : submitBtn.textContent;
        
        // Show loading state
        if (btnSpan) {
            btnSpan.textContent = 'Sending...';
        } else {
            submitBtn.textContent = 'Sending...';
        }
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simulate form submission (replace with actual API call)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        } catch (error) {
            showNotification('Something went wrong. Please try again.', 'error');
        } finally {
            if (btnSpan) {
                btnSpan.textContent = originalText;
            } else {
                submitBtn.textContent = originalText;
            }
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    });
}

/**
 * Show notification toast
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '18px 28px',
        borderRadius: '16px',
        backgroundColor: type === 'success' ? '#C5FF41' : type === 'error' ? '#FF5252' : '#F46C38',
        color: type === 'success' ? '#151312' : '#ffffff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        fontSize: '0.95rem',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        transform: 'translateY(100px)',
        opacity: '0',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    });

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

/**
 * Add parallax effect to profile card (subtle)
 */
function initParallaxCard() {
    const card = document.querySelector('.profile-card');
    const sidebar = document.querySelector('.profile-sidebar');
    
    if (!card || !sidebar || window.innerWidth < 768) return;

    sidebar.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 40;
        const deltaY = (e.clientY - centerY) / 40;

        card.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
        card.style.transition = 'transform 0.1s ease-out';
    });

    sidebar.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        card.style.transition = 'transform 0.5s ease-out';
    });
}

/**
 * Animated counter for stats (runs on scroll into view)
 */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
    const target = counter.textContent;
    const isPlus = target.startsWith('+');
    const numValue = parseFloat(target.replace(/[^0-9.]/g, ''));
    
    let current = 0;
    const increment = numValue / 40;
    const duration = 1200;
    const stepTime = duration / 40;

    const updateCounter = () => {
        current += increment;
        if (current < numValue) {
            counter.textContent = (isPlus ? '+' : '') + 
                (Number.isInteger(numValue) ? Math.floor(current) : current.toFixed(1));
            setTimeout(updateCounter, stepTime);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
}

// Initialize counters
initCounters();
