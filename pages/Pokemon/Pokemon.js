import { dataPokemon } from "../../utils/Pokemon/dataPokemon"
import { dataService } from "../../utils/Pokemon/dataService"
import { generatorPokemon } from "../../utils/Pokemon/generatorPokemon";
import { Loading } from "../Loading/Loading";
import "./Pokemon.css"
let result;

const template = () => {

return `
    <div class="pokemon-container">
    <div class="loading"></div>
    <img class="img-pokemon" src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683475738/1200px-International_Pok_C3_A9mon_logo.svg_kwsuqk.png" alt="title">
    <div class="buttons-container">
        <select class="select">
            <option>Choose a type</option>
        </select>
    </div>
    <input type="text" class="inputPokemon" placeholder="Search a pokemon">
    <div class="galleryPokemon"></div>
    </div>
`
}

const addListeners = async() => {

    const searchInput = document.querySelector(".inputPokemon");
    const gallery = document.querySelector(".galleryPokemon");
    const loading = document.querySelector(".loading");
    const selectOption= document.querySelector(".select");

    dataService();
    
    //generatorPokemon();
    result = await generatorPokemon();
   
    //BOTONES
    const typesNotRepeat = []; //creo este bucle que me guarda los types no repetidos
    for (const pokemon of result) {
        if(!typesNotRepeat.includes(pokemon.type)){
            typesNotRepeat.push(pokemon.type)
        }
    }
    console.log(typesNotRepeat);

    for (const type of typesNotRepeat) { //este bucle me crea los option y select y les añade las clases
        const option = document.createElement("option");
        option.setAttribute("class", `${type}`)
        option.innerHTML = `<p>${type}</p>`
        selectOption.appendChild(option);
    }

    selectOption.addEventListener("change", (event) => {
        const selectedOptionClass = event.target.value;

        // Recorrer todas las figuras y ocultar o mostrar según su id coincida con la opción seleccionada
        const figures = document.querySelectorAll(".galleryPokemon figure");
        figures.forEach((figure) => {
            if (figure.getAttribute("id") === selectedOptionClass) {
                figure.style.display = "block";
            } else {
                figure.style.display = "none";
            }
        });
    });

    //INPUT BUSCADOR
    searchInput.addEventListener("input", (event) => {
        let value = event.target.value; 
        const filterPokemon = result.filter((pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase()));
        
        // Mostrar los Pokemon filtrados en la galería
        if (filterPokemon.length > 0) {
          gallery.innerHTML = filterPokemon.map((pokemon) => {
            const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            return `
              <figure id=${pokemon.type}>
                <img src=${pokemon.image} alt=${pokemon.name} alt=${name}>
                <div class="name-aline">
                  <p class="id">#0${pokemon.id}</p>
                  <h2>${name}</h2>
                </div>
                <h4 class="type"><span>type:</span> ${pokemon.type}</h4>
                <p class="height"><span>H:</span> ${pokemon.height}</p>
                <p class="weight"><span>W:</span> ${pokemon.weight}</p>
              </figure>
            `;
          }).join(""); 
        } else {
          gallery.innerHTML = "<p>No se encontraron resultados</p>";
        }
    }); 

    
    
}

export const printTemplate = () => {

    document.querySelector("main").innerHTML = template();
    addListeners();
    
}

