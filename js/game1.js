"use strict";

const scorePoints = document.querySelector("#score-points");
const winner = document.querySelector("#winner");
const loser = document.querySelector("#looser");
const ui = document.querySelector("#answer-buttons");
let currentNumber = 0;

function RenderButtons() {
    const answerCount = 6;
    for(let i = 0; i <= answerCount; i++) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = i;
        btn.addEventListener("click", function() {
            if (Number(this.innerText) === currentNumber) {
                // dodj +1 do scorePoints - uzyj scorePoints = scorePoints.innerTEXT + 1;
                winner.style.visibility = "visible";
                loser.style.visibility = "hidden";
            } else {
                loser.style.visibility = "visible";
                winner.style.visibility = "hidden";
            }
            currentNumber = GenerateNumber();
        });
        ui.appendChild(btn);
    }
}

// Generowanie liczby losowej z podanego zakresu
function GenerateNumber() { // int
    const min = 0;
    const max = 6;
    return Math.floor(Math.random() * (max - min)) + min;
}

function StartGame() {
    RenderButtons();
    currentNumber = GenerateNumber();
}

StartGame();
