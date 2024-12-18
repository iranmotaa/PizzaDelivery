import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function InputSearch() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center gap-x-3 pl-3 bg-tertiaryColor w-80 rounded-xl h-10">
          <IoSearchOutline size={25} color="secondaryColor" />
          <input
            className="bg-transparent focus:outline-none text-secondaryColor rounded-xl border-none text-sm"
            placeholder="Pesquise seu sabor"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
    </>
  );
}
