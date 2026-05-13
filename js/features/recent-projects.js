function saveRecentProject(project) {
  let recent = JSON.parse(localStorage.getItem('recent-projects') || '[]');
  recent = recent.filter(r => r.id !== project.id);
  recent.unshift({ id: project.id, name: project.name, category: project.category });
  if (recent.length > 3) recent = recent.slice(0, 3);
  localStorage.setItem('recent-projects', JSON.stringify(recent));
  renderRecentProjects();
}

function renderRecentProjects() {
  const c = document.getElementById('recent-projects');
  if (!c) return;
  const recent = JSON.parse(localStorage.getItem('recent-projects') || '[]');
  c.innerHTML = '';
  if (!recent.length) {
    c.innerHTML = '<p style="color:var(--text-soft);font-size:.85rem;">Click any project to track it here.</p>';
    return;
  }
  recent.forEach(function (r) {
    const d = document.createElement('div');
    d.className = 'recent-card';
    d.innerHTML = '<strong>' + r.name + '</strong><br><span>' + r.category + '</span>';
    c.appendChild(d);
  });
}
