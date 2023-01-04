import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ search }) => {
  const { allPokemons } = useContext(PokemonContext);

  const searchPokemons = (allPokemons) => {
    return allPokemons.filter((pokemon) =>
      !search || pokemon.name.toString().includes(search) ? true : false
    );
  };
  const filteredPokemons = searchPokemons(allPokemons);

  return (
    <div className="w-full flex md:flex-col justify-start items-center md:overflow-x-hidden overflow-x-scroll">
      {filteredPokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} search={search} />
      ))}
    </div>
  );
};

export default PokemonList;
