import { generationList, typesList, sortList } from "@/utils/optionList";
import { useSearchForm } from "@/component/searchForm";
//import {generationList,typesList,sortList} from "@/utils/optionList"

const SearchForm = () => {
  const { fieldkeyword, fieldGeneration, fieldSort, fieldType } =
    useSearchForm();
  return (
    <div>
      <div
        className="flex justify-between m-[5%]  bg-#082f49 
      rounded-lg border-dotted border-2 border-white p-11 shadow-2xl shadow-yellow-100/30 
      gap-10px "
      >
        <div className=" capitalize grid  justify-items-center gap-3 w-[250px] p-5">
          <img
            src="./images/pngegg-3.png"
            className="w-[100px] m-0 top-0 left-0 bottom-0"
          />
          <div className=" block ">
            <label
              htmlFor="generation"
              className="text-white text-2xl font-extrabold  "
            >
              generation
            </label>
            <select
              {...fieldGeneration}
              id="generation"
              className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {generationList.map((item, index) => {
                return (
                  <option key={`generation-key-${index}`} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="capitalize grid justify-items-center  gap-3 w-[250px] p-5">
          <img
            src="./images/pngegg (2).png"
            className="w-[100px] m-0 top-0 left-0 bottom-0"
          />
          <div className=" block">
            <label
              htmlFor="type"
              className="text-white text-2xl font-extrabold  "
            >
              type
            </label>
            <select
              {...fieldType}
              id="type"
              className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {typesList.map((item, index) => {
                return (
                  <option key={`type-key-${index}`} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="capitalize grid justify-items-center  gap-3 w-[250px] p-5">
          <img
            src="./images/pngegg-2.png"
            className="w-[100px] h-[200px] m-0 top-0 left-0 bottom-5"
          />
          <div className=" block">
            <label
              htmlFor="sort"
              className="text-white text-2xl font-extrabold  "
            >
              sort
            </label>
            <select
              {...fieldSort}
              id="sort"
              className="capitalize bg-gray-50 border  border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {sortList.map((item, index) => {
                return (
                  <option key={`sort-key-${index}`} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="capitalize grid justify-items-center  gap-3 w-[250px] p-5">
          <img
            src="./images/pngegg-4.png"
            className="w-[120px] h-[200px] m-0 top-0 left-0 bottom-0"
          />
          <div className=" block">
            <label
              htmlFor="search"
              className="text-white text-2xl font-extrabold  "
            >
              search
            </label>
            <input
              {...fieldkeyword}
              id="search"
              className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-70% h-7 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500r"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
