window.addEventListener('load', init);

function init() {
	handleHeader();
	gsapAnimations();
}

const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.nav-item');

// função adiciona uma classe no header-wrapper para escurecer o fundo do header quando a página é scrollada um pouco
// e esconde o header quando passa dos 200px de altura da página, mas se scrollar para cima ele reaparece
// também deixa bold o link de qual página está no momento
function handleHeader() {
	let scrollpos = window.scrollY;
	let prevScrollpos = window.pageYOffset;
	const header = document.querySelector('#header-wrapper');
	const headerHeight = header.offsetHeight;

	//escurece o fundo do header
	window.addEventListener('scroll', function () {
		scrollpos = window.scrollY;
		scrollpos >= headerHeight
			? header.classList.add('scrolled')
			: header.classList.remove('scrolled');

		//esconde o header
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos < currentScrollPos && currentScrollPos > 200) {
			header.style.top = `${headerHeight * -2}px`;
		} else {
			header.style.top = '0';
		}
		prevScrollpos = currentScrollPos;
	});
}

//função de abrir e fechar o menu no mobile
function toggleMenu() {
	menuToggle.classList.toggle('opened');
	nav.classList.toggle('opened');
	body.classList.toggle('opened');

	const navItems = document.querySelectorAll('.nav-item');

	if (window.innerWidth <= 1024) {
		navItems.forEach((item) => {
			item.addEventListener('click', (e) => {
				menuToggle.classList.remove('opened');
				nav.classList.remove('opened');
				body.classList.remove('opened');
			});
		});
	}
}

//função para abrir o dropdown de Como funciona
const comoFuncionaCards = document.querySelectorAll('.como-funciona-card');

comoFuncionaCards.forEach((card) => {
	card.addEventListener('click', (e) => {
		card.classList.toggle('opened');
	});
});

//* ANIMAÇÕES GSAP

function gsapAnimations() {
	const introTitle = document.querySelector('#intro #intro-title');
	if (introTitle) {
		gsap.fromTo(
			introTitle,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#intro',
					start: 'top center+=200',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'sine.inOut',
			}
		);
	}

	const introTexts = document.querySelectorAll('.intro-text');
	if (introTexts && introTexts.length > 0) {
		gsap.fromTo(
			introTexts,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: introTexts[0],
					start: 'top center+=400',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.3,
				ease: 'sine.inOut',
				stagger: 0.3,
			}
		);
	}

	const introVideo = document.querySelector('#intro #intro-video');
	if (introVideo) {
		gsap.fromTo(
			introVideo,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#intro-video',
					start: 'top center+=200',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.3,
				ease: 'sine.inOut',
			}
		);
	}

	const oqueSection = document.querySelector('#o-que');
	if (oqueSection) {
		gsap.fromTo(
			oqueSection,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#o-que-wrap',
					start: 'top center+=200',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.3,
				ease: 'sine.inOut',
			}
		);
	}

	const comoFuncionaTitle = document.querySelector(
		'#como-funciona #como-funciona-title'
	);
	if (comoFuncionaTitle) {
		gsap.fromTo(
			comoFuncionaTitle,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#como-funciona',
					start: 'top center+=200',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'sine.inOut',
			}
		);
	}

	const comoFuncionaCards = document.querySelectorAll('.como-funciona-card');
	if (comoFuncionaCards && comoFuncionaCards.length > 0) {
		gsap.fromTo(
			comoFuncionaCards,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#como-funciona-cards',
					start: 'top center+=400',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.3,
				ease: 'sine.inOut',
				stagger: 0.3,
			}
		);
	}

	const comoFuncionaButton = document.querySelector(
		'#como-funciona #como-funciona-button'
	);
	if (comoFuncionaButton) {
		gsap.fromTo(
			comoFuncionaButton,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#como-funciona-button',
					start: 'top center+=400',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'sine.inOut',
			}
		);
	}

	const duvidasTitle = document.querySelector('#duvidas #duvidas-title');
	if (duvidasTitle) {
		gsap.fromTo(
			duvidasTitle,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#duvidas',
					start: 'top center+=200',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'sine.inOut',
			}
		);
	}

	const duvidasCards = document.querySelectorAll('.duvida-card');
	if (duvidasCards && duvidasCards.length > 0) {
		gsap.fromTo(
			duvidasCards,
			{
				opacity: 0,
				y: 60,
			},
			{
				scrollTrigger: {
					trigger: '#duvidas-cards',
					start: 'top center+=200',
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.3,
				ease: 'sine.inOut',
				stagger: 0.3,
			}
		);
	}
}
