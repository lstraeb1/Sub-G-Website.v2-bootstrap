const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbar');
const navbarCollapse = document.querySelector('.collapse');

navToggleBtn.addEventListener('click', () => {
    if (navToggleBtn.classList.contains('collapsed')) {
      body.style.overflowY = 'auto';
    } else {
      body.style.overflowY = 'hidden';
    }
  });