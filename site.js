'use strict';
document.getElementById('year').textContent = String(new Date().getFullYear());

const motionToggle = document.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let pausedByVisitor = false;
function syncMotion() {
  const paused = pausedByVisitor || reducedMotion.matches;
  document.body.classList.toggle('motion-paused', paused);
  motionToggle.hidden = reducedMotion.matches;
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.innerHTML = paused
    ? 'Play motion <span aria-hidden="true">▷</span>'
    : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
}
motionToggle.addEventListener('click', () => {
  pausedByVisitor = !pausedByVisitor;
  syncMotion();
});
reducedMotion.addEventListener('change', syncMotion);
syncMotion();

// Stop decorative loops when the hero is offscreen or the tab is hidden.
let heroVisible = true;
function syncVisibility() {
  document.body.classList.toggle('motion-idle', document.hidden || !heroVisible);
}
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    heroVisible = entry.isIntersecting;
    syncVisibility();
  }).observe(document.querySelector('.hero'));
}
document.addEventListener('visibilitychange', syncVisibility);
syncVisibility();
