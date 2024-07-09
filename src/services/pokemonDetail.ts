import axios from "axios";
import { linkPokemon } from "@/utils/constant";
import { IPokemonDetailResponse } from "@/interface/pokemondetail";
import { IResponse, handleresponse } from "@/utils/handleresponse";

interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonDetailResponse;
}

export const pokemonDetailService = {
  getPokemonDetail: async (
    name: string
  ): Promise<IGetPokemonDetailResponse> => {
    // const response = axios.get(`${linkPokemon}/pokemon/${name}`);
    // return response;
    try {
      const response = await axios.get(`${linkPokemon}/pokemon/${name}`);
      return handleresponse.success(response);
    } catch (error: any) {
      return handleresponse.error(error);
    }
  },
};
