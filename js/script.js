/* --------Count Up When Scroll Down--------- */
const section = document.querySelector('.counter-section');
const counter = document.querySelectorAll('.count');
const speed = 200;

window.addEventListener('scroll', function () {
	let animate = window.scrollY + window.innerHeight >= section.offsetTop;
	if (animate) {
		counter.forEach((counter) => {
			const updateCount = () => {
				const target = +counter.getAttribute('data-target');
				const count = +counter.innerText;
				const increment = target / speed;
				if (count < target) {
					counter.innerText = Math.ceil(count + increment);
					setTimeout(updateCount, 10);
				}
				else {
					count.innerText = target;
				}
			};
			updateCount();
		});
	}
});

/* -------Isotope Filter--------- */
const filterBtn = document.querySelectorAll('.btn-filter');
const img = document.querySelectorAll('.img');
const nav = document.querySelector('.nav');
filterBtn.forEach((button) => {
	button.addEventListener('click', function (e) {
		nav.querySelector('.active').classList.remove('active');
		this.classList.add('active');
		e.preventDefault();
		const filter = e.target.dataset.filter;
		img.forEach((img) => {
			if (filter === 'all') {
				img.style.display = 'block';
			}
			else {
				if (img.classList.contains(filter)) {
					img.style.display = 'block';
				}
				else {
					img.style.display = 'none';
				}
			}
		});
	});
});

/* --------Filter Search Box--------- */
const form = document.querySelector('form');
form.addEventListener('click', function (event) {
	event.preventDefault();
});

const search = document.querySelector('#search-item');
search.addEventListener('input', function (e) {
	e.preventDefault();
	const searchFilter = e.target.value.toLowerCase().trim();
	img.forEach((img) => {
		if (img.dataset.item.includes(searchFilter)) {
			img.style.display = 'block';
		}
		else {
			img.style.display = 'none';
		}
	});
});

/* --------Scroll-Down button--------- */
const scrollBtn = document.querySelector('.down-scroll');
scrollBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const scrolled = document.documentElement.scrollHeight - window.innerHeight;
	//window.scrollTo(0, scrolled);
	window.scroll({
		top      : scrolled,
		behavior : 'smooth'
	});
});

/* ---------Smooth Scroll---------- */
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach((navbarLinks) => {
	navbarLinks.addEventListener('click', function (event) {
		event.preventDefault();
		const targetId =
			event.currentTarget.getAttribute('href') === '#' ? 'header' : event.currentTarget.getAttribute('href');
		document.querySelector(targetId).scrollIntoView({
			behavior : 'smooth',
			block    : 'start'
		});
	});
});
