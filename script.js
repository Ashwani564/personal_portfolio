/**
 * Modern Portfolio JavaScript
 * Clean, minimal animations and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
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
        '.project-card, .experience-card, .tool-card, .education-card, .section-title'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
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
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

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
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
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
        padding: '16px 24px',
        borderRadius: '12px',
        backgroundColor: type === 'success' ? '#C5FF41' : type === 'error' ? '#FF5252' : '#F46C38',
        color: type === 'success' ? '#151312' : '#ffffff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        fontSize: '0.95rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        transform: 'translateY(100px)',
        opacity: '0',
        transition: 'all 0.3s ease'
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
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/**
 * Add parallax effect to profile card (subtle)
 */
document.addEventListener('mousemove', function(e) {
    const card = document.querySelector('.profile-card');
    if (!card || window.innerWidth < 768) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / 50;
    const deltaY = (e.clientY - centerY) / 50;

    card.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
});

// Reset card transform on mouse leave
document.querySelector('.profile-sidebar')?.addEventListener('mouseleave', function() {
    const card = document.querySelector('.profile-card');
    if (card) {
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
});

/**
 * Animated counter for stats
 */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPlus = target.startsWith('+');
        const numValue = parseFloat(target.replace(/[^0-9.]/g, ''));
        
        let current = 0;
        const increment = numValue / 50;
        const duration = 1500;
        const stepTime = duration / 50;

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

        // Only animate when in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animation after DOM loads
document.addEventListener('DOMContentLoaded', animateCounters);
