// Parallax scroll effect for hero banner with two different speeds
window.addEventListener('scroll', function() {
  var hero = document.querySelector('.mdx-hero');
  if (hero) {
    var offset1 = window.scrollY * 0.3; // slower
    var offset2 = window.scrollY * 1.2; // much faster
    hero.style.setProperty('--parallax-scroll1', offset1 + 'px');
    hero.style.setProperty('--parallax-scroll2', offset2 + 'px');
  }
});
