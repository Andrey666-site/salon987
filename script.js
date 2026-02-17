// ===== SMOOTH SCROLLING =====
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

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(212, 175, 119, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== TESTIMONIALS SLIDER =====
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
    // Remove active class from all
    testimonials.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
function startTestimonialRotation() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
}

// Dots click handler
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
        clearInterval(testimonialInterval);
        startTestimonialRotation();
    });
});

// Start rotation
startTestimonialRotation();

// ===== SCROLL ANIMATIONS =====
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

// Observe all service cards, philosophy cards, and gallery items
document.querySelectorAll('.service-card, .philosophy-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== BOOKING BUTTONS =====
const bookingButtons = document.querySelectorAll('.glass-button, .primary-button, .sticky-mobile-btn');

bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Call phone number for booking
        window.location.href = 'tel:+380937728621';
    });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ===== GALLERY HOVER SOUND EFFECT (optional) =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.zIndex = '1';
    });
});

// ===== PRICE LIST ACCORDION =====
const priceCategories = document.querySelectorAll('.price-category');

priceCategories.forEach(category => {
    const header = category.querySelector('.category-header');
    
    header.addEventListener('click', () => {
        // Toggle current category
        const isActive = category.classList.contains('active');
        
        // Optional: Close other categories (comment out for multiple open)
        // priceCategories.forEach(cat => cat.classList.remove('active'));
        
        // Toggle current
        if (isActive) {
            category.classList.remove('active');
        } else {
            category.classList.add('active');
        }
    });
});

// All categories closed by default (no auto-open)

// ===== MOBILE MENU TOGGLE (for future implementation) =====
// This can be expanded when you add a hamburger menu for mobile

console.log('S_tet Beauty Bar website loaded successfully! 💅✨');
