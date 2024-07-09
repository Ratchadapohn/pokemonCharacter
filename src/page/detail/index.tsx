import { Routes, Route, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { pokemonListService } from "@/services";
import { IPokemonDetailResponse } from "@/interface/pokemondetail";
import { pokemonDetailService } from "@/services/pokemonDetail";
import PokemonCard from "@/component/pokemonCard";
type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};
const Detailpage = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });
  const callData = async (name: string | undefined) => {
    const response = await pokemonDetailService.getPokemonDetail(name);

    if (response.status === 200) {
      {
        console.log(response);
        if (response.data)
          setPokemon({
            data: {
              ...response.data,
              image:
                response.data.sprites.other["official-artwork"].front_default ||
                response.data.sprites.other.dream_world.front_default,
            },
            loading: false,
            error: null,
          });
      }
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };
  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div className="block justify-center">
      <div className="">
        <div className="justify-center  grid ">
          <img src="/images/logo.webp" className="max-h-[100px]  " alt="" />
        </div>

        {/* {fetchPokemon.data?.map((item) => {
      return <PokemonCard data={item} />;
    })}
  </div>
  <img
    src="./images/pngegg (1).png"
    className=" flex justify-between p-[50px] pl-[200px] "
    alt=""
  /> */}
        <div className="w-[100%] h-[100%] grid justify-center m-[10px]">
          <Link
            to={"http://localhost:5173/"}
            className="text-[white] bg-neutral-800 rounded-full h-[40px] w-[40px]
            border-solid hover:border-dotted border-[1px] border-white m-[2px]
            hover:bg-neutral-300"
          >
            <h1 className="flex justify-center text-[10px] mt-[11px]">Back</h1>
          </Link>
          {pokemon.data && (
            <div
              className="grid grid-cols-2-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                md:max-w-xl md:flex-row overflow-hidden "
            >
              <div className="pb-[20px]">
                <div className=" bg-center bg-cover p-[10px]  rounded-[20px] h-[350px] w-full aspect-square relative">
                  <img
                    className="h-[auto] absolute max-h-[400px] rounded-t-2xl object-cover  
                  translate-x-[-50%]  translate-y-[-50%]  top-[50%] left-[50%]"
                    src="/images/pokemon_bg.png"
                    alt=""
                  />
                  <img
                    className=" absolute rounded-t-xl h-[70%]  sm:h-[400px] p-[20px]  translate-x-[-50%]  translate-y-[-50%] top-[50%] left-[50%] "
                    src={pokemon.data.image}
                    alt=""
                  />

                  <div className="flex justify-center p-[20px] translate-x-[37%]  translate-y-[30%] top-[80%] left-[20%] ">
                    {pokemon.data.types?.map((item) => {
                      return (
                        <span
                          className=" m-[5px] text-[15px] bg-neutral-600  hover:bg-neutral-500 border-solid hover:border-dotted border-[1px] border-white 
                         text-white text-xl pt-[20px] rounded-[100%]  capitalize h-[70px] w-[70px]  flex justify-center"
                        >
                          {item.type.name}
                        </span>
                      );
                    })}
                  </div>
                  <h5
                    className=" h-[30px] w-[30px] p-[20px] grid justify-center absolute translate-x-[270%] translate-y-[-20%] top-[50%]
                 border-solid hover:border-dotted border-[1px] border-white  hover:bg-neutral-700 left-[50%]  gap-[10px] mt-[1px] rounded-[100%] 
                 text-white bg-neutral-500 dark:text-neutral-50"
                  >
                    <span className="text-[15px] flex justify-center   mt-[-12px]">
                      #{pokemon.data.id}
                    </span>
                  </h5>
                </div>
                <h5
                  className=" grid justify-center  text-[90px] 
                    
                      font-bold capitalize hover:uppercase text-white dark:text-neutral-50
                      t]"
                >
                  {pokemon.data.name}
                </h5>
                <div
                  className="pl-[50px] pr-[150px] justify-center flex  text-[15px] pt-[20px] pb-[20px]  gap-[40px]
                 text-white border-solid hover:border-dotted border-[2px] border-white
                     bg-neutral-600 rounded-md "
                >
                  <div className="relative">
                    <h5 className="text-white font-bold text-[20px]">State</h5>
                    {pokemon.data.stats.map((item) => {
                      return (
                        <div className="flex justify-between gap-[20px]">
                          <div>{item.stat.name}</div>
                          <div className="text-white flex justify-between">
                            {item.base_stat}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-end  ">
                    <div className="grid gap-[50px]relative">
                      <div className="flex  ">
                        <div className=" pt-[90px] ">
                          <div className="text-white  rounded-sm ">
                            height : {(pokemon.data.height / 10).toFixed(3)} m
                          </div>
                          <div className="text-white  rounded-sm ">
                            weight : {(pokemon.data.weight / 10).toFixed(3)} kg
                          </div>
                          <div className="text-white   rounded-sm ">
                            experience : {pokemon.data.base_experience} times
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className="text-white text-[10px] border-solid hover:border-dotted border-[1px] absolute
                     border-white rounded-md w-[150px]
                       translate-x-[-20%] translate-y-[10%] m-[10px] grid justify-start bg-neutral-500 p-[5px] pl-[20px]"
                    >
                      {pokemon.data.abilities.map((item) => {
                        return <div className=" ">{item.ability.name}</div>;
                      })}
                    </div>
                    <span
                      className="bg-neutral-600 rounded-full h-[55px] w-[55px] 
                        translate-x-[150%] translate-y-[-10%]
                         border-solid hover:border-dotted border-[1px] text-white border-white  
                        absolute  m-[8px] "
                    >
                      <h5 className="grid justify-center mt-[20px] text-[10px]">
                        Abilities
                      </h5>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
