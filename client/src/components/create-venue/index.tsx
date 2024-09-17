import React from "react";
import Header from "./header";
import VenueCard from "./venue-card";

const CreateVenue = () => {
  return (
    <main className=" w-screen h-screen overflow-hidden text-white relative">
      <Overlay />
      <div className="size-full top-0 left-0 z-10 pt-32 px-72 max-lg:px-20 ">
        <Header />
        <div className="h-full w-full">
          <VenueCard />
        </div>
      </div>
    </main>
  );
};

export default CreateVenue;

const Overlay = () => {
  return (
    <div className="absolute size-full -z-10">
      <div
        className={`bg-gradient-glow size-96 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[40%] rounded-b-full after:rounded-b-full top-64`}
      ></div>
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-40 after:rounded-b-full`}
      ></div>
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-[50%] bottom-[50%] after:rounded-b-full`}
      ></div>
    </div>
  );
};
