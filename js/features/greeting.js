function initGreeting() {
  const hour = new Date().getHours();
  const msg = hour < 12 ? 'Good Morning ☀️' : hour < 18 ? 'Good Afternoon 🌤️' : 'Good Evening 🌙';
  const el = document.getElementById('greeting-text');
  if (el) el.textContent = msg;
}
