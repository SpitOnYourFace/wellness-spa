// Scroll Animations & Parallax Effects

document.addEventListener('DOMContentLoaded', () => {
  // Fade-in on scroll using IntersectionObserver
  const fadeElements = document.querySelectorAll('.fade-in, .service-card, .booking-step');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    fadeObserver.observe(el);
  });

  // Parallax scroll effect for hero (throttled with rAF)
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('hero');
        if (hero && scrolled < window.innerHeight) {
          hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Add pulse animation to featured services
  document.querySelectorAll('.service-card.featured').forEach(card => {
    card.classList.add('pulse-featured');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
