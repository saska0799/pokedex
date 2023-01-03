import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ allPokemons, search }) => {
  const searchPokemons = (allPokemons) => {
    return allPokemons.filter((pokemon) =>
      !search || pokemon.name.toString().includes(search) ? true : false
    );
  };
  const filteredPokemons = searchPokemons(allPokemons);

  return (
    <div className="w-full md:py-0 py-10 flex md:flex-col justify-start items-center md:overflow-x-hidden overflow-x-scroll">
      {filteredPokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} search={search} />
      ))}
    </div>
  );
};

export default PokemonList;
