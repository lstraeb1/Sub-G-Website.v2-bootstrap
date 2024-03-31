const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.collapse');
const loginMobile = document.getElementById('log-in-mobile');
const joinUsMobile = document.getElementById('join-us-mobile');  
const container0 = document.querySelector('.container-0');
const priceSquare2 = document.getElementById('price-square-2');
const periodSelector1 = document.getElementById('selector-1');
const periodSelector2 = document.getElementById('selector-2');
const periodSelector3 = document.getElementById('selector-3');
const priceHeader1 = document.getElementById('plan-header-1');
const priceSubtitle1 = document.getElementById('plan-subtitle-1');
const price1 = document.getElementById('plan-price-1');
const sticker1 = document.getElementById('plan-sticker-1');
const priceHeader2 = document.getElementById('plan-header-2');
const priceSubtitle2 = document.getElementById('plan-subtitle-2');
const price2 = document.getElementById('plan-price-2');
const sticker2 = document.getElementById('plan-sticker-2');
const backgroundRed = document.getElementById('background-red');

// allow scrolling on navbar when open on mobile devices but prevent scrolling on rest of body

navToggleBtn.addEventListener('click', () => {
	if (navToggleBtn.classList.contains('collapsed')) {
			body.style.overflowY = 'auto';
			navbar.style.maxHeight = null;
	} else {
			body.style.overflowY = 'hidden';
			navbar.style.maxHeight = '100vh';
	}
});

const priceOptionObject = [
	{
		name: "Monthly Adult",
		header: "Adult Jiu-Jitsu",
		subtitle: "Mastering self-defense and discipline through adult Jiu-Jitsu training.",
		price: "$159",
		sticker: ""
	},

	{
		name: "Monthly Youth",
		header: "Youth Jiu-Jitsu",
		subtitle: "Nurturing confidence and resilience in youth through the art of Jiu-Jitsu.",
		price: "$149",
		sticker: ""
	},

	{
		name: "6 Month Adult",
		header: "Adult Jiu-Jitsu",
		subtitle: "Mastering self-defense and discipline through adult Jiu-Jitsu training.",
		price: "$149",
		sticker: "$849 billed semi-annually"
	},

	{
		name: "6 Month Youth",
		header: "Youth Jiu-Jitsu",
		subtitle: "Nurturing confidence and resilience in youth through the art of Jiu-Jitsu.",
		price: "$135",
		sticker: "$810 billed semi-annually"
	},

	{
		name: "1 Year Month Adult",
		header: "Adult Jiu-Jitsu",
		subtitle: "Mastering self-defense and discipline through adult Jiu-Jitsu training.",
		price: "$135",
		sticker: "$1,620 billed annually"
	}
];

function priceOptionSelect(identifier) {
	periodSelector1.style.color = '';
	periodSelector2.style.color = '';
	periodSelector3.style.color = '';

	if (identifier == 'periodSelector1') {
		priceHeader1.textContent = priceOptionObject[0].header;
		priceSubtitle1.textContent = priceOptionObject[0].subtitle;
		price1.innerHTML= `<h1>${priceOptionObject[0].price}<span id="per-month">/Month</span></h1>`;
		sticker1.textContent = priceOptionObject[0].sticker;

		priceHeader2.textContent = priceOptionObject[1].header;
		priceSubtitle2.textContent = priceOptionObject[1].subtitle;
		price2.innerHTML= `<h1>${priceOptionObject[1].price}<span id="per-month">/Month</span></h1>`;
		sticker2.textContent = priceOptionObject[1].sticker;

		priceSquare2.style.display = "block";
		periodSelector1.style.color = "white";
		backgroundRed.style.right = "465px";

	} else if (identifier == 'periodSelector2') {
		priceHeader1.textContent = priceOptionObject[2].header;
		priceSubtitle1.textContent = priceOptionObject[2].subtitle;
		price1.innerHTML= `<h1>${priceOptionObject[2].price}<span id="per-month">/Month</span></h1>`;
		sticker1.textContent = priceOptionObject[2].sticker;

		priceHeader2.textContent = priceOptionObject[3].header;
		priceSubtitle2.textContent = priceOptionObject[3].subtitle;
		price2.innerHTML= `<h1>${priceOptionObject[3].price}<span id="per-month">/Month</span></h1>`;
		sticker2.textContent = priceOptionObject[3].sticker;

		priceSquare2.style.display = "block";
		periodSelector2.style.color = "white";
		backgroundRed.style.right = "312px";
	}

	else if (identifier == 'periodSelector3') {
		setTimeout(function() {
			priceHeader1.textContent = priceOptionObject[4].header;
			priceSubtitle1.textContent = priceOptionObject[4].subtitle;
			price1.innerHTML= `<h1>${priceOptionObject[4].price}<span id="per-month">/Month</span></h1>`;
			sticker1.textContent = priceOptionObject[4].sticker;
			priceSquare2.style.display = "none";
		}, 200);

		periodSelector3.style.color = "white";
		backgroundRed.style.right = "155px";
	}
}

periodSelector1.addEventListener('click', function() {
	priceOptionSelect('periodSelector1');
});

periodSelector2.addEventListener('click', function() {
	priceOptionSelect('periodSelector2');
});

periodSelector3.addEventListener('click', function() {
	priceOptionSelect('periodSelector3');
});

periodSelector1.click();