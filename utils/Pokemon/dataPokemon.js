import { getPokemon } from "../../services/pokemon.service"; //2


export const dataPokemon = async () => {
  const data = [];
  for (let i = 1; i < 151; i++) {
    data.push(await getPokemon(i));
  }

  return dataMap(data);
};

const dataMap = (data) => {
console.log(data);
    const filterData = data.map((pokemon) => ({
        image: pokemon.sprites.other.dream_world.front_default,
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.types[0].type.name,
        weight: pokemon.weight,
        height: pokemon.height,

    }));
        
    return filterData;
    
  }
  
