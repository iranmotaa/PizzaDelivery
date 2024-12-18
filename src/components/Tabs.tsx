import React from "react";

export default function Tabs() {
  return (
    <>
      <div className="flex justify-center gap-x-10 my-6">
        <button className="bg-primaryColor text-white rounded-2xl	w-20 h-9">
          Pizza
        </button>
        <button className="border border-primaryColor  rounded-2xl text-primaryColor w-20 h-9">
          Bebidas
        </button>
        <button className="border border-primaryColor  rounded-2xl text-primaryColor w-20 h-9">
          Combos
        </button>
      </div>
    </>
  );
}
