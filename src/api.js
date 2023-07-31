import axios from 'axios';

export const fetchPokemonData = async () => {
  const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  const response = await axios.get(url);
  return response.data.pokemon;
};
