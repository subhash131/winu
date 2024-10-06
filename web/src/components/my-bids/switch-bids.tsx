"use client";
import React, { useEffect } from "react";
import { addUrlParams } from "@/helpers/add-url-params";
import { useSearchParams } from "next/navigation";

const SwitchBids = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const fetchClaimedBids = () => {
    addUrlParams({ param: "type", value: "all" });
  };
  const fetchUnclaimedBids = () => {
    addUrlParams({ param: "type", value: "unclaimed" });
  };

  return (
    <div className="w-48 h-10 bg-[#282828] flex items-center rounded-lg font-medium text-sm relative">
      <div
        className={`w-24 h-full backdrop-blur-lg rounded-lg bg-[#c6c7c9] opacity-20 absolute  bg-blend-difference transition-all duration-500 ${
          type === "all" ? "right-0" : "right-24"
        }`}
      />
      <button className="w-24 h-full text-center" onClick={fetchUnclaimedBids}>
        Unclaimed
      </button>
      <button className="w-24 h-full text-center" onClick={fetchClaimedBids}>
        All
      </button>
    </div>
  );
};

export default SwitchBids;
