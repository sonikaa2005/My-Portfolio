function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    let active = '';
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 120) active = s.id;
    });
    navLinks.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + active);
    });
  });
}
