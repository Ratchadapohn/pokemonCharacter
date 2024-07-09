import SearchForm from "@/component/searchForm";
import { usePokemonListStore } from "@/store/pokemonList";
import PokemonCard from "@/component/pokemonCard";
import ReactLoading from "react-loading";

const Homepage = () => {
  const { fetchPokemon, pokemon } = usePokemonListStore();

  return (
    <div className="border-white">
      <div className="justify-center gap-3 flex ">
        <img src="/images/logo.webp" className="max-h-[150px]  " alt="" />
        <img src="./images/pngegg.png" className="h-[90px] pt-7 " alt="" />
      </div>
      <SearchForm />
      {fetchPokemon.loading && (
        <div className=" flex justify-center item-center gap-[10px]  ">
          <ReactLoading type="balls" color="white" />
        </div>
      )}

      {!fetchPokemon.loading && (
        <div className="grid grid-cols-3 justify-center sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[20px]  m-[20px]">
          {pokemon.data?.map((item) => {
            return (
              <PokemonCard
                image={item.image || " "}
                name={item.name}
                id={item.id}
                types={item.types}
              />
            );
          })}
        </div>
      )}

      <img
        src="./images/pngegg (1).png"
        className=" flex justify-between p-[50px] pl-[200px] "
        alt=""
      />
    </div>
  );
};

export default Homepage;
