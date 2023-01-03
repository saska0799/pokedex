const PokemonBasicInfo = ({ pokemonInfo }) => {
  return (
    <div className="text-slate-200 xl:text-2xl lg:text-xl text-2xl mx-5 border-solid border-slate-200 border-2 p-6 rounded-2xl">
      <h2 className="xl:text-4xl lg:text-3xl text-4xl mb-10">Basic info:</h2>
      <p className="my-3 border-solid border-slate-200 border-2 p-3 rounded-2xl">
        Main type: {pokemonInfo.mainType}
      </p>
      <p className="my-3 border-solid border-slate-200 border-2 p-3 rounded-2xl">
        Sub type: {pokemonInfo.subType ? pokemonInfo.subType : "/"}
      </p>
      <p className="my-3 border-solid border-slate-200 border-2 p-3 rounded-2xl">
        Weight: {pokemonInfo.weight}kg
      </p>
      <p className="my-3 border-solid border-slate-200 border-2 p-3 rounded-2xl">
        Height: {pokemonInfo.height}m
      </p>
      <p className="my-3 border-solid border-slate-200 border-2 p-3 rounded-2xl">
        Abilities:
        {pokemonInfo.ability[0]} {pokemonInfo.ability[1]}{" "}
        {pokemonInfo.ability[2]}
      </p>
      <p className="my-3 border-solid border-slate-200 border-2 p-3 rounded-2xl">
        Moves:
        {pokemonInfo.moves[0]} {pokemonInfo.moves[1]} {pokemonInfo.moves[2]}
      </p>
    </div>
  );
};

export default PokemonBasicInfo;
