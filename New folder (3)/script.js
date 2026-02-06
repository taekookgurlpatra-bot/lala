const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

const readyBtn = document.getElementById("readyBtn");
const envelope = document.getElementById("envelope");
const nextBtn = document.getElementById("nextBtn");
const yesValentine = document.getElementById("yesValentine");
const noValentine = document.getElementById("noValentine");
const restartBtn = document.getElementById("restartBtn");

// Page 1
readyBtn.addEventListener("click", () => {
    page1.classList.remove("active");
    page2.classList.add("active");
});

// Envelope click
envelope.addEventListener("click", () => {
    envelope.classList.add("open");
});

// Next to Valentine question
nextBtn.addEventListener("click", () => {
    page2.classList.remove("active");
    page3.classList.add("active");
});

// Yes Valentine
yesValentine.addEventListener("click", () => {
    page3.classList.remove("active");
    page4.classList.add("active");
});

// No Valentine - run away effect
noValentine.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    noValentine.style.transform = `translate(${x}px, ${y}px)`;
});

// Restart
restartBtn.addEventListener("click", () => {
    page4.classList.remove("active");
    envelope.classList.remove("open");
    noValentine.style.transform = "translate(0,0)";
    page1.classList.add("active");
});

// Petals creation
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
