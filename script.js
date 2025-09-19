// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoading();
    initParticles();
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initMetricsAnimation();
    initContactForm();
    initGlitchEffects();
});

// Loading Screen Animation
function initLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingFill = document.querySelector('.loading-fill');
    const systemInfo = document.querySelectorAll('.system-info p');
    
    // Animate loading bar
    anime({
        targets: loadingFill,
        width: '100%',
        duration: 3000,
        easing: 'easeInOutQuad'
    });
    
    // Animate system messages
    anime({
        targets: systemInfo,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(500, {start: 500}),
        duration: 1000,
        easing: 'easeOutQuad'
    });
    
    // Hide loading screen after animation
    setTimeout(() => {
        anime({
            targets: loadingScreen,
            opacity: 0,
            duration: 500,
            complete: () => {
                loadingScreen.style.display = 'none';
                // Start main animations
                animateHeroEntry();
            }
        });
    }, 4000);
}

// Initialize Particles.js
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00ff41'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00ff41',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Typing effect for hero section
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const commands = ['whoami', 'cat /dev/skills', 'ls -la projects/', 'ping network.status'];
    let currentCommand = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const command = commands[currentCommand];
        
        if (isDeleting) {
            typingText.textContent = command.substring(0, currentChar - 1);
            currentChar--;
        } else {
            typingText.textContent = command.substring(0, currentChar + 1);
            currentChar++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentChar === command.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentCommand = (currentCommand + 1) % commands.length;
            typeSpeed = 500; // Pause before next command
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect after loading
    setTimeout(typeEffect, 5000);
}

// Hero section entry animation
function animateHeroEntry() {
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    // Animate hero content
    anime({
        targets: heroContent,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuad'
    });
    
    // Animate hero visual
    anime({
        targets: heroVisual,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutQuad'
    });
    
    // Animate terminal appearance
    anime({
        targets: '.terminal-body',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
        easing: 'easeOutBack'
    });
    
    // Animate buttons
    anime({
        targets: '.hero-buttons .btn',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(200, {start: 1000}),
        duration: 600,
        easing: 'easeOutBack'
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Specific animations for different elements
                if (entry.target.classList.contains('about-card')) {
                    animateAboutCard(entry.target);
                } else if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                } else if (entry.target.classList.contains('project-card')) {
                    animateProjectCard(entry.target);
                } else if (entry.target.classList.contains('section-title')) {
                    animateSectionTitle(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.about-card, .timeline-item, .project-card, .section-title, .contact-grid > *').forEach(el => {
        observer.observe(el);
    });
}

// About card animation
function animateAboutCard(card) {
    anime({
        targets: card,
        translateY: [50, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 800,
        easing: 'easeOutQuad'
    });
}

// Timeline item animation
function animateTimelineItem(item) {
    const isOdd = Array.from(item.parentNode.children).indexOf(item) % 2 === 0;
    
    anime({
        targets: item,
        translateX: [isOdd ? -50 : 50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
    });
}

// Project card animation
function animateProjectCard(card) {
    anime({
        targets: card,
        translateY: [50, 0],
        opacity: [0, 1],
        rotateY: [10, 0],
        duration: 800,
        easing: 'easeOutQuad'
    });
}

// Section title animation
function animateSectionTitle(title) {
    anime({
        targets: title,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutBack'
    });
}

// Metrics animation
function initMetricsAnimation() {
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricFills = entry.target.querySelectorAll('.metric-fill');
                metricFills.forEach(fill => {
                    const width = fill.dataset.width;
                    anime({
                        targets: fill,
                        width: width + '%',
                        duration: 1500,
                        easing: 'easeOutQuad',
                        delay: Math.random() * 500
                    });
                });
            }
        });
    }, observerOptions);
    
    const metricsCard = document.querySelector('.about-card:last-child');
    if (metricsCard) {
        observer.observe(metricsCard);
    }
}

// Contact form functionality
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> TRANSMITTING...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> TRANSMITTED';
            submitBtn.style.background = '#00ff41';
            
            // Show success message
            showNotification('Message transmitted successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        ${message}
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-secondary);
        color: var(--text-secondary);
        padding: 15px 20px;
        border-radius: 5px;
        border: 1px solid ${type === 'success' ? 'var(--primary-color)' : 'var(--accent-color)'};
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: 'Share Tech Mono', monospace;
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Glitch effects
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = '';
            }, 10);
        });
    });
    
    // Random glitch effect
    setInterval(() => {
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        if (randomElement && Math.random() > 0.95) {
            randomElement.style.animation = 'none';
            setTimeout(() => {
                randomElement.style.animation = '';
            }, 50);
        }
    }, 1000);
}

// Matrix rain effect (optional enhancement)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-5';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Cursor trail effect
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Remove old trail elements
        document.querySelectorAll('.cursor-trail').forEach(el => {
            if (Date.now() - parseInt(el.dataset.time) > 1000) {
                el.remove();
            }
        });
        
        // Create trail element
        const trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail';
        trailElement.dataset.time = Date.now();
        trailElement.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            opacity: 0.7;
            transform: translate(-50%, -50%);
            transition: opacity 0.5s ease-out;
        `;
        
        document.body.appendChild(trailElement);
        
        setTimeout(() => {
            trailElement.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            trailElement.remove();
        }, 600);
    });
}

// Initialize cursor trail (optional - can be resource intensive)
// initCursorTrail();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑ ↑ ↓ ↓ ← → ← → B A
    if (!window.konamiProgress) window.konamiProgress = 0;
    
    if (e.keyCode === konamiCode[window.konamiProgress]) {
        window.konamiProgress++;
        if (window.konamiProgress === konamiCode.length) {
            // Easter egg activated
            createMatrixRain();
            showNotification('CHEAT CODE ACTIVATED: Matrix Mode Enabled!', 'success');
            window.konamiProgress = 0;
        }
    } else {
        window.konamiProgress = 0;
    }
});

// Performance monitoring
function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`%c🚀 Portfolio loaded in ${loadTime}ms`, 'color: #00ff41; font-weight: bold;');
            }, 0);
        });
    }
}

initPerformanceMonitoring();
