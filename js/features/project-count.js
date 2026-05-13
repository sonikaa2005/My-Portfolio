function updateProjectCount(count) {
  const el = document.getElementById('project-count');
  if (el) el.textContent = count + ' project' + (count !== 1 ? 's' : '') + ' shown';
}

function renderProjects() {
  window.currentFilter = window.currentFilter || 'All';
  window.currentSearch = window.currentSearch || '';
  window.currentSort   = window.currentSort   || 'default';

  let list = projectsData.slice();
  if (window.currentFilter !== 'All') list = list.filter(p => p.category === window.currentFilter);
  if (window.currentSearch) {
    const q = window.currentSearch.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q))
    );
  }
  if (window.currentSort === 'name-asc')  list.sort((a,b) => a.name.localeCompare(b.name));
  if (window.currentSort === 'name-desc') list.sort((a,b) => b.name.localeCompare(a.name));
  if (window.currentSort === 'status')    list.sort((a,b) => a.status.localeCompare(b.status));

  const c = document.getElementById('projects-container');
  c.innerHTML = '';
  list.forEach(function(p) {
    c.appendChild(createProjectCard(p));
  });
  updateProjectCount(list.length);
}
