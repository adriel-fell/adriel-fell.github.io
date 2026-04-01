const loader = document.getElementById('loader');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const cursorDot = document.getElementById('cursorDot');

window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('is-hidden'), 900);
});

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

window.addEventListener('mousemove', (e) => {
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorDot.style.width = '34px';
    cursorDot.style.height = '34px';
    cursorDot.style.background = 'rgba(255,255,255,.08)';
    cursorDot.style.borderColor = 'rgba(255,255,255,.9)';
  });
  el.addEventListener('mouseleave', () => {
    cursorDot.style.width = '14px';
    cursorDot.style.height = '14px';
    cursorDot.style.background = 'transparent';
    cursorDot.style.borderColor = 'rgba(255,255,255,.55)';
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.2 });

revealItems.forEach(item => observer.observe(item));

const glitchTargets = document.querySelectorAll('.glitch');
setInterval(() => {
  glitchTargets.forEach(el => {
    el.style.transform = `translate(${(Math.random() - 0.5) * 1.2}px, ${(Math.random() - 0.5) * 1.2}px)`;
    setTimeout(() => el.style.transform = '', 70);
  });
}, 3200);
