import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import PokemonList from "../PokemonList/PokemonList";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Input from "./Input";

const Layout = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const getAllPokemonData = async (allPokemonList) => {
    return await Promise.all(
      allPokemonList.results.map((el) => axios.get(el.url))
    );
  };

  const extractPokemonNameImage = async (data) => {
    return data.map((el, index) => {
      return {
        id: index + 1,
        name: el.data.name,
        image: el.data.sprites.other[`official-artwork`]?.front_default,
        type: el.data.types[0].type.name,
      };
    });
  };

  const getAllPokemons = useCallback(async () => {
    const allPokemonList = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((data) => getAllPokemonData(data.data))
      .then((data) => extractPokemonNameImage(data));
    setAllPokemons(allPokemonList);
  }, []);

  const searchPokemons = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  return (
    <>
      <Navbar />
      <div className="h-[85vh] flex md:flex-row flex-col">
        <div className="md:w-[25%] w-full md:m-h-full md:h-full flex flex-col md:justify-start justify-center items-center">
          <Input
            type="text"
            placeholder="Search for pokemons"
            value={search}
            onChange={searchPokemons}
          />

          {allPokemons && (
            <PokemonList allPokemons={allPokemons} search={search} />
          )}
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
