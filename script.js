/**
 * ARMAZÉM DOM JAIME — CONTEMPORARY BRAZILIAN FARM-TO-TABLE EDITORIAL
 * Dynamic Status Badge, Scroll Progress & Smooth Entrances
 */

document.addEventListener('DOMContentLoaded', () => {
  initRealtimeStatus();
  initScrollEffects();
  initMobileFloatingBar();
  initScrollReveals();
});

/**
 * Real-Time Restaurant Operating Hours Check
 * Mon-Sat: 11:00 to 16:00 (Closed Sundays)
 */
function initRealtimeStatus() {
  const statusBadge = document.getElementById('nav-status-badge');
  const statusText = document.getElementById('status-text');
  
  if (!statusBadge || !statusText) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  const openTime = 11 * 60; // 11:00 AM
  const closeTime = 16 * 60; // 4:00 PM

  const isSunday = (day === 0);
  const isOpenHours = (timeInMinutes >= openTime && timeInMinutes < closeTime);

  if (!isSunday && isOpenHours) {
    statusBadge.style.borderColor = 'var(--brand-basil)';
    statusBadge.style.backgroundColor = 'rgba(46, 82, 56, 0.08)';
    statusBadge.style.color = 'var(--brand-basil)';
    statusText.textContent = '🟢 Aberto Agora — Servindo Almoço';
  } else if (!isSunday && timeInMinutes < openTime) {
    statusBadge.style.borderColor = 'var(--brand-ochre)';
    statusBadge.style.backgroundColor = 'rgba(217, 130, 43, 0.08)';
    statusBadge.style.color = 'var(--brand-ochre)';
    statusText.textContent = '🟡 Fechado — Abre hoje às 11:00h';
  } else {
    statusBadge.style.borderColor = 'var(--text-muted)';
    statusBadge.style.backgroundColor = 'rgba(92, 96, 104, 0.08)';
    statusBadge.style.color = 'var(--text-muted)';
    statusText.textContent = '⚪ Fechado — Abrimos de Seg a Sáb às 11h';
  }
}

/**
 * Scroll Header Class & Progress Indicator
 */
function initScrollEffects() {
  const header = document.getElementById('nav-header');
  
  // Create Progress Bar
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    // Header shadow background
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll progress line
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  }, { passive: true });
}

/**
 * Mobile Floating CTA Bar Visibility
 */
function initMobileFloatingBar() {
  const floatingBar = document.getElementById('component-floating-cta');
  const heroSection = document.getElementById('section-hero');

  if (!floatingBar || !heroSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Show floating bar when scrolled past hero section on mobile
      if (!entry.isIntersecting && window.innerWidth <= 768) {
        floatingBar.classList.add('visible');
      } else {
        floatingBar.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(heroSection);
}

/**
 * Intersection Observer Scroll Reveals with Fallback
 */
function initScrollReveals() {
  const revealTargets = document.querySelectorAll('section, article, .manifesto-col, .point-item');

  revealTargets.forEach(target => {
    target.classList.add('reveal-element');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealTargets.forEach(target => revealObserver.observe(target));
}
