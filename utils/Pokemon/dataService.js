import { Loading } from "../../pages/Loading/Loading";
import { dataPokemon } from "../../utils/Pokemon/dataPokemon" //3
const loading = document.querySelector(".loading")

export const dataService = async() => {

    const getData = await dataPokemon();
    
    getData.map((pokemon) => {

        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        const templateFigure = `
            <figure id="${pokemon.type}">
                <img src=${pokemon.image} alt=${pokemon.name} alt=${name}>
                <div class="name-aline">
                <p class="id">#0${pokemon.id}</p>
                <h2>${name}</h2>
                </div>
                <h4 class="type"><span>type:</span> ${pokemon.type}</h4>
                <p class="height"><span>H:</span> ${pokemon.height}</p>
                <p class="weight"><span>W:</span> ${pokemon.weight}</p>
            </figure>
        `

        document.querySelector(".galleryPokemon").innerHTML += templateFigure;
        
    })
   
}

