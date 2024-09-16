import React from "react";
import WalletButton from "./wallet-button";
import { GiStaryu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-full h-10 flex justify-between items-center fixed top-4 z-50 px-44">
      <div className="flex gap-2 size-full items-center">
        <GiStaryu size={20} />
        <h1 className="">Winu</h1>
      </div>
      <ul className="flex items-center justify-center size-full gap-10 font-medium">
        <li>Home</li>
        <li>create</li>
      </ul>
      <div className="w-full justify-end items-center flex">
        <WalletButton />
      </div>
    </div>
  );
};

export default Navbar;
