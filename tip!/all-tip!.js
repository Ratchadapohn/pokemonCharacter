1.สร้างไฟล์ + vitr typescript
//npm i g typescript
การติดตั้ง
at tsconfig.json
// {
//     "compilerOptions": {
//         "target": "ES2020",
//             "useDefineForClassFields": true,
//                 "lib": ["ES2020", "DOM", "DOM.Iterable"],
//                     "module": "ESNext",
//                         "skipLibCheck": true,

//                             /* Bundler mode */
//                             "moduleResolution": "bundler",
//                                 "allowImportingTsExtensions": true,
//                                     "resolveJsonModule": true,
//                                         "isolatedModules": true,
//                                             "noEmit": true,
//                                                 "jsx": "react-jsx",
//                                                     "baseUrl": "./",
//                                                         "paths": {
//             "@/*": ["src/*"]
//         },

//         /* Linting */
//         "strict": true,
//             "noUnusedLocals": true,
//                 "noUnusedParameters": true,
//                     "noFallthroughCasesInSwitch": true
//     },
//     "include": ["src"],
//         "references": [{ "path": "./tsconfig.node.json" }]
// }



vite.config.ts
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     resolve: {
//         alias: [{ find: "@", replacement: "/src" }],
//     },
// });

2.ติดตั้ง reacthook
https://react-hook-form.com
npm install react - hook - form
3.ติดตั้ง reactrouter
https://reactrouter.com/en/main/start/tutorial
npm install react - router - dom localforage match - sorter sort - by
4.ตืดตั้ง suztan
https://zustand-demo.pmnd.rs
github ขวามือบนสุด
npm install zustand


5. สร้างไฟล์page  เพื่อสร้างหน้าhome
1) home-- > index.tsx //หน้าhomeหลัก เรียกตัวแปรที่เก็บค่าจ่างๆมาใช้
//import React, { useEffect } from "react";
// import { pokemonListService } from "@/services/pokemonList";

// const Homepage = () => {
//     const callData = async () => {
//         const data = await pokemonListService.getPokemonList();
//         console.log("data", data.data.results); //ต้องประกาศค่าตัวแปรก่อนจึงจะเียกใช้พวกนี้ได้ใน ts
//     };
//     useEffect(() => {
//         callData(); เรียกuseEffectมาใช้เพื่อป้องกันการerorr
//     }, []);
//     return <div>homepage</div>;
// };
//export default Homepage;


เรียกใช้ pokemonDetailService
// import React, { useEffect } from "react";
// import { pokemonDetailService } from "@/services/pokemonDetail";

// const Homepage = () => {
//     const callData = async () => {
//         const data = await pokemonDetailService.getPokemonDetail("ditto");
//         console.log("data", data.data);
//     };
//     useEffect(() => {
//         callData();
//     }, []);
//     return <div>homepage</div>;
// };



// export default Homepage;

2) detail-- > index.tsx


6.สร้างไฟล์ service เพื่อเรียกใช้แต่ละอย่างในไฟล์หลัก
ข้างในมี
index.ts 
เรียกไฟล์รวมคำสั่งมา และส่งออกไป
// import { pokemonListService } from "./pokemonList";
// import { pokemonDetailService } from "./pokemonDetail";
// export { pokemonListService };


pokemonDetail.ts

// import axios from "axios";
// import { linkPokemon } from "@/utils/constant";
// import { IPokemonDetailResponse } from "@/interface/pokemondetail";
// interface IGetPokemonDetailResponse {
//     status: number;
//     data: IPokemonDetailResponse;
// }

// export const pokemonDetailService = {
//     getPokemonDetail: async (
//         name: string
//     ): Promise<IGetPokemonDetailResponse> => {
//         const response = axios.get(`${linkPokemon}/pokemon/${name}`);
//         return response;
//     },
// };



pokemonList.ts
//เอาลิงก์ที่ประกาศในutilsมาประกาศในฟังก์ชั่น
// import axios from "axios";
// import { linkPokemon } from "@/utils/constant";
// import { IPokemonListResponse } from "@/interface/pokemonlist"; ดึงtypeมาจากinterface
// interface IGetPokemonListResponse { ประกาศค่าใหม่เพราะมีค่าอื่นๆนอกจากที่ประกาศไว้อยู่
//     status: number;
//     data: IPokemonListResponse;
// }

// export const pokemonListService = {
//     getPokemonList: async (
//         limit?: number,
//         offset?: number
//     ): Promise<IGetPokemonListResponse> => { ดึงtypeมาประกาศ promise<...>
//         const response = axios.get(
//             `${linkPokemon}/pokemon?limit={limit||151}&offset={offset||0}`
//         );
//         return response;
//     },
// };

7.สร้งไฟล์ utils เพื่อเก็บลิงก์
มีไฟล์ constant.ts
//export const linkPokemon = "https://pokeapi.co/api/v2"; ประกาศลิงก์ไว้ในนี้

8.สร้างไฟล์ interfaceมาเพื่อเก็บtype
pokemonlist.ts
// export interface IPokemonListItem {
//     name: "bulbasaur";
//     url: "https://pokeapi.co/api/v2/pokemon/1/";
// } สิ่งที่ตัวแปรได้มา exportออกมา

// export interface IPokemonListResponse {
//    count:1302
//    next:"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
//     previous:null
//     results: IPokemonListItem[];


export interface IPokemonListResponse {
    count: number;
    next: string;
    previous: null;
    results: IPokemonListItem[]; //สาเหตุที่แยกเพราะเก็บหลายตัวและเป็นarray copy from data
}
export interface IPokemonListItem {
    name: string;
    url: string;
} //ประกาศแบบนี้ 



pokemondetail.ts 
คัดลอกAPIเนื้อหาที่ต้องการไปวางลงในเว็ปเพื่อหาtypeด้วยjson to typescript
// export interface IPokemonDetailResponse {
//     abilities: Ability[];
//     base_experience: number;
//     cries: Cries;
//     forms: Form[];
//     game_indices: Index[];
//     height: number;
//     held_items: HeldItem[];
//     id: number;
//     is_default: boolean;
//     location_area_encounters: string;
//     moves: Mfe[];
//     name: string;
//     order: number;
//     past_abilities: any[];
//     past_types: any[];
//     species: Species;
//     sprites: Sprites;
//     stats: Stat[];
//     types: Type[];
//     weight: number;
// }

// export interface Ability {
//     ability: Ability2;
//     is_hidden: boolean;
//     slot: number;
// }

// export interface Ability2 {
//     name: string;
//     url: string;
// }

// export interface Cries {
//     latest: string;
//     legacy: string;
// }

// export interface Form {
//     name: string;
//     url: string;
// }

// export interface Index {
//     game_index: number;
//     version: Version;
// }

// export interface Version {
//     name: string;
//     url: string;
// }

// export interface HeldItem {
//     item: Item;
//     version_details: VersionDetail[];
// }

// export interface Item {
//     name: string;
//     url: string;
// }

// export interface VersionDetail {
//     rarity: number;
//     version: Version2;
// }

// export interface Version2 {
//     name: string;
//     url: string;
// }

// export interface Mfe {
//     move: Move;
//     version_group_details: VersionGroupDetail[];
// }

// export interface Move {
//     name: string;
//     url: string;
// }

// export interface VersionGroupDetail {
//     level_learned_at: number;
//     move_learn_method: MoveLearnMethod;
//     version_group: VersionGroup;
// }

// export interface MoveLearnMethod {
//     name: string;
//     url: string;
// }

// export interface VersionGroup {
//     name: string;
//     url: string;
// }

// export interface Species {
//     name: string;
//     url: string;
// }

// export interface Sprites {
//     back_default: string;
//     back_female: any;
//     back_shiny: string;
//     back_shiny_female: any;
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
//     other: Other;
//     versions: Versions;
// }

// export interface Other {
//     dream_world: DreamWorld;
//     home: Home;
//     "official-artwork": OfficialArtwork;
//     showdown: Showdown;
// }

// export interface DreamWorld {
//     front_default: string;
//     front_female: any;
// }

// export interface Home {
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface OfficialArtwork {
//     front_default: string;
//     front_shiny: string;
// }

// export interface Showdown {
//     back_default: string;
//     back_female: any;
//     back_shiny: string;
//     back_shiny_female: any;
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface Versions {
//     "generation-i": GenerationI;
//     "generation-ii": GenerationIi;
//     "generation-iii": GenerationIii;
//     "generation-iv": GenerationIv;
//     "generation-v": GenerationV;
//     "generation-vi": GenerationVi;
//     "generation-vii": GenerationVii;
//     "generation-viii": GenerationViii;
// }

// export interface GenerationI {
//     "red-blue": RedBlue;
//     yellow: Yellow;
// }

// export interface RedBlue {
//     back_default: string;
//     back_gray: string;
//     back_transparent: string;
//     front_default: string;
//     front_gray: string;
//     front_transparent: string;
// }

// export interface Yellow {
//     back_default: string;
//     back_gray: string;
//     back_transparent: string;
//     front_default: string;
//     front_gray: string;
//     front_transparent: string;
// }

// export interface GenerationIi {
//     crystal: Crystal;
//     gold: Gold;
//     silver: Silver;
// }

// export interface Crystal {
//     back_default: string;
//     back_shiny: string;
//     back_shiny_transparent: string;
//     back_transparent: string;
//     front_default: string;
//     front_shiny: string;
//     front_shiny_transparent: string;
//     front_transparent: string;
// }

// export interface Gold {
//     back_default: string;
//     back_shiny: string;
//     front_default: string;
//     front_shiny: string;
//     front_transparent: string;
// }

// export interface Silver {
//     back_default: string;
//     back_shiny: string;
//     front_default: string;
//     front_shiny: string;
//     front_transparent: string;
// }

// export interface GenerationIii {
//     emerald: Emerald;
//     "firered-leafgreen": FireredLeafgreen;
//     "ruby-sapphire": RubySapphire;
// }

// export interface Emerald {
//     front_default: string;
//     front_shiny: string;
// }

// export interface FireredLeafgreen {
//     back_default: string;
//     back_shiny: string;
//     front_default: string;
//     front_shiny: string;
// }

// export interface RubySapphire {
//     back_default: string;
//     back_shiny: string;
//     front_default: string;
//     front_shiny: string;
// }

// export interface GenerationIv {
//     "diamond-pearl": DiamondPearl;
//     "heartgold-soulsilver": HeartgoldSoulsilver;
//     platinum: Platinum;
// }

// export interface DiamondPearl {
//     back_default: string;
//     back_female: any;
//     back_shiny: string;
//     back_shiny_female: any;
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface HeartgoldSoulsilver {
//     back_default: string;
//     back_female: any;
//     back_shiny: string;
//     back_shiny_female: any;
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface Platinum {
//     back_default: string;
//     back_female: any;
//     back_shiny: string;
//     back_shiny_female: any;
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface GenerationV {
//     "black-white": BlackWhite;
// }

// export interface BlackWhite {
//     animated: Animated;
//     back_default: string;
//     back_female: any;
//     back_shiny: string;
//     back_shiny_female: any;
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface Animated {
//     back_default: string;
//     back_female: any;
//     back_shiny: string;
//     back_shiny_female: any;
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface GenerationVi {
//     "omegaruby-alphasapphire": OmegarubyAlphasapphire;
//     "x-y": XY;
// }

// export interface OmegarubyAlphasapphire {
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface XY {
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface GenerationVii {
//     icons: Icons;
//     "ultra-sun-ultra-moon": UltraSunUltraMoon;
// }

// export interface Icons {
//     front_default: string;
//     front_female: any;
// }

// export interface UltraSunUltraMoon {
//     front_default: string;
//     front_female: any;
//     front_shiny: string;
//     front_shiny_female: any;
// }

// export interface GenerationViii {
//     icons: Icons2;
// }

// export interface Icons2 {
//     front_default: string;
//     front_female: any;
// }

// export interface Stat {
//     base_stat: number;
//     effort: number;
//     stat: Stat2;
// }

// export interface Stat2 {
//     name: string;
//     url: string;
// }

// export interface Type {
//     slot: number;
//     type: Type2;
// }

// export interface Type2 {
//     name: string;
//     url: string;
// }


9.ตั้งค่าพื้นหลัง ที่App.tsx
    // import { useState } from "react";
    // import { createBrowserRouter, RouterProvider } from "react-router-dom";
    // import Homepage from "@/page/home";
    // import Detailpage from "@/page/detail";

    // function App() {
    //     const router = createBrowserRouter([
    //         {
    //             path: "/",
    //             element: <Homepage />,
    //         },
    //         {
    //             path: "/",
    //             element: <Detailpage />,
    //         },
    //     ]);
    //     return (
    < div className = "bg-[url('/images/list_bg.jpg')] min-h-[100vh]" > ตั้งค่าพื้นหลังด้วยclassnameนี้ ไฟล์publicมีไฟล์imagesมีรูปอยู่ในนี้
//             <RouterProvider router={router} />
//         </div>
//     );
// }

// export default App;

10.ตั้งค่าlogo
ที่ page / homepage / index.tsx
//pokeDex โลโก้ด้านบน
ใส่แทกต่างๆเข้าไปใน   return (
    <SearchForm /> //import มาจาก componant file/SearchForm.tsx
)

11.สร้างไฟล์ทุกอย่างเก็บข้อมูล
componant file
SearchForm.tsx

// import React from "react"; //ด้วยrafce
// import { generationList, typesList, sortList } from "@/utils/optionList";

// const SearchForm = () => {
//     return (
//         <div>
//             <div className="flex justify-between m-[5%]  bg-#082f49 rounded-lg border-dotted border-2 border-white p-11 shadow-2xl shadow-yellow-100/30 gap-10px">
//                 <div className=" capitalize grid  justify-items-center gap-3 w-[250px] p-5">
//                     <img
//                         src="./images/pngegg-3.png"
//                         className="w-[100px] m-0 top-0 left-0 bottom-0"
//                     />
//                     <div className=" block ">
//                         <label
//                             htmlFor="generation"
//                             className="text-white text-2xl font-extrabold  "
//                         >
//                             generation
//                         </label>
//                         <select
//                             id="generation"
//                             className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                             {generationList.map((item, index) => {
//                                 return (
//                                     <option key={`generation-key-${index}`} value={index}>
//                                         {item.name}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>
//                 </div>
//                 <div className="capitalize grid justify-items-center  gap-3 w-[250px] p-5">
//                     <img
//                         src="./images/pngegg (2).png"
//                         className="w-[100px] m-0 top-0 left-0 bottom-0"
//                     />
//                     <div className=" block">
//                         <label
//                             htmlFor="type"
//                             className="text-white text-2xl font-extrabold  "
//                         >
//                             type
//                         </label>
//                         <select
//                             id="type"
//                             className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                             {typesList.map((item, index) => {
//                                 return (
//                                     <option key={`type-key-${index}`} value={index}>
//                                         {item}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>
//                 </div>
//                 <div className="capitalize grid justify-items-center  gap-3 w-[250px] p-5">
//                     <img
//                         src="./images/pngegg-2.png"
//                         className="w-[100px] h-[200px] m-0 top-0 left-0 bottom-5"
//                     />
//                     <div className=" block">
//                         <label
//                             htmlFor="sort"
//                             className="text-white text-2xl font-extrabold  "
//                         >
//                             sort
//                         </label>
//                         <select
//                             id="sort"
//                             className="capitalize bg-gray-50 border  border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                             {sortList.map((item, index) => {
//                                 return (
//                                     <option key={`sort-key-${index}`} value={index}>
//                                         {item}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>
//                 </div>
//                 <div className="capitalize grid justify-items-center  gap-3 w-[250px] p-5">
//                     <img
//                         src="./images/pngegg-4.png"
//                         className="w-[120px] h-[200px] m-0 top-0 left-0 bottom-0"
//                     />
//                     <div className=" block">
//                         <label
//                             htmlFor="search"
//                             className="text-white text-2xl font-extrabold  "
//                         >
//                             search
//                         </label>
//                         <input
//                             id="search"
//                             className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-70% h-7 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500r"
//                         ></input>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchForm;

SearchForm.hook.ts //ดึงข้อมูลuseState
// const useSearchForm = () => { };

// export { useSearchForm };

index.ts //ส่งทุกอย่างออกมายัง page/home/index.ts
// export { default } from "./searchForm";
// export { useSearchForm } from "./searchForm.hook";


12.ดึงข้อมูลจาก API มาใช้
สร้างไฟล์ utils / optionlist
เอาข้อมูลมาประกาศ แล้วเรียกใช้ใน SearchForm
import { generationList, typesList, sortList } from "@/utils/optionList";
// export const generationList = [
//     {
//         name: "Generation I",
//         limit: 151,
//         offset: 0,
//     },
//     {
//         name: "Generation II",
//         limit: 100,
//         offset: 151,
//     },
//     {
//         name: "Generation III",
//         limit: 135,
//         offset: 251,
//     },
//     {
//         name: "Generation IV",
//         limit: 108,
//         offset: 386,
//     },
//     {
//         name: "Generation V",
//         limit: 155,
//         offset: 494,
//     },
//     {
//         name: "Generation VI",
//         limit: 72,
//         offset: 649,
//     },
//     {
//         name: "Generation VII",
//         limit: 88,
//         offset: 721,
//     },
//     {
//         name: "Generation VIII",
//         limit: 96,
//         offset: 809,
//     },
//     {
//         name: "Generation IX",
//         limit: 105,
//         offset: 905,
//     },
// ];

// export const typesList = [
//     "all types",
//     "grass",
//     "bug",
//     "dark",
//     "dragon",
//     "electric",
//     "fairy",
//     "fighting",
//     "fire",
//     "flying",
//     "ghost",
//     "ground",
//     "ice",
//     "normal",
//     "poison",
//     "psychic",
//     "rock",
//     "steel",
//     "water",
// ];

// export const sortList = ["id", "name"];


13.สร้างไฟล์ store เก็บข้อมูล แสดงผลมายังตัวเลือกที่ มาหน้าจอ
pokemonList.ts
เข้าลิงก์ของsuztand คัดลอกลิงก์มาวาง js 