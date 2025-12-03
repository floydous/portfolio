const Cursor = document.getElementById("cursor");
const HoverableObjects = document.querySelectorAll(".hoverable");
let MouseX = 0;
let MouseY = 0;
let CursorX = 0;
let CursorY = 0;
if (!/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent)) {
    console.log("Mobile");
    (function CursorAnimationFrame() {
        const dx = MouseX - CursorX;
        const dy = MouseY - CursorY;
        CursorX += dx * 0.15;
        CursorY += dy * 0.15;
        Cursor.style.left = CursorX + "px";
        Cursor.style.top = CursorY + "px";
        document.documentElement.style.setProperty("--cursor-x", CursorX + "px");
        document.documentElement.style.setProperty("--cursor-y", CursorY + "px");
        requestAnimationFrame(CursorAnimationFrame);
    })();
    document.addEventListener("mousemove", (event) => {
        MouseX = event.clientX;
        MouseY = event.clientY;
        if (event.target) {
            const Object = event.target;
            if (Object.classList.contains("hoverable")) {
                Cursor.classList.add("active");
            }
        }
    });
    HoverableObjects.forEach((Object) => {
        Object.addEventListener("mouseleave", () => {
            Cursor.classList.remove("active");
        });
    });
}
else {
    Cursor.style.display = "none";
}
export {};
//# sourceMappingURL=cursor.js.map