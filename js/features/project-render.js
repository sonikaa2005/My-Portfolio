function statusClass(s) {
  if (s === 'Completed') return 'status-completed';
  if (s === 'Ongoing')   return 'status-ongoing';
  if (s === 'Live')      return 'status-live';
  return '';
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.id = project.id;

  const PREVIEW = 110;
  let expanded = false;
  const fullDesc  = project.description;
  const shortDesc = fullDesc.length > PREVIEW ? fullDesc.slice(0, PREVIEW) + '…' : fullDesc;
  const techChips = project.technologies.map(t => '<span class="tech-chip">' + t + '</span>').join('');
  const isGHReal  = project.github && project.github !== '#';

  card.innerHTML =
    '<span class="cat-tag">' + project.category + '</span>' +
    '<h3>' + project.name + '</h3>' +
    '<p class="desc" id="desc-' + project.id + '">' + shortDesc + '</p>' +
    (fullDesc.length > PREVIEW
      ? '<button class="view-btn" data-id="' + project.id + '">View more ↓</button>'
      : '') +
    '<div class="tech-row">' + techChips + '</div>' +
    '<div class="card-footer">' +
      '<span class="status-badge ' + statusClass(project.status) + '">' +
        (project.status === 'Completed' ? '✓' : project.status === 'Ongoing' ? '⟳' : '●') +
        ' ' + project.status +
      '</span>' +
      '<a href="' + (isGHReal ? project.github : '#') + '" ' +
        (isGHReal ? 'target="_blank" rel="noopener"' : 'style="opacity:.35;pointer-events:none;"') +
        ' class="card-gh-btn">GitHub ↗</a>' +
    '</div>';

  const viewBtn = card.querySelector('.view-btn');
  if (viewBtn) {
    viewBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      expanded = !expanded;
      card.querySelector('#desc-' + project.id).textContent = expanded ? fullDesc : shortDesc;
      viewBtn.textContent = expanded ? 'View less ↑' : 'View more ↓';
    });
  }
  card.addEventListener('click', function() { saveRecentProject(project); });
  return card;
}
