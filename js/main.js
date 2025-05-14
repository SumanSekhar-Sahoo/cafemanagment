// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const scrollToTopBtn = document.getElementById('scrollToTop');
const orderNowBtn = document.getElementById('orderNowBtn');
const navbar = document.querySelector('.navbar');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Navigation links - close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
    
    // Change navbar background on scroll
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Order Now button scrolls to menu section
orderNowBtn.addEventListener('click', () => {
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Show the cart modal after a short delay
    setTimeout(() => {
        toggleCartModal();
    }, 1000);
});

// Form Submissions
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value.trim();
    
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    
    // Simulate success message
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Add specific animations for sections
            if (entry.target.classList.contains('about-content')) {
                entry.target.classList.add('fade-in-left');
            }
            
            if (entry.target.classList.contains('about-image')) {
                entry.target.classList.add('fade-in-right');
            }
            
            if (entry.target.classList.contains('contact-info')) {
                entry.target.classList.add('fade-in-left');
            }
            
            if (entry.target.classList.contains('contact-form')) {
                entry.target.classList.add('fade-in-right');
            }
            
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing elements
document.querySelectorAll('.about-content, .about-image, .contact-info, .contact-form').forEach(section => {
    observer.observe(section);
});