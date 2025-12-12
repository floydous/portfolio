const Sections = document.querySelectorAll("section[id]");
const NavIndex = document.querySelector(".nav-index");
const NavText = document.querySelector(".nav-text");
const MenuPanel = document.getElementById("menu");
const MenuButton = document.getElementById("menu-btn");
const MobileLinks = MenuPanel.querySelectorAll("a");
let currentSection = null;
const SectionObserver = new IntersectionObserver((entries) => {
    const process = (entry) => {
        if (entry.isIntersecting) {
            const SectionID = entry.target.getAttribute("id");
            const IntersectingElement = entry.target;
            NavIndex.textContent = "0" + (Array.from(Sections).indexOf(IntersectingElement) + 1).toString();
            currentSection = IntersectingElement;
            NavText.textContent = SectionID;
        }
    };
    entries.forEach((entry) => process(entry));
}, { threshold: 0.5 });
Sections.forEach((section) => SectionObserver.observe(section));
function triggerSidebar() {
    MenuPanel.classList.toggle("translate-x-full");
    MenuButton.textContent = MenuPanel.classList.contains("translate-x-full") ? "[Menu]" : "[Close]";
    document.body.style.overflow = MenuPanel.classList.contains("translate-x-full") ? "auto" : "hidden";
    if (currentSection) {
        const nthSection = Array.from(Sections).indexOf(currentSection);
        MobileLinks.forEach((element) => element.classList.remove("text-neon"));
        MobileLinks[nthSection].classList.add("text-neon");
    }
}
MobileLinks.forEach((element) => element.addEventListener("click", triggerSidebar));
MenuButton.addEventListener("click", triggerSidebar);
export {};
//# sourceMappingURL=index.js.map