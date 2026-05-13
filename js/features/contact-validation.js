function initContactValidation() {
  document.getElementById('form-submit').addEventListener('click', function () {
    const name    = document.getElementById('contact-name').value.trim();
    const email   = document.getElementById('contact-email').value.trim();
    const message = (document.getElementById('contact-message') ? document.getElementById('contact-message').value.trim() : '');
    const msg     = document.getElementById('form-message');

    msg.textContent = '';
    msg.style.color = '';

    if (!name)           { msg.textContent = 'Please enter your name.';       msg.style.color = '#f87171'; return; }
    if (name.length < 3) { msg.textContent = 'Name must be at least 3 chars.'; msg.style.color = '#f87171'; return; }
    if (!email)          { msg.textContent = 'Please enter your email.';       msg.style.color = '#f87171'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = 'Please enter a valid email.'; msg.style.color = '#f87171'; return; }

    // Build mailto link and open it so the email actually sends
    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body    = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:sonikagowda974@gmail.com?subject=' + subject + '&body=' + body;

    msg.textContent = '✓ Opening your email client…';
    msg.style.color = '#4ade80';

    document.getElementById('contact-name').value  = '';
    document.getElementById('contact-email').value = '';
    if (document.getElementById('contact-message')) document.getElementById('contact-message').value = '';

    setTimeout(function() { if (window.closeModal) window.closeModal(); }, 2200);
  });
}
