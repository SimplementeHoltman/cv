// ============================================
// CONFIGURACIÓN CENTRALIZADA (edita aquí)
// ============================================
const config = {
    // Información de contacto
    email: "luis.holtman@protonmail.com",
    
    // Proyectos
    proyectos: [
        {
            icono: "fa-network-wired",
            titulo: "API RESTful Red Social",
            anio: "2025",
            rol: "Backend Developer",
            descripcion: "API completa con Node.js + Express y PostgreSQL. Incluye autenticación de usuarios, sistema de mensajes con timestamp, follow/unfollow, búsqueda avanzada y documentación con OpenAPI.",
            tecnologias: ["Node.js", "Express", "PostgreSQL", "JWT"],
            github: "https://github.com/SimplementeHoltman/Practica-1_LuisHoltman"
        },
        {
            icono: "fa-box",
            titulo: "App Seguimiento de Paquetes",
            anio: "2025",
            rol: "Frontend Developer",
            descripcion: "Aplicación responsive con AngularJS para registrar y dar seguimiento a paquetes. Tres módulos: creación de órdenes con validaciones, actualización de estado con comentarios e historial detallado.",
            tecnologias: ["AngularJS", "Bootstrap", "UX/UI", "Responsive"],
            github: "https://github.com/SimplementeHoltman/practica-dos"
        },
        {
            icono: "fa-pizza-slice",
            titulo: "Aplicación de Pizzería",
            anio: "2024",
            rol: "Full-Stack Developer",
            descripcion: "App completa con Laravel (MVC), UI con Bootstrap, catálogo de productos, carrito de compras e integración con API de Google Maps para ubicar sucursales.",
            tecnologias: ["Laravel", "MVC", "Google Maps", "Bootstrap"],
            github: "https://github.com/SimplementeHoltman/pizzeria"
        }
    ],
    
    // Recomendaciones
    recomendaciones: [
        {
            nombre: "Lucía B. D.",
            cargo: "Terna evaluadora y catedrática, Universidad Mesoamericana",
            imagen: "https://media.licdn.com/dms/image/v2/D4E03AQFRwBAy3gO8tQ/profile-displayphoto-scale_100_100/B4EZ23_cf_IAAc-/0/1776908360501?e=1778716800&v=beta&t=wX2-WSFr5SVwJlW9EDz7VGy4LMGf-DvDs_F3PR-DHNM",
            linkedin: "https://www.linkedin.com/in/lucia-b-d-7b9235116/",
            texto: "Luis siempre se ha destacado por ser un profesional ordenado, organizado, enfocado en alcanzar sus objetivos y metas. Es puntual y dedicado."
        },
        {
            nombre: "Baudilio Boteo",
            cargo: "Power Operation Engineer, Millicom (Tigo)",
            imagen: "https://media.licdn.com/dms/image/v2/D4E03AQEUPN891d6ofQ/profile-displayphoto-scale_100_100/B4EZ1UDtIiG8Ag-/0/1775231753892?e=1778716800&v=beta&t=-gE4EKzv4YxnEv5Yu-veJ9o_ustDjDxwnFp49-Wwv6w",
            linkedin: "https://www.linkedin.com/in/bboteo/",
            texto: "Como catedrático de Luis puedo destacar su capacidad para aplicar conocimientos de manera práctica y colaborar eficazmente en equipo. Su actitud proactiva, su ética de trabajo y habilidad para resolver problemas lo convierten en un candidato ideal para cualquier entorno laboral que valore la excelencia y la innovación. Tuvo un papel sobresaliente en ejecución y presentaciones de proyectos donde evidenció liderazgo, creatividad y una gran capacidad de adaptación. Además, su trato respetuoso y su disposición para ayudar a otros refleja una madurez profesional poco común en jóvenes de su edad."
        },
        {
            nombre: "Sergio Alonzo",
            cargo: "Data Management & Governance, McDonald's Mesoamérica",
            imagen: "https://media.licdn.com/dms/image/v2/D4E03AQHcun2aSPxNAQ/profile-displayphoto-scale_100_100/B4EZzYsGuAJwAc-/0/1773161969325?e=1778716800&v=beta&t=SMPqAn0OqscMO8wj4AmnF_3UeSCnYpFJ3OnTu1Hix8Y",
            linkedin: "https://www.linkedin.com/in/sergio-alonzo-34231325/",
            texto: "Luis Holtman ha sido mi alumno en la Universidad Mesoamericana por un periodo de 1 año y medio. Dentro de las características que lo destacan está su ingenio para resolver problemas, su prontitud para realizar los proyectos, su responsabilidad y su buen humor. Apasionado de su carrera y respetuoso en todo sentido. Desde mi perspectiva, cualquier empresa que llegase a contratar a Luis, pienso que estaría haciendo una muy buena contratación."
        }
    ]
};

// ============================================
// MENÚ MÓVIL
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// CÁLCULO DINÁMICO DE FECHAS
// ============================================
function calcularDuracion(fechaInicioStr, fechaFinStr = null) {
    const inicio = new Date(fechaInicioStr);
    const fin = fechaFinStr ? new Date(fechaFinStr) : new Date();
    let años = fin.getFullYear() - inicio.getFullYear();
    let meses = fin.getMonth() - inicio.getMonth();
    if (meses < 0) {
        años--;
        meses += 12;
    }
    if (años === 0) return `${meses} mes${meses !== 1 ? 'es' : ''}`;
    return `${años} año${años !== 1 ? 's' : ''} y ${meses} mes${meses !== 1 ? 'es' : ''}`;
}

// Experiencia laboral
const fechaExpInicio = '2022-04-01';
const duracionExp = calcularDuracion(fechaExpInicio);
const expDuracionElem = document.getElementById('experiencia-duracion');
if (expDuracionElem) {
    expDuracionElem.textContent = `${duracionExp} de experiencia`;
}

// Estudios
const fechaEduInicio = '2023-01-01';
const duracionEdu = calcularDuracion(fechaEduInicio);
const eduDuracionElem = document.getElementById('educacion-duracion');
if (eduDuracionElem) {
    eduDuracionElem.textContent = `${duracionEdu} cursando`;
}

// Semestre dinámico
function calcularSemestre() {
    const inicio = new Date(2023, 0);
    const hoy = new Date();
    const mesesTotales = (hoy.getFullYear() - inicio.getFullYear()) * 12 + (hoy.getMonth() - inicio.getMonth());
    let semestre = Math.floor(mesesTotales / 6) + 1;
    if (semestre < 1) semestre = 1;
    if (semestre > 10) semestre = 10;
    return semestre;
}

const semestreActual = calcularSemestre();
const educacionFechaElem = document.getElementById('educacion-fecha');
if (educacionFechaElem) {
    educacionFechaElem.innerHTML = `ene. 2023 - En curso (${semestreActual}${semestreActual === 1 ? 'er' : 'º'} semestre)`;
}

// ============================================
// CARGAR PROYECTOS DINÁMICAMENTE
// ============================================
const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
    projectsGrid.innerHTML = config.proyectos.map(proyecto => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">
                    <i class="fas ${proyecto.icono}"></i>
                </div>
                <h3>${proyecto.titulo}</h3>
            </div>
            <div class="project-meta">
                <span class="year">${proyecto.anio}</span>
                <span class="role">${proyecto.rol}</span>
            </div>
            <p class="project-description">${proyecto.descripcion}</p>
            <div class="project-tech">
                ${proyecto.tecnologias.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${proyecto.github}" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Ver en GitHub
            </a>
        </div>
    `).join('');
}

// ============================================
// CARGAR RECOMENDACIONES CON "VER MÁS"
// ============================================
const testimonialsGrid = document.getElementById('testimonialsGrid');
const TEXT_LIMIT = 150;

function truncateText(text, limit) {
    if (text.length <= limit) return { short: text, full: text, truncated: false };
    return { short: text.substring(0, limit) + '...', full: text, truncated: true };
}

if (testimonialsGrid) {
    testimonialsGrid.innerHTML = config.recomendaciones.map((recomendacion, index) => {
        const { short, full, truncated } = truncateText(recomendacion.texto, TEXT_LIMIT);
        return `
            <div class="testimonial-card" data-index="${index}">
                <div class="testimonial-profile" data-linkedin="${recomendacion.linkedin}">
                    <img src="${recomendacion.imagen}" alt="${recomendacion.nombre}" class="testimonial-avatar" loading="lazy">
                    <div>
                        <div class="testimonial-name">${recomendacion.nombre}</div>
                        <div class="testimonial-role">${recomendacion.cargo}</div>
                    </div>
                </div>
                <div class="testimonial-text">
                    <div class="testimonial-text-expandable" data-fulltext="${full.replace(/"/g, '&quot;')}" data-truncated="${truncated}">
                        ${truncated ? short : full}
                    </div>
                    ${truncated ? `<button class="read-more-btn" data-index="${index}">ver más</button>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Eventos para "ver más"
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = btn.getAttribute('data-index');
            const textContainer = btn.closest('.testimonial-text').querySelector('.testimonial-text-expandable');
            const isExpanded = textContainer.getAttribute('data-expanded') === 'true';
            
            if (!isExpanded) {
                const fullText = textContainer.getAttribute('data-fulltext');
                textContainer.textContent = fullText;
                textContainer.setAttribute('data-expanded', 'true');
                btn.textContent = 'ver menos';
            } else {
                const shortText = textContainer.getAttribute('data-fulltext').substring(0, TEXT_LIMIT) + '...';
                textContainer.textContent = shortText;
                textContainer.setAttribute('data-expanded', 'false');
                btn.textContent = 'ver más';
            }
        });
    });
    
    // Eventos para abrir LinkedIn al hacer clic en imagen o nombre
    document.querySelectorAll('.testimonial-profile').forEach(profile => {
        profile.addEventListener('click', () => {
            const linkedinUrl = profile.getAttribute('data-linkedin');
            if (linkedinUrl) window.open(linkedinUrl, '_blank');
        });
    });
}

// ============================================
// FORMULARIO DE CONTACTO (mailto)
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Por favor completa todos los campos.');
            return;
        }
        
        const subject = encodeURIComponent(`Contacto desde portafolio - ${name}`);
        const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
        window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
    });
}

// Actualizar email en el enlace de contacto
const emailLink = document.getElementById('emailLink');
if (emailLink) {
    emailLink.href = `mailto:${config.email}`;
    emailLink.textContent = config.email;
}

// ============================================
// SMOOTH SCROLL Y ANIMACIONES
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// IntersectionObserver para fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.project-card, .highlight-item, .aptitud-card, .testimonial-card, .timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

console.log('%cPortafolio actualizado | Luis Holtman', 'color: #0b57d0; font-size: 16px; font-weight: bold');