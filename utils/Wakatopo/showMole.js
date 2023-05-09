import { timeUp } from "../../pages/Wakatopo/Wakatopo";
import { randomHole } from "./randomHole";
import { randomTime } from "./randomTime";

export const showMole = () => {//llamar a randomHole
    //Definimos el tiempo que el topo se mantiene asomado
    const time = randomTime(900, 1000);
    //Seleccionamos hoyo para añadirle la clase up
    const hole = randomHole(document.querySelectorAll(".hole"));
    hole.classList.add("up");
    //SetTimeout para elimimar la clase
    setTimeout(() => {
      hole.classList.remove("up");

      // Siempre que el tiempo de la partida no haya acabado seguiremos asomando topos
      if (!timeUp) {
        showMole(timeUp); 
      }
    }, time);
    return timeUp;
  };