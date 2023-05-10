import "./MemoryGame.css"

const template = () => {

    return `
    <div class="container">
    <h2 class="heading-title"><e>Memory Game</e></h2>
    <div class="cards">
      <div class="card" id="icon-1">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704861/grade_FILL0_wght400_GRAD0_opsz48_tsic28.png" alt="icon" />
      </div>
      <div class="card" id="icon-2">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704865/delete_forever_FILL0_wght400_GRAD0_opsz48_cj6zqh.png" alt="icon" />
      </div>
      <div class="card" id="icon-3">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704958/heart_plus_FILL0_wght400_GRAD0_opsz48_aixjoz.png" alt="icon" />
      </div>
      <div class="card" id="icon-4">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704961/assistant_direction_FILL0_wght400_GRAD0_opsz48_pd5iwv.png" alt="icon" />
      </div>
      <div class="card" id="icon-5">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704964/transcribe_FILL0_wght400_GRAD0_opsz48_ypwsea.png" alt="icon" />
      </div>
      <div class="card" id="icon-6">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704968/rebase_FILL0_wght400_GRAD0_opsz48_fsxavi.png" alt="icon" />
      </div>
      <div class="card" id="icon-1">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704861/grade_FILL0_wght400_GRAD0_opsz48_tsic28.png" alt="icon" />
      </div>
      <div class="card" id="icon-3">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704958/heart_plus_FILL0_wght400_GRAD0_opsz48_aixjoz.png" alt="icon" />
      </div>
      <div class="card" id="icon-5">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704964/transcribe_FILL0_wght400_GRAD0_opsz48_ypwsea.png" alt="icon" />
      </div>
      <div class="card" id="icon-2">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704865/delete_forever_FILL0_wght400_GRAD0_opsz48_cj6zqh.png" alt="icon" />
      </div>
      <div class="card" id="icon-6">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704968/rebase_FILL0_wght400_GRAD0_opsz48_fsxavi.png" alt="icon" />
      </div>
      <div class="card" id="icon-7">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683723565/sentiment_satisfied_FILL0_wght400_GRAD0_opsz48_qiyr37.png" alt="icon" />
      </div>
      <div class="card" id="icon-4">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683704961/assistant_direction_FILL0_wght400_GRAD0_opsz48_pd5iwv.png" alt="icon" />
      </div>
      <div class="card" id="icon-8">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683705931/deployed_code_history_FILL0_wght400_GRAD0_opsz48_umr5lu.png" alt="icon" />
      </div>
      <div class="card" id="icon-8">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683705931/deployed_code_history_FILL0_wght400_GRAD0_opsz48_umr5lu.png" alt="icon" />
      </div>
      <div class="card" id="icon-7">
        <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683723565/sentiment_satisfied_FILL0_wght400_GRAD0_opsz48_qiyr37.png" alt="icon" />
      </div>
    </div>
  </div>
    `
}

const addListeners = () => {
 
    let counter = 0;
    let firstSelection = ""; //guardo primera carta
    let secondSelection = ""; // guardo segunda carta

    const cards = document.querySelectorAll(".card");//array de todas las cartas
    cards.forEach((card) => {

        card.addEventListener("click", () => {
            card.classList.add("clicked");

        if (counter === 0) {
            firstSelection = card.getAttribute("id");
            counter++;
            //seleciona la primera carta y la guarda
        } else {
        secondSelection = card.getAttribute("id");
        counter = 0; //selecciona la segunda

        if (firstSelection === secondSelection) {
            const correctCards = document.querySelectorAll( //si son iguales pilla el mismo id
            //y les añade la clase checjed y les quita clicked
            ".card[id='" + secondSelection + "']");
                console.log(correctCards);
        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
        } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");
            //si no son iguales les da igual
        incorrectCards[0].classList.add("error");
        incorrectCards[1].classList.add("error");

         setTimeout(() => {
          incorrectCards[0].classList.remove("error");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("error");
          incorrectCards[1].classList.remove("clicked");
        }, 200); 
      }
    }
    });
});

}

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
}