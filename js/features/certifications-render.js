function initCertifications() {
  const c = document.getElementById('certs-container');
  if (!c) return;
  certificationsData.forEach(function (cert, i) {
    const card = document.createElement('div');
    card.className = 'cert-card anim-fade';
    card.style.transitionDelay = (i * 0.1) + 's';
    card.innerHTML =
      '<span class="cert-icon">' + cert.icon + '</span>' +
      '<h3>' + cert.title + '</h3>' +
      '<div class="cert-issuer">' + cert.issuer + '</div>' +
      '<p class="cert-desc">' + cert.description + '</p>';
    c.appendChild(card);
  });
}
