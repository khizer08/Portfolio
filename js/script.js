document.addEventListener('DOMContentLoaded', function() {
    const currentPagePath = window.location.pathname;
    let currentPage = 'index.html';
    
    if (currentPagePath.includes('/')) {
        currentPage = currentPagePath.split('/').pop() || 'index.html';
    } else if (currentPagePath) {
        currentPage = currentPagePath;
    }
    
    currentPage = currentPage.split('?')[0].split('#')[0];
    
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    function initializeNav() {
        navLinks.forEach(link => {
            link.classList.remove('active');
            let linkPath = link.getAttribute('href').split('?')[0].split('#')[0];
            
            if (linkPath === currentPage) {
                link.classList.add('active');
            }
            
            if (currentPage === '' && linkPath === 'index.html') {
                link.classList.add('active');
            }
        });
    }
    
    initializeNav();
    
    if (currentPage === 'index.html' || currentPage === '') {
        function updateSectionHighlight() {
            let currentSection = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                
                if (href === `#${currentSection}` || 
                   (currentSection === '' && href === 'index.html')) {
                    link.classList.add('active');
                } else if (!href.startsWith('#')) {
                    const linkPage = href.split('?')[0].split('#')[0];
                    if (linkPage === currentPage) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
        }
        
        updateSectionHighlight();
        window.addEventListener('scroll', throttle(updateSectionHighlight, 100));
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
                
                if (currentPage === 'index.html' || currentPage === '') {
                    setTimeout(updateSectionHighlight, 300);
                }
            }
        });
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                subject: this.querySelector('#subject').value,
                message: this.querySelector('#message').value
            };
            
            if (!formData.email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');// for others to contact
            this.reset();
        });
    }
});

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}