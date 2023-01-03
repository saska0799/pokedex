import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/PokemonTypeColors.module.scss";

const PokemonListItem = ({ pokemon }) => {
  return (
    <Link
      href={`/pokemon/${pokemon.name}`}
      key={pokemon.id}
      className={` ${
        styles[`pokemon-${pokemon.type}`]
      } w-[80%] px-10 md:px-0 py-2 my-2 mx-2 md:mx-0 lg:text-xl text-md text-slate-200  flex md:flex-row justify-center items-center rounded-2xl border-slate-200 border-solid border-4`}
    >
      {pokemon.image && (
        <Image
          src={pokemon.image}
          width={50}
          height={50}
          alt="Small image of pokemon"
          className="lg:mr-3 md:mr-0"
        />
      )}
      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
    </Link>
  );
};

export default PokemonListItem;
