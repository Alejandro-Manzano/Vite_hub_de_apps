import { dataPokemon } from "./dataPokemon"; //array propio con mis caracteristicas

export const generatorPokemon = async() => {

    let pokemonObj = await dataPokemon();
    let result = [];
    
    pokemonObj.forEach(pokemon => {
        result.push(pokemon)
    });

    return result;

}