// Pages
const pages = {
    page1: document.getElementById("page1"),
    page2: document.getElementById("page2"),
    page3: document.getElementById("page3"),
    page4: document.getElementById("page4")
};

// Intro buttons
const yesReady = document.getElementById("yesReady");
const noReady = document.getElementById("noReady");

// Proposal elements
const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const nextBtn = document.getElementById("nextBtn");

// Valentine buttons
const yesValentine = document.getElementById("yesValentine");
const noValentine = document.getElementById("noValentine");

// Restart
const restartBtn = document.getElementById("restartBtn");

// Show next page function
function showPage(current, next) {
    current.style.display = "none";
    next.style.display = "block";
}

// Page 1 → Page 2 (Yes)
yesReady.addEventListener("click", () => showPage(pages.page1, pages.page2));

// Page 1 → Page 2 (No runs away)
noReady.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 50 - 25;
    noReady.style.transform = `translate(${x}px, ${y}px)`;
});

// Envelope click → paper slides out
envelope.addEventListener("click", () => {
    paper.classList.add("show");
    nextBtn.style.display = "inline-block";
});

// Page 2 → Page 3
nextBtn.addEventListener("click", () => showPage(pages.page2, pages.page3));

// Page 3 → Page 4 (Yes)
yesValentine.addEventListener("click", () => showPage(pages.page3, pages.page4));

// Page 3 → No button runs away
noValentine.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 50 - 25;
    noValentine.style.transform = `translate(${x}px, ${y}px)`;
});

// Restart → Page 1
restartBtn.addEventListener("click", () => {
    paper.classList.remove("show");
    nextBtn.style.display = "none";
    noReady.style.transform = "translate(0,0)";
    noValentine.style.transform = "translate(0,0)";
    showPage(pages.page4, pages.page1);
});

// Petals animation
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
