สร้างโฟลเดอร์ services เพื่อเก็บข้อมูลเรียกใช้ in src
1.index.ts
// import { pokemonListService } from "./pokemonList";

// export { pokemonListService }; รีเทิร์นอกมาที่indexหลักของservice

2.pokemonDetail.ts

3.pokemonList.ts
// import axios from "axios"; เพื่อมาดึงข้อมูล
// import { linkPokemon } from "@/utils/constant"; ลิงก์มาจาก utilsไฟล์ที่เก็บลิงก์เพื่อทำให้โค้ดดูคลีนขึ้น

// export const pokemonListService = {
//     getPokemonList: async (limit?: number, offset?: number) => { ทำเป็นojbประกาศค่า ใส่async+wait
//         const response = axios.get( ประกาศตัวแปรใหม่ขึ้นมา  response 
//             `${linkPokemon}/pokemon?limit={limit||151}&offset={offset||0}`
//         );
//         return response;
//     },
// };
