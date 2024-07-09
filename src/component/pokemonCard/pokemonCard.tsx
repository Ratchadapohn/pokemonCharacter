//import React from "react";
import { Type } from "@/interface/pokemondetail";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  image: string;
  name: string | undefined;
  id?: number;
  types?: Type[];
}

const pokemonCard = ({ image, name, id, types }: PokemonCardProps) => {
  return (
    <div className="flex border-solid border-[3px] border-white flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600 md:max-w-xl md:flex-row">
      <Link
        to={`/detail/${name}`}
        className="bg-[url('/images/poke-card-bg.png')] bg-center p-[20]  rounded-l-lg"
      >
        <img
          className="h-full w-full rounded-t-lg object-cover md:h-[200px]  md:w-[200px]  md:rounded-none md:rounded-l-lg max-h-[200px] p-[20px]"
          src={image}
          alt=""
        />
      </Link>
      <div className="p-[20px] pb-2 font-mono ">
        <div className=" justify-between">
          <h5 className="mb-[5px] text-xl font-l text-neutral-500 dark:text-neutral-50">
            #{id}
          </h5>
          <h5 className="mb-[5px] text-[35px] font-2xl text-neutral-800 dark:text-neutral-50">
            {name}
          </h5>
        </div>

        <div className="flex">
          {types?.map((item) => {
            return (
              <span className=" p-[7px] m-[2px] bg-slate-600 justify-end text-white text-xl  rounded-md capitalize dark:text-neutral-50 ">
                {item.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default pokemonCard;
