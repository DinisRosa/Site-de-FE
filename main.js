document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', isOpen);
            menuBtn.querySelector('.hamburger-icon').textContent = isOpen ? '✕' : '☰';
        });

        // Fechar menu ao clicar num link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.querySelector('.hamburger-icon').textContent = '☰';
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.querySelector('.hamburger-icon').textContent = '☰';
            }
        });
    }

    // ============================================
    // FAQ ACCORDION
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');

            // Fechar todos os itens
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Abrir o item clicado (se estava fechado)
            if (!isCurrentlyActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 85;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // HEADER: SOMBRA AO FAZER SCROLL
    // ============================================
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    }, { passive: true });

    // ============================================
    // ANIMAÇÕES DE SCROLL (IntersectionObserver)
    // ============================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Atraso escalonado para elementos do mesmo grupo
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Adicionar delays escalonados a cards dentro de grids
        document.querySelectorAll('.benefits-grid .benefit-card, .features-grid .feature-mockup, .steps-grid .step-card, .faq-list .faq-item').forEach((el, index) => {
            el.dataset.delay = (index % 4) * 100;
        });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback para browsers sem suporte
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }

    // ============================================
    // STICKY CTA (só no mobile)
    // ============================================
    const stickyCta = document.getElementById('stickyCta');
    const pricingSection = document.getElementById('precos');

    if (stickyCta && pricingSection) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Mostrar CTA enquanto a secção de preços não está visível
                if (!entry.isIntersecting) {
                    stickyCta.classList.add('visible');
                } else {
                    stickyCta.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        ctaObserver.observe(pricingSection);

        // Esconder nos primeiros momentos (antes de qualquer scroll)
        const heroSection = document.getElementById('inicio');
        if (heroSection) {
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        stickyCta.classList.remove('visible');
                    }
                });
            }, { threshold: 0.3 });
            heroObserver.observe(heroSection);
        }
    }

    // ============================================
    // CONTADORES ANIMADOS (barra de stats)
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const countUp = (el) => {
        const target = el.textContent;
        const isPercent = target.includes('%');
        const isPlus = target.includes('+');
        const isX = target.includes('x') || target.includes('X');
        const isCurrency = target.includes('€');
        
        // Só animar números simples
        const numMatch = target.match(/[\d.]+/);
        if (!numMatch) return;
        
        const num = parseFloat(numMatch[0]);
        const duration = 1500;
        const steps = 50;
        const increment = num / steps;
        let current = 0;
        let step = 0;

        el.textContent = '0' + (isPercent ? '%' : isPlus ? '+' : isX ? 'x' : isCurrency ? '€' : '');

        const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, num);
            
            let display = Number.isInteger(num) ? Math.round(current) : current.toFixed(1);
            el.textContent = display + (isPercent ? '%' : isPlus ? 'M+' : isX ? 'x' : isCurrency ? '€' : '');

            if (step >= steps) {
                el.textContent = target; // Garantir o valor final exato
                clearInterval(timer);
            }
        }, duration / steps);
    };

    if ('IntersectionObserver' in window) {
        const statsBar = document.querySelector('.stats-bar');
        if (statsBar) {
            let animated = false;
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        animated = true;
                        statNumbers.forEach(el => countUp(el));
                    }
                });
            }, { threshold: 0.5 });
            statsObserver.observe(statsBar);
        }
    }
});