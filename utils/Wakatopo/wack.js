//import { score } from "../../pages/Wakatopo/Wakatopo";

export let score = 0;
export const wackTop = (e) => {
    console.log(score);
    score++;
    console.log(score);
    e.target.parentNode.classList.remove("up");
    document.querySelector(".score").textContent = score;
  };
  
export const rainitScore = () => {

    score = 0;

}