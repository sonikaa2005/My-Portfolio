function initScrollProgress() {
  const el = document.getElementById('scroll-progress');
  window.addEventListener('scroll', function () {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    el.style.width = pct + '%';
  });
}
