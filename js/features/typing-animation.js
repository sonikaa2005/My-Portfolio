function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Backend Developer',
    'Aspiring Software Engineer'
  ];
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const cur = roles[ri];
    if (!deleting) {
      ci++;
      el.textContent = cur.slice(0, ci);
      if (ci === cur.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 90);
    } else {
      ci--;
      el.textContent = cur.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 45);
    }
  }
  setTimeout(tick, 600);
}
