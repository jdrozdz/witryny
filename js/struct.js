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
    result.innerHTML = SquereCalctulator(a, b);
}