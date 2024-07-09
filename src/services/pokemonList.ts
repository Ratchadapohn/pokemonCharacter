import axios from "axios";
import { linkPokemon } from "@/utils/constant";
import { IPokemonListResponse } from "@/interface/pokemonlist";
import { handleresponse, IResponse } from "@/utils/handleresponse";

interface IGetPokemonListResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonListResponse;
}

export const pokemonListService = {
  getPokemonList: async (
    limit?: number,
    offset?: number
  ): Promise<IGetPokemonListResponse> => {
    try {
      const response = await axios.get(
        `${linkPokemon}/pokemon?limit=${limit || 151}&offset=${offset || 0}`
      );
      return handleresponse.success(response);
    } catch (error: any) {
      return handleresponse.error(error);
    }
  },
};
