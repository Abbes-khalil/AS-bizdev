document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.anim-section');

  /* Handle reduced motion: make all sections visible immediately */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach(section => section.classList.add('visible'));
    return;
  }

  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});