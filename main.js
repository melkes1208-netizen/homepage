// Reveal animation — watches for React-rendered .reveal elements and triggers on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

// MutationObserver picks up elements added dynamically by React
const domObserver = new MutationObserver(() => {
  document.querySelectorAll('.reveal:not([data-observed])').forEach(el => {
    el.setAttribute('data-observed', '1');
    revealObserver.observe(el);
  });
});

domObserver.observe(document.body, { childList: true, subtree: true });
