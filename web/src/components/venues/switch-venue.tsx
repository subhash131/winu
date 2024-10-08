"use client";
import { addUrlParams } from "@/helpers/add-url-params";
import { useSearchParams } from "next/navigation";
import React from "react";

const SwitchVenue = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const fetchPastVenues = () => {
    addUrlParams({ param: "type", value: "PAST" });
  };
  const fetchActiveVenues = () => {
    addUrlParams({ param: "type", value: "active" });
  };

  return (
    <div className="w-48 h-10 bg-[#282828] flex items-center rounded-lg font-medium text-sm relative">
      <div
        className={`w-24 h-full backdrop-blur-lg rounded-lg bg-[#c6c7c9] opacity-20 absolute  bg-blend-difference transition-all duration-500 ${
          type == "PAST" ? "right-0" : "right-24"
        }`}
      />
      <button className="w-24 h-full text-center" onClick={fetchActiveVenues}>
        Active
      </button>
      <button className="w-24 h-full text-center" onClick={fetchPastVenues}>
        Past
      </button>
    </div>
  );
};

export default SwitchVenue;
