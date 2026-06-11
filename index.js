 // Scroll reveal
  const revEls = document.querySelectorAll('.reveal');
  const revObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('in'), i * 60);
    });
  }, { threshold: 0.07 });
  revEls.forEach(el => revObs.observe(el));

  // Active sidebar
  const anchors = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('#sidenav a');
  window.addEventListener('scroll', () => {
    let cur = '';
    anchors.forEach(s => { if (s.getBoundingClientRect().top <= 100) cur = s.id; });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + cur) a.classList.add('active');
    });
  });

  // Copy buttons
  function copyCode(btn) {
    const text = btn.closest('.code-block').querySelector('pre').innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'Copied!'; btn.classList.add('ok');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('ok'); }, 2000);
    });
  }
