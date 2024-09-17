import React from "react";
import VenueCard from "./venue-card";

const VenueList = () => {
  return (
    <div className="h-full w-full overflow-scroll pb-32">
      <VenueCard />
      <VenueCard />
      <VenueCard />
      <VenueCard />
    </div>
  );
};

export default VenueList;
