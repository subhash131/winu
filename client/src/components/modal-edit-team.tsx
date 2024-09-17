"use client";
import React from "react";
import ModalHeader from "./modal-header";
import Image from "next/image";
import { TbPhotoUp } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";

const ModalEditTeam = () => {
  const { modalActive } = useSelector((state: RootState) => state.CreateVenue);

  return (
    <div
      className={`w-[40rem] fixed top-0 z-50 h-[calc(100vh-0.25rem)] m-1 rounded-xl border-[#1B1C1F] border bg-[#141517] overflow-hidden transition-all ${
        modalActive ? "right-1" : "-right-[41rem]"
      }`}
    >
      <div className="size-full relative overflow-x-hidden rounded-xl  overflow-y-scroll pb-20">
        <ModalHeader />
        <div className="w-full h-fit flex justify-end px-4 py-2">
          <button className="px-4 py-2 bg-white text-black rounded-xl active:scale-95 transition-transform">
            Save
          </button>
        </div>
        <div className="p-4 flex flex-col items-center gap-10 pt-2">
          <div className="size-80 border border-inactive rounded-lg bg-[#282828] relative">
            <Image
              src="/icon.svg"
              alt="players"
              className="size-full "
              width={10}
              height={10}
            />
            <button className="absolute bottom-4 right-4 size-10 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-colors">
              <TbPhotoUp
                className="rounded-md text-white transition-colors"
                size={22}
              />
            </button>
          </div>
          <div className="w-full text-start px-6">
            <input
              className="text-xl font-semibold bg-transparent outline-none"
              placeholder="Team name"
            />
          </div>
          <div className="w-full h-fit gap-4 px-6 grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditTeam;

const PlayerCard = () => {
  return (
    <div className="border h-16 rounded-lg border-inactive flex items-center justify-start gap-4 px-2">
      <div className="relative w-fit cursor-pointer group border border-[#282828] hover:border-[#484848] rounded-xl flex items-center justify-center group flex-shrink-0 overflow-hidden">
        <Image
          src="/icon.svg"
          alt="image"
          width={10}
          height={10}
          className="size-10 bg-[#282828]"
        />
        <button className="absolute size-4 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-all opacity-0 group-hover:opacity-100">
          <TbPhotoUp
            className="rounded-md text-white transition-colors"
            size={22}
          />
        </button>
      </div>
      <input
        className="bg-transparent outline-none w-full"
        placeholder="Player Name"
      />
    </div>
  );
};
