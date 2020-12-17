"use strict";

// kwadrat: P = a^2
// prostokat: P = a*b
function SquereSurfaceArea(a, b) {
    return a * b;
}

function Calculate() {
    const a = document.querySelector("#a").value;
    const b = document.querySelector("#b").value;
    const result = document.querySelector("#result");
    if (isNaN(a) || isNaN(b) || a === 0 
        || b === 0 || b.length === 0 || a.length === 0) {
        result.innerHTML = "<b style='color: white; background-color: red'>Podaj liczbe wieksza od 0</b>";
    } else {
        result.innerHTML = SquereSurfaceArea(a, b);
    }
}