import { useEffect } from "react";
import { pokemonListService } from "@/services/pokemonList";
import { pokemonDetailService } from "@/services/pokemonDetail";
import { useForm } from "react-hook-form";
import { usePokemonListStore } from "@/store/pokemonList";
import { generationList, typesList } from "@/utils/optionList";
import { IPokemonDetailResponse } from "@/interface/pokemondetail";

const useSearchForm = () => {
  const { register, watch } = useForm();
  const { setFetchPokemonList, fetchPokemon, setPokemonList } =
    usePokemonListStore();
  const keyword = watch("keyword");
  const generation = watch("generation");
  const type = watch("type");
  const sort = watch("sort");

  const callData = async (filter: {
    name: string;
    limit: number;
    offset: number;
  }) => {
    const responseList = await pokemonListService.getPokemonList(
      filter.limit,
      filter.offset
    );
    const pokelist = [];
    setFetchPokemonList({ data: [], loading: true, error: null });

    if (responseList.status === 200) {
      const responseResult = responseList.data?.results || [];
      for (const pokemon of responseResult) {
        const response = await pokemonDetailService.getPokemonDetail(
          pokemon.name
        );
        const pokeData = response.data;
        if (pokeData)
          pokelist.push({
            ...pokeData,
            image:
              pokeData.sprites.other["official-artwork"].front_default ||
              pokeData.sprites.other.dream_world.front_default,
          });
      }
      setFetchPokemonList({ data: pokelist, loading: false, error: null });
      setPokemonList({ data: pokelist, loading: false, error: null });
    } else {
      setFetchPokemonList({
        data: [],
        loading: false,
        error: responseList.error,
      });
    }
  };
  const filterPokemon = (
    keyword: string,
    type: string,
    sort: "id" | "name"
  ) => {
    const keywordFilter = fetchPokemon.data.filter((item) =>
      item.name.toLowerCase().includes(keyword?.toLowerCase())
    );
    const typeFilter =
      type !== "All Types"
        ? keywordFilter.filter((item) =>
            item.types.some((f) =>
              f.type.name.toLowerCase().includes(type.toLowerCase())
            )
          )
        : keywordFilter;
    console.log(typeFilter);
    return sortBy(typeFilter, sort);
  };

  const sortBy = (data: IPokemonDetailResponse[], type: "id" | "name") => {
    switch (type) {
      case "id":
        return data.sort((a, b) => {
          return a.id - b.id;
        });
      case "name":
        return data.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      default:
        return data.sort((a, b) => {
          return a.id - b.id;
        });
    }
  };

  useEffect(() => {
    if (generation !== undefined) {
      callData(generationList[generation]);
    }
  }, [generation]);

  useEffect(() => {
    const data = filterPokemon(keyword, typesList[type], sort);
    console.log(data);
    setPokemonList({
      data: data,
      loading: false,
      error: null,
    });
  }, [keyword, type, sort]);

  return {
    fieldkeyword: register("keyword"),
    fieldGeneration: register("generation"),
    fieldSort: register("sort"),
    fieldType: register("type"),
  };
};

export { useSearchForm };
