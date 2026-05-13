function initProjectSort() {
  document.getElementById('project-sort').addEventListener('change', function () {
    window.currentSort = this.value;
    renderProjects();
  });
}
