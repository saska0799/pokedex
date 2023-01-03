import HeadComponent from "../components/shared/Head";

const Home = () => {
  return (
    <>
      <HeadComponent
        title="Pokedex | Home"
        description="Pokedex home page"
        keywords="pokedex, pokemons, pokemon"
      />
      <div className="xl:w-[30%] lg:w-[50%] md:w-[50%] w-[60%] h-[50%] sm:p-10 p-5 m-auto rounded-2xl border-slate-200 border-solid border-4">
        <h2 className="text-xl mb-10">About Pokedex</h2>
        <p>
          This is a Pokedex application made as a prototype for practice
          purposes.
          <br /> All info shown in the app is fetched via PokeAPI.
        </p>
      </div>
    </>
  );
};

export default Home;
