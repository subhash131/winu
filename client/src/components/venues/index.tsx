import React from "react";
import Header from "./header";
import VenueList from "./venue-list";
import BidModal from "./bid-modal";

const Venues = () => {
  return (
    <>
      <BidModal />
      <Header />
      <VenueList />
    </>
  );
};

export default Venues;
