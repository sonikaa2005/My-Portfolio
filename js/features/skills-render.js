function initSkills() {
  const c = document.getElementById('skills-container');
  if (!c) return;
  skillsData.forEach(function (s, i) {
    const card = document.createElement('div');
    card.className = 'skill-card anim-fade';
    card.style.transitionDelay = (i * 0.05) + 's';
    card.innerHTML =
      '<div class="skill-icon">' + s.shortLabel + '</div>' +
      '<h3>' + s.name + '</h3>' +
      '<p>' + s.description + '</p>';
    c.appendChild(card);
  });
}
