function initVisitorCount() {
  const count = parseInt(localStorage.getItem('visitor-count') || '0') + 1;
  localStorage.setItem('visitor-count', count);
  const el = document.getElementById('visitor-count');
  if (el) el.textContent = 'You are visitor #' + count + ' on this device.';
}
