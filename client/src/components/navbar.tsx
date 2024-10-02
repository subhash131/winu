import React from "react";
import WalletButton from "./wallet-button";
import { GiStaryu } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-fit min-h-12 flex justify-between items-center fixed z-50 px-36 max-md:px-20 backdrop-blur-md">
      <Link href="/" className="flex gap-2 size-full items-center">
        <GiStaryu size={20} />
        <h1 className="">Winu</h1>
      </Link>
      <ul className="flex items-center justify-center size-full gap-10 font-medium">
        <li>
          <Link href="/home?type=active">Home</Link>
        </li>
        <li>
          <Link href="/create">Create</Link>
        </li>
        <li>
          <Link href="/my-venues" className="text-nowrap">
            My venues
          </Link>
        </li>
      </ul>
      <div className="w-full justify-end items-center flex">
        <WalletButton />
      </div>
    </div>
  );
};

export default Navbar;
