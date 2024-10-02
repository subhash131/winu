import React from "react";
import SwitchBids from "./switch-bids";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-3xl pt-6">My Bids</h2>
      <SwitchBids />
    </div>
  );
};

export default Header;
