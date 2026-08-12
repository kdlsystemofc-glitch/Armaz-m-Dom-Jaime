/**
 * ARMAZÉM DOM JAIME — CINEMATIC EXPERIENCE & INTERACTION SCRIPT
 * Phase 07.1 — Motion, Scroll Reveals & Real-time Features
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initOperatingHoursStatus();
  initMobileFloatingBar();
  initScrollProgress();
  initScrollReveals();
  initSmoothScroll();
});

/**
 * 1. Navbar Scroll Blur & Scroll State
 */
function initNavbarScroll() {
  const header = document.getElementById('nav-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * 2. Operating Hours Real-time Check
 * Business Rules:
 * - Mon-Sat: Opens at 11:00 AM, serves lunch until 16:00 (or open for dinner events)
 * - Sunday: Closed
 */
function initOperatingHoursStatus() {
  const statusText = document.getElementById('status-text');
  const statusDot = document.querySelector('.status-dot');
  if (!statusText) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();

  if (day === 0) {
    statusText.textContent = 'Fechado aos Domingos';
    if (statusDot) {
      statusDot.style.backgroundColor = '#9CA3AF';
      statusDot.style.animation = 'none';
    }
  } else if (hour >= 11 && hour < 16) {
    statusText.textContent = '🟢 Aberto Agora — Servindo Almoço';
  } else if (hour < 11) {
    statusText.textContent = 'Fechado — Abre hoje às 11:00';
    if (statusDot) {
      statusDot.style.backgroundColor = '#C68A27';
      statusDot.style.animation = 'none';
    }
  } else {
    statusText.textContent = 'Fechado — Abre amanhã às 11:00';
    if (statusDot) {
      statusDot.style.backgroundColor = '#9CA3AF';
      statusDot.style.animation = 'none';
    }
  }
}

/**
 * 3. Mobile Floating Action Bar Reveal on Scroll
 */
function initMobileFloatingBar() {
  const floatingBar = document.getElementById('component-floating-cta');
  const heroSection = document.getElementById('section-hero');
  if (!floatingBar || !heroSection) return;

  window.addEventListener('scroll', () => {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    
    if (window.innerWidth <= 768 && heroBottom < 0) {
      floatingBar.classList.add('visible');
    } else {
      floatingBar.classList.remove('visible');
    }
  }, { passive: true });
}

/**
 * 4. Top Scroll Progress Line Indicator
 */
function initScrollProgress() {
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
  }

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  }, { passive: true });
}

/**
 * 5. IntersectionObserver Cinematic Scroll Reveals with Safety Fallback
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.review-card, .buffet-card, .info-block, .feijoada-container, .ambience-img-card');

  // Check if reduced motion is requested
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }
  
  revealElements.forEach((el, index) => {
    el.classList.add('reveal-element');
    el.style.transitionDelay = `${(index % 3) * 80}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px 50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Safety fallback: reveal all elements after 1.5 seconds if not yet triggered (e.g. static snapshot tools)
  setTimeout(() => {
    revealElements.forEach(el => el.classList.add('revealed'));
  }, 1500);
}

/**
 * 6. Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = 72;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
