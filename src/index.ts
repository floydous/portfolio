const Sections = document.querySelectorAll("section[id]") as NodeListOf<HTMLElement>;
const NavIndex = document.querySelector(".nav-index") as HTMLElement;
const NavText = document.querySelector(".nav-text") as HTMLElement;

const SectionObserver = new IntersectionObserver(
	(entries) => {
		const process = (entry: IntersectionObserverEntry) => {
			if (entry.isIntersecting) {
				const SectionID = entry.target.getAttribute("id") as string;
				const IntersectingElement = entry.target as HTMLElement;

				NavIndex.textContent = "0" + (Array.from(Sections).indexOf(IntersectingElement) + 1).toString();
				NavText.textContent = SectionID;
			}
		};

		entries.forEach((entry) => process(entry));
	},
	{ threshold: 0.5 }
);

Sections.forEach((section) => {
	SectionObserver.observe(section);
});
