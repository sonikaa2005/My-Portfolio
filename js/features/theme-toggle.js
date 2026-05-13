function initThemeToggle() {
  const btn   = document.getElementById('theme-toggle');
  const icon  = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  function apply(isDark) {
    document.body.classList.toggle('dark', isDark);
    icon.textContent  = isDark ? '☀' : '🌙';
    label.textContent = isDark ? 'Light' : 'Dark';
    localStorage.setItem('sk-theme', isDark ? 'dark' : 'light');
  }
  const saved = localStorage.getItem('sk-theme');
  apply(saved !== 'light');
  btn.addEventListener('click', function() {
    apply(!document.body.classList.contains('dark'));
  });
}
