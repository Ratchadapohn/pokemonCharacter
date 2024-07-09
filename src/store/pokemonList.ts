import { create } from "zustand";
import { IPokemonDetailResponse } from "@/interface/pokemondetail"; //เรียกใช้ type

//ประกาศค่าเริ่มต้น
const initStore = {
  pokemon: {
    data: [],
    loading: false,
    error: null,
  },
  fetchPokemon: {
    data: [],
    loading: false,
    error: null,
  }, //fetch คือดาต้าที่ได้มาจาการเฟด
};

type pokemonType = {
  data: IPokemonDetailResponse[];
  loading: boolean;
  error: null | any;
};

//ประกาศtypeของค่าinitial
type usePokemonListStore = {
  pokemon: pokemonType;
  fetchPokemon: pokemonType;
  setPokemonList: (value: pokemonType) => void;
  setFetchPokemonList: (value: pokemonType) => void;
  clearPolemon: () => void;
};

export const usePokemonListStore = create<usePokemonListStore>((set) => ({
  ...initStore,
  setPokemonList: (value: pokemonType) => {
    set({ pokemon: value });
  },
  setFetchPokemonList: (value: pokemonType) => {
    set({ fetchPokemon: value });
  },
  clearPolemon: () => {
    set({ ...initStore });
  },
}));
