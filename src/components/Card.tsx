import React, { useState, useEffect } from "react";
import oneFlavor from "../assets/oneFlavor.svg";
import twoFlavor from "../assets/twoFlavor.svg";
import threeFlavor from "../assets/threeFlavor.svg";
import fourFlavor from "../assets/fourFlavor.svg";

export default function Card({ title, description }) {
  const [img, setImg] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    switch (description) {
      case "1 Sabor":
        setImg(oneFlavor);
        setMsg("1");
        break;
      case "2 Sabores":
        setImg(twoFlavor);
        setMsg("2");
        break;
      case "3 Sabores":
        setImg(threeFlavor);
        setMsg("3");
        break;
      case "4 Sabores":
        setImg(fourFlavor);
        setMsg("4")
        break
      default:
        setImg("");
        setMsg("");
        break;
    }
  }, [description]);

  return (
    <>
      <div className="w-64 h-96 rounded-xl shadow-xl">
        <header className="flex flex-col justify-center items-center bg-primaryColor w-full h-2/5 rounded-t-xl">
          {img && <img className="w-24 h-24" src={img} />}
          {msg && <p className="text-2xl text-white font-bold">{msg}</p>}
        </header>
        <main className="flex flex-col h-3/5 justify-between ">
          <div className="pl-4 pt-4">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <footer className="flex justify-center h-2/6 items-center">
            <button className="bg-primaryColor w-5/6 h-10 rounded-xl">
              <a className="text-white text-lg" href="#">
                Comprar
              </a>
            </button>
          </footer>
        </main>
      </div>
    </>
  );
}
