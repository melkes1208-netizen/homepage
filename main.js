/* ============================================================
   ZETASUM — Premium JS Effects v2.0
   ============================================================ */

// ── 1. CURSOR GLOW TRACKER ───────────────────────────────
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

let mx = 0, my = 0, gx = 0, gy = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animGlow() {
  gx += (mx - gx) * 0.07;
  gy += (my - gy) * 0.07;
  glow.style.transform = `translate(${gx - 250}px, ${gy - 250}px)`;
  requestAnimationFrame(animGlow);
})();

// ── 2. STAT COUNT-UP ─────────────────────────────────────
function countUp(el) {
  const raw = el.textContent.trim();
  const prefix  = raw.startsWith('$') ? '$' : '';
  const numStr  = raw.replace(/[^0-9.]/g, '');
  const num     = parseFloat(numStr);
  const suffix  = raw.replace(prefix, '').replace(numStr, '');
  const decimal = numStr.includes('.');
  const dur = 2400;
  let t0 = null;

  function step(ts) {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 4);
    const v = e * num;
    el.textContent = prefix + (decimal ? v.toFixed(1) : Math.floor(v)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── 3. INTERSECTION OBSERVER SETUP ──────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('visible');

    // 통계 숫자 카운트업
    if (el.classList.contains('stat-item')) {
      const num = el.querySelector('.stat-number');
      if (num && !num.dataset.done) {
        num.dataset.done = '1';
        setTimeout(() => countUp(num), 200);
      }
    }
    revealObs.unobserve(el);
  });
}, { threshold: 0.15 });

// 카드/아이템 스태거 (컨테이너 관찰)
const staggerObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const items = entry.target.querySelectorAll(
      '.card, .roadmap-item, .partner-logo'
    );
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('visible'), i * 110);
    });
    staggerObs.unobserve(entry.target);
  });
}, { threshold: 0.05 });

// ── 4. DOM OBSERVER (React 렌더링 후 요소 감지) ──────────
const domObs = new MutationObserver(() => {
  // reveal 요소
  document.querySelectorAll(
    '.reveal:not([data-r]), .stat-item:not([data-r])'
  ).forEach(el => {
    el.setAttribute('data-r', '1');
    revealObs.observe(el);
  });

  // 스태거 컨테이너
  document.querySelectorAll(
    '.cards:not([data-s]), .roadmap:not([data-s]), .partners-grid:not([data-s])'
  ).forEach(el => {
    el.setAttribute('data-s', '1');
    staggerObs.observe(el);
  });
});

domObs.observe(document.body, { childList: true, subtree: true });
