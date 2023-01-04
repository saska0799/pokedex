import Image from "next/image";

const PokemonInfoHeader = ({ pokemonInfo }) => {
  return (
    <div>
      <div className="xl:text-4xl lg:text-3xl text-4xl mb-10 flex justify-around text-slate-200">
        <h2 className="p-3 border-solid border-slate-200 border-4 rounded-2xl">
          {pokemonInfo.name}
        </h2>
        {pokemonInfo.index && (
          <p className="p-3 border-solid border-slate-200 border-4 rounded-2xl">
            #{pokemonInfo.index}
          </p>
        )}
      </div>
      <Image
        src={pokemonInfo.sprite}
        alt="Image of pokemon"
        width={500}
        height={500}
        priority
      />
    </div>
  );
};

export default PokemonInfoHeader;
