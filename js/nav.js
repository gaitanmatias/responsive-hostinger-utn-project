const navToggleBtn = document.getElementById('nav-toggle-btn')
const body = document.getElementById('body')
navToggleBtn.addEventListener('click', function() {
  const navMenu = document.querySelector('.nav__links');
  navMenu.classList.toggle('active');
  if (navToggleBtn.classList.contains('fa-bars')) {
    navToggleBtn.classList.replace('fa-bars', 'fa-xmark');
    body.style.overflow = 'hidden'
  } else {
    navToggleBtn.classList.replace('fa-xmark', 'fa-bars');
    body.style.overflow = 'auto'
  }
});

const mediaQuery = window.matchMedia('(max-width: 1100px)');
const navArrows = document.querySelectorAll('.nav__arrow');
function handleMediaQuery(e) {
  if (e.matches) {
    navArrows.forEach(arrow => {
      arrow.classList.replace('fa-chevron-down', 'fa-chevron-right');
    });
  } else {
    navArrows.forEach(arrow => {
      arrow.classList.replace('fa-chevron-right', 'fa-chevron-down');
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