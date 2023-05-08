import { randomWords } from "../../utils/HangManUtils/array"

import "./HangMan.css"

const template = () => {

    return`
        <div id="main-container">

        <div id="hangMan-container">

        <div class="img-manbox">

            <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683213998/ahorcado_6_sqsbgd.png" alt="hang-man" class="img-man">

        </div>

        <div class="text-box">

            <div>
                <p class="p-solution"></p>
            </div>

            <div class="input-man-box">
            <input type="text" maxlength="1" id="inputMan" placeholder = "write here">
            <button class= "button-hangman">Prove</button>
            </div>

        </div>

        </div>

        </div>
    `

}

const addListeners = () => { 

    let acc = 0;
    let countImg = 0; //para que entre en el primer if
    let countImgTwo = 0;

    const imgs = ["https://res.cloudinary.com/dul2s17m2/image/upload/v1683386696/ahorcado_5_hhxn0q.png",
    "https://res.cloudinary.com/dul2s17m2/image/upload/v1683451337/ahorcado_4_mfwe4p.png",
    "https://res.cloudinary.com/dul2s17m2/image/upload/v1683451354/ahorcado_3_nr2jiw.png",
    "https://res.cloudinary.com/dul2s17m2/image/upload/v1683451381/ahorcado_2_ntf27r.png",
    "https://res.cloudinary.com/dul2s17m2/image/upload/v1683451403/ahorcado_1_djs71h.png",
    "https://res.cloudinary.com/dul2s17m2/image/upload/v1683451424/ahorcado_0_l5lsqd.png"
    ];

    const word = randomWords(); // llamo a la palbra aleatoria
    const p = document.querySelector(".p-solution");
    const input = document.querySelector("#inputMan")
    const button = document.querySelector(".button-hangman");
    const img = document.querySelector(".img-man");
    //selecciono los elementos que necesito
    

    const spans = [];

    for (let i = 0; i < word.length; i++) { //creo un bucle de span según el tamaño de la palabra aleatoti

        const span = document.createElement("span");
        span.innerHTML = " _ ";
        span.setAttribute("class", `${word[i].toLocaleLowerCase()}`) //añado una clase que es cada letra
        p.appendChild(span);
        spans.push(span);
    }

        button.addEventListener("click", (e) => {
            countImg = 0;
            for (let j=0; j<spans.length; j++) {
                if (input.value == spans[j].className) { 
                    spans[j].innerHTML = "";
                    spans[j].innerHTML = input.value.toUpperCase();
                    countImg++; //para que se me meta en este if u otro
                    countImgTwo++; //me suma uno cada vez que es vdd y me dice si he ganado
                }  
            }
            if (countImg == 0){
                img.src = `${imgs[acc]}`;
                acc++;
            }
            if (acc == imgs.length){
                alert("Has perdido!");
                printTemplate();
            }
            if (countImgTwo == spans.length){
                alert("Has ganado!");
                printTemplate();
            }
        });                    
}


export const printTemplate = () => {

    document.querySelector("main").innerHTML = template();
    addListeners();
    
}