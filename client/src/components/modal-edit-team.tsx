import React from "react";
import ModalHeader from "./modal-header";

const ModalEditTeam = () => {
  return (
    <div className="w-[40rem] fixed top-0 z-50 h-[calc(100vh-0.25rem)] m-1 right-1 rounded-xl border-[#1B1C1F] border bg-[#141517] overflow-hidden ">
      <div className="size-full relative overflow-x-hidden rounded-xl  overflow-y-scroll">
        <ModalHeader />
        <div className="h-[200vh]"> hello </div>
      </div>
    </div>
  );
};

export default ModalEditTeam;
