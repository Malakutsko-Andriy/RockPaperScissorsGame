const MassegeArray = ["Ти проиграл апонент вибрал ", "Ти победил апонент вибрал ", "Ничья", ""];
const KNBSrcArray = ["./picture/камень.webp", "./picture/ножници.webp", "./picture/бумага.webp", "./picture/secret.png"];
const KNBArray = ["камень", "ножници", "бумага"];
let RandomNumber = Math.floor(Math.random() * 3);
let Aponent = KNBArray[RandomNumber];
let ScoreG = 0;
let ScoreA = 0;
const TextScoreGA = document.getElementById("ScoreGA");
const AponentImg = document.getElementById("AponentImg");
const WinerText = document.getElementById("Winer");
TextScoreGA.textContent = ScoreG + " : " + ScoreA;

function Restart() {
    AponentImg.src = KNBSrcArray[3];
    WinerText.textContent = MassegeArray[3];
    ScoreA = 0;
    ScoreG = 0;
    TextScoreGA.textContent = ScoreG + " : " + ScoreA;
}

function StartNewGame() {
    RandomNumber = Math.floor(Math.random() * 3);
    Aponent = KNBArray[RandomNumber];
}

function WinerA() {
    WinerText.textContent = MassegeArray[0] + Aponent;
    ScoreA++;
    TextScoreGA.textContent = ScoreG + " : " + ScoreA;
    AponentImg.src = KNBSrcArray[RandomNumber];
    StartNewGame();
}

function WinerG() {
    WinerText.textContent = MassegeArray[1] + Aponent;
    ScoreG++;
    TextScoreGA.textContent = ScoreG + " : " + ScoreA;
    AponentImg.src = KNBSrcArray[RandomNumber];
    StartNewGame();
}

function NotWiner() {
    WinerText.textContent = MassegeArray[2];
    AponentImg.src = KNBSrcArray[RandomNumber];
    StartNewGame();
}

function K() {
    if (Aponent == KNBArray[2]) {
        WinerA();
    } else if (Aponent == KNBArray[1]) {
        WinerG();
    } else {
        NotWiner();
    }
}

function N() {
    if (Aponent == KNBArray[0]) {
        WinerA();
    } else if (Aponent == KNBArray[2]) {
        WinerG();
    } else {
        NotWiner();
    }
}

function B() {
    if (Aponent == KNBArray[1]) {
        WinerA();
    } else if (Aponent == KNBArray[0]) {
        WinerG();
    } else {
        NotWiner();
    }
}