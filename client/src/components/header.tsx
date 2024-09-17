import React from "react";
import SwitchVenue from "./switch-venue";

const Header = () => {
  return (
    <div className="h-fit pb-6 w-full flex justify-between">
      <h4 className="text-4xl font-semibold">Venues</h4>
      <SwitchVenue />
    </div>
  );
};

export default Header;
