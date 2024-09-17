"use client";
import { updateVenueType } from "@/state-manager/features/switch-venues";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SwitchVenue = () => {
  const { type } = useSelector((state: RootState) => state.SwitchVenue);
  const dispatch = useDispatch();

  const updateSwitch = (type: "UPCOMING" | "PAST") => {
    dispatch(updateVenueType(type));
  };

  return (
    <div className="w-48 h-10 bg-[#282828] flex items-center rounded-lg font-medium text-sm relative">
      <div
        className={`w-24 h-full backdrop-blur-lg rounded-lg bg-[#c6c7c9] opacity-20 absolute  bg-blend-difference transition-all duration-500 ${
          type == "PAST" ? "right-0" : "right-24"
        }`}
      />
      <button
        className="w-24 h-full text-center"
        onClick={() => {
          updateSwitch("UPCOMING");
        }}
      >
        Upcoming
      </button>
      <button
        className="w-24 h-full text-center"
        onClick={() => {
          updateSwitch("PAST");
        }}
      >
        Past
      </button>
    </div>
  );
};

export default SwitchVenue;
