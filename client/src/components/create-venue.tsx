"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TbPhotoUp } from "react-icons/tb";
import { DatePicker } from "./date-picket";
import TimePicker from "./time-picker";
import Teams from "./teams";
import ModalEditTeam from "./modal-edit-team";

const CreateVenue = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  return (
    <main className="size-full min-h-screen overflow-x-hidden text-white relative pt-14">
      <ModalEditTeam />
      <Overlay />
      <div className="size-full px-36 flex pt-20 gap-14 max-lg:px-10">
        <div className="w-[40%] max-lg:w-[30%] h-full flex-shrink-0">
          <div className="relative w-fit cursor-pointer group border border-[#282828] hover:border-[#484848] rounded-xl">
            <Image
              src="/icon.svg"
              alt="image"
              width={10}
              height={10}
              className="size-96 max-lg:size-80 max-md:size-60 bg-[#282828] backdrop-blur-lg rounded-xl"
            />
            <button className="absolute bottom-4 right-4 size-10 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-colors">
              <TbPhotoUp
                className="rounded-md text-white transition-colors"
                size={22}
              />
            </button>
            <input
              className="opacity-0 top-0 absolute z-10 size-full cursor-pointer"
              type="file"
            />
          </div>
        </div>
        <div className="size-full flex flex-col gap-4 ">
          <input
            ref={titleRef}
            className="text-4xl bg-transparent outline-none"
            placeholder="Venue name"
            autoFocus
          />
          <input
            ref={titleRef}
            className="text-xl bg-transparent outline-none"
            placeholder="Stream link"
          />
          <div className="h-28 w-fit backdrop-blur-lg bg-[rgba(40,40,40,0.6)] rounded-lg py-2 px-4 flex flex-col justify-between gap-2">
            <div className="w-full flex gap-4 items-center justify-between">
              <p>Start</p>
              <div className="flex items-center justify-center gap-4">
                <DatePicker />
                <TimePicker />
              </div>
            </div>
            <div className="w-full flex gap-4 items-center justify-between">
              <p>End</p>
              <div className="flex items-center justify-center gap-4">
                <DatePicker />
                <TimePicker />
              </div>
            </div>
          </div>
          <textarea
            name="description"
            className="bg-transparent focus:border-active font-normal outline-none border border-inactive resize-none rounded-lg p-4 text-xs h-32 transition-colors"
            placeholder="add description"
          ></textarea>
          <div className="w-full h-fit flex items-center justify-center">
            <button className="bg-white text-black font-semibold px-10 py-2 rounded-lg active:scale-95 transition-transform">
              Create venue
            </button>
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
