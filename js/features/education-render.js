function initEducation() {
  const c = document.getElementById('education-container');
  if (!c) return;
  educationData.forEach(function (e) {
    const card = document.createElement('div');
    card.className = 'edu-card';
    card.innerHTML =
      '<div class="board">' + e.university + '</div>' +
      '<h3>' + e.title + ' <span style="font-weight:400;color:var(--text-soft);font-size:.9rem;">(' + e.period + ')</span></h3>' +
      '<div class="college">' + e.college + '</div>' +
      '<div class="score">' + e.score + '</div>';
    c.appendChild(card);
  });
}
