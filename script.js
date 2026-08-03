// reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  reveals.forEach(el=>io.observe(el));

  // mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', ()=>{
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.cssText += open ? '' : 'position:absolute;top:66px;left:0;right:0;background:#fbf6f1;flex-direction:column;padding:24px 32px;gap:20px;border-bottom:1px solid #e4d7cd;';
    document.querySelectorAll('.nav-links a').forEach(a=>a.style.color = '#000');
  });
