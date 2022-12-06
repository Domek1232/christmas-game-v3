let container = document.querySelector("#container");
let miku = document.querySelector("#miku");
let csomagok = document.querySelector("#csomagok");
let hater = document.querySelector("#hater");
let pontszam = document.querySelector("#pontszam");
let jatekvege = document.querySelector("#jatekvege");

//A változók deklarálása a pontszámhoz
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//játék inditása
window.addEventListener("keydown", (start) => {

    if (start.code == "Space") {
        jatekvege.style.display = "none";
        csomagok.classList.add("csomagokActive");
        hater.firstElementChild.style.animation = "haterAnimate 1.5s linear infinite";

        //pontszam
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});