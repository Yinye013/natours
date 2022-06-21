const naviGation = document.querySelector(".navigation");
console.log(naviGation);
//  smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		// e.preventDefault();
		const href = link.getAttribute("href");

		// scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		// scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		// close mobilenav
		if (link.classList.contains("navigation__link"))
			naviGation.classList.toggle("navigation__background");
	});
});
