const NavigationLinks = document.querySelectorAll(".navigation-bar ul li");
const SlidingTracker = document.querySelector(".sliding-tracker");

const ContainerStrukturKegiatan = document.querySelectorAll("section:nth-child(2) .about .right .container");
const ContainerServices = document.querySelectorAll("section:nth-child(1) .about .company-task .container");

ContainerServices.forEach((container) => {
	container.addEventListener("mouseenter", () => {
        container.querySelector(".border-animation").style.width = "100%";
        container.querySelector("h1").style.color = "var(--primary-aqua)";
	});

	container.addEventListener("mouseleave", () => {
        container.querySelector(".border-animation").style.width = "0";
        container.querySelector("h1").style.color = "#000";
	});
});

ContainerStrukturKegiatan.forEach((container) => {
	container.addEventListener("mouseenter", () => {
		container.querySelector(".container-description").style.borderTop = "1px solid var(--primary-aqua)";
		container.querySelector("h1").style.color = "var(--primary-aqua)";
		container.querySelector(".num").style.opacity = "1";
	});

	container.addEventListener("mouseleave", () => {
		container.querySelector(".container-description").style.borderTop = "1px solid var(--transparent-aqua)";
		container.querySelector("h1").style.color = "#000";
		container.querySelector(".num").style.opacity = "0.2";
	});
});

NavigationLinks.forEach((link) => {
	link.addEventListener("click", () => {
		link.parentElement.querySelector(".active")?.classList.remove("active");
		link.classList.add("active");

		SlidingTracker.style.left = `${link.offsetLeft}px`;
		SlidingTracker.style.width = `${link.offsetWidth}px`;
	});
});
