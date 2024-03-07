const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  

navToggleBtn.addEventListener('click', () => {
    if (navToggleBtn.classList.contains('collapsed')) {
      body.style.overflowY = 'auto';
      loginMobile.classList.add('hidden');
      joinUsMobile.classList.add('hidden');
    } else {
      body.style.overflowY = 'hidden';
      loginMobile.classList.remove('hidden');
      joinUsMobile.classList.remove('hidden');
    }
  });

const interchangingWords = document.getElementById('interchanging-words');
const wordOptions = ["hard-working", "encouraging", "friendly", "curious", "family"];
let currentIndex = 0;

const changeLastWord = () => {
  interchangingWords.textContent = wordOptions[currentIndex];
  currentIndex = (currentIndex + 1) % wordOptions.length;
};

setInterval(changeLastWord, 1000);