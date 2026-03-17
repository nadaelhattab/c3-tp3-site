/*
  js/main.js — JavaScript partagé toutes les pages
  TP3 — Nexora Agence Digitale
  Auteure : Nada Elhattab

  Contient :
  1. Menu burger mobile
  2. Animations au scroll
  3. Lien actif navigation
*/

// 1. MENU BURGER MOBILE
const burger    = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');
if (burger && navMobile) {
  burger.addEventListener('click', function () {
    const ouvert = navMobile.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', ouvert);
  });
  navMobile.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navMobile.classList.remove('ouvert');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// 2. ANIMATIONS AU SCROLL
// IntersectionObserver déclenche quand un élément devient visible
const obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.a-reveler').forEach(function (el) {
  obs.observe(el);
});

// 3. LIEN ACTIF selon la page courante
const url = window.location.pathname;
document.querySelectorAll('.nav-liens a, .nav-mobile a').forEach(function (a) {
  const href = a.getAttribute('href') || '';
  if (href !== '/' && href !== 'index.html' && url.includes(href.replace('.html', ''))) {
    a.classList.add('active');
  }
  if ((href === 'index.html' || href === '/') && (url === '/' || url.endsWith('index.html'))) {
    a.classList.add('active');
  }
});
