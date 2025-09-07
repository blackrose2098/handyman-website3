// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        
        // Toggle menu icon between bars and times
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // You can add form validation here if needed
            // e.preventDefault(); // Uncomment to handle with AJAX
            
            // For Formsubmit.co, no need for additional JS
            // This is just a placeholder for any custom form handling
        });
    }
});