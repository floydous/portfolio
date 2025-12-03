const Sections = document.querySelectorAll("section[id]");
const NavIndex = document.querySelector(".nav-index");
const NavText = document.querySelector(".nav-text");
const SectionObserver = new IntersectionObserver((entries) => {
    const process = (entry) => {
        if (entry.isIntersecting) {
            const SectionID = entry.target.getAttribute("id");
            const IntersectingElement = entry.target;
            NavIndex.textContent = "0" + (Array.from(Sections).indexOf(IntersectingElement) + 1).toString();
            NavText.textContent = SectionID;
        }
    };
    entries.forEach((entry) => process(entry));
}, { threshold: 0.5 });
Sections.forEach((section) => {
    SectionObserver.observe(section);
});
export {};
//# sourceMappingURL=index.js.map