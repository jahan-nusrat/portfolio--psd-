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
const filterBtn = document.querySelectorAll('.btn-filter')
const img = document.querySelectorAll('.img')
filterBtn.forEach(button => {
	button.addEventListener('click', function (e) {
		e.preventDefault()
		const filter = e.target.dataset.filter;
		img.forEach(img => {
			if (filter === 'all') {
				img.style.display = 'block'
			} else {
				if (img.classList.contains(filter)) {
					img.style.display = 'block'
				} else {
					img.style.display = 'none'
				}
			}
		})
	})
})