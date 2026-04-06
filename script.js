// ============================================
// MENÚ MÓVIL TOGGLE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(52, 78, 65, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(45, 80, 22, 0.08)';
    }
    
    lastScrollTop = scrollTop;
});

// ============================================
// ANIMACIÓN DE ELEMENTOS EN SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observer a elementos animables
const animatableElements = document.querySelectorAll(
    '.project-card, .highlight-item, .tech-category, .timeline-content'
);

animatableElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación básica
        if (!name || !email || !message) {
            alert('Por favor completa todos los campos');
            return;
        }

        // Mostrar mensaje de éxito (aquí puedes integrar un servicio de email real)
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;

        // Simulación de envío
        button.textContent = 'Enviando...';
        button.disabled = true;

        // Simular delay de envío
        setTimeout(() => {
            button.textContent = '✓ Mensaje Enviado';
            contactForm.reset();

            // Volver al texto original después de 2 segundos
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }, 1000);

        // En producción, aquí iría una llamada real a tu backend o servicio de email
        console.log('Formulario enviado:', { name, email, message });
    });
}

// ============================================
// NÚMEROS ANIMADOS
// ============================================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ============================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// PARALLAX EFFECT (Opcional)
// ============================================
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection && scrollPosition < window.innerHeight) {
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// ANIMACIÓN DE TYPING EFFECT (Opcional para futuras mejoras)
// ============================================
function typeEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };

    type();
}

// ============================================
// DARK MODE TOGGLE (Preparado para futuro)
// ============================================
// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
// }

// Verificar si hay preferencia guardada
// if (localStorage.getItem('darkMode') === 'true') {
//     document.body.classList.add('dark-mode');
// }

// ============================================
// AGREGAR CLASES ACTIVAS A NAVEGACIÓN
// ============================================
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// LOG EN CONSOLA
// ============================================
console.log(
    '%cBienvenido a mi portafolio',
    'color: #588157; font-size: 20px; font-weight: bold'
);
console.log(
    '%cDesarrollado por Luis Holtman',
    'color: #A3B18A; font-size: 14px'
);
