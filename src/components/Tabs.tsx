import React from "react";

export default function Tabs() {
  return (
    <>
      <nav className="flex justify-center gap-x-8 mb-6">
        <button className="bg-primaryColor text-white rounded-2xl	w-1/4 h-9">
          <a href="PizzaHome">Pizza</a>
        </button>
        <button className="border border-primaryColor  rounded-2xl text-primaryColor w-1/4 h-9">
          <a href="DrinkHome">Bebidas</a>
        </button>
        <button className="border border-primaryColor  rounded-2xl text-primaryColor w-1/4 h-9">
          <a href="#">Combos</a>
        </button>
      </nav>
    </>
  );
}