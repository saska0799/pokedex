import axios from "axios";
import React, { useEffect, useState, useCallback, createContext } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = useCallback(async () => {
    const allPokemonList = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0")
      .then((data) => {
        const pokemonNameAndUrl = data.data.results;
        return getAllPokemonData(pokemonNameAndUrl);
      })
      .then((data) => extractPokemonNameAndImage(data));
    setAllPokemons(allPokemonList);
  }, []);

  const getAllPokemonData = async (allPokemonList) => {
    return await Promise.all(allPokemonList.map((el) => axios.get(el.url)));
  };

  const extractPokemonNameAndImage = async (data) => {
    return data.map((el, index) => {
      return {
        id: index + 1,
        name: el.data.name,
        sprite: el.data.sprites.other[`official-artwork`]?.front_default,
        type: el.data.types[0].type.name,
      };
    });
  };

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  return (
    <PokemonContext.Provider value={{ allPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
