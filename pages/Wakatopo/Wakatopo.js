import { randomTime } from "../../utils/Wakatopo/randomTime";
import { showMole } from "../../utils/Wakatopo/showMole";
import { rainitScore, score, wackTop } from "../../utils/Wakatopo/wack";


import "./Wakatopo.css";

//! ----------------------------------------------------------------
//? ------------------ TEMPLATE GENERAL ---------------------------
//! ----------------------------------------------------------------

const template = () => `
  <div class="interface">
    <h1 class="title-wakatopo">Wakatopo</h1>
    <span class="score">0</span>
    <button id="startGame">Start!</button>
    <p class="p-apunta">Apunta a la cabeza!</p>
  </div>
  <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>
`;

//export let score = 0;
export let lastHole;
export let timeUp = false;

const startGame = () => {
    timeUp = false;
    document.querySelector("#startGame").style.display = "none";
    rainitScore();
    showMole(timeUp); //esta hay que metrla en la del principal y tengo que llamar Showmolw
  
    setTimeout(() => {
      timeUp = true;
      document.querySelector("#startGame").style.display = "flex";
      
    }, 15000);
    
  };

const addListeners = () => {
  //Añadimos a los topos el escuchador del click para saber cuando han clicado
  document
    .querySelectorAll(".mole")
    .forEach((mole) => mole.addEventListener("click", (e) => wackTop(e)));

  document.querySelector("#startGame").addEventListener("click",startGame);
};

//! ----------------------------------------------------------------
//?--------------- PINTAR EL CONTENEDOR GENERAL---------------------
//! ----------------------------------------------------------------

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
