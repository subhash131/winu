import React from "react";
import Header from "./header";
import VenueList from "./venue-list";

const Home = () => {
  return (
    <div className="size-full top-0 left-0 z-10 pt-28 px-36 max-lg:px-20 ">
      <Header />
      <VenueList />
    </div>
  );
};

export default Home;
