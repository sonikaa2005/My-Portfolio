function initProjectSearch() {
  document.getElementById('project-search').addEventListener('input', function () {
    window.currentSearch = this.value.trim();
    renderProjects();
  });
}
