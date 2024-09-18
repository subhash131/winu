import React from "react";
import ModalEditTeam from "../modal-edit-team";
import StartDatetime from "./start-datetime";
import EndDatetime from "./end-datetime";
import CreateButton from "./create-button";
import Teams from "../teams";
import Description from "./description";
import VenueImage from "./venue-image";
import Title from "./title";
import StreamLink from "./stream-link";

const CreateVenue = () => {
  return (
    <main className="size-full min-h-screen overflow-x-hidden text-white relative pt-14">
      <ModalEditTeam />
      <Overlay />
      <div className="size-full px-36 flex pt-20 gap-14 max-lg:px-10">
        <div className="w-[40%] max-lg:w-[30%] h-full flex-shrink-0">
          <VenueImage />
        </div>
        <div className="size-full flex flex-col gap-4 ">
          <Title />
          <StreamLink />
          <div className="h-28 w-fit backdrop-blur-lg bg-[rgba(40,40,40,0.6)] rounded-lg py-2 px-4 flex flex-col justify-between gap-2">
            <StartDatetime />
            <EndDatetime />
          </div>
          <Description />
          <div className="w-full h-fit flex items-center justify-center">
            <CreateButton />
          </div>
          <Teams />
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
        className={`bg-gradient-glow size-72 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[40%] rounded-b-full after:rounded-b-full top-64`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-40 after:rounded-b-full`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-[50%] bottom-[50%] after:rounded-b-full`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute right-[2%] rounded-b-full  bottom-0 after:rounded-b-full`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute right-0 rounded-b-full top-36 after:rounded-b-full`}
      />
    </div>
  );
};
