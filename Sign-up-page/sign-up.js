const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const container0 = document.querySelector('.container-0');

// allow scrolling on navbar when open on mobile devices but prevent scrolling on rest of body

navToggleBtn.addEventListener('click', () => {
	if (navToggleBtn.classList.contains('collapsed')) {
			body.style.overflowY = 'auto';
			navbar.style.maxHeight = null;
			// loginMobile.classList.add('hidden');
			// joinUsMobile.classList.add('hidden');
	} else {
			body.style.overflowY = 'hidden';
			navbar.style.maxHeight = '100vh';
			// loginMobile.classList.remove('hidden');
			// joinUsMobile.classList.remove('hidden');
	}
});

