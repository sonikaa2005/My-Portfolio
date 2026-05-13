function initContactAutosave() {
  ['contact-name', 'contact-email'].forEach(function (id) {
    const el = document.getElementById(id);
    const saved = localStorage.getItem('draft-' + id);
    if (saved) el.value = saved;
    el.addEventListener('input', function () {
      localStorage.setItem('draft-' + id, el.value);
    });
  });
}
