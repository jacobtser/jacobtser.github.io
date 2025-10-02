:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary: #7e22ce;
    --dark: #1e293b;
    --light: #f8fafc;
    --gray: #64748b;
    --light-gray: #e2e8f0;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    color: var(--dark);
    line-height: 1.6;
    background-color: var(--light);
    scroll-behavior: smooth;
}

h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    background: var(--primary);
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
    background: var(--secondary);
}

.btn-secondary:hover {
    background: #6b21a8;
}

/* Header & Navigation */
header {
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--primary);
}

.menu-btn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    padding: 160px 0 100px;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    text-align: center;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
}

.hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    color: var(--gray);
}

/* Section Styling */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title h2 {
    font-size: 2.5rem;
    position: relative;
    display: inline-block;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary);
    border-radius: 2px;
}

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.about-text h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.mission-vision {
    margin-top: 2rem;
    padding: 1.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* Documents Section */
.documents {
    background: #f8fafc;
}

.doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}

.doc-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
}

.doc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.doc-icon {
    background: var(--primary);
    color: white;
    font-size: 2rem;
    padding: 25px;
    text-align: center;
}

.doc-content {
    padding: 20px;
}

.doc-content h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
}

/* Portfolio Section */
.portfolio-filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.filter-btn {
    padding: 8px 20px;
    margin: 5px;
    background: white;
    border: 1px solid var(--light-gray);
    border-radius: 30px;
    cursor: pointer;
    transition: var(--transition);
}

.filter-btn.active, .filter-btn:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}

.portfolio-item {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    height: 250px;
}

.portfolio-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(37, 99, 235, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;
    transition: var(--transition);
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-item:hover .portfolio-img {
    transform: scale(1.1);
}

/* Skills Section */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.skill-category {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.skill-category h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: var(--primary);
}

.skill-item {
    margin-bottom: 15px;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.skill-bar {
    height: 10px;
    background: var(--light-gray);
    border-radius: 5px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: var(--primary);
    border-radius: 5px;
}

/* Projects Section */
.projects {
    background: #f8fafc;
}

.project-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.project-tab {
    padding: 10px 25px;
    margin: 0 5px 10px;
    background: white;
    border: 1px solid var(--light-gray);
    border-radius: 6px;
    cursor: pointer;
    transition: var(--transition);
}

.project-tab.active, .project-tab:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.project-content {
    display: none;
}

.project-content.active {
    display: block;
}

.project-detail {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
}

.project-imgs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    margin: 20px 0;
}

.project-img {
    border-radius: 8px;
    overflow: hidden;
    height: 200px;
}

.project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Contact Section */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.contact-info {
    background: var(--primary);
    color: white;
    padding: 40px;
    border-radius: 10px;
}

.contact-info h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
}

.contact-detail {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.contact-icon {
    font-size: 1.5rem;
    margin-right: 15px;
}

.contact-form {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}

.form-control {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--light-gray);
    border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
}

textarea.form-control {
    min-height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    background: var(--dark);
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 15px;
}

.social-links {
    display: flex;
    margin-top: 20px;
}

.social-links a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin-right: 10px;
    color: white;
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--primary);
    transform: translateY(-3px);
}

.footer-links h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

.footer-links h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary);
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: #cbd5e1;
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: white;
    padding-left: 5px;
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    color: #94a3b8;
}

/* Responsive Design */
@media (max-width: 992px) {
    .about-content, .contact-container {
        grid-template-columns: 1fr;
    }
    
    .hero h1 {
        font-size: 2.8rem;
    }
}

@media (max-width: 768px) {
    .menu-btn {
        display: block;
    }
    
    .nav-links {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
    }
    
    .nav-links.active {
        left: 0;
    }
    
    .nav-links li {
        margin: 15px 0;
    }
    
    .hero h1 {
        font-size: 2.3rem;
    }
    
    .section-title h2 {
        font-size: 2rem;
    }
}

@media (max-width: 576px) {
    .hero {
        padding: 130px 0 80px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    section {
        padding: 60px 0;
    }
    
    .btn {
        padding: 10px 20px;
    }
}

    // Mobile Menu Toggle
    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });
        
        // Contact Form Handling with Formspree
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            // Update the form to work with Formspree
            contactForm.setAttribute('action', 'https://formspree.io/f/YOUR_FORMSPREE_ID');
            contactForm.setAttribute('method', 'POST');
            
            // Add name attributes to inputs (required for Formspree)
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email'); 
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            if (nameInput) nameInput.setAttribute('name', 'name');
            if (emailInput) emailInput.setAttribute('name', 'email');
            if (subjectInput) subjectInput.setAttribute('name', 'subject');
            if (messageInput) messageInput.setAttribute('name', 'message');
            
            // Form submission handler
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                // Show loading state
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                try {
                    const formData = new FormData(contactForm);
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        // Success message
                        alert('Thank you! Your message has been sent successfully.');
                        contactForm.reset();
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    // Error message
                    alert('Sorry, there was an error sending your message. Please try again or email me directly.');
                } finally {
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            });
        }
        
        // Add any other JavaScript functionality you need here
    });
