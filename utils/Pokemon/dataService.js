import { Loading } from "../../pages/Loading/Loading";
import { dataPokemon } from "../../utils/Pokemon/dataPokemon" //3


export const dataService = async() => {
    const loading = document.querySelector(".loading")
    loading.innerHTML = Loading();
    const getData = await dataPokemon();
    
    getData.map((pokemon) => {

        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        const templateFigure = `
            <figure id="${pokemon.type}" class="figure-pokemon">
                <img src=${pokemon.image} alt=${pokemon.name} alt=${name}>
                <div class="name-aline">
                <p class="id">#0${pokemon.id}</p>
                <h2 class="namePokemon">${name}</h2>
                </div>
                <h4 class="type"><span>type:</span> ${pokemon.type}</h4>
                <p class="height"><span>Height:</span> ${pokemon.height}<span>cm</span></p>
                <p class="weight"><span>Weight:</span> ${pokemon.weight}<span>kg</span></p>
            </figure>
        `

        document.querySelector(".galleryPokemon").innerHTML += templateFigure;
        loading.innerHTML = "";
    })
   
}

