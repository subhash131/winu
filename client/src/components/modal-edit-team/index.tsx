"use client";
import React from "react";
import ModalHeader from "./modal-header";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import SaveButton from "./save-button";
import TeamImage from "./team-image";
import TeamName from "./team-name";
import TeamPlayers from "./team-players";
import ModalOverlay from "./modal-overlay";

const ModalEditTeam = () => {
  const { modalActive } = useSelector((state: RootState) => state.CreateVenue);

  return (
    <div>
      <ModalOverlay />
      <div
        className={`w-[50rem] fixed top-0 z-50 h-[calc(100vh-0.25rem)] m-1 rounded-xl border-[#1B1C1F] border bg-[#141517] overflow-hidden transition-all ${
          modalActive ? "right-1" : "-right-[51rem]"
        }`}
      >
        <div className="size-full relative overflow-x-hidden rounded-xl  overflow-y-scroll pb-20">
          <ModalHeader />
          <div className="w-full h-fit flex justify-end px-4 py-2">
            <SaveButton />
          </div>
          <div className="p-4 flex flex-col items-center gap-10 pt-2">
            <TeamImage />
            <div className="w-full text-start px-6">
              <TeamName />
            </div>
            <TeamPlayers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditTeam;
