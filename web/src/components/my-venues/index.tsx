import React from "react";
import Header from "./header";
import VenueList from "./venue-list";
import BidModal from "../venues/bid-modal";

const MyVenues = () => {
  return (
    <div className="pt-20 px-36">
      <BidModal />
      <Header />
      <VenueList />
    </div>
  );
};

export default MyVenues;
