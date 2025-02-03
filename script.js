console.log("scipt loaded .....");

const minFarve = new URLSearchParams(window.location.search).get("color");

console.log("min farve er", minFarve);

//For at få sat indholdet ind i h2 på farve.html-siden.
document.querySelector("h2").textContent = minFarve;

//Man bruger innerHTML hvis man vil have html ind på siden.
//Man kan nøjes med textContent, når bare man vil have tekst sat ind.
