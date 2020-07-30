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
				} else {
					count.innerText = target;
				}
			};
			updateCount();
		});
	}
});

/* -------Isotope Filter--------- */