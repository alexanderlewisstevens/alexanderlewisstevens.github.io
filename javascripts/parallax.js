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

// Parallax effect for hero background
(function() {
  var hero = document.querySelector('.mdx-hero');
  if (!hero) return;

  var lastScrollY = window.scrollY;
  var ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function update() {
    // Move background very slowly: 0.05x scroll speed
    var offset = lastScrollY * 0.05;
    hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // Initial position
  update();
})();

// Fade in hero, main content, tabs, images, code blocks, and blockquotes on page load and on navigation
(function() {
  function fadeInElements() {
    var selectors = [
      '.mdx-hero',
      '.md-content',
      '.md-main__inner',
      '.md-typeset',
      '.md-typeset .tabbed-block',
      '.md-typeset img',
      '.md-typeset pre',
      '.md-typeset blockquote'
    ];
    selectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(el) {
        // Only add fade-in if not already visible
        if (!el.classList.contains('fade-in')) {
          el.classList.add('fade-in');
        }
      });
    });
  }

  // On initial load
  document.addEventListener('DOMContentLoaded', function() {
    // Remove fade-in classes first to avoid double transitions
    document.querySelectorAll('.fade-in').forEach(function(el) {
      el.classList.remove('fade-in');
    });
    setTimeout(fadeInElements, 10); // shorter delay for less visible fade
  });

  // On MkDocs Material navigation (instant loading)
  if (window.mutationObserverFadeIn) return; // prevent double observer
  window.mutationObserverFadeIn = true;
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      if (m.addedNodes) {
        m.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) {
            // Remove fade-in classes first
            node.querySelectorAll && node.querySelectorAll('.fade-in').forEach(function(el) {
              el.classList.remove('fade-in');
            });
            setTimeout(fadeInElements, 10);
          }
        });
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
