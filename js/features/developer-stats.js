function initDeveloperStats() {
  const c = document.getElementById('developer-stats');
  if (!c) return;
  statsData.forEach(function (s) {
    const div = document.createElement('div');
    div.className = 'stat-card';
    div.innerHTML = '<div class="val">' + s.value + '</div><div class="lbl">' + s.label + '</div>';
    c.appendChild(div);
  });
}
