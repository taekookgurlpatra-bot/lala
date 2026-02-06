
// Pages
const pages = {
    page1: document.getElementById("page1"),
    page2: document.getElementById("page2"),
    page3: document.getElementById("page3"),
    page4: document.getElementById("page4")
};

// Buttons & elements
const readyBtn = document.getElementById("readyBtn");
const envelope = document.getElementById("envelope");
const nextBtn = document.getElementById("nextBtn");
const yesValentine = document.getElementById("yesValentine");
const noValentine = document.getElementById("noValentine");
const restartBtn = document.getElementById("restartBtn");

// Function to switch pages
function showPage(current, next) {
    current.style.display = "none"; // hide current
    next.style.display = "block";   // show next
}

// Page 1 → Page 2
readyBtn.addEventListener("click", () => showPage(pages.page1, pages.page2));

// Envelope click → open
envelope.addEventListener("click", () => envelope.classList.add("open"));

// Page 2 → Page 3
nextBtn.addEventListener("click", () => showPage(pages.page2, pages.page3));

// Page 3 → Page 4 (Yes)
yesValentine.addEventListener("click", () => showPage(pages.page3, pages.page4));

// No button runs away
noValentine.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    noValentine.style.transform = `translate(${x}px, ${y}px)`;
});

// Restart → Page 1
restartBtn.addEventListener("click", () => {
    envelope.classList.remove("open");
    noValentine.style.transform = "translate(0,0)";
    showPage(pages.page4, pages.page1);
});

// Petals
function createPetals() {
    for (let i = 0; i < 15; i++) {
        let petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.animationDuration = 5 + Math.random() * 5 + "s";
        petal.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(petal);
    }
}

createPetals();


