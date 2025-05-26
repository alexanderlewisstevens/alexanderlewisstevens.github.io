// Parallax scroll effect for hero banner
window.addEventListener('scroll', function() {
  var hero = document.querySelector('.mdx-hero');
  if (hero) {
    var offset = window.scrollY * 0.5; // 0.5 = slower than scroll, adjust for effect
    hero.style.setProperty('--parallax-scroll', offset + 'px');
  }
});
