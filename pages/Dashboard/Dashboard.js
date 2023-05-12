import { initControler } from "../../utils/MainUtils/rout";
import { inputValueLogin } from "../Login/Login";
import "./Dashboard.css";


const template = () => {
    return   `
    <div class="container-saludo-pokemon">
    <p class="pvalue"></p>
    </div>
    <div class="containerDashboard">
        <ul class="container-img">
            <li>
                    <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683128392/10-curiosidades-de-Pokemon-que-quiza-no-conoces_jueih2.webp" alt="Pokemon-img" id="pokemonImg" >
                    <h2>Pokemon</h2>
            </li>

            <li>
                <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683209936/istockphoto-1196954772-612x612_nyghvm.jpg" alt="Pokemon-img" id="hangManImg" >
                <h2>Hang Man</h2>
            </li>

            <li>
                <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683209869/WHACK_A_MOLE_ggnpn5.jpg" alt="Wakatopo" id="Wakatopo" >
                <h2>Wakatopo</h2>
            </li>

            <li>
                <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683210025/unnamed_e2js5b.png" alt="Quiz-img" id="quizImg" >
                <h2>Football Quiz</h2>
            </li>

            <li>
                <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683209879/unnamed_1_xax5ao.png" alt="Brain-img" id="memoryImg" >
                <h2>Memory Game</h2>
            </li>

            <li>
                <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683209974/tres-en-raya-jugar-gato-google_vz7clh.png" alt="Pokemon-img" id="pokemonImg" >
                <h2>Tic Tac Toe</h2>
            </li>
        </ul>

    </div>
`
}



const addListeners = () => {

    const pSaludo = document.querySelector(".pvalue");
    pSaludo.innerHTML = "Bienvenido " +inputValueLogin+ "! vamos a jugar.";

    const imgPokemon = document.querySelector("#pokemonImg")
    imgPokemon.addEventListener("click", () => {
        initControler("Pokemon");
    })

    const hangManImg = document.querySelector("#hangManImg")
    hangManImg.addEventListener("click", () => {
        initControler("HangMan");
    })

    const Wakatopo = document.querySelector("#Wakatopo")
    Wakatopo.addEventListener("click", () => {
        initControler("Wakatopo");
    })

    const Quiz = document.querySelector("#WquizImg")
    quizImg.addEventListener("click", () => {
        initControler("QuizNeo");
    })

    const memoryGame = document.querySelector("#memoryImg")
    memoryGame.addEventListener("click", () => {
        initControler("MemoryGame");
    })

}

export const printTemplate = () => {
    
    document.querySelector("main").innerHTML = template();
    addListeners();

}