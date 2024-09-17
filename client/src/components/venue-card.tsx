import React from "react";

const VenueCard = () => {
  return (
    <div className="w-full h-52 flex">
      <div className="w-36 h-full">
        <h6 className="font-semibold text-base">Today</h6>
        <p className="font-medium text-[#8e8e8e]">Tuesday</p>
      </div>
      <div className="w-2 h-full relative items-center flex flex-col">
        <div className="size-3 absolute top-0 rounded-full bg-[#606062]" />
        <div className="h-full w-0.5 border-r-2 border-dashed border-[#606062]"></div>
      </div>
      <div className="size-full px-10 py-2">
        <div className="size-full border rounded-xl border-[#484848] bg-[#282828] cursor-pointer hover:border-[#686868] transition-colors max-w-[40rem]"></div>
      </div>
    </div>
  );
};

export default VenueCard;
