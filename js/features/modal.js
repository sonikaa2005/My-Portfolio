function initModal() {
  const modal    = document.getElementById('contact-modal');
  const modalBox = document.getElementById('modal-content');

  function openModal() {
    modal.style.display = 'flex';
    setTimeout(() => modalBox.classList.add('visible'), 10);
  }
  function closeModal() {
    modalBox.classList.remove('visible');
    setTimeout(() => { modal.style.display = 'none'; }, 250);
  }

  document.getElementById('modal-trigger').addEventListener('click', openModal);
  const openBtn = document.getElementById('open-contact-modal');
  if (openBtn) openBtn.addEventListener('click', openModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('form-cancel').addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
  window.closeModal = closeModal;
}
