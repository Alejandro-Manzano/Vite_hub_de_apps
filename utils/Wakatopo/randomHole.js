import { lastHole } from "../../pages/Wakatopo/Wakatopo";
//1

export const randomHole = (lastHole) => {
    //Index aleatorio
    const index = Math.floor(
      Math.random() * document.querySelectorAll(".hole").length
    );
    //Hoyo aleatorio
    const hole = document.querySelectorAll(".hole")[index];
    //Evitamos que el topo salga dos veces por el mismo hoyo
    if (hole === lastHole) {
      return randomHole(document.querySelectorAll(".hole"));
    }
  
    lastHole = hole;
    return hole;
  };