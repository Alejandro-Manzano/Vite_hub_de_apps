import { axiosUtil } from "../utils/axios"; //1

export const getPokemon = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  };
  return await axiosUtil(optionsRequest);
};
