function initProjectFilters() {
  const c = document.getElementById('project-filters');
  const cats = ['All', ...new Set(projectsData.map(p => p.category))];
  cats.forEach(function (cat) {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.currentFilter = cat;
      renderProjects();
    });
    c.appendChild(btn);
  });
}
