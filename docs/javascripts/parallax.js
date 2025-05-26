// Optimized parallax scroll effect for hero text blocks only
let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      var hero = document.querySelector('.mdx-hero');
      if (hero) {
        var title = hero.querySelector('.mdx-hero__title');
        var subtitle = hero.querySelector('.mdx-hero__subtitle');
        var desc = hero.querySelector('.mdx-hero__desc');
        if (title) title.style.setProperty('--parallax-title', (window.scrollY * 0.5) + 'px');
        if (subtitle) subtitle.style.setProperty('--parallax-subtitle', (window.scrollY * 0.8) + 'px');
        if (desc) desc.style.setProperty('--parallax-desc', (window.scrollY * 0.2) + 'px');
      }
      ticking = false;
    });
    ticking = true;
  }
});
