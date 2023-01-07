import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import PokemonContext from "../../context/PokemonContext";
import PokemonList from "../PokemonList/PokemonList";
import Navbar from "./Navbar";

import Input from "./Input";

const Layout = ({ children }) => {
  const { allPokemons } = useContext(PokemonContext);
  const [search, setSearch] = useState("");

  const searchPokemons = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="h-[91vh] flex md:flex-row flex-col">
        <div className="md:w-[25%] w-full md:m-h-full md:h-full flex flex-col md:justify-start justify-center items-center">
          <Input
            type="text"
            placeholder="Search for pokemons"
            value={search}
            onChange={searchPokemons}
          />
          {!allPokemons && <p>Loading...</p>}
          {allPokemons && <PokemonList search={search} />}
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
