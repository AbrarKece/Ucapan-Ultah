"use strict";

/* =========================================
   PAGE NAVIGATION
========================================= */

const pages = document.querySelectorAll(".page");

let currentPage = "homePage";

function showPage(pageId) {
    const nextPage = document.getElementById(pageId);

    if (!nextPage || pageId === currentPage) {
        return;
    }

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    nextPage.classList.add("active");

    currentPage = pageId;

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}


/* =========================================
   PAGE 1: CAKE CLICK
========================================= */

const cakeButton = document.getElementById("cakeButton");

cakeButton.addEventListener("click", () => {
    showPage("envelopePage");
});


/* =========================================
   PAGE 2: ENVELOPE
========================================= */

const envelopeButton = document.getElementById("envelopeButton");
const envelopeImage = envelopeButton.querySelector(".envelope-image");

let envelopeOpened = false;

envelopeButton.addEventListener("click", () => {
    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    envelopeButton.classList.add("opening");

    /*
      Amplop tertutup dianimasikan terlebih dahulu.
      Setelah animasi selesai, kita beralih ke halaman surat.
    */

    window.setTimeout(() => {
        envelopeImage.src = "assets/amplop_terbuka.png";

        showPage("letterPage");
    }, 550);
});


/* =========================================
   PAGE 3: LETTER
========================================= */

const letterContinue = document.querySelector(".letter-continue");

letterContinue.addEventListener("click", () => {
    showPage("flowerPage");
});


/* =========================================
   PAGE 4: FLOWERS
========================================= */

const flowerContinue = document.querySelector(".flower-continue");

flowerContinue.addEventListener("click", () => {
    showPage("wishPage");
});


/* =========================================
   PAGE 5: MAKE A WISH
========================================= */

const flameButton = document.getElementById("flameButton");
const smoke = document.getElementById("smoke");

const wishInstruction = document.getElementById("wishInstruction");
const wishComplete = document.getElementById("wishComplete");

const confettiContainer = document.getElementById("confettiContainer");
const finalContinue = document.getElementById("finalContinue");

let candleExtinguished = false;

function createConfetti() {
    const colors = [
        "#f8d7a5",
        "#fff4ed",
        "#e5a2b4",
        "#d4af70",
        "#ffffff",
        "#c97c91"
    ];

    const totalPieces = 75;

    for (let i = 0; i < totalPieces; i++) {
        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.style.left = `${Math.random() * 100}%`;

        piece.style.setProperty(
            "--confetti-color",
            colors[Math.floor(Math.random() * colors.length)]
        );

        piece.style.setProperty(
            "--duration",
            `${2.2 + Math.random() * 2.5}s`
        );

        piece.style.setProperty(
            "--drift",
            `${Math.random() * 180 - 90}px`
        );

        piece.style.animationDelay = `${Math.random() * 0.9}s`;

        confettiContainer.appendChild(piece);

        piece.addEventListener("animationend", () => {
            piece.remove();
        });
    }
}

flameButton.addEventListener("click", () => {
    if (candleExtinguished) {
        return;
    }

    candleExtinguished = true;

    flameButton.classList.add("extinguished");

    smoke.classList.add("show");

    wishInstruction.textContent = "Your wish is on its way... ♡";

    window.setTimeout(() => {
        createConfetti();

        wishComplete.classList.add("show");
    }, 500);
});


/* =========================================
   PAGE 6: FINAL PAGE
========================================= */

finalContinue.addEventListener("click", () => {
    showPage("finalPage");
});