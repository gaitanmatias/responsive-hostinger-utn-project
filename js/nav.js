const navToggleBtn = document.getElementById('nav-toggle-btn')
const body = document.getElementById('body')
navToggleBtn.addEventListener('click', function() {
  const navMenu = document.querySelector('.nav__links');
  navMenu.classList.toggle('active');
  if (navToggleBtn.classList.contains('bi-list')) {
    navToggleBtn.classList.replace('bi-list', 'bi-x-lg');
    body.style.overflow = 'hidden'
  } else {
    navToggleBtn.classList.replace('bi-x-lg', 'bi-list');
    body.style.overflow = 'auto'
  }
});

const mediaQuery = window.matchMedia('(max-width: 1100px)');
const navArrows = document.querySelectorAll('.nav__arrow');
function handleMediaQuery(e) {
  if (e.matches) {
    navArrows.forEach(arrow => {
      arrow.classList.replace('bi-chevron-down', 'bi-chevron-right');
    });
  } else {
    navArrows.forEach(arrow => {
      arrow.classList.replace('bi-chevron-right', 'bi-chevron-down');
    });
  }
}

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});


mediaQuery.addEventListener('change', handleMediaQuery);
handleMediaQuery(mediaQuery);