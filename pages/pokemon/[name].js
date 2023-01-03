import axios from "axios";
import styles from "../../styles/PokemonTypeColors.module.scss";
import HeadComponent from "../../components/shared/Head";
import PokemonInfoHeader from "../../components/PokemonInfo/PokemonInfoHeader";
import PokemonBasicInfo from "../../components/PokemonInfo/PokemonBasicInfo";

export const getServerSideProps = async (context) => {
  const getOnePokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${context.params.name}`)
    .then((res) => res.data);

  const extractedPokemonInfo = {
    index: getOnePokemon.game_indices[0]?.game_index || null,
    name:
      getOnePokemon.name.charAt(0).toUpperCase() +
        getOnePokemon.name.slice(1) || null,
    mainType: getOnePokemon.types[0].type.name || null,
    subType: getOnePokemon.types[1]?.type.name || null,
    sprite:
      getOnePokemon.sprites.other[`official-artwork`]?.front_default || null,
    height: getOnePokemon.height / 10 || null,
    weight: getOnePokemon.weight / 10 || null,
    ability: [
      getOnePokemon.abilities[0]?.ability.name,
      " ",
      getOnePokemon.abilities[1]?.ability.name || null,
      " ",
      getOnePokemon.abilities[2]?.ability.name || null,
    ],
    moves: [
      getOnePokemon.moves[0]?.move.name || null,
      getOnePokemon.moves[1]?.move.name || null,
      getOnePokemon.moves[2]?.move.name || null,
    ],
  };

  return {
    props: {
      pokemonInfo: extractedPokemonInfo,
    },
  };
};

const PokemonInfo = ({ pokemonInfo }) => {
  return (
    <>
      <HeadComponent
        title={`Pokedex | ${pokemonInfo.name}`}
        description="Pokedex home page"
        keywords="pokedex, pokemons, pokemon"
      />
      <section
        className={`m-h-full md:w-[75%] w-full flex lg:flex-row flex-col lg:justify-around items-center overflow-y-scroll lg:overflow-y-hidden py-20 ${
          styles[`pokemon-${pokemonInfo.mainType}`]
        }`}
      >
        <PokemonInfoHeader pokemonInfo={pokemonInfo} />
        <PokemonBasicInfo pokemonInfo={pokemonInfo} />
      </section>
    </>
  );
};

export default PokemonInfo;
